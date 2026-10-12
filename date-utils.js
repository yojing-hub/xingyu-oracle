export function daysInMonth(year,month){return new Date(year,month,0).getDate()}
export function validateBirthDate(year,month,day,today=new Date()){
  if(!Number.isInteger(year)||year<1900||year>today.getFullYear())return {error:'請輸入 1900 年至今年之間的出生年份。'};
  if(!Number.isInteger(month)||month<1||month>12||!Number.isInteger(day)||day<1||day>daysInMonth(year,month))return {error:'請選擇有效的出生月份與日期。'};
  const birth=new Date(year,month-1,day),limit=new Date(today.getFullYear(),today.getMonth(),today.getDate());
  if(birth>limit)return {error:'出生日期不能晚於今天，請再確認年月日。'};
  return {date:`${year}-${String(month).padStart(2,'0')}-${String(day).padStart(2,'0')}`};
}
