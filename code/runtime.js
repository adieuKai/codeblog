var now=new Date;
function createtime()
{
  now.setTime(now.getTime()+1e3);
  var e=new Date("18/02/2023 00:00:00 00:00:00"),
  t=Math.trunc(234e8+(now-e)/1e3*17),a=(t/1496e5).toFixed(6),
  o=new Date("19/02/2023 00:00:00"),n=(now-o)/1e3/60/60/24,
  r=Math.floor(n),i=(now-o)/1e3/60/60-24*r,s=Math.floor(i);
  1==String(s).length&&(s="0"+s);
  var d=(now-o)/1e3/60-1440*r-60*s,l=Math.floor(d);
  1==String(l).length&&(l="0"+l);
  var g=(now-o)/1e3-86400*r-3600*s-60*l,b=Math.round(g);
  1==String(b).length&&(b="0"+b);let c="";
c=s<17&&s>=9?`<img class='boardsign' src='https://img.shields.io/badge/河边小院-上班摸鱼中-6adea8?style=social&logo=cakephp' title='努力赚钱ing~'>
<br> <div style="font-size:13px;font-weight:bold">本站已经运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i></div>`:
`<img class='boardsign' src='https://img.shields.io/badge/河边小院-下班休息啦-6adea8?style=social&logo=cakephp' title='下班了就该好好休息~'>
<br> <div style="font-size:13px;font-weight:bold">本站已经运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> </div>`,document.getElementById("workboard")&&(document.getElementById("workboard").innerHTML=c)}setInterval((()=>{createtime()}),1e3);