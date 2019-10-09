import axios from 'axios';

export default axios.create({
    baseURL: `https://actionfigureshop.azurewebsites.net/api/`,
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': "JWT " + localStorage.getItem('token')
    },
    // xsrfCookieName: 'csrftoken',
    //xsrfHeaderName: 'X-CSRFToken',
    // withCredentials: true
});