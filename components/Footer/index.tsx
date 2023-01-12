import React from 'react';
import {socialLinks} from "../../configs/navigation";

function Footer() {
    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
                <div className="mt-10 flex justify-center space-x-10">
                    {socialLinks.map((item,index) => (
                        <a key={index} href={item.title} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">{item.title}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                    ))}
                </div>
                <p className="mt-10 text-center text-xs leading-5 text-gray-500">
                    &copy; 2023 Your Company, Inc. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;