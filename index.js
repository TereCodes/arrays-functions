//question 1
// Mutating methods change the object after the method has been used.
// e.g:
// pop()
// push()
// shift()
// sort()
// reverse()

// WHILE 
// Non-mutating methods do not change the object after the method has being used.
// e.g:
// join()
// indexOf()
// slice()
// concat()
// includes()



//question 2
let arrayOfLanguages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']

arrayOfLanguages.push('Kotlin')
arrayOfLanguages.splice(3, 0, 'Java');
arrayOfLanguages.shift();
arrayOfLanguages.unshift('Scala', 'Swift');
arrayOfLanguages.splice(5, 1, 'Go', 'Rust');
console.log(arrayOfLanguages)



//question 3
let fruit = ['apple', 'mango', 'banana'];
function changeFruit(fruit) {
    fruit[2] = "orange";
    return fruit;
}
console.log(changeFruit(fruit));
//The result will be ['apple', 'mango', 'orange']



//question 4
function findMaxNum(arr) {
    let maxNum = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i]
        }
    }
    return maxNum;

}

console.log(findMaxNum([14, 25, 10, -2]));



//question 5
function valTimesIndex(arr) {
    return arr.map((val, index) => val * index);
}
console.log(valTimesIndex([2, 4, 6]));


