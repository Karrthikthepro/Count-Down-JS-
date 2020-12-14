function showMessage(){
    document.getElementById("hidden").style.display="block";
}

function changeCount(){
    var currentValue = document.getElementById("count").innerHTML;
    var newValue = 0;

    if(currentValue>0){
       newValue= currentValue-1;
    }
    document.getElementById("count").innerHTML=newValue; 
}    