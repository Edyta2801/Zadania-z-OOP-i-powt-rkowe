
class Cat{
    makeSound(){
        console.log("Miau")
    }
}
const cat=new Cat()
cat.makeSound()



// II sposób
function Cat()

Cat.prototype.makeSound=function(){
    console.log(this.makeSound)
}


