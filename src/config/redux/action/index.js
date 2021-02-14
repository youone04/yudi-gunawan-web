import axios from 'axios';
export const getDataLandingPageUtama = () => (dispatch) => {
    dispatch({type: 'PLACE_HOLDER_LOADING' , value: true})
    return new Promise((solve ,reject) => {
        axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${process.env.REACT_APP_API_KEY_SHEET}/values/card_top_landing_page_utama!A1:Z100?key=${process.env.REACT_APP_API_KEY}`)
        .then(res => {
           dispatch({type:'GET_LANDINPAGE_UTAMA' , value: res.data.values})
           dispatch({type: 'PLACE_HOLDER_LOADING' , value: false})
           solve(res);
        })
        .catch((err) => {
            console.log(err);
        })
        

    })

}

export const getDataNewApps = () => (dispatch) => {
    return new Promise((solve , reject) => {
        axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${process.env.REACT_APP_API_KEY_SHEET}/values/aplikasi_terbaru_landing_page_utama!A1:Z100?key=${process.env.REACT_APP_API_KEY}`)
        .then(res => {
            dispatch({type: 'GET_DATA_NEW_APPS' , value: res.data.values});
            solve(res);
        })
        .catch(e => {
            console.log(e)
        })
    })
}

export const getDataSeeAll = () => (dispatch) => {
    dispatch({type: 'PLACE_HOLDER_LOADING' , value: true})
    return new Promise((solve , reject) => {
        axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${process.env.REACT_APP_API_KEY_SHEET}/values/page_see_all!A1:Z100?key=${process.env.REACT_APP_API_KEY}`)
        .then(res => {
            dispatch({type: 'GET_DATA_SEE_ALL' , value: res.data.values});
            dispatch({type: 'PLACE_HOLDER_LOADING' , value: false})
            solve(res)
        })
        .catch(e => {
            console.log(e)
        })
    })
}