// Store the wallet amount to your local storage with key "amount"
   
  
   let val=JSON.parse(localStorage.getItem("amount")) ||0;
   document.getElementById("wallet").append(val);
function fun(){
    event.preventDefault()
    
    let value= document.getElementById("amount").value;
      value=+value;
    val+=value;
    localStorage.setItem("amount", JSON.stringify(val));
    window.location.reload();
}
