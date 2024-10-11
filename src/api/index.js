export const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await response.json();
}


export const profiles = async () => {
    const response = await fetch("https://randomuser.me/api/")
    // console.log(response);
    return await response.json();
    
}