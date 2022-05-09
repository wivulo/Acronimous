import react, { Dispatch, SetStateAction } from 'react';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom'
import './Library.css'
import { useState } from 'react'
import guaranteeIcon from 'assets/image/Biblioteca/icons8_guarantee.ico'
import buyIcon from "assets/image/Biblioteca/icons8_buy_2.ico"
import paidIcon from "assets/image/Biblioteca/icons8_paid_2.ico"
import bookletIcon from "assets/image/Biblioteca/icons8_spiral_bound_booklet_3.ico"
import downloadIcon from "assets/image/Biblioteca/icons8_download.ico"
import viewIcon from "assets/image/Biblioteca/icons8_eye_2.ico"
import likeIcon from "assets/image/Biblioteca/icons8_thumbs_up.ico"
import unlikeIcon from "assets/image/Biblioteca/icons8_thumbs_down.ico"
import starIcon from "assets/image/Biblioteca/icons8_star.ico"
import { removeAccentsAndSpecialCharacters } from "../../shared/services/removeAcAndCaracEs"
import data from "./data.json";


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

interface iInteractions{
  downloads: number;
  visualization: number;
  like: number;
  unlike: number;
  addedToFavorites: number;
}

interface iSchienceItemProps{
  itemIcon: any;
  itemIconAlt: string;
  itemTitle: string;
  itemAutor: string;
  itemSize: number;
  commentNumber: number;
  interactions: iInteractions;
}

const ScienceItem = ({itemIcon, itemIconAlt, itemTitle, itemAutor, itemSize, commentNumber, interactions}: iSchienceItemProps) => {
  return (
    <div className="areaItem grid">
      <div className="icon flex flex-center">
        <img src={itemIcon} alt={itemIconAlt} />
      </div>

      <div className="description flex flex-column">
        <p className="txt item-title fs-normal f-600 mt-1">{itemTitle}</p>
        <small className="txt item-autor">{itemAutor}</small>
      </div>

      <div className="menu-content flex justify-end align-center">
        <button type="button" className="btn fs-medium" id="btn-open-menu"><span className="fa fa-ellipsis-v txt-color-smoke"></span> </button>

        <div className="menu">
          <ul>
            <button type="button" className="btn-circle" id="btn-close">x</button>

            <li>Ler</li>
            <li>Ver capa</li>
            <li>Baixar</li>
            <li>Adicionar aos favoritos</li>
            <li>Detalhes</li>
          </ul>
        </div>
      </div>

      <div className="commentNumber">
        <p className="txt">{commentNumber} comment</p>
      </div>

      <div className="archiveSize flex justify-end">
        <p className="txt size">{itemSize}MB</p>
      </div>

      <div className="reactionViewer flex flex-row flex-center">
        <div className="downloadNumber">
          <img src={downloadIcon} alt="download icon" />
          <small>{interactions.downloads}</small>
        </div>

        <div className="viewNumber">
          <img src={viewIcon} alt="view icon" />
          <small>{interactions.visualization}</small>
        </div>

        <div className="likeNumber">
          <img src={likeIcon} alt="like icon" />
          <small>{interactions.like}</small>
        </div>

        <div className="unlikeNumber">
          <img src={unlikeIcon} alt="unlike icon" />
          <small>{interactions.unlike}</small>
        </div>

        <div className="starNumber">
          <img src={starIcon} alt="star icon" />
          <small>{interactions.addedToFavorites}</small>
        </div>
      </div>
    </div>
  );
}

const SchenceArea: react.FC = ({data}: any) => {
  return (
    <div className="scienceAreaViewer grid">
      <div className="row row-1 flex flex-row flex-center">
        <button type="button" className="btn-rised border-1 btn-filter active">Apostilas</button>
        <button type="button" className="btn-rised border-1 btn-filter">Livros</button>
        <button type="button" className="btn-rised border-1 btn-filter">Artigos</button>
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
      </div>

    </div>
  );
};


export const Library: react.FC = () => {

  const [title, setTitle] = useState<string>()
  let url: any;
  (title) ? url = removeAccentsAndSpecialCharacters(title).toLowerCase() : 0;
  let handout: Array<iSchienceItemProps> = [];

  data.handout.map((item) => {
    handout.push({
      itemIcon: bookletIcon,
      itemTitle: item.Title,
      itemAutor: item.Autor,
      itemSize: item.Size,
      itemIconAlt: "apostila icon",
      commentNumber: item.Size,
      interactions:{
        downloads: item.interactions.downloads,
        visualization: item.interactions.visualization,
        like: item.interactions.like,
        unlike: item.interactions.like,
        addedToFavorites: item.interactions.addedToFavorites
      }
    })
  });

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
          <Route path={url} element={<SchenceArea data={handout} />} />
          <Route path="/" element={<LibraryCategorys setTitlechange={setTitle} />} />
        </Routes>
      </div>
    </div>
  )
}