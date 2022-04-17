import { useState } from 'react';
import './contributor.css';
import contributorIcon from '../../assets/image/icons8_businessman_2.ico';
import uploadImage from "../../assets/image/upload_icon.png";


function RegisterItem({ children, item, activeItm }) {
    return (
        <div className={
            (item === activeItm) ? 'active item flex flex-center flex-column' : 'item flex flex-center flex-column'
        }>
            {children}
        </div>
    );
}


function Button({ content, eventHandler, isDisabled, id }) {
    return (
        <button type='button' id={id} className={(isDisabled) ? 'disabled btn btn-radius btn-radius-neon' : 'btn btn-radius btn-radius-neon'}
            onClick={eventHandler}>
            {content}
        </button>
    )
}

export default function Contributor() {

    const [activeItem, setActiveItem] = useState(1);

    function slideNext() {
        if (activeItem < 9) setActiveItem(activeItem + 1)
    }

    function slidePrev() {
        if (activeItem !== 1) setActiveItem(activeItem - 1)
    }

    return (
        <div className="sheet sheet-1 flex flex-center a-slidein a-fadein" id="student">
            <div className="block flex flex-column bg-darkblue-palette" id="block">
                <header className="block-1 flex flex-center bg-darkblue-palette-2">
                    <p className="a-txt txt-3">Criar Conta</p>
                </header>
                <section className="block-2 flex flex-column flex-center">
                    <div className="block-2-1">
                        <span className="txt-4 fs-small-2">Dados Pessoas</span>
                        <div className="content-1 flex justify-end">
                            <img className="img-1" src={contributorIcon} alt="contribuente icon"/>
                        </div>

                        <div className="content-2 flex flex-center">
                            <form className="form flex flex-column" acceptCharset="utf-8">
                                <div className="content-2-1">

                                    <RegisterItem item="1" activeItm={activeItem}>
                                        <h5 className="txt txt-5">Qual é o seu nome?</h5>
                                        <div className="form-group">
                                            <input className="form-control f-control-1" type="text" name="name" id="name"
                                                placeholder="Nome" autoFocus />
                                            <input className="form-control f-control-1" type="text" name="nickname" id="nickname"
                                                placeholder="Sobrenome" />
                                        </div>
                                    </RegisterItem>

                                    <RegisterItem item="2" activeItm={activeItem}>
                                        <h5 className="txt txt-5">Por qual nome deseja ser tratado?</h5>
                                        <div className="form-group">
                                            <label htmlFor="username">Nome de usuario</label>
                                            <input className="form-control f-control-1" type="text" name="username" id="username"
                                                placeholder="Ex: user23" />
                                        </div>
                                    </RegisterItem>

                                    <RegisterItem item="3" activeItm={activeItem}>
                                        <h5 className="txt txt-5">Data de nascimento?</h5>
                                        <div className="form-group flex flex-row flex-center date-group">
                                            <input className="form-control f-control-1 birthDate" type="number" name="day" id="day"
                                                maxLength="2" placeholder="DD" />
                                            <input className="form-control f-control-1 birthDate" type="number" name="month"
                                                id="month" maxLength="2" placeholder="MM" />
                                            <input className="form-control f-control-1 birthDate" type="number" name="year"
                                                id="year" minLength="4" maxLength="4" placeholder="YYYY" />
                                        </div>
                                    </RegisterItem>

                                    <RegisterItem item="4" activeItm={activeItem}>
                                        <h5 className="txt txt-5">diga-nos o seu endereço de email e número</h5>
                                        <div className="form-group">
                                            <input className="form-control f-control-1" type="email" name="email" id="email"
                                                placeholder="Email" />
                                            <input className="form-control f-control-1" type="number" name="phone" id="phone"
                                                placeholder="Numero" />
                                        </div>
                                    </RegisterItem>

                                    <RegisterItem item="5" activeItm={activeItem}>
                                        <h5 className="txt txt-5">diga-nos a sua Área de formação</h5>
                                        <div className="form-group">
                                            <select name="formation" id="formation" className="form-control f-control-1">
                                                <option value="1">Engenharia de Telecomunições</option>
                                                <option value="2">Engenharia Electrônica</option>
                                            </select>
                                        </div>
                                    </RegisterItem>

                                    <RegisterItem item="6" activeItm={activeItem}>
                                        <h5 className="txt txt-5">Insira o nº do seu documento de identificação.</h5>
                                        <div className="form-group">
                                            <input className="form-control f-control-1" type="text" name="identification" id="identification"
                                                placeholder="Nº do Bilhete de identidade" />

                                            <div id="upload-BI-section">
                                                <div className="icon icon-1">
                                                    <label htmlFor="BI">
                                                        <img src={uploadImage} className="img-small" alt="upload" />
                                                    </label>
                                                </div>

                                                <input type="text" name="fileselect" id="fileselect" className="form-control f-control-1" placeholder="Bilhete de identidade" readOnly />
                                            </div>

                                            <input className="form-control f-control-1" type="file" name="BI" id="BI" />
                                        </div>
                                    </RegisterItem>

                                    <RegisterItem item="7" activeItm={activeItem}>
                                        <h6 className="txt txt-5">Para a sua segurança, os seus dados bancários serão mantidos privados,
                                            podendo ser acessado apenas por você.</h6>
                                        <div className="form-group">
                                            <select name="bank" id="bank" className="form-control f-control-1"></select>
                                            <input type="text" className="form-control f-control-1" name="accountNumber" id="accountNumber" placeholder="Nº de conta" />
                                            <input type="text" className="form-control f-control-1" name="accountIBAN" id="accountIBAN" placeholder="IBAN" />
                                        </div>
                                    </RegisterItem>

                                    <RegisterItem item="8" activeItm={activeItem}>
                                        <h6 className="txt txt-5">Para a sua segurança, os seus dados bancários serão mantidos privados,
                                            podendo ser acessado apenas por você.</h6>
                                        <div className="form-group">
                                            <label htmlFor="subscribe">Subscrição/Mês<span className="color-red">*</span></label>
                                            <select type="text" className="form-control f-control-1" name="subscribe" id="subscribe">
                                                <option value="">__ seleciona uma subscrição __</option>
                                            </select>
                                        </div>
                                    </RegisterItem>

                                    <RegisterItem item="9" activeItm={activeItem}>
                                        <h5 className="txt txt-5">Cria uma Palavra-passe para sua conta.</h5>
                                        <div className="form-group">
                                            <input className="form-control f-control-1" type="password" name="password"
                                                id="password" placeholder="Palavra-passe" />
                                            <input className="form-control f-control-1" type="password" name="CPassword"
                                                id="CPassword" placeholder="Confirme a Palavra-passe" />
                                            <div className="showError flex flex-center"></div>
                                        </div>
                                        <div className="agree-content">
                                            <input type="checkbox" name="agree" id="agree" />
                                            <small className="txt txt-7">Ao clicar em Finalizar, estara a concordar com nossos
                                                <strong className="txt-color-ocean">Termos e condições</strong> </small>
                                        </div>
                                    </RegisterItem>

                                </div>

                                <div className="content-2-2 flex flex-row justify-end">
                                    {/* <span className="btn btn-radius btn-radius-neon" id="prev" onClick={slidePrev}>voltar</span> */}
                                    <Button id="prev" eventHandler={slidePrev} content="voltar" isDisabled={(activeItem === 1) ? true : false} />
                                    <Button id="next" eventHandler={slideNext} content="avancar" isDisabled={(activeItem === 9) ? true : false} />
                                    <button type="submit" className="btn btn-radius btn-radius-neon"
                                        id="finalized">Finalizar</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
