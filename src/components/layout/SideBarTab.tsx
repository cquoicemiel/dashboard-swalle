import Link from "next/link"

type SideBarTabProps = {
    name: string,
    url: string,
    toggle: (value: boolean) => void
}


export default function SideBarTab({name, url, toggle}: SideBarTabProps){
    return(
        <Link href={url} onClick={() => toggle(false)} passHref>
            <div className="blur-card bg-white rounded-sm w-full min-h-8 p-1.5 flex justify-start items-center cursor-pointer transition-all duration-75 ease-in-out select-none">
                <p>{name}</p>
            </div>
        </Link>
        
    )
}