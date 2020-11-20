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
        .post(url+api, payload)
        .catch(
            e => console.error(e)
        )
    return res.data
}

export async function Put(api, payload)  {
    const res = await axios
        .put(api, payload)
        .catch(
            e => console.error(e)
        )
    return res.data
}

export async function Delete(api)  {
    const res = await axios
        .delete(url+api)
        .catch(
            e => console.error(e)
        )
    return res.data
}

export async function Patch(api, payload)  {
    const res = await axios
        .patch(url+api, payload)
        .catch(
            e => console.error(e)
        )
    return res.data
}




