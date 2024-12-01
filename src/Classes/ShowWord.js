import GetWord from './GetWord.js';

class ShowWord {
  constructor() {
    this.knowBtn = document.querySelector('.know');
    this.unKnowBtn = document.querySelector('.dont-know');
    this.textWord = document.querySelector('.word');
    this.currentWord = null;
    
  }

  displayEngWord() {
    const randomWord = GetWord.getRandomWord();
    this.currentWord = randomWord;
    this.textWord.textContent = this.currentWord.formatTextEng();
    this.textWord.addEventListener('click', () => {
      return (this.textWord.textContent = this.currentWord.formatTextRus());
    });
  }

  displayRusWord() {
    const randomWord = GetWord.getRandomWord();
    this.currentWord = randomWord;
    this.textWord.textContent = this.currentWord.formatTextEng();
    this.textWord.addEventListener('click', () => {
      return (this.textWord.textContent = this.currentWord.formatTextEng());
    });
  }

  handlingUserSelection() {
    this.knowBtn.addEventListener('click', this.displayEngWord.bind(this));

    this.unKnowBtn.addEventListener('click', () => {
      GetWord.addUnKnownWord(this.currentWord);
      this.displayEngWord();
    });
  }

  init() {
    window.addEventListener('load', this.displayEngWord.bind(this));
		this.handlingUserSelection();
  }
}

export default ShowWord;
