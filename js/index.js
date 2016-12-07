$(document).ready(function(){
  $('#button').click(function(){
    $(this).effect('explode').show(500);
  });
  
});

//“”
var quotes = [
  {quote:"I have learned that there is more power in a good strong hug than in a thousand meaningful words.",by:"Ann Hood"},
  {quote:"One day, in retrospect, the years of struggle will strike you as the most beautiful.",by:"Sigmund Freud"},
  {quote:"The thinking that got us to where we are is not the thinking that will get us to where we want to be",by:"Albert Einstein"},
  {quote:"Success is only meaningful and enjoyable if it feels like your own.",by:"Michelle Obama"},
  {quote:"Mundo will go where he pleases!",by:"Mundo"},
  {quote:"You can't milk those.",by:"Alistar"},
  {quote:"What is broken can be reforged",by:"Riven"},
  {quote:"I knew you'd do that.",by:"Zilean"},
  {quote:"There is life. There is death. And then there is me.",by:"Thresh"},
  {quote:"Tell me and I will forget. Show me and I will remember. Involve me and I will understand.",by:" Confucius"},
  {quote:"Anyone can deal with victory. Only the mighty can bear defeat.",by:"Adolf Hitler"}
  ];

//background: #b3dced;

var i =0;
var j = Math.floor(Math.random() * 12);
function newquote() {
document.getElementById("newQuote").innerHTML ="“"+quotes[i].quote+"”<br>- "+quotes[i].by;
  document.getElementById("hidealert").innerHTML = "";

 document.getElementById("button").style.backgroundColor = colors[i].color;
 // document.getElementById("button").style.fontFamily = fonts[i].font;
 document.getElementById("style").style.backgroundColor = colors[i].color;
document.getElementById("newQuote").style.fontFamily = fonts[j].font;  
 document.getElementById("tweet").href = tweet +"“"+quotes[i].quote+"” -"+quotes[i].by+"&hashtags=Quote";
  
  j+=Math.floor(Math.random() * 12);
  i++;
  if(i>=quotes.length){
    i=1;
  }
  if(j>=fonts.length){j=0;}
}
//document.body.addEventListener('click').JavaScript.i++;

var colors = [
  {color:'#b3dced'},
  {color:'#fcecfc'},
  {color:'#d4e4ef'},
  {color:'#efc5ca'},
  {color:'#E1F5C4'},//mundo5
  {color:"#FFBBFF"},
  {color:'#EEF3E2'},
  {color:'#FEEECD'},//8zil
   {color:'#43cea2'},
   {color:'#EEE9BF'},
  {color:'#FFA17F'}
 ];
    
var fonts =[
  {font:'Impact'},
  {font:'Palatino Linotype'},
  {font:'Tahoma'},
  {font:'Century Gothic'},
  {font:'Lucida Sans Unicode'},
  {font:'Arial Black'},
  {font:'Times New Roman'},
  {font:'Arial Narrow'},
  {font:'Verdana'},
  {font:'Copperplate'},
  {font:'Lucida Console'}
 ];
var tweet = "https://twitter.com/intent/tweet?text=";

/*function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";    
}
 document.getElementById("style").style.backgroundColor = randomColor(); */