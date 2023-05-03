


$(".field-username .help-block:nth-child(3)").html("Required. 150 characters or fewer. Letters only.");



let input_text = document.getElementById('id_username');

$(".form-group").click(function () {
    var letters = /^[A-Za-z]+$/;
    if (document.getElementById('id_username').value.match(letters)) {
        return true;

    }
    else {
        $(".alert-danger").html("Username should only contain letters.");
        return false;

    }
});
