import React, {Fragment, useEffect, useRef} from 'react';
import {Instagram, Twitter, Facebook, Youtube} from "react-feather"
import Link from "next/link"
import navigation from "configs/navigation";
import NavbarStyle from "./Navbar.style";
import Gsap from "utils/Gsap";


function Navbar() {
    const navRef = useRef<HTMLElement>()
    useEffect(() => {
        // @ts-ignore
        Gsap.to(navRef.current.querySelector(".nav-container"), {
            color:"black",
            background:"white",
            scrollTrigger: {
                trigger: document.querySelector("#landing-carousel"),
                start:"30% top",
                end:"30% top",
                scrub:.1
            }
        })
    }, [])
    return (
        <NavbarStyle ref={navRef as any} className={"w-screen fixed top-0 left-0 text-white z-40 shadow "}>
            <div className="nav-container flex items-center justify-between relative w-full h-full py-6 px-4 lg:px-12">
                <div className="logo text-3xl font-bold"><h1>Logo</h1></div>
                <div className="items flex">
                    <div className="pages flex gap-4 lg:gap-6 text-lg font-semibold lg:mr-10">
                        <div className="menu-item"><a href="#">Home</a></div>
                        <div className="menu-item"><a href="#">Contact</a></div>
                        <div className="menu-item"><a href="#">About</a></div>
                    </div>
                    <div className="social-links hidden lg:flex gap-5 items-center font-semibold ">
                        <div className="social-link">
                            <a href="#">
                                <Instagram height={15} width={15}/>
                            </a>
                        </div>
                        <div className="social-link">
                            <a href="#">
                                <Youtube height={15} width={15}/>
                            </a>
                        </div>
                        <div className="social-link">
                            <a href="#">
                                <Facebook height={15} width={15}/>
                            </a>
                        </div>
                        <div className="social-link">
                            <a href="#">
                                <Twitter height={15} width={15}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </NavbarStyle>
    );
}

export default Navbar;