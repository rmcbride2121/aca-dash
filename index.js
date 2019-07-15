
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//create a function called `map`, it should take 2 parameters `array` and `iteratee`
//`array` must be an array
//`iteratee` must be a function that takes one parameter returns something
//The point of the javascript map function is to take an array and return different array with the exact same number of items in it
//The items will be whatever the function `iteratee` creates
//in the map function create a new empty array and store in a variable named whatever you want (myNewArray)
//loop array and extract the single item from the array per loop and store it in a variable
//on each loop call iteratee() passing in the item from the current loop into the call to iteratee()
//iteratee is a function that must return something, capture whatever it returns in a variable
//add the returned value from iteratee tp myNewArray
//after looping, return  myNewArray
let mapArr = [1, 2, 3, 4, 5];
let newArr = [];

function map(){
    for (let i = 0; i < mapArr.length; i++) {
        //console.log(mapArr[i]);
        newArr.push(mapArr[i] * 3);
    }
    console.log("map 1:");
    console.log(newArr);
}
map();

let mapMap = mapArr.map(num => num * 2);
console.log("map 2:");
console.log(mapMap);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//create a function called `filter`, it should take 2 parameters `array` and `iteratee`
//`array` must be an array
//`iteratee` must be a function that takes one parameter and returns a bool
//in the map function create a new empty array and store in a variable named whatever you want (myNewArray)
//loop `array` and call iteratee for each thing in the array, 
//     passing in the item from the current loop
//iteratee will return true or false, if true add the item to myNewArray else do not
//after looping, return myNewArray
let filterArr = [1, 2, 3, 4, 5];
let newFilterArr = [];

function filter(){
    for (let i = 0; i < filterArr.length; i++) {
        //console.log(filterArr[i]);
        if (filterArr[i] > 2) {
            newFilterArr.push(filterArr[i]);
        }
    }
    console.log("filter 1:");
    console.log(newFilterArr);
}
filter()

let filterFilter = filterArr.filter(num => num > 2);
console.log("filter 2:");
console.log(filterFilter);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//create a function called `find`, it should take 2 parameters `theArray` and `fnc`
//loop theArray and call the fnc for each thing in the array, 
//     passing in the item from the current loop
//fnc will return true or false, if true return the item 
//after looping, return null
let findArr = [1, 2, 3, 4, 5];
let newFindArr = [];
let findNum = 3;

function find(){
    for (let i = 0; i < findArr.length; i++) {
        if (findArr[i] == findNum) {
            newFindArr.push(findArr[i]);
        }
    }
    console.log("find 1:");
    console.log(newFindArr);
}
find()

let findFind = findArr.find(num => num == findNum);
console.log("find 2:");
console.log(findFind)

//return the last item in theArray
let findLastArr = [1, 2, 3, 4, 5];
let newFindLastArr = [];

function findLast(){
    newFindLastArr = findLastArr.slice(-1).pop();
    console.log("findLast 1:");
    console.log(newFindLastArr);
}
findLast()

//return the first element of the array
let headArr = [1, 2, 3, 4, 5];
let newHeadArr = [];
function head(){
    newHeadArr = headArr.shift();
    console.log("findFirst 1:");
    console.log(newHeadArr);
}
head()

//create a new array
//loop theArray in reverse order
//add the item from each loop to the new array
//return the new array
let reverseArr = [1, 2, 3, 4, 5];
let newReverseArr = [];
function reverse(){
    for (let i = reverseArr.length - 1; i >= 0; i--) {
        newReverseArr.push(reverseArr[i]);
    }
    console.log(newReverseArr);
}
reverse()

//create a new array
//loop theArray
//add the item from each loop to the new array except the first item
//return the new array
let tailArr = [1, 2, 3, 4, 5];
let newTailArr = [];
function tail(){
    let firstItem = tailArr.shift();
    for (let i = 0; i < tailArr.length; i++) {
        newTailArr.push(tailArr[i]);
    }
    console.log(newTailArr);
}
tail()

//implement the most basic sorting algorithm there is
//assume the array will always have numbers
//use a while loop to constantly loop theArray until it is sorted
//use a for loop to loop theArray
//look at the current item and the next item, compare them
//if the items are out of order, swap them
//initialize a variable that indicates if a swap had to be done, set it to false
//if a swap is done set it to true
//after each for loop check the variable, if true, continue the while loop
//if false return theArray
function sort(theArray){

}

exports.map = map;
exports.filter = filter;
exports.find = find;
exports.head = head;
exports.reverse = reverse;
exports.tail = tail;
exports.sort = sort;
exports.findLast = findLast;
