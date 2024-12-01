class Word {
  constructor(eng, rus, id) {
    this.eng = eng;
    this.rus = rus;
    this.id = id;
  }

  formatTextEng() {
    return this.eng;
  }

  formatTextRus() {
    return this.rus;
  }
}

export default Word;
