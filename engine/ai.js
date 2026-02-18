function aiDecision(aiPlayer,community){
  if(aiPlayer.folded) return "fold";

  const handStrength=evaluateHand([...aiPlayer.hand,...community]);

  const strengthScore={
    "High Card":1,"Pair":2,"Two Pair":3,"Three of a Kind":4,
    "Straight":5,"Flush":6,"Full House":7,"Four of a Kind":8,
    "Straight Flush":9,"Royal Flush":10
  };

  const score=strengthScore[handStrength];

  if(score<=1&&Math.random()<0.4) return "fold";
  if(score>=5) return "raise";
  return "call";
}
