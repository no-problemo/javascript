function jsonList(a,b,cb,c){ 
  function rekursi(a){
    var klik='';
    s+='<ul>';
    for(var i in a){
      if(i=='_'){if(a._==0)break;else continue}
      klik='';
      if(i==u[j]){j++;if(j==u.length){j=0;klik='klik '}}
      if(c==undefined || typeof a[i]=='object'){
        s+='<li><span class="'+klik+(typeof a[i]=='object'?'branch':'leaf')+'" >'+i+'</span>';
        rekursi(a[i]);
        s+='</li>';
      }
    }
    s+='</ul>'
  }
  function rndr(){
    s='';
    rekursi(a);
    if(s!=t){
      f.innerHTML=s;
      t=s
    }
    setTimeout(rndr,300)
  }
  var s='',t='',u=[],j=0;
  var f=document.getElementById(b);
  rndr();
  f.onclick=function(e){
    e=e||event;
    var f=e.srcElement||e.target;
    if(f.tagName==='SPAN'){
      u=[];
      do{
        u.unshift(f.innerHTML);
        f=f.parentNode.parentNode.previousSibling
      }while(f)
      var ptr=a;
      for(var i in u)ptr=ptr[u[i]];
      if(typeof ptr === 'object' && '_' in ptr)ptr._^=1;
      cb(u,ptr);
    }
  }
}

var json={'1level1':{_:1,'1level2(leaf)':0,'2level2':{_:1,'1level3':{_:1,'1level4(leaf)':0,'2level4':{_:1,'1level5(leaf)':0},'3level4(leaf)':0}},'3level2(leaf)':0},'2level1':{_:1,'1level2(leaf)':0,'2level2':{_:1,'1level3(leaf)':0},'3level2(leaf)':0},'3level1':{_:1,'1level2(leaf)':0,'2level2':{_:1,'1level3(leaf)':0},'3level2(leaf)':0}};
var refer={};
jsonList(json,'holder',function(a,c){
  path.innerHTML=a.join('>')+' :';
  refer=c;
})
function addItem(z,b){
  var a=z.innerHTML.split(': ');
  if(typeof refer!=='object'){alert('tidak bisa tambah item di leaf');return 0}
  refer[a[1]]=b;
  a[1]=Math.random()+(b===0?'(leaf)':'');
  z.innerHTML=a.join(': ')
}
