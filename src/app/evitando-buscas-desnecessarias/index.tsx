import EvitandoBuscasDesnecessariasCorreto from "./correto";
import EvitandoBuscasDesnecessariasErrado from "./errado";

export default function EvitandoBuscasDesnecessarias() {
   const selected: "correto" | "errado" = "correto";

   return (
      <>{selected === "correto" ? <EvitandoBuscasDesnecessariasCorreto /> : <EvitandoBuscasDesnecessariasErrado />}</>
   );
}
