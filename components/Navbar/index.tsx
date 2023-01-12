import React, {Fragment, useEffect, useRef, useState} from 'react';
import {Instagram, Twitter, Facebook, Youtube} from "react-feather"
import Link from "next/link"
import navigation from "configs/navigation";
import NavbarStyle from "./Navbar.style";
import Gsap from "utils/Gsap";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/20/solid";


type MenuItem = {
    name:string;
    link:string;
}
const menuItems:MenuItem[] = [{
    name:"Home",
    link:"#"
},{
    name:"About",
    link:"#"
},{
    name:"Contact",
    link:"#"
},]

const socialLinks = [{
    icon:Facebook,
    link:"#"
},{
    icon:Twitter,
    link:"#"
},{
    icon:Instagram,
    link:"#"
},{
    icon:Youtube,
    link:"#"
},]
function Navbar() {
    const navRef = useRef<HTMLElement>()
    const [sidebar,setSidebar] = useState(false)

    function toggleSidebar(e:React.MouseEvent) {
        e.stopPropagation()
        setSidebar((side) => !side)
    }
    useEffect(() => {
        // @ts-ignore
        Gsap.to(navRef.current.querySelector(".nav-container"), {
            color:"black",
            background:"white",
            scrollTrigger: {
                trigger: document.querySelector("#landing-carousel"),
                start:"30% top",
                end:"30% top",
                scrub:true
            }
        })
        window.addEventListener('click', function(e){
            e.stopPropagation()
            if (!document?.getElementById('sidebar')?.contains(e.target as Node)){
                setSidebar(false)
            }
        });
    }, [])

    return (
        <NavbarStyle ref={navRef as any} className={"w-screen fixed top-0 left-0 text-white z-30 shadow "}>
            <div className="nav-container flex items-center justify-between relative w-full h-full py-6 px-4 lg:px-12">
                <div className="logo text-3xl font-bold"><h1>Logo</h1></div>
                <div className="items hidden lg:flex">
                    <div className="pages flex gap-4 lg:gap-6 text-lg font-semibold lg:mr-10">
                        {menuItems.map((item,index) => {
                            return <a key={index} className={"menu-item"} href={item.link}>{item.name}</a>
                        })}
                    </div>
                    <div className="social-links flex gap-5 items-center font-semibold ">
                        {socialLinks.map((item,index) => {
                            return(
                                <a key={index} className={"social-link"} href={item.link}>
                                    <item.icon height={15} width={15}/>
                                </a>
                            )
                        })}

                    </div>
                </div>
                <button onClick={toggleSidebar} className={"outline-none border-none focus:outline-none focus:border-none lg:hidden"}><Bars3Icon className={"font-bold text-lg"} height={20}/></button>
            </div>
            <div id={"sidebar"} style={{transform:`translateX(${sidebar?"0":"100%"})`}} className="fixed lg:hidden top-0 right-0 bg-white h-screen w-2/3 max-w-sm z-40 text-black shadow transition-all">
                <div className="header py-8 px-4 flex items-center justify-end shadow-sm">
                    <button onClick={toggleSidebar} className={"outline-none border-none focus:outline-none focus:border-none lg:hidden"}><XMarkIcon className={"font-bold text-lg"} height={20}/></button>
                </div>
                <div className="menu-items w-full flex flex-col font-bold text-xl gap-4 px-10 py-10">
                    {menuItems.map((item,index) => {
                        return <a key={index} className={"menu-item"} href={item.link}>{item.name}</a>
                    })}
                </div>
                <div className="social-links flex gap-5 items-center p-10 pt-0">
                    {socialLinks.map((item,index) => {
                        return(
                            <a key={index} className={"social-link"} href={item.link}>
                                <item.icon height={20} width={20}/>
                            </a>
                        )
                    })}
                </div>
            </div>
        </NavbarStyle>
    );
}

export default Navbar;