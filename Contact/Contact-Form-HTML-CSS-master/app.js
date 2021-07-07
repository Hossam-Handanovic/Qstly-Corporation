const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});



/* Dark Mode */
const themebutton = document.getElementById('dark1')
const darktheme = 'dark-theme'
const icontheme = 'bx-sun'
const selectedtheme = localStorage.getItem('selected-theme')
const selectedicon = localStorage.getItem('selected-icon')
const getCurrentTheme = () => document.body.classList.contains(darktheme) ? 'dark1' : 'light'
const getCurrentIcon = () => themebutton.classList.contains(icontheme) ? 'bx-moon' : 'bx-sun'
if (selectedtheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedtheme === 'dark1' ? 'add' : 'remove'](darktheme)
    themebutton.classList[selectedicon === 'bx-moon' ? 'add' : 'remove'](icontheme)

}

themebutton.addEventListener('click', () => {
    document.body.classList.toggle(darktheme)
    themebutton.classList.toggle(icontheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())

})


/* =========================================== The Contact Form Validation ======================================= */

$(document).ready(function() {
    $('#contact-form1').on('submit', function(e) { //Don't foget to change the id form
        $.ajax({
            url: 'Contact.php', //===PHP file name====
            data: $(this).serialize(),
            type: 'POST',
            success: function(data) {
                console.log(data);
                //Success Message == 'Title', 'Message body', Last one leave as it is
                swal("¡Success!", "Message sent!", "success");
            },
            error: function(data) {
                //Error Message == 'Title', 'Message body', Last one leave as it is
                swal("Oops...", "Something went wrong :(", "error");
            }
        });
        e.preventDefault(); //This is to Avoid Page Refresh and Fire the Event "Click"
    });
});