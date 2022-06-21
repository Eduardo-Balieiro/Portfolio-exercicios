let a = 1;
let b = 2;
let c = 3;
// questao 1
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
// questao 2
if (a > b) {
  console.log(a, "é o maior");
} else {
  console.log(b, "é o maior");
}
// questao 3
if (a > b && a > c) {
  console.log(a, "é o maior");
} else if (b > a && b > c) {
  console.log(b, "é o maior");
} else {
  console.log(c, "é o maior");
}
// questao 4
if (a > 0) {
  console.log("positive");
} else if (a < 0) {
  console.log("negative");
} else {
  console.log("zero");
}
// questao 8
if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0 ) {
    console.log("true");
} else {
    console.log("false");
}




// questao 5
a = 90;
b = 30;
c = 60;

if (a + b + c === 180) {
  console.log("true");
} else {
  console.log("false");
}

// questao 7 
let nota = 65 ;
if (nota >= 90) {
    console.log("A");
} else if (nota >= 80) {
    console.log("B");
}else if (nota >= 70) {
    console.log("C");
}else if (nota >= 60) {
    console.log("D");
}else if (nota >= 50) {
    console.log("E");
}else if (nota < 50) {
    console.log("F");
} else {
    console.log("Erro");
}



 