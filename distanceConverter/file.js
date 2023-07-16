
document.getElementById('convert').addEventListener('submit' , function(e){
    e.preventDefault();
    var distance = parseFloat(document.getElementById('distance').value);
    var answer = document.getElementById('answer');
    if (distance){
        var conversion =( distance * 1.689344 ).toFixed(3)
      // var roundedConversion = Math.round(conversion*1000)/1000
        
        answer.innerHTML=`${distance} miles is ${conversion} KM`
    }
    else{
        
        answer.innerHTML=`enter a number please`
    }
})