class CashRegister{

  constructor() {
    this.price_list = [];
    this.price_map = {};
    this.sum = 0;
    this.mode_value = 0;
    this.frequency = 0;
    this.ring_up_count = 0;
    this.max_value = 0;
    this.min_value = 0;

  }


  // - Receives an integer (total price) for tracking.
  // Runs in constant time (O(1) time complexity)
  ringUp(int){
    if (int < this.min_value) {
        this.min_value = int;
    }
    if (int > this.max_value) {
        this.max_value = int;
    }

    this.mode_value = int;

    //Using map to keep the tracking of mode (most frequent) value
    if (this.price_map[int.toString] === undefined){ //If there is not this value in the map
         this.price_map[int.toString] = 1; //map[price] = 1 (first frequency)
    }else{
      this.price_map[int.toString] += 1; //Increment value (frequency)
      if (this.price_map[int.toString] > this.frequency) { //compare with most frequent so far
        this.frequency += 1; //update most frequent constant
        this.mode_value = int; //update mode value
      }

    }

    //Sum of values when adding it to the list of values
    //For mean value
    this.sum += int;
    this.ring_up_count += 1;

  }

  // - Returns the max (int) of all integers seen so far.
  getMax(){
    return this.max_value; //Runs in constant time (O(1) time complexity)

  }

  // - Returns the min (int) of all integers seen so far.
  getMin(){
    return this.min_value; //Runs in constant time (O(1) time complexity)

  }

  // - Returns the mean (float) of all integers seen so far.
  getMean(){
    return this.sum / this.ring_up_count; //Runs in constant time (O(1) time complexity)

  }

  // - Returns the mode (most frequent) (int) of all integers seen so far.
  getMode(){
    return this.mode_value; //Runs in constant time (O(1) time complexity)

  }

}

const register = new CashRegister()

register.ringUp(1)
register.ringUp(0)
console.log(register.getMax()) // => 1
console.log(register.getMin())// => 0
console.log(register.getMean()) // => 0.5
console.log(register.getMode())// => 1 (1 or 0 is acceptable)
register.ringUp(3)
register.ringUp(1)
console.log(register.getMax()) // => 3
console.log(register.getMin()) // => 0
console.log(register.getMean()) // => 1.25
console.log(register.getMode()) // => 1
