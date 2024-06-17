'use client'
import React, { useEffect, useState } from 'react';
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

  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
    if (!expanded) {
      window.scrollTo({ top: window.scrollY + 500, behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-preto">
      <Header/>
      <Mid toggleExpand={toggleExpand} expanded={expanded}/>
      <Ocean />
      <Video/>
      <Services/>
      <Clientes/>
      <Notas toggleExpand={toggleExpand} expanded={expanded}/>
      <Time/>
      <Footer toggleExpand={toggleExpand} expanded={expanded}/>
    </main>
  );
}
