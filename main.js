

var userEmail = {
    theEmail:""
}

$(".Subscribe").on("click", function(){


    var email = $(".formInput").val();
    var emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/;

    if (emailRegex.test(email)){
        $(".formInput").removeClass("errorMode");
        $(".errorText").css("opacity", "0");
        userEmail.theEmail = email;
        $(".main").css("opacity", "0");
        $(".success").css("opacity", "1");
        success ();
       
    }
    else {
        $(".formInput").addClass("errorMode");
        $(".errorText").css("opacity", "1");
    }
})

function success (){

    var storedEmail = userEmail.theEmail

    $(".success p").html(`A confirmation email has been sent to  <strong> ${storedEmail}.<\/strong>
    Please open it and click the button inside to confirm your subscription.`);
}

$(".success h3").on("click", function(){
    $(".success").css("opacity", "0");
    $(".main").css("opacity", "1");
    $(".formInput").val("");
})

$(".Subscribe, .dismiss").on("mouseenter", function(){
    this.style.cursor = 'pointer';
    $(this).css("background", "linear-gradient(to right, hsla(349, 100%, 66%, 1), hsla(4, 100%, 67%, 1))");
})

$(".Subscribe, .dismiss").on("mouseleave", function() {
    $(this).css("background", ""); 
  });

// .formInput
$(".formInput").on("mouseenter", function(){
    this.style.cursor = 'pointer';
})