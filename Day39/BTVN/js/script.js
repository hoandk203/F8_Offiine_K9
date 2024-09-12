import { relocate } from "./relocate.js";

let btn = document.querySelector(".btn");
let message2 = document.querySelector(".message2");
let message1 = document.querySelector(".message1");
let text = "";

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
var grammar = "#JSGF V1.0;";

speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = "vi-VN";
recognition.interimResults = false;

btn.addEventListener("click", () => {
    recognition.start();
    message1.innerText = "Bạn muốn nói gì?";
    message2.innerText = "";
});

recognition.onresult = (event) => {
    let lastResult = event.results.length - 1;
    text = event.results[lastResult][0].transcript;
    message2.innerText = `Input: ${text.toLowerCase()}`;
    if (relocate(text.toLowerCase())) {
        message1.innerText = "Yêu cầu được thực hiện";
        relocate(text.toLowerCase());
    } else {
        message1.innerText = "Không thực hiện được yêu cầu";
    }
};
recognition.onspeechend = () => {
    recognition.stop();
};
