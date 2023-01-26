import React from 'react';
import LineElement from "../../LineElement";

type props = {
    title:string;
    value:string;
}

function ProjectDetail({title,value}:props) {
    return (
        <div className={"detail py-10 px-20 flex flex-col border-2 border-yellow-600 justify-center items-center"}>
            <LineElement />
            <div className="title mt-4 font-bold uppercase">{title}</div>
            <div className="value font-bold uppercase text-yellow-600">{value}</div>
        </div>
    );
}

export default ProjectDetail;