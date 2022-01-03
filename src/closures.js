console.log('CLOSURES');

console.log('SetTimeout with var and without closure :');
for (var i =0; i < 5; i++) {
  setTimeout(function() {
    console.log('i : ', i);
  }, 50);
}

setTimeout(function() {
  console.log('SetTimeout with var and with closure :');
  for (var i = 0; i < 5; i++) {
    setTimeout((function outer(i) {
      return function inner() {
        console.log('i : ', i);
      }
    })(i), 50);
  }
}, 300);

setTimeout(function() {
  console.log('SetTimeout with let and without closure :');
  for (let i =0; i < 5; i++) {
    setTimeout(function() {
      console.log('i : ', i);
    }, 50);
  }
}, 700);
