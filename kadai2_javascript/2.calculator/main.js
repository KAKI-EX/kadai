

function buttonClick(target) {
  let result = document.getElementById("result");
  let target_value = target.innerHTML; 
  let remove0 = result.innerHTML
  let remove = remove0.slice(1);

  if(target_value == "AC"){
      result.innerHTML = "0";
    }else if(target_value == "="){
      booleanFlag = false
      result.innerHTML = eval(result.innerHTML);

    }else if(result.innerHTML == "0" && target_value !== "."){
      result.innerHTML =target_value;
    
/*    }else if(target_value = "0"){
      booleanFlag = true;
      result.innerHTML =target_value;

    }else if(result.innerHTML == "0" && booleanFlag == false){
      console.log("成功")
      result.innerHTML = remove + target_value;*/

    }else{
        result.innerHTML += target_value
    }
  }
    


