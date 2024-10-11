import { useEffect, useRef, useState } from "react";

export default function BoasPraticasReactJS() {
   return (
      <>
         {/* Errado: Sem SelfClosing */}
         <SelfClosing></SelfClosing>

         {/* Correto: Com SelfClosing*/}
         <SelfClosing />

         <Ternario />
         <OperadorLogico />
         <Assercao />
      </>
   );
}

const SelfClosing: React.FC = () => <p>Componente que você criou.</p>;

const Ternario: React.FC = () => {
   const [open] = useState(false);
   return <>{open ? "Open" : "Close"}</>;
};

const OperadorLogico: React.FC = () => {
   const [isLoading] = useState(false);
   return <>{isLoading && "Carregando..."}</>;
};

const Assercao: React.FC = () => {
   const inputRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
      inputRef.current!.focus();
   }, []);

   return <input ref={inputRef} />;
};
