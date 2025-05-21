import{$a as Fn,Ac as Gn,Bc as Je,C as Ht,Ca as ae,D as zt,E as Rn,Fb as Oe,G as An,Gb as xe,Gc as Q,Hb as le,I as Et,Ib as wt,Jb as Ct,K as Ue,Kb as Hn,L as Nn,Mc as qn,Nb as zn,Nc as Jn,Ob as K,Pb as ye,Pc as Yn,Q as Kt,Qb as ve,Qc as Xn,Rb as Ke,Rc as Qn,S as je,Tb as Ge,Ub as qe,Uc as Se,V as Gt,Wb as _t,Wc as xt,X as y,Xa as A,Xb as Lt,Xc as Zn,Y as M,Ya as ze,Zc as ei,_ as N,a as w,aa as O,ba as b,bb as Bn,ca as We,cc as X,ec as qt,fa as Dn,g as Wt,ga as Pn,gb as H,hb as F,ia as Ve,ib as z,jb as Un,k as Vt,kb as B,la as kn,ma as _,mb as _e,n as we,nb as me,oa as $n,ra as Mn,rb as jn,s as In,sa as re,t as ie,ta as Tt,tc as Ot,ub as ee,v as Ce,va as se,vb as L,wa as He,wb as Wn,xc as I,y as oe,ya as be,yb as Vn,yc as Kn,zb as Le,zc as Jt}from"./chunk-E5GNSJYM.js";var Qe=class{},Ze=class{},te=class e{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(t=>{let n=t.indexOf(":");if(n>0){let o=t.slice(0,n),r=t.slice(n+1).trim();this.addHeaderEntry(o,r)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((t,n)=>{this.addHeaderEntry(n,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([t,n])=>{this.setHeaderEntries(t,n)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let t=this.headers.get(i.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,t){return this.clone({name:i,value:t,op:"a"})}set(i,t){return this.clone({name:i,value:t,op:"s"})}delete(i,t){return this.clone({name:i,value:t,op:"d"})}maybeSetNormalizedName(i,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,i)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(t=>{this.headers.set(t,i.headers.get(t)),this.normalizedNames.set(t,i.normalizedNames.get(t))})}clone(i){let t=new e;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([i]),t}applyUpdate(i){let t=i.name.toLowerCase();switch(i.op){case"a":case"s":let n=i.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(i.name,t);let o=(i.op==="a"?this.headers.get(t):void 0)||[];o.push(...n),this.headers.set(t,o);break;case"d":let r=i.value;if(!r)this.headers.delete(t),this.normalizedNames.delete(t);else{let s=this.headers.get(t);if(!s)return;s=s.filter(l=>r.indexOf(l)===-1),s.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,s)}break}}addHeaderEntry(i,t){let n=i.toLowerCase();this.maybeSetNormalizedName(i,n),this.headers.has(n)?this.headers.get(n).push(t):this.headers.set(n,[t])}setHeaderEntries(i,t){let n=(Array.isArray(t)?t:[t]).map(r=>r.toString()),o=i.toLowerCase();this.headers.set(o,n),this.maybeSetNormalizedName(i,o)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>i(this.normalizedNames.get(t),this.headers.get(t)))}};var Qt=class{encodeKey(i){return ti(i)}encodeValue(i){return ti(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function Eo(e,i){let t=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(o=>{let r=o.indexOf("="),[s,l]=r==-1?[i.decodeKey(o),""]:[i.decodeKey(o.slice(0,r)),i.decodeValue(o.slice(r+1))],a=t.get(s)||[];a.push(l),t.set(s,a)}),t}var To=/%(\d[a-f0-9])/gi,wo={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function ti(e){return encodeURIComponent(e).replace(To,(i,t)=>wo[t]??i)}function It(e){return`${e}`}var ue=class e{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new Qt,i.fromString){if(i.fromObject)throw new Gt(2805,!1);this.map=Eo(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(t=>{let n=i.fromObject[t],o=Array.isArray(n)?n.map(It):[It(n)];this.map.set(t,o)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let t=this.map.get(i);return t?t[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,t){return this.clone({param:i,value:t,op:"a"})}appendAll(i){let t=[];return Object.keys(i).forEach(n=>{let o=i[n];Array.isArray(o)?o.forEach(r=>{t.push({param:n,value:r,op:"a"})}):t.push({param:n,value:o,op:"a"})}),this.clone(t)}set(i,t){return this.clone({param:i,value:t,op:"s"})}delete(i,t){return this.clone({param:i,value:t,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let t=this.encoder.encodeKey(i);return this.map.get(i).map(n=>t+"="+this.encoder.encodeValue(n)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let t=new e({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(i),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let t=(i.op==="a"?this.map.get(i.param):void 0)||[];t.push(It(i.value)),this.map.set(i.param,t);break;case"d":if(i.value!==void 0){let n=this.map.get(i.param)||[],o=n.indexOf(It(i.value));o!==-1&&n.splice(o,1),n.length>0?this.map.set(i.param,n):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};var Zt=class{map=new Map;set(i,t){return this.map.set(i,t),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}};function Co(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function ni(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function ii(e){return typeof Blob<"u"&&e instanceof Blob}function oi(e){return typeof FormData<"u"&&e instanceof FormData}function _o(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var Ye="Content-Type",nn="X-Request-URL",li="text/plain",ci="application/json",ui=`${ci}, ${li}, */*`,Xe=class e{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(i,t,n,o){this.url=t,this.method=i.toUpperCase();let r;if(Co(this.method)||o?(this.body=n!==void 0?n:null,r=o):r=n,r&&(this.reportProgress=!!r.reportProgress,this.withCredentials=!!r.withCredentials,r.responseType&&(this.responseType=r.responseType),r.headers&&(this.headers=r.headers),r.context&&(this.context=r.context),r.params&&(this.params=r.params),this.transferCache=r.transferCache),this.headers??=new te,this.context??=new Zt,!this.params)this.params=new ue,this.urlWithParams=t;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=t;else{let l=t.indexOf("?"),a=l===-1?"?":l<t.length-1?"&":"";this.urlWithParams=t+a+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||ni(this.body)||ii(this.body)||oi(this.body)||_o(this.body)?this.body:this.body instanceof ue?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||oi(this.body)?null:ii(this.body)?this.body.type||null:ni(this.body)?null:typeof this.body=="string"?li:this.body instanceof ue?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?ci:null}clone(i={}){let t=i.method||this.method,n=i.url||this.url,o=i.responseType||this.responseType,r=i.transferCache??this.transferCache,s=i.body!==void 0?i.body:this.body,l=i.withCredentials??this.withCredentials,a=i.reportProgress??this.reportProgress,c=i.headers||this.headers,u=i.params||this.params,p=i.context??this.context;return i.setHeaders!==void 0&&(c=Object.keys(i.setHeaders).reduce((h,d)=>h.set(d,i.setHeaders[d]),c)),i.setParams&&(u=Object.keys(i.setParams).reduce((h,d)=>h.set(d,i.setParams[d]),u)),new e(t,n,s,{params:u,headers:c,context:p,reportProgress:a,responseType:o,withCredentials:l,transferCache:r})}},de=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(de||{}),et=class{headers;status;statusText;url;ok;type;constructor(i,t=200,n="OK"){this.headers=i.headers||new te,this.status=i.status!==void 0?i.status:t,this.statusText=i.statusText||n,this.url=i.url||null,this.ok=this.status>=200&&this.status<300}},Rt=class e extends et{constructor(i={}){super(i)}type=de.ResponseHeader;clone(i={}){return new e({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},tt=class e extends et{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=de.Response;clone(i={}){return new e({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},ce=class extends et{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},di=200,Lo=204;function Yt(e,i){return{body:i,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}var Oo=(()=>{class e{handler;constructor(t){this.handler=t}request(t,n,o={}){let r;if(t instanceof Xe)r=t;else{let a;o.headers instanceof te?a=o.headers:a=new te(o.headers);let c;o.params&&(o.params instanceof ue?c=o.params:c=new ue({fromObject:o.params})),r=new Xe(t,n,o.body!==void 0?o.body:null,{headers:a,context:o.context,params:c,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache})}let s=ie(r).pipe(Et(a=>this.handler.handle(a)));if(t instanceof Xe||o.observe==="events")return s;let l=s.pipe(An(a=>a instanceof tt));switch(o.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return l.pipe(oe(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return l.pipe(oe(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return l.pipe(oe(a=>{if(a.body!==null&&typeof a.body!="string")throw new Error("Response is not a string.");return a.body}));case"json":default:return l.pipe(oe(a=>a.body))}case"response":return l;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(t,n={}){return this.request("DELETE",t,n)}get(t,n={}){return this.request("GET",t,n)}head(t,n={}){return this.request("HEAD",t,n)}jsonp(t,n){return this.request("JSONP",t,{params:new ue().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,n={}){return this.request("OPTIONS",t,n)}patch(t,n,o={}){return this.request("PATCH",t,Yt(o,n))}post(t,n,o={}){return this.request("POST",t,Yt(o,n))}put(t,n,o={}){return this.request("PUT",t,Yt(o,n))}static \u0275fac=function(n){return new(n||e)(O(Qe))};static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})(),xo=/^\)\]\}',?\n/;function ri(e){if(e.url)return e.url;let i=nn.toLocaleLowerCase();return e.headers.get(i)}var pi=new N(""),Xt=(()=>{class e{fetchImpl=b(en,{optional:!0})?.fetch??((...t)=>globalThis.fetch(...t));ngZone=b(Tt);handle(t){return new Vt(n=>{let o=new AbortController;return this.doRequest(t,o.signal,n).then(tn,r=>n.error(new ce({error:r}))),()=>o.abort()})}doRequest(t,n,o){return Wt(this,null,function*(){let r=this.createRequestInit(t),s;try{let d=this.ngZone.runOutsideAngular(()=>this.fetchImpl(t.urlWithParams,w({signal:n},r)));Io(d),o.next({type:de.Sent}),s=yield d}catch(d){o.error(new ce({error:d,status:d.status??0,statusText:d.statusText,url:t.urlWithParams,headers:d.headers}));return}let l=new te(s.headers),a=s.statusText,c=ri(s)??t.urlWithParams,u=s.status,p=null;if(t.reportProgress&&o.next(new Rt({headers:l,status:u,statusText:a,url:c})),s.body){let d=s.headers.get("content-length"),m=[],f=s.body.getReader(),g=0,C,T,E=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>Wt(this,null,function*(){for(;;){let{done:$,value:Y}=yield f.read();if($)break;if(m.push(Y),g+=Y.length,t.reportProgress){T=t.responseType==="text"?(T??"")+(C??=new TextDecoder).decode(Y,{stream:!0}):void 0;let ge=()=>o.next({type:de.DownloadProgress,total:d?+d:void 0,loaded:g,partialText:T});E?E.run(ge):ge()}}}));let x=this.concatChunks(m,g);try{let $=s.headers.get(Ye)??"";p=this.parseBody(t,x,$)}catch($){o.error(new ce({error:$,headers:new te(s.headers),status:s.status,statusText:s.statusText,url:ri(s)??t.urlWithParams}));return}}u===0&&(u=p?di:0),u>=200&&u<300?(o.next(new tt({body:p,headers:l,status:u,statusText:a,url:c})),o.complete()):o.error(new ce({error:p,headers:l,status:u,statusText:a,url:c}))})}parseBody(t,n,o){switch(t.responseType){case"json":let r=new TextDecoder().decode(n).replace(xo,"");return r===""?null:JSON.parse(r);case"text":return new TextDecoder().decode(n);case"blob":return new Blob([n],{type:o});case"arraybuffer":return n.buffer}}createRequestInit(t){let n={},o=t.withCredentials?"include":void 0;if(t.headers.forEach((r,s)=>n[r]=s.join(",")),t.headers.has("Accept")||(n.Accept=ui),!t.headers.has(Ye)){let r=t.detectContentTypeHeader();r!==null&&(n[Ye]=r)}return{body:t.serializeBody(),method:t.method,headers:n,credentials:o}}concatChunks(t,n){let o=new Uint8Array(n),r=0;for(let s of t)o.set(s,r),r+=s.length;return o}static \u0275fac=function(n){return new(n||e)};static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})(),en=class{};function tn(){}function Io(e){e.then(tn,tn)}function Ro(e,i){return i(e)}function Ao(e,i,t){return(n,o)=>Pn(t,()=>i(n,r=>e(r,o)))}var hi=new N(""),No=new N(""),Do=new N("",{providedIn:"root",factory:()=>!0});var si=(()=>{class e extends Qe{backend;injector;chain=null;pendingTasks=b(Mn);contributeToStability=b(Do);constructor(t,n){super(),this.backend=t,this.injector=n}handle(t){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(hi),...this.injector.get(No,[])]));this.chain=n.reduceRight((o,r)=>Ao(o,r,this.injector),Ro)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(t,o=>this.backend.handle(o)).pipe(Nn(()=>this.pendingTasks.remove(n)))}else return this.chain(t,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||e)(O(Ze),O(Dn))};static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var Po=/^\)\]\}',?\n/,ko=RegExp(`^${nn}:`,"m");function $o(e){return"responseURL"in e&&e.responseURL?e.responseURL:ko.test(e.getAllResponseHeaders())?e.getResponseHeader(nn):null}var ai=(()=>{class e{xhrFactory;constructor(t){this.xhrFactory=t}handle(t){if(t.method==="JSONP")throw new Gt(-2800,!1);let n=this.xhrFactory;return(n.\u0275loadImpl?In(n.\u0275loadImpl()):ie(null)).pipe(je(()=>new Vt(r=>{let s=n.build();if(s.open(t.method,t.urlWithParams),t.withCredentials&&(s.withCredentials=!0),t.headers.forEach((f,g)=>s.setRequestHeader(f,g.join(","))),t.headers.has("Accept")||s.setRequestHeader("Accept",ui),!t.headers.has(Ye)){let f=t.detectContentTypeHeader();f!==null&&s.setRequestHeader(Ye,f)}if(t.responseType){let f=t.responseType.toLowerCase();s.responseType=f!=="json"?f:"text"}let l=t.serializeBody(),a=null,c=()=>{if(a!==null)return a;let f=s.statusText||"OK",g=new te(s.getAllResponseHeaders()),C=$o(s)||t.url;return a=new Rt({headers:g,status:s.status,statusText:f,url:C}),a},u=()=>{let{headers:f,status:g,statusText:C,url:T}=c(),E=null;g!==Lo&&(E=typeof s.response>"u"?s.responseText:s.response),g===0&&(g=E?di:0);let x=g>=200&&g<300;if(t.responseType==="json"&&typeof E=="string"){let $=E;E=E.replace(Po,"");try{E=E!==""?JSON.parse(E):null}catch(Y){E=$,x&&(x=!1,E={error:Y,text:E})}}x?(r.next(new tt({body:E,headers:f,status:g,statusText:C,url:T||void 0})),r.complete()):r.error(new ce({error:E,headers:f,status:g,statusText:C,url:T||void 0}))},p=f=>{let{url:g}=c(),C=new ce({error:f,status:s.status||0,statusText:s.statusText||"Unknown Error",url:g||void 0});r.error(C)},h=!1,d=f=>{h||(r.next(c()),h=!0);let g={type:de.DownloadProgress,loaded:f.loaded};f.lengthComputable&&(g.total=f.total),t.responseType==="text"&&s.responseText&&(g.partialText=s.responseText),r.next(g)},m=f=>{let g={type:de.UploadProgress,loaded:f.loaded};f.lengthComputable&&(g.total=f.total),r.next(g)};return s.addEventListener("load",u),s.addEventListener("error",p),s.addEventListener("timeout",p),s.addEventListener("abort",p),t.reportProgress&&(s.addEventListener("progress",d),l!==null&&s.upload&&s.upload.addEventListener("progress",m)),s.send(l),r.next({type:de.Sent}),()=>{s.removeEventListener("error",p),s.removeEventListener("abort",p),s.removeEventListener("load",u),s.removeEventListener("timeout",p),t.reportProgress&&(s.removeEventListener("progress",d),l!==null&&s.upload&&s.upload.removeEventListener("progress",m)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(n){return new(n||e)(O(ei))};static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})(),fi=new N(""),Mo="XSRF-TOKEN",Fo=new N("",{providedIn:"root",factory:()=>Mo}),Bo="X-XSRF-TOKEN",Uo=new N("",{providedIn:"root",factory:()=>Bo}),At=class{},jo=(()=>{class e{doc;platform;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(t,n,o){this.doc=t,this.platform=n,this.cookieName=o}getToken(){if(this.platform==="server")return null;let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=qn(t,this.cookieName),this.lastCookieString=t),this.lastToken}static \u0275fac=function(n){return new(n||e)(O(Q),O(ae),O(Fo))};static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();function Wo(e,i){let t=e.url.toLowerCase();if(!b(fi)||e.method==="GET"||e.method==="HEAD"||t.startsWith("http://")||t.startsWith("https://"))return i(e);let n=b(At).getToken(),o=b(Uo);return n!=null&&!e.headers.has(o)&&(e=e.clone({headers:e.headers.set(o,n)})),i(e)}var gi=function(e){return e[e.Interceptors=0]="Interceptors",e[e.LegacyInterceptors=1]="LegacyInterceptors",e[e.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",e[e.NoXsrfProtection=3]="NoXsrfProtection",e[e.JsonpSupport=4]="JsonpSupport",e[e.RequestsMadeViaParent=5]="RequestsMadeViaParent",e[e.Fetch=6]="Fetch",e}(gi||{});function Vo(e,i){return{\u0275kind:e,\u0275providers:i}}function ds(...e){let i=[Oo,ai,si,{provide:Qe,useExisting:si},{provide:Ze,useFactory:()=>b(pi,{optional:!0})??b(ai)},{provide:hi,useValue:Wo,multi:!0},{provide:fi,useValue:!0},{provide:At,useClass:jo}];for(let t of e)i.push(...t.\u0275providers);return We(i)}function ps(){return Vo(gi.Fetch,[Xt,{provide:pi,useExisting:Xt},{provide:Ze,useExisting:Xt}])}var Ie=class{},bi=(()=>{class e extends Ie{getTranslation(t){return ie({})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})(),it=class{},mi=(()=>{class e{handle(t){return t.key}static \u0275fac=function(n){return new(n||e)};static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();function Dt(e,i){if(e===i)return!0;if(e===null||i===null)return!1;if(e!==e&&i!==i)return!0;let t=typeof e,n=typeof i,o,r,s;if(t==n&&t=="object")if(Array.isArray(e)){if(!Array.isArray(i))return!1;if((o=e.length)==i.length){for(r=0;r<o;r++)if(!Dt(e[r],i[r]))return!1;return!0}}else{if(Array.isArray(i))return!1;s=Object.create(null);for(r in e){if(!Dt(e[r],i[r]))return!1;s[r]=!0}for(r in i)if(!(r in s)&&typeof i[r]<"u")return!1;return!0}return!1}function pe(e){return typeof e<"u"&&e!==null}function rt(e){return Nt(e)&&!dn(e)&&e!==null}function Nt(e){return typeof e=="object"}function dn(e){return Array.isArray(e)}function pn(e){return typeof e=="string"}function Ho(e){return typeof e=="function"}function on(e,i){let t=Object.assign({},e);return Nt(e)?(Nt(e)&&Nt(i)&&Object.keys(i).forEach(n=>{rt(i[n])?n in e?t[n]=on(e[n],i[n]):Object.assign(t,{[n]:i[n]}):Object.assign(t,{[n]:i[n]})}),t):on({},i)}function rn(e,i){let t=i.split(".");i="";do i+=t.shift(),pe(e)&&pe(e[i])&&(rt(e[i])||dn(e[i])||!t.length)?(e=e[i],i=""):t.length?i+=".":e=void 0;while(t.length);return e}function zo(e,i,t){let n=i.split("."),o=e;for(let r=0;r<n.length;r++){let s=n[r];r===n.length-1?o[s]=t:((!o[s]||!rt(o[s]))&&(o[s]={}),o=o[s])}}var Re=class{},yi=(()=>{class e extends Re{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(t,n){if(pn(t))return this.interpolateString(t,n);if(Ho(t))return this.interpolateFunction(t,n)}interpolateFunction(t,n){return t(n)}interpolateString(t,n){return n?t.replace(this.templateMatcher,(o,r)=>{let s=rn(n,r);return pe(s)?s:o}):t}static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})(),Ae=class{},vi=(()=>{class e extends Ae{compile(t,n){return t}compileTranslations(t,n){return t}static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})(),ot=class{defaultLang;currentLang=this.defaultLang;translations={};langs=[];onTranslationChange=new re;onLangChange=new re;onDefaultLangChange=new re},sn=new N("ISOLATE_TRANSLATE_SERVICE"),an=new N("USE_DEFAULT_LANG"),ln=new N("DEFAULT_LANGUAGE"),cn=new N("USE_EXTEND"),nt=e=>Ce(e)?e:ie(e),un=(()=>{class e{store;currentLoader;compiler;parser;missingTranslationHandler;useDefaultLang;extend;loadingTranslations;pending=!1;_translationRequests={};lastUseLanguage=null;get onTranslationChange(){return this.store.onTranslationChange}get onLangChange(){return this.store.onLangChange}get onDefaultLangChange(){return this.store.onDefaultLangChange}get defaultLang(){return this.store.defaultLang}set defaultLang(t){this.store.defaultLang=t}get currentLang(){return this.store.currentLang}set currentLang(t){this.store.currentLang=t}get langs(){return this.store.langs}set langs(t){this.store.langs=t}get translations(){return this.store.translations}set translations(t){this.store.translations=t}constructor(t,n,o,r,s,l=!0,a=!1,c=!1,u){this.store=t,this.currentLoader=n,this.compiler=o,this.parser=r,this.missingTranslationHandler=s,this.useDefaultLang=l,this.extend=c,a&&(this.store=new ot),u&&this.setDefaultLang(u)}setDefaultLang(t){if(t===this.defaultLang)return;let n=this.retrieveTranslations(t);typeof n<"u"?(this.defaultLang==null&&(this.defaultLang=t),n.pipe(Ue(1)).subscribe(()=>{this.changeDefaultLang(t)})):this.changeDefaultLang(t)}getDefaultLang(){return this.defaultLang}use(t){if(this.lastUseLanguage=t,t===this.currentLang)return ie(this.translations[t]);this.currentLang||(this.currentLang=t);let n=this.retrieveTranslations(t);return Ce(n)?(n.pipe(Ue(1)).subscribe(()=>{this.changeLang(t)}),n):(this.changeLang(t),ie(this.translations[t]))}changeLang(t){t===this.lastUseLanguage&&(this.currentLang=t,this.onLangChange.emit({lang:t,translations:this.translations[t]}),this.defaultLang==null&&this.changeDefaultLang(t))}retrieveTranslations(t){if(typeof this.translations[t]>"u"||this.extend)return this._translationRequests[t]=this._translationRequests[t]||this.loadAndCompileTranslations(t),this._translationRequests[t]}getTranslation(t){return this.loadAndCompileTranslations(t)}loadAndCompileTranslations(t){this.pending=!0;let n=this.currentLoader.getTranslation(t).pipe(Kt(1),Ue(1));return this.loadingTranslations=n.pipe(oe(o=>this.compiler.compileTranslations(o,t)),Kt(1),Ue(1)),this.loadingTranslations.subscribe({next:o=>{this.translations[t]=this.extend&&this.translations[t]?w(w({},o),this.translations[t]):o,this.updateLangs(),this.pending=!1},error:o=>{this.pending=!1}}),n}setTranslation(t,n,o=!1){let r=this.compiler.compileTranslations(n,t);(o||this.extend)&&this.translations[t]?this.translations[t]=on(this.translations[t],r):this.translations[t]=r,this.updateLangs(),this.onTranslationChange.emit({lang:t,translations:this.translations[t]})}getLangs(){return this.langs}addLangs(t){let n=t.filter(o=>!this.langs.includes(o));n.length>0&&(this.langs=[...this.langs,...n])}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResultForKey(t,n,o){let r;if(t&&(r=this.runInterpolation(rn(t,n),o)),r===void 0&&this.defaultLang!=null&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(r=this.runInterpolation(rn(this.translations[this.defaultLang],n),o)),r===void 0){let s={key:n,translateService:this};typeof o<"u"&&(s.interpolateParams=o),r=this.missingTranslationHandler.handle(s)}return r!==void 0?r:n}runInterpolation(t,n){if(dn(t))return t.map(o=>this.runInterpolation(o,n));if(rt(t)){let o={};for(let r in t){let s=this.runInterpolation(t[r],n);s!==void 0&&(o[r]=s)}return o}else return this.parser.interpolate(t,n)}getParsedResult(t,n,o){if(n instanceof Array){let r={},s=!1;for(let a of n)r[a]=this.getParsedResultForKey(t,a,o),s=s||Ce(r[a]);if(!s)return r;let l=n.map(a=>nt(r[a]));return Rn(l).pipe(oe(a=>{let c={};return a.forEach((u,p)=>{c[n[p]]=u}),c}))}return this.getParsedResultForKey(t,n,o)}get(t,n){if(!pe(t)||!t.length)throw new Error('Parameter "key" is required and cannot be empty');return this.pending?this.loadingTranslations.pipe(Et(o=>nt(this.getParsedResult(o,t,n)))):nt(this.getParsedResult(this.translations[this.currentLang],t,n))}getStreamOnTranslationChange(t,n){if(!pe(t)||!t.length)throw new Error('Parameter "key" is required and cannot be empty');return Ht(zt(()=>this.get(t,n)),this.onTranslationChange.pipe(je(o=>{let r=this.getParsedResult(o.translations,t,n);return nt(r)})))}stream(t,n){if(!pe(t)||!t.length)throw new Error('Parameter "key" required');return Ht(zt(()=>this.get(t,n)),this.onLangChange.pipe(je(o=>{let r=this.getParsedResult(o.translations,t,n);return nt(r)})))}instant(t,n){if(!pe(t)||t.length===0)throw new Error('Parameter "key" is required and cannot be empty');let o=this.getParsedResult(this.translations[this.currentLang],t,n);return Ce(o)?Array.isArray(t)?t.reduce((r,s)=>(r[s]=s,r),{}):t:o}set(t,n,o=this.currentLang){zo(this.translations[o],t,pn(n)?this.compiler.compile(n,o):this.compiler.compileTranslations(n,o)),this.updateLangs(),this.onTranslationChange.emit({lang:o,translations:this.translations[o]})}changeDefaultLang(t){this.defaultLang=t,this.onDefaultLangChange.emit({lang:t,translations:this.translations[t]})}reloadLang(t){return this.resetLang(t),this.loadAndCompileTranslations(t)}resetLang(t){delete this._translationRequests[t],delete this.translations[t]}getBrowserLang(){if(typeof window>"u"||!window.navigator)return;let t=this.getBrowserCultureLang();return t?t.split(/[-_]/)[0]:void 0}getBrowserCultureLang(){if(!(typeof window>"u"||typeof window.navigator>"u"))return window.navigator.languages?window.navigator.languages[0]:window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage}static \u0275fac=function(n){return new(n||e)(O(ot),O(Ie),O(Ae),O(Re),O(it),O(an),O(sn),O(cn),O(ln))};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Cs=(()=>{class e{translate;_ref;value="";lastKey=null;lastParams=[];onTranslationChange;onLangChange;onDefaultLangChange;constructor(t,n){this.translate=t,this._ref=n}updateValue(t,n,o){let r=s=>{this.value=s!==void 0?s:t,this.lastKey=t,this._ref.markForCheck()};if(o){let s=this.translate.getParsedResult(o,t,n);Ce(s)?s.subscribe(r):r(s)}this.translate.get(t,n).subscribe(r)}transform(t,...n){if(!t||!t.length)return t;if(Dt(t,this.lastKey)&&Dt(n,this.lastParams))return this.value;let o;if(pe(n[0])&&n.length)if(pn(n[0])&&n[0].length){let r=n[0].replace(/(')?([a-zA-Z0-9_]+)(')?(\s)?:/g,'"$2":').replace(/:(\s)?(')(.*?)(')/g,':"$3"');try{o=JSON.parse(r)}catch(s){throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${n[0]}`)}}else rt(n[0])&&(o=n[0]);return this.lastKey=t,this.lastParams=n,this.updateValue(t,o),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(r=>{this.lastKey&&r.lang===this.translate.currentLang&&(this.lastKey=null,this.updateValue(t,o,r.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(r=>{this.lastKey&&(this.lastKey=null,this.updateValue(t,o,r.translations))})),this.onDefaultLangChange||(this.onDefaultLangChange=this.translate.onDefaultLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(t,o))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onDefaultLangChange<"u"&&(this.onDefaultLangChange.unsubscribe(),this.onDefaultLangChange=void 0)}ngOnDestroy(){this._dispose()}static \u0275fac=function(n){return new(n||e)(ze(un,16),ze(Ot,16))};static \u0275pipe=Un({name:"translate",type:e,pure:!1});static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var _s=(()=>{class e{static forRoot(t={}){return{ngModule:e,providers:[t.loader||{provide:Ie,useClass:bi},t.compiler||{provide:Ae,useClass:vi},t.parser||{provide:Re,useClass:yi},t.missingTranslationHandler||{provide:it,useClass:mi},ot,{provide:sn,useValue:t.isolate},{provide:an,useValue:t.useDefaultLang},{provide:cn,useValue:t.extend},{provide:ln,useValue:t.defaultLanguage},un]}}static forChild(t={}){return{ngModule:e,providers:[t.loader||{provide:Ie,useClass:bi},t.compiler||{provide:Ae,useClass:vi},t.parser||{provide:Re,useClass:yi},t.missingTranslationHandler||{provide:it,useClass:mi},{provide:sn,useValue:t.isolate},{provide:an,useValue:t.useDefaultLang},{provide:cn,useValue:t.extend},{provide:ln,useValue:t.defaultLanguage},un]}}static \u0275fac=function(n){return new(n||e)};static \u0275mod=F({type:e});static \u0275inj=M({})}return e})();function Si(e,i){return e?e.classList?e.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(e.className):!1}function st(e,i){if(e&&i){let t=n=>{Si(e,n)||(e.classList?e.classList.add(n):e.className+=" "+n)};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(t))}}function Ko(){return window.innerWidth-document.documentElement.offsetWidth}function Ne(e){for(let i of document?.styleSheets)try{for(let t of i?.cssRules)for(let n of t?.style)if(e.test(n))return{name:n,value:t.style.getPropertyValue(n).trim()}}catch{}return null}function Is(e="p-overflow-hidden"){let i=Ne(/-scrollbar-width$/);i?.name&&document.body.style.setProperty(i.name,Ko()+"px"),st(document.body,e)}function Ee(e,i){if(e&&i){let t=n=>{e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(t))}}function Rs(e="p-overflow-hidden"){let i=Ne(/-scrollbar-width$/);i?.name&&document.body.style.removeProperty(i.name),Ee(document.body,e)}function Ei(e){let i={width:0,height:0};return e&&(e.style.visibility="hidden",e.style.display="block",i.width=e.offsetWidth,i.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible"),i}function Ti(){let e=window,i=document,t=i.documentElement,n=i.getElementsByTagName("body")[0],o=e.innerWidth||t.clientWidth||n.clientWidth,r=e.innerHeight||t.clientHeight||n.clientHeight;return{width:o,height:r}}function Go(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}function qo(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}function As(e,i,t=!0){var n,o,r,s;if(e){let l=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:Ei(e),a=l.height,c=l.width,u=i.offsetHeight,p=i.offsetWidth,h=i.getBoundingClientRect(),d=qo(),m=Go(),f=Ti(),g,C,T="top";h.top+u+a>f.height?(g=h.top+d-a,T="bottom",g<0&&(g=d)):g=u+h.top+d,h.left+c>f.width?C=Math.max(0,h.left+m+p-c):C=h.left+m,e.style.top=g+"px",e.style.left=C+"px",e.style.transformOrigin=T,t&&(e.style.marginTop=T==="bottom"?`calc(${(o=(n=Ne(/-anchor-gutter$/))==null?void 0:n.value)!=null?o:"2px"} * -1)`:(s=(r=Ne(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function Ns(e,i){e&&(typeof i=="string"?e.style.cssText=i:Object.entries(i||{}).forEach(([t,n])=>e.style[t]=n))}function wi(e,i){if(e instanceof HTMLElement){let t=e.offsetWidth;if(i){let n=getComputedStyle(e);t+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return t}return 0}function Ds(e,i,t=!0){var n,o,r,s;if(e){let l=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:Ei(e),a=i.offsetHeight,c=i.getBoundingClientRect(),u=Ti(),p,h,d="top";c.top+a+l.height>u.height?(p=-1*l.height,d="bottom",c.top+p<0&&(p=-1*c.top)):p=a,l.width>u.width?h=c.left*-1:c.left+l.width>u.width?h=(c.left+l.width-u.width)*-1:h=0,e.style.top=p+"px",e.style.left=h+"px",e.style.transformOrigin=d,t&&(e.style.marginTop=d==="bottom"?`calc(${(o=(n=Ne(/-anchor-gutter$/))==null?void 0:n.value)!=null?o:"2px"} * -1)`:(s=(r=Ne(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function De(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}function hn(e){let i=e;return e&&typeof e=="object"&&(e.hasOwnProperty("current")?i=e.current:e.hasOwnProperty("el")&&(e.el.hasOwnProperty("nativeElement")?i=e.el.nativeElement:i=e.el)),De(i)?i:void 0}function Ps(e,i){let t=hn(e);if(t)t.appendChild(i);else throw new Error("Cannot append "+i+" to "+e)}function Pt(e,i={}){if(De(e)){let t=(n,o)=>{var r,s;let l=(r=e?.$attrs)!=null&&r[n]?[(s=e?.$attrs)==null?void 0:s[n]]:[];return[o].flat().reduce((a,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")a.push(c);else if(u==="object"){let p=Array.isArray(c)?t(n,c):Object.entries(c).map(([h,d])=>n==="style"&&(d||d===0)?`${h.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${d}`:d?h:void 0);a=p.length?a.concat(p.filter(h=>!!h)):a}}return a},l)};Object.entries(i).forEach(([n,o])=>{if(o!=null){let r=n.match(/^on(.+)/);r?e.addEventListener(r[1].toLowerCase(),o):n==="p-bind"||n==="pBind"?Pt(e,o):(o=n==="class"?[...new Set(t("class",o))].join(" ").trim():n==="style"?t("style",o).join(";").trim():o,(e.$attrs=e.$attrs||{})&&(e.$attrs[n]=o),e.setAttribute(n,o))}})}}function ks(e,i={},...t){if(e){let n=document.createElement(e);return Pt(n,i),n.append(...t),n}}function $s(e,i){if(e){e.style.opacity="0";let t=+new Date,n="0",o=function(){n=`${+e.style.opacity+(new Date().getTime()-t)/i}`,e.style.opacity=n,t=+new Date,+n<1&&(window.requestAnimationFrame&&requestAnimationFrame(o)||setTimeout(o,16))};o()}}function Jo(e,i){return De(e)?Array.from(e.querySelectorAll(i)):[]}function Yo(e,i){return De(e)?e.matches(i)?e:e.querySelector(i):null}function Ms(e,i){e&&document.activeElement!==e&&e.focus(i)}function Fs(e,i){if(De(e)){let t=e.getAttribute(i);return isNaN(t)?t==="true"||t==="false"?t==="true":t:+t}}function Ci(e,i=""){let t=Jo(e,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`),n=[];for(let o of t)getComputedStyle(o).display!="none"&&getComputedStyle(o).visibility!="hidden"&&n.push(o);return n}function Bs(e,i){let t=Ci(e,i);return t.length>0?t[0]:null}function fn(e){if(e){let i=e.offsetHeight,t=getComputedStyle(e);return i-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)+parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),i}return 0}function _i(e){if(e){let i=e.parentNode;return i&&i instanceof ShadowRoot&&i.host&&(i=i.host),i}return null}function Us(e){var i;if(e){let t=(i=_i(e))==null?void 0:i.childNodes,n=0;if(t)for(let o=0;o<t.length;o++){if(t[o]===e)return n;t[o].nodeType===1&&n++}}return-1}function js(e,i){let t=Ci(e,i);return t.length>0?t[t.length-1]:null}function Li(e){if(e){let i=e.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function gn(e,i){if(e){let t=e.offsetHeight;if(i){let n=getComputedStyle(e);t+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return t}return 0}function Ws(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function Xo(e){return!!(e!==null&&typeof e<"u"&&e.nodeName&&_i(e))}function Vs(e,i){var t;if(e)switch(e){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@parent":return i?.parentElement;case"@grandparent":return(t=i?.parentElement)==null?void 0:t.parentElement;default:if(typeof e=="string")return document.querySelector(e);let o=hn((r=>!!(r&&r.constructor&&r.call&&r.apply))(e)?e():e);return o?.nodeType===9||Xo(o)?o:void 0}}function bn(e){if(e){let i=e.offsetWidth,t=getComputedStyle(e);return i-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)+parseFloat(t.borderLeftWidth)+parseFloat(t.borderRightWidth),i}return 0}function Hs(e){return!!(e&&e.offsetParent!=null)}function zs(e){return e?getComputedStyle(e).direction==="rtl":!1}function Ks(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function Oi(e){var i;e&&("remove"in Element.prototype?e.remove():(i=e.parentNode)==null||i.removeChild(e))}function Gs(e,i){let t=hn(e);if(t)t.removeChild(i);else throw new Error("Cannot remove "+i+" from "+e)}function qs(e,i){let t=getComputedStyle(e).getPropertyValue("borderTopWidth"),n=t?parseFloat(t):0,o=getComputedStyle(e).getPropertyValue("paddingTop"),r=o?parseFloat(o):0,s=e.getBoundingClientRect(),a=i.getBoundingClientRect().top+document.body.scrollTop-(s.top+document.body.scrollTop)-n-r,c=e.scrollTop,u=e.clientHeight,p=gn(i);a<0?e.scrollTop=c+a:a+p>u&&(e.scrollTop=c+a-u+p)}function xi(e,i="",t){De(e)&&t!==null&&t!==void 0&&e.setAttribute(i,t)}function Ii(){let e=new Map;return{on(i,t){let n=e.get(i);return n?n.push(t):n=[t],e.set(i,n),this},off(i,t){let n=e.get(i);return n&&n.splice(n.indexOf(t)>>>0,1),this},emit(i,t){let n=e.get(i);n&&n.slice().map(o=>{o(t)})},clear(){e.clear()}}}var Qo=Object.defineProperty,Ri=Object.getOwnPropertySymbols,Zo=Object.prototype.hasOwnProperty,er=Object.prototype.propertyIsEnumerable,Ai=(e,i,t)=>i in e?Qo(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,tr=(e,i)=>{for(var t in i||(i={}))Zo.call(i,t)&&Ai(e,t,i[t]);if(Ri)for(var t of Ri(i))er.call(i,t)&&Ai(e,t,i[t]);return e};function W(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&typeof e=="object"&&Object.keys(e).length===0}function mn(e,i,t=new WeakSet){if(e===i)return!0;if(!e||!i||typeof e!="object"||typeof i!="object"||t.has(e)||t.has(i))return!1;t.add(e).add(i);let n=Array.isArray(e),o=Array.isArray(i),r,s,l;if(n&&o){if(s=e.length,s!=i.length)return!1;for(r=s;r--!==0;)if(!mn(e[r],i[r],t))return!1;return!0}if(n!=o)return!1;let a=e instanceof Date,c=i instanceof Date;if(a!=c)return!1;if(a&&c)return e.getTime()==i.getTime();let u=e instanceof RegExp,p=i instanceof RegExp;if(u!=p)return!1;if(u&&p)return e.toString()==i.toString();let h=Object.keys(e);if(s=h.length,s!==Object.keys(i).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(i,h[r]))return!1;for(r=s;r--!==0;)if(l=h[r],!mn(e[l],i[l],t))return!1;return!0}function nr(e,i){return mn(e,i)}function Di(e){return!!(e&&e.constructor&&e.call&&e.apply)}function v(e){return!W(e)}function kt(e,i){if(!e||!i)return null;try{let t=e[i];if(v(t))return t}catch{}if(Object.keys(e).length){if(Di(i))return i(e);if(i.indexOf(".")===-1)return e[i];{let t=i.split("."),n=e;for(let o=0,r=t.length;o<r;++o){if(n==null)return null;n=n[t[o]]}return n}}return null}function yn(e,i,t){return t?kt(e,t)===kt(i,t):nr(e,i)}function Qs(e,i){if(e!=null&&i&&i.length){for(let t of i)if(yn(e,t))return!0}return!1}function Zs(e,i){let t;if(v(e))try{t=e.findLast(i)}catch{t=[...e].reverse().find(i)}return t}function ea(e,i){let t=-1;if(v(e))try{t=e.findLastIndex(i)}catch{t=e.lastIndexOf([...e].reverse().find(i))}return t}function G(e,i=!0){return e instanceof Object&&e.constructor===Object&&(i||Object.keys(e).length!==0)}function j(e,...i){return Di(e)?e(...i):e}function he(e,i=!0){return typeof e=="string"&&(i||e!=="")}function Ni(e){return he(e)?e.replace(/(-|_)/g,"").toLowerCase():e}function $t(e,i="",t={}){let n=Ni(i).split("."),o=n.shift();return o?G(e)?$t(j(e[Object.keys(e).find(r=>Ni(r)===o)||""],t),n.join("."),t):void 0:j(e,t)}function Mt(e,i=!0){return Array.isArray(e)&&(i||e.length!==0)}function ta(e){return e instanceof Date&&e.constructor===Date}function Pi(e){return v(e)&&!isNaN(e)}function na(e=""){return v(e)&&e.length===1&&!!e.match(/\S| /)}function P(e,i){if(i){let t=i.test(e);return i.lastIndex=0,t}return!1}function at(...e){let i=(t={},n={})=>{let o=tr({},t);return Object.keys(n).forEach(r=>{G(n[r])&&r in t&&G(t[r])?o[r]=i(t[r],n[r]):o[r]=n[r]}),o};return e.reduce((t,n,o)=>o===0?n:i(t,n),{})}function Te(e){return e&&e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function k(e){if(e&&/[\xC0-\xFF\u0100-\u017E]/.test(e)){let t={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let n in t)e=e.replace(t[n],n)}return e}function Ft(e){return he(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,(i,t)=>t===0?i:"-"+i.toLowerCase()).toLowerCase():e}function vn(e){return he(e)?e.replace(/[A-Z]/g,(i,t)=>t===0?i:"."+i.toLowerCase()).toLowerCase():e}var Bt={};function lt(e="pui_id_"){return Bt.hasOwnProperty(e)||(Bt[e]=0),Bt[e]++,`${e}${Bt[e]}`}function ir(){let e=[],i=(s,l,a=999)=>{let c=o(s,l,a),u=c.value+(c.key===s?0:a)+1;return e.push({key:s,value:u}),u},t=s=>{e=e.filter(l=>l.value!==s)},n=(s,l)=>o(s,l).value,o=(s,l,a=0)=>[...e].reverse().find(c=>l?!0:c.key===s)||{key:s,value:a},r=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:r,set:(s,l,a)=>{l&&(l.style.zIndex=String(i(s,!0,a)))},clear:s=>{s&&(t(r(s)),s.style.zIndex="")},getCurrent:s=>n(s,!0)}}var ra=ir();var R=(()=>{class e{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return e})(),ya=(()=>{class e{static AND="and";static OR="or"}return e})(),va=(()=>{class e{filter(t,n,o,r,s){let l=[];if(t)for(let a of t)for(let c of n){let u=kt(a,c);if(this.filters[r](u,o,s)){l.push(a);break}}return l}filters={startsWith:(t,n,o)=>{if(n==null||n.trim()==="")return!0;if(t==null)return!1;let r=k(n.toString()).toLocaleLowerCase(o);return k(t.toString()).toLocaleLowerCase(o).slice(0,r.length)===r},contains:(t,n,o)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(t==null)return!1;let r=k(n.toString()).toLocaleLowerCase(o);return k(t.toString()).toLocaleLowerCase(o).indexOf(r)!==-1},notContains:(t,n,o)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(t==null)return!1;let r=k(n.toString()).toLocaleLowerCase(o);return k(t.toString()).toLocaleLowerCase(o).indexOf(r)===-1},endsWith:(t,n,o)=>{if(n==null||n.trim()==="")return!0;if(t==null)return!1;let r=k(n.toString()).toLocaleLowerCase(o),s=k(t.toString()).toLocaleLowerCase(o);return s.indexOf(r,s.length-r.length)!==-1},equals:(t,n,o)=>n==null||typeof n=="string"&&n.trim()===""?!0:t==null?!1:t.getTime&&n.getTime?t.getTime()===n.getTime():t==n?!0:k(t.toString()).toLocaleLowerCase(o)==k(n.toString()).toLocaleLowerCase(o),notEquals:(t,n,o)=>n==null||typeof n=="string"&&n.trim()===""?!1:t==null?!0:t.getTime&&n.getTime?t.getTime()!==n.getTime():t==n?!1:k(t.toString()).toLocaleLowerCase(o)!=k(n.toString()).toLocaleLowerCase(o),in:(t,n)=>{if(n==null||n.length===0)return!0;for(let o=0;o<n.length;o++)if(yn(t,n[o]))return!0;return!1},between:(t,n)=>n==null||n[0]==null||n[1]==null?!0:t==null?!1:t.getTime?n[0].getTime()<=t.getTime()&&t.getTime()<=n[1].getTime():n[0]<=t&&t<=n[1],lt:(t,n,o)=>n==null?!0:t==null?!1:t.getTime&&n.getTime?t.getTime()<n.getTime():t<n,lte:(t,n,o)=>n==null?!0:t==null?!1:t.getTime&&n.getTime?t.getTime()<=n.getTime():t<=n,gt:(t,n,o)=>n==null?!0:t==null?!1:t.getTime&&n.getTime?t.getTime()>n.getTime():t>n,gte:(t,n,o)=>n==null?!0:t==null?!1:t.getTime&&n.getTime?t.getTime()>=n.getTime():t>=n,is:(t,n,o)=>this.filters.equals(t,n,o),isNot:(t,n,o)=>this.filters.notEquals(t,n,o),before:(t,n,o)=>this.filters.lt(t,n,o),after:(t,n,o)=>this.filters.gt(t,n,o),dateIs:(t,n)=>n==null?!0:t==null?!1:t.toDateString()===n.toDateString(),dateIsNot:(t,n)=>n==null?!0:t==null?!1:t.toDateString()!==n.toDateString(),dateBefore:(t,n)=>n==null?!0:t==null?!1:t.getTime()<n.getTime(),dateAfter:(t,n)=>n==null?!0:t==null?!1:(t.setHours(0,0,0,0),t.getTime()>n.getTime())};register(t,n){this.filters[t]=n}static \u0275fac=function(n){return new(n||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Sa=(()=>{class e{messageSource=new we;clearSource=new we;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(t){t&&this.messageSource.next(t)}addAll(t){t&&t.length&&this.messageSource.next(t)}clear(t){this.clearSource.next(t||null)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})(),Ea=(()=>{class e{clickSource=new we;clickObservable=this.clickSource.asObservable();add(t){t&&this.clickSource.next(t)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var ki=["*"],Ta=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=H({type:e,selectors:[["p-header"]],standalone:!1,ngContentSelectors:ki,decls:1,vars:0,template:function(n,o){n&1&&(ye(),ve(0))},encapsulation:2})}return e})(),wa=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=H({type:e,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:ki,decls:1,vars:0,template:function(n,o){n&1&&(ye(),ve(0))},encapsulation:2})}return e})(),$i=(()=>{class e{template;type;name;constructor(t){this.template=t}getType(){return this.name}static \u0275fac=function(n){return new(n||e)(ze(Fn))};static \u0275dir=z({type:e,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return e})(),fe=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=F({type:e});static \u0275inj=M({imports:[Se]})}return e})(),Ca=(()=>{class e{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return e})();var or=Object.defineProperty,rr=Object.defineProperties,sr=Object.getOwnPropertyDescriptors,jt=Object.getOwnPropertySymbols,Bi=Object.prototype.hasOwnProperty,Ui=Object.prototype.propertyIsEnumerable,Mi=(e,i,t)=>i in e?or(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,J=(e,i)=>{for(var t in i||(i={}))Bi.call(i,t)&&Mi(e,t,i[t]);if(jt)for(var t of jt(i))Ui.call(i,t)&&Mi(e,t,i[t]);return e},Sn=(e,i)=>rr(e,sr(i)),ne=(e,i)=>{var t={};for(var n in e)Bi.call(e,n)&&i.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&jt)for(var n of jt(e))i.indexOf(n)<0&&Ui.call(e,n)&&(t[n]=e[n]);return t};function Oa(...e){return at(...e)}var ar=Ii(),V=ar;function Fi(e,i){Mt(e)?e.push(...i||[]):G(e)&&Object.assign(e,i)}function lr(e){return G(e)&&e.hasOwnProperty("value")&&e.hasOwnProperty("type")?e.value:e}function cr(e){return e.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function En(e="",i=""){return cr(`${he(e,!1)&&he(i,!1)?`${e}-`:e}${i}`)}function ji(e="",i=""){return`--${En(e,i)}`}function ur(e=""){let i=(e.match(/{/g)||[]).length,t=(e.match(/}/g)||[]).length;return(i+t)%2!==0}function Wi(e,i="",t="",n=[],o){if(he(e)){let r=/{([^}]*)}/g,s=e.trim();if(ur(s))return;if(P(s,r)){let l=s.replaceAll(r,u=>{let h=u.replace(/{|}/g,"").split(".").filter(d=>!n.some(m=>P(d,m)));return`var(${ji(t,Ft(h.join("-")))}${v(o)?`, ${o}`:""})`}),a=/(\d+\s+[\+\-\*\/]\s+\d+)/g,c=/var\([^)]+\)/g;return P(l.replace(c,"0"),a)?`calc(${l})`:l}return s}else if(Pi(e))return e}function dr(e,i,t){he(i,!1)&&e.push(`${i}:${t};`)}function Pe(e,i){return e?`${e}{${i}}`:""}var ke=(...e)=>pr(S.getTheme(),...e),pr=(e={},i,t,n)=>{if(i){let{variable:o,options:r}=S.defaults||{},{prefix:s,transform:l}=e?.options||r||{},c=P(i,/{([^}]*)}/g)?i:`{${i}}`;return n==="value"||W(n)&&l==="strict"?S.getTokenValue(i):Wi(c,void 0,s,[o.excludedKeyRegex],t)}return""};function hr(e,i={}){let t=S.defaults.variable,{prefix:n=t.prefix,selector:o=t.selector,excludedKeyRegex:r=t.excludedKeyRegex}=i,s=(c,u="")=>Object.entries(c).reduce((p,[h,d])=>{let m=P(h,r)?En(u):En(u,Ft(h)),f=lr(d);if(G(f)){let{variables:g,tokens:C}=s(f,m);Fi(p.tokens,C),Fi(p.variables,g)}else p.tokens.push((n?m.replace(`${n}-`,""):m).replaceAll("-",".")),dr(p.variables,ji(m),Wi(f,m,n,[r]));return p},{variables:[],tokens:[]}),{variables:l,tokens:a}=s(e,n);return{value:l,tokens:a,declarations:l.join(""),css:Pe(o,l.join(""))}}var q={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(e){return{type:"class",selector:e,matched:this.pattern.test(e.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(e){return{type:"attr",selector:`:root${e}`,matched:this.pattern.test(e.trim())}}},media:{pattern:/^@media (.*)$/,resolve(e){return{type:"media",selector:`${e}{:root{[CSS]}}`,matched:this.pattern.test(e.trim())}}},system:{pattern:/^system$/,resolve(e){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(e.trim())}}},custom:{resolve(e){return{type:"custom",selector:e,matched:!0}}}},resolve(e){let i=Object.keys(this.rules).filter(t=>t!=="custom").map(t=>this.rules[t]);return[e].flat().map(t=>{var n;return(n=i.map(o=>o.resolve(t)).find(o=>o.matched))!=null?n:this.rules.custom.resolve(t)})}},_toVariables(e,i){return hr(e,{prefix:i?.prefix})},getCommon({name:e="",theme:i={},params:t,set:n,defaults:o}){var r,s,l,a,c,u,p;let{preset:h,options:d}=i,m,f,g,C,T,E,x;if(v(h)&&d.transform!=="strict"){let{primitive:$,semantic:Y,extend:ge}=h,Me=Y||{},{colorScheme:ct}=Me,ut=ne(Me,["colorScheme"]),dt=ge||{},{colorScheme:pt}=dt,Fe=ne(dt,["colorScheme"]),Be=ct||{},{dark:ht}=Be,ft=ne(Be,["dark"]),gt=pt||{},{dark:bt}=gt,mt=ne(gt,["dark"]),yt=v($)?this._toVariables({primitive:$},d):{},vt=v(ut)?this._toVariables({semantic:ut},d):{},St=v(ft)?this._toVariables({light:ft},d):{},_n=v(ht)?this._toVariables({dark:ht},d):{},Ln=v(Fe)?this._toVariables({semantic:Fe},d):{},On=v(mt)?this._toVariables({light:mt},d):{},xn=v(bt)?this._toVariables({dark:bt},d):{},[to,no]=[(r=yt.declarations)!=null?r:"",yt.tokens],[io,oo]=[(s=vt.declarations)!=null?s:"",vt.tokens||[]],[ro,so]=[(l=St.declarations)!=null?l:"",St.tokens||[]],[ao,lo]=[(a=_n.declarations)!=null?a:"",_n.tokens||[]],[co,uo]=[(c=Ln.declarations)!=null?c:"",Ln.tokens||[]],[po,ho]=[(u=On.declarations)!=null?u:"",On.tokens||[]],[fo,go]=[(p=xn.declarations)!=null?p:"",xn.tokens||[]];m=this.transformCSS(e,to,"light","variable",d,n,o),f=no;let bo=this.transformCSS(e,`${io}${ro}`,"light","variable",d,n,o),mo=this.transformCSS(e,`${ao}`,"dark","variable",d,n,o);g=`${bo}${mo}`,C=[...new Set([...oo,...so,...lo])];let yo=this.transformCSS(e,`${co}${po}color-scheme:light`,"light","variable",d,n,o),vo=this.transformCSS(e,`${fo}color-scheme:dark`,"dark","variable",d,n,o);T=`${yo}${vo}`,E=[...new Set([...uo,...ho,...go])],x=j(h.css,{dt:ke})}return{primitive:{css:m,tokens:f},semantic:{css:g,tokens:C},global:{css:T,tokens:E},style:x}},getPreset({name:e="",preset:i={},options:t,params:n,set:o,defaults:r,selector:s}){var l,a,c;let u,p,h;if(v(i)&&t.transform!=="strict"){let d=e.replace("-directive",""),m=i,{colorScheme:f,extend:g,css:C}=m,T=ne(m,["colorScheme","extend","css"]),E=g||{},{colorScheme:x}=E,$=ne(E,["colorScheme"]),Y=f||{},{dark:ge}=Y,Me=ne(Y,["dark"]),ct=x||{},{dark:ut}=ct,dt=ne(ct,["dark"]),pt=v(T)?this._toVariables({[d]:J(J({},T),$)},t):{},Fe=v(Me)?this._toVariables({[d]:J(J({},Me),dt)},t):{},Be=v(ge)?this._toVariables({[d]:J(J({},ge),ut)},t):{},[ht,ft]=[(l=pt.declarations)!=null?l:"",pt.tokens||[]],[gt,bt]=[(a=Fe.declarations)!=null?a:"",Fe.tokens||[]],[mt,yt]=[(c=Be.declarations)!=null?c:"",Be.tokens||[]],vt=this.transformCSS(d,`${ht}${gt}`,"light","variable",t,o,r,s),St=this.transformCSS(d,mt,"dark","variable",t,o,r,s);u=`${vt}${St}`,p=[...new Set([...ft,...bt,...yt])],h=j(C,{dt:ke})}return{css:u,tokens:p,style:h}},getPresetC({name:e="",theme:i={},params:t,set:n,defaults:o}){var r;let{preset:s,options:l}=i,a=(r=s?.components)==null?void 0:r[e];return this.getPreset({name:e,preset:a,options:l,params:t,set:n,defaults:o})},getPresetD({name:e="",theme:i={},params:t,set:n,defaults:o}){var r;let s=e.replace("-directive",""),{preset:l,options:a}=i,c=(r=l?.directives)==null?void 0:r[s];return this.getPreset({name:s,preset:c,options:a,params:t,set:n,defaults:o})},applyDarkColorScheme(e){return!(e.darkModeSelector==="none"||e.darkModeSelector===!1)},getColorSchemeOption(e,i){var t;return this.applyDarkColorScheme(e)?this.regex.resolve(e.darkModeSelector===!0?i.options.darkModeSelector:(t=e.darkModeSelector)!=null?t:i.options.darkModeSelector):[]},getLayerOrder(e,i={},t,n){let{cssLayer:o}=i;return o?`@layer ${j(o.order||"primeui",t)}`:""},getCommonStyleSheet({name:e="",theme:i={},params:t,props:n={},set:o,defaults:r}){let s=this.getCommon({name:e,theme:i,params:t,set:o,defaults:r}),l=Object.entries(n).reduce((a,[c,u])=>a.push(`${c}="${u}"`)&&a,[]).join(" ");return Object.entries(s||{}).reduce((a,[c,u])=>{if(u?.css){let p=Te(u?.css),h=`${c}-variables`;a.push(`<style type="text/css" data-primevue-style-id="${h}" ${l}>${p}</style>`)}return a},[]).join("")},getStyleSheet({name:e="",theme:i={},params:t,props:n={},set:o,defaults:r}){var s;let l={name:e,theme:i,params:t,set:o,defaults:r},a=(s=e.includes("-directive")?this.getPresetD(l):this.getPresetC(l))==null?void 0:s.css,c=Object.entries(n).reduce((u,[p,h])=>u.push(`${p}="${h}"`)&&u,[]).join(" ");return a?`<style type="text/css" data-primevue-style-id="${e}-variables" ${c}>${Te(a)}</style>`:""},createTokens(e={},i,t="",n="",o={}){return Object.entries(e).forEach(([r,s])=>{let l=P(r,i.variable.excludedKeyRegex)?t:t?`${t}.${vn(r)}`:vn(r),a=n?`${n}.${r}`:r;G(s)?this.createTokens(s,i,l,a,o):(o[l]||(o[l]={paths:[],computed(c,u={}){var p,h;return this.paths.length===1?(p=this.paths[0])==null?void 0:p.computed(this.paths[0].scheme,u.binding):c&&c!=="none"?(h=this.paths.find(d=>d.scheme===c))==null?void 0:h.computed(c,u.binding):this.paths.map(d=>d.computed(d.scheme,u[d.scheme]))}}),o[l].paths.push({path:a,value:s,scheme:a.includes("colorScheme.light")?"light":a.includes("colorScheme.dark")?"dark":"none",computed(c,u={}){let p=/{([^}]*)}/g,h=s;if(u.name=this.path,u.binding||(u.binding={}),P(s,p)){let m=s.trim().replaceAll(p,C=>{var T;let E=C.replace(/{|}/g,""),x=(T=o[E])==null?void 0:T.computed(c,u);return Mt(x)&&x.length===2?`light-dark(${x[0].value},${x[1].value})`:x?.value}),f=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,g=/var\([^)]+\)/g;h=P(m.replace(g,"0"),f)?`calc(${m})`:m}return W(u.binding)&&delete u.binding,{colorScheme:c,path:this.path,paths:u,value:h.includes("undefined")?void 0:h}}}))}),o},getTokenValue(e,i,t){var n;let r=(a=>a.split(".").filter(u=>!P(u.toLowerCase(),t.variable.excludedKeyRegex)).join("."))(i),s=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,l=[(n=e[r])==null?void 0:n.computed(s)].flat().filter(a=>a);return l.length===1?l[0].value:l.reduce((a={},c)=>{let u=c,{colorScheme:p}=u,h=ne(u,["colorScheme"]);return a[p]=h,a},void 0)},getSelectorRule(e,i,t,n){return t==="class"||t==="attr"?Pe(v(i)?`${e}${i},${e} ${i}`:e,n):Pe(e,v(i)?Pe(i,n):n)},transformCSS(e,i,t,n,o={},r,s,l){if(v(i)){let{cssLayer:a}=o;if(n!=="style"){let c=this.getColorSchemeOption(o,s);i=t==="dark"?c.reduce((u,{type:p,selector:h})=>(v(h)&&(u+=h.includes("[CSS]")?h.replace("[CSS]",i):this.getSelectorRule(h,l,p,i)),u),""):Pe(l??":root",i)}if(a){let c={name:"primeui",order:"primeui"};G(a)&&(c.name=j(a.name,{name:e,type:n})),v(c.name)&&(i=Pe(`@layer ${c.name}`,i),r?.layerNames(c.name))}return i}return""}},S={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(e={}){let{theme:i}=e;i&&(this._theme=Sn(J({},i),{options:J(J({},this.defaults.options),i.options)}),this._tokens=q.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var e;return((e=this.theme)==null?void 0:e.preset)||{}},get options(){var e;return((e=this.theme)==null?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(e){this.update({theme:e}),V.emit("theme:change",e)},getPreset(){return this.preset},setPreset(e){this._theme=Sn(J({},this.theme),{preset:e}),this._tokens=q.createTokens(e,this.defaults),this.clearLoadedStyleNames(),V.emit("preset:change",e),V.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(e){this._theme=Sn(J({},this.theme),{options:e}),this.clearLoadedStyleNames(),V.emit("options:change",e),V.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(e){this._layerNames.add(e)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(e){return q.getTokenValue(this.tokens,e,this.defaults)},getCommon(e="",i){return q.getCommon({name:e,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(e="",i){let t={name:e,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return q.getPresetC(t)},getDirective(e="",i){let t={name:e,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return q.getPresetD(t)},getCustomPreset(e="",i,t,n){let o={name:e,preset:i,options:this.options,selector:t,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return q.getPreset(o)},getLayerOrderCSS(e=""){return q.getLayerOrder(e,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(e="",i,t="style",n){return q.transformCSS(e,i,n,t,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(e="",i,t={}){return q.getCommonStyleSheet({name:e,theme:this.theme,params:i,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(e,i,t={}){return q.getStyleSheet({name:e,theme:this.theme,params:i,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(e){this._loadingStyles.add(e)},onStyleUpdated(e){this._loadingStyles.add(e)},onStyleLoaded(e,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),V.emit(`theme:${i}:load`,e),!this._loadingStyles.size&&V.emit("theme:load"))}};var fr=0,Vi=(()=>{class e{document=b(Q);use(t,n={}){let o=!1,r=t,s=null,{immediate:l=!0,manual:a=!1,name:c=`style_${++fr}`,id:u=void 0,media:p=void 0,nonce:h=void 0,first:d=!1,props:m={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${c}"]`)||u&&this.document.getElementById(u)||this.document.createElement("style"),!s.isConnected){r=t,Pt(s,{type:"text/css",media:p,nonce:h});let f=this.document.head;d&&f.firstChild?f.insertBefore(s,f.firstChild):f.appendChild(s),xi(s,"data-primeng-style-id",c)}return s.textContent!==r&&(s.textContent=r),{id:u,name:c,el:s,css:r}}}static \u0275fac=function(n){return new(n||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var $e={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},gr=({dt:e})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${e("disabled.opacity")};
}

.pi {
    font-size: ${e("icon.size")};
}

.p-icon {
    width: ${e("icon.size")};
    height: ${e("icon.size")};
}

.p-overlay-mask {
    background: ${e("mask.background")};
    color: ${e("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${e("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${e("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${e("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${e("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,br=({dt:e})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${e("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,D=(()=>{class e{name="base";useStyle=b(Vi);theme=gr;css=br;classes={};inlineStyles={};load=(t,n={},o=r=>r)=>{let r=o(j(t,{dt:ke}));return r?this.useStyle.use(Te(r),w({name:this.name},n)):{}};loadCSS=(t={})=>this.load(this.css,t);loadTheme=(t={},n="")=>this.load(this.theme,t,(o="")=>S.transformCSS(t.name||this.name,`${o}${n}`));getCommonTheme=t=>S.getCommon(this.name,t);getComponentTheme=t=>S.getComponent(this.name,t);getDirectiveTheme=t=>S.getDirective(this.name,t);getPresetTheme=(t,n,o)=>S.getCustomPreset(this.name,t,n,o);getLayerOrderThemeCSS=()=>S.getLayerOrderCSS(this.name);getStyleSheet=(t="",n={})=>{if(this.css){let o=j(this.css,{dt:ke}),r=Te(`${o}${t}`),s=Object.entries(n).reduce((l,[a,c])=>l.push(`${a}="${c}"`)&&l,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(t,n={})=>S.getCommonStyleSheet(this.name,t,n);getThemeStyleSheet=(t,n={})=>{let o=[S.getStyleSheet(this.name,t,n)];if(this.theme){let r=this.name==="base"?"global-style":`${this.name}-style`,s=j(this.theme,{dt:ke}),l=Te(S.transformCSS(r,s)),a=Object.entries(n).reduce((c,[u,p])=>c.push(`${u}="${p}"`)&&c,[]).join(" ");o.push(`<style type="text/css" data-primeng-style-id="${r}" ${a}>${l}</style>`)}return o.join("")};static \u0275fac=function(n){return new(n||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var mr=(()=>{class e{theme=be(void 0);csp=be({nonce:void 0});isThemeChanged=!1;document=b(Q);baseStyle=b(D);constructor(){Je(()=>{V.on("theme:change",t=>{Gn(()=>{this.isThemeChanged=!0,this.theme.set(t)})})}),Je(()=>{let t=this.theme();this.document&&t&&(this.isThemeChanged||this.onThemeChange(t),this.isThemeChanged=!1)})}ngOnDestroy(){S.clearLoadedStyleNames(),V.clear()}onThemeChange(t){S.setTheme(t),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!S.isStyleNameLoaded("common")){let{primitive:t,semantic:n,global:o,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(t?.css,w({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,w({name:"semantic-variables"},s)),this.baseStyle.load(o?.css,w({name:"global-variables"},s)),this.baseStyle.loadTheme(w({name:"global-style"},s),r),S.setLoadedStyleName("common")}}setThemeConfig(t){let{theme:n,csp:o}=t||{};n&&this.theme.set(n),o&&this.csp.set(o)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Tn=(()=>{class e extends mr{ripple=be(!1);platformId=b(ae);inputStyle=be("outlined");inputVariant=be("outlined");overlayOptions={};csp=be({nonce:void 0});filterMatchModeOptions={text:[R.STARTS_WITH,R.CONTAINS,R.NOT_CONTAINS,R.ENDS_WITH,R.EQUALS,R.NOT_EQUALS],numeric:[R.EQUALS,R.NOT_EQUALS,R.LESS_THAN,R.LESS_THAN_OR_EQUAL_TO,R.GREATER_THAN,R.GREATER_THAN_OR_EQUAL_TO],date:[R.DATE_IS,R.DATE_IS_NOT,R.DATE_BEFORE,R.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new we;translationObserver=this.translationSource.asObservable();getTranslation(t){return this.translation[t]}setTranslation(t){this.translation=w(w({},this.translation),t),this.translationSource.next(this.translation)}setConfig(t){let{csp:n,ripple:o,inputStyle:r,theme:s,overlayOptions:l,translation:a}=t||{};n&&this.csp.set(n),o&&this.ripple.set(o),r&&this.inputStyle.set(r),l&&(this.overlayOptions=l),a&&this.setTranslation(a),s&&this.setThemeConfig({theme:s,csp:n})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),yr=new N("PRIME_NG_CONFIG");function il(...e){let i=e?.map(n=>({provide:yr,useValue:n,multi:!1})),t=jn(()=>{let n=b(Tn);e?.forEach(o=>n.setConfig(o))});return We([...i,t])}var Hi=(()=>{class e extends D{name="common";static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Z=(()=>{class e{document=b(Q);platformId=b(ae);el=b(He);injector=b($n);cd=b(Ot);renderer=b(Bn);config=b(Tn);baseComponentStyle=b(Hi);baseStyle=b(D);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=lt("pc");_getHostInstance(t){if(t)return t?this.hostName?t.name===this.hostName?t:this._getHostInstance(t.parentInstance):t.parentInstance:void 0}_getOptionValue(t,n="",o={}){return $t(t,n,o)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(t){if(this.document&&!Zn(this.platformId)){let{dt:n}=t;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles()}_loadStyles(){let t=()=>{$e.isStyleNameLoaded("base")||(this.baseStyle.loadCSS(this.styleOptions),$e.setLoadedStyleName("base")),this._loadThemeStyles()};t(),this._themeChangeListener(()=>t())}_loadCoreStyles(){!$e.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),$e.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!S.isStyleNameLoaded("common")){let{primitive:t,semantic:n,global:o,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,w({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,w({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(o?.css,w({name:"global-variables"},this.styleOptions)),this.baseStyle.loadTheme(w({name:"global-style"},this.styleOptions),r),S.setLoadedStyleName("common")}if(!S.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:t,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(t,w({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(w({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),S.setLoadedStyleName(this.componentStyle?.name)}if(!S.isStyleNameLoaded("layer-order")){let t=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,w({name:"layer-order",first:!0},this.styleOptions)),S.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(t){let{css:n}=this.componentStyle?.getPresetTheme?.(t,`[${this.attrSelector}]`)||{},o=this.componentStyle?.load(n,w({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){$e.clearLoadedStyleNames(),V.on("theme:change",t)}cx(t,n){let o=this.parent?this.parent.componentStyle?.classes?.[t]:this.componentStyle?.classes?.[t];return typeof o=="function"?o({instance:this}):typeof o=="string"?o:t}sx(t){let n=this.componentStyle?.inlineStyles?.[t];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:w({},n)}get parent(){return this.parentInstance}static \u0275fac=function(n){return new(n||e)};static \u0275dir=z({type:e,inputs:{dt:"dt"},features:[X([Hi,D]),Ve]})}return e})();var wn=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,n){t&&n&&(t.classList?t.classList.add(n):t.className+=" "+n)}static addMultipleClasses(t,n){if(t&&n)if(t.classList){let o=n.trim().split(" ");for(let r=0;r<o.length;r++)t.classList.add(o[r])}else{let o=n.split(" ");for(let r=0;r<o.length;r++)t.className+=" "+o[r]}}static removeClass(t,n){t&&n&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,n){t&&n&&[n].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r=>this.removeClass(t,r)))}static hasClass(t,n){return t&&n?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(n){return n!==t})}static find(t,n){return Array.from(t.querySelectorAll(n))}static findSingle(t,n){return this.isElement(t)?t.querySelector(n):null}static index(t){let n=t.parentNode.childNodes,o=0;for(var r=0;r<n.length;r++){if(n[r]==t)return o;n[r].nodeType==1&&o++}return-1}static indexWithinGroup(t,n){let o=t.parentNode?t.parentNode.childNodes:[],r=0;for(var s=0;s<o.length;s++){if(o[s]==t)return r;o[s].attributes&&o[s].attributes[n]&&o[s].nodeType==1&&r++}return-1}static appendOverlay(t,n,o="self"){o!=="self"&&t&&n&&this.appendChild(t,n)}static alignOverlay(t,n,o="self",r=!0){t&&n&&(r&&(t.style.minWidth=`${e.getOuterWidth(n)}px`),o==="self"?this.relativePosition(t,n):this.absolutePosition(t,n))}static relativePosition(t,n,o=!0){let r=T=>{if(T)return getComputedStyle(T).getPropertyValue("position")==="relative"?T:r(T.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),l=n.offsetHeight,a=n.getBoundingClientRect(),c=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),p=this.getViewport(),d=r(t)?.getBoundingClientRect()||{top:-1*c,left:-1*u},m,f;a.top+l+s.height>p.height?(m=a.top-d.top-s.height,t.style.transformOrigin="bottom",a.top+m<0&&(m=-1*a.top)):(m=l+a.top-d.top,t.style.transformOrigin="top");let g=a.left+s.width-p.width,C=a.left-d.left;s.width>p.width?f=(a.left-d.left)*-1:g>0?f=C-g:f=a.left-d.left,t.style.top=m+"px",t.style.left=f+"px",o&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(t,n,o=!0){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=r.height,l=r.width,a=n.offsetHeight,c=n.offsetWidth,u=n.getBoundingClientRect(),p=this.getWindowScrollTop(),h=this.getWindowScrollLeft(),d=this.getViewport(),m,f;u.top+a+s>d.height?(m=u.top+p-s,t.style.transformOrigin="bottom",m<0&&(m=p)):(m=a+u.top+p,t.style.transformOrigin="top"),u.left+l>d.width?f=Math.max(0,u.left+h+c-l):f=u.left+h,t.style.top=m+"px",t.style.left=f+"px",o&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,n=[]){return t.parentNode===null?n:this.getParents(t.parentNode,n.concat([t.parentNode]))}static getScrollableParents(t){let n=[];if(t){let o=this.getParents(t),r=/(auto|scroll)/,s=l=>{let a=window.getComputedStyle(l,null);return r.test(a.getPropertyValue("overflow"))||r.test(a.getPropertyValue("overflowX"))||r.test(a.getPropertyValue("overflowY"))};for(let l of o){let a=l.nodeType===1&&l.dataset.scrollselectors;if(a){let c=a.split(",");for(let u of c){let p=this.findSingle(l,u);p&&s(p)&&n.push(p)}}l.nodeType!==9&&s(l)&&n.push(l)}}return n}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementDimensions(t){let n={};return t.style.visibility="hidden",t.style.display="block",n.width=t.offsetWidth,n.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",n}static scrollInView(t,n){let o=getComputedStyle(t).getPropertyValue("borderTopWidth"),r=o?parseFloat(o):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),l=s?parseFloat(s):0,a=t.getBoundingClientRect(),u=n.getBoundingClientRect().top+document.body.scrollTop-(a.top+document.body.scrollTop)-r-l,p=t.scrollTop,h=t.clientHeight,d=this.getOuterHeight(n);u<0?t.scrollTop=p+u:u+d>h&&(t.scrollTop=p+u-h+d)}static fadeIn(t,n){t.style.opacity=0;let o=+new Date,r=0,s=function(){r=+t.style.opacity.replace(",",".")+(new Date().getTime()-o)/n,t.style.opacity=r,o=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(t,n){var o=1,r=50,s=n,l=r/s;let a=setInterval(()=>{o=o-l,o<=0&&(o=0,clearInterval(a)),t.style.opacity=o},r)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,n){var o=Element.prototype,r=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(t,n)}static getOuterWidth(t,n){let o=t.offsetWidth;if(n){let r=getComputedStyle(t);o+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return o}static getHorizontalPadding(t){let n=getComputedStyle(t);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(t){let n=getComputedStyle(t);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(t){let n=t.offsetWidth,o=getComputedStyle(t);return n+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static width(t){let n=t.offsetWidth,o=getComputedStyle(t);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static getInnerHeight(t){let n=t.offsetHeight,o=getComputedStyle(t);return n+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),n}static getOuterHeight(t,n){let o=t.offsetHeight;if(n){let r=getComputedStyle(t);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return o}static getHeight(t){let n=t.offsetHeight,o=getComputedStyle(t);return n-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),n}static getWidth(t){let n=t.offsetWidth,o=getComputedStyle(t);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),n}static getViewport(){let t=window,n=document,o=n.documentElement,r=n.getElementsByTagName("body")[0],s=t.innerWidth||o.clientWidth||r.clientWidth,l=t.innerHeight||o.clientHeight||r.clientHeight;return{width:s,height:l}}static getOffset(t){var n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,n){let o=t.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(n,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,n=t.indexOf("MSIE ");if(n>0)return!0;var o=t.indexOf("Trident/");if(o>0){var r=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,n){if(this.isElement(n))n.appendChild(t);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(t);else throw"Cannot append "+n+" to "+t}static removeChild(t,n){if(this.isElement(n))n.removeChild(t);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+n}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let n=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let o=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let n=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(t,n,o){t[n].apply(t,o)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,n){t&&document.activeElement!==t&&t.focus(n)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,n=""){let o=this.find(t,this.getFocusableSelectorString(n)),r=[];for(let s of o){let l=getComputedStyle(s);this.isVisible(s)&&l.display!="none"&&l.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(t,n=""){let o=this.findSingle(t,this.getFocusableSelectorString(n));if(o){let r=getComputedStyle(o);if(this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden")return o}return null}static getFirstFocusableElement(t,n=""){let o=this.getFocusableElements(t,n);return o.length>0?o[0]:null}static getLastFocusableElement(t,n){let o=this.getFocusableElements(t,n);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(t,n=!1){let o=e.getFocusableElements(t),r=0;if(o&&o.length>0){let s=o.indexOf(o[0].ownerDocument.activeElement);n?s==-1||s===0?r=o.length-1:r=s-1:s!=-1&&s!==o.length-1&&(r=s+1)}return o[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,n){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let o=typeof t;if(o==="string")return document.querySelector(t);if(o==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(l=>!!(l&&l.constructor&&l.call&&l.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,n){if(t){let o=t.getAttribute(n);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,n={},...o){if(t){let r=document.createElement(t);return this.setAttributes(r,n),r.append(...o),r}}static setAttribute(t,n="",o){this.isElement(t)&&o!==null&&o!==void 0&&t.setAttribute(n,o)}static setAttributes(t,n={}){if(this.isElement(t)){let o=(r,s)=>{let l=t?.$attrs?.[r]?[t?.$attrs?.[r]]:[];return[s].flat().reduce((a,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")a.push(c);else if(u==="object"){let p=Array.isArray(c)?o(r,c):Object.entries(c).map(([h,d])=>r==="style"&&(d||d===0)?`${h.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${d}`:d?h:void 0);a=p.length?a.concat(p.filter(h=>!!h)):a}}return a},l)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let l=r.match(/^on(.+)/);l?t.addEventListener(l[1].toLowerCase(),s):r==="pBind"?this.setAttributes(t,s):(s=r==="class"?[...new Set(o("class",s))].join(" ").trim():r==="style"?o("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=s),t.setAttribute(r,s))}})}}static isFocusableElement(t,n=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return e})(),zi=class{element;listener;scrollableParents;constructor(i,t=()=>{}){this.element=i,this.listener=t}bindScrollListener(){this.scrollableParents=wn.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Ki=(()=>{class e extends Z{autofocus=!1;_autofocus=!1;focused=!1;platformId=b(ae);document=b(Q);host=b(He);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){xt(this.platformId)&&this._autofocus&&setTimeout(()=>{let t=wn.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275dir=z({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",I],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[_e,B]})}return e})();var vr=({dt:e})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${e("badge.border.radius")};
    justify-content: center;
    padding: ${e("badge.padding")};
    background: ${e("badge.primary.background")};
    color: ${e("badge.primary.color")};
    font-size: ${e("badge.font.size")};
    font-weight: ${e("badge.font.weight")};
    min-width: ${e("badge.min.width")};
    height: ${e("badge.height")};
    line-height: ${e("badge.height")};
}

.p-badge-dot {
    width: ${e("badge.dot.size")};
    min-width: ${e("badge.dot.size")};
    height: ${e("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${e("badge.secondary.background")};
    color: ${e("badge.secondary.color")};
}

.p-badge-success {
    background: ${e("badge.success.background")};
    color: ${e("badge.success.color")};
}

.p-badge-info {
    background: ${e("badge.info.background")};
    color: ${e("badge.info.color")};
}

.p-badge-warn {
    background: ${e("badge.warn.background")};
    color: ${e("badge.warn.color")};
}

.p-badge-danger {
    background: ${e("badge.danger.background")};
    color: ${e("badge.danger.color")};
}

.p-badge-contrast {
    background: ${e("badge.contrast.background")};
    color: ${e("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${e("badge.sm.font.size")};
    min-width: ${e("badge.sm.min.width")};
    height: ${e("badge.sm.height")};
    line-height: ${e("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${e("badge.lg.font.size")};
    min-width: ${e("badge.lg.min.width")};
    height: ${e("badge.lg.height")};
    line-height: ${e("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${e("badge.xl.font.size")};
    min-width: ${e("badge.xl.min.width")};
    height: ${e("badge.xl.height")};
    line-height: ${e("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,Sr={root:({props:e,instance:i})=>["p-badge p-component",{"p-badge-circle":v(e.value)&&String(e.value).length===1,"p-badge-dot":W(e.value)&&!i.$slots.default,"p-badge-sm":e.size==="small","p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warn":e.severity==="warn","p-badge-danger":e.severity==="danger","p-badge-secondary":e.severity==="secondary","p-badge-contrast":e.severity==="contrast"}]},Gi=(()=>{class e extends D{name="badge";theme=vr;classes=Sr;static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var Cn=(()=>{class e extends Z{styleClass=se();style=se();badgeSize=se();size=se();severity=se();value=se();badgeDisabled=se(!1,{transform:I});_componentStyle=b(Gi);containerClass=Jt(()=>{let t="p-badge p-component";return v(this.value())&&String(this.value()).length===1&&(t+=" p-badge-circle"),this.badgeSize()==="large"?t+=" p-badge-lg":this.badgeSize()==="xlarge"?t+=" p-badge-xl":this.badgeSize()==="small"&&(t+=" p-badge-sm"),W(this.value())&&(t+=" p-badge-dot"),this.styleClass()&&(t+=` ${this.styleClass()}`),this.severity()&&(t+=` p-badge-${this.severity()}`),t});static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275cmp=H({type:e,selectors:[["p-badge"]],hostVars:6,hostBindings:function(n,o){n&2&&(Vn(o.style()),Le(o.containerClass()),Wn("display",o.badgeDisabled()&&"none"))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[X([Gi]),B],decls:1,vars:1,template:function(n,o){n&1&&_t(0),n&2&&Lt(o.value())},dependencies:[Se,fe],encapsulation:2,changeDetection:0})}return e})(),qi=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=F({type:e});static \u0275inj=M({imports:[Cn,fe,fe]})}return e})();var Tr=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,wr=(()=>{class e extends D{name="baseicon";inlineStyles=Tr;static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var Cr=["*"],Ji=(()=>{class e extends Z{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let t=W(this.label);this.role=t?void 0:"img",this.ariaLabel=t?void 0:this.label,this.ariaHidden=t}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275cmp=H({type:e,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",I],styleClass:"styleClass"},features:[X([wr]),_e,B],ngContentSelectors:Cr,decls:1,vars:0,template:function(n,o){n&1&&(ye(),ve(0))},encapsulation:2,changeDetection:0})}return e})();var Yi=(()=>{class e extends Ji{pathId;ngOnInit(){this.pathId="url(#"+lt()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275cmp=H({type:e,selectors:[["SpinnerIcon"]],features:[B],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(kn(),Oe(0,"svg",0)(1,"g"),le(2,"path",1),xe(),Oe(3,"defs")(4,"clipPath",2),le(5,"rect",3),xe()()()),n&2&&(Le(o.getClassNames()),ee("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),A(),ee("clip-path",o.pathId),A(3),L("id",o.pathId))},encapsulation:2})}return e})();var _r=({dt:e})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${e("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,Lr={root:"p-ink"},Xi=(()=>{class e extends D{name="ripple";theme=_r;classes=Lr;static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var Qi=(()=>{class e extends Z{zone=b(Tt);_componentStyle=b(Xi);animationListener;mouseDownListener;timeout;constructor(){super(),Je(()=>{xt(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(Ee(n,"p-ink-active"),!fn(n)&&!bn(n)){let l=Math.max(wi(this.el.nativeElement),gn(this.el.nativeElement));n.style.height=l+"px",n.style.width=l+"px"}let o=Li(this.el.nativeElement),r=t.pageX-o.left+this.document.body.scrollTop-bn(n)/2,s=t.pageY-o.top+this.document.body.scrollLeft-fn(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),st(n,"p-ink-active"),this.timeout=setTimeout(()=>{let l=this.getInk();l&&Ee(l,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let n=0;n<t.length;n++)if(typeof t[n].className=="string"&&t[n].className.indexOf("p-ink")!==-1)return t[n];return null}resetInk(){let t=this.getInk();t&&Ee(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),Ee(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Oi(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||e)};static \u0275dir=z({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[X([Xi]),B]})}return e})(),sc=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=F({type:e});static \u0275inj=M({})}return e})();var Or=({dt:e})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("button.primary.color")};
    background: ${e("button.primary.background")};
    border: 1px solid ${e("button.primary.border.color")};
    padding-block: ${e("button.padding.y")};
    padding-inline: ${e("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("button.transition.duration")}, color ${e("button.transition.duration")}, border-color ${e("button.transition.duration")},
            outline-color ${e("button.transition.duration")}, box-shadow ${e("button.transition.duration")};
    border-radius: ${e("button.border.radius")};
    outline-color: transparent;
    gap: ${e("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${e("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${e("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${e("button.sm.font.size")};
    padding-block: ${e("button.sm.padding.y")};
    padding-inline: ${e("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${e("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${e("button.lg.font.size")};
    padding-block: ${e("button.lg.padding.y")};
    padding-inline: ${e("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${e("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${e("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${e("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${e("button.primary.hover.background")};
    border: 1px solid ${e("button.primary.hover.border.color")};
    color: ${e("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${e("button.primary.active.background")};
    border: 1px solid ${e("button.primary.active.border.color")};
    color: ${e("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${e("button.primary.focus.ring.shadow")};
    outline: ${e("button.focus.ring.width")} ${e("button.focus.ring.style")} ${e("button.primary.focus.ring.color")};
    outline-offset: ${e("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${e("button.badge.size")};
    height: ${e("button.badge.size")};
    line-height: ${e("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${e("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${e("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${e("button.secondary.background")};
    border: 1px solid ${e("button.secondary.border.color")};
    color: ${e("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${e("button.secondary.hover.background")};
    border: 1px solid ${e("button.secondary.hover.border.color")};
    color: ${e("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${e("button.secondary.active.background")};
    border: 1px solid ${e("button.secondary.active.border.color")};
    color: ${e("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${e("button.secondary.focus.ring.color")};
    box-shadow: ${e("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${e("button.success.background")};
    border: 1px solid ${e("button.success.border.color")};
    color: ${e("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${e("button.success.hover.background")};
    border: 1px solid ${e("button.success.hover.border.color")};
    color: ${e("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${e("button.success.active.background")};
    border: 1px solid ${e("button.success.active.border.color")};
    color: ${e("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${e("button.success.focus.ring.color")};
    box-shadow: ${e("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${e("button.info.background")};
    border: 1px solid ${e("button.info.border.color")};
    color: ${e("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${e("button.info.hover.background")};
    border: 1px solid ${e("button.info.hover.border.color")};
    color: ${e("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${e("button.info.active.background")};
    border: 1px solid ${e("button.info.active.border.color")};
    color: ${e("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${e("button.info.focus.ring.color")};
    box-shadow: ${e("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${e("button.warn.background")};
    border: 1px solid ${e("button.warn.border.color")};
    color: ${e("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${e("button.warn.hover.background")};
    border: 1px solid ${e("button.warn.hover.border.color")};
    color: ${e("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${e("button.warn.active.background")};
    border: 1px solid ${e("button.warn.active.border.color")};
    color: ${e("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${e("button.warn.focus.ring.color")};
    box-shadow: ${e("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${e("button.help.background")};
    border: 1px solid ${e("button.help.border.color")};
    color: ${e("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${e("button.help.hover.background")};
    border: 1px solid ${e("button.help.hover.border.color")};
    color: ${e("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${e("button.help.active.background")};
    border: 1px solid ${e("button.help.active.border.color")};
    color: ${e("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${e("button.help.focus.ring.color")};
    box-shadow: ${e("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${e("button.danger.background")};
    border: 1px solid ${e("button.danger.border.color")};
    color: ${e("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${e("button.danger.hover.background")};
    border: 1px solid ${e("button.danger.hover.border.color")};
    color: ${e("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${e("button.danger.active.background")};
    border: 1px solid ${e("button.danger.active.border.color")};
    color: ${e("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${e("button.danger.focus.ring.color")};
    box-shadow: ${e("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${e("button.contrast.background")};
    border: 1px solid ${e("button.contrast.border.color")};
    color: ${e("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${e("button.contrast.hover.background")};
    border: 1px solid ${e("button.contrast.hover.border.color")};
    color: ${e("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${e("button.contrast.active.background")};
    border: 1px solid ${e("button.contrast.active.border.color")};
    color: ${e("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${e("button.contrast.focus.ring.color")};
    box-shadow: ${e("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${e("button.outlined.primary.hover.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${e("button.outlined.primary.active.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${e("button.outlined.secondary.hover.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${e("button.outlined.success.hover.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${e("button.outlined.success.active.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${e("button.outlined.info.hover.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${e("button.outlined.info.active.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${e("button.outlined.warn.hover.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${e("button.outlined.warn.active.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${e("button.outlined.help.hover.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${e("button.outlined.help.active.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${e("button.outlined.danger.hover.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${e("button.outlined.danger.active.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${e("button.outlined.contrast.hover.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${e("button.outlined.contrast.active.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${e("button.outlined.plain.hover.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${e("button.outlined.plain.active.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${e("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${e("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${e("button.text.success.hover.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${e("button.text.info.hover.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${e("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${e("button.text.help.hover.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${e("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${e("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${e("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,xr={root:({instance:e,props:i})=>["p-button p-component",{"p-button-icon-only":e.hasIcon&&!i.label&&!i.badge,"p-button-vertical":(i.iconPos==="top"||i.iconPos==="bottom")&&i.label,"p-button-loading":i.loading,"p-button-link":i.link,[`p-button-${i.severity}`]:i.severity,"p-button-raised":i.raised,"p-button-rounded":i.rounded,"p-button-text":i.text,"p-button-outlined":i.outlined,"p-button-sm":i.size==="small","p-button-lg":i.size==="large","p-button-plain":i.plain,"p-button-fluid":i.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos}`]:e.label}],label:"p-button-label"},Zi=(()=>{class e extends D{name="button";theme=Or;classes=xr;static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var Ir=["content"],Rr=["loading"],Ar=["icon"],Nr=["*"],eo=e=>({class:e});function Dr(e,i){e&1&&Hn(0)}function Pr(e,i){if(e&1&&le(0,"span",8),e&2){let t=K(3);L("ngClass",t.iconClass()),ee("aria-hidden",!0)("data-pc-section","loadingicon")}}function kr(e,i){if(e&1&&le(0,"SpinnerIcon",9),e&2){let t=K(3);L("styleClass",t.spinnerIconClass())("spin",!0),ee("aria-hidden",!0)("data-pc-section","loadingicon")}}function $r(e,i){if(e&1&&(wt(0),me(1,Pr,1,3,"span",6)(2,kr,1,4,"SpinnerIcon",7),Ct()),e&2){let t=K(2);A(),L("ngIf",t.loadingIcon),A(),L("ngIf",!t.loadingIcon)}}function Mr(e,i){}function Fr(e,i){if(e&1&&me(0,Mr,0,0,"ng-template",10),e&2){let t=K(2);L("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function Br(e,i){if(e&1&&(wt(0),me(1,$r,3,2,"ng-container",2)(2,Fr,1,1,null,5),Ct()),e&2){let t=K();A(),L("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),A(),L("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",qt(3,eo,t.iconClass()))}}function Ur(e,i){if(e&1&&le(0,"span",8),e&2){let t=K(2);Le(t.icon),L("ngClass",t.iconClass()),ee("data-pc-section","icon")}}function jr(e,i){}function Wr(e,i){if(e&1&&me(0,jr,0,0,"ng-template",10),e&2){let t=K(2);L("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function Vr(e,i){if(e&1&&(wt(0),me(1,Ur,1,4,"span",11)(2,Wr,1,1,null,5),Ct()),e&2){let t=K();A(),L("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),A(),L("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",qt(3,eo,t.iconClass()))}}function Hr(e,i){if(e&1&&(Oe(0,"span",12),_t(1),xe()),e&2){let t=K();ee("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),A(),Lt(t.label)}}function zr(e,i){if(e&1&&le(0,"p-badge",13),e&2){let t=K();L("value",t.badge)("severity",t.badgeSeverity)}}var Kr=(()=>{class e extends Z{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new re;onFocus=new re;onBlur=new re;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([n,o])=>this[`_${n}`]!==o&&(this[`_${n}`]=o))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return W(this.fluid)?!!n:this.fluid}_componentStyle=b(Zi);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this.contentTemplate=t.template;break;case"icon":this.iconTemplate=t.template;break;case"loadingicon":this.loadingIconTemplate=t.template;break;default:this.contentTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:n}=t;if(n){let o=n.currentValue;for(let r in o)this[r]=o[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[n])=>t+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let t;return function(o){return(t||(t=_(e)))(o||e)}})();static \u0275cmp=H({type:e,selectors:[["p-button"]],contentQueries:function(n,o,r){if(n&1&&(Ke(r,Ir,5),Ke(r,Rr,5),Ke(r,Ar,5),Ke(r,$i,4)),n&2){let s;Ge(s=qe())&&(o.contentTemplate=s.first),Ge(s=qe())&&(o.loadingIconTemplate=s.first),Ge(s=qe())&&(o.iconTemplate=s.first),Ge(s=qe())&&(o.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",I],loading:[2,"loading","loading",I],loadingIcon:"loadingIcon",raised:[2,"raised","raised",I],rounded:[2,"rounded","rounded",I],text:[2,"text","text",I],plain:[2,"plain","plain",I],severity:"severity",outlined:[2,"outlined","outlined",I],link:[2,"link","link",I],tabindex:[2,"tabindex","tabindex",Kn],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",I],fluid:[2,"fluid","fluid",I],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[X([Zi]),_e,B,Ve],ngContentSelectors:Nr,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(n,o){n&1&&(ye(),Oe(0,"button",0),zn("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),ve(1),me(2,Dr,1,0,"ng-container",1)(3,Br,3,5,"ng-container",2)(4,Vr,3,5,"ng-container",2)(5,Hr,2,3,"span",3)(6,zr,1,2,"p-badge",4),xe()),n&2&&(L("ngStyle",o.style)("disabled",o.disabled||o.loading)("ngClass",o.buttonClass)("pAutoFocus",o.autofocus),ee("type",o.type)("aria-label",o.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",o.tabindex),A(2),L("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),A(),L("ngIf",o.loading),A(),L("ngIf",!o.loading),A(),L("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),A(),L("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[Se,Jn,Yn,Qn,Xn,Qi,Ki,Yi,qi,Cn,fe],encapsulation:2,changeDetection:0})}return e})(),Nc=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=F({type:e});static \u0275inj=M({imports:[Se,Kr,fe,fe]})}return e})();export{Oo as a,ds as b,ps as c,Ie as d,un as e,Cs as f,_s as g,Si as h,st as i,Is as j,Ee as k,Rs as l,Ti as m,Go as n,qo as o,As as p,Ns as q,wi as r,Ds as s,Ps as t,ks as u,$s as v,Jo as w,Yo as x,Ms as y,Fs as z,Ci as A,Bs as B,fn as C,Us as D,js as E,Li as F,gn as G,Ws as H,Vs as I,bn as J,Hs as K,zs as L,Ks as M,Gs as N,qs as O,xi as P,W as Q,nr as R,v as S,kt as T,yn as U,Qs as V,Zs as W,ea as X,j as Y,ta as Z,na as _,lt as $,R as aa,ya as ba,va as ca,Sa as da,Ea as ea,Ta as fa,wa as ga,$i as ha,fe as ia,Ca as ja,Oa as ka,D as la,Tn as ma,il as na,Z as oa,wn as pa,zi as qa,Ki as ra,Cn as sa,qi as ta,Ji as ua,Yi as va,Qi as wa,sc as xa,Kr as ya,Nc as za};
