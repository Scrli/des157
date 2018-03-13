function initPayList() {
  console.log("page initializing");
  var num1 = Number(localStorage.getItem("num1"));
  var num2 = Number(localStorage.getItem("num2"));
  var num3 = Number(localStorage.getItem("num3"));
  var num4 = Number(localStorage.getItem("num4"));
  var num5 = Number(localStorage.getItem("num5"));
  var num6 = Number(localStorage.getItem("num6"));
  var num7 = Number(localStorage.getItem("num7"));
  var num8 = Number(localStorage.getItem("num8"));
  console.log(num1);
  var totalPrice = num1 * 7 + num2 * 17 + num3 * 27 + num4 * 14 + num5 * 12 + num6 * 7 + num7 * 3 + num8 * 6;
  var i = 1;
  if(num1){
    document.getElementById("dishname"+i).innerHTML = localStorage.getItem("dishname1");
    document.getElementById("dishprice"+i).innerHTML = "$" + (num1 * 7);
    i += 1;
  }
  if(num2){
    document.getElementById("dishname"+i).innerHTML = localStorage.getItem("dishname2");
    document.getElementById("dishprice"+i).innerHTML = "$" + (num2 * 17);
    i += 1;
  }
  if(num3){
    document.getElementById("dishname"+i).innerHTML = localStorage.getItem("dishname3");
    document.getElementById("dishprice"+i).innerHTML = "$" + (num3 * 27);
    i += 1;
  }
  if(num4){
    document.getElementById("dishname"+i).innerHTML = localStorage.getItem("dishname4");
    document.getElementById("dishprice"+i).innerHTML = "$" + (num4 * 14);
    i += 1;
  }
  if(num5){
    document.getElementById("dishname"+i).innerHTML = localStorage.getItem("dishname5");
    document.getElementById("dishprice"+i).innerHTML = "$" + (num5 * 12);
    i += 1;
  }
  if(num6){
    document.getElementById("dishname"+i).innerHTML = localStorage.getItem("dishname6");
    document.getElementById("dishprice"+i).innerHTML = "$" + (num6 * 7);
    i += 1;
  }
  if(num7){
    document.getElementById("dishname"+i).innerHTML = localStorage.getItem("dishname7");
    document.getElementById("dishprice"+i).innerHTML = "$" + (num7 * 3);
    i += 1;
  }
  if(num8){
    document.getElementById("dishname"+i).innerHTML = localStorage.getItem("dishname8");
    document.getElementById("dishprice"+i).innerHTML = "$" + (num8 * 6);
    i += 1;
  }
  document.getElementById("dishname"+i).innerHTML = "Total payment";
  document.getElementById("dishprice"+i).innerHTML = "$" + totalPrice;
  
}
