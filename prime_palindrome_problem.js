// for prime number

let num = 71;
let fact = 0;

for(let i=2; i<num; i++){

	if(num % 2 == 0){

		fact++;
	}
}

if(fact == 2){
	console.log("prime Number");
}else{
	console.log("Not prime Number");
}

// For Palindrome 

let num1 = 12321;
let bag1 = ""+num1;
let bag2 = "";

for(let i = bag1.length; i > 0; i++){
	bag2 = bag2+bag[i];
}

if(bag1 == bag2){
	console.log("palindrome");
}else{
	console.log("Not palindrome");
}