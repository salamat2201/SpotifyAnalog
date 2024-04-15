import logo_spotify from '../../../assets/img/spotify2019-830x350.jpg'
import './Login.css'
import {auth_url} from '../spotify.js'


export const Login = () => {
    

    return (
        <div className='login'>
            <img 
                src={logo_spotify}
                alt="" />
            <a href={auth_url}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}