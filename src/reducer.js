export const initialState = {
    user: null,
    // Remove after finished developing
    // 'BQAwumfmFXGPlHZ08BCkDDdFsKsL5df5nVlr8Hvtw09QOAfyZQ1qkYjuKIM65rhCa41TCdFpv56OBodZ-Skj0F0Kuc5ZtcjrSV8t4mLEja16zxj_juERnpVcgjELJLxdgJoFU4wU1KcGz4j6R4Rz79bTBlgKuA',
    // token: 'BQAwumfmFXGPlHZ08BCkDDdFsKsL5df5nVlr8Hvtw09QOAfyZQ1qkYjuKIM65rhCa41TCdFpv56OBodZ-Skj0F0Kuc5ZtcjrSV8t4mLEja16zxj_juERnpVcgjELJLxdgJoFU4wU1KcGz4j6R4Rz79bTBlgKuA',
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: null,
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
            break;
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
            break;
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
            break;
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
            break;
        default:
        return state;
            break;
    }
}

export default reducer