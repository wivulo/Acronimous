import react, { Dispatch, SetStateAction, useState, useRef, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'
import './Library.css'
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
  state: string;
}

interface iSchienceAreaProps {
  data: iData[];
}

interface iIcon{
  file: any;
  alt: string
}

interface iFilterButtonProps{
  ident: string;
  content?: string;
  action: any;
  icon?: string;
  alt?: string;
}

const FilterButton = (props: iFilterButtonProps)  =>{
  return (
    <button type="button" className='btn-rised border-1 btn-filter' onClick={(e) => props.action(e)} id={props.ident}>
      {props.content}
    </button>
  )
}

const FlexFilterButton = (props: iFilterButtonProps)  =>{
  return (
    <button type="button" className='btn-rised border-1 btn-filter flex flex-center' onClick={(e) => props.action(e)} id={props.ident}>
      <img src={props.icon} alt={props.alt}/>
    </button>
  )
}

let prevFilter: iData[]
const SchenceArea = ({ data }: iSchienceAreaProps) => {
  const [items, setItems] = useState<iData[]>(data)
  let empty: iData[]

  useEffect( () => {
    setTimeout(() => document.querySelector('#handout')?.classList.add('active'))
  }, [])

  const filterAction = (e: React.SyntheticEvent) => {
    document.querySelectorAll('.active').forEach(elem => elem?.classList.remove('active'))
    e.currentTarget.classList.add('active');
    
    let match = data.filter(potentialMatch =>  potentialMatch.type === e.currentTarget.id)
    prevFilter = match
    setItems(match || empty)
  }

  const filterAction2 = (e: React.SyntheticEvent) =>{
    let match = prevFilter.filter(potentialMatch =>  potentialMatch.state === e.currentTarget.id)
    setItems(match || empty)
  }

  return (
    <div className="scienceAreaViewer grid">
      <div className="row row-1 flex flex-row flex-center">
	<FilterButton ident="handout" content="Apostilas" action={filterAction}/>
	<FilterButton ident="book" content="Livros" action={filterAction}/>
	<FilterButton ident="article" content="Artigos" action={filterAction}/>
      </div>

      <div className="row row-2 flex flex-row justify-start">
	<FlexFilterButton icon={guaranteeIcon} alt="gratis icon" ident="free" action={filterAction2}/>
	<FlexFilterButton icon={buyIcon} alt="a venda icon" ident="buy" action={filterAction2}/>        
	<FlexFilterButton icon={paidIcon} alt="pago icon" ident="paid" action={filterAction2}/>
      </div>

      <div className="row row-3 flex justify-end">
        <form className="form-control flex flex-row flex-center" method="post">
          <input type="search" className="f-control search" placeholder="Pesquisa aqui" />
          <button type="button" className="fa btn-floating fa-search fs-medium btn-search"></button>
        </form>

      </div>

      <div className="row row-4 grid scienceAreaItems">
	{
	 items.map(item => {
	  let icon: iIcon = {
	    file: bookletIcon,
	    alt: 'Apostilas'
	  };

	  return <ScienceItem
	    key={item.id}
      	    itemIcon={icon.file}
       	    itemIconAlt={icon.alt}
      	    itemAutor={item.Autor}
       	    itemTitle={item.Title}
      	    itemSize={item.Size}
     	    interactions={item.interactions}
      	    commentNumber={item.CommentNumber}
    	    />
	  })
	}
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
