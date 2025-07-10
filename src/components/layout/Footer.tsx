import Image from "next/image";
import Link from "next/link";
export default function Footer(){
    return(
        <footer className={"relative border-black border-t h-24 w-full flex p-2"}>
            <div className="flex-[1] relative flex flex-col items-start justify-center gap-1">
                <p className="block h-full justify-self-center">Developed by Fujimune IT & Noé Nizou</p>
                <div className="flex items-center gap-2.5 h-full">
                    <p><b>Sponsored by</b></p>
                    <div className="">
                    <Image
                        src={"/nestle-health-science.webp"}
                        alt="Logo de Nestlé Health Science"
                        width={120}
                        height={30} 
                        className="h-full w-auto" 
                    />
                    </div>
                </div>
            </div>



            <div className="flex-[1] flex justify-center items-center">
                <div>
                    <Image src={"/fujimuneit.webp"} alt="Logo de Fujimune IT" width={220} height={59} className="h-full w-auto invert-100"/>
                </div>
            </div>




            <div className="flex-[1] flex flex-col items-end justify-center h-full p-2">

                <div className="flex items-center gap-x-4">
                    <Link href="https://threejs.org" target="_blank" rel="noopener noreferrer">
                        <Image src="/threejs.webp" alt="Logo de TailwindCSS" width={120} height={120} className="h-6 w-auto mb-2"/>
                    </Link>
                    <Link href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
                        <Image src="/tailwind.svg" alt="Logo de TailwindCSS" width={120} height={72} className="h-4 w-auto mb-2"/>
                    </Link>
                    
                    
                </div>

                

                <div className="flex items-center gap-x-4">
                    <Link href="https://plotly.com/javascript/" target="_blank" rel="noopener noreferrer">
                        <Image src="/plotly.webp" alt="Logo de Plotly.js" width={120} height={72} className="h-5 w-auto"/>
                    </Link>
                    <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
                        <Image src="/nextjs.webp" alt="Logo de Next.js" width={120} height={72} className="h-4 w-auto"/>
                    </Link>
                </div>
            </div>
        </footer>
    )
    
}