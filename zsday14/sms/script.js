// Constructor Function
function Student(name, age, marks) {
    this.name = name;
    this.age = age;
    this.marks = marks;

    this.getGrade = function () {
        if (this.marks >= 90) return "A";
        else if (this.marks >= 75) return "B";
        else if (this.marks >= 50) return "C";
        else return "D";
    };
}

let students = [];

// Add new student from UI
function addStudent() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const marks = document.getElementById("marks").value;

    if (!name || !age || !marks) {
        alert("Please fill all fields!");
        return;
    }

    const newStudent = new Student(name, age, Number(marks));
    students.push(newStudent);

    displayStudents();

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("marks").value = "";
}

// Display student list in table
function displayStudents() {
    const tbody = document.getElementById("studentList");
    tbody.innerHTML = "";

    students.forEach(stud => {
        const row = `
            <tr>
                <td>${stud.name}</td>
                <td>${stud.age}</td>
                <td>${stud.marks}</td>
                <td>${stud.getGrade()}</td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}
