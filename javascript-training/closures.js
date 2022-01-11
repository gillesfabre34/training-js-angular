console.log('CLOSURES');

/**
 * A closure keeps access to the variables and parameters of its outer function
 */
console.log('Closure example :');
function counter(initValue) {

  var currentValue = initValue;

  // A "private" method
  var _log = function() {
    console.log('currentValue = ' + currentValue);
  }
  var increment = function(step) {
    currentValue += step;
    _log();
  };

  return increment;
}

var incrementCounter = counter(0);

incrementCounter(1);
incrementCounter(2);
incrementCounter(3);

// ------------------------------------

console.log('SetTimeout with var and without closure :');
for (var i =0; i < 5; i++) {
  setTimeout(function() {
    console.log('i : ', i);
  }, 50);
}

// ------------------------------------

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

// ------------------------------------

setTimeout(function() {
  console.log('SetTimeout with let and without closure :');
  for (let i =0; i < 5; i++) {
    setTimeout(function() {
      console.log('i : ', i);
    }, 50);
  }
}, 700);
