

  function getTimeDifference(sessionName){
    var cermatiSession = sessionStorage.getItem(sessionName);
    var currentTime = (new Date()).getMinutes();
    var timeDifference;

    if(cermatiSession){

      timeDifference =  currentTime - cermatiSession;

      if(timeDifference < 0){ 
          timeDifference += 60; 
      }
    }
    else timeDifference = -1;
    
    console.log(timeDifference);    
    return timeDifference;
  }

  // refreshed every n minutes when page is not reloaded
  // n minutes * seconds * miliseconds
  setInterval(function(){
    sessionStorage.removeItem('CermatiCookie');
    console.log("from set interval " + new Date());
  }, 10 * 60 * 10000); 