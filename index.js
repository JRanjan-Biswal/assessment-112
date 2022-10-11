
// function strLength(str1, str2) {
//     let a = str1.length, b = str2.length;
//     return a+b;
// }
// console.log(strLength('jyoti', 'ranjan'))

function subStrChecker(mainString, subString) {
    let str1 = mainString, str2 = subString;
    let count = str2.length;  //2
    // let j = count, i = 0;
    let j = count, i=0;
    while(j<str1.length+1) {
        if(str2==str1.slice(i, j)){
            return true
        }
        i++
        j++
    }
}

let a = subStrChecker('jyotiranjan', 'ran') //2
console.log(a)
