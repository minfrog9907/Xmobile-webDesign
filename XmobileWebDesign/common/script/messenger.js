var tab = 1;

$(document).ready(function () {	
	$('#goFriends').click(
		function () {
			"hello"
		});
});
    
$(document).ready(function () {	
	$('#goChats').click(
		function () {
			tab = 0;
            $("goChats").find("src").attr("src", "../common/images/avatar_dark.png");
		});
});