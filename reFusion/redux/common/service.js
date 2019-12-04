import request from './ApiUtils';

function getDishes() {
    return request({
        url:    `/dishes`,
        method: 'GET'
    });
}

function getLeaders() {
    return request({
        url:    `/leaders`,
        method: 'GET'
    });
}

function getPromos() {
    return request({
        url:    `/promotions`,
        method: 'GET'
    });
}

function getComments() {
    return request({
        url:    `/comments`,
        method: 'GET'
    });
}

function createFeedback({subject, content}) {
    return request({
        url:    '/feedback/create',
        method: 'POST',
        data:   {
            subject,
            content
        }
    });
}

function createFavorite({subject, content}) {
    return request({
        url:    '/favorite/create',
        method: 'POST',
        data:   {
            subject,
            content
        }
    });
}

const ApiServices = {
    getDishes, getComments, getLeaders, getPromos, createFavorite, createFeedback
};

export default ApiServices;