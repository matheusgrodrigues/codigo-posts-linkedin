import { useCallback, useEffect, useState } from "react";

export default function EvitandoBuscasDesnecessariasErrado() {
   const [show, setShow] = useState({
      videos: true,
      fotos: false,
      mapa: false,
   });

   const handleShowVideos = useCallback(
      () => setShow((prev) => ({ ...prev, videos: true, fotos: false, mapa: false })),
      []
   );

   const handleShowFotos = useCallback(
      () => setShow((prev) => ({ ...prev, videos: false, fotos: true, mapa: false })),
      []
   );

   const handleShowMapa = useCallback(
      () => setShow((prev) => ({ ...prev, videos: false, fotos: false, mapa: true })),
      []
   );

   return (
      <main style={{ flexDirection: "column", display: "flex", gap: "12px" }}>
         <div style={{ justifyContent: "center", display: "flex", height: "200px" }}>
            {show.videos && <Videos />}
            {show.fotos && <Fotos />}
            {show.mapa && <Mapa />}
         </div>

         <div>
            <button onClick={handleShowVideos}>Vídeos</button>
            <button onClick={handleShowFotos}>Fotos</button>
            <button onClick={handleShowMapa}>Mapa</button>
         </div>
      </main>
   );
}

const Videos: React.FC = () => {
   const [videos, setVideos] = useState<string[]>([]);

   console.log("videos");

   useEffect(() => {
      const fakeHttpGetAndSetVideo = () => {
         setVideos(["video1", "video2"]);
      };

      fakeHttpGetAndSetVideo();
   }, []);

   return (
      <div
         style={{
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            height: "100%",
            width: "100%",
         }}
      >
         {videos.map((video) => video)}
      </div>
   );
};

const Fotos: React.FC = () => {
   const [fotos, setFotos] = useState<string[]>([]);

   console.log("fotos");

   useEffect(() => {
      const fakeHttpGetAndSetFotos = () => {
         setFotos(["foto1", "foto2"]);
      };

      fakeHttpGetAndSetFotos();
   }, []);

   return (
      <div
         style={{
            backgroundColor: "yellow",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            height: "100%",
            width: "100%",
         }}
      >
         {fotos.map((foto) => foto)}
      </div>
   );
};

const Mapa: React.FC = () => {
   const [mapa, setMapa] = useState("mapa");

   console.log("mapa");

   useEffect(() => {
      const fakeHttpGetAndSetMapa = () => {
         setMapa("mapa");
      };

      fakeHttpGetAndSetMapa();
   }, []);

   return (
      <div
         style={{
            backgroundColor: "blue",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            height: "100%",
            width: "100%",
         }}
      >
         {mapa}
      </div>
   );
};
