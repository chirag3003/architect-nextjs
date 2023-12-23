import Head from "next/head";
import Layout from "components/Layout";
import React from "react";
import projects from "configs/projects";
import manufacturings from "configs/manufacturings";

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
          <h1 className={"text-center text-6xl font-bold"}>
            Our Manufacturings
          </h1>
        </section>
        <div className="projects xl:p-40 p-10  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  text-black">
          {manufacturings.map((item, index) => {
            return (
              <div
                key={index}
                className="project w-full flex flex-col gap-5 relative cursor-pointer rounded"
              >
                <div className="image aspect-1 image hover:opacity-90">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className=" px-2 w-full top-0">
                  <p className="text-2xl font-semibold">{item.name}</p>
                  <p className="text-xl text-gray-800">₹ {item.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Layout>
    </>
  );
}
