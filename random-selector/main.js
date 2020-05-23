/*
window.onload=function(){
    //document.write("Hello JavaScript!");
};
*/

$(document).ready(function(){
    $("input").click(function(){
        //alert("Test");
        //$("H1").text("Hello");
        let numberOfListItem = $("#choices li").length;
        let randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("#random-result").text($("#choices li").eq(randomChildNumber).text());
        //document.getElementById('image').src = images[randomChildNumber];
        $("#random-pic").attr("src",images[randomChildNumber])
    });
});