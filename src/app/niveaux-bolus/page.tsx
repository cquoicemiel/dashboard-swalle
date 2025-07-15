import ScatterWithLevels from "@/components/plotly/ScatterWithLevels";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visualisation des niveaux de Bolus"
}

type ScatterPlotData = {
  X: number[];
  Y: number[];
  Z: number[];
  DZ: number[];
};

async function fetchPage(i: number): Promise<string> {
  const res = await fetch(`https://fujimuneit.fr/Swall-E/HOLO3/Niveau-${i}.txt`, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      Accept: "text/plain",
    },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Erreur fetch Niveau-${i}`);
  return res.text();
}

function sliceData(text: string): string[] {
  const start = text.indexOf("X(px)");
  if (start === -1) throw new Error("Ligne non trouvée");
  return text.slice(start).split("\n").slice(1);
}

function parseData(lines: string[]): ScatterPlotData {
  const result = { X: [], Y: [], Z: [], DZ: [] } as ScatterPlotData;
  for (const line of lines) {
    const parts = line.trim().split(/\s+/);
    if (parts.length >= 8) {
      result.X.push(parseFloat(parts[2])); // X0(mm)
      result.Y.push(parseFloat(parts[3])); // Y0(mm)
      result.Z.push(parseFloat(parts[4])); // Z0(mm)
      result.DZ.push(parseFloat(parts[7])); // DZ(mm)
    }
  }
  return result;
}

export default async function ScatterPage() {
  const dataList: ScatterPlotData[] = [];

  for (let i = 1; i <= 18; i++) {
    const text = await fetchPage(i);
    const parsed = parseData(sliceData(text));
    dataList.push(parsed);
  }

  return (
    <div className="h-dvh flex justify-center items-center">
      <ScatterWithLevels data={dataList} />
      <div className="fixed top-[3.250rem] bottom-2.5 left-2.5 w-[25%] blur-bg rounded-sm pointer-events-none whitespace-pre-line p-4">

        Cette visualisation 3D représente la modélisation du mouvement du bolus au sein du dispositif Swall‑E, un simulateur robotique de la déglutition humaine *in vitro*.
        <br/>
        <br/>
        &nbsp;🔹 Les données proviennent de 18 niveaux successifs capturés lors des expérimentations, chacun correspondant à une étape temporelle différente du passage du bolus dans l’oropharynx artificiel.  
        <br/>
        <br/>
        &nbsp;🔹 Les axes représentent les coordonnées spatiales (X, Y, Z en mm) au sein du modèle 3D, et la couleur des points indique les variations de déplacement local (ΔZ).
        <br/>
        <br/>
        📈 Cette simulation permet d’observer :  
        <br/>
        &nbsp;- La dynamique du bolus dans la cavité orale simulée ;  
        <br/>
        &nbsp;- Les zones de compression et de relâchement dans l’espace ;  
        <br/>
        &nbsp;- L’évolution temporelle de la déglutition à travers un slider interactif.
        <br/>
        <br/>
        Ce type de modélisation est utilisé pour analyser l’efficacité du dispositif et comparer le comportement des liquides épaissis avec des profils rhéologiques différents.
      </div>
    </div>
  );
}
