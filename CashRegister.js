class CashRegister{

  constructor() {
    this.price_list = [];
    this.price_map = {};
    this.sum = 0;
    this.mode_value = 0;
    this.frequency = 0;
    this.ring_up_count = 0;

  }


  ringUp(int){
    this.price_list.push(int);
    this.price_list.sort();
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
    console.log(this.price_list[this.price_list.length - 1]); //constant run time O (1)

  }

  // - Returns the min (int) of all integers seen so far.
  getMin(){
    console.log(this.price_list[0]); //constant run time O (1)

  }

  // - Returns the mean (float) of all integers seen so far.
  getMean(){
    console.log(this.sum / this.ring_up_count); //constant run time O (1)

  }

  // - Returns the mode (most frequent) (int) of all integers seen so far.
  getMode(){
    console.log(this.mode_value); //constant run time O (1)

  }

}

const register = new CashRegister()

register.ringUp(1)
register.ringUp(0)
register.getMax() // => 1
register.getMin()// => 0
register.getMean() // => 0.5
register.getMode()// => 1 (1 or 0 is acceptable)
register.ringUp(3)
register.ringUp(1)
register.getMax() // => 3
register.getMin() // => 0
register.getMean() // => 1.25
register.getMode() // => 1
