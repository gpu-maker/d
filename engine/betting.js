class Player{
  constructor(name,chips=1000){
    this.name=name;
    this.chips=chips;
    this.bet=0;
    this.hand=[];
    this.folded=false;
  }

  placeBet(amount){
    amount=Math.min(amount,this.chips);
    this.chips-=amount;
    this.bet+=amount;
    return amount;
  }

  reset(){
    this.bet=0;
    this.hand=[];
    this.folded=false;
  }
}

class BettingRound{
  constructor(players){
    this.players=players;
    this.pot=0;
    this.currentBet=0;
  }

  bet(player,amount){
    const paid=player.placeBet(amount);
    this.pot+=paid;
    this.currentBet=Math.max(this.currentBet,player.bet);
  }

  call(player){
    const diff=this.currentBet-player.bet;
    this.bet(player,diff);
  }
}
