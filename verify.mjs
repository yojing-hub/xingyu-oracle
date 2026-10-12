import assert from 'node:assert/strict';
import {validateBirthDate,daysInMonth} from './date-utils.js';
import {makeMinorCards,minorMeanings} from './tarot-meanings.js';
import {buildInterpretation} from './reading-engine.js';
import {cardArt} from './art.js';
import {createRequire} from 'node:module';
const {astro}=createRequire(import.meta.url)('iztro');
const today=new Date(2026,9,8);
assert.equal(daysInMonth(2000,2),29);assert.equal(daysInMonth(1900,2),28);
assert.equal(validateBirthDate(2000,2,29,today).date,'2000-02-29');
assert.ok(validateBirthDate(1999,2,29,today).error);assert.ok(validateBirthDate(2026,10,9,today).error);
assert.equal(validateBirthDate(89+1911,2,29,today).date,'2000-02-29');
assert.equal(makeMinorCards().length,56);assert.equal(new Set(makeMinorCards().map(c=>c[0])).size,56);
assert.match(minorMeanings['寶劍三'][0],/失落/);assert.match(minorMeanings['錢幣三'][0],/合作/);
for(const card of makeMinorCards()){
  for(const reversed of [false,true]){
    const report=buildInterpretation({topic:'工作',mode:'tarot',question:'我該不該轉職？',cards:[{card,reversed}],chart:null});
    assert.equal(report.intent,'職涯轉換');assert.ok(report.cards[0].paragraphs.some(p=>p.includes(minorMeanings[card[0]][4])));
    assert.ok(report.cards[0].paragraphs.length>=4);assert.ok(!JSON.stringify(report).includes('undefined'));
    assert.match(cardArt(card[0]),/<svg/);assert.ok(!cardArt(card[0]).includes('NaN'));
  }
}
const chart=astro.bySolar('2000-02-29',12,'女',true,'zh-TW');
const report=buildInterpretation({topic:'工作',mode:'combined',question:'我該不該轉職？',cards:makeMinorCards().slice(0,3).map(card=>({card,reversed:false})),chart});
assert.equal(chart.palaces.length,12);assert.equal(report.palaces.length,3);assert.equal(report.synthesis.length,3);assert.equal(report.plan.length,3);
assert.ok(report.palaces.every(p=>p.paragraphs.length>=2));assert.equal(report.cards.length,3);assert.ok(report.overview.length>=3);
const self=buildInterpretation({topic:'自我',mode:'ziwei',question:'如何找回方向？',cards:[],chart});assert.equal(self.palaces.length,2);
const know=buildInterpretation({topic:'感情',mode:'tarot',question:'他喜歡我嗎？',cards:[],chart:null});assert.equal(know.intent,'理解對方的心意');
console.log('已通過：日期合法性／閏日／民國換算、56 張小牌正逆位解讀、合參與無主星宮位。');


