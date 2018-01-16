function forLoop(arrayMy) {
  
  for (let i = 0; i < 25; i++ ) {
    if (i === 1 ) {
      arrayMy.push('I am 1 strange loop.');
    } else {
      arrayMy.push(`I am ${i} strange loops.`);
    }
  }
return arrayMy;
  
}

function whileLoop(n) {
  while(n>0) {
  console.log(n);
  n--;
  }
  return 'done';
}

function doWhileLoop(arrayMy) {
  function maybeTrue() {
  return Math.random() >= 0.5;
  }
do {
  arrayMy.pop();
} while (arrayMy.length > 0 || maybeTrue());
return arrayMy;
 
}