

import Nav from "./nav"
import SideBar from "@/app/sideBar"


export default function Header (){

    return(
        <div className="w-full flex justify-between relative">
            <h1 className="text-3xl font-bold font-pirata">
                    Ibrahim
                </h1>
            <Nav/>
            <SideBar/>
        </div>
    )
}