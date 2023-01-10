import React, {Fragment} from 'react';
import {Disclosure, Menu, Transition} from "@headlessui/react";
import {Bars3Icon, BellIcon, XMarkIcon} from "@heroicons/react/20/solid";
import Link from "next/link"
import navigation from "configs/navigation";


function Navbar() {

    return (
        <Disclosure as="nav" className="bg-opacity-20 bg-gray-50 text-white fixed top-0 left-0 w-full z-40">
            {({open}) => (
                <>
                    <div className="mx-auto  px-4 sm:px-6 lg:px-20 xl:px-48 py-5">
                        <div className="flex h-16 justify-between">

                            <div className="flex w-full items-center justify-between">

                                <Link href={"/"} className="flex flex-shrink-0 items-center border-none outline-none">
                                    <img
                                        className="block h-8 w-auto lg:hidden border-none outline-none"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        alt="Your Company"
                                    />
                                    <img
                                        className="hidden h-8 w-auto lg:block border-none outline-none"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        alt="Your Company"
                                    />
                                </Link>
                                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={'inline-flex items-center px-1 pt-1 border-b-2 text-lg font-bold'}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>

                            </div>
                            <div className="-mr-2 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className={`bg-gray-50 bg-opacity-80 text-black space-y-1 pt-2 pb-3`}>
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={'block pl-3 pr-4 py-2 border-l-4 text-base font-bold'}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}

export default Navbar;