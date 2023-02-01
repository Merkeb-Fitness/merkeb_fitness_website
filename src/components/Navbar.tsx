
import { useEffect, useState } from "react";
// export interface Props {}
// import "@fontsource/roboto";
import { Drawer } from 'antd';
import "../styles/navbar.css"


const Navbar = () => {
    const [windowWidth, setWindowWidth] = useState<Number>();
    const [open, setOpen] = useState(false);
    console.log("screen width", windowWidth);

    useEffect(()=>{
        setWindowWidth(window.innerWidth);
    },[])

    const showDrawer = () => {
        console.log("clicked")
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

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
                <>
                    <nav className="flex justify-between p-4">
                        <a href="/"><img src="/assets/merkeb-fitness-logo-mobile.png" /></a>
                        <img onClick={showDrawer} src="/assets/drawer-icon.svg" />
                    </nav>
                    <Drawer  placement="right" onClose={onClose} open={open}>
                        <div className="flex flex-col justify-center px-10 mb-44 h-full font-Rob font-medium text-4xl leading-[42px] space-y-12">
                            <a href="/">Home</a>
                            <a href="/menu">Menu</a>
                            <a href="/">Contact</a>
                        </div>
                    </Drawer>
                </>
            )
            }
        </>
    )
}
export default Navbar;
