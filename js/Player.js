export default class Player {
    constructor(name, symbol) {
      this.name = name;
      this.symbol = symbol;
      this.points = 0;
      this.level = 1;
    }
  
    addPoints() {
      this.points += 1;
      if (this.points == 10 || this.point == 20 || this.point == 30) {
        this.level += 1;
      } 
    }
}