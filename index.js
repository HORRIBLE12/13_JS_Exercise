/** WRITE YOUR CODE BELOW THIS LINE**/


// This function should return Spider-Man
function getSpiderMan(members) {
return members[2]
}

// This function should return Captian America
function getCaptainAmerica(members) {
return members[4]
}

// This function should return Scarlet Witch
function getScarletWitch(members) {
return members[5]
}


/*************** BONUSE FUNCTION *****************/

// This function should return the entire array of members without number 5.
function removeFive(members) {
    
}

/************************************************/

// Array of Avengers members
var avengers = ["Hulk", "Iron Man", "Spider-Man", 5, "Captain America", "Scarlet Witch"];


/** WRITE YOUR CODE BELOW THIS LINE**/

module.exports = {
    getCaptainAmerica,
    getSpiderMan,
    getScarletWitch,
    removeFive,
    avengers
}