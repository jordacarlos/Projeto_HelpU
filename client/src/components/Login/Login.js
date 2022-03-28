import img from '../../assets/undraw_security.svg'
import {useState} from 'react'
import "./Login.css"
import Logo from '../../assets/LogoP.png'


const Login = () =>{

    const [NameLogin, SetNameLogin] = useState ("");
    const [SenhaLogin, setSenhaLogin] = useState ("");

    const ValidaLogin = () =>{
        if(NameLogin == "admin" && SenhaLogin == "admin"){
            alert("Login com sucesso");
        }
        else{
            alert("Login/Senha incorreta");
        }
    }

    const ClearInput = () =>{
        setSenhaLogin("");
        SetNameLogin("");
    };
    return(
        <div className='Main'>
            <div className="FormBody">
                <img src={img} className="undraw"></img>
                <img src={Logo} className="Logo"></img>
                <div className='Form'>
                    <h2>Login Admin</h2>
                    <input type="text" placeholder="Nome" value={NameLogin} onChange={(e) => {(SetNameLogin(e.target.value))}} />
                    <input type="password" placeholder="Senha" value={SenhaLogin} onChange={(e) => {(setSenhaLogin(e.target.value))}} />
                    <button onClick={ValidaLogin}>Login</button>
                    <button href="/" className='btn_Cancelar' onClick={ClearInput}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}

export default Login