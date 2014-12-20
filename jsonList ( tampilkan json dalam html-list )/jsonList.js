function jsonList(a,b,cb,c){ 
  function rekursi(a){
    s+='<ul>';
    for(var i in a)
      if(c===undefined || typeof a[i]==='object'){      
        s+='<li><span>'+i+'</span>';
        rekursi(a[i]);
        s+='</li>';
      }
    s+='</ul>'
  }
  function rndr(){
      s='';
      rekursi(a);
      if(s!==ss){
        f.innerHTML=s;
        ss=s;
      }
    setTimeout(rndr,200)
  }
  var s='',ss='';
  var f=document.getElementById(b);
  rndr();
  f.onclick=function(e){
    e=e||event;
    var f=e.srcElement||e.target;
    if(f.tagName==='SPAN'){
      var g=f.nextSibling.style;
      g.display=g.display==='none'?'block':'none';
      var s=[];
      do{
        s.push(f.innerHTML);
        f=f.parentNode.parentNode.previousSibling
      }while(f)
      cb(s.reverse());
    }
  }
}
