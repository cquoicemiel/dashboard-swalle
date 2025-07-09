"use client"

import ScatterPlot from "@/components/plotly/ScatterPlot";
import { useEffect, useState } from "react";


type ScatterPlotData = {
  X: number[];
  Y: number[];
  Z: number[];
  DZ: number[];
};


async function fetchPage(i: number): Promise<string> {
    const res = await fetch(`https://fujimuneit.fr/Swall-E/HOLO3/Niveau-${i}.txt`)
    !res.ok ? console.error(`Erreur de fetch (page ${i})`) : `Page ${i} fetched avec succès`
    const text = await res.text(); // text brut de la page 
    return text
}

function sliceData(text: string): string[]{
    const start = text.indexOf("X(px)");
    if (start == -1) throw new Error("Ligne non présente dans le texte mis en paramètre")
    const lines = text.slice(start).split("\n")
    return lines.slice(1); // enlever la ligne des en-tête
}

function parseData(lines: string[]) { // convertit le texte de coordonnées en dictionnaire {X: [], Y: [], Z: [], DZ: []}
  const result = {
    X: [] as number[],
    Y: [] as number[],
    Z: [] as number[],
    DZ: [] as number[],
  };

  for (const line of lines) {
    const parts = line.trim().split(/\s+/);
    if (parts.length >= 7) {
      result.X.push(parseFloat(parts[1])); 
      result.Y.push(parseFloat(parts[2]));
      result.Z.push(parseFloat(parts[3]));
      result.DZ.push(parseFloat(parts[6]));
    }
  }

  return result;
}




export default function ScatterPage(){
    const [data, setData] = useState<ScatterPlotData | null>(null);

    useEffect(() => {
        async function loadData() {
        const page = await fetchPage(1);
        const slicedData = sliceData(page);
        const parsed = parseData(slicedData);
        setData(parsed);
    }

    loadData();
  }, []);







    return(
        <div className="h-dvh flex justify-center items-center">
      {data ? (
        <ScatterPlot data={data} title={`Scatter Plot 3D - Niveau ${1}`} />
      ) : (
        <p>Chargement...</p>
      )}
    </div>
    )
}