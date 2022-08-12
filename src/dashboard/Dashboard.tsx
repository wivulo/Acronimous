import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './Dashboard.css';
import { useEffect, useRef, useState } from 'react';
import Home from "./home/Home";
import Profile from "./profile/Profile";
import { Library } from './library/Library'
import userIcon from '../assets/image/user.png';
import home from '../assets/image/Menu Principal/home.png'
import messenger from '../assets/image/Menu Principal/messengerpng.png'
import notification from '../assets/image/Menu Principal/notification.png'
import help from '../assets/image/Menu Principal/help.png'
import about from '../assets/image/Menu Principal/aboutUs.png'
import NotFound from '../shared/components/notFound';
import {useSpring, animated} from 'react-spring'
import logoutIcon from '../assets/image/logout.png';


interface iAsideBarItemProps{
    path: string;
    imageSrc: any;
    alt: string;
    description?: string;
    style?: any;
    isMenuCollapse?: boolean;
}

function AsideBarItem({ path, imageSrc, alt, description, style, isMenuCollapse }: iAsideBarItemProps) {
    let isClick = false;
    let classes = [
      'asideBar-item flex',
      'flex flex-row nowrap',
      'icon asideBarIcon'
    ]

    if(!description || isMenuCollapse) {
      classes = classes.map(item => item = item.concat(' flex-center'))
    }
   
    if(!description) classes[2] = classes[2].concat(' profileLink')

    function eventHandler() {
        isClick = true;

	if(isClick) classes.concat(' .active')
    }

    return (
        <li className={classes[0]} onClick={eventHandler}>
            <Link to={path}>
	            <div className={classes[1]}>
		            <img className={classes[2]} src={imageSrc} alt={alt}/>
		            {description &&  <AnimatedSpan style={style} content={description} />}
	            </div>
	        </Link>
        </li>
    )
}

const AnimatedSpan = ({style, content}: any) => {
  return <animated.span className='nobreak' style={{...style}}>{content}</animated.span>
}

const AnimatedAside = ({width, style, children}:any) => {
    const classes = 'asideNavBar bg-darkblue-palette'

    if (width <= 850) {
        return <animated.aside className={classes} style={{...style}}>{children}</animated.aside>
    } else {
        return <aside className={classes}>{children}</aside>
    }
}

function AsideBar() {
    const navigate = useNavigate();
    const [width, setWidth] = useState<number>(window.innerWidth)
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

    useEffect(() => {
      const resize = () => setWidth(window.innerWidth)

	if(width <= 850) {
	  setIsCollapsed(true)
	}
	 
      window.addEventListener('resize', resize)
    }, [width])
    
    const ButtonClick = () => {
	    localStorage.removeItem("user");
	    navigate("/login")
    }

    const slideAnimationProps = useSpring({
      width: isCollapsed ? 60 : 180,
    })
    
    const fade = useSpring({
      display: isCollapsed ? 'none' : 'inline',
      fontSize: isCollapsed ? 0 : 14,
      opacity: isCollapsed ? 0 : 1,
    })

    const fade2 = useSpring({
      display: isCollapsed ? 'none' : 'inline',
      fontSize: isCollapsed ? 0 : 13,
      opacity: isCollapsed ? 0 : 1,
    })

    return (
      <AnimatedAside width={width} style={slideAnimationProps}>
            <div className='asideNavBar-content flex flex-column flex-h-center'>
                <ul className='menu'>
		            { (width <= 850) &&
		                <li className='flex flex-row justify-end'>
		                    <button type="button" className='btn-rised fa fa-arrow-right color-white' onClick={() => setIsCollapsed(!isCollapsed)}></button>
		                </li>
		            }
                    <AsideBarItem path="/profile" imageSrc={userIcon} alt='go to profile' isMenuCollapse={isCollapsed} />
                    
                    <AsideBarItem path='home' imageSrc={home} alt='home link' description='Pagina Inicial' style={fade} isMenuCollapse={isCollapsed}/>
                    <AsideBarItem path="messenger" imageSrc={messenger} alt='messenger link' description='Mensagem' style={fade} isMenuCollapse={isCollapsed}/>
                        
                    <AsideBarItem path="notification" imageSrc={notification} alt='notification link' description='Notificações' style={fade} isMenuCollapse={isCollapsed}/>
                        
                    <AsideBarItem path="help" imageSrc={help} alt='help link' description='Ajuda' style={fade} isMenuCollapse={isCollapsed}/>
                    <AsideBarItem path="about" imageSrc={about} alt='about link' description='Sobre nós' style={fade} isMenuCollapse={isCollapsed}/>
                </ul>

                <div className='footer flex flex-column align-center justify-end'>
                    <div className='footer-content-1'>
                        <button className='btn color-white fs-small flex flex-row nowrap' onClick={ButtonClick}>
			                <img src={logoutIcon} alt="logout button" /> 
			                <AnimatedSpan style={fade2} content='Terminar sessao' />
                        </button>
                    </div>
		            
                    <animated.div className='flex flex-column footer-content-1' style={{...fade}} >
                        <p>Partilhar com:</p>
                        <div className='flex flex-row flex-center fs-medium'>
                            <i className='fa fa-facebook'></i>
                            <i className='fa fa-twitter'></i>
                            <i className='fa fa-whatsapp'></i>
                            <i className='fa fa-instagram'></i>
                        </div>
                    </animated.div>
                </div>
            </div>

        </AnimatedAside>
    )
}

export default function Dashboard({ user } : any) {

    return (
        <div className="sheet sheet-1 flex flex-center" id="dashboard">
            <AsideBar />
            <section className='a-section dash-section'>
                <Routes>
                    <Route element={<Home />} path='home' />
                    <Route element={<Profile />} path='profile' />
                    <Route element={<Library />} path='library/*' />
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
