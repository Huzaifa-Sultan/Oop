import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    stucents = [];
    addStudent(obj) {
        this.stucents.push(obj);
    }
}
let persons = new Person();
let programmeStart = async (persons) => {
    do {
        console.log("Welcome guest");
        let ans = await inquirer.prompt({
            type: "list",
            message: "Who would you like to talk",
            name: "select",
            choices: ["By your self", "Student"]
        });
        if (ans.select == "By your self") {
            console.log("Hello i am talking myself");
        }
        if (ans.select == "Student") {
            let ans = await inquirer.prompt({
                type: "input",
                message: "Which student you would like to talk",
                name: "student",
            });
            let student = persons.stucents.find(val => val.name == ans.student);
            if (!student) {
                let name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello i am ${name.name}, and i am fine `);
                console.log(persons.stucents);
            }
            if (student) {
                console.log(`Hello i am ${student.name}, and i am fine..... `);
                console.log(persons.stucents);
            }
        }
    } while (true);
};
programmeStart(persons);
