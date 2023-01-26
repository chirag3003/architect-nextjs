import React from 'react';
import LineElement from "../LineElement";
type props = {
    heading:string;
    title:string;
}
function Title1({heading,title}:props) {
    return (
        <>
            <LineElement />
            <div className="heading">
                <h2 className={"font-semibold mt-4 mb-8"}>{heading}</h2>
            </div>
            <div className="title md:max-w-2xl font-bold text-3xl md:text-5xl text-center mb-10 md:mb-16">
                <h1>{title}</h1>
            </div>
        </>
    );
}

export default Title1;