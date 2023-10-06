const api ='https://restcountries.com/v3.1/all'

const getData=async (resource)=>{

    const request = await fetch(resource)
    if (request.status !=200) {
        throw new Error('not a page..');;
    }
    const data =await request.json()
    return data

}
getData(api)
.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})