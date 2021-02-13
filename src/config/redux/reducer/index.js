let initisalState = {
    landingPageUtama  : {},
    dataNewApps: {}
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
        default : return state;
    }
}