export const getUser = async(id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    if(!res.ok){
        console.log('Error occured');
    }
    const data = await res.json();
    console.log('data is ',data);
    return data;
};