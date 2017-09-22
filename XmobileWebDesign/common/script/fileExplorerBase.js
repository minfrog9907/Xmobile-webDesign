window.onload = function(){
    
    $(".searchFile").on("click",function(){
        $(".searchInput").focusin();
    })
    
    $(".SOBtn").on("click",function(){
        $(".searchOptionForm").slideToggle();
        $(this).toggleClass("SOshow");
    })
}