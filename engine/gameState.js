const game={
  deck:null,
  community:[],
  players:[],
  betting:null,
  stage:"preflop"
};

function startGame(){
  game.deck=new Deck();
  game.community=[];
  game.stage="preflop";

  game.players=[
    new Player("You"),
    new Player("AI")
  ];

  game.players.forEach(p=>{
    p.reset();
    p.hand=[game.deck.deal(),game.deck.deal()];
  });

  game.betting=new BettingRound(game.players);
}
