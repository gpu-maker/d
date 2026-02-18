startGame();
render();

function playerCheck(){
  nextStage();
}

function playerCall(){
  game.betting.call(game.players[0]);
  aiTurn();
  nextStage();
}

function betAmount(amount){
  game.betting.bet(game.players[0],amount);
  aiTurn();
  nextStage();
}

function playerFold(){
  alert("You folded");
  startGame();
  render();
}

function aiTurn(){
  const ai=game.players[1];
  const decision=aiDecision(ai,game.community,game.betting.currentBet);

  if(decision==="raise") game.betting.bet(ai,50);
  else if(decision==="call") game.betting.call(ai);
  else ai.folded=true;
}

function nextStage(){
  if(game.stage==="preflop"){
    game.community.push(game.deck.deal(),game.deck.deal(),game.deck.deal());
    game.stage="flop";
  }
  else if(game.stage==="flop"){
    game.community.push(game.deck.deal());
    game.stage="turn";
  }
  else if(game.stage==="turn"){
    game.community.push(game.deck.deal());
    game.stage="river";
  }
  else{
    showdown();
    return;
  }

  render();
}

function showdown(){
  const player=game.players[0];
  const ai=game.players[1];

  const playerHand=evaluateHand([...player.hand,...game.community]);
  const aiHand=evaluateHand([...ai.hand,...game.community]);

  alert(`You: ${playerHand}\nAI: ${aiHand}`);

  startGame();
  render();
}

function render(){
  renderCards("playerCards",game.players[0].hand);
  renderCards("aiCards",[{},{}]);
  renderCards("community",game.community);

  renderChips("pot", game.betting.pot);
  renderChips("playerChips", game.players[0].chips);
  renderChips("aiChips", game.players[1].chips);
}

function renderCards(id,cards){
  const el=document.getElementById(id);
  el.innerHTML="";

  cards.forEach(c=>{
    const d=document.createElement("div");
    d.className="card";
    d.textContent=c.value?c.value+c.suit:"🂠";
    el.appendChild(d);
  });
}
