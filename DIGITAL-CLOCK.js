const currentTime  = () =>{
    const el = document.querySelector("h3");

    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = hh < 10 ?`0${hh}` : hh;
    mm = mm < 10 ? `0${mm}` : mm;
    ss = ss < 10 ? `0${ss}` : ss;

    let time = `${hh}:${mm}:${ss}`;
    el.innerText = time;
}
currentTime();
setInterval(currentTime,1000);

// function immediately(){
    // let boy = "congratulations";
    // alert(boy);
// }
// immediately();


(function cons(){
    alert("fuck off");
})(1000);

let time = new Date();
alert(time);
