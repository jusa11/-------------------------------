import words from '../data/words.js';
import Word from './Word.js';
import MathRandom from './utils/MathRandom.js';

class GetWord {
  static unKnownWords = [];

  static getRandomWord() {
    const randomIndex = MathRandom.generateRandomNum(words.length);
    const { eng, rus, id } = words[randomIndex];

    if (this.unKnownWords.includes(id)) {
      return GetWord.getRandomWord();
    }
    return new Word(eng, rus, id);
  }

  static addUnKnownWord(word) {
    return this.unKnownWords.push(word.id);
  }
}

export default GetWord;
