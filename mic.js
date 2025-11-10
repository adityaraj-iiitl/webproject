const micBtn = document.getElementById("mic-btn");
const searchInput = document.querySelector(".navbar-search input");
const micIcon = micBtn.querySelector("i");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  const recognition = new SpeechRecognition();
  recognition.continuous = false;       
  recognition.interimResults = false;   
  recognition.lang = "en-US";           

  let isListening = false;

 
  micBtn.addEventListener("click", () => {
    if (!isListening) {
      recognition.start(); 
    } else {
      recognition.stop();  
    }
  });

  recognition.addEventListener("start", () => {
    isListening = true;
    micBtn.style.backgroundColor = "red"; 
    micIcon.className = "fa-solid fa-microphone fa-beat";
  });

  recognition.addEventListener("end", () => {
    isListening = false;
    micBtn.style.backgroundColor = "#1E3A5F"; 
    micIcon.className = "fa-solid fa-microphone";
  });

  recognition.addEventListener("result", (event) => {
    const transcript = event.results[0][0].transcript;
    searchInput.value = transcript;
  });

} else {
  console.warn("SpeechRecognition not supported in this browser.");
  micBtn.disabled = true;
  micBtn.title = "Speech recognition not supported in your browser";
}
