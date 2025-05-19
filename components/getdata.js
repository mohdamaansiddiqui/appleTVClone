
async function getData(url)
{
    let res=await fetch(url)
    let data=await res.json();
    return data;

};

export default getData;