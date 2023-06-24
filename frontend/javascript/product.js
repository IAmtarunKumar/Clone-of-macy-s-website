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

let clickLabel = document.querySelectorAll(".clickLabel");

let x = true;
clickLabel.forEach((item, index) => {
  // let obj = {1 : offerdiv}

  item.addEventListener("click", () => {
    console.log(index);
    if (index == 0) {
      if (x) {
        offerdiv.style.display = "block";

        x = false;
      } else {
        offerdiv.style.display = "none";
        console.log(item);
        x = true;
      }
    } else if (index == 1) {
      if (x) {
        price.style.display = "block";

        console.log(item + "a");

        x = false;
      } else {
        price.style.display = "none";
        console.log(item);
        x = true;
      }
    } else if(index == 2){

      if (x) {
        brand.style.display = "block";

        console.log(item + "a");

        x = false;
      } else {
        brand.style.display = "none";
        console.log(item);
        x = true;
      } 

    } else if(index==3){

      if (x) {
        size.style.display = "block";

        console.log(item + "a");

        x = false;
      } else {
        size.style.display = "none";
        console.log(item);
        x = true;
      } 

    } else if(index==4){

      if (x) {
        discountdiv.style.display = "block";

        console.log(item + "a");

        x = false;
      } else {
        discountdiv.style.display = "none";
        console.log(item);
        x = true;
      } 

    } else if(index==5){

      if (x) {
        categorydiv.style.display = "block";

        console.log(item + "a");

        x = false;
      } else {
        categorydiv.style.display = "none";
        console.log(item);
        x = true;
      } 

    } else if(index==6){

      if (x) {
        sizeRange.style.display = "block";

        console.log(item + "a");

        x = false;
      } else {
        sizeRange.style.display = "none";
        console.log(item);
        x = true;
      } 

    } else if(index==7){

      if (x) {
        department.style.display = "block";

        console.log(item + "a");

        x = false;
      } else {
        department.style.display = "none";
        console.log(item);
        x = true;
      } 

    }





  });
});
