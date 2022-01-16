function Siritori() {
  this.words = [];
  this.game_over = false;
  this.play = function (newWord) {
      this.words.push(newWord)
    for (let i = 0; i < this.words.length - 1; i++) {
      this.game_over = !(
        this.words[i][this.words[i].length - 1] === this.words[i + 1][0]
      );
      if (this.game_over === true) {
        return "game is over";
      }
    }
    let uniques = [];
    let result ;
    this.words.forEach((word) => {
      if (uniques.indexOf(word) === -1) {
        uniques.push(word);
      }
    });
    this.game_over = uniques.length === this.words.length;
    if (this.game_over === true) {
      result =  this.words;
    } else {
      result = `game Over`;
    }
    return result;
  };
}
this.restart = function () {
  return true;
};

const myplayer = new Siritori();
myplayer.play(`svdsds`)
myplayer.play(`ssssvdsds`)
console.log(myplayer.play(`ddddsds`));
