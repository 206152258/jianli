window.onload=function(){
    var s1=document.getElementById("s1");
    var s2=document.getElementById("s2");
    var s3=document.getElementById("s3");
    var s4=document.getElementById("s4");
    s4.onclick=function(){
        s1.style.display="none";
        s2.style.display="block";
        
    }
    s3.onclick=function(){
      s2.style.display="none";
        s1.style.display="block";
    }
}