"use client";

import { useRef, useEffect } from "react";

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

  const trace: Partial<Plotly.Data> = {
    x: data.X,
    y: data.Y,
    z: data.Z,
    mode: "markers",
    type: "scatter3d",
    marker: {
      size: 3,
      color: data.DZ,
      colorscale: "Viridis",
      colorbar: {
        title: {
          text: "DZ(mm)",
        },
      },
    },
  };

  const layout: Partial<Plotly.Layout> = {
    title: { text: title || "Scatter Plot 3D" },
    scene: {
      xaxis: { title: { text: "X0 (mm)" } },
      yaxis: { title: { text: "Y0 (mm)" } },
      zaxis: { title: { text: "Z0 (mm)" } },
    },
  };

  useEffect(() => {
    async function drawPlot() {
      const Plotly = (await import("plotly.js-dist-min")).default;
      if (plotRef.current) {
        Plotly.react(plotRef.current, [trace], layout);
      }
    }
    drawPlot();
  }, [data]);

  return <div ref={plotRef} className="w-full h-full" style={{ minHeight: "200px" }} />;
}
