// for prime number

let num = 71;
let factor = 0;

for(let i=1; i<=num; i++){

	if(num % 2 == 0){

		factor++;
	}
}

if(factor == 2){
	console.log("prime Number");
}else{
	console.log("Not prime Number");
}

// For Palindrome 

let str="naman";
let bag = "";

for(let i =str.length-1; i>=0; i--){
	bag+=str[i];
}

if(bag == str){
	console.log("palindrome");
}else{
	console.log("Not palindrome");
}