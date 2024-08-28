class Animal {
  constructor(sound) {
    this.sound = sound;
  }

  speak(message) {
    const messageWords = message?.split(" ");
    const spokenWords = messageWords?.map((word) => `${word} ${this.sound}`);
    return spokenWords.join(" ").trim();
  }
}

export default Animal;
