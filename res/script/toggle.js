$(".switchMode").click(toggleClass);

function toggleClass(){
    $("body").toggleClass("dark");

    if($("body").hasClass('dark')) {
        $("#lightIcon").css("display", "none");
        $("#darkIcon").css("display", "block");
        $("#DarkMode").css("display", "none");
        $("#LightMode").css("display", "block");
    } else {
        $("#darkIcon").css("display", "none");
        $("#lightIcon").css("display", "block");
        $("#LightMode").css("display", "none");
        $("#DarkMode").css("display", "block");
    }
}

$("#darkIcon").css("display", "none");
$("#LightMode").css("display", "none");