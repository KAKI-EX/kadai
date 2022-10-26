



calStatus = "Wait"; /* 待機状態 */
let count = 0
let zeroCount = 0
let w0Count = 0


function buttonClick(target) {
  target_value = target.innerHTML; 
  result = document.getElementById("result");

  calStatus = "Start" /* 数字が押されて計算スタート*/

  if(target_value == "AC"){
      calStatus = "Stop"
      count = 0
      zeroCount = 0
      w0Count = 0
      result.innerHTML = "0";
    }else if(target_value == "="){
      result.innerHTML = eval(result.innerHTML);
      count = 0
      zeroCount = 0
      w0Count = 0

    }else if(result.innerHTML == "0" && target_value !== "."){
      result.innerHTML = target_value;
      count = 0;
      zeroCount = 0
      w0Count = 0;

    }else{
      count = 0;
      zeroCount = 0
      w0Count = 0;
      calStatus = "Start"
      result.innerHTML += target_value

    }
  }

function buttonClick2(target2) {
  target2_value = target2.innerHTML;
  console.log(calStatus);
  count++;

  if(calStatus == "Wait"){  /* ステータスがStartになるまで入力しない、最初に記号を押したら何も返さない*/

  }else if(calStatus == "Start" && count == 1){ /* 何か数字が入力され、かつ1回目の記号入力ならそのまま計算*/
    result.innerHTML += target2_value 
    zeroCount = 0
    w0Count = 0;
  }else if(calStatus == "Start" && count > 1){ /* 2回目の記号なら何も返さない*/
    
  }
}

function buttonClick3(target3) {
  w0Count++;
  console.log(w0Count);
  console.log(count);
  console.log(calStatus);
  target3_value = target3.innerHTML
  if(result.innerHTML == "0" && target3_value == "00"){
    result.innerHTML = "0";
  }else if(count >=1 && w0Count == 1){
    result.innerHTML += "0"
  }else if(count >=1 && w0Count >1 ){
    
  }else{
    result.innerHTML += target3_value;
  }
}

function buttonClick4(target4){
  zeroCount++
  target4_value = target4.innerHTML
  console.log("ゼロカウント"+zeroCount)
  if(count >=1 && zeroCount>1){

  }else if(count >=1 && w0Count >=1){

  }else{
    result.innerHTML += target4_value
  }
}
