class CashRegister{

  constructor() {
    this.price_list = [];
    this.price_map = {};
    this.sum = 0;
    this.mode_value = 0;
    this.frequency = 0;

  }

  ringUp(int){
    this.price_list.push(int);
    this.price_list.sort();
    this.mode_value = int;
    if (this.price_map[int.toString] === undefined){
       this.price_map[int.toString] += 1;
       if (this.price_map[int.toString] > this.frequency) {
         this.frequency += 1;
         this.mode_value = int;
       }

    }else{
       this.price_map[int.toString] = 0;
    }

    this.sum += int;

  }

  // - Returns the max (int) of all integers seen so far.
  getMax(){
    console.log(this.price_list[this.price_list.length - 1]);

  }

  // - Returns the min (int) of all integers seen so far.
  getMin(){
    console.log(this.price_list[0]);

  }

  // - Returns the mean (float) of all integers seen so far.
  getMean(){
    console.log(this.sum / this.price_list.length);

  }

  // - Returns the mode (most frequent) (int) of all integers seen so far.
  getMode(){
    console.log(this.mode_value);

  }

}

const register = new CashRegister()

register.ringUp(1)
register.ringUp(0)
console.log(register.getMax()) // => 1
console.log(register.getMin())// => 0
register.getMean() // => 0.5
console.log(register.getMode())// => 1 (1 or 0 is acceptable)
register.ringUp(3)
register.ringUp(1)
console.log(register.getMax()) // => 3
console.log(register.getMin()) // => 0
register.getMean() // => 1.25
console.log(register.getMode()) // => 1
