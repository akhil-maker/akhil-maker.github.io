let val = 0, chance = 0;
val = Math.floor(Math.random()*20)+1;
chance = Math.floor(Math.log2(20))+1;
console.log(val);
function setAll(){
	let r = document.getElementById("res");
	r.innerText = "Please give an input";
	let ch = document.getElementById("chances");
	val = Math.floor(Math.random()*20)+1;
	chance = Math.floor(Math.log2(20))+1;
	ch.innerText = chance;
	console.log(val, chance);
	let y = document.getElementById("myinp");
	y.value = "";
	y.readOnly = false;
	let z = document.getElementById("win");
	z.innerText = "";
}
function numCheck(){
	let r = document.getElementById("res");
	let y = document.getElementById("myinp");
	let ch = document.getElementById("chances");
	if(chance>0){
		let x = y.value;
		if(chance==1 && x!=val){
			r.innerText = "You lose, please reset";
			chance = chance-1;
			y.value = "";
		}
		else if(typeof(x-'0')!="number" || x-'0'<=0 || x-'0'>20){
			r.innerText = "Please give valid input";
		}
		else if(x=="" || x==null){
			r.innerText = "Please give an input";
		}
		else if(x==val){
			r.innerText = "Congrats, Please reset";
			y.value = "";
			chance = chance-1;
			y.readOnly = true;
			let z = document.getElementById("win");
			z.innerText = "Congrats!!";
		}
		else if(x<val){
			r.innerText = "Input number is smaller";
			chance = chance-1;
			y.value = "";
		}
		else{
			r.innerText = "Input number is greater";
			chance = chance-1;
			y.value = "";
		}
		console.log(x, chance);
		ch.innerText = chance;
	}
}