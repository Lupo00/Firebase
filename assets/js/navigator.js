var curPage = "homePage"

function movePage(nextPage) {
  if(nextPage == curPage){
      return;
  }
  var curPageElement = document.getElementById(curPage);
  var nextPageElement = document.getElementById(nextPage);
  nextPageElement.style.display="";
  // var curPageLoaderElement = document.getElementById(curPage+"Loader")
  // curPageLoaderElement.classList.toggle("hide");
  setTimeout(function() {
   // curPageLoaderElement.classList.toggle("hide");
   curPageElement.classList.toggle("hide");
  nextPageElement.classList.toggle("hide");

  curPage = nextPage;
    }, 500);
   setTimeout(function() { curPageElement.style.display="none";} ,1000);
}