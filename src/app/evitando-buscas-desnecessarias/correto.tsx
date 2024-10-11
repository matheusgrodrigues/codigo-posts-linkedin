import { useImperativeHandle, useCallback, forwardRef, useEffect, useState, useRef } from "react";

const fakeHttpGetVideos = () => ["video1", "video2"];
const fakeHttpGetFotos = () => ["foto1", "foto2"];
const fakeHttpGetMapa = () => "mapa";

export default function EvitandoBuscasDesnecessariasCorreto() {
   const [show, setShow] = useState({
      videos: true,
      fotos: false,
      mapa: false,
   });

   const loadedData = useRef<{
      videos: string[];
      fotos: string[];
      mapa: string;
   }>({
      videos: [],
      fotos: [],
      mapa: "",
   });

   const videosRef = useRef<VideosRef>(null);
   const fotosRef = useRef<FotosRef>(null);
   const mapaRef = useRef<MapaRef>(null);

   const handleShowFotos = useCallback(
      () => setShow((prev) => ({ ...prev, videos: false, fotos: true, mapa: false })),
      []
   );

   const handleShowVideos = useCallback(
      () => setShow((prev) => ({ ...prev, videos: true, fotos: false, mapa: false })),
      []
   );

   const handleShowMapa = useCallback(
      () => setShow((prev) => ({ ...prev, videos: false, fotos: false, mapa: true })),
      []
   );

   useEffect(() => {
      const handleSetVideos = () => {
         const { videos } = loadedData.current;

         if (videos.length > 0) {
            videosRef.current?.setVideos(videos);

            console.log("pegou do ref: videos");
         } else {
            loadedData.current.videos = fakeHttpGetVideos();
            videosRef.current?.setVideos(fakeHttpGetVideos());

            console.log("pegou da api: videos");
         }
      };

      const handleSetFotos = () => {
         const { fotos } = loadedData.current;

         if (fotos.length > 0) {
            fotosRef.current?.setFotos(fakeHttpGetFotos());

            console.log("pegou do ref: fotos");
         } else {
            loadedData.current.fotos = fakeHttpGetFotos();
            fotosRef.current?.setFotos(fakeHttpGetFotos());

            console.log("pegou da api: fotos");
         }
      };

      const handleSetMapa = () => {
         const { mapa } = loadedData.current;

         if (mapa) {
            mapaRef.current?.setMapa(mapa);

            console.log("pegou do ref: mapa");
         } else {
            loadedData.current.mapa = fakeHttpGetMapa();
            mapaRef.current?.setMapa(fakeHttpGetMapa());

            console.log("pegou da api: mapa");
         }
      };

      show.videos && handleSetVideos();
      show.fotos && handleSetFotos();
      show.mapa && handleSetMapa();
   }, [show]);

   return (
      <main style={{ flexDirection: "column", display: "flex", gap: "12px" }}>
         <div style={{ justifyContent: "center", display: "flex", height: "200px" }}>
            {show.videos && <Videos ref={videosRef} />}
            {show.fotos && <Fotos ref={fotosRef} />}
            {show.mapa && <Mapa ref={mapaRef} />}
         </div>

         <div>
            <button onClick={handleShowVideos}>Vídeos</button>
            <button onClick={handleShowFotos}>Fotos</button>
            <button onClick={handleShowMapa}>Mapa</button>
         </div>
      </main>
   );
}

interface VideosRef {
   setVideos: React.Dispatch<React.SetStateAction<string[]>>;
}

const Videos = forwardRef<VideosRef>((props, ref) => {
   const [videos, setVideos] = useState<string[]>([]);

   useImperativeHandle(
      ref,
      () => ({
         setVideos,
      }),
      []
   );

   return (
      <div
         style={{
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            width: "100%",
            height: "100%",
         }}
      >
         {videos.map((video) => video)}
      </div>
   );
});

Videos.displayName = "Videos";

interface FotosRef {
   setFotos: React.Dispatch<React.SetStateAction<string[]>>;
}

const Fotos = forwardRef<FotosRef>((props, ref) => {
   const [fotos, setFotos] = useState<string[]>([]);

   useImperativeHandle(
      ref,
      () => ({
         setFotos,
      }),
      []
   );

   return (
      <div
         style={{
            backgroundColor: "yellow",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            width: "100%",
            height: "100%",
         }}
      >
         {fotos.map((foto) => foto)}
      </div>
   );
});

Fotos.displayName = "Fotos";

interface MapaRef {
   setMapa: React.Dispatch<React.SetStateAction<string>>;
}

const Mapa = forwardRef<MapaRef>((props, ref) => {
   const [mapa, setMapa] = useState("");

   useImperativeHandle(ref, () => ({ setMapa }), []);

   return (
      <div
         style={{
            backgroundColor: "blue",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            width: "100%",
            height: "100%",
         }}
      >
         {mapa}
      </div>
   );
});

Mapa.displayName = "Mapa";
