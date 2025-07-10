"use client";
import { useRef, useEffect, useState } from "react";
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
  const [plotlyInitialized, setPlotlyInitialized] = useState(false);
  // FIX: Initialize with null and add null to the type
  const cameraRef = useRef<Partial<Camera> | null>(null);

  const trace: Partial<Plotly.Data> = {
    x: data.X,
    y: data.Y,
    z: data.Z,
    mode: "markers",
    type: "scatter3d",
    marker: {
      size: 6,
      color: data.DZ,
      colorscale: "Viridis",
      colorbar: {
        title: {
          text: "DZ(mm)",
        },
      },
    },
  };

  const initialLayout: Partial<Plotly.Layout> = {
    title: { text: title || "Scatter Plot 3D" },
    scene: {
      xaxis: { 
        title: { text: "X0 (mm)" }, 
        showgrid: true,
        gridcolor: 'rgb(200, 200, 200)',
        gridwidth: 2,
        // range: [-20, 25],
        // dtick: 10,        
      },
      yaxis: {
        title: { text: "Y0 (mm)" }, 
        showgrid: true,
        gridcolor: 'rgb(200, 200, 200)',
        gridwidth: 2,
        // range: [-45, 40],
        // dtick: 10, 
      },
      zaxis: {
        title: { text: "Z0 (mm)" }, 
        showgrid: true,
        gridcolor: 'rgb(200, 200, 200)',
        gridwidth: 2,
        // range: [-16, 6],
        // dtick: 10, 
      },
    },
  };

  useEffect(() => {
    async function initPlotly() {
      const Plotly = (await import("plotly.js-dist-min")).default;
      if (plotRef.current && !plotlyInitialized) {
        Plotly.newPlot(plotRef.current, [trace], initialLayout);
        setPlotlyInitialized(true);

        const plotDiv = plotRef.current as unknown as Plotly.PlotlyHTMLElement;

        plotDiv.on('plotly_relayout', (eventData: PlotRelayoutEvent) => {
          const typedEventData = eventData as any;
          if (typedEventData['scene.camera']) {
            // Assign the camera object
            cameraRef.current = typedEventData['scene.camera'] as Camera;
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
  }, [plotlyInitialized, trace, initialLayout]);

  useEffect(() => {
    async function updatePlot() {
      const Plotly = (await import("plotly.js-dist-min")).default;
      if (plotRef.current && plotlyInitialized) {
        const currentPlotDiv = plotRef.current as unknown as Plotly.PlotlyHTMLElement;
        const currentLayout = { ...initialLayout };

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
  }, [data, plotlyInitialized, trace, initialLayout]);

  return <div ref={plotRef} className="w-full h-full" style={{ minHeight: "200px" }} />;
}