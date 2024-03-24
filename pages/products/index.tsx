import Head from "next/head";
import Layout from "components/Layout";
import React from "react";
import projects from "configs/projects";
import manufacturings, { manufacturingImages } from "configs/manufacturings";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Creative Interior</title>
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
          {/* <h1 className={"text-center text-6xl font-bold"}>
            Our Products
          </h1> */}
        </section>
        <div className="projects xl:p-40 p-10  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  text-black">
          {manufacturingImages.map((item, index) => {
            return (
              <div
                key={index}
                className="project w-full flex flex-col gap-5 relative rounded"
              >
                <div className="image aspect-1 image">
                  <Image
                    src={item}
                    alt=""
                    fill
                    style={{objectFit: "cover", objectPosition: "center"}}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Layout>
    </>
  );
}
