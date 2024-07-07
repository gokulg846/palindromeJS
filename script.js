
const inputText = document.getElementById("text-input");
const submitButton = document.getElementById("check-btn");
const text = inputText;
const result = document.getElementById("result");
const palindrome = () => {
  //console.log(inputText.value.replace(/\s/g,"").split("").reverse().join(""))
  if(inputText.value === ""){
    alert("Please input a value");
  }
  else{
    let regex = /^[a-zA-Z]+$/;
    if(regex.test(inputText.value) && inputText.value.length == 1){
      result.innerText = `${inputText.value} is a palindrome`;
    }
    else if(inputText.value.toLowerCase().replace(/[/\)(_.,-\s]/g,"").split("").reverse().join("") == text.value.replace(/[/\)(_.,-\s]/g,"").toLowerCase()){
      result.innerText = `${inputText.value} is a palindrome`;
    }
    else{
      result.innerText = `${inputText.value} is not a palindrome`
    }
    //console.log("My age is 0, 0 si ega ym.".replace(/\s/g,"").split("").reverse().join(""))
  }
}

submitButton.addEventListener("click", palindrome);
