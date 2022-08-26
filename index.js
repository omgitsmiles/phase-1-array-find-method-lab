// code your solution here

// function superbowlWin(array) {
//     // declare a variable 'result' assigned to the find() method
//     let result = array.find(element => element.result === 'W')
//     // find method has an argument of anon function which 'looks' through result obj for 'W'
//     if (result) {
//     // if result is found return the the year result, dot notation on year
//     return result.year
//    }
// }

function superbowlWin(array) {
   const result = array.find(rec => rec.result === 'W')
   console.log(result)
   if (result) {
    return result.year
   }
}