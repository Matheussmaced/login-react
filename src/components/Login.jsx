import {useState} from 'react';
import Success from './Success';

const Login = () =>{

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [texto, setTexto] = useState('')
    const [classDoForm, setClasseDoForm] = useState('classe-inicial')

    Number(setPassword);

    const enviou = (e) =>{
        e.preventDefault()

        if(login === 'usuario' && password === '123'){
                setClasseDoForm('hide')
                setTexto('')        
        }else{
            setTexto('Login ou senha incorretos. Tente novamente')
        }

    }
            

    return(
        <div id='container-master'>
            <div id="form" className={classDoForm}>
                <form>
                    <h1>Login</h1>
                    <div id="login">
                        <input type="text" placeholder="Login" onChange={(e)=>setLogin(e.target.value)}/>
                    </div>

                    <div id="password">
                        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                    </div>

                    <input id='submit' onClick={enviou} type="submit" value='Login'/>
                </form>

                
            </div>

            <div id="resultado">
                {texto}
                {classDoForm === 'hide' && <Success />}
            </div>
        </div>

    )
}

export default Login
