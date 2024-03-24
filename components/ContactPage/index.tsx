import React from 'react';
import ContactForm from "./ContactForm";
import ContactPageStyle from "./ContactPage.style";

function ContactPage() {
    return (
        <ContactPageStyle>
            {/* <div className="image w-full relative mt-14">
                <img src="/images/contact.jpg" className={"brightness-40"} alt=""/>
                <div className="text absolute top-1/2 pl-5 lg:pl-0 lg:left-1/3 text-white">
                    <h1 className={"text-xl lg:text-5xl font-medium font-serif"}>
                        Hello there, Are you coming by for a visit or want to chat with us?
                    </h1>
                    <p className={"lg:text-2xl mt-4 lg:font-medium"}>We very much appreciate your interest in us.</p>
                </div>
            </div> */}
            <ContactForm/>
        </ContactPageStyle>
    );
}

export default ContactPage;