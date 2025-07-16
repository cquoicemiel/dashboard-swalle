import Link from "next/link";
import Image from "next/image";


type IntegrationCardProps = {
    path: string,
    src: string,
    title: string,
    alt: string,
}


export default function IntegrationCard({path, src, title, alt}: IntegrationCardProps){

    return(
        <Link href={path} target="_self" className="blur-integration flex items-center justify-center relative rounded-sm  overflow-hidden">
              <div className="h-full">
                <Image  src={src} height={600} width={600} alt={alt} className="hidden w-full h-full transition-transform duration-200 ease-in-out hover:scale-110 select-none"/>
              </div>
              <div className="absolute bottom-4 w-full h-[25%] flex items-center justify-center px-4 md:text-sm">
                <p className=" text-center">{title}</p>
              </div>
        </Link>
    )



}