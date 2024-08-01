// src/components/Venta/Venta.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import ListaProductos from './ListaProductos';

const productosIniciales = [
  {
    id: 1,
    nombre: 'Torre Gamer Amd Ryzen 7 5700x',
    precio: 4084905,
    imagen: 'https://www.bing.com/images/search?view=detailV2&ccid=4LrWM2So&id=6CA55F334CA51D0B3C55BC5E575D5A3E735EFB6A&thid=OIP.4LrWM2SoZ_6mUiEsJUv4aQHaEK&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.e0bad63364a867fea652212c254bf869%3frik%3davtecz5aXVdevA%26riu%3dhttp%253a%252f%252fwww.viajejet.com%252fwp-content%252fviajes%252fLago-Moraine-Parque-Nacional-Banff-Alberta-Canada.jpg%26ehk%3d6qRhWDqqQAEkSFs%252bHP8p2Bl6XfPbjznSoORh%252bsEJ%252bQE%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=1350&expw=2400&q=im%c3%a1genes&simid=608001343703117209&FORM=IRPRST&ck=0EE0D00ABBE293C0D547B277D621F200&selectedIndex=0&itb=0',
    colores: 2
  },
  {
    id: 2,
    nombre: 'Todo En Uno Hp Celeron 8gb',
    precio: 1198500,
    imagen: 'url_imagen2',
    colores: 1
  },
  {
    id: 3,
    nombre: 'Apple Mac Mini M2 8gb Ram',
    precio: 2960000,
    imagen: 'url_imagen3',
    colores: 1
  },
  // Agrega más productos aquí
];

function Venta() {
  const [productos, setProductos] = useState(productosIniciales);

  return (
    <div className="container">
      <header className="header bg-primary text-white p-3">
        <h1 className="text-start">Venta</h1>
        
      </header>
      <main className="mt-4">
        
        <ListaProductos productos={productos} />
      </main>
    </div>
  );
}

export default Venta;
