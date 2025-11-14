// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
greeting(){
    return `Hello , my name is ${this.name} and I am ${this.age} years old`;
}

updateage(newage){
    this.age = newage;
    console.log(`Updated age: ${this.age}`);
}
}
const p1 = new Person("Sakshi" , 23);
console.log(p1.name);
console.log(p1.greeting());
p1.updateage(24);


// Task 2: Add a method to the Person class that updates the age property and logs the updated age.
class Person3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
greeting(){
    return `Hello , my name is ${this.name} and I am ${this.age} years old`;
}

updateage(newage){
    this.age = newage;
    console.log(`Updated age: ${this.age}`);
}
}
const p2 = new Person3("Sakshi" , 23);
console.log(p2.name);
console.log(p2.greeting());
p1.updateage(24);


//Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
class Person1 {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

   
}
class student extends Person1{
    constructor(studentid){
     super()
        this.studentid = studentid;
    }

    getid(){
        return`Hello everyone my id is ${this.studentid}`;
    }
   }

   const s1 = new student( 's5');
   console.log(s1.getid());

/*
   class Person4 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Student extends Person4 {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    getStudentId() {
        return `Student ID: ${this.studentId}`;
    }
}

const student = new Student('Jane Doe', 20, 'S12345');
console.log(student.getStudentId()); // Output: Student ID: S12345

*/

// Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
class Person5 {
    constructor(name , age) {
    this.name = name;
    this.age = age;
    }

    greeting(){
        return `Hello everyone my name is ${name} and I am ${this.age} years old`;
    }
}

class child extends Person5 {
    constructor(name , age, childid){
        
        super(name ,age);
        this.childid = childid;
    }

    getchildid(){
        return `ChildId : ${this.childid}`
    }

    greeting(){
               return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.childid}.`; 
    }
}

const c1 = new child("sakshi", 25,'c2');
console.log(c1.greeting());

// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.


class Person6 {
    constructor(name , age) {
        this.name = name;
        this.age = age;
    }
    greet(){
        return `Hello my name is ${this.name} and I am ${this.age} years old`;
    }
    static genericgreet(){
        return `Hello, this is a generic greeting`;
    }
    
}
console.log(Person6.genericgreet());
console.log(Person6.greet());// gives error bcoz greet is not a function