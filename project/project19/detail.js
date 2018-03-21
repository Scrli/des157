function initPage(){
  document.getElementById("num1").innerHTML = "0";
  document.getElementById("num2").innerHTML = "0";
  document.getElementById("num3").innerHTML = "0";
  document.getElementById("num4").innerHTML = "0";
  document.getElementById("num5").innerHTML = "0";
  document.getElementById("num6").innerHTML = "0";
  document.getElementById("num7").innerHTML = "0";
  document.getElementById("num8").innerHTML = "0";
}

function plus1() {
  var a = Number(document.getElementById("num1").innerHTML);
  a += 1;
  document.getElementById("num1").innerHTML = a;
  console.log(a);
}

function plus2() {
  var a = Number(document.getElementById("num2").innerHTML);
  a += 1;
  document.getElementById("num2").innerHTML = a;
  console.log(a);
}

function plus3() {
  var a = Number(document.getElementById("num3").innerHTML);
  a += 1;
  document.getElementById("num3").innerHTML = a;
  console.log(a);
}


function plus4() {
  var a = Number(document.getElementById("num4").innerHTML);
  a += 1;
  document.getElementById("num4").innerHTML = a;
  console.log(a);
}


function plus5() {
  var a = Number(document.getElementById("num5").innerHTML);
  a += 1;
  document.getElementById("num5").innerHTML = a;
  console.log(a);
}


function plus6() {
  var a = Number(document.getElementById("num6").innerHTML);
  a += 1;
  document.getElementById("num6").innerHTML = a;
  console.log(a);
}

function plus7() {
  var a = Number(document.getElementById("num7").innerHTML);
  a += 1;
  document.getElementById("num7").innerHTML = a;
  console.log(a);
}


function plus8() {
  var a = Number(document.getElementById("num8").innerHTML);
  a += 1;
  document.getElementById("num8").innerHTML = a;
  console.log(a);
}

function minus1() {
  var a = Number(document.getElementById("num1").innerHTML);
  if (a == 0) {
    alert("It is already 0.");
    console.log(a);
  }
  else {
    a -= 1;
    document.getElementById("num1").innerHTML = a;
    console.log(a);
  }
}

function minus2() {
  var a = Number(document.getElementById("num2").innerHTML);
  if (a == 0) {
    alert("It is already 0.");
    console.log(a);
  }
  else {
    a -= 1;
    document.getElementById("num2").innerHTML = a;
    console.log(a);
  }
}

function minus3() {
  var a = Number(document.getElementById("num3").innerHTML);
  if (a == 0) {
    alert("It is already 0.");
    console.log(a);
  }
  else {
    a -= 1;
    document.getElementById("num3").innerHTML = a;
    console.log(a);
  }
}

function minus4() {
  var a = Number(document.getElementById("num4").innerHTML);
  if (a == 0) {
    alert("It is already 0.");
    console.log(a);
  }
  else {
    a -= 1;
    document.getElementById("num4").innerHTML = a;
    console.log(a);
  }
}

function minus5() {
  var a = Number(document.getElementById("num5").innerHTML);
  if (a == 0) {
    alert("It is already 0.");
    console.log(a);
  }
  else {
    a -= 1;
    document.getElementById("num5").innerHTML = a;
    console.log(a);
  }
}

function minus6() {
  var a = Number(document.getElementById("num6").innerHTML);
  if (a == 0) {
    alert("It is already 0.");
    console.log(a);
  }
  else {
    a -= 1;
    document.getElementById("num6").innerHTML = a;
    console.log(a);
  }
}

function minus7() {
  var a = Number(document.getElementById("num7").innerHTML);
  if (a == 0) {
    alert("It is already 0.");
    console.log(a);
  }
  else {
    a -= 1;
    document.getElementById("num7").innerHTML = a;
    console.log(a);
  }
}

function minus() {
  var a = Number(document.getElementById("num").innerHTML);
  if (a == 0) {
    alert("It is already 0.");
    console.log(a);
  }
  else {
    a -= 1;
    document.getElementById("num").innerHTML = a;
    console.log(a);
  }
}

function minus8() {
  var a = Number(document.getElementById("num8").innerHTML);
  if (a == 0) {
    alert("It is already 0.");
    console.log(a);
  }
  else {
    a -= 1;
    document.getElementById("num8").innerHTML = a;
    console.log(a);
  }
}

function saveToLocal(){
  console.log("saved to localStorage");
  localStorage.setItem("num1",document.getElementById("num1").innerHTML);
  localStorage.setItem("num2",document.getElementById("num2").innerHTML);
  localStorage.setItem("num3",document.getElementById("num3").innerHTML);
  localStorage.setItem("num4",document.getElementById("num4").innerHTML);
  localStorage.setItem("num5",document.getElementById("num5").innerHTML);
  localStorage.setItem("num6",document.getElementById("num6").innerHTML);
  localStorage.setItem("num7",document.getElementById("num7").innerHTML);
  localStorage.setItem("num8",document.getElementById("num8").innerHTML);

  localStorage.setItem("dishname1",document.getElementById("dishname1").innerHTML);
  localStorage.setItem("dishname2",document.getElementById("dishname2").innerHTML);
  localStorage.setItem("dishname3",document.getElementById("dishname3").innerHTML);
  localStorage.setItem("dishname4",document.getElementById("dishname4").innerHTML);
  localStorage.setItem("dishname5",document.getElementById("dishname5").innerHTML);
  localStorage.setItem("dishname6",document.getElementById("dishname6").innerHTML);
  localStorage.setItem("dishname7",document.getElementById("dishname7").innerHTML);
  localStorage.setItem("dishname8",document.getElementById("dishname8").innerHTML);
}
