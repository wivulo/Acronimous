import react, { Dispatch, SetStateAction } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'
import './Library.css'
import React, { useState } from 'react'
import guaranteeIcon from 'assets/image/Biblioteca/icons8_guarantee.ico'
import buyIcon from "assets/image/Biblioteca/icons8_buy_2.ico"
import paidIcon from "assets/image/Biblioteca/icons8_paid_2.ico"
import bookletIcon from "assets/image/Biblioteca/icons8_spiral_bound_booklet_3.ico"
import { removeAccentsAndSpecialCharacters } from "../../shared/services/removeAcAndCaracEs"
import data from "./data.json";
import { ScienceItem, iSchienceItemProps, iInteractions } from "./SchienceItem"


interface iButtonProps {
  changeTitle: any;
  schienceArea: string;
  background: string;
}

function ButtonCategory(props: iButtonProps) {
  const navigate = useNavigate();

  function categoryClick(value: string) {
    props.changeTitle(value);
    let url = removeAccentsAndSpecialCharacters(props.schienceArea).toLowerCase()
    navigate(url)
  }

  return (

    <button type="button" value={props.schienceArea} style={{ backgroundImage: 'linear-gradient(' + props.background + ')' }} className="link btn-floating categoryItem" onClick={() => categoryClick(props.schienceArea)}>
      {props.schienceArea}
    </button>
  );
}

interface iLibraryCategoryProps {
  setTitlechange: Dispatch<SetStateAction<string | undefined>>
}

const LibraryCategorys = ({ setTitlechange }: iLibraryCategoryProps) => {

  return (
    <div className="library-CategoryList grid">
      <ButtonCategory schienceArea='Ciências Humanas' changeTitle={setTitlechange} background='#000, darkgreen' />
      <ButtonCategory schienceArea='Ciências Exatas' changeTitle={setTitlechange} background='#000, darkblue' />
      <ButtonCategory schienceArea='Ciências Socias' changeTitle={setTitlechange} background='#000, darkgoldenrod' />
      <ButtonCategory schienceArea='Arte' changeTitle={setTitlechange} background='#000, darkkhaki' />
      <ButtonCategory schienceArea='Ciências Biologicas' changeTitle={setTitlechange} background='#000, darkred' />
      <ButtonCategory schienceArea='Cultura' changeTitle={setTitlechange} background='#000, darkgray' />
    </div>
  )
}

interface iData {
  id: number;
  type: string;
  Title: string;
  Autor: string;
  Size: number;
  CommentNumber: number;
  interactions: iInteractions;
}

interface iSchienceAreaProps {
  data: iData[];
}

interface iIcon{
  file: any;
  alt: string
}

const SchenceArea = ({ data }: iSchienceAreaProps) => {

  const [items, setItems] = useState<iData[]>()

  function btnFilterClicktHandler(e: React.SyntheticEvent){
    document.querySelectorAll('.active')?.forEach(elem => {
      elem.classList.remove('active')
    })

    e.currentTarget.classList.add('active');
  }


  data.map(item => {
    let icon: iIcon = bookletIcon;
    
    if(item.type === 'handout'){
      icon = {
        file: bookletIcon,
        alt: 'Apostila icon'
      }
    }
    return <ScienceItem
      itemIcon={icon.file}
      itemIconAlt={icon.alt}
      itemAutor={item.Autor}
      itemTitle={item.Title}
      itemSize={item.Size}
      interactions={item.interactions}
      commentNumber={item.CommentNumber}
    />
  })

  return (
    <div className="scienceAreaViewer grid">
      <div className="row row-1 flex flex-row flex-center">
        <button type="button" className='btn-rised border-1 btn-filter' onClick={(e) => {btnFilterClicktHandler(e); }} id="handout">Apostilas</button>
        <button type="button" className='btn-rised border-1 btn-filter' onClick={(e) => {btnFilterClicktHandler(e); }} id="book">Livros</button>
        <button type="button" className='btn-rised border-1 btn-filter' onClick={(e) => {btnFilterClicktHandler(e); }} id="article">Artigos</button>
      </div>

      <div className="row row-2 flex flex-row justify-start">
        <button type="button" className="btn-rised border-1 btn-filter flex flex-center">
          <img src={guaranteeIcon} alt="gratis icon" /> Grátis
        </button>
        <button type="button" className="btn-rised border-1 btn-filter flex flex-center">
          <img src={buyIcon} alt="a venda icon" /> À venda
        </button>
        <button type="button" className="btn-rised border-1 btn-filter flex flex-center">
          <img src={paidIcon} alt="pago icon" />  Pago
        </button>
      </div>

      <div className="row row-3 flex justify-end">
        <form className="form-control flex flex-row flex-center" method="post">
          <input type="search" className="f-control search" placeholder="Pesquisa aqui" />
          <button type="button" className="fa btn-floating fa-search fs-medium btn-search"></button>
        </form>

      </div>

      <div className="row row-4 grid scienceAreaItems">
        {items}
      </div>

    </div>
  );
};


export const Library: react.FC = () => {

  const [title, setTitle] = useState<string>()

  let url: any;
  if (title)
    url = removeAccentsAndSpecialCharacters(title).toLowerCase();

  return (
    <div className="a-section a-sheet txt-color-smoke" id="library">
      <div className="library-item header-library grid" id="headerBar">
        <div className="icon icon-1 flex justify-start flex-v-center">
          <span className="fa fa-arrow-left"></span>
        </div>

        <div className="library-header-title flex justify-start">
          <span id="header-title">{title}</span>
        </div>
      </div>

      <div className="library-item searchBar-library grid" style={
        {
          display: (title) ? "none" : "grid"
        }
      } id="searchBar">
        <div className="cell cel-1 flex align-end justify-start">
          <span className="txt txt-1 fs-medium f-700">Carregar novo ficheiro</span>
        </div>

        <div className="cell cel-2 flex flex-row align-end justify-end">
          <input type="search" className="f-control search" placeholder="Pesquisa aqui" />
          <button type="button" className="fa btn-floating fa-search fs-medium btn-search"></button>
        </div>

        <div className="cell cel-3 flex flex-center">
          <button type="button" className="btn-rised btn-filter">Titulo</button>
        </div>

        <div className="cell cel-4 flex flex-center">
          <button type="button" className="btn-rised btn-filter">Autor</button>
        </div>
      </div>

      <div className="library-item library-body grid">
        <Routes>
          <Route path={url} element={<SchenceArea data={data.library}  />}/>
          <Route path="/" element={<LibraryCategorys setTitlechange={setTitle} />} />
        </Routes>
      </div>
    </div>
  )
}