import Animal from "./Animal";

class Lion extends Animal {
  constructor() {
    super("roar");
  }

  speak(message) {
    return super.speak(message);
  }
};

export default Lion;
