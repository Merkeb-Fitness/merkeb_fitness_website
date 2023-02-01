
import { useEffect, useState } from "react";
// export interface Props {}
// import "@fontsource/roboto";


const Navbar = () => {
    const [windowWidth, setWindowWidth] = useState<Number>();
    console.log("screen width", windowWidth);

    useEffect(()=>{
        setWindowWidth(window.innerWidth);
    },[])

    return (
        <>
           { windowWidth &&
           windowWidth >= 768 ? (
                <nav className="pl-[100px] pr-[162px] h-full flex items-center bg-primary shadow-2xl shadow-gray-200 ">
                    <ul className="flex justify-between w-full ">
                        <li>
                            <a href="/"><img src="/assets/merkeb-fitness-logo.svg" alt="Merkeb Fitness Logo" /></a>
                        </li>
                    <li className="flex space-x-[25px] font-Rob font-medium text-base">
                        <a href="/menu">Menu</a>
                        <a href="/#">Contact</a>
                    </li>
                    </ul>
                </nav>
            ) : (
                <nav className="flex justify-between p-4">
                    <div>
                        <img src="/assets/merkeb-fitness-logo-mobile.png" />
                    </div>
                    <div>
                        <img src="/assets/drawer-icon.svg" />
                    </div>
                </nav>
            )
            }
        </>
    )
}
export default Navbar;
