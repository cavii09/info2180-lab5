window.onload = function(){
    
    var lookupBtn = document.getElementById("lookup");
   
    lookupBtn.addEventListener('click', function(element){
     element.preventDefault();

     var searchResult = document.getElementById("result");
     var country = document.getElementById("country").value;

    var httpRequest = new XMLHttpRequest();
      
    var url = "world.php?country " +country;
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
}