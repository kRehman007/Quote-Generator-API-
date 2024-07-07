const quote=document.getElementById('quote')
const author=document.getElementById('author')

const apiUrl="https://api.quotable.io/random"

async function getCode(url){
    const response= await fetch(url)
    let data=await response.json()
    quote.innerHTML=data.content
    author.innerHTML=data.author
}

function Tweet(){
     window.open("https://twitter.com/intent/tweet?text="+ quote.innerHTML+ "----by "+ author.innerHTML,
         "Tweet Window", "width=600","height=300")

    // window.open('https://www.facebook.com' ,'width=600',"height=300")
}
