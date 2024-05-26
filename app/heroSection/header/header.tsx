

import Nav from "./nav"
import SideBar from "@/app/sideBar"


export default function Header (){

    return(
        <div className="w-full flex justify-between relative">
            <h1>
                    Ibrahim
                </h1>
            <Nav/>
            <SideBar/>
        </div>
    )
}