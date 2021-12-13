
//let price;
//const price= 40;

//let message  = 'Hello \"World\"';
//let name= 'Andrea';
//let message =`Hello ${name}`;
//let message= "123";
//message = message.length;


//amount = amount.toString();
//let amount = Number.parseFloat("123.12A");

//let saved = true;
//saved= !saved;

'use strict';

iD= 1234;
console.log(iD);

let mySymbol= Symbol();

let person= {              //object
    name: 'Fiona',    //object property
    age: 20,
    lastName: 'Adams',
    partTime: false,
    [mySymbol]: 'secretInfo',
    showInfo: function(realAge){
        //showMessage(this.name + ' is ' + realAge);
    }
};

//person ['age'] =21;
//person.showInfo(21);
//showMessage( typeof person.showInfo);


function incrementAge(person){
    person.age ++;

}

// Arrays 

//const newValues= values.splice(2, 1, 'hello');

const values = ['a', 'b', 'c', 'd', 'z'];
const set = values.filter(function(item) {  //fitler() method
    console.log('item', item);
    return item> 'b';
});

console.log (set);
values.forEach(function(item){   //foreEach()  function
    console.log (item);
      

});


const values1 = ['a', 'bbb', 'cccc'];

const found= values1.find(function(item) {    //find() method
    return item.length > 1; 

});
console.log (found);




//console.log(values.indexOf('a') );



//alues.unshift('a');
//values[0]= 'aaa';
//console.log(Array.isArray(values));
//console.log(values[0]); //a
//values.push('d');
//console.log( values );
//const last= values.pop();
//const first= values.shift();
//console.log(last); //c
//console.log(first);//a



incrementAge(person);
//showMessage(person.age);

let now = new Date();         //Date build-in object
//showMessage(now.toDateString() );

// showMessage( Math.random());    Math build-in object


let s= 'Hello';    // String build-in object
showMessage(s.charAt(1));

const header = document.getElementById('message');
header.style.color= 'pink';
header.style.fontWeight= '800';


//Detecting Button Clicks

const button = document.getElementById('see-review');
button.addEventListener('click', function() {
    const review = document.getElementById('review');
//showing and hiding DOM Elements 
    if(review.classList.contains('d-none')){
        review.classList.remove('d-none');
        button.textContent = 'Close REVIEW';
    }else{
        review.classList.add('d-none');
        button.textContent = 'SEE REVIEW';
    }

    
});

//const containers = document.getElementsByClassName('container');
//containers[0].classList.add('d -none');

//console.log(containers);

const app = {
    product: 12345,
    userName:'Fifi',
    orderNumber: 500
};

function showProductId(){
    let productID =12345;
    //console.log(productID);
    function fix(){
        //let productID = 45678;
        console.log('in fix:' , productID);

    }
    fix();
    console.log('in showProductId:', productID);
    
}

showProductId();



/*
   let fn = function (message, firstName){
    console.log(message);
    console.log(firstName);
 
 }
 
fn('Hello');

changePercentoff(30);

let key =42;

function getSecretCode(value){

 let keyGenerator = function() {
     let key = 12;
     console.log('in keyGenerator:' , key);
     return key;
 }

 let code = value * keyGenerator();
 console.log(' in getSecretCode:', key);
 return code;
}

let secretCode = getSecretCode(2);
showMessage( secretCode );

/*
multi line comment

else if conditionals 

let price = 1;
if(price > 10){
showMessage('true');
}

else if(price> 5){
    showMessage('more than 5');
}

else if(price< 4){
        showMessage('less than 4');
    }


=== or ==
if (1 == "1") {
    showMessage('true');
}else {
    showMessage('false');
}

let price = 20;
let message = (price< 10) ? 'yes' : 'no';
showMessage(message);


if(true){
    const  value= 'yes';
    showMessage(value);

}


for( let i =0; i<=5; i++){
    console.log(i);
}

let a= 4;
while(a>0){
    console.log(a);
    a--;
}

let count =1;
do {
    console.log(count);
    count ++;
}while (count <5);
*/   

