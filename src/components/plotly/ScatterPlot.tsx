"use client";

// @ts-ignore
import Plotly from "plotly.js-dist-min";
import { useRef, useEffect } from "react";

type ScatterPlotData = {
  X: number[];
  Y: number[];
  Z: number[];
  DZ: number[];
};

type ScatterPlotProps = {
    data: ScatterPlotData,
    title?: string
}

export default function ScatterPlot({data, title}: ScatterPlotProps){

    const plotRef = useRef<HTMLDivElement>(null);

    

    const trace = {
        x: data.X,
        y: data.Y,
        z: data.Z,
        mode: "markers",
        type: "scatter3d",
        marker: {
            size: 3,
            color: data.DZ,
            colorscale: "Viridis",
            colorbar: { title: "DZ(mm)" }
        },
        };

    const layout = {
        title: "Scatter Plot 3D",
        scene: {
            xaxis: { title: "X0 (mm)" },
            yaxis: { title: "Y0 (mm)" },
            zaxis: { title: "Z0 (mm)" },
        }
    };

    useEffect(() => {
        if (plotRef.current) {
            Plotly.newPlot(plotRef.current, [trace], layout);
        }
    }, [data]);

    return (
        <div ref={plotRef} className="w-full h-full" style={{ minHeight: "200px" }} />
    );
}