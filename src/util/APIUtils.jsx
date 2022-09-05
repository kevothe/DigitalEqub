import { API_BASE_URL , ACCESS_TOKEN } from '.././constants';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};


export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/signin",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
 console.log(signupRequest);
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest),
   
    });
   
}

export function forgotPassword(forgotPassword){
    return request({
        url: API_BASE_URL + "/rec/forgot_password",
        method: 'POST',
        body: JSON.stringify(forgotPassword)
    });
}
export function resetPassword(resetPasswordRequest){
    return request({
        url: API_BASE_URL + "/rec/reset_password",
        method: 'POST',
        body: JSON.stringify(resetPasswordRequest)
    });
}

export function upload(uploadRequest){
    const formData = new FormData();
    formData.append('File', uploadRequest.FormData);
    return request({
        url: API_BASE_URL + "/file/upload",
        method: 'POST',
        body: formData
    });
}
export function download(downloadRequest)
{
    return request({
        url: API_BASE_URL + "/file/download",
        method: 'GET',
        body: JSON.stringify(downloadRequest)
    });
}

export function checkUsernameAvailability(username) {
    return request({
        url: API_BASE_URL + "/user/checkUsernameAvailability?username=" + username,
        method: 'GET'
    });
}

export function checkEmailAvailability(email) {
    return request({
        url: API_BASE_URL + "/user/checkEmailAvailability?email=" + email,
        method: 'GET'
    });
}


export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}

export function getUserProfile(username) {
    return request({
        url: API_BASE_URL + "/users/" + username,
        method: 'GET'
    });
}


