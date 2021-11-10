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
