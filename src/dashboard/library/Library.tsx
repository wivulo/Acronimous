import react, {Dispatch, SetStateAction } from 'react';
import {Route, Routes, useNavigate, useParams} from 'react-router-dom'
import './Library.css'
import {useState} from 'react'

interface iButtonProps{
    changeTitle: any;
    schienceArea: string;
    background: string;
}

function ButtonCategory(props: iButtonProps) {
    const navigate = useNavigate();

    function categoryClick(value: string) {
        props.changeTitle(value);
    }

    return (
        
        <button type="button" value={props.schienceArea} style={{ backgroundImage: 'linear-gradient(' + props.background + ')' }} className="link btn-floating categoryItem" onClick={() => categoryClick(props.schienceArea)}>
            {props.schienceArea}
        </button>
    );
}

interface iLibraryCategoryProps{
  setTitlechange: Dispatch<SetStateAction<boolean>>
}

const LibraryCategorys = ({ setTitlechange }: iLibraryCategoryProps) => {

    return (
        <div className="library-CategoryList grid">
            <ButtonCategory schienceArea='Ciências Humanas' changeTitle={setTitlechange}  background='#000, darkgreen'/>
            <ButtonCategory schienceArea='Ciências Exatas' changeTitle={setTitlechange}  background='#000, darkblue'/>
            <ButtonCategory schienceArea='Ciências Socias' changeTitle={setTitlechange}  background='#000, darkgoldenrod'/>
            <ButtonCategory schienceArea='Arte' changeTitle={setTitlechange}  background='#000, darkkhaki'/>
            <ButtonCategory schienceArea='Ciências Biologicas' changeTitle={setTitlechange}  background='#000, darkred'/>
            <ButtonCategory schienceArea='Cultura' changeTitle={setTitlechange}  background='#000, darkgray' />
        </div>
    )
}

const SchenceArea: react.FC = () => {
    return (
        <div className="scienceAreaViewer grid">
        <div className="row row-1 flex flex-row flex-center">
          <button type="button" className="btn-rised border-1 btn-filter active">Apostilas</button>
          <button type="button" className="btn-rised border-1 btn-filter">Livros</button>
          <button type="button" className="btn-rised border-1 btn-filter">Artigos</button>
        </div>
        
        <div className="row row-2 flex flex-row justify-start">
          <button type="button" className="btn-rised border-1 btn-filter flex flex-center"> 
            <img src="assets/image/Biblioteca/icons8_guarantee.ico"  alt="gratis icon"/> Grátis
          </button>
          <button type="button" className="btn-rised border-1 btn-filter flex flex-center">
            <img src="assets/image/Biblioteca/icons8_buy_2.ico" alt="a venda icon"/> À venda
          </button>
          <button type="button" className="btn-rised border-1 btn-filter flex flex-center">
            <img src="assets/image/Biblioteca/icons8_paid_2.ico" alt="pago icon"/>  Pago
          </button>
        </div>
        
        <div className="row row-3 flex justify-end">
          <form className="form-control flex flex-row flex-center" method="post">
            <input type="search" className="f-control search" placeholder="Pesquisa aqui" />
            <button type="button" className="fontawesome btn-floating fa-search fs-medium btn-search"></button>
          </form>
          
        </div>
        
        <div className="row row-4 grid scienceAreaItems">
          
          <div className="areaItem grid">
            <div className="icon flex flex-center">
              <img src="assets/image/Biblioteca/icons8_spiral_bound_booklet_3.ico" alt="apostilas icon"/>
            </div>
            
            <div className="description flex flex-column">
              <p className="txt item-title fs-normal f-600 mt-1">Titulo da Apostilas</p>
              <small className="txt item-autor">Autor/es</small>
            </div>
            
            <div className="menu-content flex justify-end align-center">
              <button type="button" className="btn fs-medium" id="btn-open-menu"><span className="fontawesome fa-ellipsis-v txt-color-smoke"></span> </button>
              
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
              <p className="txt">18 comment</p>
            </div>
            
            <div className="archiveSize flex justify-end">
              <p className="txt size">4MB</p>
            </div>
            
            <div className="reactionViewer flex flex-row flex-center">
              <div className="downloadNumber">
                 <img src="assets/image/Biblioteca/icons8_download.ico" alt="download icon" />
                 <small>10</small>
              </div>
              
              <div className="viewNumber">
               <img src="assets/image/Biblioteca/icons8_eye_2.ico" alt="view icon" />
               <small>10</small>
              </div>
              
              <div className="likeNumber">
               <img src="assets/image/Biblioteca/icons8_thumbs_up.ico" alt="like icon" />
               <small>10</small>
              </div>
              
              <div className="unlikeNumber">
               <img src="assets/image/Biblioteca/icons8_thumbs_down.ico" alt="unlike icon" />
               <small>10</small>
              </div>
              
              <div className="starNumber">
                <img src="assets/image/Biblioteca/icons8_star.ico" alt="star icon" />
                <small>10</small>
              </div>
            </div>
          </div>
          
          
        </div>
        
      </div>
    );
};

const LastChange = ({title, titleChange}:any) => {
  if(title){
    return <SchenceArea />
  }else{
    return <LibraryCategorys setTitlechange={titleChange} />
  }
}

export const Library: react.FC = () => {

    const [title, setTitle] = useState<string>()

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

            <div className="library-item searchBar-library grid" id="searchBar">
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
                <LastChange title={title} titleChange={setTitle} />
                {/*<LibraryCategorys setTitlechange={setTitle} displayLibraryItems={setIsDisplayLibraryItems} />*/}
            </div>
        </div>
    )
}