

let count= 0;
let secondsTimeCount = function(){document.getElementById("secondsCounter").innerHTML = count++};
let booleanSecond = true; //booleanの初期値はtrue

function pushStartButton(){
  if(booleanSecond == true){
    booleanSecond = false;  //booleanにfalseを再代入
    startSeconds = setInterval(secondsTimeCount,1000);  //計測開始
  }else if(booleanSecond == false){  //falseの場合には何もしない(二度押し防止)
  }
}

function pushStopButton(){
  if(booleanSecond == false){
    clearInterval(startSeconds);
    booleanSecond = true
  }else if(booleanSecond == true){
    alert("何もしない")
  }
}

function pushResetButton(){
  alert("リセットボタン")  
}

/*let count = 0
const secondsCountUp = 
  console.log(count++);
  setInterval(secondsCountUp,1000)*/



/*function pushStartButton(){
log
}
/*  setInterval(log,1000)
}


*/
