var counter= 0;
var Button =document.getElementNyId("counter");
Button.onclick= function(){
    counter= counter+1;
    var span = document.getElementById("count");
    span.InnerHTML= counter.toString();
    
};