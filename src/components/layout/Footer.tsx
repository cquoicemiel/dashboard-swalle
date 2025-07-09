import Image from "next/image";
import Link from "next/link";
export default function Footer(){
    return(
        <footer className={"relative border-black border-t h-24 w-full flex p-2"}>
            <div className="flex-[1] relative flex justify-start items-center">
                <p className="block">© Fujimune IT & Noé Nizou</p>
            </div>
            <div className="flex-[1] bg-cyan-100 relative">

            </div>
            <div className="flex-[1] flex flex-col bg-fuchsia-100 relative">
                {/* <div className="bg-blue-300 flex-[1] relative">
                    <div className="h-full w-[70%] bg-amber-300 relative">
                        <Image src={"/tailwind.svg"} fill alt="idjqiddjqdq"/>
                    </div>
                </div>
                <div className="bg-green-300 flex-[1]">

                </div> */}
                
                    {/* <Link href="https://plotly.com/javascript/" className="relative w-full h-full bg-yellow-300">
                        <Image
                        src="/plotly.webp"
                        alt="Logo de Plotly.js, qui a été utilisé pour la conception du dashboard"
                        fill
                        className="object-contain"
                        />
                    </Link>
                    <Link href="https://tailwindcss.com" className="relative w-full h-full bg-yellow-300">
                        <Image
                        src="/next.svg"
                        alt="Logo de Next.js, qui a été utilisé pour la conception du dashboard"
                        fill
                        className="object-contain"
                        />
                    </Link>
                    <Link href="https://tailwindcss.com" className="relative w-full h-full bg-yellow-300">
                        <Image
                        src="/tailwind.svg"
                        alt="Logo de TailwindCSS, qui a été utilisé pour la conception du dashboard"
                        fill
                        className="object-contain"
                        />
                    </Link> */}
            </div>
        </footer>
    )
    
}