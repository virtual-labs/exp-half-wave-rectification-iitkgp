/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var quizJSON = {
    "info": {
        "name": "Test Your Knowledge!!",
        "main": "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<p>Learn More.</p>",
        "level1": "Jeopardy Ready",
        "level2": "Jeopardy Contender",
        "level3": "Jeopardy Amateur",
        "level4": "Jeopardy Newb",
        "level5": "Stay in school, kid..." // no comma here
    },
    "questions": [
        {// Question 1 - Multiple Choice, Single True Answer
            "q": "What is the Ripple factor of a half wave rectifier? ",
            "a": [
                {"option": " 0.31", "correct": false},
                {"option": "0.48", "correct": false},
                {"option": " 0.707 ", "correct": false},
                {"option": " 1.21;", "correct": true} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The peak applied signal voltage is V<sub>m</sub> then for a half wave rectifier circuit the PIV(Peak Inverse Volatge) of the diode should be:  ",
            "a": [
                {"option": "> 2V<sub>m</sub> ", "correct":false},
                {"option": " &#8804; 2V<sub>m</sub>", "correct": false},
                {"option": " &#8805;V<sub>m</sub> ", "correct":true},
                {"option": "  < V<sub>m</sub>", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 3 - Multiple Choice, Single True Answer
            "q": "An ideal Si diode is used in a half wave rectifier circuit with peak input sinusoidal signal amplitude of 5V (V<sub>m</sub> = 5V & V<sub>T</sub> = 0.7V). The average dc voltage is",
            "a": [
                {"option": "<1.27V", "correct": false},
                {"option": "=1.37V ", "correct": true},
                {"option": " >1.87V", "correct": false},
               // {"option": " it is impossible to determine the change in the resistor value", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        }
    ]
};

