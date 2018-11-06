function Task(text){
    this.text=text
    this.isCompleted=false
}

class ToDo{
    constructor(){
        this.tasks=[
            new Task('Wynieś śmieci')
            new Task('Zrób śniadanie')
    }
}