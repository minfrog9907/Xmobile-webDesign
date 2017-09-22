window.onload = function(){
    $("#login_form").on("submit",function(event){
        event.preventDefault();
        var loginData = $(this).serialize();
        $.ajax({
            url:"",
            type:"POST",
            data:loginData,
            success:function(event){
                console.log(event);
            },
            error:function(){
                console.log("Error");
            }
        })
    });
}