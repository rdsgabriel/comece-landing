import Header from "./header";
import Mid from "./mid";
import Ocean from "./ocean";
import Services from "./services";
import Video from "./video"
import Notas from './notas'
import Clientes from './clientes'
import Time from "./time";
import Footer from './footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header/>
      <Mid/>
      <Ocean/>
      <Video/>
      <Services/>
      <Clientes/>
      <Notas/>
      <Time/>
      <Footer/>
    </main>
  );
}
