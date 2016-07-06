export default function images (state = [
    {
        url: 'http://res.cloudinary.com/dp8chgkxw/image/upload/c_scale,h_150/v1467147340/simpsons/homer_simpson.png',
        title: 'Homer'
    },
    {
        url: 'http://res.cloudinary.com/dp8chgkxw/image/upload/c_scale,h_150/v1467147431/simpsons/marge_simpson.png',
        title: 'Marge'
    },
    {
        url: 'http://res.cloudinary.com/dp8chgkxw/image/upload/c_scale,h_150/v1467147398/simpsons/bart_simpson.jpg',
        title: 'Bart'
    },
    {
        url: 'http://res.cloudinary.com/dp8chgkxw/image/upload/c_scale,h_150/v1467147461/simpsons/lisa_simpson.png',
        title: 'Lisa'
    },
    {
        url: 'http://res.cloudinary.com/dp8chgkxw/image/upload/c_scale,h_150/v1467148220/simpsons/maggie_simpson.jpg',
        title: 'Maggie'
    }
], action) {
    switch (action.type) {
        case 'UPLOAD_IMAGE':
            // Add image to collection
            return [...state, action.payload]
        default:
            return state
    }
};
