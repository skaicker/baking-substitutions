function calculate(){
  var input, text;
  input = document.getElementById("word").value;
  if (input == "butter" || input == "Butter" || input == "BUTTER") {
      text = "Oil, applesauce, or pumpkin puree is the way to go!"

  }
    else if (input == "sugar" || input == "Sugar" || input =="SUGAR") {
      text = "You can replace sugar with honey!)";
  }
    else if (input == "cornstarch" || input == "Cornstarch" || input == "CORNSTARCH"){
       text = "You can substitute flour, but it might not come out well in all cases.";
  }
    else if (input == "oil" || input == "Oil" || input == "OIL") {
      text = "Substitute butter or pumpkin puree!";
  }
    else {
       text = "Sorry, we don't have information for that ingredient yet!";
     }
numInput = document.getElementById("num").value
document.getElementById("click").innerHTML = text;
}
