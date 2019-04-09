

function onload(){
/* START NOTIFICATION BAR */
var notificationBar = document.createElement("div");
	notificationBar.id = "notificationBar"; 
	notificationBar.style.backgroundColor = "#e5e5e5";
	notificationBar.style.width = '100%';
	notificationBar.style.zIndex = '10';
	notificationBar.style.borderBottom = "solid .5px"

/* Notification contents div: contain text div and button div */
var notificationContent = document.createElement("div");
	notificationContent.id = "notificationContent";
	notificationContent.style.width = "100%";
	notificationContent.style.maxWidth = "720px";
	notificationContent.style.display = "flex";
	notificationContent.style.margin = "10px auto";

/* Notification text's div */
var notificationText = document.createElement("div");
	notificationText.id = 'notificationText';
	notificationText.style.width = "100%";
	notificationText.innerHTML = `By accessing and using this website, 
					you acknowledge that you have read and understand our `;

var links = ['Cookie Policy','Privacy Policy','Terms of Service'];

for(var i = 0; i < links.length; i++){
	var a = document.createElement("a");
		a.title = links[i];
		a.href = links[i];
		a.innerHTML = links[i];

	if(i != 2){
		notificationText.appendChild(a);
		notificationText.innerHTML += ", "
		
	}
	else{
		notificationText.innerHTML += " and our ";
		notificationText.appendChild(a);
		notificationText.innerHTML += ".";
	}
	
}

/* Notification button's div*/
var buttonDiv = document.createElement("div");
	buttonDiv.id = 'buttonDiv';
var notificationButton = document.createElement("button");
	notificationButton.id = "notificationButton";
	notificationButton.style.width = "100px";
	notificationButton.style.background = "#004a75";
	notificationButton.style.border = "none";
	notificationButton.style.color = "white";
	notificationButton.style.height = "100%";
	notificationButton.style.padding = '5px';
	notificationButton.style.margin = "5px 0px";
	notificationButton.appendChild(document.createTextNode("Got it"));

buttonDiv.appendChild(notificationButton);
notificationBar.appendChild(notificationContent);
notificationContent.appendChild(notificationText);
notificationContent.appendChild(buttonDiv);

document.getElementsByTagName("body")[0].appendChild(notificationBar);

/* END Notification Bar*/

let mainBody = document.createElement("div");
	mainBody.id = "mainBody";
	mainBody.style.width = '100%';
	mainBody.style.bottom = '0';
	mainBody.style.margin = '0';

/* PAGE HERO */

var pageHeroDiv = document.createElement("div");
	pageHeroDiv.id = 'pageHeroDiv';
	pageHeroDiv.style.boxShadow = 'inset 0 0 0 100vh rgba(0,74,117, .4)';
	pageHeroDiv.style.background = "url('./img/work-desk__dustin-lee.JPG') center";
	pageHeroDiv.style.backgroundSize = "cover";
	pageHeroDiv.style.backgroundRepeat = "no-repeat";
	pageHeroDiv.style.height = '500px';
	pageHeroDiv.style.width = '100%';
	pageHeroDiv.style.minWidth = '360px';

var pageHeroLogo = document.createElement("img");
	pageHeroLogo.src = './img/y-logo-white.PNG';
	pageHeroLogo.style.height = "50px";
	pageHeroLogo.style.margin = "15px";

var pageHeroContent = document.createElement("div");
	pageHeroContent.id = "pageHeroContent";
	pageHeroContent.style.fontFamily = 'Arial, Helvetica, sans-serif';
	pageHeroContent.style.color = "#ffffff";
	pageHeroContent.style.textAlign = 'center';
	pageHeroContent.style.top = "50%";
	pageHeroContent.style.left = "50%";
	pageHeroContent.style.transform = "translate(0%, 50%)";

var pageHeroName = document.createElement("h2");
	pageHeroName.innerHTML = "Hello! I'm Inka Arifin";
	pageHeroName.style.fontWeight = 'lighter';

var pageHeroWork = document.createElement("p");
	pageHeroWork.innerHTML = "Consult, Design, and Develop Websites";
	pageHeroWork.style.fontWeight = "bold";

var pageHeroSubtext = document.createElement("p");
	pageHeroSubtext.innerHTML = "Have something great in mind? Feel free to contact me.";
	pageHeroSubtext.appendChild(document.createElement("br"));
	pageHeroSubtext.innerHTML += "I'll help you to make it happen.";
	pageHeroSubtext.style.fontSize = "12px";

var pageHeroButton = document.createElement('button');
	pageHeroButton.id = "pageHeroButton";
	pageHeroButton.innerHTML = "LET'S MAKE CONTACT";
	pageHeroButton.style.background = 'transparent';
    pageHeroButton.style.width =  '200px';
    pageHeroButton.style.lineHeight =  '40px';
    pageHeroButton.style.border = '2px solid white';
    pageHeroButton.style.textAlign = 'center';
    pageHeroButton.style.padding = '5px 10px';
    pageHeroButton.style.color = '#fff';


pageHeroContent.appendChild(pageHeroName);
pageHeroContent.appendChild(pageHeroWork);
pageHeroContent.appendChild(pageHeroSubtext);
pageHeroContent.appendChild(pageHeroButton);
pageHeroDiv.appendChild(pageHeroLogo);
pageHeroDiv.appendChild(pageHeroContent);
mainBody.appendChild(pageHeroDiv);

/* END PAGE HERO */

/* START HIGHTLIGHTS PANEL */

var highlightsPanel = document.createElement("div");
	highlightsPanel.style.textAlign = 'center';
	highlightsPanel.style.padding = '5px 5px';
	highlightsPanel.style.backgroundColor = '#e5e5e5';
	highlightsPanel.style.margin = '0';	

var panelQuestion = document.createElement("h1");
	panelQuestion.innerHTML = 'How Can I Help You?';

var panelParagraph = document.createElement('p');
	panelParagraph.innerHTML = `Our work when targeted, best practices
						outcomes social innovation synergy. Venture 
						philanthropy, revolutionary inclusive policymaker relief.
						User-centered program areas scale.`;
	panelParagraph.style.maxWidth = '720px';
	panelParagraph.style.margin = "auto";

var panelContents = document.createElement("div");

var i = 0;

for (var content in panels){

	var panel = document.createElement("div");
		panel.classList.add('panelContents');

	var title = document.createElement("h4");
		title.innerHTML = Object.keys(panels)[i];
		panel.appendChild(title);

	var panelIcon = document.createElement('i');
	var	icon = panels[content]['icon'].split(' ');
		panelIcon.classList.add(icon[0], icon[1]);
		panel.appendChild(panelIcon);

	var panelContent = document.createElement('p');
		panelContent.innerHTML = panels[content]['content'];
		panel.appendChild(panelContent)

	panelContents.appendChild(panel);
	i++;
}

highlightsPanel.appendChild(panelQuestion);
highlightsPanel.appendChild(panelParagraph);
highlightsPanel.appendChild(panelContents);
mainBody.appendChild(highlightsPanel);

/* END HIGHLIGHT PANELS */

/* START FOOTER */

var footer = document.createElement('footer');
	footer.style.width = '100%';
	footer.style.backgroundColor = '#004a75';
	footer.style.margin = '0';

var footerContent = document.createElement('p');
	footerContent.style.margin = 'auto';
	footerContent.style.textAlign = 'center';
	footerContent.style.padding = '30px';
	footerContent.innerHTML = '&copy; 2019 Inka Arifin. All rights reserved.';
	footer.appendChild(footerContent);

/* END FOOTER*/

/* START NEWS LETTER */

var newsDiv = document.createElement("div");
	newsDiv.id = 'newsDiv';
	newsDiv.style.maxWidth = '640px';
	newsDiv.style.position = "fixed";
	newsDiv.style.bottom = '0';
	newsDiv.style.backgroundColor = 'rgba(0,74,117, .9)';
	newsDiv.style.padding = '20px';
	newsDiv.style.margin = '0';
	newsDiv.style.color = '#ffffff';
	newsDiv.style.display = "none";

var newsTitle = document.createElement("h3");
	newsTitle.innerHTML = "Get latest updates in web technologies";
	newsTitle.style.margin = "5px 2px";
	newsDiv.appendChild(newsTitle);

var newsSub = document.createElement('p');
	newsSub.innerHTML = `I write articles related to web technologies, 
				such as design trends, development tools, UI/UX case sudies and reviews,
				and more. Sign up to my newsletter to get them all.`;
	newsSub.style.margin = "5px 10px";
	newsDiv.appendChild(newsSub);

var newsClose = document.createElement("i");
	newsClose.id = "newsClose";
	newsClose.classList.add("fas", "fa-times");
	newsClose.style.position = "absolute";
	newsClose.style.color = '#ffffff';
	newsClose.style.top = '10px';
	newsClose.style.right = '10px';
	newsDiv.appendChild(newsClose);

var emailHolder = document.createElement("div");
	emailHolder.style.width = '100%';
	emailHolder.style.margin = 'auto';
	emailHolder.style.display = "flex";

var newsEmail = document.createElement('textarea');
	newsEmail.placeholder = "Email address";
	newsEmail.rows = '1';
	newsEmail.style.width = '60%';
	newsEmail.style.margin = '10px 5px';
	emailHolder.appendChild(newsEmail);

var newsButton = document.createElement("button");
	newsButton.id = "newsButton";
	newsButton.innerHTML = 'Count me in!';
	newsButton.style.width = '30%';
	newsButton.style.margin = '10px 5px';
	newsButton.style.border = 'none';
	newsButton.style.color = 'white';
	newsButton.style.background = "#cc6600";
	emailHolder.appendChild(newsButton);

newsDiv.appendChild(emailHolder);
mainBody.appendChild(newsDiv);

document.getElementsByTagName("body")[0].appendChild(mainBody);
document.getElementsByTagName("body")[0].appendChild(footer);

/* END NEWSLETTER DIV */

 function mediaWatcher(mediaWidth){
  // width less than 700px
    if (mediaWidth.matches){

      notificationContent.style.display = "grid"; 
      panelParagraph.style.margin = "10px 50px";

      emailHolder.style.display = 'grid';
      newsEmail.style.width = "100%";
      newsButton.style.width = "100%";

      notificationContent.style.width = "95%";
	  notificationContent.style.padding = "5px 15px";
	  notificationContent.style.margin = "0";
    }

    // width more than 700px
    else{
      notificationContent.style.display = "flex";

      emailHolder.style.width = "flex";
      newsEmail.style.width = "60%";
      newsButton.style.width = "30%";

      notificationContent.style.width = "100%";
      notificationContent.style.margin = "10px auto";
      notificationContent.style.padding = "0";
    }


}


  var media = window.matchMedia("(max-width: 700px)")
  mediaWatcher(media) // Call listener function at run time
  media.addListener(mediaWatcher) // Attach listener function on state changes 


}



