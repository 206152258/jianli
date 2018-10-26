window.onload=function(){
    var all=document.getElementById("all");
    var kuangjia=document.getElementById("kuangjia");
    var yuansheng=document.getElementById("yuansheng");
    var bar=document.getElementById("barinner");
    all.onclick=function(){
        bar.className="barinner1";
        bar.style.color="green";
    }
    kuangjia.onclick=function(){
    bar.className="barinner2";
    }
    yuansheng.onclick=function(){
        bar.className="barinner3";
        }
       
}
