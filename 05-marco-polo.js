// Create an application which iterates numbers from 1 to 100. 
// For multiples of 3, print "Marco!" instead of the number and 
// for multiples of 5, print "Polo!" instead of the number. 
// For numbers which are multiples of both 3 and 5 print "Marco! Polo!". 
// This is a VERY common JavaScript interview question and you should know how to do this. You will need to take advantage of the modulus operator to accomplish this task.


let count = 0
let multipleOfThree = false
let multipleOfFive = false

while (count <= 100) {
    multipleOfThree = (count % 3) === 0
    multipleOfFive = (count % 5) === 0

    console.log(count)

    if(multipleOfThree && multipleOfFive){
        //count is multiple of 3 AND 5 since remainder is zero
        console.log("Marco! Polo!")
    }
    else if (multipleOfThree) {
        //count is multiple of 3 since remainder is zero
        console.log("Marco!")
        
    } else if(multipleOfFive) {
        //count is multiple of 5 since remainder is zero
        console.log("Polo!")
    }

    count++
}