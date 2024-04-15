import './App.css'
import { Login } from './components/login'
import { getTokenFromUrl } from './components/login/spotify.js';
import { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-node';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = "";
        const _token = hash.access_token;

        if(_token) {
          setToken(_token);

          spotify.setAccessToken(_token);

          spotify.getMe()
            .then(user => {
              console.log('I', user)
            })
        };


    }, [])

  return (
    <div className='app'>
      {
        token ? (
          <h1>I am logged in</h1>
        ) : (
          <Login/>
        )
      }
    </div>
  )
}

export default App
