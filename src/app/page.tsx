"use client";

import { useState } from "react";

import EvitandoBuscasDesnecessarias from "./evitando-buscas-desnecessarias";

type Posts = "raciocinio-local";

const posts: Posts[] = ["raciocinio-local"];

export default function Home() {
   const [selectedPost, setSelectedPost] = useState<Posts>("raciocinio-local");

   return (
      <div className="App">
         {!selectedPost && <h1>Selecione o Post</h1>}

         {!selectedPost && (
            <ul style={{ listStyle: "none" }}>
               {posts.map((post) => (
                  <li className="w-max" key={post}>
                     <button onClick={() => setSelectedPost(post)}>{post}</button>
                  </li>
               ))}
            </ul>
         )}

         {selectedPost === "raciocinio-local" && <EvitandoBuscasDesnecessarias />}
      </div>
   );
}
