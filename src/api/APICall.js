import axios from "axios";

const baseUrl = 'https://basic-blog.teamrabbil.com/api';

export async function postCatergory(){
    let res = await axios.get(baseUrl + '/post-categories');

    if(res.status === 200){
        return res.data;
    }else{
        return []
    }
}


export async function newestPost(){
    let res = await axios.get(baseUrl + '/post-newest');

    if(res.status === 200){
        return res.data;
    }else{
        return [];
    }
}