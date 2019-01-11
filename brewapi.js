 document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick=function(){
      var mystate = document.getElementById('mystate').value;
      //var mystate="ohio";
      var parturl='https://api.openbrewerydb.org/breweries?by_state=';
      var fullurl = parturl + mystate;
      req=new XMLHttpRequest();
      req.open("GET",fullurl,true);
      req.send();
      req.onload=function(){
        json=JSON.parse(req.responseText);
        var html = "";
        json.forEach(function(val) {
         // if (val.name=="Brick and Barrel"){
          html += "<div class = 'cat'>";
                  //  html += val.name + "," ;
          html += val.name + " - " + val.street + " " + val.city + ", " + val.state + " " + val.postal_code;
          
          html += "</div><br>";
        //  };
        });
        document.getElementsByClassName('message')[0].innerHTML=html;
      };
     };
  });
