import axios from 'axios';

const OrderForm = {
    getGreater: () => {return axios.get("https://raw.githubusercontent.com/dferrreira/minicart-test/9fe3d2ed740b826c8f5ec26dbb78fa13f1ca871c/src/resources/acima10.json")}, //Data with total greater than 10
    getLess: () => {return axios.get("https://raw.githubusercontent.com/dferrreira/minicart-test/9fe3d2ed740b826c8f5ec26dbb78fa13f1ca871c/src/resources/abaixo10.json")} //Data with total less than 10
}


export default OrderForm;
