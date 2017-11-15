const articles = (state = [], action) => {
    switch (action.type){
        case 'ADD_ARTICLE':
            return [
                ...state,
                articles(undefined, Object.assign(action, {
                    id: state.length
                }))
            ]
        case 'TOGGLE_ARTICLE':
            return state.map(t => articles(t, action)
            )
        case 'GET_ARTICLE_DATA_RECEIVED':
            return action.data
        default:
            return state
    }
}

export default articles