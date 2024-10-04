function updateClock(){
    const clockElement = document.getElementById('clock');
     const now = new Date()

     const hours=now.getHours();
     const minutes =now.getMinutes()
     const seconds=now.getSeconds()

     const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;

     clockElement.textContent=formattedTime

     
}

function padZero(number){
    return number < 10 ? `0${number}` : number
 }

setInterval(updateClock,1000)
