import axios from 'axios'

const url = "http://localhost:8000/"

export async function Get(api)  {
    const header = {
        headers: {
        }
    };
    
    const res = await axios
        .get(url+api, header)
        .catch(
            e => console.error(e)
        )
    return res.data
}

export async function Post(api, payload)  {
    const res = await axios
        .post(api, payload)
        .catch(
            e => console.error(e)
        )
    console.log(res)
}

export async function Put(api, payload)  {
    const res = await axios
        .put(api, payload)
        .catch(
            e => console.error(e)
        )
    console.log(res)
}

export async function Delect(api)  {
    const res = await axios
        .delete(api)
        .catch(
            e => console.error(e)
        )
    console.log(res)
}


