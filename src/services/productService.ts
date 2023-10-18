import axios from 'axios';
// import { productsMocks } from '../mocks/products';

const getProducts = async () => {
    // return productsMocks;

    const { data } = await axios({
        url: 'http://localhost:3001/api/products',
        method: 'GET',
    });

    return data;
};

export { getProducts };
