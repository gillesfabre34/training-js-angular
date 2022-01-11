console.log('ARROW FUNCTIONS');

let zzz = {

  a: 3,

  normalFunction() {
    console.log('Normal Function', this.a);
  },

  arrowFunction: () => {
    console.log('Arrow function', this.a);
  }

}

zzz.normalFunction();
zzz.arrowFunction()
