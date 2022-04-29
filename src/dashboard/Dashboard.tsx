import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './Dashboard.css';
import Home from "./home/Home";
import Profile from "./profile/Profile";
import userIcon from '../assets/image/user.png';
import home from '../assets/image/Menu Principal/home.png'
import messenger from '../assets/image/Menu Principal/messengerpng.png'
import notification from '../assets/image/Menu Principal/notification.png'
import help from '../assets/image/Menu Principal/help.png'
import about from '../assets/image/Menu Principal/aboutUs.png'
import NotFound from '../shared/components/notFound';

import logoutIcon from '../assets/image/logout.png';
import { MouseEventHandler, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Settings } from 'http2';

interface iAsideBarItemProps{
    children: any;
    path: string;
}

function AsideBarItem({ children, path }: iAsideBarItemProps) {
    let isClick = false;
    function eventHandler() {
        isClick = true;
    }

    return (
        <li className={(isClick) ? 'active asideBar-item' : 'asideBar-item'}
        onClick={() => eventHandler()}>
            <Link to={path}> {children} </Link>
        </li>
    )
}

function AsideBar({ user }: any) {
    const navigate = useNavigate();

    function ButtonClick(){
        useEffect(() => {
            localStorage.removeItem("user");
            navigate("/login")
        })
    }

    return (
        <aside className='asideNavBar bg-darkblue-palette'>
            <div className='asideNavBar-content flex flex-column flex-h-center'>
                <ul className='menu'>
                    <AsideBarItem path="/profile">
                        <div className='flex flex-center'>
                            <img className="icon profileLink" src={userIcon} alt="go to profile"/>
                        </div>
                    </AsideBarItem>
                    <AsideBarItem path='home'>
                        <div className='flex flex-row'>
                            <img className="icon asideBarIcon" src={home} alt="home link"/><span>Pagina Inicial</span>
                        </div>
                    </AsideBarItem>
                    <AsideBarItem path="messenger">
                        <div className='flex flex-row'>
                            <img className="icon asideBarIcon" src={messenger} alt="messenger link"/><span>Mensagens</span>
                        </div>
                    </AsideBarItem>
                    <AsideBarItem path="notification">
                        <div className='flex flex-row'>
                            <img className="icon asideBarIcon" src={notification} alt="notification link"/><span>Notificacoes</span>
                        </div>
                    </AsideBarItem>
                    <AsideBarItem path="help">
                        <div className='flex flex-row'>
                            <img className="icon asideBarIcon" src={help} alt="help link"/><span>Ajuda</span>
                        </div>
                    </AsideBarItem>
                    <AsideBarItem path="about">
                        <div className='flex flex-row'>
                            <img className="icon asideBarIcon" src={about} alt="about link"/><span>Sobre nos</span>
                        </div>
                    </AsideBarItem>
                </ul>

                <div className='footer flex flex-column align-center justify-end'>
                    <div className='footer-content-1'>
                        <button className='btn txt-white flex flex-row' onClick={ButtonClick}>
                        <img src={logoutIcon} alt="logout button" /> <span>Terminar sessao</span>
                        </button>
                    </div>
                    <div className='flex flex-row footer-content-1' >
                        <p>Partilhar com:</p>
                        <FontAwesomeIcon icon={["fal", "facebook"]} />
                        <i className='fa fa-facebook'></i>
                        <i className='fa fa-facebook'></i>
                        <i className='fa fa-facebook'></i>
                        <i className='fa fa-facebook'></i>
                    </div>
                </div>
            </div>

        </aside>
    )
}

export default function Dashboard({ user } : any) {

    return (
        <div className="sheet sheet-1 flex flex-center" id="dashboard">
            <AsideBar user={user.username} />
            <section className='a-section dash-section'>
                <Routes>
                    <Route element={<Home />} path='home' />
                    <Route element={<Profile />} path='profile' />
                    <Route element={<NotFound />} path="*" />
                </Routes>
            </section>
            <aside className='rightAsideBar flex flex-column justify-end'>
                <div className='forum-item'>
                    <figure>
                        <figcaption className='txt-center'>
                            Lorem ipsum dolar samer
                        </figcaption>
                    </figure>
                </div>
                <div className='forum-item'>
                    <figure>
                        <figcaption className='txt-center'>
                            Dolar summit ammer
                        </figcaption>
                    </figure>
                </div>
            </aside>
        </div>
    );

}
