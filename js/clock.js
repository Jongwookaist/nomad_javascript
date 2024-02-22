const clock = document.querySelector("h2#clock");




function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//setInterval(sayHello, 5000);
//call 하고 싶은 function 이랑 몇 밀리 sec 마다 부를지
// 5000 msec 면 5초
//setTimeout(sayHello,5000);
//5초후에 sayHello 함수를 한번 호출해라

getClock();
setInterval(getClock, 1000);

//padStart(길이, 길이보다 짧으면 앞에 붙일 문자)

