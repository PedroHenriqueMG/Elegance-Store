import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/app/header/header";
import Home from "@/app/home/home";
import Fotos from "@/app/fotos/fotos";
import Footer from "@/app/footer/footer";
import Info from "@/app/information/information";
import ScrollToTop from "@/app/modules/scroolToTop";
import { useRef, useState } from "react";
import Description from "@/app/description/description";
import ModalView from "@/app/modal/modal";
import Head from "next/head";

export default function Main() {
  const home = useRef(null);
  const fotos = useRef(null);
  const info = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Elegance Store</title>
        <link rel="icon" href="/logo.jpg" sizes="<generated>" />
      </Head>
      <ScrollToTop />
      <Header home={home} fotos={fotos} info={info} />
      <div ref={home}>
        <Home setIsOpen={setIsOpen} />
      </div>
      <div ref={fotos}>
        <Fotos />
      </div>
      <Description />
      <div ref={info}>
        <Info />
      </div>
      <Footer />
      <ModalView isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
