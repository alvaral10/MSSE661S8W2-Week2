var object = {
    name: 'David',
    age: 50
};

class Person{
    name;
    age;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

}

console.log(new Person('David',50));