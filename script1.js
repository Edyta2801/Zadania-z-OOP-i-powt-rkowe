
function makeCat() {
    const makeSound = {
        makeSound: function () {
            console.log("Miau")
        }
    };
    return makeSound
}




const cat = makeCat()

cat.makeSound()



// II sposób:

function makeCat() {
    return {
        makeSound: function () {
            console.log("Miau")
        }
    }
}

const cat = makeCat()

cat.makeSound()


// III sposób:

function makeCat=() => ({
    makeSound: () => console.log("Miau)        
})