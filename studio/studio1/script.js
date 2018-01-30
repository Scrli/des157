console.log('reading');

// validation function
function validateForm() {
  var x = document.forms["myForm"]["Meat"].value;
  if (x == "") {
    alert("How could you do not choose a kind of Meat!");
    return false;
  }

  var x = document.forms["myForm"]["Vegetable"].value;
  if (x == "") {
    alert("Choose a Vegetable. It is good for your health.");
    return false;
  }

  var x = document.forms["myForm"]["Ingredient"].value;
  if (x == "") {
    alert("Ingredient will make your dish special, so remember to add it.");
    return false;
  }

  var x = document.forms["myForm"]["Nut"].value;
  if (x == "") {
    alert("You nut, pick a nut.");
    return false;
  }

  var x = document.forms["myForm"]["Fruit"].value;
  if (x == "") {
    alert("Give your dish a kind of fruit, please.");
    return false;
  }

  var x = document.forms["myForm"]["Cheese"].value;
  if (x == "") {
    alert("Cheese makes life happier, remember to add it.");
    return false;
  }

  var x1 = document.forms["myForm"]["Sauce1"];
  var x2 = document.forms["myForm"]["Sauce2"];
  var x3 = document.forms["myForm"]["Sauce3"];
  if (!(x1.checked || x2.checked || x3.checked)) {
    alert('Please, choose at least one sauce');
    return false;
  }
}

var Meat, Vegetable, Ingredient, Nut, Fruit, Cheese;

document.getElementById("fstStep").onclick = processForm;
// process function
function processForm() {
  Meat = document.myForm.Meat.value;
  Vegetable = document.myForm.Vegetable.value;
  Ingredient = document.myForm.Ingredient.value;
  Nut = document.myForm.Nut.value;
  Fruit = document.myForm.Fruit.value;
  Cheese = document.myForm.Cheese.value;

  var Step2List = "1. Wash all your food.<br> 2. Cut " + Meat + " into 1' by 1'square.<br> 3. Cut " + Vegetable + " into the shape you like.<br> 4. Grind " + Ingredient + " up <br> ";
  document.getElementById("Step2List").innerHTML = Step2List;
  document.getElementById("Step2").innerHTML = "Step 2. Preparing food";
  document.getElementById("nxtStep").style.visibility = 'visible';
  return false;
}

document.getElementById("nxtStep").onclick = showFinish;
function showFinish() {
  var Step3List = "1. Put 1/4 cup oil into heated pan.<br> 2. Put " + Ingredient + Fruit + " into pan and cook for 20 secs.<br> 3. Squeeze " + Nut + " on the top.<br> 4. Add 1/2 cup of water.<br>Put " + Meat + " into th pan. <br> 5. Dish up and you finished!";
 document.getElementById("Step3List").innerHTML = Step3List;
 document.getElementById("Step3").innerHTML = "Step 3. Cooking food";
 document.getElementById("finish").style.visibility = 'visible';
  return false;
}
