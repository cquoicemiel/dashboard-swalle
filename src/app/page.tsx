import IntegrationCard from "@/components/home/IntegrationCard";
import Grid from "@/components/plotly/Grid";
import ThreeScene from "@/components/threejs/ThreeScene";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="h-dvh w-full flex border-b border-foreground">
      <div className="flex-[5] border-foreground relative">
        <h1 className="font-bold text-2xl fixed top-2.5 left-[3.875rem]">Dashboard Swall-E</h1>
        <ThreeScene/>
      </div>
      <div className="flex-[3] border-l border-foreground box-border overflow-y-auto flex flex-col">
        <h2 className="text-xl font-bold pl-4 pt-2.5">Intégrations dynamiques</h2>
        <div className=" flex-1 overflow-y-auto">
          <Grid r={3} c={2}>
            <IntegrationCard path={"/niveaux-bolus"} src={"/scatter-thumbnail-black.webp"} title={"Déplacement du Bolus à travers le pharinx"} alt={"Image d'illustration de la page d'intégration de visualisation de données par graphique"}/>
            <IntegrationCard path={"/photos-dic"} src={"/scatter-thumbnail-black.webp"} title={"Photos mesures DIC"} alt={"Image d'illustration de la page d'intégration des photos prise lors des la prise des images DIC"}/>

            <div className="bg-green-100 dark:bg-green-900 p-4 flex items-center justify-center">Intégration 3</div>
            <div className="bg-yellow-100 dark:bg-yellow-900 p-4 flex items-center justify-center">Intégration 4</div>
            <div className="bg-purple-100 dark:bg-purple-900 p-4 flex items-center justify-center">Intégration 5</div>
            <div className="bg-pink-100 dark:bg-pink-900 p-4 flex items-center justify-center">Intégration 6</div>
            </Grid>
        </div>
        
      </div>
    </div>
    <div className="min-h-dvh">

    </div>
    
    
    </>
  );
}
