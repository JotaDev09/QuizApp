let questions = [
    {
        "question": "Wer was der erste Avenger?",
        "answer_1": "Tony Stark",
        "answer_2": "Carol Danvers",
        "answer_3": "Steve Rogers",
        "answer_4": "Groot",
        "right_answer": 3
    },
    {
        "question": "Warum hat Tony Stark den ersten Ironman-Anzug gemacht?",
        "answer_1": "Er war egozentrisch",
        "answer_2": "Er war Millionär",
        "answer_3": "Nicht mit dem Flugzeug reisen",
        "answer_4": "Flucht aus einer Höhle",
        "right_answer": 4
    },
    {
        "question": "Wer ist der Gott von Asgard?",
        "answer_1": "Thor",
        "answer_2": "Loki",
        "answer_3": "Nick Fury",
        "answer_4": "Rocket",
        "right_answer": 1
    },
    {
        "question": "Wovon ist Dr. Strange der Zauberer?",
        "answer_1": "Verstecken spielen",
        "answer_2": "Mystische Künste",
        "answer_3": "Hasen erscheinen lassen",
        "answer_4": "Zauber in Hogwarts",
        "right_answer": 2
    },
    {
        "question": "Welches Material gibt es in Wakanda?",
        "answer_1": "Vibranium",
        "answer_2": "Adamantium",
        "answer_3": "Gold",
        "answer_4": "Teseracto",
        "right_answer": 1
    },
    {
        "question": "Warum verliert Thor ein Auge?",
        "answer_1": "Rocket reißt es heraus",
        "answer_2": "Kämpfen Hela",
        "answer_3": "Kämpfen Thanos",
        "answer_4": "Öffnen einer Bierflasche mit dem StormBreaker",
        "right_answer": 2
    },
    {
        "question": "Wen sponsert Tony Stark?",
        "answer_1": "Harry Potter",
        "answer_2": "Hulk",
        "answer_3": "Rocket",
        "answer_4": "Peter Parker",
        "right_answer": 4
    },
    {
        "question": "Warum will Thanos die Infinity-Steine?",
        "answer_1": "Um Bürokratie zu vermeiden",
        "answer_2": "Um nach Narnia zu reisen",
        "answer_3": "Um Überbevölkerung und Hunger zu beenden",
        "answer_4": "Um die Avengers zu erledigen",
        "right_answer": 3
    },
    {
        "question": "Wer sammelt die ersten Avengers?",
        "answer_1": "Nick Fury",
        "answer_2": "Steve Rogers",
        "answer_3": "Bruce Banner",
        "answer_4": "Tony Stark",
        "right_answer": 1
    },
    {
        "question": "Wer hat Vision erschaffen?",
        "answer_1": "Gandalf und Aragorn",
        "answer_2": "Groot und Rocket",
        "answer_3": "Thor und Loki",
        "answer_4": "Tony Stark und Bruce Banner",
        "right_answer": 4
    },
]


let currentQuestion = 0;
let rightQuestions = 0;
let audio_success = new Audio('sound/right.mp3');
let audio_fail = new Audio('sound/wrong.mp3');


function init() {
    document.getElementById('numberQuestions').innerHTML = questions.length;
    showQuestion();
}


function initGame() {
    document.getElementById('titleQuizz').style = 'display: none';
    document.getElementById('firstQuestion').style = '';

}


function showQuestion() {

    if(currentQuestion >= questions.length) {
        document.getElementById('endScreen').style = '';
        document.getElementById('questionsBody').style = 'display: none;'

        document.getElementById('totalQuestions').innerHTML = questions.length;
        document.getElementById('rightAnswers').innerHTML = rightQuestions;
        document.getElementById('fotoQuizz').src = 'fotos/mjollnir.jpg'; //cambiar imagen final
    } else { //Show question

    let percent = (currentQuestion + 1) / questions.length;
    percent = percent * 100; //en caso de decimales para redondear sería: Math.round(percent * 100)

    document.getElementById('progressBar').innerHTML = `${percent}%`;
    document.getElementById('progressBar').style.width = `${percent}%`;

    //console.log('Fortschritt', percent)
    let question = questions[currentQuestion];
    
    document.getElementById('currentQuestion').innerHTML = currentQuestion + 1;
    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestion = selection.slice(-1);
    let idRightAnswer = `answer_${question['right_answer']}`;

    if(selectedQuestion == question['right_answer']) { 
        //document.getElementById(selection).parentNode.classList.add('bg-success');
        document.getElementById(selection).innerHTML += `
            <img class="icon" src="icons/avengers.png">
        `
        audio_success.play();
        rightQuestions++;
    } else {
        //document.getElementById(selection).parentNode.classList.add('bg-danger');
        //document.getElementById(idRightAnswer).parentNode.classList.add('bg-success');
        document.getElementById(selection).innerHTML += `    
        <img class="icon" src="icons/joker.png">
        `
        document.getElementById(idRightAnswer).innerHTML += `     
        <img class="icon" src="icons/avengers.png">
        `
        audio_fail.play();
    }
    document.getElementById('next_button').disabled = false
}

function nextQuestion() {
    currentQuestion++; //siguiente pregunta; de 0 a 1; de 1 a 2;
    showQuestion();
    resetColors();
}

/*function resetColors() {
    document.getElementById('next_button').disabled = true;

    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}*/


function restartGame() {
    document.getElementById('fotoQuizz').src = 'fotos/ironman.jpg'; //cambiar imagen inicial
    rightQuestions = 0;
    currentQuestion = 0;
    init();
    document.getElementById('questionsBody').style = '';
    document.getElementById('endScreen').style = 'display: none';
}