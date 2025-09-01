export default function Narration({ text }) {
  const speak = (lang) => {
    if (window.responsiveVoice) {
      let voice;
      switch (lang) {
        case "en":
          voice = "UK English Female";
          break;
        case "hi":
          voice = "Hindi Female";
          break;
        case "ne":
          voice = "Nepali Female"; 
          break;
        default:
          voice = "UK English Female";
      }
      window.responsiveVoice.speak(text, voice);
    } else {
      alert("Voice engine not loaded yet. Try again in a second!");
    }
  };

  return (
    <div className="flex gap-2 mt-3">
      <button
        onClick={() => speak("en")}
        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        🔊 English
      </button>
      <button
        onClick={() => speak("hi")}
        className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
      >
        🔊 Hindi
      </button>
      <button
        onClick={() => speak("ne")}
        className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
      >
        🔊 Nepali
      </button>
    </div>
  );
}
