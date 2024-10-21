import Footer from "@/layout/footer/footer";
import Nav from "@/layout/nav";
import Banner from "@/sections/banner";
import Horarios from "@/sections/horarios";
import Ponentes from "@/sections/ponentes";
import Preguntas from "@/sections/preguntas";
import Razones from "@/sections/razones";
import Ubicacion from "@/sections/ubicacion";

export default function Home() {
  return (
    <main>
      <Nav />
      <Banner />
      <Razones />
      <Ponentes />
      <Horarios />
      <Preguntas />
      <Ubicacion />
      <Footer />
    </main>
  );
}
