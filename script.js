// set global variables

let fullName = document.getElementById('fullname');
let email = document.getElementById('email');
let number = document.getElementById('number');
let fb = document.getElementById('fb');
let group = document.getElementById('group');
let Ptalent = document.getElementById('Ptalent');
let Stalent = document.getElementById('Stalent');
let submit = document.getElementById('join-us');

// form validation 

function validation() {

    var form = document.getElementById("sheetdb-form");
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);

    if ( fullName.value == '' || email.value == '' || number.value == '' || fb.value == '' || Ptalent.value == '' || Stalent.value == '' || group.value == '' ) {
        swal.fire({
            title: "كمل بيانات الفورم يلا",
            html: "<img src='b.png' style='width: 100px;'>",
            confirmButtonColor: "red"
        });

    } else if ( isNaN(number.value) ) {
        swal.fire({
            title: "اكتب رقم الواتساب",
            html: "<img src='w.png' style='width: 100px;'>",
        });
        number.value = '';
        
    } else if (number.value.length < 11) {
        swal.fire({
            title: "معلومه ليك رقم التلفون 11 رقم",
            html: "<img src='c.png' style='width: 200px;'>",
        });
        number.value = '';

    } else {

        var form = document.getElementById("sheetdb-form");
        form.addEventListener("submit", e => {
        e.preventDefault();
        fetch(form.action, {
            method : "POST",
            body: new FormData(document.getElementById("sheetdb-form")),
        }).then(
            response => response.json()
        ).then((html) => {
            swal.fire({
                title: "برفكتو",
                html: "<img src='p1.png' style='width: 100px;'>",
                confirmButtonColor: "green"
            }).then ( function() {
                location.reload();
            });
        });
        });
    }
}

Ptalent.onchange = function () {

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

    if (this[this.selectedIndex].value === "الرقص" || this[this.selectedIndex].value === "الإخراج") {
        document.getElementById('role1').className = "";
    } else {
        document.getElementById('role1').className = "show";
    }

    if (Ptalent.value) {
        document.getElementById('Stalent').className = 'show';
    }
};

Stalent.onchange = function () {

    if (this[this.selectedIndex].value === "الرقص") {
        document.getElementById("ra2s1").className = "show";
    } else {
        document.getElementById("ra2s1").className = "";
    }
  
    if (this[this.selectedIndex].value === "التأليف") {
      document.getElementById("ta2lef1").className = "show";
    } else {
      document.getElementById("ta2lef1").className = "";
    }

    if (this[this.selectedIndex].value === "الرقص" || this[this.selectedIndex].value === "الإخراج") {
        document.getElementById('role2').className = "";
    } else {
        document.getElementById('role2').className = "show";
    }
};

document.getElementById('join-us').addEventListener('click', function() {
    validation();
});


