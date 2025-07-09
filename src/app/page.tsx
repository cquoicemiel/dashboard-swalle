import Plot from "@/components/plotly/Plot";
import Grid from "@/components/plotly/Grid";
import ThreeScene from "@/components/threejs/ThreeScene";

export default function Home() {
  return (
    <>
    <div className="min-h-dvh w-full flex border-b border-black">
      <div className="flex-[5] border-black relative">
        <h1 className="font-bold text-2xl fixed top-2.5 left-[3.875rem]">Dashboard Swall-E</h1>
        <ThreeScene/>
      </div>
      <div className="flex-[3] border-l border-black box-border overflow-y-auto flex flex-col">
        <h2 className="text-xl font-bold p-2.5">Données expérimentales</h2>
        <div className=" flex-1 overflow-y-auto">
          <Grid r={3} c={2}>
            <div className="bg-blue-100 p-4 flex items-center justify-center">Intégration 1</div>
            <div className="bg-red-100 p-4 flex items-center justify-center">Intégration 2</div>
            <div className="bg-green-100 p-4 flex items-center justify-center">Intégration 3</div>
            <div className="bg-yellow-100 p-4 flex items-center justify-center">Intégration 4</div>
            <div className="bg-purple-100 p-4 flex items-center justify-center">Intégration 5</div>
            <div className="bg-pink-100 p-4 flex items-center justify-center">Intégration 6</div>
            </Grid>
        </div>
        
      </div>
    </div>
    <div className="min-h-dvh">

    </div>
    
    
    </>
  );
}
