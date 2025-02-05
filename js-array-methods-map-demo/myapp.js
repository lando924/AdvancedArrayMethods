const numbers = [21, 37, 63, 99, 142];
const negatives = numbers.map(function(num){
    return num * -1;
});

const double = numbers.map(function(num){
    console.log(num * 2);
});

const todos = [
    {
        id: 1,
        text: 'walk the dog',
        priority: 'high'
    },
    {
        id: 1,
        text: 'walk the flies',
        priority: 'medium'
    },
    {
        id: 3,
        text: 'feed the guys',
        priority: 'low'
    },
    {
        id: 4,
        text: 'put our the fire in my garage',
        priority: 'very high'
    }
];

todos.map(function(todo){
    return todo.text;
})

const links = Array.from(document.querySelectorAll('a'));
const urls = links.map(function(a){
    return a.href;
});


function myMap(arr, callback){
    const mappedArray = [];
    for (let i = 0; i < arr.length; i++){
        const val = callback(arr[i], i, arr);
        mappedArray.push(val);
    }
    return mappedArray;
}

const priorityMap = myMap(todos, function(todo){
    return todo.priority;
})

const repeatedStrings = myMap(['a','b','c','d','e'], function(str, idx){
   return str.repeat(idx);
});