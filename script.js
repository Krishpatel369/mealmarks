(function(){
'use strict';
var NS='xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 90" width="480" height="360"';
var MEALS=[
 {id:'breakfast',label:'Breakfast',tint:'#FFF0CC',ink:'#6B4E0A',ph:'Oats with banana',
  svg:'<svg '+NS+'><ellipse cx="60" cy="54" rx="53" ry="33" fill="#fff" stroke="#EAD8A8" stroke-width="2"/><ellipse cx="38" cy="54" rx="14" ry="9" fill="#FFFDF5" stroke="#E8DDBF" stroke-width="1.5"/><path d="M28 52c4-3 16-3 20 0" stroke="#EADFC4" stroke-width="1.5" fill="none" stroke-linecap="round"/><ellipse cx="58" cy="46" rx="14" ry="9" fill="#FFFDF5" stroke="#E8DDBF" stroke-width="1.5"/><path d="M48 44c4-3 16-3 20 0" stroke="#EADFC4" stroke-width="1.5" fill="none" stroke-linecap="round"/><ellipse cx="52" cy="63" rx="14" ry="9" fill="#FFFDF5" stroke="#E8DDBF" stroke-width="1.5"/><path d="M42 61c4-3 16-3 20 0" stroke="#EADFC4" stroke-width="1.5" fill="none" stroke-linecap="round"/><circle cx="90" cy="48" r="15" fill="#fff" stroke="#EAD8A8" stroke-width="2"/><circle cx="90" cy="48" r="12" fill="#E8943A"/><circle cx="85" cy="45" r="2.5" fill="#7FAE45"/><circle cx="93" cy="50" r="2.5" fill="#F6D36B"/><circle cx="89" cy="54" r="2" fill="#7FAE45"/><circle cx="94" cy="43" r="2" fill="#C8512E"/><circle cx="84" cy="70" r="6" fill="#8FCB9B"/><circle cx="84" cy="70" r="3.5" fill="#B8E3C0"/></svg>'},
 {id:'lunch',label:'Lunch',tint:'#DDF4E4',ink:'#1E5A36',ph:'Dal, rice and salad',
  svg:'<svg '+NS+'><circle cx="60" cy="46" r="42" fill="#F2F5F6" stroke="#C9D4D8" stroke-width="2"/><circle cx="60" cy="46" r="34" fill="none" stroke="#DDE5E8" stroke-width="1.5"/><circle cx="38" cy="30" r="10" fill="#fff" stroke="#C9D4D8" stroke-width="1.5"/><circle cx="38" cy="30" r="7.5" fill="#F4C04A"/><circle cx="62" cy="22" r="10" fill="#fff" stroke="#C9D4D8" stroke-width="1.5"/><circle cx="62" cy="22" r="7.5" fill="#8FCB9B"/><circle cx="60" cy="19" r="1.8" fill="#5FA871"/><circle cx="65" cy="25" r="1.8" fill="#5FA871"/><circle cx="84" cy="30" r="10" fill="#fff" stroke="#C9D4D8" stroke-width="1.5"/><circle cx="84" cy="30" r="7.5" fill="#F08A4B"/><ellipse cx="52" cy="56" rx="16" ry="11" fill="#fff" stroke="#E3E8EA" stroke-width="1.5"/><circle cx="48" cy="53" r="1.2" fill="#E3E8EA"/><circle cx="55" cy="51" r="1.2" fill="#E3E8EA"/><circle cx="54" cy="58" r="1.2" fill="#E3E8EA"/><circle cx="86" cy="58" r="12" fill="#E9C98E" stroke="#D9B070" stroke-width="1.5"/><circle cx="82" cy="55" r="2" fill="#C9954A"/><circle cx="90" cy="61" r="2" fill="#C9954A"/><circle cx="32" cy="62" r="7" fill="#F0786A"/><circle cx="32" cy="62" r="3" fill="#F7A99F"/></svg>'},
 {id:'dinner',label:'Dinner',tint:'#E4E9FC',ink:'#2F3A78',ph:'Paneer curry and roti',
  svg:'<svg '+NS+'><ellipse cx="60" cy="52" rx="54" ry="34" fill="#fff" stroke="#C9D2F2" stroke-width="2"/><circle cx="48" cy="50" r="20" fill="#fff" stroke="#C9D2F2" stroke-width="2"/><circle cx="48" cy="50" r="16" fill="#7DB66B"/><rect x="38" y="42" width="9" height="9" rx="2" fill="#FFF6DC" transform="rotate(-12 42 46)"/><rect x="50" y="40" width="9" height="9" rx="2" fill="#FFF6DC" transform="rotate(10 54 44)"/><rect x="44" y="53" width="9" height="9" rx="2" fill="#FFF6DC" transform="rotate(6 48 57)"/><circle cx="92" cy="58" r="15" fill="#E9C98E" stroke="#D9B070" stroke-width="1.5"/><circle cx="88" cy="53" r="15" fill="#F0D6A0" stroke="#D9B070" stroke-width="1.5"/><circle cx="83" cy="50" r="2" fill="#C9954A"/><circle cx="92" cy="57" r="2" fill="#C9954A"/><circle cx="90" cy="47" r="1.6" fill="#C9954A"/><circle cx="25" cy="66" r="6" fill="none" stroke="#C77DA6" stroke-width="3"/><circle cx="25" cy="66" r="1.5" fill="#E7B7D1"/></svg>'},
 {id:'snacks',label:'Snacks',tint:'#FFE2DB',ink:'#7A3322',ph:'Fruit chaat',
  svg:'<svg '+NS+'><rect x="28" y="30" width="15" height="15" rx="3" fill="#F2877A" transform="rotate(-10 35 37)"/><rect x="47" y="22" width="15" height="15" rx="3" fill="#F7C45E" transform="rotate(8 54 29)"/><circle cx="74" cy="32" r="9" fill="#8FCB9B"/><circle cx="74" cy="32" r="3.5" fill="#EAF6D6"/><circle cx="90" cy="40" r="6" fill="#9B7BC8"/><circle cx="38" cy="46" r="5" fill="#9B7BC8"/><circle cx="58" cy="42" r="2.5" fill="#D9475A"/><circle cx="65" cy="40" r="2.5" fill="#D9475A"/><circle cx="52" cy="40" r="2.5" fill="#D9475A"/><path d="M16 44h88c0 26-19 40-44 40S16 70 16 44z" fill="#fff" stroke="#F2C0B5" stroke-width="2"/><path d="M28 58h64" stroke="#FFE2DB" stroke-width="4" stroke-linecap="round"/></svg>'}
];
var ICON_UP='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 16V5"/><path d="M7 9l5-5 5 5"/><path d="M5 20h14"/></svg>';
var ICON_CAM='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>';

var KEY='daily-plate-v1',MAXP=6,store={};
try{store=JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(e){store={}}
var $=function(id){return document.getElementById(id)};
var grid=$('grid'),toastEl=$('toast'),toastT;
function toast(msg){toastEl.textContent=msg;toastEl.classList.add('on');clearTimeout(toastT);toastT=setTimeout(function(){toastEl.classList.remove('on')},2800)}
function save(){try{localStorage.setItem(KEY,JSON.stringify(store));return true}catch(e){toast('Storage is full. Remove a photo to save more.');return false}}
function pad(n){return String(n).padStart(2,'0')}
function ymd(d){return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate())}
function parse(s){var p=s.split('-');return new Date(+p[0],+p[1]-1,+p[2])}
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
var cur=ymd(new Date());
function dayData(d){
  if(!store[d])store[d]={};
  MEALS.forEach(function(m){
    var e=store[d][m.id];
    if(!e)e=store[d][m.id]={};
    if(!Array.isArray(e.items))e.items=[];
    if(!Array.isArray(e.photos))e.photos=[];
    if('photo' in e){if(e.photo)e.photos.unshift(e.photo);delete e.photo}
  });
  return store[d];
}

function cardHTML(m,d){
  var e=dayData(d)[m.id],n=e.photos.length;
  var shot=n?'<img src="'+e.photos[0]+'" alt="'+m.label+' photo">':'<div class="art" role="img" aria-label="'+m.label+' illustration">'+m.svg+'</div>';
  var more=n>1?'<span class="more">+'+(n-1)+' more</span>':'';
  var thumbs=n?'<div class="thumbs">'+e.photos.map(function(u,i){
    return '<div class="tb'+(i===0?' cover':'')+'"><button type="button" class="tbi" data-act="cover" data-i="'+i+'" aria-label="Use photo '+(i+1)+' as cover"><img src="'+u+'" alt=""></button><button type="button" class="x tbx" data-act="rmphoto" data-i="'+i+'" aria-label="Remove photo '+(i+1)+'">&times;</button></div>';
  }).join('')+'</div>':'';
  var items=e.items.map(function(it,i){
    return '<li><span>'+esc(it.name)+'</span><button type="button" class="x" data-act="del" data-i="'+i+'" aria-label="Remove '+esc(it.name)+'">&times;</button></li>';
  }).join('')||'<li class="empty">Nothing logged yet.</li>';
  return '<article class="card" data-meal="'+m.id+'">'+
    '<div class="shot">'+shot+'<span class="tag">'+(n?(n>1?'Your photos':'Your photo'):'Sample art')+'</span>'+more+'</div>'+
    '<div class="body">'+
      '<h2>'+m.label+'</h2>'+
      '<div class="btns"><button type="button" data-act="upload" aria-label="Upload photos for '+m.label+'">'+ICON_UP+'Upload</button><button type="button" data-act="capture" aria-label="Capture a photo for '+m.label+'">'+ICON_CAM+'Capture</button></div>'+
      thumbs+
      '<ul class="items">'+items+'</ul>'+
      '<form class="add"><input name="name" placeholder="'+esc(m.ph)+'" maxlength="80" required aria-label="Food for '+m.label+'"><button type="submit">Add</button></form>'+
    '</div></article>';
}
function render(){
  $('day').value=cur;
  grid.innerHTML=MEALS.map(function(m){return cardHTML(m,cur)}).join('');
  var dd=dayData(cur),ph=0;
  MEALS.forEach(function(m){ph+=dd[m.id].photos.length});
  $('sPhotos').textContent=ph;
}
function shiftDay(n){var d=parse(cur);d.setDate(d.getDate()+n);cur=ymd(d);render()}
$('prev').onclick=function(){shiftDay(-1)};
$('next').onclick=function(){shiftDay(1)};
$('today').onclick=function(){cur=ymd(new Date());render()};
$('day').onchange=function(){if(this.value){cur=this.value;render()}};

/* photos */
var pending=null,stream=null;
var fileUp=$('fileUp'),fileCam=$('fileCam'),camDlg=$('camDlg'),camVid=$('camVid');
function shrink(src,w,h,max){
  var s=Math.min(1,max/Math.max(w,h)),c=document.createElement('canvas');
  c.width=Math.max(1,Math.round(w*s));c.height=Math.max(1,Math.round(h*s));
  var x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);
  x.drawImage(src,0,0,c.width,c.height);
  return c.toDataURL('image/jpeg',0.78);
}
function loadImg(src){return new Promise(function(res,rej){var im=new Image();im.onload=function(){res(im)};im.onerror=rej;im.src=src})}
function addPhotos(date,meal,urls){
  var e=dayData(date)[meal],had=e.photos.length,oldPt=e.pt;
  urls.forEach(function(u){e.photos.push(u)});
  if(!e.pt)e.pt=Date.now();
  if(!save()){e.photos.length=had;e.pt=oldPt;render();return}
  toast(urls.length===1?'Photo added':urls.length+' photos added');
  render();
}
function readFiles(files,meal){
  var list=Array.prototype.slice.call(files);
  if(!list.length)return;
  var date=cur,room=MAXP-dayData(date)[meal].photos.length;
  if(room<=0){toast('Up to '+MAXP+' photos per meal.');return}
  if(list.length>room)toast('Adding the first '+room+'. Up to '+MAXP+' photos per meal.');
  Promise.all(list.slice(0,room).map(function(f){
    var u=URL.createObjectURL(f);
    return loadImg(u).then(function(im){URL.revokeObjectURL(u);return shrink(im,im.naturalWidth,im.naturalHeight,800)})
      .catch(function(){URL.revokeObjectURL(u);return null});
  })).then(function(urls){
    urls=urls.filter(Boolean);
    if(!urls.length){toast("Those files couldn't be read as images.");return}
    addPhotos(date,meal,urls);
  });
}
fileUp.onchange=function(){readFiles(this.files,pending);this.value=''};
fileCam.onchange=function(){readFiles(this.files,pending);this.value=''};
function stopCam(){if(stream){stream.getTracks().forEach(function(t){t.stop()});stream=null}camVid.srcObject=null}
function camCount(){$('camMsg').textContent=dayData(cur)[pending].photos.length+' of '+MAXP+' photos added'}
function capture(){
  if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){fileCam.click();return}
  navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'}},audio:false}).then(function(s){
    stream=s;camVid.srcObject=s;camCount();camDlg.showModal();
  }).catch(function(){fileCam.click()});
}
$('camSnap').onclick=function(){
  if(!camVid.videoWidth){$('camMsg').textContent='Camera is still starting. Try again.';return}
  if(dayData(cur)[pending].photos.length>=MAXP){camCount();return}
  addPhotos(cur,pending,[shrink(camVid,camVid.videoWidth,camVid.videoHeight,800)]);
  camCount();
};
$('camCancel').onclick=function(){camDlg.close()};
camDlg.addEventListener('close',stopCam);

grid.addEventListener('click',function(ev){
  var b=ev.target.closest('[data-act]');if(!b)return;
  var meal=b.closest('.card').dataset.meal,act=b.dataset.act,e=dayData(cur)[meal];
  pending=meal;
  if(act==='upload')fileUp.click();
  else if(act==='capture')capture();
  else if(act==='cover'){var p=e.photos.splice(+b.dataset.i,1)[0];e.photos.unshift(p);save();render()}
  else if(act==='rmphoto'){e.photos.splice(+b.dataset.i,1);if(!e.photos.length&&!e.items.length)delete e.pt;save();render()}
  else if(act==='del'){e.items.splice(+b.dataset.i,1);if(!e.photos.length&&!e.items.length)delete e.pt;save();render()}
});
grid.addEventListener('submit',function(ev){
  ev.preventDefault();
  var f=ev.target,meal=f.closest('.card').dataset.meal;
  var name=f.elements.name.value.trim();if(!name)return;
  dayData(cur)[meal].items.push({name:name,t:Date.now()});
  save();render();
  var inp=grid.querySelector('[data-meal="'+meal+'"] input[name=name]');if(inp)inp.focus();
});

/* log */
var filter='all';
function tsOf(e){
  var ts=e.items.map(function(i){return i.t}).concat(e.pt?[e.pt]:[]).filter(Boolean);
  return ts.length?Math.min.apply(null,ts):0;
}
function timeOf(e){
  var t=tsOf(e);
  return t?new Date(t).toLocaleTimeString([],{hour:'numeric',minute:'2-digit'}).replace(/\s+/g,' '):'';
}
function renderChips(){
  var opts=[{id:'all',label:'All'}].concat(MEALS);
  $('chips').innerHTML=opts.map(function(o){
    return '<button type="button" data-f="'+o.id+'" class="'+(filter===o.id?'on':'')+'" aria-pressed="'+(filter===o.id)+'">'+o.label+'</button>';
  }).join('');
}
function renderLog(){
  renderChips();
  var dates=Object.keys(store).filter(function(d){
    if(!/^\d{4}-\d{2}-\d{2}$/.test(d))return false;
    var day=dayData(d);
    return MEALS.some(function(m){return day[m.id].items.length||day[m.id].photos.length});
  }).sort().reverse();
  var html='';
  dates.forEach(function(d){
    var day=dayData(d),meals=0,ph=0,rows='';
    MEALS.forEach(function(m){var e=day[m.id];if(e.items.length||e.photos.length)meals++;ph+=e.photos.length});
    MEALS.forEach(function(m){
      if(filter!=='all'&&filter!==m.id)return;
      var e=day[m.id],n=e.photos.length;if(!e.items.length&&!n)return;
      var th=n?'<img src="'+e.photos[0]+'" alt="">':m.svg;
      var foods=e.items.length?e.items.map(function(i){return esc(i.name)}).join(', '):'Photos only';
      if(n>1)foods+=' ('+n+' photos)';
      rows+='<div class="ent"><div class="th">'+th+'</div><div><b>'+m.label+'</b><span class="f">'+foods+'</span></div><span class="t">'+timeOf(e)+'</span></div>';
    });
    if(!rows)return;
    var label=parse(d).toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
    html+='<article class="day"><div class="dh"><div><b>'+label+'</b><small>'+meals+(meals===1?' meal':' meals')+', '+ph+(ph===1?' photo':' photos')+'</small></div><div class="acts"><button type="button" data-open="'+d+'">Open</button><button type="button" class="primary" data-pdf="'+d+'">PDF</button></div></div>'+rows+'</article>';
  });
  $('logList').innerHTML=html||'<p class="none">Nothing here yet. Add a meal on the Today tab and it will show up in your log.</p>';
}
function setView(v){
  $('todayView').hidden=v!=='today';
  $('logView').hidden=v!=='log';
  $('vToday').classList.toggle('on',v==='today');
  $('vLog').classList.toggle('on',v==='log');
  $('vToday').setAttribute('aria-pressed',v==='today');
  $('vLog').setAttribute('aria-pressed',v==='log');
  $('pdfBtn').hidden=v!=='today';
  if(v==='log')renderLog();
}
$('vToday').onclick=function(){setView('today')};
$('vLog').onclick=function(){setView('log')};
$('chips').addEventListener('click',function(ev){
  var b=ev.target.closest('[data-f]');if(!b)return;
  filter=b.dataset.f;renderLog();
});
$('logList').addEventListener('click',function(ev){
  var o=ev.target.closest('[data-open]');
  if(o){cur=o.dataset.open;render();setView('today');window.scrollTo(0,0);return}
  var p=ev.target.closest('[data-pdf]');
  if(p){
    var d=p.dataset.pdf;p.disabled=true;toast('Building your PDF…');
    buildPDF(d).then(function(b){saveBlob(b,'daily-plate-'+d+'.pdf');toast('PDF ready. Check your downloads.')})
      .catch(function(){toast("Couldn't build the PDF.")})
      .then(function(){p.disabled=false});
  }
});

/* PDF */
function enc(s){var a=new Uint8Array(s.length);for(var i=0;i<s.length;i++)a[i]=s.charCodeAt(i)&255;return a}
function pdfText(s){return String(s).replace(/[^\x20-\x7E\xA0-\xFF]/g,'?').replace(/\\/g,'\\\\').replace(/\(/g,'\\(').replace(/\)/g,'\\)')}
function rgb(h){return [1,3,5].map(function(i){return (parseInt(h.substr(i,2),16)/255).toFixed(3)}).join(' ')}
function dataBytes(u){var b=atob(u.split(',')[1]),a=new Uint8Array(b.length);for(var i=0;i<b.length;i++)a[i]=b.charCodeAt(i);return a}
var PIX_W=360,PIX_H=270; /* every PDF photo is rendered to this size (4:3) */
function coverJPEG(img,w,h,bg,pad){
  var c=document.createElement('canvas');c.width=PIX_W;c.height=PIX_H;
  var x=c.getContext('2d');x.fillStyle=bg;x.fillRect(0,0,PIX_W,PIX_H);
  var bw=PIX_W*(1-2*(pad||0)),bh=PIX_H*(1-2*(pad||0));
  var s=pad?Math.min(bw/w,bh/h):Math.max(bw/w,bh/h),dw=w*s,dh=h*s;
  x.drawImage(img,(PIX_W-dw)/2,(PIX_H-dh)/2,dw,dh);
  return c.toDataURL('image/jpeg',0.8);
}
function wrap(text,size,maxW){
  var words=String(text).split(/\s+/),lines=[],line='',cw=size*0.52;
  words.forEach(function(w){
    var t=line?line+' '+w:w;
    if(t.length*cw>maxW&&line){lines.push(line);line=w}else line=t;
  });
  if(line)lines.push(line);
  return lines;
}
async function buildPDF(d){
  var W=595,H=842,M=40,BW=W-2*M;
  /* same values as the :root block in style.css */
  var bg='#0B0B0B',card='#161616',ink='#F5F5F5',muted='#9A9A9A',rule='#2B2B2B',soft='#1F1F1F';
  var PW=120,PH=90,GAP=8,COLS=2; /* one photo size for every photo */
  var objs=[null];
  function newObj(){return objs.push(null)-1}
  var catalog=newObj(),pages=newObj(),fReg=newObj(),fBold=newObj();
  var ops=[],imgs=[],pageList=[];
  function startPage(){ops=[];imgs=[];rect(0,0,W,H,bg)}
  function endPage(){
    var c=newObj();objs[c]={stream:enc(ops.join('\n'))};
    var p=newObj(),xo=imgs.map(function(i){return '/'+i.name+' '+i.id+' 0 R'}).join(' ');
    objs[p]={dict:'<< /Type /Page /Parent '+pages+' 0 R /MediaBox [0 0 '+W+' '+H+'] /Resources << /Font << /F1 '+fReg+' 0 R /F2 '+fBold+' 0 R >> /XObject << '+xo+' >> >> /Contents '+c+' 0 R >>'};
    pageList.push(p);
  }
  function rect(x,y,w,h,col){ops.push(rgb(col)+' rg '+x.toFixed(2)+' '+(H-y-h).toFixed(2)+' '+w.toFixed(2)+' '+h.toFixed(2)+' re f')}
  function rrect(x,y,w,h,r,fill,line){
    var b=H-y-h,k=r*0.5523,X=x+w,T=b+h;
    function n(v){return v.toFixed(2)}
    ops.push(rgb(fill)+' rg '+rgb(line)+' RG 0.75 w '+n(x+r)+' '+n(b)+' m '+n(X-r)+' '+n(b)+' l '+
      n(X-r+k)+' '+n(b)+' '+n(X)+' '+n(b+r-k)+' '+n(X)+' '+n(b+r)+' c '+n(X)+' '+n(T-r)+' l '+
      n(X)+' '+n(T-r+k)+' '+n(X-r+k)+' '+n(T)+' '+n(X-r)+' '+n(T)+' c '+n(x+r)+' '+n(T)+' l '+
      n(x+r-k)+' '+n(T)+' '+n(x)+' '+n(T-r+k)+' '+n(x)+' '+n(T-r)+' c '+n(x)+' '+n(b+r)+' l '+
      n(x)+' '+n(b+r-k)+' '+n(x+r-k)+' '+n(b)+' '+n(x+r)+' '+n(b)+' c h B');
  }
  function text(s,x,y,size,bold,col){ops.push('BT /'+(bold?'F2':'F1')+' '+size+' Tf '+rgb(col)+' rg '+x.toFixed(2)+' '+(H-y)+' Td ('+pdfText(s)+') Tj ET')}
  function pic(dataUrl,x,y,w,h){
    var id=newObj();
    objs[id]={extra:'/Type /XObject /Subtype /Image /Width '+PIX_W+' /Height '+PIX_H+' /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode',stream:dataBytes(dataUrl)};
    var name='Im'+id;imgs.push({name:name,id:id});
    ops.push('q '+w+' 0 0 '+h+' '+x+' '+(H-y-h)+' cm /'+name+' Do Q');
  }
  var dd=dayData(d);
  var longDate=parse(d).toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'});

  startPage();
  text('Daily Plate Log',M,56,26,true,ink);
  text(longDate,M,78,12,false,muted);
  rect(M,92,BW,0.75,rule);

  var y=112;
  for(var mi=0;mi<MEALS.length;mi++){
    var m=MEALS[mi],e=dd[m.id],np=e.photos.length;
    var lines=[];
    e.items.forEach(function(it){lines=lines.concat(wrap(it.name,11,BW-(12+COLS*PW+(COLS-1)*GAP+16)-12))});
    var rowsN=Math.max(1,Math.ceil(np/COLS)),gridH=rowsN*PH+(rowsN-1)*GAP;
    var tx=M+12+COLS*PW+(COLS-1)*GAP+16;
    var h=Math.max(gridH+24,70+Math.max(1,lines.length)*15+10);
    if(y+h>H-M-20){endPage();startPage();y=M}
    rrect(M,y,BW,h,10,card,rule);
    if(np){
      for(var pi=0;pi<np;pi++){
        var im=await loadImg(e.photos[pi]);
        pic(coverJPEG(im,im.naturalWidth||PIX_W,im.naturalHeight||PIX_H,soft),M+12+(pi%COLS)*(PW+GAP),y+12+Math.floor(pi/COLS)*(PH+GAP),PW,PH);
      }
    }else{
      var art=await loadImg('data:image/svg+xml;charset=utf-8,'+encodeURIComponent(m.svg));
      pic(coverJPEG(art,art.naturalWidth||PIX_W,art.naturalHeight||PIX_H,soft,0.06),M+12,y+12,PW,PH);
    }
    text(m.label,tx,y+28,15,true,ink);
    var parts=[];
    if(timeOf(e))parts.push(timeOf(e));
    if(np)parts.push(np+(np===1?' photo':' photos'));
    if(parts.length)text(parts.join('  |  '),tx,y+46,10,false,muted);
    if(!lines.length)text(np?'Photos only.':'Nothing logged.',tx,y+72,11,false,muted);
    else lines.forEach(function(l,i){text(l,tx,y+72+i*15,11,false,ink)});
    y+=h+12;
  }
  var entries=[];
  MEALS.forEach(function(m,i){var e=dd[m.id];if(e.items.length||e.photos.length)entries.push({m:m,e:e,i:i,ts:tsOf(e)})});
  entries.sort(function(a,b){return (a.ts||9e15)-(b.ts||9e15)||a.i-b.i});
  if(entries.length){
    if(y+70>H-M-20){endPage();startPage();y=M}
    text('Log',M,y+14,14,true,ink);
    rect(M,y+22,BW,0.8,rule);
    y+=40;
    entries.forEach(function(en){
      var foods=en.e.items.length?en.e.items.map(function(i){return i.name}).join(', '):'Photos only';
      var ls=wrap(foods,11,BW-140),hh=Math.max(1,ls.length)*15+6;
      if(y+hh>H-M-20){endPage();startPage();y=M+14}
      text(timeOf(en.e)||'-',M,y+10,11,false,muted);
      text(en.m.label,M+70,y+10,11,true,ink);
      ls.forEach(function(l,i){text(l,M+140,y+10+i*15,11,false,ink)});
      y+=hh;
    });
  }
  text('Made with Daily Plate',M,H-24,9,false,muted);
  endPage();

  objs[catalog]={dict:'<< /Type /Catalog /Pages '+pages+' 0 R >>'};
  objs[pages]={dict:'<< /Type /Pages /Kids ['+pageList.map(function(p){return p+' 0 R'}).join(' ')+'] /Count '+pageList.length+' >>'};
  objs[fReg]={dict:'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>'};
  objs[fBold]={dict:'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>'};

  var chunks=[],pos=0;
  function push(u){chunks.push(u);pos+=u.length}
  push(enc('%PDF-1.4\n'));
  var offs=[];
  for(var i=1;i<objs.length;i++){
    offs[i]=pos;var o=objs[i];
    if(o.stream){
      push(enc(i+' 0 obj\n<< '+(o.extra||'')+' /Length '+o.stream.length+' >>\nstream\n'));
      push(o.stream);push(enc('\nendstream\nendobj\n'));
    }else push(enc(i+' 0 obj\n'+o.dict+'\nendobj\n'));
  }
  var xref=pos,x='xref\n0 '+objs.length+'\n0000000000 65535 f \n';
  for(var j=1;j<objs.length;j++)x+=String(offs[j]).padStart(10,'0')+' 00000 n \n';
  x+='trailer\n<< /Size '+objs.length+' /Root '+catalog+' 0 R >>\nstartxref\n'+xref+'\n%%EOF';
  push(enc(x));
  return new Blob(chunks,{type:'application/pdf'});
}
function saveBlob(blob,name){
  var url=URL.createObjectURL(blob),a=document.createElement('a');
  a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();
  setTimeout(function(){URL.revokeObjectURL(url)},8000);
}
$('pdfBtn').onclick=async function(){
  var btn=this;btn.disabled=true;toast('Building your PDF…');
  try{
    var blob=await buildPDF(cur);
    saveBlob(blob,'daily-plate-'+cur+'.pdf');
    toast('PDF ready. Check your downloads.');
  }catch(err){
    toast("Couldn't build the PDF. Try removing large photos.");
  }
  btn.disabled=false;
};

render();

/* install and offline */
var deferred=null,installBtn=$('installBtn');
var standalone=window.matchMedia&&window.matchMedia('(display-mode: standalone)').matches;
window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();deferred=e;if(!standalone)installBtn.hidden=false});
installBtn.onclick=function(){
  if(!deferred)return;
  deferred.prompt();
  deferred.userChoice.then(function(){deferred=null;installBtn.hidden=true});
};
window.addEventListener('appinstalled',function(){installBtn.hidden=true;toast('App installed')});
if('serviceWorker' in navigator&&/^https?:$/.test(location.protocol)){
  window.addEventListener('load',function(){navigator.serviceWorker.register('sw.js').catch(function(){})});
}
if(new URLSearchParams(location.search).get('view')==='log')setView('log');
})();
