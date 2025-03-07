// Write a loop that displays the following triangle within a console window:

// #
// ##
// ###
// ####
// #####
// ######

let triangle = ''

do {
    if(triangle === ''){
        triangle = "#"
    }else{
        triangle += "#"
    }
    
    console.log(triangle)
} while (triangle != '######');
