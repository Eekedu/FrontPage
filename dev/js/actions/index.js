import React from 'react';
export const selectUser = (user) => {
    return {
        type: "USER_SELECTED",
        payload: user
    };
};

export const selectArticle = (article) => {
    return {
        type: "ARTICLE_SELECTED",
        payload: article
    };
};

export const clearStates = () => {
    return {
        type: "CLEAR",
        payload: null
    }
}
