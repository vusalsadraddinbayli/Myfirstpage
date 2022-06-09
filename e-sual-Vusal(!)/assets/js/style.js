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

