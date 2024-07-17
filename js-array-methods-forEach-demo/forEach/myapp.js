const colors = ['teal', 'purple', 'cyan', 'peach'];


// function yell(val, i){
//     const caps = val.toUpperCase();
//     console.log(`At index ${i}, ${caps}`)
// }

// colors.forEach(yell);

// const prices = [30.99, 19.99, 2.5, 99.0];
// let total = 0;
// prices.forEach(function(price){
//     total += price;
// });

// for (price of prices){
//     total += price;
// }
// console.log(total);

//first version
function forEach (arr, callback){
    for (let i = 0; i < arr.length; i++){
        callback(arr[i], i, arr);
    }
}

forEach(colors, function(color, i){
    console.log(color.toUpperCase(), 'at index of:', i);
})

colors.forEach(function(color, i){
    console.log(color.toUpperCase(), 'at index of:', i);
});

