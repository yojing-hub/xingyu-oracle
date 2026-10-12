const frame = content => `<svg viewBox="0 0 180 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="line-art"><g fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="162" height="222" rx="78"/><rect x="16" y="16" width="148" height="208" rx="72" opacity=".35"/><path d="M90 21v12m-6-6h12M32 120H21m11-6v12M148 120h11m-11-6v12M90 219v-12m-6 6h12" opacity=".55"/>${content}<path d="M45 186q45-22 90 0M37 193q53-22 106 0M52 200q38-13 76 0" opacity=".45"/></g></svg>`;
const star=(x,y,s=9)=>`<path d="M${x} ${y-s}Q${x} ${y} ${x+s} ${y}Q${x} ${y} ${x} ${y+s}Q${x} ${y} ${x-s} ${y}Q${x} ${y} ${x} ${y-s}Z"/>`;
const moon='<path d="M104 63a34 34 0 1 0 0 63 30 30 0 0 1 0-63Z"/><circle cx="90" cy="95" r="49" stroke-dasharray="1 7" opacity=".5"/>';
const motifs={
  愚者:'<path d="m44 162 22-31 22 11 23-29 28 49M44 162h98M69 131l15-35 17-11m-16 14-20-8m22 7 15 18m-16-2-2 27m2-14 20 12"/><circle cx="92" cy="78" r="7"/>',
  魔術師:'<path d="M41 145h98M54 145v27m73-27v27M70 137V90m40 47V90M70 94l20 12 20-12M90 106v30M62 68c0-14 18-14 28 0 10 14 28 14 28 0s-18-14-28 0-28 14-28 0Z"/>',
  女祭司:moon+'<path d="M38 73v92m104-92v92M31 76h14m90 0h14M72 156q18-24 36 0"/>',
  皇后:'<path d="M59 133q31-36 62 0v35H59ZM63 96l-4-20 20 9 11-19 11 19 20-9-4 20ZM61 106h58M90 113v46m-11-21h22"/><path d="m42 171 4-26 12 12m80 14-4-26-12 12"/>',
  皇帝:'<path d="M57 166V98h66v68M50 166h80M68 96l-4-25 19 8 7-20 7 20 19-8-4 25M90 119v31m-12-18h24M64 159h52"/>',
  教皇:'<path d="M90 65v74m-16-48h32m-26 12h20M65 160l25-17 25 17M50 163l15-17m50 0 15 17M65 69v56m50-56v56"/>',
  戀人:'<path d="M90 135c-45-29-35-62-12-49l12 10 12-10c23-13 33 20-12 49ZM55 152q35-16 70 0M66 163q24-13 48 0"/>',
  戰車:'<path d="M45 115h90l-11 39H57ZM57 113l7-24h52l7 24M78 90V76h24v14M90 54v16"/><circle cx="66" cy="162" r="8"/><circle cx="114" cy="162" r="8"/>',
  力量:'<path d="M54 105c0-29 72-29 72 0v26c0 41-72 41-72 0ZM61 117l15 7m43-7-15 7M83 137h14l-7 8ZM77 152q13 12 26 0"/><circle cx="90" cy="120" r="48" stroke-dasharray="2 5"/>',
  隱者:'<path d="m90 85-36 87h72ZM90 84a13 13 0 1 0-1 0M111 118h28v35h-28ZM125 107v12M133 155v24"/>'+star(125,136,9),
  命運之輪:'<circle cx="90" cy="119" r="48"/><circle cx="90" cy="119" r="34"/><circle cx="90" cy="119" r="9"/><path d="M90 71v39m0 18v39M42 119h39m18 0h39M56 85l27 27m14 14 27 27M124 85l-27 27m-14 14-27 27"/>',
  正義:'<path d="M90 65v107M49 94h82M65 94l-17 39h34ZM115 94l-17 39h34ZM48 133q17 18 34 0m16 0q17 18 34 0M69 172h42"/>',
  倒吊人:'<path d="M48 71h84M90 71v27l-17 23 20 25m-3-48 22 22-16 10m-3 16v14m0-14-24-5m24 5 25-5"/><circle cx="93" cy="171" r="10"/><circle cx="93" cy="171" r="20" opacity=".35"/>',
  死神:'<path d="M46 168q44-80 88 0M90 159V77m0 36q-37 0-28-26 26 0 28 26Zm0 21q37 0 28-26-26 0-28 26ZM74 71q16-27 32 0"/><circle cx="90" cy="67" r="18" opacity=".4"/>',
  節制:'<path d="M47 93h31l-5 30H52ZM102 134h31l-5 30h-21ZM64 124q0 33 40 23M51 69q39-15 78 0"/><circle cx="90" cy="110" r="55" stroke-dasharray="2 8"/>',
  惡魔:'<path d="m64 94-5-31 23 23h16l23-23-5 31M61 94q29-18 58 0v34q-29 35-58 0ZM73 113l8 5m26-5-8 5M81 139h18M65 149l-19 22m69-22 19 22M52 163h76"/>',
  高塔:'<path d="M64 170 68 93h46l5 77ZM64 90V75h11v8h10V75h12v8h10V75h11v15M83 103v18h16v-18ZM92 127l-9 22h15l-9 18M123 57l-15 14 11 1-13 18"/>',
  星星:star(90,101,33)+star(42,81,8)+star(137,79,9)+star(51,141,7)+star(130,144,6)+'<path d="M42 167q20-12 39 0t38 0t19 0M52 176q20-12 39 0t38 0"/>',
  月亮:moon+'<path d="m42 167 6-27h11l6 27m50 0 6-27h11l6 27M78 171q12-28 24 0"/>',
  太陽:'<circle cx="90" cy="109" r="29"/><circle cx="90" cy="109" r="23" opacity=".4"/><path d="M90 62v12m0 70v12M43 109h12m70 0h12M57 76l8 8m50 50 8 8M123 76l-8 8m-50 50-8 8"/>',
  審判:'<path d="M53 94q37-44 74 0M67 112l48-18v35l-48-17ZM117 100l18-9m-18 31 18 9M61 154q29-24 58 0M74 162v14m32-14v14"/>',
  世界:'<ellipse cx="90" cy="120" rx="42" ry="59"/><ellipse cx="90" cy="120" rx="48" ry="65" stroke-dasharray="2 6"/><path d="M90 93v44m-22-35 22 15 22-15m-22 35-14 23m14-23 14 23"/><circle cx="90" cy="82" r="8"/>'
};
const rankNames=['一','二','三','四','五','六','七','八','九','十','侍者','騎士','皇后','國王'];
export function cardArt(name){let body=motifs[name];if(name==='寶劍三')body='<path d="M90 142c-48-31-35-66-12-50l12 9 12-9c23-16 36 19-12 50ZM90 63v98M55 75l52 77m18-77-52 77M82 76h16M50 86l15-10m50 0 15 10"/>';if(!body){const suit=['權杖','聖杯','寶劍','錢幣'].find(s=>name.startsWith(s))||'權杖';const rank=rankNames.indexOf(name.slice(suit.length))+1;body=suit==='權杖'?'<path d="M90 157V77m0 17q-29 0-23-21 20 1 23 21Zm0 30q29 0 23-21-20 1-23 21ZM73 157h34"/>':suit==='聖杯'?'<path d="M63 78h54v22q0 42-27 42t-27-42ZM90 142v24m-18 0h36M63 89H49q-3 32 20 32m48-32h14q3 32-20 32"/>':suit==='寶劍'?'<path d="m90 60-10 65h20ZM63 132h54M90 132v34m-9 0h18M69 95l-12-12m54 12 12-12"/>':'<circle cx="90" cy="116" r="40"/><circle cx="90" cy="116" r="34"/>'+star(90,116,26);if(rank>=1&&rank<=10)body+=Array.from({length:rank},(_,i)=>{const a=(i/rank)*Math.PI*2;return `<circle cx="${90+59*Math.cos(a)}" cy="${117+66*Math.sin(a)}" r="1.8" fill="currentColor" stroke="none"/>`}).join('');else body+='<path d="m68 60-3-14 16 5 9-12 9 12 16-5-3 14Z"/>'}return frame(body)}
export function ritualArt(){return `<svg class="ritual-art" viewBox="0 0 700 110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width=".6" opacity=".65"><path d="M35 54h170m48 0h75m45 0h75m48 0h170" stroke-dasharray="2 6"/><circle cx="225" cy="54" r="20"/><circle cx="350" cy="54" r="27"/><circle cx="350" cy="54" r="21"/><circle cx="475" cy="54" r="20"/>${star(225,54,10)+star(350,54,16)+star(475,54,10)}<path d="M325 89q25 15 50 0M300 22q50-20 100 0"/></g></svg>`}
