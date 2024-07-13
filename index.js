const seconds=1000,minute=60*seconds,hour=60*minute,day=24*hour;

const daysElement=document.querySelector('.days');
const hoursElement=document.querySelector('.hours');
const minutesElement=document.querySelector('.minutes');
const secondsElement=document.querySelector('.seconds');
const heading=document.querySelector('h1');
const counterTimer=document.querySelector('.CounterTimer');

const timerFunction=()=>{
    let now=new Date(),
     dd=String(now.getDate()).padStart(2,'0'),
     mm=String(now.getMonth()+1).padStart(2,"0"),
     yyyy=now.getFullYear();
    
    //     const enteredDay=prompt("Enter Day = ").padStart(2,'0');
    //  const enteredMonth=prompt("Enter Month = ").padStart(2,'0');
     
    let enteredDay, enteredMonth;
    while (true) {
        enteredDay = prompt("Enter Day ").padStart(2, '0');
        enteredMonth = prompt("Enter Month").padStart(2, '0');

        if (isNaN(enteredDay) || isNaN(enteredMonth) || 
            enteredDay < 1 || enteredDay > 31 || 
            enteredMonth < 1 || enteredMonth > 12) {
            alert("Invalid date. Please enter valid day (1-31) and month (1-12).");
        } else {
            break;
        }
    }
     
     now=`${mm}/${dd}/${yyyy}`;

     
     let targetDate=`${enteredMonth}/${enteredDay}/${yyyy}`;
     if(now>targetDate) targetDate=`${enteredMonth}/${enteredDay}/${yyyy+1}`;


    setInterval(()=>{
        const timer=new Date(targetDate).getTime();
        const today=new Date().getTime();
        const difference=timer-today;
    
    
    
        const leftDay=Math.floor(difference/day);
        const leftHour=Math.floor((difference%day)/hour);
        const leftMinute=Math.floor((difference%hour)/minute);
        const leftSecond=Math.floor((difference%minute)/seconds);

        daysElement.innerText=leftDay;
        hoursElement.innerText=leftHour;
        minutesElement.innerText=leftMinute;
        secondsElement.innerText=leftSecond;

    

        if(difference<0)
        {
            counterTimer.style.display="none";
            heading.innerText="Time's Up"; 
        }
        // console.log(`${leftDay}:${leftHour}:${leftMinute}:${leftSecond}`);
    },0)
    





};

timerFunction();