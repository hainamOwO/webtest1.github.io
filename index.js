const nav = document.getElementById("nav_bar");
window.addEventListener('scroll',()=>{
  let scrollPosition = Math.round(window.scrollY);
  console.log(scrollPosition);
  if (scrollPosition === 0){
    nav.style.backgroundColor = "transparent";
    document.getElementById("icon").style.color = "white";
    for (let i = 0;i<document.querySelectorAll("#subject").length;i++){
      document.querySelectorAll("#subject")[i].style.color = "white";
    }
    nav.style.boxShadow = "none";
    document.getElementById("sign_in").style.color = "white";
    document.getElementById("globe").style.color = "white";
    document.getElementById("free_test").style.color = "white"
    document.getElementById("free_test").style.borderColor = "white"
  }
  else{
    nav.style.backgroundColor = "white";
    nav.style.boxShadow = "2px 5px rgba(0,0,0,0.15)";
    document.getElementById("icon").style.color = "black";
    for (let i = 0;i<document.querySelectorAll("#subject").length;i++){
      document.querySelectorAll("#subject")[i].style.color = "black";
    }
    document.getElementById("sign_in").style.color = "black";
    document.getElementById("globe").style.color = "black";
    document.getElementById("free_test").style.color = "black"
    document.getElementById("free_test").style.borderColor = "black";
  }
});

const free_test = document.getElementById("free_test");
free_test.onclick = function(){
  window.location = "Free_test.html";
}
