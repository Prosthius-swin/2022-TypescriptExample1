// Write TypeScript code!
/*
const fizzbuzzBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById('fizzbuzz-btn')

// adding an eventlister attaching the fizzbuzz function
fizzbuzzBtn.addEventListener('click', fizzbuzz);
function fizzbuzz() {
  const lowerlimitInput: HTMLInputElement = <HTMLInputElement>document.getElementById('lowerLimit-inp');
  const upperlimitInput: HTMLInputElement = <HTMLInputElement>document.getElementById('upperLimit-inp');

  let counter: number = Number(lowerlimitInput.value);
  let limit: number = Number(upperlimitInput.value);

  console.log("Starting Fizzbuzz")

  while (counter <= limit) {
    if(counter % 3 == 0 && counter % 5 == 0) {
      console.log("fizzbuzz");
    } else if(counter % 3 == 0) {
      console.log("fizz");
    } else if(counter % 5 == 0) {
      console.log("buzz");
    } else {
      console.log(counter)
    }

    counter++;
  }
}
*/
class Car {
    rego;
    speed;
    maxSpeed = 120;
    constructor(_speed, _rego) {
        this.speed = _speed;
        this.rego = _rego;
    }
    increaseSpeed(spd) {
        this.speed = spd;
        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
    }
}
// instantiating instances of Car
let car1 = new Car(0, '123abc');
let car2 = new Car(10, '456def');
let car3 = new Car(20, '789ghi');
// An array/list of cars
let carList = [car1, car2, car3];
// Typescripts funky alternative for 'for' loop syntax
/*
for (let index in carList) {
  console.log(carList[index]);
}
*/
function displaySpeed() {
    let dropDownSelect = document.getElementById('carsDropDown').value;
    for (let i = 0; i < carList.length; i++) {
        if (dropDownSelect === `car${i + 1}`)
            return document.getElementById("showSpeed").innerHTML = `Car${i + 1}'s speed is ${carList[i].speed}km/h`;
    }
}
function changeSpeed() {
    let dropDownSelect = document.getElementById('carsDropDown').value;
    const changeSpeedInp = document.getElementById('changeSpeed-inp');
    let changeSpeedValue = Number(changeSpeedInp.value);
    for (let i = 0; i < carList.length; i++) {
        if (dropDownSelect === `car${i + 1}`)
            return carList[i].increaseSpeed(changeSpeedValue);
    }
}
