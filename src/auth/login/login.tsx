import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './login.css';
import enterIcon from '../../assets/image/login_rounded_right_48px.png';
import * as React from 'react';

interface iLogin {
	users: any;
	onLogin: Function;
	onLoading:Function;
}


export default function Login({ users, onLogin, onLoading }: iLogin) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	function validateForm() {
		return username.length > 0 && password.length > 0;
	}

	function hendlerSubmit(e:any) {
		e.preventDefault();

		let user = users.find((user:any) => user.username === username && user.password === password);
		if (user) {
			onLoading(true);
			setTimeout(async () => {
				if (user.username && user.password) {
					onLogin(user);
					
					let checkUser = JSON.parse(localStorage.getItem("user")!);

					if(checkUser && checkUser.username){
						localStorage.removeItem("user");
					}
					
					localStorage.setItem("user", JSON.stringify(user));

					navigate('/'+user.username)
				} else {
					console.log('username or password wrong!')
				}
				onLoading(false)
			}, 5000);
		} else {
			console.log('username or password wrong!')
		}
	}


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
						<form className="a-form form-1 flex flex-column flex-center" onSubmit={hendlerSubmit}>
							<div className="form-group">
								<input type="text" id="ID" name="ID" className="form-control f-control-1" placeholder="Email ou Telefone" required
									onChange={(e) => setUsername(e.target.value)} />
							</div>

							<div className="form-group">
								<input type="password" id="password" name="password" className="form-control f-control-1" placeholder="Palavra Passe" required
									onChange={(e) => setPassword(e.target.value)} />
							</div>

							<div className="form-group showError flex flex-center"></div>

							<div className="form-group flex flex-center">
								<button type="submit" className="btn btn-radius fs-large" id="btn-login"
									disabled={!validateForm()}>
										<img src={enterIcon} alt="login button" />
									</button>
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
