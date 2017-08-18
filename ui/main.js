
var Button = document.getElementById("counter");
var counter= 0;
Button.onclick= function(){
    counter= counter+1;
    var span = document.getElementById("count");
    span.InnerHTML= counter.toString();
    
};