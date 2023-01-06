import React from 'react';
import Touch from "./Touch";
import Location from "./Touch/Location";
import ContactPageStyle from "./ContactPage.style";

function ContactPage() {
    return (
        <ContactPageStyle>
            <div className="image w-full relative">
                <img src="/images/contact.jpg" className={"brightness-40"} alt=""/>
                <div className="text absolute top-1/2 pl-5 lg:pl-0 text-white">
                    <h1 className={"text-xl lg:text-5xl font-medium font-serif"}>
                        Hello there, Are you coming by for a visit or want to chat with us?
                    </h1>
                    <p className={"lg:text-2xl mt-4 lg:font-medium"}>We very much appreciate your interest in us.</p>
                </div>
            </div>
            <div className="divide-y-2 divide-gray-200 mx-auto max-w-7xl py-16 px-6 lg:py-24 lg:px-8">
                <Touch/>
                <Location/>
            </div>
        </ContactPageStyle>
    );
}

export default ContactPage;