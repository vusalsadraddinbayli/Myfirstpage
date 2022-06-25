$(document).ready(function() {
    //Comments toggle
    $(".comment").click(function(){
        $(this).closest(".second-part").find(".comments-toggle-boxes").removeClass("d-none")
        $(this).closest(".second-part").find(".comments-toggle-boxes").addClass("d-none")
    })
    $(".comment").click(function(){
        $(this).closest(".second-part").find(".comments-toggle-boxes").removeClass("d-block")
        $(this).closest(".second-part").find(".comments-toggle-boxes").addClass("d-none")
    })

    $(".comment").click(function() {
        $(this).closest(".second-part").find(".comments-toggle-boxes").fadeToggle("slow");
    });
    $('.favorit').click(function() {
        if($(this).find('i').attr('class') == 'fa-regular fa-heart'){
            $(this).find('i').removeClass('fa-regular fa-heart')
            $(this).find('i').addClass('fa-solid fa-heart')
        }
        else{
            $(this).find('i').removeClass('fa-solid fa-heart')
            $(this).find('i').addClass('fa-regular fa-heart')
        
        }
    }) 
    
});

// register
$(document).ready(function() {
    const password = $('#password');
    $('#eye').click(function() {
        if (password.prop('type') == 'password') {
            $(this).removeClass('fa-solid fa-eye-slash');
            $(this).addClass('fa-solid fa-eye');
            password.attr('type', 'text');
        } else {
            $(this).removeClass('fa-solid fa-eye');
            $(this).addClass('fa-solid fa-eye-slash');
            password.attr('type', 'password');
        }
    });
});
$(document).ready(function() {
    const password = $('#password2');
    $('#eye2').click(function() {
        if (password.prop('type') == 'password') {
            $(this).removeClass('fa-solid fa-eye-slash');
            $(this).addClass('fa-solid fa-eye');
            password.attr('type', 'text');
        } else {
            $(this).removeClass('fa-solid fa-eye');
            $(this).addClass('fa-solid fa-eye-slash');
            password.attr('type', 'password');
        }
    })
});
$(document).ready(function() {
    const password = $('#password3');
    $('#eye3').click(function() {
        if (password.prop('type') == 'password') {
            $(this).removeClass('fa-solid fa-eye-slash');
            $(this).addClass('fa-solid fa-eye');
            password.attr('type', 'text');
        } else {
            $(this).removeClass('fa-solid fa-eye');
            $(this).addClass('fa-solid fa-eye-slash');
            password.attr('type', 'password');
        }
    })
});
$(document).ready(function() {
    $("#password2").keyup(function() {
        $(".pass-msg").empty();
        $pass2 = $("#password2").val();
        $pass3 = $("#password3").val();
        if ($pass2 == $pass3) {
            $(".pass-msg").append(" <b>Şifrə düzgündür</b>.");
            $(".pass-msg").css("color", "#586EFF");
        } else {
            $(".pass-msg").append(" <b>Şifrə düzgün deyil</b>.");
            $(".pass-msg").css("color", "red");
        }
    });
    $("#password3").keyup(function() {
        $(".pass-msg").empty();
        $pass2 = $("#password2").val();
        $pass3 = $("#password3").val();
        if ($pass2 == $pass3) {
            $(".pass-msg").append(" <b>Şifrə düzgündür</b>.");
            $(".pass-msg").css("color", "#586EFF");
        } else {
            $(".pass-msg").append(" <b>Şifrə düzgün deyil</b>.");
            $(".pass-msg").css("color", "red");
        }
    });
});