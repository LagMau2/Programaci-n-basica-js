function displayTime(){
    let d = new Date();
    let m = d.toTimeString().substr(0,8); 
    console.log(d);
    setTimeout(displayTime,1000);
}
displayTime();