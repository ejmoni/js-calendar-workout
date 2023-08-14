//2032.08 이전달,다음달 선택
//오늘날짜표기
//전달 다음달이동
//생각보다 쥐어짜야겠네


// const today = new Date();

// const viewYear = today.getFullYear();
// const viewMonth = today.getMonth();
// const viewDate=[];

const currentDate = document.querySelector('.current-date');
const daysTag = document.querySelector('.days');
const prevNextIcon = document.querySelectorAll('i');

let date = new Date();
currYear = date.getFullYear();
currMonth = date.getMonth();

const Months = ['01','02','03','04','05','06','07','08','09','10','11','12']

const renderCalendar = ()=>{
  let firstDayofMonth= new Date(currYear, currMonth, 1).getDay();
  let lastDateofMonth = new Date(currYear, currMonth+1, 0).getDate();
  let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
  let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
  let liTag='';

  for(let i =firstDayofMonth; i>0; i--){
    liTag +=`<li class="inactive">${lastDateofLastMonth-i+1}</li>`;
  }
  for(let i=1; i<= lastDateofMonth; i++){
    let isToday = i === date.getDate()&& currMonth ===new Date().getMonth()&& currYear===new Date().getFullYear() ? 'active': '';
    liTag +=`<li class=${isToday}>${i}</li>`;
  }
  for(let i=lastDayofMonth; i<6; i++){
    liTag +=`<li class="inactive">${i - lastDayofMonth+1}</li>`;
  }

  currentDate.innerHTML = `${currYear} . ${Months[currMonth]}`;
  daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(i=>{
  i.addEventListener('click', ()=>{
    currMonth = i.id ==='prev' ? currMonth -1 : currMonth +1;
    if(currMonth<0||currMonth>11){
      date =new Date(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    }else{
      date =new Date();
    }
    renderCalendar();
  
  })
})