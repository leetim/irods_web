function go(){
  $.ajax({
      url: "http://www.satellite.dvo.ru:2280/~sergdkv/irods.php?ls=/&json=1",
      dataType: "jsonp",
      success: function(res){
        for (var i = 0; i < res.length; i++){
          console.log(res[i])
        }
      }
  });
}


function foo(){
  console.log("foo")
}

function addScript(src) {
  var elem = document.createElement("script");
  elem.src = src;
  document.head.appendChild(elem);
}
