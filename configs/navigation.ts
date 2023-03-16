import {Facebook, Instagram, Twitter, Youtube} from "react-feather";

const navigation = [
    {name: 'Projects', href: '#'},
    {name: 'About', href: '#'},
    {name: 'Awards', href: '#'},
    {name: 'Testimonials', href: '#'},
    {name: 'Contact Us', href: '/contact'},
]

const menuItems = [{
    name: "Home",
    link: "#"
}, {
    name: "Projects",
    link: "projects"
}, {
    name: "About",
    link: "/about"
}, {
    name: "Contact",
    link: "/contact"
},]

const socialLinks = [{
    icon: Facebook,
    title: "Facebook",
    link: "#"
}, {
    icon: Twitter,
    title: "Twitter",
    link: "#"
}, {
    icon: Instagram,
    title: "Instagram",
    link: "#"
}, {
    icon: Youtube,
    title: "Youtube",
    link: "#"
},]

export {menuItems, socialLinks}