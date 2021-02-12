let initisalState = {
    landingPageUtama  : {}
}

export const dataSheets = (state = initisalState , action) => {
    switch(action.type){
        case 'GET_LANDINPAGE_UTAMA':
            return{
                ...state,
                landingPageUtama: action.value
            }
        default : return state;
    }
}