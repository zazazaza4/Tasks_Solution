
//Tasks
function task_1 () {
	let camelCase = 1;
	let snake_case = 2;
	let PascalCase = 3;

	let case_test = prompt("Make your choice(1-3):\n 1)camelCase\n  2)snake_case\n  3)PascalCase");

	if (confirm("1)console.log() - Yes\n 2)alert() - No")) {
		console.log(case_test);
	}
	else {
		alert(case_test);
	}
}
function task_2() {

	str = 'HTML'
	if (confirm("1)console.log() - Yes\n 2)alert() - No")) {
		console.log(str.toLowerCase());
	}
	else {
		alert(str.toLowerCase());
	}
}
function task_3 () {

	userName=prompt("What is your name ?")
	alert(`Your name is ${userName}`)
}
function task_4 () {
	let arr=['Саша', 'Петя', 'Оксана'];
	//method_1
	let arr_1=arr;
	alert(`ARRAY in the beginning(method_1): ${arr_1}`);
	arr[0]='Оксанa';
	arr[1]='Олег';
	arr[2]='Саша';
	alert(`ARRAY in the end: ${arr_1}`);//arr wasn`t changed
	//method_2
	alert(`ARRAY in the beginning(method_2): ${arr}`);
	arr[0]='Оксанa';
	arr[1]='Олег';
	arr[2]='Саша';
	alert(`ARRAY in the end: ${arr}`);//arr wasn changed
}
function task_5 () {
	let a=prompt("Your the first number:\n");
	let b=prompt("Your the second number:\n");
	a=Number(a);
	b=Number(b);
	if (a>b){alert(a+b);}
	else if (a<b) {
		alert(a*b);
	}else if(a=b){
		alert("The numbers are equal ");
	}else{
		alert("hhhhhhhhh");
	}
}
function task_6 () {
 	let Arr=[10, 20, 30, 50, 235, 3000];
 	for (let i = 0; i <= Arr.length-1; i++) {
 		let v
 		v=Arr[i];
 		v=v.toString();
 		if (v[0]==1 || v[0] ==2 || v[0] ==5) {
 				console.log(v[0]);
 		}
 	}
}
function task_7 () {
	let weight=prompt("Weight= ")
	weight=Number(weight);
	let recommendation
	if (weight<4) {
		recommendation='Пора перекусить'
		console.log(recommendation)
	}else if(weight>=4 && weight<=5.5){
		recommendation='Вес в норме'
		console.log(recommendation)
	}else if(weight>5.5){	
	recommendation='Пора на тренировку';
		console.log(recommendation)
	}
}
function task_8 () {
	let a =prompt("Enter the grade of the exam: ");//
	let b =prompt("Enter number of projects: ");//
	a = Number(a);
	b = Number(b);
	alert(`Final your grade is ${finalGrade(a,b)}`);
}
function finalGrade(a,b){
	if (a>90 || b>10) {
		return 100;
	} //100, если оценка за экзамен больше 90 или количество выполненных проектов больше 10.
	else if(a>75 || b>=5){
		return 90;
	}//90, если оценка за экзамен больше 75 или количество выполненных проектов не менее 5.
	else if(a>50 || b>=2){
		return 75;//75, если оценка за экзамен больше 50 или количество выполненных проектов не менее 2.
		
	}
	return 0;
}
function task_9 () {

	let arr_9=[1,2,3,4];
	alert(multiplyArray(arr_9));

}
function multiplyArray(arr){
		let result=1;
		for (let i=0;arr.length-1>=i;i++) {
			result*=arr[i];
		}
		return result;
	}

function task_10 () {

	let arr=['Никита', 'Саша', 'Анастасия', 'Дима', 'Саныч', 'Ольга'];
	alert(deleteNames(arr));
}
function deleteNames(arr){
	const unwantedNames = ['Дима', 'Саша', 'Ольга', 'Никита'];
	let arrWithoutUnwantedNames=[];
	let n=0;
	for (let i=0;unwantedNames.length-1>=i;i++) {
			let index = arr.indexOf(unwantedNames[i]);
			arr.splice(index,1);
		}
	return arr;
}
function task_11() {
	let arr1=[3, 2, 5];
	let arr2=[1, 4, 4];
	 alert(foo(arr1,arr2))
}
function foo(arr1,arr2){return arr1.reduce((a,b)=>a*b)-arr2.reduce((a,b)=>a*b)}

function task_12 () {

	let a =prompt("a: ");//
	let b =prompt("b: ");//
	a = Number(a);
	b = Number(b);
	alert(numbersBetweenAandB(a,b));}

function numbersBetweenAandB(a,b){
	if (a>b || a==b) {
		return "Error"
	}
	else {
		let arr=[];
	for (let i=a;b>=i;i++) {
			arr.push(i);
		}
		return arr;
	}
}

function task_13() {
	let a=prompt("Шестнадцатеричное число = ", '');
	alert(`hexToDec('${a}') => ${hexToDec(a)}`);
}
function hexToDec(a){

	return parseInt(a,16);
}

function task_14() {
	strHi='Hi!!!'
	let n = prompt("N = ", '')
	n=String(n);
	alert(remove(strHi,n));
}
function remove(Hi,n){
	const symbolDelete = '!';
	let char=[];
	let j=0;
	for (let k of Hi){
		char[j]=k;
		j++;
	};
	for (let i=0;char.length-1>=i;i++) {
		 if (char[i]==symbolDelete){
			char.splice(i, 1);
			n--;
			if (n<=0) {break;}
		 }
		}

	return char.join("");;
}

function task_15() {

		let arr=[];
		alert(maxDiff(arr));
}
function maxDiff(arr){
	if (arr.length==1 || arr.length==0){return 0;}
	//arr max and min
	let max=arr[0],min=arr[0];
	 	for (let i = 1; i <= arr.length-1; i++) {
	 			if (max<arr[i]) {
	 				max=arr[i];
	 			}
	 			if (min>arr[i]) {
	 				min=arr[i];
	 			}
 	}
 	return max-min;
}

function task_16() {
	let str='Над городом облака, коридоры, берега, проспект, река.';
	let n = prompt("Количество букв в слове ?",'');
	alert(Word5(str,n))

}
function Word5(str,n){
	str=str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
	let arr=str.split(' ');
	let arrResult=[];
	for(let k of arr){
		if(k.length >n ){
			arrResult.push(k);
		}
	}
	return arrResult;
}

function task_17() {
	let numb=prompt("Number= ", '');
	alert(divisibleByThree(numb));
}
function divisibleByThree(a){
	let arr=[];
	let i=0;
	for(let k of a){
		arr[i]=k;
		i++;
	}
	i=0;
	for(let j=0;arr.length>j;j++){
		i+=Number(arr[j]);
	}
	if (Number.isInteger(i/3)){
		return "Yes"
	}
	else {
		return "No"
	}
}
function task_18() {
	 let arr=['kevin', 'has','no','space'];
	alert(`${arr} => ${spacey(arr)} `);
	arr=['this','cheese','has','no','holes'];
	alert(`${arr} => ${spacey(arr)} `);
}
function spacey(arr){
	let test='', arrResult=[];
	for (let i = 0; i < arr.length; i++) {
			test+=arr[i];
			arrResult[i]=test;
 	}
 	return arrResult;
}
function task_19() {
	let a=prompt("Число = ", '');
	a=Number(a);
	alert(`evensAndOdds('${a}') => '${evensAndOdds(a)}'`);
}
function evensAndOdds(a){
	if (a%2==0) {
		return a.toString(2);
	}else {
		return a.toString(16);
	}
}
function task_20() {
	let arr=['a', 1, 2, false, 'b'];
	arrayToObject(arr);
}
function arrayToObject(arr){
	let Obj
	return Obj;
}
function task_21() {
	let str='aabacbaa';
	alert(`${str}=>${switcheroo(str)}`);
}
function switcheroo(str){
	let str_2='';
	for (let i=0;str.length-1>=i;i++) {
			if (str[i]=='a'){
				str_2 +='b';
			}else if (str[i]=='b'){
				str_2 +='a';
			}else if(str[i]=='c'){
				str_2+='c';
			}
		}
		return str_2;
}