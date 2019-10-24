
var countStartNumber = 30;


function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     return;
  }

 document.getElementById("timer").innerHTML=count + " secs"; 
}

var submitAnswer = function() {

    var radios = document.getElementsByName('choice');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value; 
           break;
         }
    }
    
    if (val == "" ) {
      alert('please select choice answer');
    } else if ( val == "B" ) {
      alert('Answer is correct !');
    } else {
      alert('Answer is wrong');
    }

  };
 
  var submitAnswer = function() {

    var radios = document.getElementsByName('choice');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value; 
           break;
         }
    }
    
    if (val == "" ) {
      alert('please select choice answer');
    } else if ( val == "A" ) {
      alert('Answer is correct !');
    } else {
      alert('Answer is wrong');
    }

  };
  var submitAnswer = function() {

    var radios = document.getElementsByName('choice');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value; 
           break;
         }
    }
    
    if (val == "" ) {
      alert('please select choice answer');
    } else if ( val == "B" ) {
      alert('Answer is correct !');
    } else {
      alert('Answer is wrong');
    }

  };
 