
$(document).ready(function(){
  
  var flagNotif = true;	// to check if Notification Bar is on display or not. True: on display. False: hidden.
  var flagNews = true; 	// True: never closed. False: closed.  
  var mainBodyHeight = $('#mainBody').outerHeight(true);
  var notificationBarHeight = $('#notificationBar').outerHeight(true);
  
  /*   EVENTS    */


  // Notification Bar div action.
  $("#notificationButton").click(function(){
    $("#notificationBar").slideUp("slow");
    $("#notificationContent").slideUp("slow");
    $('#mainBody')
      .css({'position' : 'relative'})
      .animate({'top': 0}, "slow");
      flagNotif = false;
  });

  // Hero Button hover.
  $("#pageHeroButton").on({
    mouseenter: function(){
      $(this).css(
        {'background':'white',
        'color':'#004a75'});
    },
    mouseout: function(){
      $(this).css(
        {'background':'transparent',
        'color':'white'});
  }});
  

//  News Letter div action.
  $("#newsClose").on({
    mouseenter: function(){
      $(this).css('color', 'black');
    },
    mouseout: function(){
      $(this).css('color', 'white');
    },
    click: function(){
      $('#newsDiv').slideUp('slow');
      sessionStorage.setItem('CermatiCookie', (new Date()).getMinutes());
      flagNews = false;
    }
  });

  $("#newsButton").on({
    click: function(){
      $('#newsDiv').slideUp('slow');
      sessionStorage.setItem('CermatiCookie', (new Date()).getMinutes());
      flagNews = false;
    }
  });



  function scrollEvents(){
 	    var windowScrollTop = $(window).scrollTop();
 	
 	// for notification bar
  	if((windowScrollTop >= 0) && flagNotif){

  		if(windowScrollTop < notificationBarHeight){
	  		$('#notificationBar').css({
	  			'position':'fixed',
	  			'z-index':'10'	
	  		});

	  		$('#mainBody').css({
	  			'position' : 'relative',
	  			'top' : (notificationBarHeight - windowScrollTop),
	  			'width':'100%'
	  		});
	  	}

  	}
  	else if((windowScrollTop == 0) && flagNotif){
  		$('mainBody').css({
  			'position': 'relative'});
  	}

  	else {
  		$('#mainBody').css({
  			'position':'relative',
  			'top': '0',
  			'bottom' :'0'
  		});
  	};

  // console.log(getTimeDifference('CermatiCookie') +" " + flagNews);
  // check if cookie has expired
  if( (getTimeDifference('CermatiCookie') > 10) || (getTimeDifference('CermatiCookie') < 0)) {
    // Display newsletter div after 1/3 of body height.
	  	if ((windowScrollTop > (.3 * mainBodyHeight)) && flagNews){
	  		$('#newsDiv').slideDown("slow");
	  	}
	}

  }

  $(window).scroll(scrollEvents);
  scrollEvents();

  

});
