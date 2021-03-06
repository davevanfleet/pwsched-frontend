import { config } from '../constants';

export function getCurrentUser() {
    return (dispatch) => {
        dispatch({ type: 'START_GETTING_CURRENT_USER' });
        const configObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": 'application/json'
            },
            body: JSON.stringify({}),
            credentials: 'include'
        }
        fetch(`${config.url.API_URL}/get_current_user`, configObject)
            .then(response => {
                if (!response.ok){ throw response }
                return response.json()
            })
            .then(json => {
                const user = json.user
                dispatch({type: 'ASSIGN_CURRENT_USER', user: user})
            })
    };
}