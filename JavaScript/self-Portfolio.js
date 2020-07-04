function validateForm() {
    let Name = document.forms["Contact"]["Name"].value;
    let Email = document.forms["Contact"]["Email"].value;
    if (Name === "" || Name ==="Your Name") {
        alert("Please fill out your Name");
        return false;
    }
    else if (Email === "" || Email ==="Youremail@email.com") {
        alert("Please put an email so I may contact you");
        return false;
    }
}

