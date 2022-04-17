import { Link, Outlet } from 'react-router-dom';

import './register.css';

import studantIcon from '../../assets/image/icons8_student_male_1.ico';
import contributorIcon from '../../assets/image/icons8_businessman_2.ico';


function ButtonLink({ imgSrc, href, id, name }) {
	return (
		<div id={id} className="bg-darkblue-palette-3 flex flex-column flex-centet">
			<button className="btn flex flex-column flex-center">
				<img className="icon img-1" src={imgSrc} alt={name +' icon'}/>
				<Link className="flex flex-column flex-center a-txt fs-normal f-bold" to={href}> {name}</Link>
			</button>
		</div>
	)
}

export default function Register() {
	return (
		<div className="sheet sheet-1 flex flex-center a-slidein a-fadein" id="register">
			<div className="block flex flex-column bg-darkblue-palette" id="block">
				<header className="block-1 flex flex-center bg-darkblue-palette-2">
					<p className="a-txt txt-3 fs-normal">Criar Conta</p>
				</header>
				<section className="block-2 flex flex-column flex-center">
					<div className="block-2-1 flex flex-row flex-center">

						<ButtonLink imgSrc={studantIcon} href="/register/student" id="btn-student" name="Estudante"/>
						<ButtonLink imgSrc={contributorIcon} href="/register/contributor" id="btn-businessman" name="Contribuente"/>

					</div>

					<div className="block-2-2 flex flex-column">
						<p className="a-txt txt-6 fs-normal">Quer ajuda?</p>
						<p className="a-txt txt-7 fs-normal">
							<Link to="/information" className="txt-color-ocean">Clique aqui</Link> pra saber mais.
						</p>
					</div>
					<div className="block-2-3 flex justify-end">
						<button className="btn btn-radius btn-radius-neon" id="back">
							<Link to="/login">voltar</Link>
						</button>
					</div>
				</section>
			</div>

			<Outlet />
		</div>
	);
}
