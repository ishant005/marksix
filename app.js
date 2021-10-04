var translatebutton=document.querySelector("#translate");
var textbox=document.querySelector("#text");
var outputbox=document.querySelector("#output-area");

//   outputbox.innerText="isijhantaj"
// console.log(textbox);
// function clickHandler(){
//       outputbox.innerText="asgsjd"+textbox.value

// };
//  translatebutton.addEventListener("click",clickHandler)

  var url="https://api.funtranslations.com/translate/minion.json"
   function fullurl(inputtext){

      
  return url+"?"+"text="+inputtext
  }

  function erroroccured(error){
       console.log("error occured",error);
       alert("something went wrong")
  }

  function clickButton(){
     var textentered=textbox.value;
     fetch(fullurl(textentered))
     .then(response => response.json())
     .then(json=>{
         var translatedoutput=json.contents.translated;
         outputbox.innerText=translatedoutput;
     })
     .catch(erroroccured)
    };
   translatebutton.addEventListener("click",clickButton)
