
// Assignment 1: Summarize Grades


function summarizeGrades(assignments) {
  let sum = 0;
  let count = assignments.length;

  //The late penalty is 20 percentage points per day,
  //not a percentage of the grade. 
  const LATE_PENALTY_PER_DAY = 20;
  
  let assignment; // Declare assignment variable outside the loop to maintain its value after the loop ends

  for (let i = 0; i < count; i++) { // Loop through each assignment in the assignments array
    assignment = assignments[i];
    let grade = assignment.grade;

    if (assignment.daysLate > 0) { // Check if the assignment is late
      let latePenalty = assignment.daysLate * LATE_PENALTY_PER_DAY;
      grade = grade - latePenalty >= 0 ? grade - latePenalty: 0;
    }
    sum += grade;
  }
  
  let lastGraded = assignment;
  return { average: sum/count, lastGraded: lastGraded.id };
}

// Example test
const assignments = [
  { id: "1234", grade: 80, daysLate: 2 },
  { id: "5678", grade: 50, daysLate: 0},
  { id: "9876", grade: 30, daysLate: 2},
];
console.log(summarizeGrades(assignments)); 

// Assignment 2: Closures

let letterCounter = function (letter, ignoreCapitalization) {
    
    let counter = function(word){ // This function counts the occurrences of a specific letter in a given word
        let target = letter

        if (ignoreCapitalization){ // If ignoreCapitalization is true, convert both the word and the target letter to lowercase for case-insensitive comparison 
            word = word.toLowerCase()
            target = target.toLowerCase()
        }

        return word.split(target).length - 1;
    };

    return counter;
}


function makeCharacter(characterName){ // This function creates a character object with a name and methods to level up and show skill levels
   
   let farmingSkill = 0
   let fishingSkill = 0

    let levelUp = function (skill){ // This function increases the skill level of the character based on the skill name provided
        if (skill === "farming" && farmingSkill < 10){
            farmingSkill++
        }
        if (skill === "fishing" && fishingSkill < 10){
            fishingSkill++
        }
    }

    let showSkill = function (skill){ // This function returns the current skill level of the character based on the skill name provided
        if (skill === "farming"){   // If the skill is "farming", return the current farming skill level
            return farmingSkill
        }
        if (skill === "fishing"){ // If the skill is "fishing", return the current fishing skill level
            return fishingSkill
        }
    }

    return { // Return an object with the character's name and the methods to level up and show skill levels
        name: characterName,
        levelUp,
        showSkill
    }
}

