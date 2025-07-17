"use client"

import Image from "next/image"
import { useState} from "react"
import SideBarTab from "./SideBarTab"



export default function SideBar(){

    // const ref = useRef<HTMLDivElement>(null);
    
    const [isOpen, setIsOpen] = useState<boolean>(false)


    // useEffect(() => {
    //     const handleOutsideClick = (event: any) => {
    //         if(
    //             isOpen &&                             // si ouvert
    //             ref.current &&                         // si ref existe
    //             !ref.current.contains(event.target as Node) && // si click dehors
    //             !(event.target as HTMLElement).closest(".sidebar-toggle") // pas le bouton
    //         )
    //             {
    //             setIsOpen(false)
    //         }
    //     }


    //     document.addEventListener("mousedown", handleOutsideClick, { capture: true });

    //     return () => {
    //         document.removeEventListener("mousedown", handleOutsideClick)
    //     }
    // }, [ref])
    

    const tabs = [
        {
            name: "Accueil",
            link: "/"
        },
        {
            name: "Visualisation 3D",
            link: "/visualisation-3d"
        },
        {
            name: "Déplacement du bolus dans le pharynx",
            link: "/niveaux-bolus"
        },
        {
          name: "Photos des mesures DIC",
          link: "/photos-dic" 
        }
    ]


    return(
        <>
        <div onClick={() => setIsOpen(!isOpen)} className="sidebar-toggle fixed top-2.5 left-2.5 z-30 h-8 w-8 p-1.5 blur-card cursor-pointer rounded-sm">
            <div className="relative h-full w-full">
                <Image src={`${isOpen? "/close.svg" : "/menu.svg"}`} alt="Bouton d'activation du menu latéral de navigation" fill className="dark:invert select-none"/>
            </div>
        </div>  
        <div className={`blur-bg fixed p-2.5 pt-[3.275rem]  flex flex-col gap-2 rounded-sm inset-0 z-20 w-full sm:w-[15vw] sm:left-2.5 sm:right-auto sm:bottom-auto sm:top-[3.275rem] sm:p-2.5  ${isOpen? "" : "hidden pointer-events-none"}`}>

        {tabs.map((e) => {
            return (e.link? <SideBarTab key={e.name} name={e.name} url={e.link} setter={setIsOpen}/>
            : null)
        })}


        </div>
        </>
    )
}