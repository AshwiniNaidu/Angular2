

function mainMsg(e)
{
  var xhttp = new XMLHttpRequest();
  xhttp.addEventListener("load", function(){
        var res = parseFloat(JSON.parse(xhttp.responseText).rates[e.data.output]) * e.data.units;
        self.postMessage(res);
  });

xhttp.open("GET", "http://api.fixer.io/latest?base="+ e.data.input + "&symbols" +e.data.output, true);
xhttp.send();
}

function errorHandler(e)
{
  console.log(e.message,e);
}

self.addEventListener("message",mainMsg,true);
self.addEventListener("error",errorHandler,true);
