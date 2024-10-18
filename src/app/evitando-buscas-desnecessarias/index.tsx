import Correto from "./correto";
import Errado from "./errado";

export default function EvitandoBuscasDesnecessarias() {
   const selected: "correto" | "errado" = "correto";

   return <>{selected === "correto" ? <Correto /> : <Errado />}</>;
}
