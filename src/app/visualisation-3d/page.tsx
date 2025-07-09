"use client"

import ThreeScene from "@/components/threejs/ThreeScene";
import { useEffect } from "react";

export default function Visu3D(){

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
        document.body.style.overflow = "auto";
        };
    }, []);

    return(
        // <div className="p-24 h-dvh w-full">
        <div className="h-screen w-screen">
            <ThreeScene/>
        </div>
    )
}