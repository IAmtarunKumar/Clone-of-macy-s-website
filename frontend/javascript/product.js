let offerdiv = document.querySelector(".offerdiv");
offerdiv.style.display = "none";

let discountdiv = document.querySelector(".discountdiv");
discountdiv.style.display = "none";

let clickLabel = document.querySelectorAll(".clickLabel");

let x = true;
clickLabel.forEach((item,index)=>{


item.addEventListener("click", () => {
  console.log(index);
if(index==0){


  if (x) {
    
    offerdiv.style.display = "block";

    x = false;
  } else {
    offerdiv.style.display = "none";
    console.log(item);
    x = true;
  }

}else if(index==1){
    if (x) {
    
        discountdiv.style.display = "block";
    
        console.log(item + "a");
    
        x = false;
      } else {
        discountdiv.style.display = "none";
        console.log(item);
        x = true;
      } 
}

});
})
