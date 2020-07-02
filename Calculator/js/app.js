
//getting history value
function gethistory(){
    return document.getElementById("history-value").innerHTML;
}
function printhistory(num){
    document.getElementById("history-value").innerHTML = num;
}

//getting output value
function getoutput(){
    return document.getElementById("result").innerText;
}
function printoutput(num){
    document.getElementById("result").innerText = num;
}

//operation
var operator = document.getElementsByClassName("operator");
for(var i = 0; i < operator.length ; i++){
    operator[i].addEventListener("click",function(){
        if(this.id == "clear"){
            printhistory("");
            printoutput("");
        }
        else if(this.id == "backspace"){
            var output = getoutput();
            output = output.substr(0,output.length-1);
            printoutput(output);
        }
        else{
            var history = gethistory();
            var output = getoutput();
            if(output != ""){
                history = history + output;
            }
            if(this.id == "="){
                var result = eval(history);
                printoutput(result);
                printhistory(history);
            }
            else{
                output = output + this.id;
                printoutput(output);
                printhistory("");
            }
        }   
    });
}

//number
var number = document.getElementsByClassName("number");
for(var i = 0; i < number.length ; i++){
    number[i].addEventListener("click",function(){
        var output = getoutput();
        output = output + this.id;
        printoutput(output);
    });
}
