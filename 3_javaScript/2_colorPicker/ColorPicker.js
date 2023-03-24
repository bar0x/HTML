var Red
var Green
var Blue

Blue = 255;
Green = 255;
Red = 255;

Blue = Blue * 1;
Green = Green * 1;
Red = Red *1;


//incremendo e decremento parametri
function RossoSu() {
    if (Red < 255){
        Red++;
    }
    document.getElementById("OutData").innerHTML = "rgb("+Red+","+Green+","+Blue+")";
    

    document.getElementById("OutData").style.background = "rgb("+Red+","+Green+","+Blue+")";
}
function RossoGiu() {
    if (Red > 1){
        Red--;
    }
    document.getElementById("OutData").innerHTML = "rgb("+Red+","+Green+","+Blue+")";
    
    document.getElementById("OutData").style.background = "rgb("+Red+","+Green+","+Blue+")";
}
function VerdeSu() {
    if (Green < 255){
        Green++;
    }
    document.getElementById("OutData").innerHTML ="rgb("+Red+","+Green+","+Blue+")";
    document.getElementById("OutData").style.background = "rgb("+Red+","+Green+","+Blue+")";
}

function VerdeGiu() {
    if (Green > 1){
        Green--;
    }
    document.getElementById("OutData").innerHTML ="rgb("+Red+","+Green+","+Blue+")";
    document.getElementById("OutData").style.background = "rgb("+Red+","+Green+","+Blue+")";
}

function BluSu() {
    if (Blue < 255){
        Blue++;
    }
    document.getElementById("OutData").innerHTML ="rgb("+Red+","+Green+","+Blue+")";
    document.getElementById("OutData").style.background = "rgb("+Red+","+Green+","+Blue+")";
}
function BluGiu() {
    if (Blue > 1){
        Blue--;
    }   
    document.getElementById("OutData").innerHTML ="rgb("+Red+","+Green+","+Blue+")";
    document.getElementById("OutData").style.background = "rgb("+Red+","+Green+","+Blue+")";
}
