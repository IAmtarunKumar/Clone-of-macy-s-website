let offerdiv = document.querySelector(".offerdiv");
offerdiv.style.display = "none";

let price = document.querySelector(".price");
price.style.display = "none";

let brand = document.querySelector(".brand");
brand.style.display = "none";



let size = document.querySelector(".size");
size.style.display = "none";

let discountdiv = document.querySelector(".discountdiv");
discountdiv.style.display = "none";

let categorydiv = document.querySelector(".categorydiv");
categorydiv.style.display = "none";

let sizeRange = document.querySelector(".sizeRange");
sizeRange.style.display = "none";



let department = document.querySelector(".department");
department.style.display = "none";

 let catObj = {
    0: offerdiv,
    1: price,
    2:brand,
    3 :size,
    4:discountdiv,
    5: categorydiv,
    6 :sizeRange,
    7:department
  }


let clickLabel = document.querySelectorAll(".clickLabel");

let x = true;
clickLabel.forEach((item,index)=>{

  // let a = [offerdiv]
 

  // console.log(catObj)

item.addEventListener("click", () => {
  console.log(index);



  if (x) {
    
    catObj[index].style.display = "block";

    x = false;
  } else {
catObj[index].style.display = "none";
    console.log(item);
    x = true;
  }





});
})
