import axios from "axios";

const baseUrl = 'https://basic-blog.teamrabbil.com/api';

export async function postCatergory(){
    const res = await axios.get(baseUrl + '/post-categories');

    if(res.status === 200){
        return res.data;
    }else{
        return []
    }
}
