function sumArray(numbers){
 return numbers.reduce((acc,number) => acc+number,0);
}
console.log(sumArray([1,2,3,4]));


function averageArray(numbers){
    return sumArray(numbers)/numbers.length;
}
console.log(averageArray([1,2,3,4]));

 
function longestString(string){
    return string.reduce((longest,current)=>current.length>longest.length ? current:longest,"");
}
console.log(longestString(["dog","goat","cow"]));


function printNumbers(n){
    if(n<1) return;
    printNumbers(n-1);
    console.log(n);

}
printNumbers(5);




const data = [
    { id: "43", name: "ali", occupation: "worker", age: "41" },
    { id: "48", name: "ahmad", occupation: "cleaner", age: "25" },
    { id: "77", name: "alexander", occupation: "barber", age: "29" },
    { id: "63", name: "mohammad", occupation: "docter", age: "58" },
    { id: "8", name: "salama", occupation: "None", age: "111" }
];
function incrementAge(person) {
    person.age = (person.age || 0) + 1; 
    person.updated_at = new Date();
    console.log(`${person.name} is now ${person.age} years old.`);
}


function createPerson(name) {
    return { name: name };
}

const person1 = createPerson("Ali");
incrementAge(person1);
incrementAge(person1);

const person2 = createPerson("ahmad");
incrementAge(person2);