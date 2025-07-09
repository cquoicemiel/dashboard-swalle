"use client"

import Image from "next/image"
import { useState } from "react"
import SideBarTab from "./SideBarTab"

export default function SideBar(){

    const [state, toggleState] = useState(false)

    const tabs = ["🏠Accueil / Dashboard", "📊Visualisation 3D", "🧪Données expérimentales", "📂Analyses"]

    return(
        <>
        <div onClick={() => toggleState(!state)} className={`fixed top-2.5 left-2.5 z-10 h-8 w-8 p-1 blur-card cursor-pointer rounded-sm`}>
            <div className="relative h-full w-full">
                <Image src={`${state? "/close.svg" : "/menu.svg"}`} alt="Toggle navigation side menu" fill/>
            </div>
        </div>  
        <div className={`blur-card fixed top-[2.625rem] p-2.5 flex flex-col gap-2 rounded-sm left-0 bottom-0 z-20 w-[20dvw] ${state? "" : "hidden pointer-events-none"}`}>

        {tabs.map((e) => {
            return <SideBarTab key={e} name={e}/>
        })}


        </div>
        </>
    )
}