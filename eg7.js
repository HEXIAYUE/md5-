var x = document.getElementById("a");

function my() {
  var s = MD5(x.value);
  x.value = s;
  /*console.log(x.value);*/
}

function getRndInteger() {
  var min1 = document.getElementById("lb");
  var min = min1.value;
  console.log(min);
  var max1 = document.getElementById("lc");
  var max = max1.value;
  console.log(max);
  var input = document.getElementById("b");
  /*值=Math.floor(Math.random()*可能值的总数+第一个可能的值)*/
  var g = Math.floor(Math.random() * (max - min + 1)) + parseInt(min);
  console.log(g);
  input.value=g;
}