// myFunction runs when you click the mobile navbar icon and checks if the mobile menu is hidden.
// If it is hidden, then show it otherwise hide it again.
function myFunction() {
    // x is the html element with id #myLinks
    var x = document.getElementById("myLinks");
    // if the element contains the class hideMobile remove it, otherwise add it
    if (x.classList.contains("hideMobile")) {
      x.classList.remove("hideMobile")
    } else {
      x.classList.add("hideMobile");
    }
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("appointmentButton").style.display = "none";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("appointmentButton").style.display = "block";
}