function calculate(){
  var x, text;
  x = document.getElementById("word").value;
  if (x == "butter") {
    text = "One sec...";
  }
  /*} else if (x == "sugar") {
    text = "...";
  } else if (x == "cornstarch") {
    text = "...";
  } else if (x == "oil") {
    text = "...";
  } else {
    text = "Sorry!";
  }*/
document.getElementById("click").innerHTML = text;
}
