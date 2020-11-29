export function setLandingPageDimensions(hideSideNav) {

  //Adjust movie screen dimensions when toggling sidebar
  let welcomeBackgroundImage = document.getElementById("landingPageContainer");
  if (hideSideNav) {
  //sidenav is being hidden
    welcomeBackgroundImage.setAttribute("style", "width: 90vw; top:-7%");
  }else {
  //sidenav is being shown
    welcomeBackgroundImage.setAttribute("style", "width: 86vw");
  }

}
