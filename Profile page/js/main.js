

$('.portfolio').masonry({
  // options
  itemSelector: '.col-md-4',
  percentPosition: true
});


$(window).load(function () {
	$(".loaded").fadeOut();
	$(".preloader").delay(1000).fadeOut("slow");
});


 function myMove() {
  var elem = document.getElementById("headerarea");
  var pos = 600;
  var id = setInterval(frame, 0);

  function frame() {
    if (pos == 0) {
      clearInterval(id);
    } else {
      pos--;
      //elem.style.width = pos + 'px'; 
      elem.style.height = pos + 'px';
      //elem1.style.top = pos + 'px';
      //elem2.style.top = pos + 'px';
     }
  }
}

$(document).ready(function(){
    $("button").click(function(){
        $(".hide0").empty(); //remove() can be used here too
    });
});

$(document).ready(function(){
    $("button").click(function(){
        $(".hide1").empty();
    });
});

$(document).ready(function(){
    $("button").click(function(){
        $(".hide2").empty();
    });
});



/* function myMovee() {
    var p_list = document.getElementsByTagName("p");
    var p1_list = document.getElementsByTagName("h2");
    var p2_list = document.getElementsByTagName("h3");
    
    for(var i=p_list.length-1; i>=0; i--){
        var p = p_list[i];
        
        if(p.className == "hide2"){
            p.parentNode.removeChild(p);
        }
     }
     
     for(var j=p1_list.length-1; j>=0; j--){
        var p1 = p1_list[j];
        if(p1.className=="hide0"){
        	p1.parentNode.removeChild(p1);
        }
     }
     
     for(k=p2_list.length-1; k>=0; k--){
     	var p2 = p2_list[k];
        if(p2.className=="hide1"){
        	p2.parentNode.removeChild(p2);
        }
    }
}*/