

const canvas = document.getElementById('canvas');
let nodes = [];

function addNode(label){
  const el = document.createElement('div');
  el.className='node'; el.textContent=label;
  el.style.left = Math.round(Math.random()* (canvas.clientWidth-100))+'px';
  el.style.top = Math.round(Math.random()* (canvas.clientHeight-50))+'px';
  canvas.appendChild(el);
  nodes.push({label,left:parseInt(el.style.left),top:parseInt(el.style.top)});
  drag(el);
}

function drag(el){
  let sx=0,sy=0,ox=0,oy=0;
  el.onmousedown = (e)=>{
    sx=e.clientX; sy=e.clientY; ox=parseInt(el.style.left); oy=parseInt(el.style.top);
    document.onmousemove=(ev)=>{
      el.style.left=(ox+(ev.clientX-sx))+'px';
      el.style.top=(oy+(ev.clientY-sy))+'px';
    };
    document.onmouseup=()=>{document.onmousemove=null;document.onmouseup=null;};
  };
}

document.querySelectorAll('[data-add]').forEach(b=>b.onclick=()=>addNode(b.dataset.add));
document.getElementById('clear').onclick=()=>{canvas.innerHTML=''; nodes=[]};

document.getElementById('export').onclick=()=>{
  const data = JSON.stringify(nodes,null,2);
  document.getElementById('out').textContent=data;
  const blob = new Blob([data], {type:'application/json'});
  const a = document.createElement('a');
  a.href=URL.createObjectURL(blob); a.download='cloudgoddess-architecture.json'; a.click();
};

// Preload via ?data=
const params = new URLSearchParams(location.search);
if(params.has('data')){
  try{
    const arr = JSON.parse(decodeURIComponent(params.get('data')));
    if(Array.isArray(arr)){
      arr.forEach(n=>{
        const el = document.createElement('div');
        el.className='node'; el.textContent=n.label||'Node';
        el.style.left = (n.left||10)+'px'; el.style.top=(n.top||10)+'px';
        canvas.appendChild(el); drag(el);
      });
      nodes = arr;
      document.getElementById('out').textContent = JSON.stringify(nodes,null,2);
    }
  }catch(e){}
}
