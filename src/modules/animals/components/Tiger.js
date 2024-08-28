import Animal from "./Animal";

class Tiger extends Animal {
  constructor() {
    super("grrr");
  }

  speak(message) {
    return super.speak(message);
  }
}

export default Tiger;
