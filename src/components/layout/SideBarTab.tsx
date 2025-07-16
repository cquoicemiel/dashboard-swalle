import Link from "next/link"

type SideBarTabProps = {
    name: string,
    url: string,
    setter: (value: boolean) => void
}


export default function SideBarTab({name, url, setter}: SideBarTabProps){
    return(
        <Link href={url} onClick={() => setter(false)} passHref>
            <div className="blur-card bg-white rounded-sm w-full min-h-8 px-2.5 py-1.5 flex justify-start items-center cursor-pointer transition-all duration-75 ease-in-out select-none">
                <p>{name}</p>
            </div>
        </Link>
        
    )
}