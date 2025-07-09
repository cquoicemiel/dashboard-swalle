
type SideBarTabProps = {
    name: string
}


export default function SideBarTab({name}: SideBarTabProps){
    return(
        <div className="blur-card-no-shadow bg-white rounded-sm w-full h-8 p-2.5 flex justify-start items-center cursor-pointer transition-all duration-75 ease-in-out hover:text-red-400">
            <p>{name}</p>
        </div>
    )
}