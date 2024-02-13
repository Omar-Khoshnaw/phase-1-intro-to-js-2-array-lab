// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push("Ralph");
  }
  
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
  }
  
function destructivelyRemoveLastCat(name) {
    cats.pop();
  }

function destructivelyRemoveFirstCat(name) {
    cats.shift();
  }  

function appendCat(name) {
    let newArray = cats.slice();
    newArray.push("Broom");
    return newArray;
  }

function prependCat(name) {
  let newArray = cats.slice();
  newArray.unshift("Arnold");
  return newArray;
}

function removeLastCat() {
  let newArray = cats.slice(0, cats.length - 1);
  return newArray;
}

function removeFirstCat() {
  let newArray = cats.slice(1);
  return newArray;
}