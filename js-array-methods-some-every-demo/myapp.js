// const words = [
//     'immunoelectrophoretically',
//     'rotavator',
//     'tsktsk',
//     'pyschopysicotherapeutics',
//     'squirrelled',
//     'crypt',
//     'uncopyrightable',
//     'cysts',
//     'psedopseudohypoparathyroidism',
//     'unimaginatively'
// ];

// words.some(function(word) {
//     return word.length > 60;
// });

// words.some(function(word) {
//     return word.indexOf('thyroid') !== -1;
// });

// words.every(function(word) {
//     return word.length > 5;
// })

// function allStrings(arr) {
//     return arr.every(function(el) {
//         typeof el === 'string'
//     })
// }

// const btn = document.querySelector('button');
// btn.addEventListener('click', function(e) {
//     const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//     const allChecked = Array.from(checkboxes).every(function(checkbox){
//         return checkbox.checked; 
//     });
//     if (!allChecked) alert("PLEASE AGREE TO EVERYTHING!");
// });

function mySome (arr, callback) {
    for (let i = 0; i < arr.length; i ++) {
       if (callback(arr[i], i, arr)) return true;
    }
    return false;
};

mySome([4,5,6,7], function(num) {
    return num > 5;
})

function myEvery (arr, callback) {
    for (let i = 0; i < arr.length; i ++) {
        if (!callback(arr[i], i, arr)) return false;
     }
     return true;
}