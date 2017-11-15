export default function (state=null, action) {

    switch (action.type){
        case "USER_SELECTED":
            return action.payload;
            break;
        case "CLEAR":
            return state;
            break;
    }
    return state;
    
}