class Person {
    constructor(name , age, marks){
     this.name = name;
     this.age = age;
     this.marks = marks;


     //method inside constructor
     this.getgrade = function () {
        if(this.marks >= 90) return "A";
        else if (this.marks >= 75) return "B";
        else if (this.marks >= 50) return "C";
        else return "D";
     }
    }


    getresult(){
        return`Hello my name is ${this.name} , ${this.age} years old & got ${this.marks}`
    }



}

const student = new Person("sakshi" , 23, 25);
console.log(student)
console.log(student.getresult());