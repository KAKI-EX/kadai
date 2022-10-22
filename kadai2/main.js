

let count= 0;
let secondsTimeCount = function(){document.getElementById("secondsCounter").innerHTML = count++};

function pushStartButton(){
setInterval(secondsTimeCount,1000)
}


function pushStopButton(){
  alert("ストップボタン")  
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
