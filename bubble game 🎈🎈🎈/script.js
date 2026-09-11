
gsap.from("#display-header .recod" ,{
    x: 50,
    rotate :360,
    delay: 0.5,
});

gsap.from("#display-header h2",{

    y:-100,
    rotate :0,
    delay: .5,
});

gsap.from("#display-header .box",{
    y:-100,
    rotate :0,
    delay: .5,
});
gsap.from("#gamedisplay",{
    y:80,
    delay: .05,
});
var timer = 60;
var scor = 0; 
var rm = 0;
 document.querySelector("#restart").addEventListener("click", function(){
    location.reload();
});
function getBubble(){
clutter = "";
for(var i=1; i<=140; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div id = "bubble1">${rn}</div>`
    document.querySelector("#gamedisplay").innerHTML = clutter;
}
}

function hit(){
 rm = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rm;
}

function runtime(){
    setInterval (function(){
        if (timer>0){
            timer--;
            document.querySelector("#timer").innerHTML = timer; 
        }else{
            clearInterval(timer);
            document.querySelector("#scoreval").innerHTML = scor;
            document.querySelector("#youscore").innerHTML = "Your Score: 😀";
            document.querySelector("#displayhied").style.display = "block";
            document.getElementById("displayhied").style.display = "flex";
        }
    },1000);
}

function getScore(){
scor += 10;
document.querySelector("#score").textContent = scor;
}
document.querySelector("#gamedisplay").addEventListener("click", function(e){
    var clickdnum = Number((e.target.textContent));
    if (clickdnum === rm){
        getScore();
        hit(); 
        getBubble();
    }
}) 

hit();
runtime();
getBubble();
