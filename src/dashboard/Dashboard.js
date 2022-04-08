import { Link, Route, Routes } from 'react-router-dom';
import './Dashboard.css';
import Home from "./home/Home";
import Profile from "./profile/Profile";
import userIcon from '../assets/image/user.png';
// import home from '../assets/image/Menu Principal/home.png'

function AsideBarItem({ children, path }) {
    return (
        <li className='asideBar-item'>
            <Link to={path}> { children } </Link>
        </li>
    )
}

function AsideBar() {
    return (
        <aside className='asideNavBar'>
            <div className='asideNavBar-content'>
                <ul className='menu'>
                    <AsideBarItem path="/profile">
                        <div className='flex flex-center'>
                            <img src={userIcon}/>
                        </div>
                    </AsideBarItem>
                    <AsideBarItem content="Pagina Inicial" path="/home"/>
                    <AsideBarItem content="Mensagem" path="/messenger"/>
                    <AsideBarItem content="Notificacoes" path="/notification"/>
                    <AsideBarItem content="Ajuda" path="/help"/>
                    <AsideBarItem content="Sobre nos" path="/about"/>
                </ul>
            </div>
        </aside>
    )
}

export default function Dashboard({ user }) {

    return (
        <div className="sheet sheet-1 flex flex-center bg-darkblue-palette" id="dashboard">
            <AsideBar />
            <section>
                <Routes>
                    <Route element={<Home />} path="home" />
                    <Route element={<Profile />} path="profile" />
                </Routes>
            </section>
        </div>
    );

}
