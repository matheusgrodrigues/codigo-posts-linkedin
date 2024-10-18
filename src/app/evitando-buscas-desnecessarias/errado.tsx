import { useCallback, useEffect, useState } from "react";

export default function Errado() {
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
      <main className="flex-col items-center flex gap-3 w-full">
         <div className="justify-center flex h-[200px] w-full">
            {show.videos && <Videos />}
            {show.fotos && <Fotos />}
            {show.mapa && <Mapa />}
         </div>

         <div className="flex gap-3">
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

   return <div className="justify-center items-center flex bg-red-700 size-full">{videos.map((video) => video)}</div>;
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

   return <div className="justify-center items-center flex bg-yellow-700 size-full">{fotos.map((foto) => foto)}</div>;
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

   return <div className="justify-center items-center flex bg-blue-700 size-full">{mapa}</div>;
};
