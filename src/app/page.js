'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from "./header";
import Mid from "./mid";
import Ocean from "./ocean";
import Services from "./services";
import Video from "./video";
import Notas from './notas';
import Clientes from './clientes';
import Time from "./time";
import Footer from './footer';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1600, offset:200, once: true });
  }, []);

  return (
    <main className="min-h-screen bg-preto">
      <Header/>
      <Mid/>
      <Ocean />
      <Video/>
      <Services/>
      <Clientes/>
      <Notas/>
      <Time/>
      <Footer/>
    </main>
  );
}
