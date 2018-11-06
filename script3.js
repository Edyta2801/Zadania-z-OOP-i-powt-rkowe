
class Calculator(){
    inputFirst(x){ this.x = x }
    inputSecond(y){ this.y = y }
    add(){ this.x + this.y }
    subtract(){ this.x - this.y }
    multiply(){ this.x * this.y }
    divide(){ this.x / this.y }
}




const calc = new Calculator()

calc.inputFirst(2)
calc.inputSecond(3)

calc.add()

calc.subtract()
calc.multiply()
calc.divide()