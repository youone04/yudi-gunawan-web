import axios from 'axios';
export const getDataLandingPageUtama = () => (dispatch) => {
    return new Promise((solve ,reject) => {
        axios.get('https://sheets.googleapis.com/v4/spreadsheets/1_aChkEXQKEaNd8BR051fZM8D2ncUQdAAUgpVm0IZbeY/values/landing_page_utama!A1:Z100?key=AIzaSyAxdW8pGY3OHkE3EO80ou6ebJ-DceX1YWs')
        .then(res => {
           dispatch({type:'GET_LANDINPAGE_UTAMA' , value: res.data.values})
           solve(res);
        })
        .catch(err => {
            console.log(err);
            reject(false);
        })
        

    })

}