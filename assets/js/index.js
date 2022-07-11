

/*Top bar Shrink on scroll function*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop >1) {
    document.getElementById("logo").firstElementChild.style.width = "40px";
    document.getElementById("logo").firstElementChild.style.height = "40px";
    document.getElementById("header").lastElementChild.style.fontSize = "20px";
    document.getElementById("icon").style.fontSize = "20px";
  } else {
    document.getElementById("logo").firstElementChild.style.width = "50px";
    document.getElementById("logo").firstElementChild.style.height = "50px";
    document.getElementById("header").lastElementChild.style.fontSize = "30px";
    document.getElementById("icon").style.fontSize = "30px";
  }
}
/*document.getElementById("icon").addEventListener('click',()=>{
  const mobile=document.getElementById("navigation").innerHTML;
  document.getElementById("icon").innerHTML=
 `
 <div id=mobile-nav>
 ${mobile}
 </div>
 `
  
})
*/
function myFunction() {
  var x = document.getElementById("navigation");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
