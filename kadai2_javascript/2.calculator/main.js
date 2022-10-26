



calStatus = "Wait"; /* 待機状態 */
let count = 0;
let zeroCount = 0;
let w0Count = 0;
let dotCount = 0;


function buttonClick(target) {
  target_value = target.innerHTML; 
  result = document.getElementById("result");

  calStatus = "Start" /* 数字が押されて計算スタート*/

  if(target_value == "AC"){
      calStatus = "Stop"
      count = 0
      zeroCount = 0
      w0Count = 0
      dotCount = 0;
      result.innerHTML = "0";
    }else if(target_value == "="){
      result.innerHTML = eval(result.innerHTML);
      count = 0
      zeroCount = 0
      w0Count = 0
      dotCount = 0;

    }else if(result.innerHTML == "0" && target_value !== "."){
      result.innerHTML = target_value;
      count = 0;
      zeroCount = 0
      w0Count = 0;
      dotCount = 0;

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

  }else if(calStatus == "Start" && count == 1){ /* 何か数字が入力され、かつ1回目の記号入力ならそのまま計算 */
    result.innerHTML += target2_value 
    zeroCount = 0
    w0Count = 0;
    dotCount = 0;
  }else if(calStatus == "Start" && count > 1){ /* 2回連続で記号が入力された場合は何も返さない*/
    
  }
}

function buttonClick3(target3) {  /* 00ボタンの挙動微修正のために追加 */
  w0Count++;
  target3_value = target3.innerHTML
  if(result.innerHTML == "0" && target3_value == "00"){ /* 初期状態の0の時、ダブル0を押しても0を返す */
    result.innerHTML = "0";
  }else if(count >=1 && w0Count == 1 && zeroCount == 0){  /* +などの記号直後に、ダブル0を押しても0を返す */
    result.innerHTML += "0"
  }else if(count >=1 && w0Count >1 && dotCount == 0){ /* +などの記号直後に、ダブル0を連続で押せてしまう状態を修正 */

  }else if(count >=1 && zeroCount >=1 && dotCount == 0){ /* +などの記号直後に、シングル0の後にダブル0を押せてしまう状態を修正 */

  }else{
    result.innerHTML += target3_value;
  }
}

function buttonClick4(target4){
  zeroCount++
  target4_value = target4.innerHTML
  if(count >=1 && zeroCount>1 && dotCount == 0){  /* +などの記号直後に、シングル0を連続で押せてしまう状態を修正 */

  }else if(count >=1 && w0Count >=1 && dotCount == 0){ /* +などの記号直後に、ダブル0が押された後(実際の入力される値はシングル0)にシングル0が打てないよう修正 */

  }else if(calStatus !== "Start"){  /* 数字のボタンが入力されていない状態でシングル0を押しても値0のみを返す。要は0が増えない */
    result.innerHTML = "0"
  }else{
    result.innerHTML += target4_value
    calStatus = "Start";
  }
}

function buttonClick5(target5){ /* ドットの挙動を修正するために追加 */
  dotCount++
  target5_value = target5.innerHTML
  if(dotCount > 1){ /* ドットが連続で入力できないよう修正、ただし、利便性も考えて記号直後の小数点は許容 */

  }else{
    result.innerHTML += target5_value
  }
}