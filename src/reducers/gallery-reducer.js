export default function images (state = [
    {
        url: 'http://res.cloudinary.com/dp8chgkxw/image/upload/c_scale,h_150/v1467147340/simpsons/homer_simpson.png',
        title: 'Homer',
        isSelected: true
    },
    {
        url: 'http://res.cloudinary.com/dp8chgkxw/image/upload/c_scale,h_150/v1467147431/simpsons/marge_simpson.png',
        title: 'Marge',
        isSelected: false
    },
    {
        url: 'http://res.cloudinary.com/dp8chgkxw/image/upload/c_scale,h_150/v1467147398/simpsons/bart_simpson.jpg',
        title: 'Bart',
        isSelected: false
    },
    {
        url: 'http://res.cloudinary.com/dp8chgkxw/image/upload/c_scale,h_150/v1467147461/simpsons/lisa_simpson.png',
        title: 'Lisa',
        isSelected: false
    },
    {
        url: 'http://res.cloudinary.com/dp8chgkxw/image/upload/c_scale,h_150/v1467148220/simpsons/maggie_simpson.jpg',
        title: 'Maggie',
        isSelected: false
    }
], action) {
    switch (action.type) {
        case 'SELECT_IMAGE':
            return state.map((image, index) => {
                if (index === action.payload) {
                    return {
                        ...image,
                        isSelected: true
                    }
                }
                return {
                    ...image,
                    isSelected: false
                }
            })
        case 'UPLOAD_IMAGE':
            // Add image to collection
            return [...state, action.payload]
        default:
            return state
    }
};
