// Array សម្រាប់ទុកអក្សរឃ្លា និងលេខកូដត្រឹមត្រូវ
const puzzles = [
    {
        clueText: "Hint: Only one number is correct and well placed.",
        imageSrc: "https://i.ytimg.com/vi/pwS1UB2mOCA/sddefault.jpg",
        correctCode: [0, 4, 2]
    },
    {
        clueText: "Hint: One number is correct but wrong placed.",
        imageSrc: "https://3.bp.blogspot.com/-yGqQN4BOZNg/WyjIf4rQZgI/AAAAAAABexc/KC-OmiLnwGER0xI2rDHjm8alGHj14rrPACLcBGAs/s1600-rw/crack-the-code-puzzle.png",
        correctCode: [4, 2, 6]
    },
    
];

let attempts = 3;
let currentPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];

// កំណត់អក្សរឃ្លា និងរូបភាព
document.getElementById("clueText").textContent = currentPuzzle.clueText;
document.getElementById("lockImage").src = currentPuzzle.imageSrc;

function checkCode() {
    const digit1 = parseInt(document.getElementById("digit1").value);
    const digit2 = parseInt(document.getElementById("digit2").value);
    const digit3 = parseInt(document.getElementById("digit3").value);

    const userCode = [digit1, digit2, digit3];
    let correctPlace = 0;
    let correctWrongPlace = 0;

    // ចាប់ផ្តើមការពិនិត្យ
    for (let i = 0; i < 3; i++) {
        if (userCode[i] === currentPuzzle.correctCode[i]) {
            correctPlace++;
        } else if (currentPuzzle.correctCode.includes(userCode[i])) {
            correctWrongPlace++;
        }
    }

    if (correctPlace === 3) {
        document.getElementById("message").textContent = "អបអរសាទរ! អ្នកបានដោះសោរបានជោគជ័យ!";
        document.getElementById("hint").textContent = "";
        document.getElementById("attempts").textContent = "";
        document.querySelector("button").disabled = true;
    } else {
        attempts--;
        document.getElementById("message").textContent = `មាន ${correctPlace} លេខត្រឹមត្រូវ និងនៅកន្លែងត្រឹមត្រូវ, និង ${correctWrongPlace} លេខត្រឹមត្រូវតែស្ថិតនៅកន្លែងខុស។`;
        document.getElementById("attempts").textContent = `ការព្យាយាមនៅសល់៖ ${attempts}`;
        
        if (attempts <= 0) {
            document.getElementById("message").textContent = "គ្រាប់បែកផ្ទុះ! អ្នកបានបរាជ័យ។";
            document.getElementById("hint").textContent = "";
            document.getElementById("attempts").textContent = "";
            document.querySelector("button").disabled = true;
        } else {
            document.getElementById("hint").textContent = `កំណត់ត្រា៖ ${correctPlace} លេខត្រឹមត្រូវនិងនៅកន្លែងត្រឹមត្រូវ, ${correctWrongPlace} លេខត្រឹមត្រូវតែស្ថិតនៅកន្លែងខុស។`;
        }
    }
}
