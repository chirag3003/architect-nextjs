import Head from "next/head";
import Layout from "components/Layout";
import React from "react";
import projects from "configs/projects";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Architect</title>
        <meta name="description" content="Created by Chirag Bhalotia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section
          style={{
            backgroundImage: `url("${"/images/about/about2.jpg"}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
          id="header"
          className={"h-[40vh] lg:h-[50vh] flex justify-center items-center"}
        >
          <h1 className={"text-center text-6xl text-white font-bold"}>
            Our Projects
          </h1>
        </section>
        <div className="projects xl:p-40 p-10  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
          {Object.entries(projects).map((entry, index) => {
            return (
              <a
                key={index}
                href={`/projects/${entry[0]}`}
                className="project w-full relative cursor-pointer image-purple rounded  aspect-1"
              >
                <div className="image aspect-1 image hover:opacity-90">
                  <img
                    src={entry[1].image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="content text-center flex flex-col items-center justify-center px-2 py-6 absolute w-full h-full top-0 text-white">
                 {entry[1].year &&  <span className={"my-4  font-semibold"}>{entry[1].year}</span>}
                  <h2 className={" text-3xl font-semibold"}>
                    {entry[1].title}
                  </h2>
                  <p className={"text-center my-3 max-w-md"}>
                    {entry[1].dParas[0]}
                  </p>
                  <p className=" my-2 font-bold">{entry[1].subtitle}</p>
                </div>
              </a>
            );
          })}
        </div>
      </Layout>
    </>
  );
}
