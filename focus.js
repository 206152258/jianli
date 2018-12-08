window.onload = function () {
    var all = document.getElementById("all");
    var kuangjia = document.getElementById("kuangjia");
    var yuansheng = document.getElementById("yuansheng");
    var bar = document.getElementById("barinner");
    all.onclick = function () {
        bar.className = "barinner1";
        bar.style.color = "green";
    }
    kuangjia.onclick = function () {
        bar.className = "barinner2";
    }
    yuansheng.onclick = function () {
        bar.className = "barinner3";
    }

}
window.onscroll = function (ss) {
    if (window.scrollY > 0) {
        sticky.classList.add('sticky');
    }
    else {
        sticky.classList.remove('sticky');
    }
    var date = document.querySelectorAll('[data-x]')
    // console.log(date.length);
    var minIndex = 0;
    for (var i = 0; i < date.length; i++) {
        if (Math.abs(date[i].offsetTop - window.scrollY) < Math.abs(date[minIndex].offsetTop - window.scrollY)) {
            minIndex = i;
        }
    }
        for (var i = 0; i < date.length; i++) {
            date[i].classList.remove('hell');
        
    }
    var id=date[minIndex].id;
    console.log(id);
    var a=document.querySelector('a[href="#'+id+'"]');
    var li=a.parentNode;
    console.log(li);
    li.classList.add('lineheight');
    date[minIndex].classList.add('hell');

}
let aTages = document.getElementsByClassName("menuTigger");
// console.log(aTags);
for (var i = 0; i < aTages.length; i++) {
    aTages[i].onmouseenter = function (ss) {
        let a = ss.currentTarget;
        //寻找文本节点
        let brother = a.nextSibling;
        while (brother.nodeType === 3) {
            brother = brother.nextSibling;
        }

        brother.classList.add('active1');


    }

    aTages[i].onmouseleave = function (ss) {
        let a = ss.currentTarget;
        //寻找文本节点
        let brother = a.nextSibling;
        while (brother.nodeType === 3) {
            brother = brother.nextSibling;
        }
        setTimeout(function () {
            brother.classList.remove('active1');
        }, 500)

    }
}

// 缓存运动
// function animate(time) {
//     requestAnimationFrame(animate);
//     TWEEN.update(time);
// }
// requestAnimationFrame(animate);

var nava = document.querySelectorAll('nav>ul>li>a');
for (var o = 0; o < nava.length; o++) {
    nava[o].onclick = function (sss) {
        sss.preventDefault();//阻止默认动作
        var a = sss.currentTarget//获取到用户点到的标签
        var href = a.getAttribute('href');//获取用户点到标签的地址

        var element = document.querySelector(href);//获取地址所在的标签
        var top = element.offsetTop;//获取标签上部的距离

        var n = 20;
        var duration = 500 / n;
        var currentTop = window.scrollY;
        var targetTop = top - 80;
        var distance = (targetTop - currentTop) / n;
        var i = 0;
        var id = setInterval(() => {
            if (i == n) {
                window.clearInterval(id);
                return;
            }
            i = i + 1;
            window.scrollTo(0, currentTop + distance * i);
        }, duration)
        window.scrollTo(0, top-100);

        // var currentTop = window.scrollY;
        // var targetTop = top - 80;
        // var coords = { y: currentTop };
        // var tween = new TWEEN.Tween(coords)
        //     .to({ x: targetTop }, 1000)
        //     .easing(TWEEN.Easing.Quadratic.In)
        //     .onUpdate(function () {
        //         window.scrollTo(0, coords.y);
        //     })
        //     .start();


    }
}