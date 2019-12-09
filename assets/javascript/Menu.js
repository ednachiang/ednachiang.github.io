// Script from: https://www.w3schools.com/howto/howto_js_dropdown.asp //

// When the user clicks on the button, toggle between hiding and showing the dropdown content //
function Menu() {
  document.getElementById("Menu_SciComm_Dropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.Menu_SciComm_Btn')) {
    var dropdowns = document.getElementsByClassName("Menu_SciComm_Content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
