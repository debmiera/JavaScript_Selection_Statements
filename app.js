console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);


let favoriteNumber = window.prompt("What is my favorite number?");
favoriteNumber = parseInt(favoriteNumber)

if (favoriteNumber < 13){
  alert("Too low!")
} else if (favoriteNumber > 13){
  alert ("Too High!")
} else if (favoriteNumber == 13){
  alert ("Congratulations!")
}

let birthMonth = window.prompt("What is your birth month?")



switch (birthMonth){
   case "January":
    case "February":
   case "March": 
   alert ("Winter") 
   break;
   case "Arpil":
    case "May":
   case "June": 
   alert ("Spring") 
   break;
   case "July":
    case "August":
   case "September": 
   alert ("Summer") 
   break;
   case "October":
    case "November":
   case "December": 
   alert ("Winter") 
   break;
    default: 
}


let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = ""
let color = ""
let size = ""

switch (typeId) {
  case "01":
  type = "Tank top";
    break;
  case "02":
  type = "T-Shirt";
    break;
  case "03":
  type = "long-sleeve";
  break;
  case "04":
    type = "Sweat Shirt";
  break;
  case "05":
    type = "other";
  break;
} 


switch (colorId) {
  case "BL":
    color = "Black";
    break;
  case "BU":
    color = "Blue";
    break;
  case "RE":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  case "Wh":
    type = "White"
    break;
} 

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large"
    break;
  case "XL":
    size = "Extra Large"
    break;
  case "OS":
    size = "One Size FitsAll"
    break;
} 

alert(`Product: ${size} ${color} ${type}`);


