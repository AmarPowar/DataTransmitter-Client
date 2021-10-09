export const readRawJsonData= ()=>{
    return {
        "name" : "laptop name",
        "ip" : "laptop IP",
        "Mac_address" : "laptop mac address"
    }
}



export const GenerateRandomIp = () => {
    return (Math.floor(Math.random() * 255) + 1) + "." + (Math.floor(Math.random() * 255)) + "." + (Math.floor(Math.random() * 255)) + "." + (Math.floor(Math.random() * 255));
}