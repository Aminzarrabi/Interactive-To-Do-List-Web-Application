var n=1;
var item=1;
function fun() {
  var x = document.getElementById("id2").value;
  if(n>10 && item>10)
  {
    alert("You Reached The Maximum Options");
    return 0;
  }
  if(x=="")
    alert("You Have To Type Something First ! ");
  else
  {
    document.getElementById("id2").value="";
    var paren=document.getElementById("par");

    var p= document.createElement("p");
    var txt=document.createTextNode("-  "+x+" -");
    p.appendChild(txt);
    paren.appendChild(p);
    
    var b=document.createElement("p");
    var txt1=document.createTextNode("X");
    b.appendChild(txt1);
    paren.appendChild(b);
    
    b.setAttribute("class","butt")
    b.setAttribute("onclick","FUN(this)")
    b.setAttribute("id","x"+n);
    p.setAttribute("id","p"+n);
    n++; 
    item++;
  }
}
function FUN(obj) {
  
  var j=((obj.getAttribute("id")).charAt(1)) ;
  var u=((obj.getAttribute("id")).charAt(2)) ;
  console.log(j+u);
  var y=Number(j+u);

  var paren=document.getElementById("par");

  var temp=document.getElementById("p"+y);
  paren.removeChild(temp);
  
  var temp=document.getElementById("x"+y);
  paren.removeChild(temp);
  item--;
}
function rem() {
  if(item>1){
  for( let i=1;i<item;)
  {
    var paren=document.getElementById("par");

    var temp=document.querySelector("p:last-child");
    paren.removeChild(temp);

    var temp1=document.querySelector("p:last-child");
    paren.removeChild(temp1);
    item--;
    n--
  }
  }
  else{
    alert("There Is No Item To Delete !");
  }
}
