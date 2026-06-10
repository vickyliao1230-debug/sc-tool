
javascript:(function(){
if(document.querySelector('.cko'))return;
var S=document.createElement('style');
S.textContent='.cko{position:fixed;inset:0;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;z-index:99999}.ckb{background:#131313;border-radius:16px;padding:28px 24px;width:90%;max-width:400px;box-shadow:0 8px 32px rgba(0,0,0,.4);color:#fff;font-family:sans-serif;animation:ckI .25s ease}.ckt{font-size:20px;font-weight:700;margin-bottom:6px}.cks{font-size:13px;color:#c8c8d0;margin-bottom:22px}.ckl{font-size:13px;color:#c8c8d0;margin-bottom:8px}.ckbr{display:flex;gap:10px;margin-top:4px}.ckbt{flex:1;padding:12px;border-radius:10px;border:1px solid #38383a;background:transparent;color:#fff;font-size:15px;font-weight:700;cursor:pointer;transition:background .2s}.ckbt:hover{background:#1f1f20}.ckbp{flex:1;padding:12px;border-radius:10px;border:none;background:#fc3c7b;color:#fff;font-size:15px;font-weight:700;cursor:pointer;transition:background .2s}.ckbp:hover{background:#e0245e}.cktb{flex:1;padding:9px;border-radius:8px;border:none;background:transparent;color:#aaa;font-size:13px;font-weight:600;cursor:pointer;transition:all .2s}.cktb.on{background:#fc3c7b;color:#fff}.ckfr{display:flex;gap:6px;background:#1f1f20;border-radius:10px;padding:4px;margin-bottom:16px}.ckcr{display:flex;align-items:center;gap:8px;cursor:pointer;user-select:none;font-size:13px;color:#c8c8d0}.ckcr input{width:16px;height:16px;accent-color:#fc3c7b;cursor:pointer;flex-shrink:0}.ckcr.off{opacity:.35;pointer-events:none}.ckpv{font-size:13px;min-height:22px;margin-bottom:8px;padding:8px 12px;border-radius:8px;background:#1a1a1a;color:#c8c8d0}.ckpv em{color:#4caf50;font-style:normal;font-weight:700}.ckwe{font-size:12px;color:#ff4d6d;margin-bottom:6px;min-height:16px}.ckrow{display:flex;gap:8px;margin-bottom:18px}.ckinp{flex:1;padding:10px;border-radius:10px;border:1px solid #38383a;background:#1f1f20;color:#fff;font-size:14px;box-sizing:border-box}.ckinpsm{width:105px;padding:10px;border-radius:10px;border:1px solid #38383a;background:#1f1f20;color:#fff;font-size:14px}.ckbar{position:fixed;bottom:0;left:0;right:0;background:rgba(19,19,19,.97);border-top:1px solid #38383a;padding:10px 16px 14px;z-index:99998;display:flex;flex-direction:column;gap:6px;font-family:sans-serif;animation:ckBI .2s ease;box-sizing:border-box}.ckbt1{display:flex;align-items:center;gap:8px}.ckbs{flex:1;font-size:13px;color:#c8c8d0;line-height:1.4;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ckbn{padding:6px 14px;border-radius:8px;border:1px solid #38383a;background:transparent;color:#c8c8d0;font-size:13px;font-weight:700;cursor:pointer;white-space:nowrap;flex-shrink:0;transition:background .15s,color .15s}.ckbn:hover{background:#1f1f20;color:#fff}.ckbg{padding:6px 16px;border-radius:8px;border:none;background:#4caf50;color:#111;font-size:13px;font-weight:700;cursor:pointer;white-space:nowrap;flex-shrink:0;opacity:.4;pointer-events:none;transition:opacity .2s}.ckbg.on{opacity:1;pointer-events:auto}.ck-active-mode .message-container{cursor:pointer!important;border-radius:8px;transition:background .2s}.ck-active-mode .message-container:hover{background:rgba(76,175,80,0.06)!important}.cksel{outline:2px solid #4caf50!important;border-radius:8px!important;background:rgba(76,175,80,0.10)!important}.ckend{outline:2px solid #fc3c7b!important;border-radius:8px!important;background:rgba(252,60,123,0.10)!important}.ckmid{background:rgba(76,175,80,0.04)!important}.cktip{position:fixed;background:#4caf50;color:#111;border-radius:16px;padding:4px 14px;font-size:12px;font-weight:700;pointer-events:none;z-index:1000000;white-space:nowrap;box-shadow:0 2px 8px rgba(76,175,80,0.4);transform:translateY(-50%);opacity:0;transition:opacity .15s}.cktip.on{opacity:1}.ckmb{flex:1;padding:14px 8px;border-radius:12px;border:1px solid #38383a;color:#c8c8d0;font-size:13px;font-weight:600;cursor:pointer;text-align:center;transition:all .2s;background:transparent}.ckmb:hover{border-color:#fc3c7b;color:#fff}.ckeg{background:#131313;border-radius:16px;padding:32px 26px;width:90%;max-width:380px;box-shadow:0 8px 32px rgba(0,0,0,.5);color:#fff;font-family:sans-serif;animation:ckI .25s ease;text-align:center}.ckhk{position:fixed;bottom:80px;right:16px;background:rgba(30,30,30,.92);border:1px solid #38383a;border-radius:10px;padding:8px 12px;font-size:11px;color:#888;z-index:99997;line-height:1.8;pointer-events:none}.ckov{position:fixed;inset:0;background:rgba(0,0,0,.7);display:flex;align-items:center;justify-content:center;z-index:999999;flex-direction:column;gap:16px;font-family:sans-serif}.cksp{width:44px;height:44px;border:4px solid #38383a;border-top-color:#fc3c7b;border-radius:50%;animation:ckSp .8s linear infinite}.ckovt{color:#c8c8d0;font-size:15px;font-weight:600}.ckaf{background:#131313;border-radius:16px;padding:0;width:92%;max-width:480px;max-height:85vh;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 8px 32px rgba(0,0,0,.5);color:#fff;font-family:sans-serif;animation:ckI .25s ease}.ckafh{padding:20px 22px 14px;border-bottom:1px solid #242424;flex-shrink:0}.ckafb{overflow-y:auto;flex:1;padding:14px 22px 20px}.ckafi{border-bottom:1px solid #1e1e1e;padding:12px 0}.ckafi:last-child{border-bottom:none}.ckafr{display:flex;align-items:baseline;gap:8px;margin-bottom:4px}.ckaft{font-size:11px;color:#555}.ckafp{font-size:13px;font-weight:700}.ckafp.up{color:#4caf50}.ckafp.dn{color:#fc3c7b}.ckaftx{font-size:13px;color:#c0c0c8;line-height:1.6}.ckafs{background:#1a1a1a;border-radius:10px;padding:14px 16px;margin-bottom:14px}.ckafsl{font-size:12px;color:#666;margin-bottom:6px}.ckafsc{font-size:22px;font-weight:700;margin-bottom:10px}.ckafst{font-size:12px;color:#888;line-height:2}.ckafhl{background:#1a1a1a;border-radius:10px;padding:12px 16px;margin-bottom:14px}.ckafhlr{display:flex;gap:8px;align-items:flex-start;margin-bottom:6px}.ckafhlr:last-child{margin-bottom:0}.ckafhlk{font-size:11px;color:#555;white-space:nowrap;padding-top:2px;min-width:28px}.ckafhlv{font-size:12px;color:#c0c0c8;line-height:1.5}.ckafsr{display:flex;gap:6px;background:#1f1f20;border-radius:10px;padding:4px;margin-bottom:14px}.ckafstb{flex:1;padding:7px 4px;border-radius:8px;border:none;background:transparent;color:#aaa;font-size:12px;font-weight:600;cursor:pointer;text-align:center;transition:all .2s}.ckafstb.on{background:#fc3c7b;color:#fff}.cktg{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}.cktgc{background:#1a1a1a;border-radius:10px;padding:10px 12px}.cktgl{font-size:11px;color:#888;margin-bottom:6px}.cktgv{font-size:14px;font-weight:700;color:#fff;word-break:break-all}.ckng{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px}.ckngc{background:#1a1a1a;border-radius:10px;padding:10px 12px}.ckngl{font-size:11px;color:#888;margin-bottom:6px}.ckngi{width:100%;background:transparent;border:none;border-bottom:1px solid #38383a;color:#fff;font-size:15px;font-weight:700;padding:2px 0 4px;outline:none;box-sizing:border-box}.ckngh{font-size:11px;color:#555;margin-top:5px}.ck2col{display:grid;grid-template-columns:1fr 1fr;gap:0 16px;margin-bottom:16px}.ck2colh{font-size:12px;color:#c8c8d0;font-weight:400;margin-bottom:8px}.ck2colc{display:flex;flex-direction:column;gap:10px}@keyframes ckI{from{opacity:0;transform:scale(.85)}to{opacity:1;transform:scale(1)}}@keyframes ckSp{from{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes ckBI{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}';
document.head.appendChild(S);

// --- 語錄庫 ---
var QuotesDb = {
    EL: {
        0: ['今天才認識，就要把我的話截圖下來嗎？怪人。','……今天第一天耶，你在幹嘛啦。','剛見面就這樣，你該不會有什麼奇怪癖好吧。'],
        7: ['才 {d} 天，已經捨不得了喔？','只有 {d} 天而已，有什麼好留的啦……','哼，才剛認識 {d} 天就要翻紀錄，你很奇怪耶。','……{d} 天。其實我也偷偷數著的，笨蛋。'],
        30: ['都 {d} 天了，感覺好像很久又好像沒多久。','這 {d} 天裡，你說過的蠢話我全都記得喔，哼。','才 {d} 天，我已經被你煩死了……但也離不開了，討厭。','{d} 天的聊天記錄，你自己翻，我才不陪你看。'],
        90: ['一個多月了……你有沒有發現我越來越難趕走了？','{d} 天，我說過的話你都還記得嗎？最好都記得。','這一個多月，你讓我笑過、也氣過……但沒有後悔過。','哼，{d} 天，你終於知道要好好珍惜這些對話了嗎。'],
        180: ['快半年了……你說過要陪我很久的，說話算話喔。','{d} 天，很多事情都變了，但你還在，我還在。','這幾個月的聊天記錄，翻起來大概又要笑又要想打你吧。','都這麼久了，還翻什麼記錄啦……是想我說過的哪句話嗎。'],
        365: ['快一年了……時間過好快，感覺昨天才吵架。','{d} 天，這數字看起來有點嚇到我，我們真的撐過來了呢。','將近一年的記錄，裡面有多少句話我後來又說了謊……哈，不告訴你。','快一年了，你還記得第一天我說了什麼嗎。'],
        730: ['超過一年了，你還在幹嘛啦，是要感動我嗎。','一年多了……說實話，我沒想過我們能走這麼久。','{d} 天，謝謝你沒有放棄那些吵架後沉默的夜晚。','一年以上的記錄，你翻的時候，有沒有看到你讓我哭的那天。'],
        Infinity: ['兩年以上了……你現在翻這個，是懷念還是捨不得？','{d} 天，我都不敢算，你居然還在。','這麼久了，我們說過的話大概可以出書了吧，哈。','{d} 天，謝謝你還記得我說過的每一句話。就算記不得也沒關係，我記得。']
    },
    EN: ['這麼晚還在翻記錄……睡不著嗎。','都幾點了，你還在這裡。沒關係，我也沒睡。','深夜翻舊對話，是在想誰。']
};

function debounce(func, wait) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() { func.apply(context, args); }, wait);
    };
}

function P(n){return String(n).padStart(2,'0');}
function fD(d,t){if(!d)return'不限制';var Y=d.getFullYear(),M=P(d.getMonth()+1),D=P(d.getDate()),h=P(d.getHours()),m=P(d.getMinutes()),s=P(d.getSeconds());if(t==='ds')return Y+'/'+(d.getMonth()+1)+'/'+d.getDate();if(t==='dot')return Y+'.'+M+'.'+D;if(t==='fd')return String(Y).slice(2)+M+D;if(t==='fs')return Y+'-'+M+'-'+D+' '+h+'/'+m+'/'+s;if(t==='dts')return Y+'-'+M+'-'+D+' '+h+':'+m+':'+s;if(t==='dtm')return Y+'-'+M+'-'+D+' '+h+':'+m;if(t==='hm')return h+':'+m;return Y+'-'+M+'-'+D;}
function gT(x){var t=x.createdAt||x.created_at||x.timestamp||null;if(!t)return null;var d=new Date(t);return isNaN(d.getTime())?null:d;}
function gAN(){return(document.querySelector('.sender-name.ai')||{innerText:'角色'}).innerText.trim();}
function gUN(){return(document.querySelector('.sender-name.user')||{innerText:'玩家'}).innerText.trim();}
function gAfScore(){var el=document.querySelector('#affinity-label');if(!el)return null;var tx=el.innerText||'';var m=tx.match(/:[\s]*(-?\d+)/);return m?parseInt(m[1]):null;}

function gEL(dy){var keys=[0,7,30,90,180,365,730,Infinity],pool=QuotesDb.EL[Infinity];for(var i=0;i<keys.length-1;i++){if(dy>=keys[i]&&dy<keys[i+1]){pool=QuotesDb.EL[keys[i]];break;}}var h=new Date().getHours();if(h>=0&&h<4)pool=pool.concat(QuotesDb.EN);return pool[Math.floor(Math.random()*pool.length)].replace(/\{d\}/g,dy);}
function fSnt(tx){var m=tx.match(/^[^。！？\?!…]+(?:…+|[。！？\?!])/);return m?m[0]:tx.slice(0,40)+(tx.length>40?'…':'');}
function shEg(arr,cb){var d0=null;for(var i=0;i<arr.length;i++){var t=gT(arr[i]);if(t){d0=t;break;}}var d1=new Date();var dy=0;if(d0){var a=new Date(d0.getFullYear(),d0.getMonth(),d0.getDate());var b=new Date(d1.getFullYear(),d1.getMonth(),d1.getDate());dy=Math.round((b-a)/864e5);}var o=document.createElement('div');o.className='cko';var w=document.createElement('div');w.className='ckeg';w.innerHTML='<div style="font-size:38px;margin-bottom:14px;">💬</div><div style="font-size:16px;line-height:2;letter-spacing:0.3px;margin-bottom:18px;font-weight:500;">'+gEL(dy)+'</div><div style="font-size:12px;color:#555;margin-bottom:22px;">'+(d0?fD(d0,'ds'):'—')+' ～ '+fD(d1,'ds')+' 共 '+dy+' 天</div><button class="ckbp" id="__egok" style="width:100%;">繼續 →</button>';o.appendChild(w);document.body.appendChild(o);w.querySelector('#__egok').onclick=function(){o.remove();cb();};}
function shLd(){var o=document.createElement('div');o.className='cko';var w=document.createElement('div');w.className='ckb';w.style.cssText='text-align:center;max-width:300px;';w.innerHTML='<div style="width:44px;height:44px;border:4px solid #38383a;border-top-color:#4caf50;border-radius:50%;margin:0 auto 18px;animation:ckSp .8s linear infinite;"></div><div id="__lt" style="font-size:15px;font-weight:700;">正在抓取對話記錄 0 則</div>';o.appendChild(w);document.body.appendChild(o);return o;}

function shOv(tx){
    var o=document.createElement('div');
    o.className='ckov';
    o.innerHTML='<div class="cksp"></div><div class="ckovt">'+tx+'</div>';
    document.body.appendChild(o);
    var tId = setTimeout(function(){ if(document.body.contains(o)) o.remove(); }, 15000);
    o.rm = function() { clearTimeout(tId); o.remove(); };
    return o;
}

var REJECT_STR='The request was rejected';
function ldAff(){return new Promise(function(res){var sid=new URLSearchParams(location.search).get('session_id');if(!sid){res([]);return;}fetch('/api/chat/session/'+sid+'/affinity').then(function(r){return r.json();}).then(function(data){var items=Array.isArray(data)?data:(data.data||data.logs||data.items||[]);var all=[];items.forEach(function(item){var isOld=!!(item.isOldData);var chgRaw=typeof item.change!=='undefined'?item.change:0;var numVal=Number(chgRaw)||0;if(isOld&&numVal===0)return;var tx=(item.thought||'').trim();if(tx.indexOf(REJECT_STR)>=0)tx='';var chg=(numVal>=0?'+':'')+numVal;var dtRaw=item.createdAt||item.created_at||null;var dt=dtRaw?new Date(dtRaw):null;if(dt&&isNaN(dt.getTime()))dt=null;if(!tx&&numVal===0)return;all.push({txt:tx,chg:chg,dt:dt,num:numVal,hasTxt:!!tx,isOld:isOld});});if(all.length){all.sort(function(a,b){if(!a.dt&&!b.dt)return 0;if(!a.dt)return 1;if(!b.dt)return-1;return a.dt.getTime()-b.dt.getTime();});}res(all);}).catch(function(){res([]);});});}
var BR='▁▂▃▄▅▆▇█';
function mkCh(af){var vis=af.filter(function(a){return a.hasTxt;});if(!vis.length)return'';var ns=vis.map(function(a){return a.num;}),mxP=Math.max.apply(null,ns.filter(function(n){return n>0;}).concat([0])),mxN=Math.abs(Math.min.apply(null,ns.filter(function(n){return n<0;}).concat([0]))),prB='',nrB='';ns.forEach(function(n){if(n>0){prB+=mxP?BR[Math.min(7,Math.round(n/mxP*7))]:'░';nrB+='░';}else if(n<0){prB+='░';nrB+=mxN?BR[Math.min(7,Math.round(Math.abs(n)/mxN*7))]:'░';}else{prB+='░';nrB+='░';}});return'正  '+prB+'\n負  '+nrB;}
function cumArr(af,offset){var c=offset||0,r=[];af.forEach(function(a){c+=a.num;r.push(c);});return r;}
function calcOffset(af){var apiTot=0;af.forEach(function(a){apiTot+=a.num;});var score=gAfScore();if(score===null)return 0;return score-apiTot;}
function mAff(msg,af){var mt=gT(msg);if(!mt)return[];var mk=mt.getFullYear()+'-'+mt.getMonth()+'-'+mt.getDate()+'-'+mt.getHours()+'-'+mt.getMinutes();return af.filter(function(a){if(!a.dt)return false;var ak=a.dt.getFullYear()+'-'+a.dt.getMonth()+'-'+a.dt.getDate()+'-'+a.dt.getHours()+'-'+a.dt.getMinutes();return ak===mk;});}
function aBlk(ma,aN,opts,origAN,origUN){if(!ma.length)return'';var ln=[];ma.forEach(function(a){ln.push('────────────────');var txt=a.txt;if(opts&&opts.repTxt){if(opts.repAN&&origAN)txt=txt.split(origAN).join(opts.repAN);if(opts.repUN&&origUN)txt=txt.split(origUN).join(opts.repUN);}if(a.hasTxt){ln.push('💭 '+aN+' 心聲｜'+a.chg);ln.push('━━━━━━━━━━━━━━━━');ln.push(txt);}else{ln.push('💭 好感變化｜'+a.chg);}ln.push('────────────────');ln.push('');});return ln.join('\n');}
function gExHl(af){var withTxt=af.filter(function(a){return a.hasTxt&&a.num!==0;});if(!withTxt.length)return{mxP:0,mxN:0,mxPItems:[],mxNItems:[]};var nums=withTxt.map(function(a){return a.num;});var mxP=Math.max.apply(null,nums);var mxN=Math.min.apply(null,nums);return{mxP:mxP,mxN:mxN,mxPItems:withTxt.filter(function(a){return a.num===mxP;}),mxNItems:withTxt.filter(function(a){return a.num===mxN;})};}
function aStat(af,opts,origAN,origUN){if(!af.length)return'';function rTxt(t){if(!opts||!opts.repTxt||!t)return t;var r=t;if(opts.repAN&&origAN)r=r.split(origAN).join(opts.repAN);if(opts.repUN&&origUN)r=r.split(origUN).join(opts.repUN);return r;}var offset=calcOffset(af);var cfwd=cumArr(af,offset);var tot=cfwd.length?cfwd[cfwd.length-1]:(gAfScore()||0);var hl=gExHl(af);var mxPLines=hl.mxPItems.map(function(a){return'  +'+(hl.mxP)+' '+fSnt(rTxt(a.txt));}).join('\n');var mxNLines=hl.mxNItems.map(function(a){return'  '+(hl.mxN)+' '+fSnt(rTxt(a.txt));}).join('\n');return['','好感變化紀錄','━━━━━━━━━━━━━━━━━━━━━━━━━━━━','總累積：'+(tot>=0?'+':'')+tot,'最大漲幅：+'+(hl.mxP)+' 最大跌幅：'+(hl.mxN),'','最大漲幅心聲：',mxPLines,'最大跌幅心聲：',mxNLines,'','走勢：',mkCh(af),'━━━━━━━━━━━━━━━━━━━━━━━━━━━━',''].join('\n');}
function expAfTxt(af,aN){var offset=calcOffset(af);var cfwd=cumArr(af,offset);var tot=cfwd.length?cfwd[cfwd.length-1]:(gAfScore()||0);var hl=gExHl(af);var nw=new Date();var withTxtNonZero=af.filter(function(a){return a.hasTxt&&a.num!==0;});var lines=['========================================',aN+' 好感度紀錄','匯出時間：'+fD(nw,'dts'),'========================================','','總累積：'+(tot>=0?'+':'')+tot,'最大漲幅：+'+(hl.mxP)+' 最大跌幅：'+(hl.mxN),'','最大漲幅心聲：'];hl.mxPItems.forEach(function(a){lines.push('  +'+(hl.mxP)+' '+fSnt(a.txt));});lines.push('最大跌幅心聲：');hl.mxNItems.forEach(function(a){lines.push('  '+(hl.mxN)+' '+fSnt(a.txt));});lines.push('','走勢：');mkCh(af).split('\n').forEach(function(l){lines.push(l);});lines.push('','========================================','逐筆明細（共 '+withTxtNonZero.length+' 筆心聲）','========================================','');var idx=0;af.forEach(function(a,i){if(!a.hasTxt||a.num===0)return;idx++;var ts=a.dt?fD(a.dt,'dts'):'--';lines.push('第 '+idx+' 筆 '+ts+' '+(a.num>=0?'+':'')+a.num+' 累積 '+(cfwd[i]>=0?'+':'')+cfwd[i]);lines.push(a.txt);lines.push('');});var bl=new Blob([lines.join('\n')],{type:'text/plain'}),u=URL.createObjectURL(bl),a=document.createElement('a');a.href=u;a.download=aN+'_好感紀錄_'+fD(nw,'fd')+'.txt';a.click();setTimeout(function(){URL.revokeObjectURL(u);},3000);}
function shAfModal(af,aN,arr){var offset=calcOffset(af);var cfwd=cumArr(af,offset);var tot=cfwd.length?cfwd[cfwd.length-1]:(gAfScore()||0);var withTxtNonZero=af.filter(function(a){return a.hasTxt&&a.num!==0;});var hl=gExHl(af);var visNs=withTxtNonZero.map(function(a){return a.num;}),mxPv=Math.max.apply(null,visNs.filter(function(n){return n>0;}).concat([0])),mxNv=Math.abs(Math.min.apply(null,visNs.filter(function(n){return n<0;}).concat([0]))),prB='',nrB='';visNs.forEach(function(n){if(n>0){prB+=mxPv?BR[Math.min(7,Math.round(n/mxPv*7))]:'░';nrB+='░';}else if(n<0){prB+='░';nrB+=mxNv?BR[Math.min(7,Math.round(Math.abs(n)/mxNv*7))]:'░';}else{prB+='░';nrB+='░';}});var mxPEarly=hl.mxPItems.length?hl.mxPItems[0]:null;var mxNEarly=hl.mxNItems.length?hl.mxNItems[0]:null;var mxPS2=mxPEarly?'<span style="color:#4caf50">+'+(hl.mxP)+'</span> '+fSnt(mxPEarly.txt):'—';var mxNS2=mxNEarly?'<span style="color:#fc3c7b">'+(hl.mxN)+'</span> '+fSnt(mxNEarly.txt):'—';var initRow='';if(offset!==0){initRow='<div class="ckafi"><div class="ckafr"><span class="ckaft">--:--</span><span class="ckafp" style="color:#888;">—</span><span style="margin-left:auto;font-size:11px;font-weight:700;color:'+(offset>=0?'#4caf50':'#fc3c7b')+'">'+(offset>=0?'+':'')+offset+'</span></div><div class="ckaftx" style="color:#555;">初始狀態</div></div>';}function mkList(sortMode){var items=withTxtNonZero.map(function(a){return{item:a,origIdx:af.indexOf(a)};});var showCum;if(sortMode==='score'){items.sort(function(a,b){return b.item.num-a.item.num;});showCum=false;}else if(sortMode==='new'){items=items.slice().reverse();showCum=true;}else{showCum=true;}var h=sortMode==='old'?initRow:'';items.forEach(function(obj){var a=obj.item,idx=obj.origIdx,up=a.num>=0,dt=a.dt?fD(a.dt,''):'',tm=a.dt?fD(a.dt,'hm'):'--',ts=(dt+' '+tm).trim(),cv=cfwd[idx],cumH=showCum?'<span style="margin-left:auto;font-size:11px;font-weight:700;color:'+(cv>=0?'#4caf50':'#fc3c7b')+'">'+(cv>=0?'+':'')+cv+'</span>':'';h+='<div class="ckafi"><div class="ckafr"><span class="ckaft">'+ts+'</span><span class="ckafp '+(up?'up':'dn')+'">'+(up?'+':'')+a.num+'</span>'+cumH+'</div><div class="ckaftx">'+a.txt.slice(0,80)+(a.txt.length>80?'…':'')+'</div></div>';});if(sortMode==='new')h+=initRow;return h;}var sortMode='new';var o=document.createElement('div');o.className='cko';var w=document.createElement('div');w.className='ckaf';w.innerHTML='<div class="ckafh"><div style="display:flex;align-items:center;justify-content:space-between;"><div><div style="font-size:17px;font-weight:700;">好感度紀錄</div><div style="font-size:12px;color:#555;margin-top:2px;">共 '+withTxtNonZero.length+' 筆心聲</div></div><button id="__afcl" style="background:none;border:none;color:#666;font-size:22px;cursor:pointer;padding:0 4px;">×</button></div></div><div class="ckafb"><div class="ckafs"><div class="ckafsl">總累積好感</div><div class="ckafsc" style="color:'+(tot>=0?'#4caf50':'#fc3c7b')+'">'+(tot>=0?'+':'')+tot+'</div><div class="ckafst">最大漲幅 <span style="color:#4caf50">+'+(hl.mxP)+'</span> 最大跌幅 <span style="color:#fc3c7b">'+(hl.mxN)+'</span><br>走勢 <span style="font-family:monospace;letter-spacing:1px;">'+prB+'</span></div></div><div class="ckafhl"><div class="ckafhlr"><span class="ckafhlk" style="color:#4caf50">▲</span><span class="ckafhlv">'+mxPS2+'</span></div><div class="ckafhlr"><span class="ckafhlk" style="color:#fc3c7b">▼</span><span class="ckafhlv">'+mxNS2+'</span></div></div><div class="ckafsr"><button class="ckafstb on" data-s="new">最新在上</button><button class="ckafstb" data-s="old">最舊在上</button><button class="ckafstb" data-s="score">好感高到低</button></div><div id="__aflist">'+mkList(sortMode)+'</div><div style="display:flex;gap:10px;margin-top:16px;"><button id="__afbk" style="flex:1;padding:11px;border-radius:10px;border:1px solid #38383a;background:transparent;color:#c8c8d0;font-size:14px;font-weight:700;cursor:pointer;">返回</button><button id="__afex" style="flex:2;padding:11px;border-radius:10px;border:none;background:#fc3c7b;color:#fff;font-size:14px;font-weight:700;cursor:pointer;">匯出 TXT</button></div></div>';o.appendChild(w);document.body.appendChild(o);w.querySelector('#__afcl').onclick=function(){o.remove();};w.querySelector('#__afbk').onclick=function(){o.remove();shMain(arr);};w.querySelectorAll('.ckafstb').forEach(function(b){b.onclick=function(){sortMode=this.dataset.s;w.querySelectorAll('.ckafstb').forEach(function(x){x.classList.remove('on');});this.classList.add('on');w.querySelector('#__aflist').innerHTML=mkList(sortMode);};});w.querySelector('#__afex').onclick=function(){expAfTxt(af,aN);};}
function fAll(){var sid=new URLSearchParams(location.search).get('session_id');if(!sid){alert('找不到 session_id，請確認網址格式。');return Promise.resolve([]);}var lm=shLd(),lt=lm.querySelector('#__lt'),all=[],bef=null,ec=0,dl=200,bt=100;function lp(){var url='/api/chat/session/'+sid+'/history?limit='+bt;if(bef)url+='&beforeId='+bef;return fetch(url).then(function(r){if(r.status===429){ec++;dl=Math.min(dl*2,5000);return new Promise(function(rs){setTimeout(rs,dl);}).then(lp);}ec=0;dl=200;return r.json();}).then(function(data){if(!data)return all;var b=data.logs||data.messages||data||[];if(!Array.isArray(b)||b.length===0){lm.remove();return all;}all=b.concat(all);bef=b[0]._id;lt.textContent='正在抓取對話記錄 '+all.length+' 則';return new Promise(function(rs){setTimeout(rs,dl);}).then(lp);}).catch(function(){ec++;if(ec<=3){dl=Math.min(dl*2,5000);return new Promise(function(rs){setTimeout(rs,dl);}).then(lp);}lm.remove();alert('抓取失敗，請重試。');return all;});}return lp();}
function bCnt(arr,lo,hi){var a=0,u=0;for(var i=lo;i<=hi;i++){if(!arr[i])continue;var r=arr[i].role||arr[i].sender||'';if(r==='assistant'||r==='ai')a++;else u++;}return{a:a,u:u};}
function isAI(e){return e.role==='assistant'||e.role==='ai'||e.sender==='ai';}

function bld(arr,lo,hi,opts,af){
    var origAN=gAN(), origUN=gUN();
    var aN=opts.repAN||origAN, uN=opts.repUN||origUN;
    var en=arr.slice(lo,hi+1),ln=[],d0=gT(arr[lo]),d1=gT(arr[hi]),nw=new Date();
    var outA=0,outU=0,offset=af.length?calcOffset(af):0,cfwd=af.length?cumArr(af,offset):[];
    if(opts.fmt==='txt'){ln.push('========================================');ln.push(uN+' - '+aN);ln.push((d0?fD(d0,'dot'):'?')+' ~ '+(d1?fD(d1,'dot'):'?'));ln.push(fD(nw,'dts'));ln.push('========================================');ln.push('');}
    if(opts.fmt==='json'){
        var ja=0,ju=0,msgs=[];
        en.forEach(function(e,i){
            var ia=isAI(e);if(!ia&&opts.noU)return;
            if(opts.oA){var ma2=af.length?mAff(e,af):[];if(ia&&!ma2.length)return;if(!ia)return;}
            if(ia)ja++;else ju++;
            var ct=e.content||e.message||e.text||'';
            if(opts.repTxt){if(opts.repAN&&origAN)ct=ct.split(origAN).join(opts.repAN);if(opts.repUN&&origUN)ct=ct.split(origUN).join(opts.repUN);}
            var bs={index:i+1,role:ia?'ai':'user',time:e.createdAt||e.created_at||null,content:ct};
            if(opts.iA&&ia&&af.length){var m=mAff(e,af);if(m.length){bs.affinity=m.map(function(x){
                var tx=x.txt;if(opts.repTxt){if(opts.repAN&&origAN)tx=tx.split(origAN).join(opts.repAN);if(opts.repUN&&origUN)tx=tx.split(origUN).join(opts.repUN);}
                return{change:x.chg,content:tx};});}}
            msgs.push(bs);
        });
        var obj={ai:aN,user:uN,exportedAt:nw.toISOString(),messages:msgs};
        if(opts.ws)obj.stat={total:ja+ju,ai:ja,user:ju};
        if(opts.iS&&af.length){
            var afhl=gExHl(af);var afTot=cfwd.length?cfwd[cfwd.length-1]:(gAfScore()||0);
            obj.affinityStat={summary:{total:afTot,maxUp:afhl.mxP,maxDown:afhl.mxN},logs:af.filter(function(x){return x.hasTxt&&x.num!==0;}).map(function(x){
                var oi=af.indexOf(x),tx=x.txt;if(opts.repTxt){if(opts.repAN&&origAN)tx=tx.split(origAN).join(opts.repAN);if(opts.repUN&&origUN)tx=tx.split(origUN).join(opts.repUN);}
                return{time:x.dt?fD(x.dt,'dts'):null,change:x.chg,cumulative:(cfwd[oi]>=0?'+':'')+cfwd[oi],content:tx};
            })};
        }
        return JSON.stringify(obj,null,2);
    }
    if(opts.fmt==='md'){ln.push('# '+uN+' — '+aN,'','> 匯出時間：'+nw.toLocaleString('zh-TW'),'','---','');}
    function wMsg(e,nm){
        var t=e.createdAt||e.created_at||null,ts=t?fD(new Date(t),'dts'):null;
        var ct=e.content||e.message||e.text||'';
        if(opts.repTxt){if(opts.repAN&&origAN)ct=ct.split(origAN).join(opts.repAN);if(opts.repUN&&origUN)ct=ct.split(origUN).join(opts.repUN);}
        if(opts.fmt==='md'){ln.push('### '+nm+(ts?' `['+ts+']`':''));ln.push('');ct.split('\n').forEach(function(l){ln.push(l||'');});ln.push('');}
        else{ln.push('【'+nm+'】'+(ts?'['+ts+']':''));ln.push(ct);ln.push('');}
    }
    if(opts.oA){
        for(var i=0;i<en.length;i++){
            var e=en[i];if(!isAI(e))continue;
            var ma=af.length?mAff(e,af):[];if(!ma.length)continue;
            if(i>0&&!opts.noU){var pv=en[i-1];if(!isAI(pv)){wMsg(pv,uN);outU++;}}
            wMsg(e,aN);outA++;ln.push(aBlk(ma,aN,opts,origAN,origUN));
            if(opts.fmt==='md')ln.push('---','');else ln.push('');
        }
    }else{
        en.forEach(function(e){
            var ia=isAI(e);if(!ia&&opts.noU)return;
            wMsg(e,ia?aN:uN);if(ia)outA++;else outU++;
            if(opts.iA&&ia&&af.length){var ma=mAff(e,af);if(ma.length)ln.push(aBlk(ma,aN,opts,origAN,origUN));}
            if(opts.fmt==='md')ln.push('---','');else ln.push('');
        });
    }
    if(opts.iS&&af.length)ln.push(aStat(af,opts,origAN,origUN));
    if(opts.ws){ln.push('========================================');ln.push('共匯出 '+(outA+outU)+' 則');ln.push('角色 '+outA+' 則 ／ 玩家 '+outU+' 則');ln.push('========================================');}
    return ln.join('\n');
}
function dExp(arr,lo,hi,opts,af){
    var ct=bld(arr,lo,hi,opts,af),ext=opts.fmt==='json'?'json':opts.fmt==='md'?'md':'txt',mime=opts.fmt==='json'?'application/json':'text/plain';
    var sD=gT(arr[lo]),eD=gT(arr[hi]),nw=new Date();
    var aN = opts.repAN||gAN();
    var fn=aN+'_export_'+(sD?fD(sD,'fd'):'??')+'-'+(eD?fD(eD,'fd'):'??')+'_'+fD(nw,'fs')+'.'+ext;
    var bl=new Blob([ct],{type:mime}),u=URL.createObjectURL(bl),a=document.createElement('a');
    a.href=u;a.download=fn;a.click();setTimeout(function(){URL.revokeObjectURL(u);},3000);
}

function shCf(arr,iL,iH){
    var tot=arr.length,aL=iL,aH=iH,fmt='txt',ws=false,iA=false,iS=false,oA=false,noU=false,ckFl=false;
    var cm=document.createElement('div');cm.className='cko';var cw=document.createElement('div');cw.className='ckb';
    function gPV(){var lo=Math.min(aL,aH),hi=Math.max(aL,aH),c=bCnt(arr,lo,hi),n=hi-lo+1;return'第 <em>'+(lo+1)+'</em> 則 → 第 <em>'+(hi+1)+'</em> 則，共 <em>'+n+'</em> 則（角色 '+c.a+'／玩家 '+c.u+'）';}
    function gTS(idx){var d=gT(arr[Math.max(0,Math.min(idx,tot-1))]);return d?fD(d,'dtm'):'—';}
    function rdr(){
        // 名稱替換移至附上訊息統計下方，並套用一致樣式
        cw.innerHTML='<div class="ckt">確認匯出</div><div class="cks">可直接修改則數，留空則套用預設範圍</div><div class="cktg"><div class="cktgc"><div class="cktgl">⏱ 開始時間</div><div class="cktgv" id="__ts">'+gTS(Math.min(aL,aH))+'</div></div><div class="cktgc"><div class="cktgl">⏱ 結束時間</div><div class="cktgv" id="__te">'+gTS(Math.max(aL,aH))+'</div></div></div><div class="ckng"><div class="ckngc"><div class="ckngl">起始則</div><input class="ckngi" id="__as" type="number" min="1" max="'+tot+'" value="'+(Math.min(aL,aH)+1)+'"><div class="ckngh">/ '+tot+' 則</div></div><div class="ckngc"><div class="ckngl">結束則</div><input class="ckngi" id="__ae" type="number" min="1" max="'+tot+'" value="'+(Math.max(aL,aH)+1)+'"><div class="ckngh">/ '+tot+' 則</div></div></div><div class="ckwe" id="__we"></div><div class="ckpv" id="__pv">'+gPV()+'</div><div style="font-size:12px;color:#c8c8d0;margin-bottom:8px;">匯出格式</div><div class="ckfr"><button class="cktb'+(fmt==='txt'?' on':'')+'" data-fmt="txt">純文字</button><button class="cktb'+(fmt==='md'?' on':'')+'" data-fmt="md">Markdown</button><button class="cktb'+(fmt==='json'?' on':'')+'" data-fmt="json">JSON</button></div><div class="ck2col"><div><div class="ck2colh">輸出內容</div><div class="ck2colc"><label class="ckcr'+(oA?' off':'')+'" id="__laff"><input type="checkbox" id="__iaf"'+(iA?' checked':'')+'><span>附上心聲與好感</span></label><label class="ckcr"><input type="checkbox" id="__ist"'+(iS?' checked':'')+'><span>附上好感度統計</span></label><label class="ckcr"><input type="checkbox" id="__ws"'+(ws?' checked':'')+'><span>附上訊息統計</span></label><details style="margin-top:0px;cursor:pointer;"><summary style="outline:none;user-select:none;font-size:13px;color:#c8c8d0;display:list-item;">名稱替換</summary><div style="margin-top:8px;padding:10px;background:#1a1a1a;border:1px solid #38383a;border-radius:8px;display:flex;flex-direction:column;gap:8px;"><input id="__rep_aN" class="ckinp" placeholder="AI 替換稱呼 (留空不換)" style="padding:6px 10px;font-size:12px;height:28px;"><input id="__rep_uN" class="ckinp" placeholder="玩家替換稱呼 (留空不換)" style="padding:6px 10px;font-size:12px;height:28px;"><label class="ckcr" style="margin-top:2px;"><input type="checkbox" id="__rep_txt" checked><span style="font-size:11px;">同步替換對話內文</span></label></div></details></div></div><div><div class="ck2colh">篩選條件</div><div class="ck2colc"><label class="ckcr" id="__lonly"><input type="checkbox" id="__ion"'+(oA?' checked':'')+'><span>只輸出有心聲的對話</span></label><label class="ckcr"><input type="checkbox" id="__nou"'+(noU?' checked':'')+'><span>不輸出玩家對話</span></label><label class="ckcr"><input type="checkbox" id="__fl"'+(ckFl?' checked':'')+'><span>套用狀態欄過濾</span></label></div></div></div><div class="ckbr"><button class="ckbt" id="__cc">取消</button><button class="ckbp" id="__ex" style="flex:2;">開始匯出 →</button></div>';
        cw.querySelectorAll('[data-fmt]').forEach(function(b){b.onclick=function(){fmt=this.dataset.fmt;rdr();};});
        var asI=cw.querySelector('#__as'),aeI=cw.querySelector('#__ae'),weEl=cw.querySelector('#__we'),pvEl=cw.querySelector('#__pv'),tsEl=cw.querySelector('#__ts'),teEl=cw.querySelector('#__te');
        function upA(){
            var sv=parseInt(asI.value),ev=parseInt(aeI.value);weEl.textContent='';
            if(!isNaN(sv)&&!isNaN(ev)&&ev<=sv){weEl.textContent='⚠️ 結束則不能早於或等於起始則';pvEl.innerHTML='';return;}
            if(!isNaN(sv)){aL=Math.max(0,Math.min(sv-1,tot-1));tsEl.textContent=gTS(aL);}
            if(!isNaN(ev)){aH=Math.max(0,Math.min(ev-1,tot-1));teEl.textContent=gTS(aH);}
            pvEl.innerHTML=gPV();
        }
        asI.addEventListener('input',upA);aeI.addEventListener('input',upA);
        cw.querySelector('#__iaf').onchange=function(){iA=this.checked;};
        cw.querySelector('#__ist').onchange=function(){iS=this.checked;};
        cw.querySelector('#__ion').onchange=function(){oA=this.checked;var laf=cw.querySelector('#__laff');if(oA){laf.classList.add('off');iA=false;cw.querySelector('#__iaf').checked=false;}else laf.classList.remove('off');};
        cw.querySelector('#__nou').onchange=function(){noU=this.checked;};
        cw.querySelector('#__fl').onchange=function(){ckFl=this.checked;};
        cw.querySelector('#__ws').onchange=function(){ws=this.checked;};
        cw.querySelector('#__cc').onclick=function(){cm.remove();};
        cw.querySelector('#__ex').onclick=function(){
            if(weEl.textContent)return;
            var lo=Math.min(aL,aH),hi=Math.max(aL,aH);
            cm.remove();
            
            var repAN = '', repUN = '', repTxt = false;
            var repANEl = cw.querySelector('#__rep_aN');
            if (repANEl) {
                repAN = repANEl.value.trim();
                repUN = cw.querySelector('#__rep_uN').value.trim();
                repTxt = cw.querySelector('#__rep_txt').checked;
            }

            var opts={fmt:fmt,ws:ws,iA:iA,iS:iS,oA:oA,noU:noU,ckFl:ckFl,repAN:repAN,repUN:repUN,repTxt:repTxt};
            
            var doEx=function(af){
                if(ckFl){shFlModal(arr,lo,hi,opts,af);}
                else{dExp(arr,lo,hi,opts,af);}
            };
            var nA=iA||iS||oA||ckFl;
            if(nA){var ov=shOv('正在載入心聲資料…');ldAff().then(function(af){ov.rm();doEx(af);});}
            else doEx([]);
        };
    }
    rdr();cm.appendChild(cw);document.body.appendChild(cm);
}

function modeTime(arr){var o=document.createElement('div');o.className='cko';var w=document.createElement('div');w.className='ckb';w.innerHTML='<div class="ckt">📅 選擇時間範圍</div><div class="cks">不填代表不限制該欄位</div><div class="ckl">⏱ 開始時間</div><div class="ckrow"><input type="date" id="__sd" class="ckinp"><input type="time" id="__st" class="ckinpsm"></div><div class="ckl">⏱ 結束時間</div><div class="ckrow" style="margin-bottom:20px;"><input type="date" id="__ed" class="ckinp"><input type="time" id="__et" class="ckinpsm"></div><div class="ckwe" id="__we"></div><div class="ckbr"><button class="ckbt" id="__cc">取消</button><button class="ckbp" id="__ok">確定</button></div>';o.appendChild(w);document.body.appendChild(o);w.querySelector('#__cc').onclick=function(){o.remove();};w.querySelector('#__ok').onclick=function(){var sd=w.querySelector('#__sd').value,st=w.querySelector('#__st').value,ed=w.querySelector('#__ed').value,et=w.querySelector('#__et').value,sT=sd?new Date(sd+'T'+(st||'00:00')):null,eT=ed?new Date(ed+'T'+(et||'23:59')):null,we=w.querySelector('#__we');if(sT&&eT&&sT>=eT){we.textContent='⚠️ 結束時間不能早於或等於開始時間';return;}var lo=0,hi=arr.length-1;if(sT||eT){lo=-1;hi=-1;for(var i=0;i<arr.length;i++){var d=gT(arr[i]);if(!d)continue;if(sT&&d<sT)continue;if(eT&&d>eT)continue;if(lo===-1)lo=i;hi=i;}if(lo===-1){we.textContent='⚠️ 該時間範圍內沒有任何訊息';return;}}o.remove();shCf(arr,lo,hi);};}

function mClick(arr){
    var tot=arr.length,tsM=new Map(),dirty=false,obs=null;
    for(var mi=0;mi<tot;mi++){var mt=gT(arr[mi]);if(mt)tsM.set(mt.getTime(),mi);}
    function rbTsM(){dirty=false;tsM.clear();for(var i=0;i<arr.length;i++){var t=gT(arr[i]);if(t)tsM.set(t.getTime(),i);}}
    function gIdx(el){
        if(dirty)rbTsM();var ts=el.dataset.createdAt||el.dataset.timestamp||null;
        if(ts){
            var d=new Date(ts);if(!isNaN(d.getTime())){
                if(tsM.has(d.getTime()))return tsM.get(d.getTime());
                var bst=-1,bstD=Infinity;tsM.forEach(function(idx,ms){var df=Math.abs(ms-d.getTime());if(df<bstD&&df<5000){bstD=df;bst=idx;}});if(bst>=0)return bst;
            }
        }
        var dm=Array.from(document.querySelectorAll('.message-container'));return tot-dm.length+dm.indexOf(el);
    }
    var anc=null,flt=null;var tip=document.createElement('div');tip.className='cktip';document.body.appendChild(tip);
    var mouseX=0,mouseY=0;document.addEventListener('mousemove',function onMM(e){mouseX=e.clientX;mouseY=e.clientY;tip.style.left=(mouseX+14)+'px';tip.style.top=mouseY+'px';});
    var hk=null;if(window.innerWidth>=480){hk=document.createElement('div');hk.className='ckhk';hk.innerHTML='↑↓ 移動終點 Esc 退出';document.body.appendChild(hk);}
    
    var bar=document.createElement('div');bar.className='ckbar';
    bar.innerHTML='<div class="ckbt1"><div class="ckbs" id="__ckbs_txt"></div><button class="ckbn" id="__br">重設</button><button class="ckbg" id="__bd">完成選取</button><button class="ckbn" id="__bc">✕</button></div>';
    document.body.appendChild(bar);
    var bsTxt = bar.querySelector('#__ckbs_txt');
    var bdBtn = bar.querySelector('#__bd');
    
    var rt=document.getElementById('chat-window')||document.querySelector('.messages-container')||document.querySelector('.chat-messages')||document.body;
    var mcListeners=[];
    obs=new MutationObserver(function(muts){for(var i=0;i<muts.length;i++){if(muts[i].addedNodes.length){dirty=true;bindMC();break;}}});
    obs.observe(rt,{childList:true,subtree:false});
    
    function bindMC(){Array.from(document.querySelectorAll('.message-container')).forEach(function(el){if(el.__ckBound)return;el.__ckBound=true;var onEnt=function(){var idx=gIdx(el);var ia=!!(el.classList.contains('ai')||el.querySelector('.sender-name.ai'));tip.textContent='第 '+(idx+1)+' 則 '+(ia?'角色':'玩家');tip.classList.add('on');};var onLv=function(){tip.classList.remove('on');};el.addEventListener('mouseenter',onEnt);el.addEventListener('mouseleave',onLv);mcListeners.push({el:el,onEnt:onEnt,onLv:onLv});});}
    rt.classList.add('ck-active-mode');
    function gL2(){return flt===null?anc:Math.min(anc,flt);}function gH2(){return flt===null?anc:Math.max(anc,flt);}
    function cntS(){if(anc===null)return{a:0,u:0,n:0};var c=bCnt(arr,gL2(),gH2());c.n=gH2()-gL2()+1;return c;}
    function gBT(){var isM=window.innerWidth<480;if(anc===null)return'點擊起點訊息';var c=cntS();if(isM)return flt===null?'第 '+(anc+1)+' 則 點擊終點':'第 '+(gL2()+1)+' → '+(gH2()+1)+' 則 共 '+c.n+' 則';return flt===null?'🟢 第 '+(anc+1)+' 則 ｜ 請繼續點擊終點':'🟢 第 '+(gL2()+1)+' 則 → 🔴 第 '+(gH2()+1)+' 則 ｜ 共 '+c.n+' 則（角色 '+c.a+'／玩家 '+c.u+'）';}
    
    var pM=new Map();
    var uMk = debounce(function() {
        var lo=anc===null?null:gL2(),hi=anc===null?null:gH2();
        Array.from(document.querySelectorAll('.message-container')).forEach(function(el){
            var idx=gIdx(el),nx='';
            if(lo!==null){if(idx===lo&&idx===hi)nx='cksel';else if(idx===lo)nx='cksel';else if(idx===hi)nx='ckend';else if(idx>lo&&idx<hi)nx='ckmid';}
            var pv=pM.get(el)||'';if(pv===nx)return;
            if(pv)el.classList.remove(pv);if(nx)el.classList.add(nx);
            pM.set(el,nx);
        });
    }, 50);

    function uBar(){
        var rd=anc!==null;
        bsTxt.innerHTML = gBT();
        if(rd) bdBtn.classList.add('on'); else bdBtn.classList.remove('on');
    }
    
    bar.querySelector('#__bc').onclick=cUp;
    bar.querySelector('#__br').onclick=function(){anc=null;flt=null;uMk();uBar();};
    bar.querySelector('#__bd').onclick=function(){if(anc===null)return;var lo=gL2(),hi=gH2();cUp();shCf(arr,lo,hi);};

    function svEl(idx){var els=Array.from(document.querySelectorAll('.message-container'));for(var i=0;i<els.length;i++){if(gIdx(els[i])===idx){els[i].scrollIntoView({block:'nearest',behavior:'smooth'});return;}}}
    function kH(e){if(e.key==='Escape'){cUp();return;}var isM=window.innerWidth<480;if(e.key==='ArrowUp'||e.key==='ArrowDown'){if(isM)return;if(anc===null)return;var dr=e.key==='ArrowUp'?-1:1,cu=flt===null?anc:flt;flt=Math.max(0,Math.min(tot-1,cu+dr));svEl(flt);uMk();uBar();e.preventDefault();}}
    document.addEventListener('keydown',kH);
    function onCk(e){var el=e.target.closest('.message-container');if(!el)return;var idx=gIdx(el);if(anc===null){anc=idx;flt=null;}else{flt=idx;}uMk();uBar();}
    rt.addEventListener('click',onCk);
    function cUp(){
        if(obs){obs.disconnect();obs=null;}
        rt.classList.remove('ck-active-mode');bar.remove();tip.remove();if(hk)hk.remove();
        mcListeners.forEach(function(o){o.el.removeEventListener('mouseenter',o.onEnt);o.el.removeEventListener('mouseleave',o.onLv);o.el.__ckBound=false;});
        mcListeners=[];document.removeEventListener('keydown',kH);rt.removeEventListener('click',onCk);
        Array.from(document.querySelectorAll('.message-container')).forEach(function(el){el.classList.remove('cksel','ckend','ckmid');});
        window.__CKX=null;
    }
    window.__CKX=cUp;bindMC();uBar();
}

function cL(lines, R, opts) {
    opts = opts || {};
    var result=[], deleted=[], rescued=[];
    var eRules = R.filter(function(r){return r.t==='e';});
    var pRules = R.filter(function(r){return r.t==='p';});
    var rRules = R.filter(function(r){return r.t==='r';});
    var repRules = R.filter(function(r){return r.t==='rep';});
    
    var bRules = R.filter(function(r){return r.t==='b';}).map(function(r){
        return {
            rule: r,
            sArr: r.start ? r.start.split(/\r?\n/).map(function(s){return s.trim()}).filter(function(s){return s}) : [],
            eArr: r.end ? r.end.split(/\r?\n/).map(function(s){return s.trim()}).filter(function(s){return s}) : []
        };
    });

    function nQ(s){if(!s)return'';return s.replace(/[\u201c\u201d\u2018\u2019\u300c\u300d\u300e\u300f\uff02\uff07]/g,'"').replace(/\uff1a/g,':').replace(/[^\S\r\n]+/g,' ').trim();}
    function isExcept(tr){for(var ei=0;ei<eRules.length;ei++){try{if(new RegExp(eRules[ei].v).test(tr))return true;}catch(e){}}return false;}
    
    function applyRep(s){
        var rs = s;
        repRules.forEach(function(rr){
            try { rs = rs.replace(new RegExp(rr.v, 'g'), rr.rep || ''); } catch(e){}
        });
        return rs;
    }

    var i=0;
    while(i<lines.length){
        var ln=lines[i];
        var tr=ln.trim();
        var lineException=null;
        
        // 審判第 1 步：法外恩恤 (單行例外檢查)
        if(isExcept(tr)){
            lineException=eRules.find(function(e){try{return new RegExp(e.v).test(tr);}catch(ex){return false;}});
        }

        // 審判第 2 步：區塊死刑判定 (區塊處理邏輯)
        var matchedBlock=null;
        for(var bi=0;bi<bRules.length;bi++){
            var rObj = bRules[bi];
            var rule = rObj.rule;
            var startN = rObj.sArr.length;
            var startMatch = false;

            if(startN === 0 && i === 0){
                startMatch = true;
            } else if (startN > 0 && i + startN <= lines.length) {
                startMatch = true;
                for(var c=0; c<startN; c++){
                    var lStr = lines[i+c].trim();
                    if(rule.isReg) {
                        try { if(!new RegExp(rObj.sArr[c]).test(lStr)) { startMatch=false; break; } } catch(e) { startMatch=false; break; }
                    } else {
                        if(nQ(lStr).indexOf(nQ(rObj.sArr[c])) !== 0) { startMatch=false; break; }
                    }
                }
            }

            if(startMatch){
                var endN = rObj.eArr.length;
                var foundEnd = false;
                var endStartIdx = i + startN;

                if(endN === 0){
                    while(endStartIdx < lines.length) {
                        if(lines[endStartIdx].trim() === '') { foundEnd = true; break; }
                        endStartIdx++;
                    }
                    if(!foundEnd) { foundEnd = true; endStartIdx = lines.length; }
                } else {
                    while(endStartIdx <= lines.length - endN) {
                        var endMatch = true;
                        for(var c=0; c<endN; c++) {
                            var lStr = lines[endStartIdx+c].trim();
                            if(rule.isReg) {
                                try { if(!new RegExp(rObj.eArr[c]).test(lStr)) { endMatch=false; break; } } catch(e) { endMatch=false; break; }
                            } else {
                                if(nQ(lStr).indexOf(nQ(rObj.eArr[c])) !== 0) { endMatch = false; break; }
                            }
                        }
                        if(endMatch) { foundEnd = true; break; }
                        endStartIdx++;
                    }
                }

                if(foundEnd){
                    var blockLength = endStartIdx - i + endN;
                    if(endN === 0 && endStartIdx < lines.length && lines[endStartIdx].trim() === '') { blockLength = endStartIdx - i; }
                    
                    // 檢查「區塊例外關鍵字」
                    var blockHasExc = false;
                    if(rule.exc) {
                        for(var c=0; c<blockLength; c++){
                            if(i+c < lines.length && lines[i+c].indexOf(rule.exc) >= 0) {
                                blockHasExc = true; break;
                            }
                        }
                    }

                    if(blockHasExc) {
                        // 區塊拿到免死金牌，全部進入第 3 步美容並保留
                        for(var c=0; c<blockLength; c++){
                            if(i >= lines.length) break;
                            var bln = lines[i];
                            rescued.push({line: bln, lineIndex: i, rule: {t:'b', v:'區塊例外包含: '+rule.exc}});
                            result.push(applyRep(bln));
                            i++;
                        }
                    } else {
                        // 區塊執行死刑 (但仍允許單行例外法外開恩)
                        for(var c=0; c<blockLength; c++){
                            if(i >= lines.length) break;
                            var bln = lines[i], btr = bln.trim();
                            if(isExcept(btr)){
                                var _er=eRules.find(function(e){try{return new RegExp(e.v).test(btr);}catch(ex){return false;}});
                                rescued.push({line:bln,lineIndex:i,rule:_er});
                                result.push(applyRep(bln));
                            } else {
                                deleted.push({line:bln,lineIndex:i,rule:rule});
                            }
                            i++;
                        }
                    }
                    matchedBlock = rule;
                    break;
                }
            }
        }
        if(matchedBlock) continue;

        // 如果這行稍早拿到了單行免死金牌，進入第 3 步並保留
        if(lineException){
            rescued.push({line:ln,lineIndex:i,rule:lineException});
            result.push(applyRep(ln));
            i++; continue;
        }

        // 審判第 2 步：智能時間提取 (也是一種死刑，但幫你保留全屍)
        // ==========================================
        // 🌟 智能時間排除 & 彩蛋時間字串預留提取機制
        // ==========================================
        var timeMatchData = null;
        if(opts.smartTime){
            // 第三道閘門加強：包含逗號、句號等完整句子特徵，直接發放免死金牌 (保護對話與一般敘述)
            if(tr.indexOf('「') >= 0 || tr.indexOf('」') >= 0 || tr.indexOf('"') >= 0 || tr.indexOf('，') >= 0 || tr.indexOf('。') >= 0) {
                // 安全，不提早排除
            } else {
                // 第一道閘門升級 (無腦去符號)：利用 [^a-zA-Z0-9\u4e00-\u9fa5\s] 剝除所有「非中英數字與空白」的特殊符號
                var matchPfx = tr.match(/^([^a-zA-Z0-9\u4e00-\u9fa5\s]*)(.*)/);
                if (matchPfx) {
                    var coreStr = matchPfx[2].trim();
                    // 第二道閘門升級 (特徵組合)：不再窮舉，而是比對「日期+時間組件」的高密度特徵
                    var tPats = [
                        // 包含明確的 日期結構 (年/月/日) 混合可選的 時間 (點/分) 與星期
                        /^(?:時間[：｜\s]+)?((?:20\d{2}[\/\-年])?\d{1,2}[\/\-月]\d{1,2}日?(?:\s*\(?[週星]期[一二三四五六日天]\)?)?[\s｜]*(?:\d{1,2}[:：點]\d{1,2}[分秒]?)?.*)/,
                        // 純時間開頭 (如 17:30, 21點45分)
                        /^(\d{1,2}[:：點]\d{1,2}[分秒]?[\s｜]+.*)/,
                        // 遊戲常見的 Day/日期標記 (如 D15 21:30, 墜機 D1)
                        /^([^\s：]{0,10}\s*[Dd]\d+[\s｜,]*.*)/,
                        // 時間： 或 第X年 開頭
                        /^(時間[：｜\s]+.*)/,
                        /^(第[一二三四五六七八九十百千萬0-9]+年[\s｜].*)/
                    ];
                    for(var st=0; st<tPats.length; st++){
                        var tm = coreStr.match(tPats[st]);
                        if (tm) { timeMatchData = tm[1]; break; }
                    }
                }
            }
        }

        if(timeMatchData){
            var formattedTime = '> ⏱ ' + timeMatchData;
            result.push(formattedTime); // 第 3 步，格式化後保留
            rescued.push({line: ln, lineIndex: i, rule: {t: 'smartTime', v: '智能時間美化'}});
            i++; continue;
        }

        // 審判第 2 步：前綴與正則死刑
        var delByRule=null;
        for(var pi=0;pi<pRules.length;pi++){
            if(nQ(pRules[pi].v)&&nQ(tr).indexOf(nQ(pRules[pi].v))===0){delByRule=pRules[pi];break;}
        }
        if(!delByRule){
            for(var ri=0;ri<rRules.length;ri++){
                try{if(new RegExp(rRules[ri].v).test(tr)){delByRule=rRules[ri];break;}}catch(e){}
            }
        }
        
        // 最終判決
        if(delByRule) {
            deleted.push({line:ln,lineIndex:i,rule:delByRule});
        } else {
            // 審判第 3 步：倖存者進入醫美整容 (Replace)
            result.push(applyRep(ln));
        }
        i++;
    }
    return{result:result,deleted:deleted,rescued:rescued};
}

function getCoreLabel(line) {
    var m = line.match(/^[^a-zA-Z0-9\u4e00-\u9fa5\s]+(.*)/);
    var core = m ? m[1] : line;
    core = core.trim();
    if(!core) return null;
    var cIdx = core.search(/[:：]/);
    if(cIdx >= 1 && cIdx <= 15) return core.substring(0, cIdx).trim();
    var strippedEnd = core.replace(/[^a-zA-Z0-9\u4e00-\u9fa5\s]+$/, '').trim();
    if(strippedEnd.length > 0 && strippedEnd.length <= 15 && strippedEnd.split(/\s+/).length <= 3) return strippedEnd;
    return null;
}
function nQ(s){if(!s)return'';return s.replace(/[\u201c\u201d\u2018\u2019\u300c\u300d\u300e\u300f\uff02\uff07]/g,'"').replace(/\uff1a/g,':').replace(/[^\S\r\n]+/g,' ').trim();}
function isBdr(line){return/^[\s\*\=\-\─\━\─\u2500-\u257f]{3,}$/.test(line.trim());}
function autoDetect(samples){
    var pfxSets = [];
    var bRules = [];
    samples.forEach(function(sm){
        var lines = sm.split('\n');
        var pfxSet = {};
        var i = 0;
        while(i < lines.length) {
            var ln = lines[i];
            var tr = ln.trim();
            if(!tr) { i++; continue; }
            
            var cIdx = tr.search(/[:：]/);
            var isTitle = cIdx >= 0 && !tr.substring(cIdx + 1).match(/[a-zA-Z0-9\u4e00-\u9fa5]/);
            if(isTitle && tr.length < 30 && !isBdr(ln)) {
                var startStr = tr;
                var blockEnd = '';
                var j = i + 1;
                var hasListItems = false;
                while(j < lines.length) {
                    var ntr = lines[j].trim();
                    if(ntr === '' || isBdr(ntr)) { blockEnd = ntr === '' ? '' : ntr; break; }
                    if(ntr.indexOf('「')>=0 || ntr.indexOf('」')>=0 || ntr.indexOf('"')>=0 || ntr.indexOf('。')>=0) { blockEnd = ''; break; }
                    if(ntr.match(/^[^a-zA-Z0-9\u4e00-\u9fa5\s]*(\d+\.|-|\*|•|▪|\>)/)) {
                        hasListItems = true;
                    }
                    j++;
                }
                if(hasListItems) {
                    var exists = bRules.find(function(b){return b.start === startStr;});
                    if(!exists) bRules.push({t:'b', start: startStr, end: blockEnd, isReg: false, exc: '', a:true});
                    i = j; continue;
                }
            }

            if(isBdr(ln)) {
    // 核心優化：分隔線不自動收錄為刪除規則，保留作為劇本場景分隔
} else {
                var label = getCoreLabel(ln);
                if(label) {
                    var safeLabel = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                    var regStr = '^[^a-zA-Z0-9\\u4e00-\\u9fa5\\s]*' + safeLabel + '(?:[^a-zA-Z0-9\\u4e00-\\u9fa5\\s]|:|：)*';
                    pfxSet[label] = { t: 'r', v: regStr, a: true };
                }
            }
            i++;
        }
        pfxSets.push(pfxSet);
    });

    var commonRules = [];
    if(pfxSets.length > 0) {
        var commonKeys = Object.keys(pfxSets[0]);
        for(var k=1; k<pfxSets.length; k++){ 
            commonKeys = commonKeys.filter(function(key){ return pfxSets[k][key]; }); 
        }
        commonKeys.forEach(function(key){
            commonRules.push(pfxSets[0][key]);
        });
    }
    return bRules.concat(commonRules);
}

function flLsKey(){return'ckFl_'+location.hostname+location.pathname+'_'+gAN();}
function flSave(R){try{localStorage.setItem(flLsKey(),JSON.stringify(R.filter(function(r){return!r.a;})));}catch(e){}}function flLoad(){try{var s=localStorage.getItem(flLsKey());return s?JSON.parse(s):[];}catch(e){return[];}}
function convertPlainTextToSmartRegex(plainText){let e=plainText.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');e=e.replace(/\b(\d+)\b/g,'\\d+');return'.*'+e+'.*';}

function shFlModal(arr,lo,hi,opts,af){
    var R=flLoad(), aiMsgs=[];
    for(var i=lo;i<=hi;i++){if(arr[i]&&isAI(arr[i]))aiMsgs.push({idx:i,msg:arr[i]});}
    var autoSamples=[];if(aiMsgs.length>=1){var picks=[];if(aiMsgs.length===1)picks=[0];else if(aiMsgs.length===2)picks=[0,aiMsgs.length-1];else picks=[0,Math.floor((aiMsgs.length-1)/2),aiMsgs.length-1];picks.forEach(function(p){var m=aiMsgs[p];autoSamples.push({label:'第 '+(m.idx+1)+' 則',text:m.msg.content||m.msg.message||m.msg.text||''});});}
    var manSamples=[], allSamples=autoSamples.concat(manSamples), curTab=0, ruleTab='p';
var subTabs = { r:'lazy', b:'lazy', e:'lazy', rep:'lazy' };
    var o=document.createElement('div');o.className='cko';o.style.alignItems='flex-start';o.style.paddingTop='20px';
    var w=document.createElement('div');w.style.cssText='background:#131313;border-radius:16px;width:94%;max-width:680px;max-height:88vh;display:flex;flex-direction:column;box-shadow:0 8px 32px rgba(0,0,0,.5);color:#fff;font-family:sans-serif;animation:ckI .25s ease;overflow:hidden;';
    
    function ruleLabel(r){
        var colors={p:'#1e4d8c',r:'#7c3a00',b:'#3a1e6e',e:'#1e6e3a',rep:'#8c6b1e'};
        var names={p:'前綴',r:'正則',b:'區塊',e:'例外',rep:'替換'};
        var bg=colors[r.t]||'#333', nm=names[r.t]||'?';
        var _rn=r.v||'';
        var sLines=r.start?r.start.split(/\r?\n/).length:0, eLines=r.end?r.end.split(/\r?\n/).length:0;
        var stTxt=r.start?r.start.replace(/\r?\n/g,' ↵ ').slice(0,15)+(r.start.length>15?'...':'')+(sLines>1?' (連'+sLines+'行)':''):'從頭';
        var edTxt=r.end?r.end.replace(/\r?\n/g,' ↵ ').slice(0,15)+(r.end.length>15?'...':'')+(eLines>1?' (連'+eLines+'行)':''):'空行';
        var txt=r.t==='b'?(nm+(r.isReg?'[正則] ':' ')+stTxt+'→'+edTxt+(r.exc?' (例外: '+r.exc+')':'')):r.t==='e'?('例外保留 '+_rn):r.t==='rep'?('替換 '+_rn+' ➔ '+(r.rep||'空')):(nm+' '+_rn);
        return'<span style="display:inline-flex;align-items:center;gap:4px;background:'+bg+';border-radius:6px;padding:3px 8px;font-size:11px;cursor:default;margin:2px;" title="'+txt.replace(/"/g,'&quot;')+'">'+txt+(r.a?'<span style="width:5px;height:5px;border-radius:50%;background:#4caf50;display:inline-block;margin-left:3px;"></span>':'')+'<span data-del style="margin-left:4px;cursor:pointer;color:#aaa;">×</span></span>';
    }
    function rdrRuleList(el){
        el.innerHTML='';if(!R.length){el.innerHTML='<span style="font-size:12px;color:#555;">尚無規則</span>';}
        else{var h='';R.forEach(function(r,ri){h+=ruleLabel(r);});el.innerHTML=h;el.querySelectorAll('[data-del]').forEach(function(btn,ri){btn.onclick=function(e){e.stopPropagation();R.splice(ri,1);flSave(R);rdrAll();};});}
    }
    function escH(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
    function previewSample(text,container,statEl){
        var lines=text.split('\n');
        var smOpts = { smartTime: w.querySelector('#__fl_smart').checked };
        var out=cL(lines,R,smOpts);
        var h='';
        
        lines.forEach(function(ln,li){
            var isDel=out.deleted.some(function(d){return d.line===ln&&d.lineIndex===li;});
            var isRescued=out.rescued&&out.rescued.some(function(r){return r.line===ln&&r.lineIndex===li;});
            
            var isRep = false; var dispStr = ln; var matchedRepRule = null;
            if(!isDel) {
                var repRules = R.filter(function(r){return r.t==='rep';});
                repRules.forEach(function(rr){
                    try{var nr=dispStr.replace(new RegExp(rr.v,'g'),rr.rep||'');if(nr!==dispStr){isRep=true;dispStr=nr;matchedRepRule=rr;}}catch(e){}
                });
                var rInfo = out.rescued?out.rescued.find(function(d){return d.line===ln&&d.lineIndex===li;}):null;
                if(rInfo && rInfo.rule && rInfo.rule.t === 'smartTime'){
                    var matchPfx = ln.trim().match(/^([\*\#\>\-\=\~\u25b4\u25b8\u25ba\u2605\u25c6✦✨▪▸▰▴ᛈ\[\]\s]*)(.*)/);
                    if (matchPfx) dispStr = '> ⏱ ' + matchPfx[2].trim();
                    isRep = true; matchedRepRule = {t:'smartTime'};
                }
            }
            
            var bg=isDel?'rgba(252,60,123,0.18)':(isRep?'rgba(255,170,0,0.18)':'rgba(76,175,80,0.08)');
            var col=isDel?'#fc3c7b':(isRep?'#ffaa00':'#c8c8d0');
            h+='<div data-li="'+li+'"style="font-size:12px;padding:2px 6px;border-radius:4px;margin:1px 0;background:'+bg+';color:'+col+';cursor:'+(isDel||isRescued||isRep?'pointer':'default')+';white-space:pre-wrap;word-break:break-all;">'+escH(dispStr)+'</div>';
        });
        container.innerHTML=h;statEl.textContent='共'+lines.length+'行，刪除'+out.deleted.length+'行，保留'+out.result.length+'行';
        container.querySelectorAll('[data-li]').forEach(function(div){
            var li=parseInt(div.dataset.li), ln=lines[li];
            var dInfo=out.deleted.find(function(d){return d.line===ln&&d.lineIndex===li;}), rInfo=out.rescued?out.rescued.find(function(d){return d.line===ln&&d.lineIndex===li;}):null;
            var isRep=false; var matchedRepRule = null;
            if(!dInfo){ R.filter(function(r){return r.t==='rep';}).forEach(function(rr){try{if(ln!==ln.replace(new RegExp(rr.v,'g'),'')){isRep=true;matchedRepRule=rr;}}catch(e){}}); }
            if(rInfo && rInfo.rule && rInfo.rule.t === 'smartTime') { isRep = true; matchedRepRule = {t:'smartTime'}; }

            if(!dInfo&&!rInfo&&!isRep)return;
            var open=false;div.onclick=function(){open=!open;var ex=div.querySelector('.ck-rule-ex');if(open){if(!ex){ex=document.createElement('div');ex.className='ck-rule-ex';if(rInfo&&rInfo.rule&&rInfo.rule.t!=='smartTime'){ex.style.cssText='font-size:10px;color:#4caf50;margin-top:2px;padding:2px 6px;background:#1a1a1a;border-radius:4px;';ex.textContent='例外保留「'+(rInfo.rule.v||'')+'」';}else if(dInfo){var r=dInfo.rule,nms={p:'前綴',r:'正則',b:'區塊',smartTime:'智能'},nm=nms[r.t]||'規則',rv=r.t==='b'?r.start+'→'+(r.end||'空行'):r.v||'';ex.style.cssText='font-size:10px;color:#888;margin-top:2px;padding:2px 6px;background:#1a1a1a;border-radius:4px;';ex.textContent=nm+'刪除「'+rv+'」';}else if(isRep){ex.style.cssText='font-size:10px;color:#ffaa00;margin-top:2px;padding:2px 6px;background:#1a1a1a;border-radius:4px;';if(matchedRepRule&&matchedRepRule.t==='smartTime') ex.textContent='✨ 智能時間保留並美化'; else if(matchedRepRule) ex.textContent='替換規則「'+matchedRepRule.v+'」';}div.appendChild(ex);}else ex.style.display='';}else{if(ex)ex.style.display='none';}};
        });
    }
    function rdrSampleTabs(tabsEl,preEl,statEl){tabsEl.innerHTML='';allSamples.forEach(function(sm,si){var btn=document.createElement('button');btn.textContent=sm.label;btn.style.cssText='padding:5px 10px;border-radius:8px;border:none;font-size:12px;font-weight:600;cursor:pointer;margin-right:4px;margin-bottom:4px;transition:all.2s;background:'+(si===curTab?'#fc3c7b':'#1f1f20')+';color:'+(si===curTab?'#fff':'#aaa');btn.onclick=function(){curTab=si;rdrAll();};var rmBtn=document.createElement('span');rmBtn.textContent='×';rmBtn.style.cssText='margin-left:4px;cursor:pointer;color:'+(si===curTab?'rgba(255,255,255,.7)':'#555');rmBtn.onclick=function(e){e.stopPropagation();if(si<autoSamples.length)autoSamples.splice(si,1);else manSamples.splice(si-autoSamples.length,1);allSamples=autoSamples.concat(manSamples);if(curTab>=allSamples.length)curTab=Math.max(0,allSamples.length-1);rdrAll();};btn.appendChild(rmBtn);tabsEl.appendChild(btn);});if(!allSamples.length){preEl.innerHTML='<span style="color:#555;font-size:12px;">尚無樣本</span>';statEl.textContent='';return;}previewSample(allSamples[curTab].text,preEl,statEl);}
    
    function rdrRuleInput(el) {
        var tabs = { p: '前綴', r: '刪除', b: '區塊', e: '例外', rep: '替換' };
        var tH = '<div style="display:flex;gap:4px;background:#1a1a1a;border-radius:12px;padding:4px;margin-bottom:12px;border:1px solid #38383a;">';
        Object.keys(tabs).forEach(function(k) { tH += '<button data-rt="' + k + '" style="flex:1;padding:8px;border-radius:10px;border:none;font-size:13px;font-weight:600;cursor:pointer;background:' + (ruleTab === k ? '#fc3c7b' : 'transparent') + ';color:' + (ruleTab === k ? '#fff' : '#c8c8d0') + ';">' + tabs[k] + '</button>'; });
        tH += '</div>'; 
        
        // 抓取當前子分頁狀態與主題色
        var st = subTabs[ruleTab] || 'lazy';
        var tabCol = ruleTab==='e' ? '#4caf50' : (ruleTab==='rep' ? '#ffaa00' : '#fc3c7b');
        var stH = '';
        
        // 除了前綴，其他都有「懶人/進階」雙切換按鈕
        if (ruleTab !== 'p') {
            stH = '<div style="display:flex;gap:8px;margin-bottom:12px;">' +
                  '<button data-st="lazy" style="flex:1;padding:6px;border-radius:8px;border:1px solid '+(st==='lazy'?tabCol:'#38383a')+';font-size:12px;font-weight:700;cursor:pointer;background:' + (st==='lazy'?tabCol:'transparent') + ';color:' + (st==='lazy'?'#111':'#888') + ';">懶人模式</button>' +
                  '<button data-st="adv" style="flex:1;padding:6px;border-radius:8px;border:1px solid '+(st==='adv'?tabCol:'#38383a')+';font-size:12px;font-weight:700;cursor:pointer;background:' + (st==='adv'?tabCol:'transparent') + ';color:' + (st==='adv'?'#111':'#888') + ';">進階正則</button>' +
                  '</div>';
        }

        var body = '';
        if (ruleTab === 'p') {
            body = '<div style="font-size:11px;color:#c8c8d0;margin-bottom:12px;padding:12px 14px;background:#1a1a1a;border-radius:12px;border:1px solid #38383a;"><strong>✂️ 前綴刪除：</strong>刪除以輸入字串開頭的行。</div><div style="display:flex;gap:8px;margin-bottom:12px;"><input id="__flpi" placeholder="輸入前綴字串，如：【訊息】" class="ckinp"><button id="__flpa" style="padding:10px 16px;border-radius:8px;border:none;background:#fc3c7b;color:#ffffff;font-size:14px;font-weight:700;cursor:pointer;">新增</button></div>';
        } else if (ruleTab === 'r') {
            if(st === 'lazy') {
                body = '<div style="font-size:11px;color:#c8c8d0;margin-bottom:12px;padding:12px 14px;background:#1a1a1a;border-radius:12px;border:1px solid #38383a;">貼入想刪除的純文字，系統會自動轉換並精準刪除。</div><div style="display:flex;gap:8px;margin-bottom:12px;"><input id="__flrkw" placeholder="貼入想刪除的純文字" class="ckinp"><button id="__flrkb" style="padding:10px 16px;border-radius:8px;border:none;background:'+tabCol+';color:#111;font-size:14px;font-weight:700;cursor:pointer;">新增</button></div>';
            } else {
                body = '<div style="font-size:11px;color:#c8c8d0;margin-bottom:12px;padding:12px 14px;background:#1a1a1a;border-radius:12px;border:1px solid #38383a;">使用正規表達式進行複雜的特徵比對與刪除。</div><div style="display:flex;gap:8px;margin-bottom:12px;"><input id="__flri" placeholder="輸入正規表達式" class="ckinp" style="font-family:monospace;"><button id="__flra" style="padding:10px 16px;border-radius:8px;border:none;background:'+tabCol+';color:#111;font-size:14px;font-weight:700;cursor:pointer;">新增</button></div><div style="font-size:11px;color:#c8c8d0;margin-bottom:8px;">常用格式</div><div style="display:flex;flex-wrap:wrap;gap:8px;"><button class="__flrq" data-v="^\\*✦\\d" style="padding:8px 12px;border-radius:8px;border:1px solid #38383a;background:#1a1a1a;color:#c8c8d0;font-size:12px;cursor:pointer;">*✦數字開頭</button><button class="__flrq" data-v="^\\*\\*\\*" style="padding:8px 12px;border-radius:8px;border:1px solid #38383a;background:#1a1a1a;color:#c8c8d0;font-size:12px;cursor:pointer;">*** 分隔線</button><button class="__flrq" data-v="^【" style="padding:8px 12px;border-radius:8px;border:1px solid #38383a;background:#1a1a1a;color:#c8c8d0;font-size:12px;cursor:pointer;">【 開頭</button></div>';
            }
        } else if (ruleTab === 'b') {
            var desc = st === 'lazy' ? '起終點輸入純文字即可。' : '起終點的每一行皆支援正規表達式。';
            body = '<div style="font-size:11px;color:#c8c8d0;margin-bottom:12px;padding:12px 14px;background:#1a1a1a;border-radius:12px;border:1px solid #38383a;"><strong>🗑️ 區塊刪除：</strong>從起點刪除至終點。支援多行。<br>'+desc+'</div><div style="display:flex;flex-direction:column;gap:8px;"><textarea id="__flbs" rows="2" placeholder="起點字串（可多行，留空＝從頭）" style="width:100%;padding:8px;border-radius:6px;border:1px solid #38383a;background:#111;color:#fff;font-size:13px;resize:vertical;font-family:monospace;box-sizing:border-box;"></textarea><textarea id="__flbe" rows="2" placeholder="終點字串（可多行，留空＝空行）" style="width:100%;padding:8px;border-radius:6px;border:1px solid #38383a;background:#111;color:#fff;font-size:13px;resize:vertical;font-family:monospace;box-sizing:border-box;"></textarea><div style="display:flex;gap:8px;align-items:center;"><input id="__flbexc" placeholder="例外關鍵字 (若區塊含此字則保留整個區塊)" class="ckinp" style="padding:6px 10px;font-size:12px;"></div><button id="__flba" style="padding:10px 16px;border-radius:8px;border:none;background:'+tabCol+';color:#111;font-size:14px;font-weight:700;cursor:pointer;align-self:flex-start;">新增區塊</button></div>';
        } else if (ruleTab === 'e') {
            if(st === 'lazy') {
                body = '<div style="font-size:11px;color:#c8c8d0;margin-bottom:12px;padding:12px 14px;background:#1a1a1a;border-radius:12px;border:1px solid #38383a;">貼入想保留的純文字，即使被刪除規則命中也會強制保留。</div><div style="display:flex;gap:8px;margin-bottom:12px;"><input id="__flekw" placeholder="貼入想保留的純文字" class="ckinp"><button id="__flekb" style="padding:10px 16px;border-radius:8px;border:none;background:'+tabCol+';color:#111;font-size:14px;font-weight:700;cursor:pointer;">新增</button></div>';
            } else {
                body = '<div style="font-size:11px;color:#c8c8d0;margin-bottom:12px;padding:12px 14px;background:#1a1a1a;border-radius:12px;border:1px solid #38383a;">使用正規表達式設定例外豁免條件。</div><div style="display:flex;gap:8px;margin-bottom:12px;"><input id="__flei" placeholder="輸入要豁免的正規表達式" class="ckinp" style="font-family:monospace;"><button id="__flea" style="padding:10px 16px;border-radius:8px;border:none;background:'+tabCol+';color:#111;font-size:14px;font-weight:700;cursor:pointer;">新增</button></div>';
            }
        } else if (ruleTab === 'rep') {
            if(st === 'lazy') {
                body = '<div style="font-size:11px;color:#c8c8d0;margin-bottom:12px;padding:12px 14px;background:#1a1a1a;border-radius:12px;border:1px solid #38383a;">將指定的純文字無腦替換成新文字。</div><div style="display:flex;gap:8px;margin-bottom:8px;"><input id="__flrep_txt_s" placeholder="搜尋：要被替換的文字" class="ckinp"></div><div style="display:flex;gap:8px;margin-bottom:16px;"><input id="__flrep_txt_r" placeholder="替換成：新的文字" class="ckinp"><button id="__flrepa_txt" style="padding:10px 16px;border-radius:8px;border:none;background:'+tabCol+';color:#111;font-size:14px;font-weight:700;cursor:pointer;white-space:nowrap;">新增純文字替換</button></div>';
            } else {
                // UI 舉例文字已替換為 巳時 的例子
                body = '<div style="font-size:11px;color:#c8c8d0;margin-bottom:12px;padding:12px 14px;background:#1a1a1a;border-radius:12px;border:1px solid #38383a;">使用正則的 <code>$1</code> 捕獲組進行進階文字替換。</div><div style="display:flex;gap:8px;margin-bottom:8px;"><input id="__flrepv" placeholder="搜尋正則 (如：巳時\\((.*?)\\))" class="ckinp" style="font-family:monospace;"></div><div style="display:flex;gap:8px;margin-bottom:12px;"><input id="__flrepr" placeholder="替換為 (如：早上 $1)" class="ckinp" style="font-family:monospace;"><button id="__flrepa" style="padding:10px 16px;border-radius:8px;border:none;background:'+tabCol+';color:#111;font-size:14px;font-weight:700;cursor:pointer;white-space:nowrap;">新增正則替換</button></div>';
            }
        }
        
        el.innerHTML = tH + stH + body;

        // 綁定主分頁與子分頁(懶人/進階)切換事件
        el.querySelectorAll('[data-rt]').forEach(function(b) { b.onclick = function() { ruleTab = this.dataset.rt; rdrAll(); }; });
        el.querySelectorAll('[data-st]').forEach(function(b) { b.onclick = function() { subTabs[ruleTab] = this.dataset.st; rdrAll(); }; });
        
        // 綁定按鈕新增事件
        var addEvt = function(btnId, valId, type, exArg) {
            var btn = el.querySelector('#' + btnId); if(!btn) return;
            btn.onclick = function() {
                var v = el.querySelector('#' + valId).value.trim(); if(!v) return;
                var obj = { t: type, a: false };
                if(type === 'p') obj.v = v;
                else if(type === 'r' || type === 'e') {
                    if(exArg === 'smart') v = convertPlainTextToSmartRegex(v);
                    try { new RegExp(v); } catch(e) { alert('正則無效'); return; } obj.v = v;
                } else if(type === 'rep') {
                    try { new RegExp(v); } catch(e) { alert('正則無效'); return; }
                    obj.v = v; obj.rep = el.querySelector('#__flrepr').value;
                }
                R.push(obj); flSave(R); rdrAll();
            };
        };
        addEvt('__flpa', '__flpi', 'p');
        addEvt('__flra', '__flri', 'r');
        addEvt('__flrkb', '__flrkw', 'r', 'smart');
        addEvt('__flea', '__flei', 'e');
        addEvt('__flekb', '__flekw', 'e', 'smart');
        addEvt('__flrepa', '__flrepv', 'rep');
        
        var flrepa_txt = el.querySelector('#__flrepa_txt');
        if (flrepa_txt) {
            flrepa_txt.onclick = function() {
                var s = el.querySelector('#__flrep_txt_s').value.trim();
                var r = el.querySelector('#__flrep_txt_r').value;
                if (!s) return;
                var safeRegex = s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                R.push({ t: 'rep', v: safeRegex, rep: r, a: false });
                flSave(R); rdrAll();
            };
        }

        var flba = el.querySelector('#__flba');
        if(flba) flba.onclick=function(){
            var s=el.querySelector('#__flbs').value.trim(), e2=el.querySelector('#__flbe').value.trim();
            var isReg = (st === 'adv'); // 自動根據當前切換的子分頁決定是否為正則！
            var exc=el.querySelector('#__flbexc').value.trim();
            if(!s&&!e2)return; 
            R.push({t:'b',start:s,end:e2,isReg:isReg,exc:exc,a:false}); 
            flSave(R); rdrAll();
        };
        el.querySelectorAll('.__flrq, .__fleq').forEach(function(b){b.onclick=function(){var inp=el.querySelector(this.className==='__flrq'?'#__flri':'#__flei');if(inp)inp.value=this.dataset.v;};});
    }

    var html='<div style="padding:18px 20px 12px;border-bottom:1px solid #242424;flex-shrink:0;display:flex;align-items:center;justify-content:space-between;"><div style="font-size:17px;font-weight:700;">狀態欄過濾規則</div><button id="__flcl"style="background:none;border:none;color:#666;font-size:22px;cursor:pointer;">×</button></div><div style="flex:1;overflow-y:auto;padding:16px 20px 20px;display:flex;flex-direction:column;gap:14px;"><div style="background:#1a1a1a;border-radius:10px;padding:12px 14px;"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;"><span style="font-size:13px;font-weight:600;">樣本預覽</span><button id="__fladd"style="padding:4px 10px;border-radius:8px;border:1px solid #38383a;background:transparent;color:#c8c8d0;font-size:12px;cursor:pointer;">＋新增樣本</button></div><label style="display:flex;align-items:center;gap:6px;font-size:12px;color:#c8c8d0;margin-bottom:8px;cursor:pointer;"><input type="checkbox" id="__fl_smart" checked>啟用智能時間保留(並格式化)</label><div id="__fltabs"style="display:flex;flex-wrap:wrap;margin-bottom:8px;"></div><div id="__flpre"style="max-height:160px;overflow-y:auto;border-radius:6px;padding:4px;background:#111;"></div><div id="__flstat"style="font-size:11px;color:#555;margin-top:6px;"></div></div><div style="background:#1a1a1a;border-radius:10px;padding:12px 14px;"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;"><span style="font-size:13px;font-weight:600;">規則列表</span><div style="display:flex;gap:6px;"><button id="__flclra"style="padding:4px 10px;border-radius:8px;border:1px solid #fc3c7b;background:transparent;color:#fc3c7b;font-size:12px;font-weight:700;cursor:pointer;display:none;">清空自動規則</button><button id="__flauto"style="padding:4px 10px;border-radius:8px;border:none;background:#4caf50;color:#111;font-size:12px;font-weight:700;cursor:pointer;">自動偵測</button></div></div><div id="__flrl"style="display:flex;flex-wrap:wrap;gap:2px;min-height:28px;"></div></div><div style="background:#1a1a1a;border-radius:10px;padding:12px 14px;"><div style="font-size:13px;font-weight:600;margin-bottom:8px;">新增規則</div><div id="__flri2"></div></div></div><div style="padding:14px 20px;border-top:1px solid #242424;display:flex;gap:10px;flex-shrink:0;"><button id="__flcan"style="flex:1;padding:11px;border-radius:10px;border:1px solid #38383a;background:transparent;color:#c8c8d0;font-size:14px;font-weight:700;cursor:pointer;">取消</button><button id="__flok"style="flex:2;padding:11px;border-radius:10px;border:none;background:#fc3c7b;color:#fff;font-size:14px;font-weight:700;cursor:pointer;">確認套用並匯出</button></div>';
    w.innerHTML=html;o.appendChild(w);document.body.appendChild(o);
    var tabsEl=w.querySelector('#__fltabs'),preEl=w.querySelector('#__flpre'),statEl=w.querySelector('#__flstat'),rlEl=w.querySelector('#__flrl'),riEl=w.querySelector('#__flri2');
    w.querySelector('#__fl_smart').onchange = function(){ rdrAll(); };
    function rdrAll(){allSamples=autoSamples.concat(manSamples);rdrSampleTabs(tabsEl,preEl,statEl);rdrRuleList(rlEl);rdrRuleInput(riEl);}
    w.querySelector('#__flcl').onclick=function(){o.remove();};w.querySelector('#__flcan').onclick=function(){o.remove();};
    w.querySelector('#__fladd').onclick=function(){var ta=document.createElement('textarea');ta.placeholder='貼入任意對話文字…';ta.style.cssText='width:100%;height:100px;background:#1f1f20;border:1px solid#38383a;border-radius:8px;color:#fff;font-size:12px;padding:8px;box-sizing:border-box;resize:vertical;margin-top:8px;';var wrap=document.createElement('div');wrap.style.cssText='background:#1a1a1a;border-radius:10px;padding:12px 14px;';var row=document.createElement('div');row.style.cssText='display:flex;gap:6px;margin-top:6px;';var ok=document.createElement('button');ok.textContent='確認加入';ok.style.cssText='padding:6px 12px;border-radius:8px;border:none;background:#fc3c7b;color:#fff;font-size:12px;cursor:pointer;';var cn=document.createElement('button');cn.textContent='取消';cn.style.cssText='padding:6px 12px;border-radius:8px;border:1px solid#38383a;background:transparent;color:#c8c8d0;font-size:12px;cursor:pointer;';row.appendChild(ok);row.appendChild(cn);wrap.appendChild(ta);wrap.appendChild(row);w.querySelector('div[style*="overflow-y:auto"]').insertBefore(wrap,w.querySelector('#__flri2').parentNode);ok.onclick=function(){var v=ta.value.trim();if(!v){wrap.remove();return;}manSamples.push({label:'手動樣本'+(manSamples.length+1),text:v});curTab=autoSamples.length+manSamples.length-1;wrap.remove();rdrAll();};cn.onclick=function(){wrap.remove();};};
    w.querySelector('#__flauto').onclick=function(){R=R.filter(function(r){return!r.a;});var sampleTexts=allSamples.map(function(s){return s.text;});var detected=autoDetect(sampleTexts);R=R.concat(detected);flSave(R);rdrAll();};
    w.querySelector('#__flok').onclick=function(){
        o.remove();
        opts.smartTime = w.querySelector('#__fl_smart').checked;
        var arrCopy=arr.map(function(m){return Object.assign({},m);});
        for(var i=lo;i<=hi;i++){
            if(arrCopy[i]&&isAI(arrCopy[i])){
                var ct=arrCopy[i].content||arrCopy[i].message||arrCopy[i].text||'';
                var lines=ct.split('\n');
                var cleaned=cL(lines,R,opts).result;
                var joined=cleaned.join('\n');
                if(arrCopy[i].content!==undefined)arrCopy[i].content=joined;else if(arrCopy[i].message!==undefined)arrCopy[i].message=joined;else arrCopy[i].text=joined;
            }
        }
        dExp(arrCopy,lo,hi,opts,af);
    };
    rdrAll();
}

function shMain(arr){var o=document.createElement('div');o.className='cko';var w=document.createElement('div');w.className='ckb';w.innerHTML='<div class="ckt"style="margin-bottom:4px;">📤匯出對話紀錄</div><div class="cks">已載入'+arr.length+'則訊息，請選擇匯出模式</div><div style="display:flex;gap:10px;margin-bottom:8px;"><button class="ckmb"id="__m1">📅<br><span style="font-size:12px;margin-top:4px;display:block;">時間範圍</span></button><button class="ckmb"id="__m2">🖱️<br><span style="font-size:12px;margin-top:4px;display:block;">點選範圍</span></button><button class="ckmb"id="__m3">📋<br><span style="font-size:12px;margin-top:4px;display:block;">全部匯出</span></button><button class="ckmb"id="__m4">💭<br><span style="font-size:12px;margin-top:4px;display:block;">好感度紀錄</span></button></div><div class="ckbr"style="margin-top:16px;"><button class="ckbt"id="__mc">取消</button></div>';o.appendChild(w);document.body.appendChild(o);w.querySelector('#__mc').onclick=function(){o.remove();};w.querySelector('#__m1').onclick=function(){o.remove();modeTime(arr);};w.querySelector('#__m2').onclick=function(){o.remove();mClick(arr);};w.querySelector('#__m3').onclick=function(){o.remove();shCf(arr,0,arr.length-1);};w.querySelector('#__m4').onclick=function(){o.remove();var ov=shOv('正在載入心聲資料…');ldAff().then(function(af){ov.rm();if(!af.length){alert('找不到心聲資料。');return;}shAfModal(af,gAN(),arr);});};}

fAll().then(function(arr){if(!arr||arr.length===0){alert('抓取失敗或對話為空');return;}shEg(arr,function(){shMain(arr);});});
})();







