import downloadIcon from "assets/image/Biblioteca/icons8_download.ico"
import viewIcon from "assets/image/Biblioteca/icons8_eye_2.ico"
import likeIcon from "assets/image/Biblioteca/icons8_thumbs_up.ico"
import unlikeIcon from "assets/image/Biblioteca/icons8_thumbs_down.ico"
import starIcon from "assets/image/Biblioteca/icons8_star.ico"

export interface iInteractions{
    downloads: number;
    visualization: number;
    like: number;
    unlike: number;
    addedToFavorites: number;
  }
  
export interface iSchienceItemProps{
    itemIcon: any;
    itemIconAlt: string;
    itemTitle: string;
    itemAutor: string;
    itemSize: number;
    commentNumber: number;
    interactions: iInteractions;
  }
  
 export const ScienceItem = ({itemIcon, itemIconAlt, itemTitle, itemAutor, itemSize, commentNumber, interactions}: iSchienceItemProps) => {
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