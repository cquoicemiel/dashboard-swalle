"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function PhotosDIC(){



    const paths = Array.from({ length: 26 }, (_, i) => `/DIC_setup/photo_DIC_setup${i + 0}.jpg`);

    const [activePath, setActivePath] = useState<string | null>(null)
    const [desc, setDesc] = useState<[]>([])

    function toggleActivePath(path: string){
      if (activePath === path ) {setActivePath("")}
      else { setActivePath(path)}
    }
    // fetch des descriptions photos
    useEffect(() => {
       if (window.innerWidth < 640) {document.body.style.overflow = "hidden";}
      const fetchDescriptions = async () => {
        try {
          const res = await fetch("/descriptions-photos.json");
          const data = await res.json();
          setDesc(data);
        } catch (error) {
          console.error("Erreur de chargement des descriptions:", error);
        }
      };

      fetchDescriptions();

      return () => {
        // on remet le scroll quand on quitte cette page
        document.body.style.overflow = "auto";
      };

    }, []);


    return(
        <div className="h-[100svh] w-full flex flex-col sm:flex-row pt-[3.25rem]">
            <h1 className="absolute top-2.5 left-[50%] translate-x-[-50%] text-xl text-center font-bold">Photos setup DIC</h1>
            <div className="flex-[2] h-full border-foreground border-t overflow-y-auto will-change-scroll">
              <div
                className="grid gap-8 p-4"
                style={{
                  gridTemplateColumns: `repeat(4, minmax(0, 1fr))`,
                }}
              >
                {paths.map((path) => (
                  <div onClick={() => toggleActivePath(path)} key={path} className="group relative w-full aspect-square rounded overflow-hidden cursor-pointer select-none">
                    <Image className={`object-cover transition-all duration-200 ease-in-out ${activePath === path ? "scale-110 opacity-70": ""}  group-hover:scale-110 group-hover:opacity-80`} src={path} fill alt="Photo prise lors de la mise en place du setup pour la DIC"/>
                    <div className="absolute inset-0 flex items-center justify-center ">
                        <div className={`${activePath === path ? "visible" : "invisible"} bg-background w-[2.5rem] h-[2.5rem]  p-1 shadow-lg rounded-md pointer-events-none select-none group-hover:visible`}>
                          <Image className={`dark:invert`} width={40} height={40} src={activePath === path ? "/eye.png": "/closed_eye.png"} alt={"Icone d'oeil, cliquer pour visualiser l'image en agrandi"}/>
                        </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
            <div className="flex-[2] sm:flex-[1] top-[3.25rem] h-full blur-bg rounded-sm pointer-events-none whitespace-pre-line p-4 flex flex-col gap-8">
                <div className="flex-[2] relative">
                  {activePath? <Image src={activePath} alt="Image affichée en détails" fill className="object-contain"/> : <div className="text-center h-full w-full flex items-center justify-center">Cliquez sur une image pour l&apos;afficher ici en grand</div>}
                </div>
                <div className="flex-[1] relative flex items-start">
                  <p>{activePath ? desc[parseInt(activePath.split("photo_DIC_setup")[1], 10)] : null}</p>
                </div>
            </div>
            
        </div>
    )

}