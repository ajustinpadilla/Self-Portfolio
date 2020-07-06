function validateForm() {
    let Name = document.forms["Contact"]["Name"].value;
    let Email = document.forms["Contact"]["Email"].value;
    let closingForm = document.forms["Contact"]["closeFormBtn"].value;
    if ( closingForm === "cancel") {
        return false
    }
    else if (Name === "" || Name ==="Your Name") {
        alert("Please fill out your Name");
        return false;
    }
    else if (Email === "" || Email ==="Youremail@email.com") {
        alert("Please put an email so I may contact you");
        return false;
    }
}

function openForm() {
    document.getElementById("contactForm").style.display = "block";
    document.getElementById("openFormBtn").style.display = "none";
    document.getElementById("closeFormBtn").value = "open";
}

function closeForm() {
    document.getElementById("contactForm").style.display = "none";
    document.getElementById("openFormBtn").style.display = "block";
    document.getElementById("closeFormBtn").value = "cancel";
}

