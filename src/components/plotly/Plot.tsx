"use client";

import React, {useEffect, useRef} from "react";
import Plotly from "plotly.js-dist-min";

type PlotProps = {
    type: "scatter" | "line" | "bar",
    data: {x: number[]; y: number[]}
};


export default function Plot({type, data}: PlotProps){
    const plotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    if (!plotRef.current) return;

    // Choisir le type de trace en fonction du paramètre
    let plotType = "scatter";
    let mode: "lines" | "markers" | "lines+markers" = "markers";

    if (type === "scatter") {
      plotType = "scatter";
      mode = "markers";
    } else if (type === "line") {
      plotType = "scatter";
      mode = "lines";
    } else if (type === "bar") {
      plotType = "bar";
    }

    const trace: Partial<Plotly.PlotData> = {
      x: data.x,
      y: data.y,
      type: plotType as Plotly.PlotType,
      mode: mode,
      marker: { color: "blue" },
    };

    const layout: Partial<Plotly.Layout> = {
      title: {
        text: `Type: ${type}`,
      },
      margin: { t: 30, l: 30, r: 10, b: 30 },
      autosize: true,
    };

    Plotly.newPlot(plotRef.current, [trace], layout, { responsive: true });

    return () => {
      Plotly.purge(plotRef.current!);
    };
  }, [type, data]);

  return (
    <div ref={plotRef} className="w-full h-full" style={{ minHeight: "200px" }} />
  );
}