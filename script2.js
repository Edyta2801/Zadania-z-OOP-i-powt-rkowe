class Animal {
    constructor(name) {
        this.name = name
    }
}

class Cat extends Animal() {
    constructor(name) {
        this.name = name
    }
}



class Cat {
    constructor() {
        this.sound = 'Miau'
    }
    makeSound() {
        console.log(this.sound)
    }
    changeSound(sound) {
        this.sound = sound
    }
}




const cat = new Cat()
cat.makeSound()
cat.changeSound('Kłaczek')
cat.makeSound()




