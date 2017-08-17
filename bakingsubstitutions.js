function calculate(){
  var input, text, numInput;
  input = document.getElementById("word").value;
  text = document.getElementById("word").value;
  numInput = document.getElementById("num").value
  if (0 < parseInt(numInput) && input ==  "butter" || input == "Butter" || input == "BUTTER") {
    text = numInput*3/4 + " tbsp. oil.";
  }
  else if (0 < parseInt(numInput) && input == "oil" || input == "Oil" || input == "OIL") {
    text = numInput*4/3 + " tbsp. butter.";
  }
  else if (0 < parseInt(numInput) && input == "cornstarch" || input == "Cornstarch" || input == "CORNSTARCH") {
    text = numInput*3 + " tbsp. flour. However, be careful, as this substitution may not work in all cases.";
  }
  else if (0 < parseInt(numInput) && input == "baking soda" || input == "Baking Soda" || input == "BAKING SODA" || input == "Baking soda") {
    text = numInput*4 + " tbsp. baking powder.";
  }
  else if (0 < parseInt(numInput) && input == "baking powder" || input == "Baking Powder" || input == "BAKING POWDER" || input == "Baking powder") {
    text = numInput*1/4 + " tbsp. baking soda.";
  }
  else if (0 < parseInt(numInput) && input == "vanilla extract" || input == "Vanilla Extract" || input == "VANILLA EXTRACT" || input == "Vanilla extract") {
    text = numInput + " tbsp. maple syrup (note: 1 tbsp = 3 tsp).";
  }
  else {
    text = "Sorry, we don't have substitutions for that ingredient yet!";
  }
  document.getElementById("click").innerHTML = text;
}
