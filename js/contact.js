$(".contact-form").submit(function (e) {
    var url = "contact-form-sender.php";
    $.ajax({
        type: "POST",
        url: url,
        data: $(".contact-form").serialize(),
        success: function (data) {
            if (data == 0) {
                $(".contact-form-alert").html('<div class="alert alert-danger" role="alert">Coś poszło nie tak! Proszę sprawdzić formularz.</div>');
            }
            else if (data == 2) {
                $(".contact-form-alert").html('<div class="alert alert-danger" role="alert">Coś poszło nie tak! Proszę spróbować pożniej.</div>');
            }
            else if (data == 1) {
                $(".contact-form-alert").html('<div class="alert alert-success" role="alert">Wiadomość została wysłana pomyślnie!</div>');
                $(".contact-form").trigger('reset');
                $(".contact-form-alert").fadeOut(4000, function () {
                    $(".contact-form-alert").hide();
                });
            }
        }
    });
    e.preventDefault();
}); 