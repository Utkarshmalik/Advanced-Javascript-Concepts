//define and invoke function 

function arr() {

}


arr()

const obj = {
  two() {
    return 2;
  }
}

obj.two()


//function constructor 

const four = new Function('return 4')

four()

/*
Functions are objects ? how ?

*/


function wooohoo() {
  console.log('wohoooo')
}

wooohoo.yell = "ahhhh"

console.log(wooohoo.yell)