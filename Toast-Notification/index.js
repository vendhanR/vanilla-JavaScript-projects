const message = "Hello! welcome to the website.";

let index = 0

const myInterval = setInterval(()=> {
    console.log("kjdb")
    document.body.innerText = message.slice(0,index);
    if(index > message.length) {
        index = 0;
        clearInterval(myInterval)
    }
    index++;
},100)