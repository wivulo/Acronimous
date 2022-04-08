import { Link, Route, Routes } from 'react-router-dom';
import './Dashboard.css';
import Home from "./home/Home";
import Profile from "./profile/Profile";
import userIcon from '../assets/image/user.png';
import home from '../assets/image/Menu Principal/home.png'
import messenger from '../assets/image/Menu Principal/messengerpng.png'
import notification from '../assets/image/Menu Principal/notification.png'
import help from '../assets/image/Menu Principal/help.png'
import about from '../assets/image/Menu Principal/aboutUs.png'
import { Figure } from 'react-bootstrap';

function AsideBarItem({ children, path }) {
    let isClick = false;
    function eventHandler(e){
        e.target.classList.add("active")
    }

    return (
        <li className={(isClick) ? 'active asideBar-item' : 'asideBar-item'}>
            <Link to={path} onClick={eventHandler}> {children} </Link>
        </li>
    )
}

function AsideBar({user}) {
    return (
        <aside className='asideNavBar bg-darkblue-palette'>
            <div className='asideNavBar-content flex flex-column flex-h-center'>
                <ul className='menu'>
                    <AsideBarItem path="/profile">
                        <div className='flex flex-center'>
                            <img className="icon profileLink" src={userIcon} />
                        </div>
                    </AsideBarItem>
                    <AsideBarItem content="" path='home'>
                        <div className='flex flex-row'>
                            <img className="icon asideBarIcon" src={home} /><span>Pagina Inicial</span>
                        </div>
                    </AsideBarItem>
                    <AsideBarItem path="messenger">
                        <div className='flex flex-row'>
                            <img className="icon asideBarIcon" src={messenger} /><span>Mensagens</span>
                        </div>
                    </AsideBarItem>
                    <AsideBarItem path="notification">
                        <div className='flex flex-row'>
                            <img className="icon asideBarIcon" src={notification} /><span>Notificacoes</span>
                        </div>
                    </AsideBarItem>
                    <AsideBarItem path="help">
                        <div className='flex flex-row'>
                            <img className="icon asideBarIcon" src={help} /><span>Ajuda</span>
                        </div>
                    </AsideBarItem>
                    <AsideBarItem path="about">
                        <div className='flex flex-row'>
                            <img className="icon asideBarIcon" src={about} /><span>Sobre nos</span>
                        </div>
                    </AsideBarItem>
                </ul>
            </div>
        </aside>
    )
}

export default function Dashboard({ user }) {

    return (
        <div className="sheet sheet-1 flex flex-center" id="dashboard">
            <AsideBar user={user.username}/>
            <section className='a-section dash-section'>
                <Routes>
                    <Route element={<Home />} path='home' />
                    <Route element={<Profile />} path='profile' />
                </Routes>
            </section>
            <aside className='rightAsideBar flex flex-column justify-end'>
                <div className='forum-item'>
                    <figure>
                        <figcaption>
                            Lorem ipsum dolar samer
                        </figcaption>
                    </figure>
                </div>
                <div className='forum-item'>
                    <figure>
                        <figcaption>
                            Dolar summit ammer
                        </figcaption>
                    </figure>
                </div>
            </aside>
        </div>
    );

}
