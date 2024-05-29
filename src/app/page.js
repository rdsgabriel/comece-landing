import Header from "./header";
import Mid from "./mid";
import Ocean from "./ocean";
import Services from "./services";
import Video from "./video"
import Notas from './notas'
import Clientes from './clientes'
import Footer from './footer'
import Fita from "./fita";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header/>
      <Mid/>
      <Ocean/>
      <Video/>
      <Services/>
      <Clientes/>
      <Notas/>
      <Fita/>
      <Footer/>
    </main>
  );
}
