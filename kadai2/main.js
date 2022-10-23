
document.getElementById("subSecondsCounter").innerHTML = 0;
document.getElementById("secondsCounter").innerHTML = 0;
document.getElementById("minutesCounter").innerHTML = 0;
document.getElementById("hoursCounter").innerHTML = 0;

let count= 0; //0からスタート
let subSecondsTimeCount = function(){document.getElementById("subSecondsCounter").innerHTML = count++};
let booleanSubSecond = true;  //booleanの初期値はtrue

function pushStartButton(){
  if(booleanSubSecond == true){
    booleanSubSecond = false;  //booleanにfalseを再代入
    startSubSeconds = setInterval(subSecondsTimeCount,100);  //計測開始
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
};

if(count>9){alert("成功！")};