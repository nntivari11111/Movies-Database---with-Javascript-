// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


let amount=JSON.parse(localStorage.getItem("amount"))
document.getElementById("wallet").append(amount);
 

function func(){
   let value= document.getElementById("number_of_seats").value;
    let total=value*100;
    if(total<=amount){
        amount-=total
        alert("Booking successful!")
        window.location.reload()
    }
   else{
       alert("Insufficient Balance!")
   }
    localStorage.setItem("amount", JSON.stringify(amount));
    
}


let checkout = JSON.parse(localStorage.getItem("movie"))|| [];
let movies=document.getElementById("movie");
checkout.forEach(function (el){
    let box=document.createElement("div");
    let poster=document.createElement("img");
   poster.src=el.Poster;
   poster.style.margin="auto";
 let name=document.createElement("h1");
 name.innerText=el.Title;
 name.style.textAlign="center";

     box.append(name,poster)
    movies.append(box);
    
});