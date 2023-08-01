import {useState} from 'react';
import Login from './Login'
const Success = () => {

    const [classLogout, setClassLogout] = useState('classe-inicial')

    const logout = () => {
        setClassLogout('hide') 
    }

    return(
        <div id="container-logout">
            <div className={classLogout} >
                <h1>Obrigado por logar!</h1>
                <button onClick={logout} >Logout</button>
            </div>

            <div id="logout">
                {classLogout === 'hide' && <Login />}
            </div>

        </div>
    )
}

export default Success
