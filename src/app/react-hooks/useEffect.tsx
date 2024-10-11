import { useCallback, useEffect, useRef, useState } from "react";

export default function HookUseEffect() {
   const [isPlaying] = useState(0);
   // Isto é executado na montagem ou caso a dependnecia isPlaying será modificada.
   useEffect(() => {}, [isPlaying]);

   // Executado na montagem do componente (quando o componente aparece)
   useEffect(() => {}, []);

   const [count, setCount] = useState(0);
   // Não faça isso, irá produzir um loop infinito
   useEffect(() => {
      setCount(count + 1);
   });

   const [a] = useState(null);
   const [b] = useState(null);
   // Isto é executado na montagem (quando o componente aparece) ou caso alguma das dependencias sejam modificadas.
   useEffect(() => {}, [a, b]);

   const effectRef = useRef(null);
   // Não coloque ref como dependencia do useEffect a não ser que seja passado via props de um componente pai.
   // O refObject retem os valores entre as renderizações, portanto, nunca fará com que o useEffect seja executado novamente.
   useEffect(() => {}, [effectRef]);

   const createConnection = () => ({
      disconnect: () => console.log("disconnected"),
      connect: () => console.log("connected"),
   });

   // Retorne uma função de limpeza do seu useEffect quando necessário desconectar antes da nova renderização.
   // Normalmente, a função de limpeza deve parar ou desfazer tudo o que o useeffect estava fazendo.
   // O React chamará a função de limpeza todas as vezes antes do useEffect ser executado novamente e uma ultima vez quando o componente for desmontado (removido).
   // Isso não apenas melhorará a experiência de desenvolvimento, mas também tornará o seu aplicativo mais rápido.
   useEffect(() => {
      const connection = createConnection();
      connection.connect();

      return () => {
         connection.disconnect();
      };
   }, []);

   // Internalize as funções sempre que possível para evitar ter que passar a função como dependência.
   const getNome = useCallback(() => "Matheus", []);

   useEffect(() => {
      console.log(getNome());
   }, [getNome]);

   useEffect(() => {
      const getNome = () => "Matheus";
      console.log(getNome());
   }, []);

   return <>{isPlaying}</>;
}
