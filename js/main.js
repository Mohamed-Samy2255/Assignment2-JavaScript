
function randomUote(){

var text = [ "It's not what happens to you, but how you react to it that matters." , "You miss 100% of the shots you don't take." , "Resentment is like drinking poison and waiting for your enemies to die." , "The best revenge is massive success." , "Do not take life too seriously. You will not get out alive."]

var userName = ["--Epictetus" , "--Wayne Gretzy" , "--Nelson Mandela" , "--Frank Sinatra" , "--Elbert Hubbard"]



var num = Math.floor(Math.random() * userName.length) ;

// console.log(text[num]);
// console.log(userName[num]);

// alert(userName[num] + text[num])

document.getElementById("demo").innerHTML = text[num];
document.getElementById("demo1").innerHTML =userName[num];

}


// randomUote();