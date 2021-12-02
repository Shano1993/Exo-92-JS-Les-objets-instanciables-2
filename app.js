let Personne = function (name, firstName, age, job) {
    this.name = name;
    this.firstName = firstName;
    this.age = age;
    this.job = job;

    this.getNameFirstNameAge = function () {
        return this.name + " " + this.firstName + " " + this.age + " " + this.job;
    }
}

let array = [];
let samuel = new Personne("Coquelet", "Samuel", 31, "Développeur");
let stefan = new Personne("Hanotiau", "Stefan", 28, "Chomeur");
let jules = new Personne("Coq", "Jules", 45, "Cuisinier");
let arthur = new Personne("Hano", "Arthur", 82, "Retraité");
let bob = new Personne("L'éponge", "Bob", 10, "Préparateur de paté de crabs");

array.push(samuel, stefan, jules, arthur, bob);
for (let i = 0; i < array.length; i++) {
    let element = document.createElement('div');
    element.innerHTML = array[i].getNameFirstNameAge();
    document.body.appendChild(element);
}

