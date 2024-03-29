import axios from "axios";
const url="";

export const getTodos = async () => {
    const response = await axios.get(url+'/all');
    return await response;
};

export const delItem = async (id) => {
    const response = await axios.delete(url+'/delete/'+id);
    return await response;
};

export const delItems = async () => {
    const response = await axios.delete(url+'/deleteAll');
    return await response;
};

export const addItem = async (formdata) => {
    const response = await axios.post(url+'/add',formdata);
    return await response;
};

export const doneItem = async (id) => {
    const response = await axios.put(url+'/done/'+id);
    return await response;
};