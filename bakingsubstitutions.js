function calculate(){
  var input, text, numInput;
  input = document.getElementById("word").value;
  text = document.getElementById("word").value;
  numInput = document.getElementById("num").value
  if (isNaN(numInput) || 0 >= parseFloat(numInput)) {
    text = "Please enter in a number value greater than 0!";
  }
  else if ((0 < parseFloat(numInput)) && ((input ==  "butter" || input == "Butter") || input == "BUTTER")) {
    text = numInput*3/4 + " tbsp. oil or pumpkin puree.";
  }
  else if ((0 < parseFloat(numInput)) && ((input ==  "eggs" || input == "EGGS") || input == "Eggs" || input == "Egg" || input == "EGG" || input == "egg")) {
    text = numInput*1/4 + " cup applesauce OR " + numInput*1/4 + " cup mashed banana.";
  }
  else if ((0 < parseFloat(numInput)) && ((input == "oil" || input == "Oil") || input == "OIL" || input == "vegetable oil" || input == "Vegetable oil" || input == "VEGETABLE OIL" || input == "Vegetable Oil")) {
    text = numInput*4/3 + " tbsp. butter OR " + numInput + " tbsp. pumpkin puree."
  }
  else if ((0 < parseFloat(numInput)) && ((input == "cornstarch" || input == "Cornstarch") || input == "CORNSTARCH")) {
    text = numInput*3 + " tbsp. flour. However, be careful, as this substitution may not work in all cases." + " You can also use " + numInput + " tbsp. arrowroot, or any other pure starch you have.";
  }
  else if ((0 < parseFloat(numInput)) && ((input == "baking soda" || input == "Baking Soda") || input == "BAKING SODA" || input == "Baking soda")) {
    text = numInput*4 + " tbsp. baking powder and " + numInput + " tbsp. mild vinegar (which is meant to give some acidity).";
  }
  else if ((0 < parseFloat(numInput)) && ((input == "baking powder" || input == "Baking Powder") || input == "BAKING POWDER" || input == "Baking powder")) {
    text = numInput*1/4 + " tbsp. baking soda.";
  }
  else if ((0 < parseFloat(numInput)) && ((input ==  "vanilla"|| input == "Vanilla") || input == "VANILLA" || input== "vanilla extract" || input == "Vanilla Extract" || input == "VANILLA EXTRACT" || input == "Vanilla extract")) {
    text = numInput + " tbsp. maple syrup.";
  }
  else if ((0 < parseFloat(numInput)) && ((input == "cocoa powder" || input == "Cocoa Powder") || input == "COCOA POWDER" || input == "Cocoa powder" || input == "cocoa" || input == "COCOA" || input == "Cocoa")) {
    text = numInput*2/3 + " tbsp. bitter chocolate and reduce fat in the recipe by " + numInput*1/3 + " tbsp.";
  }
  else if ((0 < parseFloat(numInput)) && ((input == "chocolate" || input == "Chocolate") || input == "CHOCOLATE")){
    text = numInput*3/2 + " tbsp. cocoa powder and add fat in the recipe by " + numInput*3 + " tbsp. However, be careful, since the sugar and fat content vary in different chocolate bars.";
  }
  else if ((0 < parseFloat(numInput)) && ((input == "milk" || input == "Milk") || input == "MILK")){
    text = numInput + " tbsp. almond, soy, coconut, or rice milk, or plain yogurt OR " + numInput*1/2 + " tbsp. evaporated or condensed milk.";
  }
  else if ((0 < parseFloat(numInput)) && ((input == "cake flour" || input == "Cake Flour") || input == "Cake flour" || input == "CAKE FLOUR")){
    text = numInput + " tbsp. flour, minus " + numInput*1/8 + " tbsp. flour; add back in " + numInput*1/8 + " tbsp. cornstarch.";
  }
  else if ((0 < parseFloat(numInput)) && ((input == "sugar" || input == "Sugar") || input == "Sugar")){
    text = "about " + numInput*7/12 + " tbsp. honey; reduce liquids in the recipe by " + numInput*1/4 + " tbsp. Also, add " + numInput*1/12 + " tbsp. baking soda if the recipe doesn't already call for it, and reduce oven temperature by 25 deg. Fahrenheit.";
  }
  else {
      text = "Sorry, we don't have substitutions for that ingredient yet!";
  }
    document.getElementById("click").innerHTML = text;
}
