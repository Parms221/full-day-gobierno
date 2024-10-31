import Banner from "@/sections/banner";
import Horarios from "@/sections/horarios";
import Ponentes from "@/sections/ponentes";
import Preguntas from "@/sections/preguntas";
import Razones from "@/sections/razones";
import Ubicacion from "@/sections/ubicacion";

export default function Home() {
  return (
    <main>
      <Banner />
      <Razones />
      <Ponentes />
      <Horarios />
      <Preguntas />
      <Ubicacion />
    </main>
  );
}
