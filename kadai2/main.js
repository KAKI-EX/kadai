booleanFlag = true

document.getElementById("subSecondsCounter").innerHTML = 0;
document.getElementById("secondsCounter").innerHTML = 0;
document.getElementById("minutesCounter").innerHTML = 0;
document.getElementById("hoursCounter").innerHTML = 0;

let subSecondsCount = 0; //0からスタート
let subSeconds_TimeCount = document.getElementById("subSecondsCounter");

let secondsCount = 0;
let seconds_TimeCount = document.getElementById("secondsCounter");

let minutesCount = 0;
let minutes_TimeCount = document.getElementById("minutesCounter");

let hoursCount = 0;
let hours_TimeCount = document.getElementById("hoursCounter");

function time_CountUp()
{
subSecondsCount += 1;
subSeconds_TimeCount.innerHTML = subSecondsCount;
seconds_TimeCount.innerHTML = secondsCount;

  if(subSecondsCount==9){
    subSecondsCount=-1;
    secondsCount = secondsCount+=1;
  }
  if(secondsCount>59 && minutesCount!=59){
    secondsCount=0;
    minutesCount +=1;
    minutes_TimeCount.innerHTML = minutesCount;
  }
  if(secondsCount>59 && minutesCount==59){
    minutesCount=-1;
    hoursCount +=1;
    hours_TimeCount.innerHTML = hoursCount;
  }
}

function pushStartButton(){
  if(booleanFlag == true){
    booleanFlag = false;
    time= setInterval(function(){time_CountUp()},100);
      }else if(booleanFlag == false){ //何もしない
      };
} 

function pushStopButton(){
  if(booleanFlag==false){
  booleanFlag = true;
  clearInterval(time);
  }
}

function pushResetButton(){
  clearInterval(time);
  booleanFlag = true
  subSecondsCount = 0;
  secondsCount = 0;
  minutesCount = 0;
  hoursCount = 0;
  document.getElementById("subSecondsCounter").innerHTML = 0;
  document.getElementById("secondsCounter").innerHTML = 0;
  document.getElementById("minutesCounter").innerHTML = 0;
  document.getElementById("hoursCounter").innerHTML = 0;
  }
/*
let secondsCount = 0;
let secondsTimeCount = document.getElementById("secondsCounter").innerHTML;

let minutesCount = 0;
let minutesTimeCount = document.getElementById("minutesCounter").innerHTML;

let hoursCount = 1;
let hoursTimeCount = document.getElementById("hoursCounter").innerHTML;*/




/*function pushStartButton(){
  startSubSeconds = setInterval("subSeconds_TimeCount()",1000)
}

/*function pushStartButton(){
  if(booleanSubSecond == true){
    booleanSubSecond = false;  //booleanにfalseを再代入
    startSubSeconds = setInterval(function(){subSecondsTimeCount();
      if(subSecondsCount>8){ //サブセコンドが9以上になったら0に戻り1秒足す。
        subSecondsCount = 0;
        secondsTimeCount()}
          if(secondsCount>9){  //サブセコンド9、秒数59になったら0に戻り1分足す。
            secondsCount = 0;
            minutesTimeCount()}
            if(minutesCount>59 && secondsCount==59 && subSecondsCount==9){
              minutesCount = 0;
              hoursTimeCount()
          }}
        ,100); //計測開始とカウント9で0に戻る
  }else if(booleanSubSecond == false){  //falseの場合には何もしない(二度押し防止)
  }
};

function pushStopButton(){
  if(booleanSubSecond == false){
    clearInterval(startSubSeconds);
    booleanSubSecond = true;
  }else if(booleanSubSecond == true);{
  }
};

function pushResetButton(){
  pushStopButton();
  let = document.getElementById("subSecondsCounter").innerHTML = 0;
  let = document.getElementById("secondsCounter").innerHTML = 0;
  let = document.getElementById("minutesCounter").innerHTML = 0;
  let = document.getElementById("hoursCounter").innerHTML = 0;
  let = count = 0
};*/