import { minorMeanings } from './tarot-meanings.js';
const topicGuide = {
  感情: {focus:'安全感、互相回應與關係界線', evidence:'對方是否持續回應、承諾是否落實，以及你是否能自在表達需要', question:'我想要的是這段關係本身，還是害怕失去關係的感覺？', step:'選一件具體的小事，說清楚你的感受與期待；觀察對方的回應，而不只聽一句承諾。', week:'回顧這週的互動，記錄一次讓你安心與一次讓你不安的時刻，辨認差異。'},
  工作: {focus:'投入、成長、資源與可持續的節奏', evidence:'實際工作內容、可用資源、學習機會與你能接受的生活節奏', question:'如果不考慮別人的評價，我最想改善的工作條件是什麼？', step:'把你在意的工作條件排成前三名，再選一項能查證的資訊，例如實際職責或團隊的工作方式。', week:'用一週試做一個小計畫或訪談一位有經驗的人，對照想像與真實感受。'},
  自我: {focus:'內在需求、自我認同與目前的生命節奏', evidence:'什麼情境讓你有能量、哪些承諾讓你耗竭，以及你正在忽略的需要', question:'我現在追求的方向，是自己的需要，還是習慣滿足他人的期待？', step:'留十分鐘寫下「我想要、我害怕、我可以先做」各三項，選一件最小的行動。', week:'持續記錄一週的精神與感受，找出一項想保留的習慣和一項想調整的負擔。'},
  人際: {focus:'互相尊重、角色分配與清楚的界線', evidence:'付出是否有回應、意見能否被尊重，以及互動後你的真實感受', question:'我願意付出的部分，與我需要保留的部分，界線在哪裡？', step:'用不責備的方式說明一項界線，例如「我願意幫忙到這裡，後面的部分需要你接手」。', week:'觀察界線表達之後，對方是否尊重你的決定；依實際互動調整關係的距離。'}
};
const starNotes = {
  紫微:['整合與帶領','先把零散的需求整理成共同目標，再決定誰負責什麼。','留意是否不自覺把一切責任都放在自己身上。'],
  天機:['思考與調整','用兩個可比較的方案代替無限延伸的可能，試行後再修正。','反覆推演可能讓你很難停下來，為思考設定一個期限。'],
  太陽:['表達與支持','清楚表達你的立場，同時確認別人真正需要的支持。','關心別人時，也要留意自己是否還有餘力。'],
  武曲:['務實與執行','把期待轉成可檢查的安排，透過穩定行動建立信任。','效率與成果之外，也值得為感受留一點空間。'],
  天同:['和諧與感受','先找回舒服的節奏，讓協調建立在真實需求上。','維持和氣不必以壓下自己的需求為代價。'],
  廉貞:['原則與探索','釐清你願意接受的條件，再探索改變的可能。','原則可以保護你，但也要區分底線與暫時的偏好。'],
  天府:['穩定與資源','盤點已經擁有的支持，把下一步建立在可持續的基礎上。','安穩與停滯有時很接近，檢查你留下來的理由。'],
  太陰:['細膩與觀察','給自己時間理解細節，把感受轉成清楚可溝通的需要。','不必獨自猜測所有細節，重要的疑惑可以直接確認。'],
  貪狼:['好奇與連結','廣泛探索之後，選出真正符合你價值的連結與機會。','新鮮感不一定代表適合，留意你能否長期投入。'],
  巨門:['分析與溝通','把問題說得具體，用可核對的事實支持你的觀點。','分析的目的是理解，而不是證明誰一定是對的。'],
  天相:['協調與支持','釐清彼此角色，讓照顧與責任有公平的分配。','在替別人協調之前，也要讓自己的立場被看見。'],
  天梁:['關懷與責任','提供有界線的支持，讓雙方都保有處理事情的能力。','幫忙與代替別人承擔之間，需要有清楚的界線。'],
  七殺:['決斷與突破','辨認最核心的問題，選一項有準備的突破來試行。','勇於決定的同時，也要留下評估後果與回頭調整的空間。'],
  破軍:['變革與開創','先找出舊方法哪裡失效，再保留可用的基礎逐步更新。','改變不必一次推翻全部，先設計一個能驗證的新做法。']
};
const palaceNames={感情:'夫妻',工作:'官祿',自我:'命宮',人際:'僕役'};
const positions=['當下狀態','需要留意','下一步方向'];
const minorRanks=['一','二','三','四','五','六','七','八','九','十','侍者','騎士','皇后','國王'];
const rankDepth=['新的起點需要一個小而明確的入口，不必在開始前就安排好所有結果。','兩個需求正在拉扯，先比較你願意承擔的代價，再決定優先順序。','現在適合尋找回應、合作或共同建構，避免只從自己的角度理解事情。','穩定能讓你休息，也可能讓你錯過變化；確認你是主動停留，還是慣性停留。','差異與落差值得被看見。先辨認衝突的來源，再分別處理需求與情緒。','重新看見支持、記憶或互惠的力量，但也要確認過去的模式是否仍適合現在。','投入之後需要評估，先檢查你收到的實際回應，再決定是否繼續。','重複的行動正在累積影響；選擇一個能維持的節奏，比一次做到很多更重要。','你已走到一個需要整合經驗的階段，既要看見成果，也要承認尚未滿足的需要。','當承諾已經滿載，適合重新分配、完成或交接，為下一段留出空間。','保持學習與好奇，容許自己還不知道答案，以提問代替過早的結論。','行動力正在形成；在推進之前確認方向與速度，避免只被一時情緒帶著走。','成熟的照顧包含對自己與他人的理解，先穩住內在，再決定如何回應外界。','把經驗轉成穩定的判斷與責任，同時保持願意聽取不同意見的彈性。'];

function detectIntent(question,topic){
  if(/復合|挽回|前任/.test(question))return {label:'關係修復',lead:'你提到的關係修復，關鍵不只在是否重新聯絡，而是造成分開的問題是否能被具體處理。',check:'若再次互動，彼此是否願意承認問題、調整做法，並尊重對方現在的意願？',exercise:'寫出「我希望重新開始的理由」與「必須先改善的問題」各三項，避免只被想念推動。'};
  if(/轉職|換工作|離職|求職|面試/.test(question))return {label:'職涯轉換',lead:'你正在思考工作上的轉換。與其急著判斷離開或留下，更值得先分開看「想離開的原因」與「想前往的條件」。',check:'新方向是否能改善現在最在意的問題？有哪些資訊已確認，哪些仍只是期待？',exercise:'並列現況與新選擇的工作內容、支持資源、生活節奏與可承擔成本，再找出最需要查證的一項。'};
  if(/選擇|決定|該不該|要不要|哪一|是否/.test(question))return {label:'選擇與取捨',lead:'你的問題牽涉一個選擇。這次解讀可以協助看見需求與阻力，但選擇仍需以可核對的資訊與你願意承擔的代價為基礎。',check:'如果兩個選項都不完美，哪一個更符合你的核心需要？哪種代價是你現在可以接受的？',exercise:'列出兩個選項各自帶來的收穫、成本與可逆程度，再設定一個小範圍的試行方式。'};
  if(/他.*想|她.*想|喜歡我|愛我|對方|心意/.test(question)&&topic==='感情')return {label:'理解對方的心意',lead:'你的問題觸及對方的想法。牌面無法讀取他人的內心，可以先把注意力放在你觀察到的行為與自己需要的互動。',check:'對方的聯絡、時間投入與行動是否一致？你是否有空間直接而不施壓地確認期待？',exercise:'把你已觀察到的三件事實與三項猜測分開，再選一個可以透過對話確認的問題。'};
  if(/未來|何時|什麼時候|會不會|結果|發展/.test(question))return {label:'未來的可能',lead:'你想理解接下來的發展。星曜與牌義適合提供反思角度，無法保證時間或結果；更有用的是找出現在能影響走向的因素。',check:'什麼行動能增加你想要的可能？如果結果不同，你希望為自己保留什麼退路？',exercise:'寫下理想、可接受與不希望的三種情境，各準備一項能支持自己的安排。'};
  return {label:'釐清此刻的困惑',lead:`這次探索圍繞「${topicGuide[topic].focus}」。先讓問題從一個模糊的擔心，變成可以理解與觀察的需要。`,check:topicGuide[topic].question,exercise:'寫下這件事已發生的事實、你的感受與你希望改變的部分；讓三者各自有一個位置。'};
}
function findPalace(chart,name){return chart.palaces.find(p=>p.name===name)||chart.palaces.find(p=>p.name.includes(name));}
function palaceReading(chart,name,role){const p=findPalace(chart,name);if(!p)return null;const stars=p.majorStars.filter(s=>s.type==='major');const subject=p.name==='命宮'?'命宮':p.name+'宮';let paragraphs=[];
  if(stars.length){paragraphs.push(`${subject}有${stars.map(s=>s.name).join('、')}。這一部分從「${role}」的角度提供傳統星曜象徵的反思線索，並不是對性格或事件的定論。`);stars.forEach(s=>{const n=starNotes[s.name];if(n)paragraphs.push(`${s.name}的象徵重點是${n[0]}。可以嘗試：${n[1]}同時，${n[2]}`)});const transformed=stars.filter(s=>s.mutagen);if(transformed.length){const interpretations={祿:'可留意支持、資源與吸引力，但仍需確認現實條件。',權:'可反思主動性與掌握感，也留意責任或控制帶來的負擔。',科:'可留意表達、學習與被理解的方式，不只追求外在評價。',忌:'可把反覆牽掛的地方當作整理需要的入口，不等於壞事一定發生。'};paragraphs.push(transformed.map(s=>`${s.name}化${s.mutagen}：${interpretations[s.mutagen]||'需與完整命盤一起參照。'}`).join(''))}}
  else{paragraphs.push(`${subject}無主星。無主星不代表這個領域缺乏能力或機會，傳統判讀需借對宮並參照整體星系。`);const index=chart.palaces.indexOf(p),opposite=chart.palaces[(index+6)%12],otherStars=opposite.majorStars.filter(s=>s.type==='major');paragraphs.push(`對宮為${opposite.name==='命宮'?'命宮':opposite.name+'宮'}${otherStars.length?'，主星是'+otherStars.map(s=>s.name).join('、'):'，也無主星'}。此處列出供你對照，未把借星當成本宮的確定性格，完整判讀仍需進一步合看。`)}
  return {title:`${subject}｜${role}`,label:stars.map(s=>s.name).join(' · ')||'無主星 · 參照對宮',paragraphs};
}
export function buildInterpretation(r){const guide=topicGuide[r.topic]||topicGuide.自我,intent=detectIntent(r.question,r.topic);const cards=(r.cards||[]).map((x,i)=>{const name=x.card[0],meaning=x.card[x.reversed?4:2],advice=x.card[x.reversed?5:3];const suit=['權杖','聖杯','寶劍','錢幣'].find(s=>name.startsWith(s)),rank=suit?minorRanks.indexOf(name.slice(suit.length)):-1;const lens=i===0?'放在「當下狀態」的位置，這張牌邀請你先辨認：你目前的感受與做法，是否符合真正的需要。':i===1?'放在「需要留意」的位置，這張牌適合用來檢查盲點：哪些假設尚未證實，哪些需求還沒被清楚表達。':'放在「下一步方向」的位置，這張牌提供可嘗試的態度與行動，並不表示結果已經確定。';const paragraphs=[`${name}${x.reversed?'逆位':'正位'}的核心提示是「${meaning}」。${advice}`,rank>=0?minorMeanings[name][4]:`這張大阿爾克那牌以象徵性的生命課題提醒你：${meaning}可以作為整理問題的視角；你可以接受有共鳴的部分，也可以保留不同的理解。`,lens,`回到${r.topic}主題，適合對照${guide.evidence}。${i===0?'先看實際發生了什麼，避免用一時的感受概括整段經驗。':i===1?'特別留意你目前忽略的資訊，讓疑問有機會被確認。':'選一個能在日常中驗證的小步驟，完成後再觀察自己的感受是否改變。'}`];if(x.reversed)paragraphs.push('逆位在這裡作為能量受阻、內化或失衡的反思方式，不代表必然有壞事。可以問自己：這個課題是需要放慢、補足，還是換一種方式實踐？');return {title:`${String(i+1).padStart(2,'0')} · ${positions[i]}`,label:`${name} · ${x.reversed?'逆位':'正位'}`,paragraphs,prompt:[guide.question,intent.check,'我願意從這張牌的提醒中，選哪一個最小的行動？'][i]}});
  const palaceOrder=r.chart?[...new Set([palaceNames[r.topic]||'命宮','命宮','福德'])]:[];const palaces=palaceOrder.map(n=>palaceReading(r.chart,n,n===palaceNames[r.topic]?'這次問題的主題':n==='命宮'?'面對事情的方式':'內在感受與休息')).filter(Boolean);
  const overview=[intent.lead,`你問的是：「${r.question}」；先檢查${guide.evidence}，把可確認的現況與尚未確定的想像分開，會更容易找到能做的下一步。`];if(cards.length)overview.push(`三張牌依序是${cards.map(c=>c.label).join('、')}。閱讀順序是「先理解狀態、再看盲點、最後試行方向」；它們提供三個互補視角，不是對事件的預言。`);if(palaces.length)overview.push(`命盤以${palaces.map(p=>p.title.split('｜')[0]).join('、')}等角度對照你的提問，分別關注主題、應對方式與內在感受。這些提示以本命星曜為基礎，未推算流年或事件發生時間。`);
  const synthesis=r.mode==='combined'?[`紫微這一側以${palaces[0]?.label||'主題宮位'}為入口，提醒你回看較持續的應對方式；塔羅這一側以「${cards[0]?.label||''}」映照當下，再以「${cards[2]?.label||''}」作為下一步的反思。兩者的時間視角不同，可以一起看，而不必互相證明。`,`如果命盤的描述與你的經驗相符，思考這種習慣如何影響現在的問題；如果牌面的提醒帶來新視角，試著用一個小行動確認是否對你有幫助。當兩者不一致時，以實際經驗與可核對的資訊為準。`,`${guide.focus}是這次合參的主軸。先確認自己真正想改善的部分，再觀察行動是否讓這個需要被更好地照顧。`]:[];
  return {intent:intent.label,overview,cards,palaces,synthesis,plan:[{when:'今天 · 先釐清',text:intent.exercise},{when:'未來 3 天 · 做一小步',text:guide.step},{when:'一週後 · 回看變化',text:guide.week}],questions:[guide.question,intent.check,'完成這個小行動後，哪些事實更清楚？我需要保留、調整或停止什麼？']};
}
