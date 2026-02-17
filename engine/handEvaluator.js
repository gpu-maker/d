const RANK_MAP = {
  "2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,
  "9":9,"10":10,"J":11,"Q":12,"K":13,"A":14
};

function evaluateHand(cards){
  const ranks = cards.map(c=>RANK_MAP[c.value]).sort((a,b)=>a-b);
  const suits = cards.map(c=>c.suit);

  const counts={};
  ranks.forEach(r=>counts[r]=(counts[r]||0)+1);

  const values=Object.values(counts).sort((a,b)=>b-a);

  const flush = suits.some(s=>suits.filter(x=>x===s).length>=5);
  const straight = hasStraight(ranks);

  if(flush && straight && Math.max(...ranks)===14) return "Royal Flush";
  if(flush && straight) return "Straight Flush";
  if(values[0]===4) return "Four of a Kind";
  if(values[0]===3 && values[1]===2) return "Full House";
  if(flush) return "Flush";
  if(straight) return "Straight";
  if(values[0]===3) return "Three of a Kind";
  if(values[0]===2 && values[1]===2) return "Two Pair";
  if(values[0]===2) return "Pair";

  return "High Card";
}

function hasStraight(ranks){
  const unique=[...new Set(ranks)];
  for(let i=0;i<unique.length-4;i++){
    if(unique[i+4]-unique[i]===4) return true;
  }
  if(unique.includes(14)&&unique.includes(2)&&unique.includes(3)&&unique.includes(4)&&unique.includes(5))
    return true;
  return false;
}
