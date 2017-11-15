export default function (state=null, action) {

    switch (action.type){
        case "ARTICLE_SELECTED":
            return action.payload;
            break;
        case "CLEAR":
            return null;
            break;
    }
    return state;

}