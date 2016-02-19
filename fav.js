
$().ready(function () {
	$("#favourites").hide();
	$("#deleteFav").hide();
	
    $("#favouriteButton").click(function(){
        $("#favourites").fadeToggle();
    });
	checkFavourites();
    loadFavourites();

});


function getFavourite(){
empty = $("#noFav").html("");
name = $('.productname').html();

    if ($("#output:not(:contains('" + name + "'))").length > 0) {
		$('#output').append('<label class="favourites">'  + '<a href="' + window.location.href + '">' + name + '</a>'
		+ '<input type="checkbox" onchange="showDel()">' + '<br/>' +'</label>');  
            $("#favourites").show();
    }
        else
		
    {
			$("#favourites").show();
            return false +  alert("Already added to favourites")
      
    }
    saveFavourites();

}

function showDel() {
	 if ($("input:checked")) {
		 $("#deleteFav").show();
	 }
	 
}
 
function deleteFav() {
$(".favourites input:checked").parent().remove();
saveFavourites();
checkFavourites();
};


function checkFavourites() {

	if($("#output").html().length==0)
	{
		$("#noFav").html("No favourites added");
	}
	else {
		$("#noFav").html("");
	}
};



function saveFavourites(){

    var blank = $("#output").html=="";
    if(name !== ""){
        localStorage[name] = $("#output").html();
        
    }
    else{ name == ""}
    localStorage[blank] = $("#output").html();
    $("output").html(blank)



}


function loadFavourites(){

    var blank = $("#output").html="";

    if(name !== ""){
        $("#output").html(localStorage[name]);
    }
    else {(name == "")
        $("#output").html(localStorage[blank])
    }

}






