import {API_BASE} from "../constants/Contants";

export class Auth {
    urls = {
        signup: `${API_BASE}/auth/signup`,
        signin: `${API_BASE}/auth/signin`,
    };

    async signup(params) {
        const response = await fetch(this.urls.signup,
            {
                method: 'POST',
                body: JSON.stringify(params),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }).catch((err) => {
            console.log(err);
        });

        if (response) {
            return await response.json().catch((err) => {
                console.log(err);
            });
        }
    }
}

export default new Auth();
