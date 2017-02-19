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
    
    
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    var submit = document.getElementById('submit_btn');
    submit.onclick = function(){
    
    // Capture a list of names and render it as a list
    var names = ['name1','name2','name3','name4'];
    var list = '';
    
    for(var i=0;i<names.length;i++){
        
        list += '<li>' + names[i] + '</li>';
    
        
    }

    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
    };
};