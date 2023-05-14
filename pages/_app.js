import Head from "next/head";
import Script from "next/script"
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import '../styles/globals.css';
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Uc from "../components/Uc";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
       
      </Head>

<Uc/>
        <Navbar/> 
      <Component {...pageProps} />
        <Footer/>
    </>
  );
}
export default MyApp;
