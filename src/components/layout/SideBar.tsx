"use client"

import Image from "next/image"
import { useState } from "react"
import SideBarTab from "./SideBarTab"

export default function SideBar(){

    const [state, toggleState] = useState(false)

    const tabs = [
        {
            name: "🏠 Accueil / Dashboard",
            link: "/"
        },
        {
            name: "📊 Visualisation 3D",
            link: "/visualisation-3d"
        },
        {
            name: "🧪 Données expérimentales",
            link: "/scatter"
        },
        {
            name: "📂 Analyses",
            link: "/"
        }
    ]


    return(
        <>
        <div onClick={() => toggleState(!state)} className={`fixed top-2.5 left-2.5 z-10 h-8 w-8 p-1 blur-card-white cursor-pointer rounded-sm`}>
            <div className="relative h-full w-full">
                <Image src={`${state? "/close.svg" : "/menu.svg"}`} alt="Toggle navigation side menu" fill/>
            </div>
        </div>  
        <div className={`blur-card fixed top-[3.275rem] p-2.5 flex flex-col gap-2 rounded-sm left-0 bottom-0 z-20 w-[15vw] ${state? "" : "hidden pointer-events-none"}`}>

        {tabs.map((e) => {
            return (e.link? <SideBarTab key={e.name} name={e.name} url={e.link} toggle={toggleState}/>
            : null)
        })}


        </div>
        </>
    )
}