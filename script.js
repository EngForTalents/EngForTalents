// set global variables

let fullName = document.getElementById('fullname');
let userName = document.getElementById('username');
let email = document.getElementById('email');
let number = document.getElementById('number');
let fb = document.getElementById('fb');
let talent = document.getElementById('Ptalent');
let submit = document.getElementById('join-us');

// form validation 

function validation() {

    if ( fullName.value == '' || userName.value == '' || email.value == '' || number.value == '' || fb.value == '' || talent.value == '' ) {
        swal.fire({
            text: "املي باقي الفورم يلا",
            icon: "warning"
        });
    } else if ( isNaN(number.value) ) {
        swal.fire({
            text: "Please Enter your whatsApp number",
            icon: "warning"
        });
        number.value = '';
    } else if (number.value.length < 11) {
        swal.fire({
            text: "whatsApp number must be 11 numbers",
            icon: "warning"
        });
        number.value = '';
    } else {
        swal.fire({
            text: "برفكتو",
            icon: "success"
        });
        userName.value = '';
        fullName.value = '';
        email.value = '';
        fb.value = '';
        number.value = '';
        talent.value = '';
    }
}

function clearData() {
    userName.value = '';
    talent.value = '';
    email.value = '';
}

talent.onchange = function () {

    if (this[this.selectedIndex].value === "الرقص") {
        document.getElementById("ra2s").className = "show";
    } else {
        document.getElementById("ra2s").className = "";
    }
  
    if (this[this.selectedIndex].value === "التأليف") {
      document.getElementById("ta2lef").className = "show";
    } else {
      document.getElementById("ta2lef").className = "";
    }

    if (talent.value) {
        document.getElementById('Stalent').className = 'show';
    }
};

document.getElementById('join-us').addEventListener('click', function() {
    validation();
    userTalent();
    clearData();
});


