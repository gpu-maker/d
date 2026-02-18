const CHIP_TYPES=[
  {value:1,color:"#ffffff",border:"#ddd"},
  {value:5,color:"#e53935",border:"#b71c1c"},
  {value:25,color:"#2e7d32",border:"#1b5e20"},
  {value:100,color:"#212121",border:"#000"}
];

function getChipBreakdown(amount){
  const result=[];
  for(let i=CHIP_TYPES.length-1;i>=0;i--){
    const chip=CHIP_TYPES[i];
    const count=Math.floor(amount/chip.value);
    if(count>0){
      result.push({chip,count});
      amount%=chip.value;
    }
  }
  return result;
}

function renderChips(containerId,amount){
  const container=document.getElementById(containerId);
  container.innerHTML="";

  const breakdown=getChipBreakdown(amount);

  breakdown.forEach(({chip,count})=>{
    for(let i=0;i<Math.min(count,10);i++){
      const c=document.createElement("div");
      c.className="chip";
      c.style.background=chip.color;
      c.style.borderColor=chip.border;
      container.appendChild(c);
    }
  });

  const label=document.createElement("div");
  label.textContent="$"+amount;
  container.appendChild(label);
}
