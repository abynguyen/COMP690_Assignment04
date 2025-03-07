// Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window.

// Sample Output:
// "0 is even"
// "1 is odd"
// "2 is even"

let count = 0

while (count <= 15) {
    let countValue

    if ((count % 2) === 0) {
        console.log(`${count} is even`)
    }else{
        console.log(`${count} is odd`)
    }

    count++
}
