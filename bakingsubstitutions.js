function calculate(){
  var input, text, numInput;
  input = document.getElementById("word").value;
  text = document.getElementById("word").value;
  numInput = document.getElementById("num").value
  if (0 < parseInt(numInput) && input ==  "butter") {
    text = numInput*3/4 + " tbsp oil";
  }
  else if (0 < parseInt(numInput) && input == "oil") {
    text = numInput*4/3 + " tbsp butter";
  }
  else {
    text = "Sorry, we don't have substitutions for that ingredient yet!";
  }
  document.getElementById("click").innerHTML = text;
}

