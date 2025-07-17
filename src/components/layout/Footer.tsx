import Image from "next/image";
import Link from "next/link";


export default function Footer(){
    return(
        <footer className={"relative border-foreground border-t h-24 w-full flex py-2 px-4 gap-4 sm:gap-0"}>
            <div className="flex-[1] relative flex flex-col items-start justify-center gap-1">
                <div className="flex flex-col py-4 items-left justify-center gap-2.5 h-full bg">
                                    
                    
                    <Link className="h-[80%]" href="https://unistra.fr" target="_blank" rel="noopener norefferer">
                    <Image src={"/unistra.png"} alt="Logo de l'Université de Strasbourg" width={120} height={30} className="h-full w-auto dark:invert-100 dark:grayscale"/>
                    </Link>
                    
                    <Link className="h-[80%]" href="https://www.inserm.fr/" target="_blank" rel="noopener noreferrer">
                        <Image src={"/inserm.png"} alt="Logo de l'INSERM" width={120} height={30} className="h-full w-auto dark:invert dark:grayscale" />
                    </Link> 
                </div>
            </div>

            <div className="flex-[1] justify-center items-center hidden sm:flex">

            </div>

            <div className="flex-[1] flex justify-center items-center">
                <Link href="https://fujimuneit.fr" target="_blank" rel="noopener norefferer">
                    <Image src={"/fujimuneit.webp"} alt="Logo de Fujimune IT" width={220} height={59} className="h-full w-auto invert-100 dark:invert-0"/>
                </Link>
            </div>
            
            <div className="flex-[1] flex flex-col justify-center items-end text-xs sm:text-sm">
                <p className="">Noé Nizou</p>
                <a href="mailto:noe.nizou@gmail.com" className="underline">Contact</a>
                <p className="text-gray-600 dark:text-gray-400 italic text-right">Site web en cours de développement</p>
            </div>



            <div className="flex-[1] flex-col items-end justify-center h-full p-2 hidden sm:flex">

                <div className="flex items-center gap-x-4">
                    <Link href="https://threejs.org" target="_blank" rel="noopener noreferrer">
                        <Image src="/threejs.webp" alt="Logo de TailwindCSS" width={120} height={120} className="h-6 w-auto mb-2 dark:invert-100 "/>
                    </Link>
                    <Link href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
                        <Image src="/tailwind.svg" alt="Logo de TailwindCSS" width={120} height={72} className="h-4 w-auto mb-2 dark:invert-100 dark:grayscale"/>
                    </Link>
                    
                    
                </div>

                

                <div className="flex items-center gap-x-4">
                    <Link href="https://plotly.com/javascript/" target="_blank" rel="noopener noreferrer">
                        <Image src="/plotly.webp" alt="Logo de Plotly.js" width={120} height={72} className="h-5 w-auto dark:invert-100 dark:grayscale"/>
                    </Link>
                    <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
                        <Image src="/nextjs.webp" alt="Logo de Next.js" width={120} height={72} className="h-4 w-auto dark:invert-100"/>
                    </Link>
                </div>
            </div>
        </footer>
    )
    
}