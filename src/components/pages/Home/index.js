import React from 'react';
import Menu from '../../Menu'
import dadosIniciais from '../../../data/dados_iniciais.json'
import BannerMain from '../../BannerMain'
import Carousel from '../../Carousel'
import Footer from '../../Footer'

function Home() {
  return (
    <div>
    {/*Esse 'Menu' foi importado, criamos um componente para poder coloca-lo aqui*/ }
      <Menu />
     
      <BannerMain videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription={"Esse vídeo é massa!"}/>

<Carousel 

ignoreFirstVideo

category={dadosIniciais.categorias[0]}

/>



<Carousel 

category={dadosIniciais.categorias[1]}

/>



<Carousel 

category={dadosIniciais.categorias[2]}

/>



<Carousel 

category={dadosIniciais.categorias[3]}

/>



<Carousel 

category={dadosIniciais.categorias[4]}

/>



<Carousel 

category={dadosIniciais.categorias[5]}

/>


<Footer />

      
    </div>
  );
}

export default Home;
