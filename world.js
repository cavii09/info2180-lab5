window.onload = function () {
    var httpRequest;
    var searchResult;
    var lookupBtn = document.getElementById("lookup");
    var lookupCit = document.getElementById("lookupcities");
  
    lookupBtn.addEventListener("click", function (element) {
      element.preventDefault();
   
      searchResult = document.getElementById("result");
      var country = document.getElementById("country").value;
  
      httpRequest = new XMLHttpRequest();
  
      var url = "world.php?country=" + country;
      httpRequest.onreadystatechange = searchBtn;
      httpRequest.open("GET", url);
      httpRequest.send();
    });
  
    function searchBtn() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          var response = httpRequest.responseText;
          searchResult.innerHTML = response;
        } else {
          alert("There was a problem with the request.");
        }
      }
    }

    lookupCit.addEventListener("click", function (element) {
        element.preventDefault();
    
        searchResult = document.getElementById("result");
        var country = document.getElementById("country").value;
    
        httpRequest = new XMLHttpRequest();
    
        var url = "world.php?country=" + country+"&context=cities";
        httpRequest.onreadystatechange = searchBtn;
        httpRequest.open("GET", url);
        httpRequest.send();
      });
    
      function searchBtn() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          if (httpRequest.status === 200) {
            var response = httpRequest.responseText;
            searchResult.innerHTML = response;
          } else {
            alert("There was a problem with the request.");
          }
        }
      }
  };



/*window.onload = function(){
    
    var lookupBtn = document.getElementById("lookup");
    var lookupcit = document.getElementById("lookupcities");

    lookupBtn.addEventListener('click', function(element){
     element.preventDefault();

     var searchResult = document.getElementById("result");
     var country = document.getElementById("country").value;

    var httpRequest = new XMLHttpRequest();
      
    var url = "http://localhost/info2180-lab5/index.html?country=" +country;
    httpRequest.onreadystatechange = searchBtn;
    httpRequest.open('GET', url);
    httpRequest.send();

});
    function searchBtn()
    {
        if(httpRequest.readyState == XMLHttpRequest.DONE){
            if(httpRequest.status == 200){
                var response = httpRequest.responseText;
                searchResult.innerHTML=response;
            }else{
                alert('There was a problem with the request.');
            }
        }
    }
    lookupcit.addEventListener('click', function(element){
        element.preventDefault();
        var httpRequest = new XMLHttpRequest();
        var url = "http://localhost/info2180-lab5/index.html?countries" +country+"&context=cities";
        httpRequest.onreadystatechange = function()
        {
            if(httpRequest.status == 200){
                var response = httpRequest.responseText;
                searchResult.innerHTML=response;
            }else{
                alert('There was a problem with the request');
            }
        }
        httpRequest.open('GET', url);
        httpRequest.send();
    });
}*/