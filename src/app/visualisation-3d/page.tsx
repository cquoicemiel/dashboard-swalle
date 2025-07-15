import ThreeScene from "@/components/threejs/ThreeScene";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Visualisation en 3D"
}

export default function Visu3D(){

    return(
        // <div className="p-24 h-dvh w-full">
        <div className="h-screen w-screen">
            <ThreeScene/>
        </div>
    )
}