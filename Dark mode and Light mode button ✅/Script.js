gsap.to("#contener button",{
  rotate:720,
  duration:1,
  delay:.30,
});
gsap.from("#contener button",{
  y: -200,
});
gsap.from("#contener h3",{
  y: -170,
  delay:1.29,
});
var btn = document.querySelector("button")
var con = document.querySelector("#contener")

var check = 0
btn.addEventListener("click",function() {
  if (check==0) {
    con.style.backgroundColor="white"
    btn.style.color="black"
    btn.textContent="Dark Mode"
    check = 1
  
  } else {
    con.style.backgroundColor="black"
    btn.style.color="white"
    btn.textContent="Light Mode"
    check = 0
  }
  
});
