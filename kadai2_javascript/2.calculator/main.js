



calStatus = "Wait"; /* 待機状態 */
let count = 0

function buttonClick(target) {
  target_value = target.innerHTML; 
  result = document.getElementById("result");

  calStatus = "Start" /* 数字が押されて計算スタート*/

  if(target_value == "AC"){
      calStatus = "Stop"
      calStatus = 0
      result.innerHTML = "0";
    }else if(target_value == "="){
      result.innerHTML = eval(result.innerHTML);

    }else if(result.innerHTML == "0" && target_value !== "."){
      result.innerHTML =target_value;

    }else{
        result.innerHTML += target_value
        count = 0
    }
  }

function buttonClick2(target2) {
  target2_value = target2.innerHTML;
  console.log(calStatus);
  count++;

  if(calStatus == "Wait"){  /* ステータスがStartになるまで入力しない、最初に記号を押したら何も返さない*/

  }else if(calStatus == "Start" && count == 1){ /* 何か数字が入力され、かつ1回目の記号入力ならそのまま計算*/
    result.innerHTML += target2_value 
  }else if(calStatus == "Start" && count > 1){ /* 2回目の記号なら何も返さない*/
    
  }

}