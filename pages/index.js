import Head from "next/head";
import Hero from "../components/Hero";

import Main from "../components/Main";
import Slider from "../components/Slider";
import Facilities from "../components/Facilites";
import Contact from "../components/Contact";



export default function Home() {
  return (
    <>
      <Head>
        <title>Govt. Degree College Handwara</title>
        <meta
          name="description"
          content="New! Website of Govt. Degree College Handwara"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <Hero />
      <hr />
      <Main />
      <Facilities />
      <Contact />
    </>
  );
}
