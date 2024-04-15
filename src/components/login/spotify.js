const authEndPoint = 'https://accounts.spotify.com/authorize';
const client_id = '9bb47fbf670445ed98a603673de75303';
const redirect_uri = 'http://localhost:5173/';
const scope = 'streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';

export const auth_url = `${authEndPoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=token&show_dialog=true`

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {})
}

