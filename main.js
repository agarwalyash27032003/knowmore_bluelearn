// window.onscroll = function() {scrollFunction()};
// function scrollFunction() {
//   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) 
//   {
//     document.getElementById("navbar").style.display = "none";
//     document.getElementById("navbar-1").style.display = "grid";
//     document.getElementById("navbar-1").style.background = " rgba(26,26,26)";
//   } 
//   else {
//     document.getElementById("navbar").style.background = "transparent";
//     document.getElementById("navbar-1").style.display = "none";
//     document.getElementById("navbar").style.display = "grid";
//   }
// }

// document.getElementById("experiece-drop").onclick = function() {myFunction()};
// function myFunction() {
//   var x = document.getElementById("experiece-drop");
//   if(x.innerHTML === "+")
//   {
//     x.innerHTML = "-";
//   }
//   else
//   {
//     x.innerHTML = "+";
//   }
// }
function myFunction() {

  x=document.getElementsByClassName("exp-img-inner");  // Find the elements
    for(var i = 0; i < x.length; i++){
    x[i].innerText="Hello JavaScript!";    // Change the content
    }
  
  }

function faqdisplay()
{
  document.getElementsByClassName("qna-section").style.display="block";
}