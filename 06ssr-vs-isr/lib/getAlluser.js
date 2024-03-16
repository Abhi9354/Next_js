export const getAllUser= async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if(!res.ok){
        console.log('Error occured');
    }
    const data = await res.json();
    console.log('data is ',data);
    return data;
}