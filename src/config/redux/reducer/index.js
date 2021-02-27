let initisalState = {
    landingPageUtama  : {},
    dataNewApps: {},
    dataSeeAll: {},
    placeHolderLoading: false,
    dataKontak : {}
}

export const dataSheets = (state = initisalState , action) => {
    switch(action.type){
        case 'GET_LANDINPAGE_UTAMA':
            return{
                ...state,
                landingPageUtama: action.value
            }
        case 'GET_DATA_NEW_APPS':
            return{
                ...state,
                dataNewApps: action.value

            }
        case 'GET_DATA_SEE_ALL':
            return{
                ...state,
                dataSeeAll: action.value
            }
        case 'PLACE_HOLDER_LOADING':
            return{
                ...state,
                placeHolderLoading: action.value
            }
        case 'GET_DATA_KONTAK': {
            return{
                ...state,
                dataKontak: action.value
            }
        }
        default : return state;
    }
}