import { Link } from 'react-router-dom';
import './Home.css';
import library from '../../assets/image/Menu Principal/icons8_book_shelf_1.ico';
import forum from '../../assets/image/Menu Principal/icons8_discussion_forum_1.ico'
import classroom from '../../assets/image/Menu Principal/icons8_classroom_1.ico'
import packageMoney from '../../assets/image/Menu Principal/icons8_einstein_2.ico'
import studyTips from '../../assets/image/Menu Principal/icons8_discussion_forum_1.ico'
import settings from '../../assets/image/Menu Principal/icons8_settings.ico'
import sugestion from '../../assets/image/Menu Principal/icons8_light_on_2.ico'

function HomeItem({icon, text, path}){
	return (
		<Link to={path}>
			<div className='home-item flex flex-row flex-center'>
				<img src={icon} alt={text}/>
				<span>{text}</span>
			</div>
		</Link>
	)
}

export default function Home() {

	return (
		<div className="sheet sheet-2 grid" id="home">
			<HomeItem icon={library} text="Biblioteca" path="library" />
			<HomeItem icon={forum} text="forum" path="forum" />
			<HomeItem icon={classroom} text="Turmas" path="classroom" />
			<HomeItem icon={packageMoney} text="Carteira" path="packageMoney" />
			<HomeItem icon={studyTips} text="Dicas de estudo" path="studyTips" />
			<HomeItem icon={sugestion} text="Sugestao" path="sugestion" />
			<HomeItem icon={settings} text="Definicoes" path="settigns" />
		</div>
	);

}
