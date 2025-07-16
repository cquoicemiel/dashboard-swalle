"use client";
import { useRef, useEffect, useState, useMemo} from "react";
import Plotly, { Camera, PlotRelayoutEvent } from "plotly.js-dist-min";

type ScatterPlotData = {
  X: number[];
  Y: number[];
  Z: number[];
  DZ: number[];
};

type ScatterPlotProps = {
  data: ScatterPlotData;
  title?: string;
};

export default function ScatterPlot({ data, title }: ScatterPlotProps) {

  const plotRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<Partial<Camera> | null>(null);

  const [plotlyInitialized, setPlotlyInitialized] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const checkTheme = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setTheme(isDarkMode ? 'dark' : 'light');
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);


  const trace = useMemo((): Partial<Plotly.Data> => {
    const baseTrace: Partial<Plotly.Data> = {
      x: data.X,
      y: data.Y,
      z: data.Z,
      mode: 'markers',
      type: 'scatter3d',
      marker: {
        size: 6,
        color: data.DZ,
        colorscale: 'Viridis',
        colorbar: {
          title: {
            text: 'DZ(mm)',
          },
        },
      },
    };

    if (theme === 'dark') {
      return {
        ...baseTrace,
        marker: {
          ...baseTrace.marker,
          colorbar: {
            ...(baseTrace.marker as Partial<Plotly.ScatterMarker>)?.colorbar,   // On modifie la colorbar à droite (DZ (mm))
            title: { ...(baseTrace.marker as Partial<Plotly.ScatterMarker>)?.colorbar?.title, font: { color: '#e5e7eb' } },
            tickfont: { color: '#d1d5db' }, 
          },
        },
      };
    }

    return baseTrace; // Retourne la trace de base pour le mode clair
  }, [data, theme]);


  const layout = useMemo((): Partial<Plotly.Layout> => {
    const baseLayout: Partial<Plotly.Layout> = {
      title: { text: title || "Scatter Plot 3D" },
      scene: {
        xaxis: { title: { text: "X0 (mm)" } },
        yaxis: { title: { text: "Y0 (mm)" } },
        zaxis: { title: { text: "Z0 (mm)" } },
      },
    };

    if (theme === 'dark') {
      return {
        ...baseLayout,
        template: 'plotly_dark' as Plotly.Layout['template'], // Applique le template sombre !
        paper_bgcolor: 'rgba(0,0,0,0)', // Fond extérieur transparent
        plot_bgcolor: 'rgba(0,0,0,0)', // Fond du graphique transparent
        title: { ...baseLayout.title, font: { color: '#e5e7eb' } },
        scene: {
          ...baseLayout.scene,
          xaxis: { ...baseLayout.scene?.xaxis, gridcolor: '#4b5563', title: {text: "X0 (mm)", font: { color: '#e5e7eb' } }, tickfont: {color: '#d1d5db'} },
          yaxis: { ...baseLayout.scene?.yaxis, gridcolor: '#4b5563', title: {text: "Y0 (mm)", font: { color: '#e5e7eb' } }, tickfont: {color: '#d1d5db'} },
          zaxis: { ...baseLayout.scene?.zaxis, gridcolor: '#4b5563', title: {text: "Z0 (mm)", font: { color: '#e5e7eb' } }, tickfont: {color: '#d1d5db'} },
        }
      };
    }

    // Layout pour le thème clair (votre configuration d'origine)
    return {
      ...baseLayout,
      scene: {
        ...baseLayout.scene,
        xaxis: { ...baseLayout.scene?.xaxis, showgrid: true, gridcolor: 'rgb(200, 200, 200)', gridwidth: 2 },
        yaxis: { ...baseLayout.scene?.yaxis, showgrid: true, gridcolor: 'rgb(200, 200, 200)', gridwidth: 2 },
        zaxis: { ...baseLayout.scene?.zaxis, showgrid: true, gridcolor: 'rgb(200, 200, 200)', gridwidth: 2 },
      }
    };
  }, [theme, title]); // Se recalcule si le thème ou le titre change

  

  useEffect(() => {
    async function initPlotly() {
      const Plotly = (await import("plotly.js-dist-min")).default;
      if (plotRef.current && !plotlyInitialized) {
        Plotly.newPlot(plotRef.current, [trace], layout);
        setPlotlyInitialized(true);

        const plotDiv = plotRef.current as unknown as Plotly.PlotlyHTMLElement;

        plotDiv.on('plotly_relayout', (eventData: PlotRelayoutEvent) => {
        if ('scene.camera' in eventData) {
          cameraRef.current = eventData['scene.camera'] as Camera;
        }
      });

        return () => {
          if (plotDiv) {
            Plotly.purge(plotDiv);
          }
        };
      }
    }
    initPlotly();
  }, [plotlyInitialized, trace, layout]);

  useEffect(() => {
    async function updatePlot() {
      const Plotly = (await import("plotly.js-dist-min")).default;
      if (plotRef.current && plotlyInitialized) {
        const currentPlotDiv = plotRef.current as unknown as Plotly.PlotlyHTMLElement;
        const currentLayout = { ...layout };

        // FIX: Check if cameraRef.current is not null before using it
        if (cameraRef.current) {
          currentLayout.scene = {
            ...currentLayout.scene,
            camera: cameraRef.current,
          };
        }

        Plotly.react(currentPlotDiv, [trace], currentLayout);
      }
    }
    updatePlot();
  }, [data, plotlyInitialized, trace, layout]);

  return <div ref={plotRef} className="w-full h-full" style={{ minHeight: "200px" }} />;
}