class CashRegister{

  constructor() {
    this.price_list = [];
  }

  // - Receives an integer (total price) for tracking.
  ringUp(int){
    this.price_list.push(int);
  }

  // - Returns the max (int) of all integers seen so far.
  getMax(){

  }

  // - Returns the min (int) of all integers seen so far.
  getMin(){

  }

  // - Returns the mean (float) of all integers seen so far.
  getMean(){

  }

  // - Returns the mode (most frequent) (int) of all integers seen so far.
  getMode(){

  }

}

const register = new CashRegister()

console.log(register.ringUp(1))
console.log(register.ringUp(0))
console.log(register.getMax()) // => 1
console.log(register.getMin())// => 0
console.log(register.getMean()) // => 0.5
console.log(register.getMode())// => 1 (1 or 0 is acceptable)
console.log(register.ringUp(3))
console.log(register.ringUp(1))
console.log(register.getMax()) // => 3
console.log(register.getMin()) // => 0
console.log(register.getMean()) // => 1.25
console.log(register.getMode()) // => 1
