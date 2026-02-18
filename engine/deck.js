const SUITS=["♠","♥","♦","♣"];
const VALUES=["2","3","4","5","6","7","8","9","10","J","Q","K","A"];

class Deck{
  constructor(){this.reset();}

  reset(){
    this.cards=[];
    for(let s of SUITS)
      for(let v of VALUES)
        this.cards.push({suit:s,value:v});
    this.shuffle();
  }

  shuffle(){
    for(let i=this.cards.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [this.cards[i],this.cards[j]]=[this.cards[j],this.cards[i]];
    }
  }

  deal(){return this.cards.pop();}
}
