//counter code
var button = document.getElementById('counter');

var counter = 0; 

button.onclick = function(){
    
    //make request to counter endpoint
    
    var request = new XMLHttprequest();
    
    
    //Capture request
    request.onreadystatechange = function(){ //checks current state of request object
      if(request.readyState === XMLHttpRequest.DONE )
      {
          //Take some action
          if(request.status===200){
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();           //Extract the value from request
          }
      }
         
         
         //Not done yet
    };
    
    
    request.open('GET','http://coderunner09.imad.hasura-app.io/counter',true);
    request.send(null);
    
    //Make the request
    
};