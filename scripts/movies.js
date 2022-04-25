// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let amount=JSON.parse(localStorage.getItem("amount"))
document.getElementById("wallet").append(amount);

let checkout = JSON.parse(localStorage.getItem("movie"))|| [];

let movies=document.getElementById("movies");
let id;
async function searchMovies(){
try{
    const name=document.getElementById("search").value;
    const url = `https://www.omdbapi.com/?apikey=b582f7fc&s=${name}`;
    const res=await fetch(url);
    const data=await res.json();
    const movies=data.Search;
    return movies   
}
catch(err){
    console.log(err);
}
}
function appendMovies(data){
    movies.innerHTML=null;

    data.forEach(function (el){
        let box=document.createElement("div");
        let poster=document.createElement("img");
       poster.src=el.Poster;
     let name=document.createElement("h4");
     name.innerText=el.Title;
     var btn=document.createElement("button");
         btn.innerText="Book Now";
         box.append(poster,name,btn)
        movies.append(box);
         btn.addEventListener("click", function () {
            show(el);
      });
    });
   
 }
async function main(){
    let data=await searchMovies();
   // console.log(data)
   if(data===undefined){
       alert("no record found");
       return false
   }
    appendMovies(data);
}

function debounce(func,delay){
    if(id){
        clearTimeout(id);
    }
      id=setTimeout(function(){
         func();
     },delay);
}

function show(el){
    checkout.push(el);
    localStorage.setItem("movie", JSON.stringify(checkout));
    window.location.href="checkout.html";

}