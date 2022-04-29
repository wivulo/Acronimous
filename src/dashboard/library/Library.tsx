import react from 'react';
import './Library.css'
import {useState} from 'react'

interface iButtonProps{
    changeTitle: any;
    schienceArea: string;
    background: string;
}

function ButtonCategory(props: iButtonProps) {
    function categoryClick(value: string) {
        props.changeTitle(value);
    }

    return (
        <button type="button" value={props.schienceArea} style={{ backgroundImage: 'linear-gradient(' + props.background + ')' }} className="link btn-floating categoryItem" onClick={() => categoryClick(props.schienceArea)}>
            {props.schienceArea}
        </button>
    );
}

const LibraryCategorys: react.FC = ({onTitlechange}: any) => {


    return (
        <div className="library-CategoryList">
            <ButtonCategory schienceArea='Ciências Humanas' changeTitle={onTitlechange} background='#000, darkgreen'/>

{/*
            <button type="button" value="Ciências Exatas" style={{backgroundImage: "linear-gradient(#000, #464DA1)"}} className="link btn-floating categoryItem" id="exactCienc" onclick="categoryClick(this)">
                Ciências Exatas
            </button>

            <button type="button" value="Ciências Socias" style={{backgroundImage: "linear-gradient(#000, darkgoldenrod)"}} className="link btn-floating categoryItem" id="socialCienc" onclick="categoryClick(this)">
                Ciências Socias
            </button>

            <button type="button" value="Arte" style={{backgroundImage: "linear-gradient(#000, darkkhaki)"}} className="link btn-floating categoryItem" id="art" onclick="categoryClick(this)">
                Arte
            </button>

            <button type="button" value="Ciências Biológicas" style={{backgroundImage: "linear-gradient(#000, darkred)"}} className="link btn-floating categoryItem" id="biologicCienc" onclick="categoryClick(this)">
                Ciências Biológicas
            </button>

            <button type="button" value="Cultura" style={{backgroundImage: "linear-gradient(#000, darkgray)"}} className="link btn-floating categoryItem" id="culture" onclick="categoryClick(this)">
                Cultura
    </button>*/}
        </div>
    )
}

export const Library: react.FC = () => {

    const [title, setTitle] = useState<string>()

    return (
        <div className="a-section a-sheet bg-darkblue-palette txt-color-smoke" id="library">
            <div className="library-item header-library grid" id="headerBar">
                <div className="icon icon-1 flex justify-start flex-v-center">
                    <span className="fontawesome fa-arrow-left"></span>
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
                    <button type="button" className="fontawesome btn-floating fa-search fs-medium btn-search"></button>
                </div>

                <div className="cell cel-3 flex flex-center">
                    <button type="button" className="btn-rised btn-filter" id="btnTitulo">Titulo</button>
                </div>

                <div className="cell cel-4 flex flex-center">
                    <button type="button" className="btn-rised btn-filter" id="btnAutor">Autor</button>
                </div>
            </div>

            <div className="library-item library-body grid">
                <LibraryCategorys onTitlechange={setTitle} />
            </div>
        </div>
    )
}