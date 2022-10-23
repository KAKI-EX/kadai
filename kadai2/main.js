
document.getElementById("subSecondsCounter").innerHTML = 0;
document.getElementById("secondsCounter").innerHTML = 0;
document.getElementById("minutesCounter").innerHTML = 0;
document.getElementById("hoursCounter").innerHTML = 0;

let subSecondsCount = 0; //0からスタート
let subSecondsTimeCount = function(){document.getElementById("subSecondsCounter").innerHTML = subSecondsCount++};
let booleanSubSecond = true;  //booleanの初期値はtrue

let secondsCount = 55;
let secondsTimeCount = function(){document.getElementById("secondsCounter").innerHTML = secondsCount++};

let minutesCount = 59;
let minutesTimeCount = function(){document.getElementById("minutesCounter").innerHTML = minutesCount++};

let hoursCount = 1;
let hoursTimeCount = function(){document.getElementById("hoursCounter").innerHTML = hoursCount++};

function pushStartButton(){
  if(booleanSubSecond == true){
    booleanSubSecond = false;  //booleanにfalseを再代入
    startSubSeconds = setInterval(function(){subSecondsTimeCount();
      if(subSecondsCount>9){ //サブセコンドが9以上になったら0に戻り1秒足す。
        subSecondsCount = 0;
        secondsTimeCount()}
          if(secondsCount>59 && subSecondsCount==9){  //サブセコンド9、秒数59になったら0に戻り1分足す。
            secondsCount = 0;
            minutesTimeCount()}
            if(minutesCount>59 && secondsCount>59){
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
};

if(count>9){alert("成功！")};