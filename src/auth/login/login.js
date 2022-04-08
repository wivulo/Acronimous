import { Link, Outlet } from 'react-router-dom';
import './login.css';

export default function Login() {

	return (
		<div className="sheet sheet-1 flex flex-center" id="login">
			<div className="block flex flex-column bg-darkblue-palette" id="block">
				<header className="block-1 flex flex-center bg-darkblue-palette-2">
					<p className="a-txt txt-3 fs-normal">Iniciar sessão</p>
				</header>
				<section className="block-2 flex flex-column flex-center">
					<div className="block-2-1 flex flex-center bg-darkblue-palette-3">
						<p className="a-txt txt-4 fs-normal">
							Inicie a sessão ou crie uma nova conta para desfrutar
							de novas experiências dentro da nossa comunidade.
						</p>
					</div>

					<div className="block-2-2 bg-darkblue-palette-3">
						<form className="a-form form-1 flex flex-column flex-center">
							<div className="form-group">
								<input type="text" id="ID" name="ID" className="form-control f-control-1" placeholder="Email ou Telefone" required />
							</div>

							<div className="form-group">
								<input type="password" id="password" name="password" className="form-control f-control-1" placeholder="Palavra Passe" required />
							</div>

							<div className="form-group showError flex flex-center"></div>

							<div className="form-group flex flex-center">
								<button type="submit" className="btn btn-radius fs-large" id="btn-login">&#10162;</button>
							</div>

						</form>
					</div>

					<div className="block-2-3 flex flex-column flex-h-center bg-darkblue-palette-3">
						<button className="signUp btn-radius btn-radius-neon" id="signUp"><Link to="/register">criar conta</Link></button>
						<button className="forgot btn-radius btn-radius-neon" id="forgot"><Link to="/forgot">Esqueci a palavra-passe</Link></button>
					</div>
				</section>
			</div>
			<Outlet />
		</div>
	);

}
