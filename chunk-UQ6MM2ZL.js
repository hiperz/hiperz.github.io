import{$ as hn,$a as ni,A as P,Aa as mn,Ac as vi,B as Le,Ba as Wr,Bc as It,C as Fr,Ca as ue,Cc as yi,D as ln,Dc as bi,Ea as vn,Ec as F,Fa as yn,Fc as wi,G as Y,Ga as qr,Gb as li,Gc as $e,H as ve,Ha as Gr,Hc as ki,I as ee,Ia as Ue,Ic as Si,J as dn,Ja as Se,Jc as We,K as ye,Ka as Te,Kc as Et,L as be,La as Jr,Lb as di,M as te,Ma as Hr,N as un,Na as Yr,O as Or,Oa as Xr,P as Pr,Pa as Kr,Pb as ui,Qa as Zr,R as Nr,Ra as Qr,Rb as hi,S as N,Sa as he,Sb as pi,Sc as Ti,T as Lr,U as E,Uc as Tn,V as M,Va as ei,Vc as Ri,Wc as xt,X as w,Xa as B,Y as wt,Ya as ti,Z as jr,Za as _e,_ as C,a as h,aa as y,ab as bn,b as I,ba as p,bb as ri,ca as we,d as Ir,db as ii,ea as Ur,eb as wn,fa as de,fb as si,g as sn,ga as U,gb as Tt,h as Er,hb as Rt,ia as kt,j as xr,k as on,l as an,lb as oi,m as cn,ma as pn,n as Z,na as _r,nb as kn,oa as je,ob as ai,p as O,pb as Sn,pc as Ct,r as Q,ra as St,rb as Be,rc as Mt,s as D,sa as ke,sb as Ve,sc as fi,t as f,ta as G,tb as ci,tc as gi,u as Ne,ua as fn,uc as mi,v as zr,va as Br,vc as At,w as Dr,wa as gn,xa as Vr,y as S,z as bt,za as $r}from"./chunk-TBPIXPHB.js";var Je=class{},He=class{},J=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let r=e.indexOf(":");if(r>0){let i=e.slice(0,r),s=e.slice(r+1).trim();this.addHeaderEntry(i,s)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,r)=>{this.addHeaderEntry(r,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,r])=>{this.setHeaderEntries(e,r)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let r=n.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(n.name,e);let i=(n.op==="a"?this.headers.get(e):void 0)||[];i.push(...r),this.headers.set(e,i);break;case"d":let s=n.value;if(!s)this.headers.delete(e),this.normalizedNames.delete(e);else{let o=this.headers.get(e);if(!o)return;o=o.filter(c=>s.indexOf(c)===-1),o.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,o)}break}}addHeaderEntry(n,e){let r=n.toLowerCase();this.maybeSetNormalizedName(n,r),this.headers.has(r)?this.headers.get(r).push(e):this.headers.set(r,[e])}setHeaderEntries(n,e){let r=(Array.isArray(e)?e:[e]).map(s=>s.toString()),i=n.toLowerCase();this.headers.set(i,r),this.maybeSetNormalizedName(n,i)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var Mn=class{encodeKey(n){return Ci(n)}encodeValue(n){return Ci(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function Zs(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(i=>{let s=i.indexOf("="),[o,c]=s==-1?[n.decodeKey(i),""]:[n.decodeKey(i.slice(0,s)),n.decodeValue(i.slice(s+1))],a=e.get(o)||[];a.push(c),e.set(o,a)}),e}var Qs=/%(\d[a-f0-9])/gi,eo={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Ci(t){return encodeURIComponent(t).replace(Qs,(n,e)=>eo[e]??n)}function zt(t){return`${t}`}var re=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Mn,n.fromString){if(n.fromObject)throw new M(2805,!1);this.map=Zs(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let r=n.fromObject[e],i=Array.isArray(r)?r.map(zt):[zt(r)];this.map.set(e,i)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(r=>{let i=n[r];Array.isArray(i)?i.forEach(s=>{e.push({param:r,value:s,op:"a"})}):e.push({param:r,value:i,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(r=>e+"="+this.encoder.encodeValue(r)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(zt(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let r=this.map.get(n.param)||[],i=r.indexOf(zt(n.value));i!==-1&&r.splice(i,1),r.length>0?this.map.set(n.param,r):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};var An=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}};function to(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Mi(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Ai(t){return typeof Blob<"u"&&t instanceof Blob}function Ii(t){return typeof FormData<"u"&&t instanceof FormData}function no(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var qe="Content-Type",zn="X-Request-URL",Fi="text/plain",Oi="application/json",Pi=`${Oi}, ${Fi}, */*`,Ge=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(n,e,r,i){this.url=e,this.method=n.toUpperCase();let s;if(to(this.method)||i?(this.body=r!==void 0?r:null,s=i):s=r,s&&(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params),this.transferCache=s.transferCache),this.headers??=new J,this.context??=new An,!this.params)this.params=new re,this.urlWithParams=e;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=e;else{let c=e.indexOf("?"),a=c===-1?"?":c<e.length-1?"&":"";this.urlWithParams=e+a+o}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Mi(this.body)||Ai(this.body)||Ii(this.body)||no(this.body)?this.body:this.body instanceof re?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Ii(this.body)?null:Ai(this.body)?this.body.type||null:Mi(this.body)?null:typeof this.body=="string"?Fi:this.body instanceof re?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Oi:null}clone(n={}){let e=n.method||this.method,r=n.url||this.url,i=n.responseType||this.responseType,s=n.transferCache??this.transferCache,o=n.body!==void 0?n.body:this.body,c=n.withCredentials??this.withCredentials,a=n.reportProgress??this.reportProgress,l=n.headers||this.headers,d=n.params||this.params,u=n.context??this.context;return n.setHeaders!==void 0&&(l=Object.keys(n.setHeaders).reduce((v,g)=>v.set(g,n.setHeaders[g]),l)),n.setParams&&(d=Object.keys(n.setParams).reduce((v,g)=>v.set(g,n.setParams[g]),d)),new t(e,r,o,{params:d,headers:l,context:u,reportProgress:a,responseType:i,withCredentials:c,transferCache:s})}},ie=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}(ie||{}),Ye=class{headers;status;statusText;url;ok;type;constructor(n,e=200,r="OK"){this.headers=n.headers||new J,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||r,this.url=n.url||null,this.ok=this.status>=200&&this.status<300}},Ft=class t extends Ye{constructor(n={}){super(n)}type=ie.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},pe=class t extends Ye{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=ie.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},ne=class extends Ye{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},Ni=200,ro=204;function Rn(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,transferCache:t.transferCache}}var io=(()=>{class t{handler;constructor(e){this.handler=e}request(e,r,i={}){let s;if(e instanceof Ge)s=e;else{let a;i.headers instanceof J?a=i.headers:a=new J(i.headers);let l;i.params&&(i.params instanceof re?l=i.params:l=new re({fromObject:i.params})),s=new Ge(e,r,i.body!==void 0?i.body:null,{headers:a,context:i.context,params:l,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache})}let o=f(s).pipe(ee(a=>this.handler.handle(a)));if(e instanceof Ge||i.observe==="events")return o;let c=o.pipe(Y(a=>a instanceof pe));switch(i.observe||"body"){case"body":switch(s.responseType){case"arraybuffer":return c.pipe(S(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return c.pipe(S(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return c.pipe(S(a=>{if(a.body!==null&&typeof a.body!="string")throw new Error("Response is not a string.");return a.body}));case"json":default:return c.pipe(S(a=>a.body))}case"response":return c;default:throw new Error(`Unreachable: unhandled observe type ${i.observe}}`)}}delete(e,r={}){return this.request("DELETE",e,r)}get(e,r={}){return this.request("GET",e,r)}head(e,r={}){return this.request("HEAD",e,r)}jsonp(e,r){return this.request("JSONP",e,{params:new re().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,r={}){return this.request("OPTIONS",e,r)}patch(e,r,i={}){return this.request("PATCH",e,Rn(i,r))}post(e,r,i={}){return this.request("POST",e,Rn(i,r))}put(e,r,i={}){return this.request("PUT",e,Rn(i,r))}static \u0275fac=function(r){return new(r||t)(y(Je))};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})(),so=/^\)\]\}',?\n/;function Ei(t){if(t.url)return t.url;let n=zn.toLocaleLowerCase();return t.headers.get(n)}var Li=new C(""),Cn=(()=>{class t{fetchImpl=p(In,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=p(G);handle(e){return new on(r=>{let i=new AbortController;return this.doRequest(e,i.signal,r).then(En,s=>r.error(new ne({error:s}))),()=>i.abort()})}doRequest(e,r,i){return sn(this,null,function*(){let s=this.createRequestInit(e),o;try{let g=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,h({signal:r},s)));oo(g),i.next({type:ie.Sent}),o=yield g}catch(g){i.error(new ne({error:g,status:g.status??0,statusText:g.statusText,url:e.urlWithParams,headers:g.headers}));return}let c=new J(o.headers),a=o.statusText,l=Ei(o)??e.urlWithParams,d=o.status,u=null;if(e.reportProgress&&i.next(new Ft({headers:c,status:d,statusText:a,url:l})),o.body){let g=o.headers.get("content-length"),A=[],k=o.body.getReader(),b=0,z,q,R=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>sn(this,null,function*(){for(;;){let{done:le,value:Pe}=yield k.read();if(le)break;if(A.push(Pe),b+=Pe.length,e.reportProgress){q=e.responseType==="text"?(q??"")+(z??=new TextDecoder).decode(Pe,{stream:!0}):void 0;let Ar=()=>i.next({type:ie.DownloadProgress,total:g?+g:void 0,loaded:b,partialText:q});R?R.run(Ar):Ar()}}}));let ce=this.concatChunks(A,b);try{let le=o.headers.get(qe)??"";u=this.parseBody(e,ce,le)}catch(le){i.error(new ne({error:le,headers:new J(o.headers),status:o.status,statusText:o.statusText,url:Ei(o)??e.urlWithParams}));return}}d===0&&(d=u?Ni:0),d>=200&&d<300?(i.next(new pe({body:u,headers:c,status:d,statusText:a,url:l})),i.complete()):i.error(new ne({error:u,headers:c,status:d,statusText:a,url:l}))})}parseBody(e,r,i){switch(e.responseType){case"json":let s=new TextDecoder().decode(r).replace(so,"");return s===""?null:JSON.parse(s);case"text":return new TextDecoder().decode(r);case"blob":return new Blob([r],{type:i});case"arraybuffer":return r.buffer}}createRequestInit(e){let r={},i=e.withCredentials?"include":void 0;if(e.headers.forEach((s,o)=>r[s]=o.join(",")),e.headers.has("Accept")||(r.Accept=Pi),!e.headers.has(qe)){let s=e.detectContentTypeHeader();s!==null&&(r[qe]=s)}return{body:e.serializeBody(),method:e.method,headers:r,credentials:i}}concatChunks(e,r){let i=new Uint8Array(r),s=0;for(let o of e)i.set(o,s),s+=o.length;return i}static \u0275fac=function(r){return new(r||t)};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})(),In=class{};function En(){}function oo(t){t.then(En,En)}function ao(t,n){return n(t)}function co(t,n,e){return(r,i)=>U(e,()=>n(r,s=>t(s,i)))}var ji=new C(""),Ui=new C(""),lo=new C("",{providedIn:"root",factory:()=>!0});var xi=(()=>{class t extends Je{backend;injector;chain=null;pendingTasks=p(St);contributeToStability=p(lo);constructor(e,r){super(),this.backend=e,this.injector=r}handle(e){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(ji),...this.injector.get(Ui,[])]));this.chain=r.reduceRight((i,s)=>co(i,s,this.injector),ao)}if(this.contributeToStability){let r=this.pendingTasks.add();return this.chain(e,i=>this.backend.handle(i)).pipe(be(()=>this.pendingTasks.remove(r)))}else return this.chain(e,r=>this.backend.handle(r))}static \u0275fac=function(r){return new(r||t)(y(He),y(de))};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})();var uo=/^\)\]\}',?\n/,ho=RegExp(`^${zn}:`,"m");function po(t){return"responseURL"in t&&t.responseURL?t.responseURL:ho.test(t.getAllResponseHeaders())?t.getResponseHeader(zn):null}var zi=(()=>{class t{xhrFactory;constructor(e){this.xhrFactory=e}handle(e){if(e.method==="JSONP")throw new M(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?D(r.\u0275loadImpl()):f(null)).pipe(N(()=>new on(s=>{let o=r.build();if(o.open(e.method,e.urlWithParams),e.withCredentials&&(o.withCredentials=!0),e.headers.forEach((k,b)=>o.setRequestHeader(k,b.join(","))),e.headers.has("Accept")||o.setRequestHeader("Accept",Pi),!e.headers.has(qe)){let k=e.detectContentTypeHeader();k!==null&&o.setRequestHeader(qe,k)}if(e.responseType){let k=e.responseType.toLowerCase();o.responseType=k!=="json"?k:"text"}let c=e.serializeBody(),a=null,l=()=>{if(a!==null)return a;let k=o.statusText||"OK",b=new J(o.getAllResponseHeaders()),z=po(o)||e.url;return a=new Ft({headers:b,status:o.status,statusText:k,url:z}),a},d=()=>{let{headers:k,status:b,statusText:z,url:q}=l(),R=null;b!==ro&&(R=typeof o.response>"u"?o.responseText:o.response),b===0&&(b=R?Ni:0);let ce=b>=200&&b<300;if(e.responseType==="json"&&typeof R=="string"){let le=R;R=R.replace(uo,"");try{R=R!==""?JSON.parse(R):null}catch(Pe){R=le,ce&&(ce=!1,R={error:Pe,text:R})}}ce?(s.next(new pe({body:R,headers:k,status:b,statusText:z,url:q||void 0})),s.complete()):s.error(new ne({error:R,headers:k,status:b,statusText:z,url:q||void 0}))},u=k=>{let{url:b}=l(),z=new ne({error:k,status:o.status||0,statusText:o.statusText||"Unknown Error",url:b||void 0});s.error(z)},v=!1,g=k=>{v||(s.next(l()),v=!0);let b={type:ie.DownloadProgress,loaded:k.loaded};k.lengthComputable&&(b.total=k.total),e.responseType==="text"&&o.responseText&&(b.partialText=o.responseText),s.next(b)},A=k=>{let b={type:ie.UploadProgress,loaded:k.loaded};k.lengthComputable&&(b.total=k.total),s.next(b)};return o.addEventListener("load",d),o.addEventListener("error",u),o.addEventListener("timeout",u),o.addEventListener("abort",u),e.reportProgress&&(o.addEventListener("progress",g),c!==null&&o.upload&&o.upload.addEventListener("progress",A)),o.send(c),s.next({type:ie.Sent}),()=>{o.removeEventListener("error",u),o.removeEventListener("abort",u),o.removeEventListener("load",d),o.removeEventListener("timeout",u),e.reportProgress&&(o.removeEventListener("progress",g),c!==null&&o.upload&&o.upload.removeEventListener("progress",A)),o.readyState!==o.DONE&&o.abort()}})))}static \u0275fac=function(r){return new(r||t)(y(xt))};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})(),_i=new C(""),fo="XSRF-TOKEN",go=new C("",{providedIn:"root",factory:()=>fo}),mo="X-XSRF-TOKEN",vo=new C("",{providedIn:"root",factory:()=>mo}),Ot=class{},yo=(()=>{class t{doc;platform;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(e,r,i){this.doc=e,this.platform=r,this.cookieName=i}getToken(){if(this.platform==="server")return null;let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Et(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(r){return new(r||t)(y(F),y(ue),y(go))};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})();function bo(t,n){let e=t.url.toLowerCase();if(!p(_i)||t.method==="GET"||t.method==="HEAD"||e.startsWith("http://")||e.startsWith("https://"))return n(t);let r=p(Ot).getToken(),i=p(vo);return r!=null&&!t.headers.has(i)&&(t=t.clone({headers:t.headers.set(i,r)})),n(t)}var Bi=function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t}(Bi||{});function wo(t,n){return{\u0275kind:t,\u0275providers:n}}function gl(...t){let n=[io,zi,xi,{provide:Je,useExisting:xi},{provide:He,useFactory:()=>p(Li,{optional:!0})??p(zi)},{provide:ji,useValue:bo,multi:!0},{provide:_i,useValue:!0},{provide:Ot,useClass:yo}];for(let e of t)n.push(...e.\u0275providers);return we(n)}function ml(){return wo(Bi.Fetch,[Cn,{provide:Li,useExisting:Cn},{provide:He,useExisting:Cn}])}var ko=new C(""),So="b",To="h",Ro="s",Co="st",Mo="u",Ao="rt",Dt=new C(""),Io=["GET","HEAD"];function Eo(t,n){let v=p(Dt),{isCacheActive:e}=v,r=Ir(v,["isCacheActive"]),{transferCache:i,method:s}=t;if(!e||i===!1||s==="POST"&&!r.includePostRequests&&!i||s!=="POST"&&!Io.includes(s)||!r.includeRequestsWithAuthHeaders&&xo(t)||r.filter?.(t)===!1)return n(t);let o=p(yn);if(p(ko,{optional:!0}))throw new M(2803,!1);let a=t.url,l=zo(t,a),d=o.get(l,null),u=r.includeHeaders;if(typeof i=="object"&&i.includeHeaders&&(u=i.includeHeaders),d){let{[So]:g,[Ao]:A,[To]:k,[Ro]:b,[Co]:z,[Mo]:q}=d,R=g;switch(A){case"arraybuffer":R=new TextEncoder().encode(g).buffer;break;case"blob":R=new Blob([g]);break}let ce=new J(k);return f(new pe({body:R,headers:ce,status:b,statusText:z,url:q}))}return n(t).pipe(E(g=>{g instanceof pe}))}function xo(t){return t.headers.has("authorization")||t.headers.has("proxy-authorization")}function Di(t){return[...t.keys()].sort().map(n=>`${n}=${t.getAll(n)}`).join("&")}function zo(t,n){let{params:e,method:r,responseType:i}=t,s=Di(e),o=t.serializeBody();o instanceof URLSearchParams?o=Di(o):typeof o!="string"&&(o="");let c=[r,i,n,o,s].join("|"),a=Do(c);return a}function Do(t){let n=0;for(let e of t)n=Math.imul(31,n)+e.charCodeAt(0)<<0;return n+=2147483648,n.toString()}function Vi(t){return[{provide:Dt,useFactory:()=>(Vr("NgHttpTransferCache"),h({isCacheActive:!0},t))},{provide:Ui,useValue:Eo,multi:!0,deps:[yn,Dt]},{provide:Be,multi:!0,useFactory:()=>{let n=p(Ve),e=p(Dt);return()=>{n.whenStable().then(()=>{e.isCacheActive=!1})}}}]}var Fn=class extends bi{supportsDOMEvents=!0},On=class t extends Fn{static makeCurrent(){yi(new t)}onAndCancel(n,e,r,i){return n.addEventListener(e,r,i),()=>{n.removeEventListener(e,r,i)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=Po();return e==null?null:No(e)}resetBaseElement(){Xe=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Et(document.cookie,n)}},Xe=null;function Po(){return Xe=Xe||document.querySelector("base"),Xe?Xe.getAttribute("href"):null}function No(t){return new URL(t,document.baseURI).pathname}var Lo=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(r){return new(r||t)};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})(),Pn=new C(""),Hi=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,r){this._zone=r,e.forEach(i=>{i.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,r,i,s){return this._findPluginFor(r).addEventListener(e,r,i,s)}getZone(){return this._zone}_findPluginFor(e){let r=this._eventNameToPlugin.get(e);if(r)return r;if(r=this._plugins.find(s=>s.supports(e)),!r)throw new M(5101,!1);return this._eventNameToPlugin.set(e,r),r}static \u0275fac=function(r){return new(r||t)(y(Pn),y(G))};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})(),Nt=class{_doc;constructor(n){this._doc=n}manager},Pt="ng-app-id";function $i(t){for(let n of t)n.remove()}function Wi(t,n){let e=n.createElement("style");return e.textContent=t,e}function jo(t,n,e,r){let i=t.head?.querySelectorAll(`style[${Pt}="${n}"],link[${Pt}="${n}"]`);if(i)for(let s of i)s.removeAttribute(Pt),s instanceof HTMLLinkElement?r.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&e.set(s.textContent,{usage:0,elements:[s]})}function Nn(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Yi=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(e,r,i,s={}){this.doc=e,this.appId=r,this.nonce=i,this.isServer=Tn(s),jo(e,r,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,r){for(let i of e)this.addUsage(i,this.inline,Wi);r?.forEach(i=>this.addUsage(i,this.external,Nn))}removeStyles(e,r){for(let i of e)this.removeUsage(i,this.inline);r?.forEach(i=>this.removeUsage(i,this.external))}addUsage(e,r,i){let s=r.get(e);s?s.usage++:r.set(e,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,i(e,this.doc)))})}removeUsage(e,r){let i=r.get(e);i&&(i.usage--,i.usage<=0&&($i(i.elements),r.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])$i(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[r,{elements:i}]of this.inline)i.push(this.addElement(e,Wi(r,this.doc)));for(let[r,{elements:i}]of this.external)i.push(this.addElement(e,Nn(r,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,r){return this.nonce&&r.setAttribute("nonce",this.nonce),this.isServer&&r.setAttribute(Pt,this.appId),e.appendChild(r)}static \u0275fac=function(r){return new(r||t)(y(F),y(mn),y(vn,8),y(ue))};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})(),Dn={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},jn=/%COMP%/g,Xi="%COMP%",Uo=`_nghost-${Xi}`,_o=`_ngcontent-${Xi}`,Bo=!0,Vo=new C("",{providedIn:"root",factory:()=>Bo});function $o(t){return _o.replace(jn,t)}function Wo(t){return Uo.replace(jn,t)}function Ki(t,n){return n.map(e=>e.replace(jn,t))}var qi=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(e,r,i,s,o,c,a,l=null,d=null){this.eventManager=e,this.sharedStylesHost=r,this.appId=i,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=c,this.ngZone=a,this.nonce=l,this.tracingService=d,this.platformIsServer=Tn(c),this.defaultRenderer=new Ke(e,o,a,this.platformIsServer,this.tracingService)}createRenderer(e,r){if(!e||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===Ue.ShadowDom&&(r=I(h({},r),{encapsulation:Ue.Emulated}));let i=this.getOrCreateRenderer(e,r);return i instanceof Lt?i.applyToHost(e):i instanceof Ze&&i.applyStyles(),i}getOrCreateRenderer(e,r){let i=this.rendererByCompId,s=i.get(r.id);if(!s){let o=this.doc,c=this.ngZone,a=this.eventManager,l=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,u=this.platformIsServer;switch(r.encapsulation){case Ue.Emulated:s=new Lt(a,l,r,this.appId,d,o,c,u,this.tracingService);break;case Ue.ShadowDom:return new Ln(a,l,e,r,o,c,this.nonce,u,this.tracingService);default:s=new Ze(a,l,r,d,o,c,u,this.tracingService);break}i.set(r.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(r){return new(r||t)(y(Hi),y(Yi),y(mn),y(Vo),y(F),y(ue),y(G),y(vn),y(qr,8))};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})(),Ke=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,r,i,s){this.eventManager=n,this.doc=e,this.ngZone=r,this.platformIsServer=i,this.tracingService=s}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(Dn[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(Gi(n)?n.content:n).appendChild(e)}insertBefore(n,e,r){n&&(Gi(n)?n.content:n).insertBefore(e,r)}removeChild(n,e){e.remove()}selectRootElement(n,e){let r=typeof n=="string"?this.doc.querySelector(n):n;if(!r)throw new M(-5104,!1);return e||(r.textContent=""),r}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,r,i){if(i){e=i+":"+e;let s=Dn[i];s?n.setAttributeNS(s,e,r):n.setAttribute(e,r)}else n.setAttribute(e,r)}removeAttribute(n,e,r){if(r){let i=Dn[r];i?n.removeAttributeNS(i,e):n.removeAttribute(`${r}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,r,i){i&(_e.DashCase|_e.Important)?n.style.setProperty(e,r,i&_e.Important?"important":""):n.style[e]=r}removeStyle(n,e,r){r&_e.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,r){n!=null&&(n[e]=r)}setValue(n,e){n.nodeValue=e}listen(n,e,r,i){if(typeof n=="string"&&(n=It().getGlobalEventTarget(this.doc,n),!n))throw new Error(`Unsupported event target ${n} for event ${e}`);let s=this.decoratePreventDefault(r);return this.tracingService!==null&&this.tracingService.wrapEventListener&&(s=this.tracingService.wrapEventListener(n,e,s)),this.eventManager.addEventListener(n,e,s,i)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;(this.platformIsServer?this.ngZone.runGuarded(()=>n(e)):n(e))===!1&&e.preventDefault()}}};function Gi(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Ln=class extends Ke{sharedStylesHost;hostEl;shadowRoot;constructor(n,e,r,i,s,o,c,a,l){super(n,s,o,a,l),this.sharedStylesHost=e,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let d=Ki(i.id,i.styles);for(let v of d){let g=document.createElement("style");c&&g.setAttribute("nonce",c),g.textContent=v,this.shadowRoot.appendChild(g)}let u=i.getExternalStyles?.();if(u)for(let v of u){let g=Nn(v,s);c&&g.setAttribute("nonce",c),this.shadowRoot.appendChild(g)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,r){return super.insertBefore(this.nodeOrShadowRoot(n),e,r)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Ze=class extends Ke{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,r,i,s,o,c,a,l){super(n,s,o,c,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=i,this.styles=l?Ki(l,r.styles):r.styles,this.styleUrls=r.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Lt=class extends Ze{contentAttr;hostAttr;constructor(n,e,r,i,s,o,c,a,l){let d=i+"-"+r.id;super(n,e,r,s,o,c,a,l,d),this.contentAttr=$o(d),this.hostAttr=Wo(d)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let r=super.createElement(n,e);return super.setAttribute(r,this.contentAttr,""),r}},qo=(()=>{class t extends Nt{constructor(e){super(e)}supports(e){return!0}addEventListener(e,r,i,s){return e.addEventListener(r,i,s),()=>this.removeEventListener(e,r,i,s)}removeEventListener(e,r,i,s){return e.removeEventListener(r,i,s)}static \u0275fac=function(r){return new(r||t)(y(F))};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})(),Ji=["alt","control","meta","shift"],Go={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Jo={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},Ho=(()=>{class t extends Nt{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,r,i,s){let o=t.parseEventName(r),c=t.eventCallback(o.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>It().onAndCancel(e,o.domEventName,c,s))}static parseEventName(e){let r=e.toLowerCase().split("."),i=r.shift();if(r.length===0||!(i==="keydown"||i==="keyup"))return null;let s=t._normalizeKey(r.pop()),o="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),o="code."),Ji.forEach(l=>{let d=r.indexOf(l);d>-1&&(r.splice(d,1),o+=l+".")}),o+=s,r.length!=0||s.length===0)return null;let a={};return a.domEventName=i,a.fullKey=o,a}static matchEventFullKeyCode(e,r){let i=Go[e.key]||e.key,s="";return r.indexOf("code.")>-1&&(i=e.code,s="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),Ji.forEach(o=>{if(o!==i){let c=Jo[o];c(e)&&(s+=o+".")}}),s+=i,s===r)}static eventCallback(e,r,i){return s=>{t.matchEventFullKeyCode(s,e)&&i.runGuarded(()=>r(s))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(r){return new(r||t)(y(F))};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})();function _l(t,n){return fi(h({rootComponent:t},Yo(n)))}function Yo(t){return{appProviders:[...ea,...t?.providers??[]],platformProviders:Qo}}function Xo(){On.makeCurrent()}function Ko(){return new fn}function Zo(){return $r(document),document}var Qo=[{provide:ue,useValue:Ti},{provide:Wr,useValue:Xo,multi:!0},{provide:F,useFactory:Zo,deps:[]}];var ea=[{provide:Ur,useValue:"root"},{provide:fn,useFactory:Ko,deps:[]},{provide:Pn,useClass:qo,multi:!0,deps:[F,G,ue]},{provide:Pn,useClass:Ho,multi:!0,deps:[F]},qi,Yi,Hi,{provide:ni,useExisting:qi},{provide:xt,useClass:Lo,deps:[]},[]];var Bl=(()=>{class t{_doc;_dom;constructor(e){this._doc=e,this._dom=It()}addTag(e,r=!1){return e?this._getOrCreateElement(e,r):null}addTags(e,r=!1){return e?e.reduce((i,s)=>(s&&i.push(this._getOrCreateElement(s,r)),i),[]):[]}getTag(e){return e&&this._doc.querySelector(`meta[${e}]`)||null}getTags(e){if(!e)return[];let r=this._doc.querySelectorAll(`meta[${e}]`);return r?[].slice.call(r):[]}updateTag(e,r){if(!e)return null;r=r||this._parseSelector(e);let i=this.getTag(r);return i?this._setMetaElementAttributes(e,i):this._getOrCreateElement(e,!0)}removeTag(e){this.removeTagElement(this.getTag(e))}removeTagElement(e){e&&this._dom.remove(e)}_getOrCreateElement(e,r=!1){if(!r){let o=this._parseSelector(e),c=this.getTags(o).filter(a=>this._containsAttributes(e,a))[0];if(c!==void 0)return c}let i=this._dom.createElement("meta");return this._setMetaElementAttributes(e,i),this._doc.getElementsByTagName("head")[0].appendChild(i),i}_setMetaElementAttributes(e,r){return Object.keys(e).forEach(i=>r.setAttribute(this._getMetaKeyMap(i),e[i])),r}_parseSelector(e){let r=e.name?"name":"property";return`${r}="${e[r]}"`}_containsAttributes(e,r){return Object.keys(e).every(i=>r.getAttribute(this._getMetaKeyMap(i))===e[i])}_getMetaKeyMap(e){return ta[e]||e}static \u0275fac=function(r){return new(r||t)(y(F))};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ta={httpEquiv:"http-equiv"},Zi=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(r){return new(r||t)(y(F))};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var na=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=w({token:t,factory:function(r){let i=null;return r?i=new(r||t):i=y(ra),i},providedIn:"root"})}return t})(),ra=(()=>{class t extends na{_doc;constructor(e){super(),this._doc=e}sanitize(e,r){if(r==null)return null;switch(e){case he.NONE:return r;case he.HTML:return Te(r,"HTML")?Se(r):Qr(this._doc,String(r)).toString();case he.STYLE:return Te(r,"Style")?Se(r):r;case he.SCRIPT:if(Te(r,"Script"))return Se(r);throw new M(5200,!1);case he.URL:return Te(r,"URL")?Se(r):Zr(String(r));case he.RESOURCE_URL:if(Te(r,"ResourceURL"))return Se(r);throw new M(5201,!1);default:throw new M(5202,!1)}}bypassSecurityTrustHtml(e){return Jr(e)}bypassSecurityTrustStyle(e){return Hr(e)}bypassSecurityTrustScript(e){return Yr(e)}bypassSecurityTrustUrl(e){return Xr(e)}bypassSecurityTrustResourceUrl(e){return Kr(e)}static \u0275fac=function(r){return new(r||t)(y(F))};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),jt=function(t){return t[t.NoHttpTransferCache=0]="NoHttpTransferCache",t[t.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",t[t.I18nSupport=2]="I18nSupport",t[t.EventReplay=3]="EventReplay",t[t.IncrementalHydration=4]="IncrementalHydration",t}(jt||{});function ia(t,n=[],e={}){return{\u0275kind:t,\u0275providers:n}}function Vl(){return ia(jt.EventReplay,gi())}function $l(...t){let n=[],e=new Set,r=e.has(jt.HttpTransferCacheOptions);for(let{\u0275providers:i,\u0275kind:s}of t)e.add(s),i.length&&n.push(i);return we([[],mi(),e.has(jt.NoHttpTransferCache)||r?[]:Vi({}),n])}var m="primary",ht=Symbol("RouteTitle"),$n=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Ee(t){return new $n(t)}function oa(t,n,e){let r=e.path.split("/");if(r.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||r.length<t.length))return null;let i={};for(let s=0;s<r.length;s++){let o=r[s],c=t[s];if(o[0]===":")i[o.substring(1)]=c;else if(o!==c.path)return null}return{consumed:t.slice(0,r.length),posParams:i}}function aa(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!H(t[e],n[e]))return!1;return!0}function H(t,n){let e=t?Wn(t):void 0,r=n?Wn(n):void 0;if(!e||!r||e.length!=r.length)return!1;let i;for(let s=0;s<e.length;s++)if(i=e[s],!ls(t[i],n[i]))return!1;return!0}function Wn(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function ls(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),r=[...n].sort();return e.every((i,s)=>r[s]===i)}else return t===n}function ds(t){return t.length>0?t[t.length-1]:null}function ae(t){return zr(t)?t:ai(t)?D(Promise.resolve(t)):f(t)}var ca={exact:hs,subset:ps},us={exact:la,subset:da,ignored:()=>!0};function Qi(t,n,e){return ca[e.paths](t.root,n.root,e.matrixParams)&&us[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function la(t,n){return H(t,n)}function hs(t,n,e){if(!ge(t.segments,n.segments)||!Bt(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let r in n.children)if(!t.children[r]||!hs(t.children[r],n.children[r],e))return!1;return!0}function da(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>ls(t[e],n[e]))}function ps(t,n,e){return fs(t,n,n.segments,e)}function fs(t,n,e,r){if(t.segments.length>e.length){let i=t.segments.slice(0,e.length);return!(!ge(i,e)||n.hasChildren()||!Bt(i,e,r))}else if(t.segments.length===e.length){if(!ge(t.segments,e)||!Bt(t.segments,e,r))return!1;for(let i in n.children)if(!t.children[i]||!ps(t.children[i],n.children[i],r))return!1;return!0}else{let i=e.slice(0,t.segments.length),s=e.slice(t.segments.length);return!ge(t.segments,i)||!Bt(t.segments,i,r)||!t.children[m]?!1:fs(t.children[m],n,s,r)}}function Bt(t,n,e){return n.every((r,i)=>us[e](t[i].parameters,r.parameters))}var K=class{root;queryParams;fragment;_queryParamMap;constructor(n=new T([],{}),e={},r=null){this.root=n,this.queryParams=e,this.fragment=r}get queryParamMap(){return this._queryParamMap??=Ee(this.queryParams),this._queryParamMap}toString(){return pa.serialize(this)}},T=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Vt(this)}},fe=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=Ee(this.parameters),this._parameterMap}toString(){return ms(this)}};function ua(t,n){return ge(t,n)&&t.every((e,r)=>H(e.parameters,n[r].parameters))}function ge(t,n){return t.length!==n.length?!1:t.every((e,r)=>e.path===n[r].path)}function ha(t,n){let e=[];return Object.entries(t.children).forEach(([r,i])=>{r===m&&(e=e.concat(n(i,r)))}),Object.entries(t.children).forEach(([r,i])=>{r!==m&&(e=e.concat(n(i,r)))}),e}var pt=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=w({token:t,factory:()=>new xe,providedIn:"root"})}return t})(),xe=class{parse(n){let e=new Gn(n);return new K(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${Qe(n.root,!0)}`,r=ma(n.queryParams),i=typeof n.fragment=="string"?`#${fa(n.fragment)}`:"";return`${e}${r}${i}`}},pa=new xe;function Vt(t){return t.segments.map(n=>ms(n)).join("/")}function Qe(t,n){if(!t.hasChildren())return Vt(t);if(n){let e=t.children[m]?Qe(t.children[m],!1):"",r=[];return Object.entries(t.children).forEach(([i,s])=>{i!==m&&r.push(`${i}:${Qe(s,!1)}`)}),r.length>0?`${e}(${r.join("//")})`:e}else{let e=ha(t,(r,i)=>i===m?[Qe(t.children[m],!1)]:[`${i}:${Qe(r,!1)}`]);return Object.keys(t.children).length===1&&t.children[m]!=null?`${Vt(t)}/${e[0]}`:`${Vt(t)}/(${e.join("//")})`}}function gs(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Ut(t){return gs(t).replace(/%3B/gi,";")}function fa(t){return encodeURI(t)}function qn(t){return gs(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function $t(t){return decodeURIComponent(t)}function es(t){return $t(t.replace(/\+/g,"%20"))}function ms(t){return`${qn(t.path)}${ga(t.parameters)}`}function ga(t){return Object.entries(t).map(([n,e])=>`;${qn(n)}=${qn(e)}`).join("")}function ma(t){let n=Object.entries(t).map(([e,r])=>Array.isArray(r)?r.map(i=>`${Ut(e)}=${Ut(i)}`).join("&"):`${Ut(e)}=${Ut(r)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var va=/^[^\/()?;#]+/;function Un(t){let n=t.match(va);return n?n[0]:""}var ya=/^[^\/()?;=#]+/;function ba(t){let n=t.match(ya);return n?n[0]:""}var wa=/^[^=?&#]+/;function ka(t){let n=t.match(wa);return n?n[0]:""}var Sa=/^[^&#]+/;function Ta(t){let n=t.match(Sa);return n?n[0]:""}var Gn=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new T([],{}):new T([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let n=[];for(this.peekStartsWith("(")||n.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),n.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1)),(n.length>0||Object.keys(e).length>0)&&(r[m]=new T(n,e)),r}parseSegment(){let n=Un(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new M(4009,!1);return this.capture(n),new fe($t(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=ba(this.remaining);if(!e)return;this.capture(e);let r="";if(this.consumeOptional("=")){let i=Un(this.remaining);i&&(r=i,this.capture(r))}n[$t(e)]=$t(r)}parseQueryParam(n){let e=ka(this.remaining);if(!e)return;this.capture(e);let r="";if(this.consumeOptional("=")){let o=Ta(this.remaining);o&&(r=o,this.capture(r))}let i=es(e),s=es(r);if(n.hasOwnProperty(i)){let o=n[i];Array.isArray(o)||(o=[o],n[i]=o),o.push(s)}else n[i]=s}parseParens(n){let e={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Un(this.remaining),i=this.remaining[r.length];if(i!=="/"&&i!==")"&&i!==";")throw new M(4010,!1);let s;r.indexOf(":")>-1?(s=r.slice(0,r.indexOf(":")),this.capture(s),this.capture(":")):n&&(s=m);let o=this.parseChildren();e[s]=Object.keys(o).length===1?o[m]:new T([],o),this.consumeOptional("//")}return e}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new M(4011,!1)}};function vs(t){return t.segments.length>0?new T([],{[m]:t}):t}function ys(t){let n={};for(let[r,i]of Object.entries(t.children)){let s=ys(i);if(r===m&&s.segments.length===0&&s.hasChildren())for(let[o,c]of Object.entries(s.children))n[o]=c;else(s.segments.length>0||s.hasChildren())&&(n[r]=s)}let e=new T(t.segments,n);return Ra(e)}function Ra(t){if(t.numberOfChildren===1&&t.children[m]){let n=t.children[m];return new T(t.segments.concat(n.segments),n.children)}return t}function me(t){return t instanceof K}function Ca(t,n,e=null,r=null){let i=bs(t);return ws(i,n,e,r)}function bs(t){let n;function e(s){let o={};for(let a of s.children){let l=e(a);o[a.outlet]=l}let c=new T(s.url,o);return s===t&&(n=c),c}let r=e(t.root),i=vs(r);return n??i}function ws(t,n,e,r){let i=t;for(;i.parent;)i=i.parent;if(n.length===0)return _n(i,i,i,e,r);let s=Ma(n);if(s.toRoot())return _n(i,i,new T([],{}),e,r);let o=Aa(s,i,t),c=o.processChildren?tt(o.segmentGroup,o.index,s.commands):Ss(o.segmentGroup,o.index,s.commands);return _n(i,o.segmentGroup,c,e,r)}function Wt(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function it(t){return typeof t=="object"&&t!=null&&t.outlets}function _n(t,n,e,r,i){let s={};r&&Object.entries(r).forEach(([a,l])=>{s[a]=Array.isArray(l)?l.map(d=>`${d}`):`${l}`});let o;t===n?o=e:o=ks(t,n,e);let c=vs(ys(o));return new K(c,s,i)}function ks(t,n,e){let r={};return Object.entries(t.children).forEach(([i,s])=>{s===n?r[i]=e:r[i]=ks(s,n,e)}),new T(t.segments,r)}var qt=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,r){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=r,n&&r.length>0&&Wt(r[0]))throw new M(4003,!1);let i=r.find(it);if(i&&i!==ds(r))throw new M(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Ma(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new qt(!0,0,t);let n=0,e=!1,r=t.reduce((i,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let c={};return Object.entries(s.outlets).forEach(([a,l])=>{c[a]=typeof l=="string"?l.split("/"):l}),[...i,{outlets:c}]}if(s.segmentPath)return[...i,s.segmentPath]}return typeof s!="string"?[...i,s]:o===0?(s.split("/").forEach((c,a)=>{a==0&&c==="."||(a==0&&c===""?e=!0:c===".."?n++:c!=""&&i.push(c))}),i):[...i,s]},[]);return new qt(e,n,r)}var Me=class{segmentGroup;processChildren;index;constructor(n,e,r){this.segmentGroup=n,this.processChildren=e,this.index=r}};function Aa(t,n,e){if(t.isAbsolute)return new Me(n,!0,0);if(!e)return new Me(n,!1,NaN);if(e.parent===null)return new Me(e,!0,0);let r=Wt(t.commands[0])?0:1,i=e.segments.length-1+r;return Ia(e,i,t.numberOfDoubleDots)}function Ia(t,n,e){let r=t,i=n,s=e;for(;s>i;){if(s-=i,r=r.parent,!r)throw new M(4005,!1);i=r.segments.length}return new Me(r,!1,i-s)}function Ea(t){return it(t[0])?t[0].outlets:{[m]:t}}function Ss(t,n,e){if(t??=new T([],{}),t.segments.length===0&&t.hasChildren())return tt(t,n,e);let r=xa(t,n,e),i=e.slice(r.commandIndex);if(r.match&&r.pathIndex<t.segments.length){let s=new T(t.segments.slice(0,r.pathIndex),{});return s.children[m]=new T(t.segments.slice(r.pathIndex),t.children),tt(s,0,i)}else return r.match&&i.length===0?new T(t.segments,{}):r.match&&!t.hasChildren()?Jn(t,n,e):r.match?tt(t,0,i):Jn(t,n,e)}function tt(t,n,e){if(e.length===0)return new T(t.segments,{});{let r=Ea(e),i={};if(Object.keys(r).some(s=>s!==m)&&t.children[m]&&t.numberOfChildren===1&&t.children[m].segments.length===0){let s=tt(t.children[m],n,e);return new T(t.segments,s.children)}return Object.entries(r).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(i[s]=Ss(t.children[s],n,o))}),Object.entries(t.children).forEach(([s,o])=>{r[s]===void 0&&(i[s]=o)}),new T(t.segments,i)}}function xa(t,n,e){let r=0,i=n,s={match:!1,pathIndex:0,commandIndex:0};for(;i<t.segments.length;){if(r>=e.length)return s;let o=t.segments[i],c=e[r];if(it(c))break;let a=`${c}`,l=r<e.length-1?e[r+1]:null;if(i>0&&a===void 0)break;if(a&&l&&typeof l=="object"&&l.outlets===void 0){if(!ns(a,l,o))return s;r+=2}else{if(!ns(a,{},o))return s;r++}i++}return{match:!0,pathIndex:i,commandIndex:r}}function Jn(t,n,e){let r=t.segments.slice(0,n),i=0;for(;i<e.length;){let s=e[i];if(it(s)){let a=za(s.outlets);return new T(r,a)}if(i===0&&Wt(e[0])){let a=t.segments[n];r.push(new fe(a.path,ts(e[0]))),i++;continue}let o=it(s)?s.outlets[m]:`${s}`,c=i<e.length-1?e[i+1]:null;o&&c&&Wt(c)?(r.push(new fe(o,ts(c))),i+=2):(r.push(new fe(o,{})),i++)}return new T(r,{})}function za(t){let n={};return Object.entries(t).forEach(([e,r])=>{typeof r=="string"&&(r=[r]),r!==null&&(n[e]=Jn(new T([],{}),0,r))}),n}function ts(t){let n={};return Object.entries(t).forEach(([e,r])=>n[e]=`${r}`),n}function ns(t,n,e){return t==e.path&&H(n,e.parameters)}var nt="imperative",x=function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t}(x||{}),_=class{id;url;constructor(n,e){this.id=n,this.url=e}},ze=class extends _{type=x.NavigationStart;navigationTrigger;restoredState;constructor(n,e,r="imperative",i=null){super(n,e),this.navigationTrigger=r,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},$=class extends _{urlAfterRedirects;type=x.NavigationEnd;constructor(n,e,r){super(n,e),this.urlAfterRedirects=r}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},j=function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t}(j||{}),Gt=function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t}(Gt||{}),X=class extends _{reason;code;type=x.NavigationCancel;constructor(n,e,r,i){super(n,e),this.reason=r,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},se=class extends _{reason;code;type=x.NavigationSkipped;constructor(n,e,r,i){super(n,e),this.reason=r,this.code=i}},st=class extends _{error;target;type=x.NavigationError;constructor(n,e,r,i){super(n,e),this.error=r,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Jt=class extends _{urlAfterRedirects;state;type=x.RoutesRecognized;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Hn=class extends _{urlAfterRedirects;state;type=x.GuardsCheckStart;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Yn=class extends _{urlAfterRedirects;state;shouldActivate;type=x.GuardsCheckEnd;constructor(n,e,r,i,s){super(n,e),this.urlAfterRedirects=r,this.state=i,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Xn=class extends _{urlAfterRedirects;state;type=x.ResolveStart;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Kn=class extends _{urlAfterRedirects;state;type=x.ResolveEnd;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Zn=class{route;type=x.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Qn=class{route;type=x.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},er=class{snapshot;type=x.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},tr=class{snapshot;type=x.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},nr=class{snapshot;type=x.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},rr=class{snapshot;type=x.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ht=class{routerEvent;position;anchor;type=x.Scroll;constructor(n,e,r){this.routerEvent=n,this.position=e,this.anchor=r}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}},ot=class{},De=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function Da(t,n){return t.providers&&!t._injector&&(t._injector=wn(t.providers,n,`Route: ${t.path}`)),t._injector??n}function V(t){return t.outlet||m}function Fa(t,n){let e=t.filter(r=>V(r)===n);return e.push(...t.filter(r=>V(r)!==n)),e}function ft(t){if(!t)return null;if(t.routeConfig?._injector)return t.routeConfig._injector;for(let n=t.parent;n;n=n.parent){let e=n.routeConfig;if(e?._loadedInjector)return e._loadedInjector;if(e?._injector)return e._injector}return null}var ir=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return ft(this.route?.snapshot)??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new gt(this.rootInjector)}},gt=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,r){let i=this.getOrCreateContext(e);i.outlet=r,this.contexts.set(e,i)}onChildOutletDestroyed(e){let r=this.getContext(e);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let r=this.getContext(e);return r||(r=new ir(this.rootInjector),this.contexts.set(e,r)),r}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(r){return new(r||t)(y(de))};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Yt=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=sr(n,this._root);return e?e.children.map(r=>r.value):[]}firstChild(n){let e=sr(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=or(n,this._root);return e.length<2?[]:e[e.length-2].children.map(i=>i.value).filter(i=>i!==n)}pathFromRoot(n){return or(n,this._root).map(e=>e.value)}};function sr(t,n){if(t===n.value)return n;for(let e of n.children){let r=sr(t,e);if(r)return r}return null}function or(t,n){if(t===n.value)return[n];for(let e of n.children){let r=or(t,e);if(r.length)return r.unshift(n),r}return[]}var L=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function Ce(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var Xt=class extends Yt{snapshot;constructor(n,e){super(n),this.snapshot=e,gr(this,n)}toString(){return this.snapshot.toString()}};function Ts(t){let n=Oa(t),e=new O([new fe("",{})]),r=new O({}),i=new O({}),s=new O({}),o=new O(""),c=new oe(e,r,s,o,i,m,t,n.root);return c.snapshot=n.root,new Xt(new L(c,[]),n)}function Oa(t){let n={},e={},r={},i="",s=new Ae([],n,r,i,e,m,t,null,{});return new Zt("",new L(s,[]))}var oe=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,r,i,s,o,c,a){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=r,this.fragmentSubject=i,this.dataSubject=s,this.outlet=o,this.component=c,this._futureSnapshot=a,this.title=this.dataSubject?.pipe(S(l=>l[ht]))??f(void 0),this.url=n,this.params=e,this.queryParams=r,this.fragment=i,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(S(n=>Ee(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(S(n=>Ee(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Kt(t,n,e="emptyOnly"){let r,{routeConfig:i}=t;return n!==null&&(e==="always"||i?.path===""||!n.component&&!n.routeConfig?.loadComponent)?r={params:h(h({},n.params),t.params),data:h(h({},n.data),t.data),resolve:h(h(h(h({},t.data),n.data),i?.data),t._resolvedData)}:r={params:h({},t.params),data:h({},t.data),resolve:h(h({},t.data),t._resolvedData??{})},i&&Cs(i)&&(r.resolve[ht]=i.title),r}var Ae=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[ht]}constructor(n,e,r,i,s,o,c,a,l){this.url=n,this.params=e,this.queryParams=r,this.fragment=i,this.data=s,this.outlet=o,this.component=c,this.routeConfig=a,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Ee(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Ee(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(r=>r.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},Zt=class extends Yt{url;constructor(n,e){super(e),this.url=n,gr(this,e)}toString(){return Rs(this._root)}};function gr(t,n){n.value._routerState=t,n.children.forEach(e=>gr(t,e))}function Rs(t){let n=t.children.length>0?` { ${t.children.map(Rs).join(", ")} } `:"";return`${t.value}${n}`}function Bn(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,H(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),H(n.params,e.params)||t.paramsSubject.next(e.params),aa(n.url,e.url)||t.urlSubject.next(e.url),H(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function ar(t,n){let e=H(t.params,n.params)&&ua(t.url,n.url),r=!t.parent!=!n.parent;return e&&!r&&(!t.parent||ar(t.parent,n.parent))}function Cs(t){return typeof t.title=="string"||t.title===null}var Pa=new C(""),Na=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=m;activateEvents=new ke;deactivateEvents=new ke;attachEvents=new ke;detachEvents=new ke;routerOutletData=Br(void 0);parentContexts=p(gt);location=p(ri);changeDetector=p(Mt);inputBinder=p(nn,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:r,previousValue:i}=e.name;if(r)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new M(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new M(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new M(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,r){this.activated=e,this._activatedRoute=r,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,r){if(this.isActivated)throw new M(4013,!1);this._activatedRoute=e;let i=this.location,o=e.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,a=new cr(e,c,i.injector,this.routerOutletData);this.activated=i.createComponent(o,{index:i.length,injector:a,environmentInjector:r}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(r){return new(r||t)};static \u0275dir=Rt({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[kt]})}return t})(),cr=class t{route;childContexts;parent;outletData;__ngOutletInjector(n){return new t(this.route,this.childContexts,n,this.outletData)}constructor(n,e,r,i){this.route=n,this.childContexts=e,this.parent=r,this.outletData=i}get(n,e){return n===oe?this.route:n===gt?this.childContexts:n===Pa?this.outletData:this.parent.get(n,e)}},nn=new C(""),rs=(()=>{class t{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:r}=e,i=bt([r.queryParams,r.params,r.data]).pipe(N(([s,o,c],a)=>(c=h(h(h({},s),o),c),a===0?f(c):Promise.resolve(c)))).subscribe(s=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==r||r.component===null){this.unsubscribeFromRouteData(e);return}let o=vi(r.component);if(!o){this.unsubscribeFromRouteData(e);return}for(let{templateName:c}of o.inputs)e.activatedComponentRef.setInput(c,s[c])});this.outletDataSubscriptions.set(e,i)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})();function La(t,n,e){let r=at(t,n._root,e?e._root:void 0);return new Xt(r,n)}function at(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let r=e.value;r._futureSnapshot=n.value;let i=ja(t,n,e);return new L(r,i)}else{if(t.shouldAttach(n.value)){let s=t.retrieve(n.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=n.value,o.children=n.children.map(c=>at(t,c)),o}}let r=Ua(n.value),i=n.children.map(s=>at(t,s));return new L(r,i)}}function ja(t,n,e){return n.children.map(r=>{for(let i of e.children)if(t.shouldReuseRoute(r.value,i.value.snapshot))return at(t,r,i);return at(t,r)})}function Ua(t){return new oe(new O(t.url),new O(t.params),new O(t.queryParams),new O(t.fragment),new O(t.data),t.outlet,t.component,t)}var ct=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},Ms="ngNavigationCancelingError";function Qt(t,n){let{redirectTo:e,navigationBehaviorOptions:r}=me(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,i=As(!1,j.Redirect);return i.url=e,i.navigationBehaviorOptions=r,i}function As(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[Ms]=!0,e.cancellationCode=n,e}function _a(t){return Is(t)&&me(t.url)}function Is(t){return!!t&&t[Ms]}var Ba=(t,n,e,r)=>S(i=>(new lr(n,i.targetRouterState,i.currentRouterState,e,r).activate(t),i)),lr=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,r,i,s){this.routeReuseStrategy=n,this.futureState=e,this.currState=r,this.forwardEvent=i,this.inputBindingEnabled=s}activate(n){let e=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,r,n),Bn(this.futureState.root),this.activateChildRoutes(e,r,n)}deactivateChildRoutes(n,e,r){let i=Ce(e);n.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,i[o],r),delete i[o]}),Object.values(i).forEach(s=>{this.deactivateRouteAndItsChildren(s,r)})}deactivateRoutes(n,e,r){let i=n.value,s=e?e.value:null;if(i===s)if(i.component){let o=r.getContext(i.outlet);o&&this.deactivateChildRoutes(n,e,o.children)}else this.deactivateChildRoutes(n,e,r);else s&&this.deactivateRouteAndItsChildren(e,r)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let r=e.getContext(n.value.outlet),i=r&&n.value.component?r.children:e,s=Ce(n);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,i);if(r&&r.outlet){let o=r.outlet.detach(),c=r.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:o,route:n,contexts:c})}}deactivateRouteAndOutlet(n,e){let r=e.getContext(n.value.outlet),i=r&&n.value.component?r.children:e,s=Ce(n);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,i);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null)}activateChildRoutes(n,e,r){let i=Ce(e);n.children.forEach(s=>{this.activateRoutes(s,i[s.value.outlet],r),this.forwardEvent(new rr(s.value.snapshot))}),n.children.length&&this.forwardEvent(new tr(n.value.snapshot))}activateRoutes(n,e,r){let i=n.value,s=e?e.value:null;if(Bn(i),i===s)if(i.component){let o=r.getOrCreateContext(i.outlet);this.activateChildRoutes(n,e,o.children)}else this.activateChildRoutes(n,e,r);else if(i.component){let o=r.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let c=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),o.children.onOutletReAttached(c.contexts),o.attachRef=c.componentRef,o.route=c.route.value,o.outlet&&o.outlet.attach(c.componentRef,c.route.value),Bn(c.route.value),this.activateChildRoutes(n,null,o.children)}else o.attachRef=null,o.route=i,o.outlet&&o.outlet.activateWith(i,o.injector),this.activateChildRoutes(n,null,o.children)}else this.activateChildRoutes(n,null,r)}},en=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},Ie=class{component;route;constructor(n,e){this.component=n,this.route=e}};function Va(t,n,e){let r=t._root,i=n?n._root:null;return et(r,i,e,[r.value])}function $a(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function Oe(t,n){let e=Symbol(),r=n.get(t,e);return r===e?typeof t=="function"&&!jr(t)?t:n.get(t):r}function et(t,n,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let s=Ce(n);return t.children.forEach(o=>{Wa(o,s[o.value.outlet],e,r.concat([o.value]),i),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,c])=>rt(c,e.getContext(o),i)),i}function Wa(t,n,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let s=t.value,o=n?n.value:null,c=e?e.getContext(t.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let a=qa(o,s,s.routeConfig.runGuardsAndResolvers);a?i.canActivateChecks.push(new en(r)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?et(t,n,c?c.children:null,r,i):et(t,n,e,r,i),a&&c&&c.outlet&&c.outlet.isActivated&&i.canDeactivateChecks.push(new Ie(c.outlet.component,o))}else o&&rt(n,c,i),i.canActivateChecks.push(new en(r)),s.component?et(t,null,c?c.children:null,r,i):et(t,null,e,r,i);return i}function qa(t,n,e){if(typeof e=="function")return e(t,n);switch(e){case"pathParamsChange":return!ge(t.url,n.url);case"pathParamsOrQueryParamsChange":return!ge(t.url,n.url)||!H(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!ar(t,n)||!H(t.queryParams,n.queryParams);case"paramsChange":default:return!ar(t,n)}}function rt(t,n,e){let r=Ce(t),i=t.value;Object.entries(r).forEach(([s,o])=>{i.component?n?rt(o,n.children.getContext(s),e):rt(o,null,e):rt(o,n,e)}),i.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new Ie(n.outlet.component,i)):e.canDeactivateChecks.push(new Ie(null,i)):e.canDeactivateChecks.push(new Ie(null,i))}function mt(t){return typeof t=="function"}function Ga(t){return typeof t=="boolean"}function Ja(t){return t&&mt(t.canLoad)}function Ha(t){return t&&mt(t.canActivate)}function Ya(t){return t&&mt(t.canActivateChild)}function Xa(t){return t&&mt(t.canDeactivate)}function Ka(t){return t&&mt(t.canMatch)}function Es(t){return t instanceof Dr||t?.name==="EmptyError"}var _t=Symbol("INITIAL_VALUE");function Fe(){return N(t=>bt(t.map(n=>n.pipe(ye(1),Nr(_t)))).pipe(S(n=>{for(let e of n)if(e!==!0){if(e===_t)return _t;if(e===!1||Za(e))return e}return!0}),Y(n=>n!==_t),ye(1)))}function Za(t){return me(t)||t instanceof ct}function Qa(t,n){return P(e=>{let{targetSnapshot:r,currentSnapshot:i,guards:{canActivateChecks:s,canDeactivateChecks:o}}=e;return o.length===0&&s.length===0?f(I(h({},e),{guardsResult:!0})):ec(o,r,i,t).pipe(P(c=>c&&Ga(c)?tc(r,s,t,n):f(c)),S(c=>I(h({},e),{guardsResult:c})))})}function ec(t,n,e,r){return D(t).pipe(P(i=>oc(i.component,i.route,e,n,r)),te(i=>i!==!0,!0))}function tc(t,n,e,r){return D(n).pipe(ee(i=>Fr(rc(i.route.parent,r),nc(i.route,r),sc(t,i.path,e),ic(t,i.route,e))),te(i=>i!==!0,!0))}function nc(t,n){return t!==null&&n&&n(new nr(t)),f(!0)}function rc(t,n){return t!==null&&n&&n(new er(t)),f(!0)}function ic(t,n,e){let r=n.routeConfig?n.routeConfig.canActivate:null;if(!r||r.length===0)return f(!0);let i=r.map(s=>ln(()=>{let o=ft(n)??e,c=Oe(s,o),a=Ha(c)?c.canActivate(n,t):U(o,()=>c(n,t));return ae(a).pipe(te())}));return f(i).pipe(Fe())}function sc(t,n,e){let r=n[n.length-1],s=n.slice(0,n.length-1).reverse().map(o=>$a(o)).filter(o=>o!==null).map(o=>ln(()=>{let c=o.guards.map(a=>{let l=ft(o.node)??e,d=Oe(a,l),u=Ya(d)?d.canActivateChild(r,t):U(l,()=>d(r,t));return ae(u).pipe(te())});return f(c).pipe(Fe())}));return f(s).pipe(Fe())}function oc(t,n,e,r,i){let s=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!s||s.length===0)return f(!0);let o=s.map(c=>{let a=ft(n)??i,l=Oe(c,a),d=Xa(l)?l.canDeactivate(t,n,e,r):U(a,()=>l(t,n,e,r));return ae(d).pipe(te())});return f(o).pipe(Fe())}function ac(t,n,e,r){let i=n.canLoad;if(i===void 0||i.length===0)return f(!0);let s=i.map(o=>{let c=Oe(o,t),a=Ja(c)?c.canLoad(n,e):U(t,()=>c(n,e));return ae(a)});return f(s).pipe(Fe(),xs(r))}function xs(t){return xr(E(n=>{if(typeof n!="boolean")throw Qt(t,n)}),S(n=>n===!0))}function cc(t,n,e,r){let i=n.canMatch;if(!i||i.length===0)return f(!0);let s=i.map(o=>{let c=Oe(o,t),a=Ka(c)?c.canMatch(n,e):U(t,()=>c(n,e));return ae(a)});return f(s).pipe(Fe(),xs(r))}var lt=class{segmentGroup;constructor(n){this.segmentGroup=n||null}},dt=class extends Error{urlTree;constructor(n){super(),this.urlTree=n}};function Re(t){return Ne(new lt(t))}function lc(t){return Ne(new M(4e3,!1))}function dc(t){return Ne(As(!1,j.GuardRejected))}var dr=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}lineralizeSegments(n,e){let r=[],i=e.root;for(;;){if(r=r.concat(i.segments),i.numberOfChildren===0)return f(r);if(i.numberOfChildren>1||!i.children[m])return lc(`${n.redirectTo}`);i=i.children[m]}}applyRedirectCommands(n,e,r,i,s){if(typeof e!="string"){let c=e,{queryParams:a,fragment:l,routeConfig:d,url:u,outlet:v,params:g,data:A,title:k}=i,b=U(s,()=>c({params:g,data:A,queryParams:a,fragment:l,routeConfig:d,url:u,outlet:v,title:k}));if(b instanceof K)throw new dt(b);e=b}let o=this.applyRedirectCreateUrlTree(e,this.urlSerializer.parse(e),n,r);if(e[0]==="/")throw new dt(o);return o}applyRedirectCreateUrlTree(n,e,r,i){let s=this.createSegmentGroup(n,e.root,r,i);return new K(s,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let r={};return Object.entries(n).forEach(([i,s])=>{if(typeof s=="string"&&s[0]===":"){let c=s.substring(1);r[i]=e[c]}else r[i]=s}),r}createSegmentGroup(n,e,r,i){let s=this.createSegments(n,e.segments,r,i),o={};return Object.entries(e.children).forEach(([c,a])=>{o[c]=this.createSegmentGroup(n,a,r,i)}),new T(s,o)}createSegments(n,e,r,i){return e.map(s=>s.path[0]===":"?this.findPosParam(n,s,i):this.findOrReturn(s,r))}findPosParam(n,e,r){let i=r[e.path.substring(1)];if(!i)throw new M(4001,!1);return i}findOrReturn(n,e){let r=0;for(let i of e){if(i.path===n.path)return e.splice(r),i;r++}return n}},ur={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function uc(t,n,e,r,i){let s=zs(t,n,e);return s.matched?(r=Da(n,r),cc(r,n,e,i).pipe(S(o=>o===!0?s:h({},ur)))):f(s)}function zs(t,n,e){if(n.path==="**")return hc(e);if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?h({},ur):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let i=(n.matcher||oa)(e,t,n);if(!i)return h({},ur);let s={};Object.entries(i.posParams??{}).forEach(([c,a])=>{s[c]=a.path});let o=i.consumed.length>0?h(h({},s),i.consumed[i.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:i.consumed,remainingSegments:e.slice(i.consumed.length),parameters:o,positionalParamSegments:i.posParams??{}}}function hc(t){return{matched:!0,parameters:t.length>0?ds(t).parameters:{},consumedSegments:t,remainingSegments:[],positionalParamSegments:{}}}function is(t,n,e,r){return e.length>0&&gc(t,e,r)?{segmentGroup:new T(n,fc(r,new T(e,t.children))),slicedSegments:[]}:e.length===0&&mc(t,e,r)?{segmentGroup:new T(t.segments,pc(t,e,r,t.children)),slicedSegments:e}:{segmentGroup:new T(t.segments,t.children),slicedSegments:e}}function pc(t,n,e,r){let i={};for(let s of e)if(rn(t,n,s)&&!r[V(s)]){let o=new T([],{});i[V(s)]=o}return h(h({},r),i)}function fc(t,n){let e={};e[m]=n;for(let r of t)if(r.path===""&&V(r)!==m){let i=new T([],{});e[V(r)]=i}return e}function gc(t,n,e){return e.some(r=>rn(t,n,r)&&V(r)!==m)}function mc(t,n,e){return e.some(r=>rn(t,n,r))}function rn(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function vc(t,n,e){return n.length===0&&!t.children[e]}var hr=class{};function yc(t,n,e,r,i,s,o="emptyOnly"){return new pr(t,n,e,r,i,o,s).recognize()}var bc=31,pr=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,r,i,s,o,c){this.injector=n,this.configLoader=e,this.rootComponentType=r,this.config=i,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=c,this.applyRedirects=new dr(this.urlSerializer,this.urlTree)}noMatchError(n){return new M(4002,`'${n.segmentGroup}'`)}recognize(){let n=is(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(n).pipe(S(({children:e,rootSnapshot:r})=>{let i=new L(r,e),s=new Zt("",i),o=Ca(r,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),{state:s,tree:o}}))}match(n){let e=new Ae([],Object.freeze({}),Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),m,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,n,m,e).pipe(S(r=>({children:r,rootSnapshot:e})),ve(r=>{if(r instanceof dt)return this.urlTree=r.urlTree,this.match(r.urlTree.root);throw r instanceof lt?this.noMatchError(r):r}))}processSegmentGroup(n,e,r,i,s){return r.segments.length===0&&r.hasChildren()?this.processChildren(n,e,r,s):this.processSegment(n,e,r,r.segments,i,!0,s).pipe(S(o=>o instanceof L?[o]:[]))}processChildren(n,e,r,i){let s=[];for(let o of Object.keys(r.children))o==="primary"?s.unshift(o):s.push(o);return D(s).pipe(ee(o=>{let c=r.children[o],a=Fa(e,o);return this.processSegmentGroup(n,a,c,o,i)}),Pr((o,c)=>(o.push(...c),o)),dn(null),Or(),P(o=>{if(o===null)return Re(r);let c=Ds(o);return wc(c),f(c)}))}processSegment(n,e,r,i,s,o,c){return D(e).pipe(ee(a=>this.processSegmentAgainstRoute(a._injector??n,e,a,r,i,s,o,c).pipe(ve(l=>{if(l instanceof lt)return f(null);throw l}))),te(a=>!!a),ve(a=>{if(Es(a))return vc(r,i,s)?f(new hr):Re(r);throw a}))}processSegmentAgainstRoute(n,e,r,i,s,o,c,a){return V(r)!==o&&(o===m||!rn(i,s,r))?Re(i):r.redirectTo===void 0?this.matchSegmentAgainstRoute(n,i,r,s,o,a):this.allowRedirects&&c?this.expandSegmentAgainstRouteUsingRedirect(n,i,e,r,s,o,a):Re(i)}expandSegmentAgainstRouteUsingRedirect(n,e,r,i,s,o,c){let{matched:a,parameters:l,consumedSegments:d,positionalParamSegments:u,remainingSegments:v}=zs(e,i,s);if(!a)return Re(e);typeof i.redirectTo=="string"&&i.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>bc&&(this.allowRedirects=!1));let g=new Ae(s,l,Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,ss(i),V(i),i.component??i._loadedComponent??null,i,os(i)),A=Kt(g,c,this.paramsInheritanceStrategy);g.params=Object.freeze(A.params),g.data=Object.freeze(A.data);let k=this.applyRedirects.applyRedirectCommands(d,i.redirectTo,u,g,n);return this.applyRedirects.lineralizeSegments(i,k).pipe(P(b=>this.processSegment(n,r,e,b.concat(v),o,!1,c)))}matchSegmentAgainstRoute(n,e,r,i,s,o){let c=uc(e,r,i,n,this.urlSerializer);return r.path==="**"&&(e.children={}),c.pipe(N(a=>a.matched?(n=r._injector??n,this.getChildConfig(n,r,i).pipe(N(({routes:l})=>{let d=r._loadedInjector??n,{parameters:u,consumedSegments:v,remainingSegments:g}=a,A=new Ae(v,u,Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,ss(r),V(r),r.component??r._loadedComponent??null,r,os(r)),k=Kt(A,o,this.paramsInheritanceStrategy);A.params=Object.freeze(k.params),A.data=Object.freeze(k.data);let{segmentGroup:b,slicedSegments:z}=is(e,v,g,l);if(z.length===0&&b.hasChildren())return this.processChildren(d,l,b,A).pipe(S(R=>new L(A,R)));if(l.length===0&&z.length===0)return f(new L(A,[]));let q=V(r)===s;return this.processSegment(d,l,b,z,q?m:s,!0,A).pipe(S(R=>new L(A,R instanceof L?[R]:[])))}))):Re(e)))}getChildConfig(n,e,r){return e.children?f({routes:e.children,injector:n}):e.loadChildren?e._loadedRoutes!==void 0?f({routes:e._loadedRoutes,injector:e._loadedInjector}):ac(n,e,r,this.urlSerializer).pipe(P(i=>i?this.configLoader.loadChildren(n,e).pipe(E(s=>{e._loadedRoutes=s.routes,e._loadedInjector=s.injector})):dc(e))):f({routes:[],injector:n})}};function wc(t){t.sort((n,e)=>n.value.outlet===m?-1:e.value.outlet===m?1:n.value.outlet.localeCompare(e.value.outlet))}function kc(t){let n=t.value.routeConfig;return n&&n.path===""}function Ds(t){let n=[],e=new Set;for(let r of t){if(!kc(r)){n.push(r);continue}let i=n.find(s=>r.value.routeConfig===s.value.routeConfig);i!==void 0?(i.children.push(...r.children),e.add(i)):n.push(r)}for(let r of e){let i=Ds(r.children);n.push(new L(r.value,i))}return n.filter(r=>!e.has(r))}function ss(t){return t.data||{}}function os(t){return t.resolve||{}}function Sc(t,n,e,r,i,s){return P(o=>yc(t,n,e,r,o.extractedUrl,i,s).pipe(S(({state:c,tree:a})=>I(h({},o),{targetSnapshot:c,urlAfterRedirects:a}))))}function Tc(t,n){return P(e=>{let{targetSnapshot:r,guards:{canActivateChecks:i}}=e;if(!i.length)return f(e);let s=new Set(i.map(a=>a.route)),o=new Set;for(let a of s)if(!o.has(a))for(let l of Fs(a))o.add(l);let c=0;return D(o).pipe(ee(a=>s.has(a)?Rc(a,r,t,n):(a.data=Kt(a,a.parent,t).resolve,f(void 0))),E(()=>c++),un(1),P(a=>c===o.size?f(e):Q))})}function Fs(t){let n=t.children.map(e=>Fs(e)).flat();return[t,...n]}function Rc(t,n,e,r){let i=t.routeConfig,s=t._resolve;return i?.title!==void 0&&!Cs(i)&&(s[ht]=i.title),Cc(s,t,n,r).pipe(S(o=>(t._resolvedData=o,t.data=Kt(t,t.parent,e).resolve,null)))}function Cc(t,n,e,r){let i=Wn(t);if(i.length===0)return f({});let s={};return D(i).pipe(P(o=>Mc(t[o],n,e,r).pipe(te(),E(c=>{if(c instanceof ct)throw Qt(new xe,c);s[o]=c}))),un(1),S(()=>s),ve(o=>Es(o)?Q:Ne(o)))}function Mc(t,n,e,r){let i=ft(n)??r,s=Oe(t,i),o=s.resolve?s.resolve(n,e):U(i,()=>s(n,e));return ae(o)}function Vn(t){return N(n=>{let e=t(n);return e?D(e).pipe(S(()=>n)):f(n)})}var Os=(()=>{class t{buildTitle(e){let r,i=e.root;for(;i!==void 0;)r=this.getResolvedTitleForRoute(i)??r,i=i.children.find(s=>s.outlet===m);return r}getResolvedTitleForRoute(e){return e.data[ht]}static \u0275fac=function(r){return new(r||t)};static \u0275prov=w({token:t,factory:()=>p(Ac),providedIn:"root"})}return t})(),Ac=(()=>{class t extends Os{title;constructor(e){super(),this.title=e}updateTitle(e){let r=this.buildTitle(e);r!==void 0&&this.title.setTitle(r)}static \u0275fac=function(r){return new(r||t)(y(Zi))};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),vt=new C("",{providedIn:"root",factory:()=>({})}),Ic=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=si({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(r,i){r&1&&li(0,"router-outlet")},dependencies:[Na],encapsulation:2})}return t})();function mr(t){let n=t.children&&t.children.map(mr),e=n?I(h({},t),{children:n}):h({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==m&&(e.component=Ic),e}var ut=new C(""),vr=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=p(Ct);loadComponent(e){if(this.componentLoaders.get(e))return this.componentLoaders.get(e);if(e._loadedComponent)return f(e._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(e);let r=ae(e.loadComponent()).pipe(S(Ps),E(s=>{this.onLoadEndListener&&this.onLoadEndListener(e),e._loadedComponent=s}),be(()=>{this.componentLoaders.delete(e)})),i=new cn(r,()=>new Z).pipe(an());return this.componentLoaders.set(e,i),i}loadChildren(e,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return f({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let s=Ec(r,this.compiler,e,this.onLoadEndListener).pipe(be(()=>{this.childrenLoaders.delete(r)})),o=new cn(s,()=>new Z).pipe(an());return this.childrenLoaders.set(r,o),o}static \u0275fac=function(r){return new(r||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Ec(t,n,e,r){return ae(t.loadChildren()).pipe(S(Ps),P(i=>i instanceof ii||Array.isArray(i)?f(i):D(n.compileModuleAsync(i))),S(i=>{r&&r(t);let s,o,c=!1;return Array.isArray(i)?(o=i,c=!0):(s=i.create(e).injector,o=s.get(ut,[],{optional:!0,self:!0}).flat()),{routes:o.map(mr),injector:s}}))}function xc(t){return t&&typeof t=="object"&&"default"in t}function Ps(t){return xc(t)?t.default:t}var yr=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=w({token:t,factory:()=>p(zc),providedIn:"root"})}return t})(),zc=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,r){return e}static \u0275fac=function(r){return new(r||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ns=new C(""),Ls=new C("");function Dc(t,n,e){let r=t.get(Ls),i=t.get(F);return t.get(G).runOutsideAngular(()=>{if(!i.startViewTransition||r.skipNextTransition)return r.skipNextTransition=!1,new Promise(l=>setTimeout(l));let s,o=new Promise(l=>{s=l}),c=i.startViewTransition(()=>(s(),Fc(t))),{onViewTransitionCreated:a}=r;return a&&U(t,()=>a({transition:c,from:n,to:e})),o})}function Fc(t){return new Promise(n=>{Gr({read:()=>setTimeout(n)},{injector:t})})}var js=new C(""),br=(()=>{class t{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new Z;transitionAbortSubject=new Z;configLoader=p(vr);environmentInjector=p(de);urlSerializer=p(pt);rootContexts=p(gt);location=p(We);inputBindingEnabled=p(nn,{optional:!0})!==null;titleStrategy=p(Os);options=p(vt,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=p(yr);createViewTransition=p(Ns,{optional:!0});navigationErrorHandler=p(js,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>f(void 0);rootComponentType=null;constructor(){let e=i=>this.events.next(new Zn(i)),r=i=>this.events.next(new Qn(i));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=e}complete(){this.transitions?.complete()}handleNavigationRequest(e){let r=++this.navigationId;this.transitions?.next(I(h(h({},this.transitions.value),e),{id:r}))}setupNavigations(e,r,i){return this.transitions=new O({id:0,currentUrlTree:r,currentRawUrl:r,extractedUrl:this.urlHandlingStrategy.extract(r),urlAfterRedirects:this.urlHandlingStrategy.extract(r),rawUrl:r,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:nt,restoredState:null,currentSnapshot:i.snapshot,targetSnapshot:null,currentRouterState:i,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(Y(s=>s.id!==0),S(s=>I(h({},s),{extractedUrl:this.urlHandlingStrategy.extract(s.rawUrl)})),N(s=>{let o=!1,c=!1;return f(s).pipe(N(a=>{if(this.navigationId>s.id)return this.cancelNavigationTransition(s,"",j.SupersededByNewNavigation),Q;this.currentTransition=s,this.currentNavigation={id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:this.lastSuccessfulNavigation?I(h({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let l=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=a.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!l&&d!=="reload"){let u="";return this.events.next(new se(a.id,this.urlSerializer.serialize(a.rawUrl),u,Gt.IgnoredSameUrlNavigation)),a.resolve(!1),Q}if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return f(a).pipe(N(u=>{let v=this.transitions?.getValue();return this.events.next(new ze(u.id,this.urlSerializer.serialize(u.extractedUrl),u.source,u.restoredState)),v!==this.transitions?.getValue()?Q:Promise.resolve(u)}),Sc(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy),E(u=>{s.targetSnapshot=u.targetSnapshot,s.urlAfterRedirects=u.urlAfterRedirects,this.currentNavigation=I(h({},this.currentNavigation),{finalUrl:u.urlAfterRedirects});let v=new Jt(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(v)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:u,extractedUrl:v,source:g,restoredState:A,extras:k}=a,b=new ze(u,this.urlSerializer.serialize(v),g,A);this.events.next(b);let z=Ts(this.rootComponentType).snapshot;return this.currentTransition=s=I(h({},a),{targetSnapshot:z,urlAfterRedirects:v,extras:I(h({},k),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=v,f(s)}else{let u="";return this.events.next(new se(a.id,this.urlSerializer.serialize(a.extractedUrl),u,Gt.IgnoredByUrlHandlingStrategy)),a.resolve(!1),Q}}),E(a=>{let l=new Hn(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(l)}),S(a=>(this.currentTransition=s=I(h({},a),{guards:Va(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),s)),Qa(this.environmentInjector,a=>this.events.next(a)),E(a=>{if(s.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw Qt(this.urlSerializer,a.guardsResult);let l=new Yn(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);this.events.next(l)}),Y(a=>a.guardsResult?!0:(this.cancelNavigationTransition(a,"",j.GuardRejected),!1)),Vn(a=>{if(a.guards.canActivateChecks.length)return f(a).pipe(E(l=>{let d=new Xn(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(d)}),N(l=>{let d=!1;return f(l).pipe(Tc(this.paramsInheritanceStrategy,this.environmentInjector),E({next:()=>d=!0,complete:()=>{d||this.cancelNavigationTransition(l,"",j.NoDataFromResolver)}}))}),E(l=>{let d=new Kn(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(d)}))}),Vn(a=>{let l=d=>{let u=[];d.routeConfig?.loadComponent&&!d.routeConfig._loadedComponent&&u.push(this.configLoader.loadComponent(d.routeConfig).pipe(E(v=>{d.component=v}),S(()=>{})));for(let v of d.children)u.push(...l(v));return u};return bt(l(a.targetSnapshot.root)).pipe(dn(null),ye(1))}),Vn(()=>this.afterPreactivation()),N(()=>{let{currentSnapshot:a,targetSnapshot:l}=s,d=this.createViewTransition?.(this.environmentInjector,a.root,l.root);return d?D(d).pipe(S(()=>s)):f(s)}),S(a=>{let l=La(e.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);return this.currentTransition=s=I(h({},a),{targetRouterState:l}),this.currentNavigation.targetRouterState=l,s}),E(()=>{this.events.next(new ot)}),Ba(this.rootContexts,e.routeReuseStrategy,a=>this.events.next(a),this.inputBindingEnabled),ye(1),E({next:a=>{o=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new $(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0)},complete:()=>{o=!0}}),Lr(this.transitionAbortSubject.pipe(E(a=>{throw a}))),be(()=>{!o&&!c&&this.cancelNavigationTransition(s,"",j.SupersededByNewNavigation),this.currentTransition?.id===s.id&&(this.currentNavigation=null,this.currentTransition=null)}),ve(a=>{if(c=!0,Is(a))this.events.next(new X(s.id,this.urlSerializer.serialize(s.extractedUrl),a.message,a.cancellationCode)),_a(a)?this.events.next(new De(a.url,a.navigationBehaviorOptions)):s.resolve(!1);else{let l=new st(s.id,this.urlSerializer.serialize(s.extractedUrl),a,s.targetSnapshot??void 0);try{let d=U(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(d instanceof ct){let{message:u,cancellationCode:v}=Qt(this.urlSerializer,d);this.events.next(new X(s.id,this.urlSerializer.serialize(s.extractedUrl),u,v)),this.events.next(new De(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(l),a}catch(d){this.options.resolveNavigationPromiseOnError?s.resolve(!1):s.reject(d)}}return Q}))}))}cancelNavigationTransition(e,r,i){let s=new X(e.id,this.urlSerializer.serialize(e.extractedUrl),r,i);this.events.next(s),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),r=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return e.toString()!==r?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(r){return new(r||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Oc(t){return t!==nt}var Pc=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=w({token:t,factory:()=>p(Nc),providedIn:"root"})}return t})(),fr=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}},Nc=(()=>{class t extends fr{static \u0275fac=(()=>{let e;return function(i){return(e||(e=pn(t)))(i||t)}})();static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Us=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=w({token:t,factory:()=>p(Lc),providedIn:"root"})}return t})(),Lc=(()=>{class t extends Us{location=p(We);urlSerializer=p(pt);options=p(vt,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";urlHandlingStrategy=p(yr);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new K;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}routerState=Ts(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(r=>{r.type==="popstate"&&e(r.url,r.state)})}handleRouterEvent(e,r){if(e instanceof ze)this.stateMemento=this.createStateMemento();else if(e instanceof se)this.rawUrlTree=r.initialUrl;else if(e instanceof Jt){if(this.urlUpdateStrategy==="eager"&&!r.extras.skipLocationChange){let i=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl);this.setBrowserUrl(r.targetBrowserUrl??i,r)}}else e instanceof ot?(this.currentUrlTree=r.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl),this.routerState=r.targetRouterState,this.urlUpdateStrategy==="deferred"&&!r.extras.skipLocationChange&&this.setBrowserUrl(r.targetBrowserUrl??this.rawUrlTree,r)):e instanceof X&&(e.code===j.GuardRejected||e.code===j.NoDataFromResolver)?this.restoreHistory(r):e instanceof st?this.restoreHistory(r,!0):e instanceof $&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,r){let i=e instanceof K?this.urlSerializer.serialize(e):e;if(this.location.isCurrentPathEqualTo(i)||r.extras.replaceUrl){let s=this.browserPageId,o=h(h({},r.extras.state),this.generateNgRouterState(r.id,s));this.location.replaceState(i,"",o)}else{let s=h(h({},r.extras.state),this.generateNgRouterState(r.id,this.browserPageId+1));this.location.go(i,"",s)}}restoreHistory(e,r=!1){if(this.canceledNavigationResolution==="computed"){let i=this.browserPageId,s=this.currentPageId-i;s!==0?this.location.historyGo(s):this.currentUrlTree===e.finalUrl&&s===0&&(this.resetState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetState(e),this.resetUrlToCurrentUrlTree())}resetState(e){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,r){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:r}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(i){return(e||(e=pn(t)))(i||t)}})();static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function _s(t,n){t.events.pipe(Y(e=>e instanceof $||e instanceof X||e instanceof st||e instanceof se),S(e=>e instanceof $||e instanceof se?0:(e instanceof X?e.code===j.Redirect||e.code===j.SupersededByNewNavigation:!1)?2:1),Y(e=>e!==2),ye(1)).subscribe(()=>{n()})}var jc={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Uc={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},W=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=p(kn);stateManager=p(Us);options=p(vt,{optional:!0})||{};pendingTasks=p(St);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=p(br);urlSerializer=p(pt);location=p(We);urlHandlingStrategy=p(yr);_events=new Z;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=p(Pc);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=p(ut,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!p(nn,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:e=>{this.console.warn(e)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Er;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(r=>{try{let i=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(i!==null&&s!==null){if(this.stateManager.handleRouterEvent(r,s),r instanceof X&&r.code!==j.Redirect&&r.code!==j.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof $)this.navigated=!0;else if(r instanceof De){let o=r.navigationBehaviorOptions,c=this.urlHandlingStrategy.merge(r.url,i.currentRawUrl),a=h({browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Oc(i.source)},o);this.scheduleNavigation(c,nt,null,a,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}Bc(r)&&this._events.next(r)}catch(i){this.navigationTransitions.transitionAbortSubject.next(i)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),nt,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,r)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(e,"popstate",r)},0)})}navigateToSyncWithBrowser(e,r,i){let s={replaceUrl:!0},o=i?.navigationId?i:null;if(i){let a=h({},i);delete a.navigationId,delete a.\u0275routerPageId,Object.keys(a).length!==0&&(s.state=a)}let c=this.parseUrl(e);this.scheduleNavigation(c,r,o,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(mr),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,r={}){let{relativeTo:i,queryParams:s,fragment:o,queryParamsHandling:c,preserveFragment:a}=r,l=a?this.currentUrlTree.fragment:o,d=null;switch(c??this.options.defaultQueryParamsHandling){case"merge":d=h(h({},this.currentUrlTree.queryParams),s);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=s||null}d!==null&&(d=this.removeEmptyProps(d));let u;try{let v=i?i.snapshot:this.routerState.snapshot.root;u=bs(v)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),u=this.currentUrlTree.root}return ws(u,e,d,l??null)}navigateByUrl(e,r={skipLocationChange:!1}){let i=me(e)?e:this.parseUrl(e),s=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(s,nt,null,r)}navigate(e,r={skipLocationChange:!1}){return _c(e),this.navigateByUrl(this.createUrlTree(e,r),r)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.urlSerializer.parse("/")}}isActive(e,r){let i;if(r===!0?i=h({},jc):r===!1?i=h({},Uc):i=r,me(e))return Qi(this.currentUrlTree,e,i);let s=this.parseUrl(e);return Qi(this.currentUrlTree,s,i)}removeEmptyProps(e){return Object.entries(e).reduce((r,[i,s])=>(s!=null&&(r[i]=s),r),{})}scheduleNavigation(e,r,i,s,o){if(this.disposed)return Promise.resolve(!1);let c,a,l;o?(c=o.resolve,a=o.reject,l=o.promise):l=new Promise((u,v)=>{c=u,a=v});let d=this.pendingTasks.add();return _s(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:s,resolve:c,reject:a,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(u=>Promise.reject(u))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function _c(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new M(4008,!1)}function Bc(t){return!(t instanceof ot)&&!(t instanceof De)}var as=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;href=null;target;queryParams;fragment;queryParamsHandling;state;info;relativeTo;isAnchorElement;subscription;onChanges=new Z;constructor(e,r,i,s,o,c){this.router=e,this.route=r,this.tabIndexAttribute=i,this.renderer=s,this.el=o,this.locationStrategy=c;let a=o.nativeElement.tagName?.toLowerCase();this.isAnchorElement=a==="a"||a==="area",this.isAnchorElement?this.subscription=e.events.subscribe(l=>{l instanceof $&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}preserveFragment=!1;skipLocationChange=!1;replaceUrl=!1;setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}routerLinkInput=null;set routerLink(e){e==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(me(e)?this.routerLinkInput=e:this.routerLinkInput=Array.isArray(e)?e:[e],this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,r,i,s,o){let c=this.urlTree;if(c===null||this.isAnchorElement&&(e!==0||r||i||s||o||typeof this.target=="string"&&this.target!="_self"))return!0;let a={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(c,a),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let e=this.urlTree;this.href=e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e)):null;let r=this.href===null?null:ei(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",r)}applyAttributeValue(e,r){let i=this.renderer,s=this.el.nativeElement;r!==null?i.setAttribute(s,e,r):i.removeAttribute(s,e)}get urlTree(){return this.routerLinkInput===null?null:me(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static \u0275fac=function(r){return new(r||t)(B(W),B(oe),_r("tabindex"),B(bn),B(gn),B($e))};static \u0275dir=Rt({type:t,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(r,i){r&1&&di("click",function(o){return i.onClick(o.button,o.ctrlKey,o.shiftKey,o.altKey,o.metaKey)}),r&2&&ci("target",i.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",At],skipLocationChange:[2,"skipLocationChange","skipLocationChange",At],replaceUrl:[2,"replaceUrl","replaceUrl",At],routerLink:"routerLink"},features:[oi,kt]})}return t})(),dd=(()=>{class t{router;element;renderer;cdr;link;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new ke;constructor(e,r,i,s,o){this.router=e,this.element=r,this.renderer=i,this.cdr=s,this.link=o,this.routerEventsSubscription=e.events.subscribe(c=>{c instanceof $&&this.update()})}ngAfterContentInit(){f(this.links.changes,f(null)).pipe(Le()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(r=>!!r).map(r=>r.onChanges);this.linkInputChangesSubscription=D(e).pipe(Le()).subscribe(r=>{this._isActive!==this.isLinkActive(this.router)(r)&&this.update()})}set routerLinkActive(e){let r=Array.isArray(e)?e:e.split(" ");this.classes=r.filter(i=>!!i)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(r=>{e?this.renderer.addClass(this.element.nativeElement,r):this.renderer.removeClass(this.element.nativeElement,r)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let r=Vc(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact||!1;return i=>{let s=i.urlTree;return s?e.isActive(s,r):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static \u0275fac=function(r){return new(r||t)(B(W),B(gn),B(bn),B(Mt),B(as,8))};static \u0275dir=Rt({type:t,selectors:[["","routerLinkActive",""]],contentQueries:function(r,i,s){if(r&1&&ui(s,as,5),r&2){let o;hi(o=pi())&&(i.links=o)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[kt]})}return t})();function Vc(t){return!!t.paths}var tn=class{};var $c=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,r,i,s,o){this.router=e,this.injector=i,this.preloadingStrategy=s,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(Y(e=>e instanceof $),ee(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(e,r){let i=[];for(let s of r){s.providers&&!s._injector&&(s._injector=wn(s.providers,e,`Route: ${s.path}`));let o=s._injector??e,c=s._loadedInjector??o;(s.loadChildren&&!s._loadedRoutes&&s.canLoad===void 0||s.loadComponent&&!s._loadedComponent)&&i.push(this.preloadConfig(o,s)),(s.children||s._loadedRoutes)&&i.push(this.processRoutes(c,s.children??s._loadedRoutes))}return D(i).pipe(Le())}preloadConfig(e,r){return this.preloadingStrategy.preload(r,()=>{let i;r.loadChildren&&r.canLoad===void 0?i=this.loader.loadChildren(e,r):i=f(null);let s=i.pipe(P(o=>o===null?f(void 0):(r._loadedRoutes=o.routes,r._loadedInjector=o.injector,this.processRoutes(o.injector??e,o.routes))));if(r.loadComponent&&!r._loadedComponent){let o=this.loader.loadComponent(r);return D([s,o]).pipe(Le())}else return s})}static \u0275fac=function(r){return new(r||t)(y(W),y(Ct),y(de),y(tn),y(vr))};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Bs=new C(""),Wc=(()=>{class t{urlSerializer;transitions;viewportScroller;zone;options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource="imperative";restoredId=0;store={};constructor(e,r,i,s,o={}){this.urlSerializer=e,this.transitions=r,this.viewportScroller=i,this.zone=s,this.options=o,o.scrollPositionRestoration||="disabled",o.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof ze?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof $?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof se&&e.code===Gt.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof Ht&&(e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(e,r){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new Ht(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,r))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(r){ti()};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})();function ud(t,...n){return we([{provide:ut,multi:!0,useValue:t},[],{provide:oe,useFactory:Vs,deps:[W]},{provide:Be,multi:!0,useFactory:$s},n.map(e=>e.\u0275providers)])}function Vs(t){return t.routerState.root}function yt(t,n){return{\u0275kind:t,\u0275providers:n}}function $s(){let t=p(je);return n=>{let e=t.get(Ve);if(n!==e.components[0])return;let r=t.get(W),i=t.get(Ws);t.get(wr)===1&&r.initialNavigation(),t.get(qs,null,hn.Optional)?.setUpPreloading(),t.get(Bs,null,hn.Optional)?.init(),r.resetRootComponentType(e.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var Ws=new C("",{factory:()=>new Z}),wr=new C("",{providedIn:"root",factory:()=>1});function qc(){return yt(2,[{provide:wr,useValue:0},{provide:Sn,multi:!0,deps:[je],useFactory:n=>{let e=n.get(wi,Promise.resolve());return()=>e.then(()=>new Promise(r=>{let i=n.get(W),s=n.get(Ws);_s(i,()=>{r(!0)}),n.get(br).afterPreactivation=()=>(r(!0),s.closed?f(void 0):s),i.initialNavigation()}))}}])}function Gc(){return yt(3,[{provide:Sn,multi:!0,useFactory:()=>{let n=p(W);return()=>{n.setUpLocationChangeListener()}}},{provide:wr,useValue:2}])}var qs=new C("");function Jc(t){return yt(0,[{provide:qs,useExisting:$c},{provide:tn,useExisting:t}])}function Hc(){return yt(8,[rs,{provide:nn,useExisting:rs}])}function Yc(t){let n=[{provide:Ns,useValue:Dc},{provide:Ls,useValue:h({skipNextTransition:!!t?.skipInitialTransition},t)}];return yt(9,n)}var Xc=[We,{provide:pt,useClass:xe},W,gt,{provide:oe,useFactory:Vs,deps:[W]},vr,[]],hd=(()=>{class t{constructor(){}static forRoot(e,r){return{ngModule:t,providers:[Xc,[],{provide:ut,multi:!0,useValue:e},[],r?.errorHandler?{provide:js,useValue:r.errorHandler}:[],{provide:vt,useValue:r||{}},r?.useHash?Zc():Qc(),Kc(),r?.preloadingStrategy?Jc(r.preloadingStrategy).\u0275providers:[],r?.initialNavigation?el(r):[],r?.bindToComponentInputs?Hc().\u0275providers:[],r?.enableViewTransitions?Yc().\u0275providers:[],tl()]}}static forChild(e){return{ngModule:t,providers:[{provide:ut,multi:!0,useValue:e}]}}static \u0275fac=function(r){return new(r||t)};static \u0275mod=Tt({type:t});static \u0275inj=wt({})}return t})();function Kc(){return{provide:Bs,useFactory:()=>{let t=p(Ri),n=p(G),e=p(vt),r=p(br),i=p(pt);return e.scrollOffset&&t.setOffset(e.scrollOffset),new Wc(i,r,t,n,e)}}}function Zc(){return{provide:$e,useClass:Si}}function Qc(){return{provide:$e,useClass:ki}}function el(t){return[t.initialNavigation==="disabled"?Gc().\u0275providers:[],t.initialNavigation==="enabledBlocking"?qc().\u0275providers:[]]}var cs=new C("");function tl(){return[{provide:cs,useFactory:$s},{provide:Be,multi:!0,useExisting:cs}]}var fd="JunaPapa's Blog is a comprehensive website where you can find a variety of games I developed for casual play on the web, useful developer tools, and articles with development tips and troubleshooting advice.",rl=(o=>(o[o.format=0]="format",o[o.string2Json=1]="string2Json",o[o.json2String=2]="json2String",o[o.json2CSharp=3]="json2CSharp",o[o.base64Encode=4]="base64Encode",o[o.base64Decode=5]="base64Decode",o))(rl||{}),Gs=[{category:"csharp",label:"[C#] Convert enum type to string during JSON Serialization",icon:"pi pi-file",routerLink:"articles/csharp/23",keywords:"C#, ENUM, enumToString, JSON, Serialization, \uC5F4\uAC70\uD615\uC744 \uBB38\uC790\uC5F4\uB85C \uC9C1\uB82C\uD654, \uC9C1\uB82C\uD654"},{category:"csharp",label:"[C#][Json.Net] Using SelectToken/SelectTokens",icon:"pi pi-file",routerLink:"articles/csharp/24",keywords:".NET, C#, Json.NET, jsonpath, LINQ, SelectToken, SelectTokens"},{category:"csharp",label:"[C#] Swapping the Values of Two Variables",icon:"pi pi-file",routerLink:"articles/csharp/32",keywords:"C#, C# 7.0, SWAP, tuple"},{category:"csharp",label:"[C#][NLog] Creating a Callback Function That is Called Every Time a Log Message is Generated",icon:"pi pi-file",routerLink:"articles/csharp/34",keywords:"C#, Callback, MethodCallTarget, nlog, nlog message hook"},{category:"csharp",label:"[C#] 'Could not find a part of the path...' Error When Publishing a Project",icon:"pi pi-file",routerLink:"articles/csharp/38",keywords:"C#, could not find a part of the path, publish error, Visual Studio, windows long filename"},{category:"csharp",label:"[C#] Encrypting User Passwords Using the HMACSHA256 Class",icon:"pi pi-file",routerLink:"articles/csharp/40",keywords:"C#, HAMCSHA256, hashing, SHA256, \uBE44\uBC00\uBC88\uD638 \uC554\uD638\uD654, \uC554\uD638\uD654"},{category:"csharp",label:"[C#] Using C# in Jupyter Notebook",icon:"pi pi-file",routerLink:"articles/csharp/45",keywords:"C#, C# \uB178\uD2B8\uBD81\uB9CC\uB4E4\uAE30, C#\uC744 \uC8FC\uD53C\uD130 \uB178\uD2B8\uBD81\uC5D0\uC11C, dotnet-interactive, Jupyter Notebook, jupyter\uB178\uD2B8\uBD81, Microsoft.dotnet-interactive, \uC8FC\uD53C\uD130\uB178\uD2B8\uBD81"},{category:"csharp",label:"[C#] Improvements to Lambda Expressions in C# 10",icon:"pi pi-file",routerLink:"articles/csharp/47",keywords:".net6, C#, C# lambda expression, C# \uB78C\uB2E4\uC2DD, C# \uB78C\uB2E4\uD45C\uD604\uC2DD, c#10, lambda, Lambda Expression, \uB78C\uB2E4\uC2DD, \uB78C\uB2E4\uD45C\uD604\uC2DD"},{category:"csharp",label:"[C#] How to Serialize XML to JSON Using Json.NET",icon:"pi pi-file",routerLink:"articles/csharp/53",keywords:"C#, JSON, Json.NET, Serialization, XML, XMLtoJSON"},{category:"csharp",label:"[C#][.NET] Creating an MSI Installer with WixSharp",icon:"pi pi-file",routerLink:"articles/csharp/78",keywords:".NET, Installer GUI, WixSharp, WixToolset, wpf"},{category:"wpf",label:"[WPF/CommunityToolkit.Mvvm] 1. Write boilerplate code after creating the project",icon:"pi pi-file",routerLink:"articles/wpf/35",keywords:".net6, Boilerplate, CommunityToolkit.Mvvm, DependencyInjection, INotifyPropertyChanged, mvvm, MVVM Boilerplate, ObservableObject, ViewModel View\uC5D0 \uBC14\uC778\uB529, wpf"},{category:"wpf",label:"[WPF/CommunityToolkit.Mvvm] 2. Create a ViewModel and bind its member variables to the View",icon:"pi pi-file",routerLink:"articles/wpf/44",keywords:".net6, CommunityToolkit.Mvvm, mvvm, ObservableObject, ObservableProperty, Partial Class, wpf, \uB2F7\uB1376"},{category:"wpf",label:"[WPF/CommunityToolkit.Mvvm] 3. ObservableProperty\uC758 Change event callbacks",icon:"pi pi-file",routerLink:"articles/wpf/90",keywords:".net8, CommunityToolkit.Mvvm, mvvm, ObservableObject, ObservableProperty, Partial Class, propertychanged #changeeventcallbacks, wpf"},{category:"wpf",label:"[WPF/CommunityToolkit.Mvvm] 4. WeakReferenceMessenger",icon:"pi pi-file",routerLink:"articles/wpf/52",keywords:"C#, CommunityToolkit, mvvm, WeakReferenceMessenge, wpf"},{category:"jsts",label:"How to use NextJS + Prisma + PlanetScale",icon:"pi pi-file",routerLink:"articles/jsts/6",keywords:"nextjs, PlanetScale, Prisma, pscale, reactjs, SCOOP, serverless, ServerlessDB, ServerlessFunctions"}],kr=[{label:"\u{1F680} Speed Typing A to Z \u{1F680}",routerLink:"games/speedatoz",data:{title:"\u{1F680} Speed Typing A to Z \u{1F680}",subTitle:"Try typing alphabet A to Z as quick as you can!"}}],Sr={label:"Blog Articles",icon:"pi pi-list",items:[],routerLink:"article-list"},Js=[{label:"C#",icon:"pi pi-folder",routerLink:"article-category-list/csharp",category:"csharp"},{label:"WPF",icon:"pi pi-folder",routerLink:"article-category-list/wpf",category:"wpf"},{label:"JavaScript/TypeScript",icon:"pi pi-folder",routerLink:"article-category-list/jsts",category:"jsts"}],Tr=[{label:"JSON to C# Class",icon:"pi pi-wrench",routerLink:"json-tools/json-to-csclass",data:{title:"JSON to C# Class",subTitle:"Convert JSON to C# Class",sampleButtonLabel:"Load Sample JSON",actionButtonLabel:"Generate C# Code",mode:3}},{label:"JSON Formatter",icon:"pi pi-wrench",routerLink:"json-tools/formatter",data:{title:"JSON Formatter",subTitle:"Automatically format JSON string with indentations",sampleButtonLabel:"Load Sample JSON",actionButtonLabel:"Format JSON",mode:0}},{label:"Quote JSON text",icon:"pi pi-wrench",routerLink:"json-tools/json-to-string",data:{title:"Quote JSON text",subTitle:"Convert a JSON object to a string with quotes.",sampleButtonLabel:"Load Sample JSON",actionButtonLabel:"Quote JSON",mode:2}},{label:"Unquote JSON text",icon:"pi pi-wrench",routerLink:"json-tools/string-to-json",data:{title:"Unquote JSON text",subTitle:"Removes quotes from a quoted JSON string.",sampleButtonLabel:"Load Sample String",actionButtonLabel:"Unquote JSON",mode:1}}],Rr=[{label:"UUID Generator",icon:"pi pi-wrench",routerLink:"other-tools/uuid-generator",data:{title:"UUID Generator",subTitle:"Generate UUID"}},{label:"Base64 Encoding",icon:"pi pi-wrench",routerLink:"other-tools/base64-encode",data:{title:"Base64 Encoding",subTitle:"Encoding image or text to base64 text",sampleButtonLabel:"Load Sample String",actionButtonLabel:"Encode Base64",mode:4}},{label:"Base64 Decoding",icon:"pi pi-wrench",routerLink:"other-tools/base64-decode",data:{title:"Base64 Decoding",subTitle:"Decoding base64 text to image or text",sampleButtonLabel:"Load Sample String",actionButtonLabel:"Decode Base64",mode:5}},{label:"Bank Interest Calculator",icon:"pi pi-calculator",routerLink:"other-tools/toss-interest-calc",data:{title:"Toss Bank Interest Calculator",subTitle:"A simple tool to calculate interest for Toss Bank."}}],Cr=[{label:"Bitcoin Market Prices",icon:"pi pi-bitcoin",routerLink:"trading/bitcoin-prices",data:{title:"Bitcoin Market Prices",subTitle:"It compares the real-time Bitcoin market prices of Upbit and Binance, and calculates the Kimchi Premium."}}],Hs={label:"Home",icon:"pi pi-home",routerLink:""};var Mr=[{category:"csharp",id:23,content:`<p data-ke-size="size16">Normally, after JSON Serialization, the data is stored as a text file or in a database, but the\r
    enum values are stored in numeric form, which decreases readability when opening the JSON string. Therefore, it is\r
    common to store the enum type variable's value in a string format. In such cases, you can declare an attribute on a\r
    specific member variable as shown below.</p>\r
<br>\r
<pre id="code_1674099285182" class="csharp language-csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>    using Newtonsoft.Json;\r
        using Newtonsoft.Json.Converters;\r
        \r
        public enum CompanyType {\r
            Apple,\r
            Samsung,\r
        }\r
    \r
        public class Company\r
        {\r
            [JsonConverter(typeof(StringEnumConverter))]\r
            public CompanyType CompanyType { get; set; }\r
        }</code></pre>\r
<br>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">If the member variable is in the form of an array or list, you can specify the attribute as\r
    shown below.</p>\r
<br>\r
<pre id="code_1674103182054" class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>    using Newtonsoft.Json;\r
        using Newtonsoft.Json.Converters;\r
        \r
        public enum CompanyType {\r
            Apple,\r
            Samsung,\r
        }\r
    \r
        public class Company\r
        {\r
            [JsonConverter(typeof(StringEnumConverter))]\r
            public CompanyType CompanyType { get; set; }\r
            \r
            [JsonProperty(ItemConverterType = typeof(StringEnumConverter))]\r
            public List&lt;CompanyType&gt; CompanyTypes { get; set; }\r
        }</code></pre>\r
<p data-ke-size="size16">&nbsp;</p>`},{category:"csharp",id:24,content:`<p data-ke-size="size16">\r
</p>\r
Often, when dealing with variable JSON structures in C# or when you only need to extract or modify specific data within\r
a JSON, it is much more efficient to parse the JSON using JObject and then use the SelectToken/SelectTokens functions to\r
find the desired token and retrieve or manipulate its value, rather than creating individual classes to map the JSON\r
data.\r
<br><br>\r
Original text: <a href="https://www.newtonsoft.com/json/help/html/SelectToken.htm">https://www.newtonsoft.com/json/help/html/SelectToken.htm</a>\r
<p data-ke-size="size16">&nbsp;</p>\r
<h2 data-ke-size="size26"><b>1. SelectToken</b></h2>\r
&nbsp;SelectToken is a method that returns a JToken and uses a string path for the child tokens. SelectToken either\r
returns\r
the child token or, if it cannot find the token at the path location, returns a null reference. The path consists of\r
property names separated by dots and array indexes. For example: Manufacturers[0].Name.\r
<br>\r
<br>\r
<pre id="code_1674611980743" class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>JObject o = JObject.Parse(@"{\r
      'Stores': [\r
        'Lambton Quay',\r
        'Willis Street'\r
      ],\r
      'Manufacturers': [\r
        {\r
          'Name': 'Acme Co',\r
          'Products': [\r
            {\r
              'Name': 'Anvil',\r
              'Price': 50\r
            }\r
          ]\r
        },\r
        {\r
          'Name': 'Contoso',\r
          'Products': [\r
            {\r
              'Name': 'Elbow Grease',\r
              'Price': 99.95\r
            },\r
            {\r
              'Name': 'Headlight Fluid',\r
              'Price': 4\r
            }\r
          ]\r
        }\r
      ]\r
    }");\r
    \r
    string name = (string)o.SelectToken("Manufacturers[0].Name");\r
    // Acme Co\r
    \r
    decimal productPrice = (decimal)o.SelectToken("Manufacturers[0].Products[0].Price");\r
    // 50\r
    \r
    string productName = (string)o.SelectToken("Manufacturers[1].Products[0].Name");\r
    // Elbow Grease</code></pre>\r
<br>\r
<p data-ke-size="size16">&nbsp;</p>\r
<h2 data-ke-size="size26"><b>2. <span style="color: #000000;">SelectToken with JSONPath</span></b></h2>\r
&nbsp;You can use JSONPath (<a href="https://goessner.net/articles/JsonPath/" target="_blank"\r
  rel="noopener">https://goessner.net/articles/JsonPath/</a>) expressions to retrieve tokens\r
</p>\r
<br>\r
<pre id="code_1674612703318" class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>JObject o = JObject.Parse(@"{\r
      'Stores': [\r
        'Lambton Quay',\r
        'Willis Street'\r
      ],\r
      'Manufacturers': [\r
        {\r
          'Name': 'Acme Co',\r
          'Products': [\r
            {\r
              'Name': 'Anvil',\r
              'Price': 50\r
            }\r
          ]\r
        },\r
        {\r
          'Name': 'Contoso',\r
          'Products': [\r
            {\r
              'Name': 'Elbow Grease',\r
              'Price': 99.95\r
            },\r
            {\r
              'Name': 'Headlight Fluid',\r
              'Price': 4\r
            }\r
          ]\r
        }\r
      ]\r
    }");\r
    \r
    // manufacturer with the name 'Acme Co'\r
    JToken acme = o.SelectToken("$.Manufacturers[?(@.Name == 'Acme Co')]");\r
    \r
    Console.WriteLine(acme);\r
    // { "Name": "Acme Co", Products: [{ "Name": "Anvil", "Price": 50 }] }\r
    \r
    // name of all products priced 50 and above\r
    IEnumerable&lt;JToken&gt; pricyProducts = o.SelectTokens("$..Products[?(@.Price &gt;= 50)].Name");\r
    \r
    foreach (JToken item in pricyProducts)\r
    {\r
        Console.WriteLine(item);\r
    }\r
    // Anvil\r
    // Elbow Grease</code></pre>\r
<br>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<h2 data-ke-size="size26"><b>3. <span style="color: #000000;">SelectToken with LINQ</span></b></h2>\r
&nbsp;You can use the SelectToken function together with standard LINQ functions to retrieve tokens.\r
<br><br>\r
<pre id="code_1674612664768" class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>IList&lt;string&gt; storeNames = o.SelectToken("Stores").Select(s =&gt; (string)s).ToList();\r
    // Lambton Quay\r
    // Willis Street\r
    \r
    IList&lt;string&gt; firstProductNames = o["Manufacturers"].Select(m =&gt; (string)m.SelectToken("Products[1].Name")).ToList();\r
    // null\r
    // Headlight Fluid\r
    \r
    decimal totalPrice = o["Manufacturers"].Sum(m =&gt; (decimal)m.SelectToken("Products[0].Price"));\r
    // 149.95</code></pre>\r
<p data-ke-size="size16">&nbsp;</p>`},{category:"csharp",id:32,content:`<h3 data-ke-size="size23"><b>1. Classic Method</b></h3>\r
&nbsp;Declare an additional temporary variable, copy the value or reference of one of the two variables into it, and\r
then\r
perform the swap.\r
<br><br>\r
<pre id="code_1675746265918" class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>var a = 10;\r
var b = 20;\r
var temp = a;\r
a = b;\r
b = temp;</code></pre>\r
<p data-ke-size="size16">&nbsp;</p>\r
<h3 data-ke-size="size23"><b>2. Modern Method (C# 7.0 or later)</b></h3>\r
<p data-ke-size="size16">&nbsp;Using a tuple, you can achieve the swap in a single line.</p>\r
<br>\r
<pre id="code_1675746265918" class="csharp" data-ke-language="csharp"\r
    data-ke-type="codeblock"><code>(b, a) = (a, b)</code></pre>\r
<p data-ke-size="size16">&nbsp;</p>`},{category:"csharp",id:34,content:`<p data-ke-size="size16">&nbsp;Generally, when using NLog to generate log messages within multiple class libraries or\r
    multiple classes, there are times when you need to process the message each time a log message occurs and display it\r
    on the GUI, or publish it to a Message Broker like GRPC, WebSocket, or Kafka.</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">&nbsp;In such cases, you can easily implement it using the MethodCallTarget class of NLog as\r
    shown below.</p>\r
<br>\r
<pre id="code_1675818915815" class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>// Define the callback function.\r
var target = new MethodCallTarget("LogNotify", async (logEvent, parameters) =&gt;\r
{\r
    // Perform the desired processing here. If there are no asynchronous calls inside, remove the async above.\r
    if (logEvent.Level &gt; NLog.LogLevel.Debug)\r
    {\r
    ...\r
    }\r
});\r
\r
// Register the callback function to be called for all log message levels.\r
LogManager.Configuration.AddRuleForAllLevels(target);\r
\r
// Update the logger configuration.\r
LogManager.ReconfigExistingLoggers();</code></pre>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">The example from the official website's documentation (<a\r
        href="https://nlog-project.org/documentation/v2.0.1/html/T_NLog_Targets_MethodCallTarget.htm" target="_blank"\r
        rel="noopener">https://nlog-project.org/documentation/v2.0.1/html/T_NLog_Targets_MethodCallTarget.htm</a>) is as\r
    follows.</p>\r
<br>\r
<pre id="code_1675819002332" class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>using System;\r
using NLog;\r
using NLog.Targets;\r
using System.Diagnostics;\r
\r
public class Example\r
{\r
    public static void LogMethod(string level, string message)\r
    {\r
        Console.WriteLine("l: {0} m: {1}", level, message);\r
    }\r
    static void Main(string[] args)\r
    {\r
        MethodCallTarget target = new MethodCallTarget();\r
        target.ClassName = typeof(Example).AssemblyQualifiedName;\r
        target.MethodName = "LogMethod";\r
        target.Parameters.Add(new MethodCallParameter("\${level}"));\r
        target.Parameters.Add(new MethodCallParameter("\${message}"));\r
\r
        NLog.Config.SimpleConfigurator.ConfigureForTargetLogging(target, LogLevel.Debug);\r
\r
        Logger logger = LogManager.GetLogger("Example");\r
        logger.Debug("log message");\r
        logger.Error("error message");\r
    }\r
}</code></pre>\r
<p data-ke-size="size16">&nbsp;</p>`},{category:"csharp",id:38,content:`<p data-ke-size="size16">&nbsp;The main cause is that the file path is too long. Therefore, you can reduce the length of\r
    the path name by shortening the project folder name and placing it in a higher-level folder. However, if you\r
    inevitably need to place it in a folder with a long name and deep level, there is a way to change the Windows\r
    Registry.</p>\r
<p>\r
    <br>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fq3elr%2FbtrYSOA57ZX%2FK2rhXcu806po17zVI4z8B0%2Fimg.png"\r
        alt="Registry Editor Image">\r
    <br>\r
</p>\r
<p data-ke-size="size16">Go to the registry path below</p>\r
<br>\r
<pre id="code_1676171312093" class="bash" data-ke-language="bash"\r
    data-ke-type="codeblock"><code>Computer\\HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\FileSystem</code></pre>\r
<br>\r
<p data-ke-size="size16">Set LongPathsEnabled to 1 to solve the problem.</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">If the property does not exist, create a new DWORD type and set the value to 1. (No reboot\r
    required)</p>`},{category:"csharp",id:40,content:`<p data-ke-size="size16">By using the HMACSHA256 class in C#, you can easily convert a user's password into an encrypted\r
    string with very simple code.</p>\r
<br>\r
<pre id="code_1676461079220" class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>    public static class CredentialHelper\r
    {\r
        public static string GetHMACSHA256Hash(string username, string password)\r
        {\r
            var key = Encoding.ASCII.GetBytes(username);\r
            var data = Encoding.ASCII.GetBytes(password);\r
            return Convert.ToBase64String(new HMACSHA256(key).ComputeHash(data));\r
        }\r
    }</code></pre>\r
<br>\r
<p data-ke-size="size16">As shown above, you can create a static class and use the function to generate a hash string\r
    from the username and password entered by the user. You can then store this hash string and compare it with the hash\r
    generated from the username/password combination entered by the user during login to verify.</p>`},{category:"csharp",id:45,content:`<p data-ke-size="size16">&nbsp;Anyone who has used Python has probably used Jupyter Notebook. Using Jupyter Notebook is\r
    much more useful than simply storing or sharing commented source code, as it allows you to test various simple code\r
    blocks for playground purposes or create tutorial documents that you can directly modify and execute.</p>\r
<p data-ke-size="size16">&nbsp;Now, you can create notebooks with C# code in Jupyter Notebook. Assuming that you already\r
    have Anaconda/Miniconda environment or Python, Jupyter Notebook, and .Net development environment installed on your\r
    PC, you can simply execute the following command line commands in order.</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<h4 data-ke-size="size20"><b>1. Install Microsoft.dotnet-interactive.</b></h4>\r
<br>\r
<pre id="code_1677478512568" class="shell" data-ke-language="shell"\r
    data-ke-type="codeblock"><code>dotnet tool install --global Microsoft.dotnet-interactive</code></pre>\r
<br>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F6cSoU%2Fbtr0We4GUVN%2FdurNryODkXLtyvrXDWuaI0%2Fimg.png"\r
        alt="">\r
</p>\r
<br>\r
<p data-ke-size="size16">&nbsp;</p>\r
<h4 data-ke-size="size20"><b>2. Execute the command to install the .Net kernel for Jupyter notebook.</b></h4>\r
<br>\r
<pre id="code_1677478648471" class="shell" data-ke-language="shell"\r
    data-ke-type="codeblock"><code>dotnet-interactive jupyter install</code></pre>\r
<br>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fp26oC%2Fbtr0Oa9Fj6W%2FzF9EjmtUKzh5HlqddaKhc0%2Fimg.png"\r
        alt="">\r
</p>\r
<br>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">Now, if you run Jupyter notebook, you will see C# in the new notebook creation.</p>\r
<br>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F1Mu6r%2Fbtr01TMFQp7%2FtslKW80Fo5UHzzT3GjFYTk%2Fimg.png"\r
        alt="">\r
</p>\r
<br>\r
<p data-ke-size="size16">Now you can create notebooks with C# code as shown below.</p>\r
<br>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbur6GT%2Fbtr0Iv7UyE1%2F1iPw8NWGSFBcHy1G9EKFPk%2Fimg.png"\r
        alt="">\r
</p>\r
<p data-ke-size="size16">&nbsp;</p>`},{category:"csharp",id:47,content:`<p data-ke-size="size16">&nbsp;.NET 6 supports C# language version 10. Among various improvements, there have been some\r
    enhancements to lambda expressions. Let's take a look.</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">Original link: <a\r
        href="https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions#explicit-return-type"\r
        target="_blank"\r
        rel="noopener">https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions#explicit-return-type</a>\r
</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size20"><h2>1. Natural type of a lambda expression</h2></p>\r
<p data-ke-size="size16">&nbsp;In the past, assigning a lambda expression to a variable with a var type would result in\r
    an error, requiring explicit type declaration with Func&lt;string, int&gt;. Now, the compiler is smart enough to\r
    infer the return type from the lambda expression.</p>\r
<br>\r
<pre id="code_1677808725470" class="sql" data-ke-language="sql"\r
    data-ke-type="codeblock"><code>var parse = (string s) =&gt; int.Parse(s);</code></pre>\r
<br>\r
<p data-ke-size="size16">This should have been possible a long time ago... It seems like Microsoft is not working hard\r
    enough.</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<br>\r
<p data-ke-size="size18"><h2>2. You can now specify the return type of a lambda expression.</h2></p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">In the following lambda expression, the return type is ambiguous because it returns an int or a\r
    string based on the value of b, causing a compiler error. This often happens when multiple types need to be\r
    returned, and explicitly casting the return type can be cumbersome.</p>\r
<br>\r
<pre id="code_1677807045116" class="sql" data-ke-language="sql"\r
    data-ke-type="codeblock"><code>var choose = (bool b) =&gt; b ? 1 : "two"; // ERROR: Can't infer return type</code></pre>\r
<br>\r
<p data-ke-size="size16">Starting with C# 10, you can explicitly specify the return type in front of the lambda\r
    expression.</p>\r
<br>\r
<pre id="code_1677807053554" class="sql" data-ke-language="sql"\r
    data-ke-type="codeblock"><code>var choose = object (bool b) =&gt; b ? 1 : "two"; // Func&lt;bool, object&gt;</code></pre>\r
<br>\r
<p data-ke-size="size16">Personally, I wish the compiler would implicitly interpret such cases as object type without\r
    needing to explicitly write object. Sometimes C# feels a bit frustrating compared to other languages, but I hope\r
    many improvements will be made soon.</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<br>\r
<p data-ke-size="size18"><h2>3. Attributes</h2></p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">&nbsp;You can now specify attributes for lambda expressions or their parameters. Personally, I\r
    have never felt the need to specify attributes for lambda expressions, but it's always good to have more\r
    flexibility...</p>\r
<p data-ke-size="size16">&nbsp;You can specify attributes for lambda expressions as shown below</p>\r
<br>\r
<pre id="code_1677809135308" class="angelscript" data-ke-language="sql"\r
    data-ke-type="codeblock"><code>Func&lt;string?, int?&gt; parse = [ProvidesNullCheck] (s) =&gt; (s is not null) ? int.Parse(s) : null;</code></pre>\r
<br>\r
<p data-ke-size="size16">&nbsp;You can also specify attributes for each parameter or for the return value as shown\r
    below.&nbsp;</p>\r
<br>\r
<pre id="code_1677809202818" class="sql" data-ke-language="sql" data-ke-type="codeblock"><code>var concat = ([DisallowNull] string a, [DisallowNull] string b) =&gt; a + b;\r
var inc = [return: NotNullifNotNull(nameof(s))] (int? s) =&gt; s.HasValue ? s++ : null;</code></pre>\r
<br>\r
<p data-ke-size="size16">&nbsp;</p>`},{category:"csharp",id:53,content:`<p data-ke-size="size16">&nbsp;These days, when exchanging messages between different apps or services, complex\r
    structured data is mostly converted to JSON. Of course, there are still many places that use XML. Therefore, there\r
    are cases where the data received in XML needs to be serialized to JSON and stored or sent to another node.</p>\r
<p data-ke-size="size16">&nbsp;In such cases, you can easily serialize it with just a method call using Json.NET.</p>\r
<br>\r
<pre id="code_1679636243891" class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>string xml = @"&lt;?xml version='1.0' standalone='no'?&gt;\r
&lt;root&gt;\r
    &lt;person id='1'&gt;\r
    &lt;name&gt;Alan&lt;/name&gt;\r
    &lt;url&gt;http://www.google.com&lt;/url&gt;\r
    &lt;/person&gt;\r
    &lt;person id='2'&gt;\r
    &lt;name&gt;Louis&lt;/name&gt;\r
    &lt;url&gt;http://www.yahoo.com&lt;/url&gt;\r
    &lt;/person&gt;\r
&lt;/root&gt;";\r
\r
XmlDocument doc = new XmlDocument();\r
doc.LoadXml(xml);\r
\r
string json = JsonConvert.SerializeXmlNode(doc);\r
\r
Console.WriteLine(json);\r
// {\r
//   "?xml": {\r
//     "@version": "1.0",\r
//     "@standalone": "no"\r
//   },\r
//   "root": {\r
//     "person": [\r
//       {\r
//         "@id": "1",\r
//         "name": "Alan",\r
//         "url": "http://www.google.com"\r
//       },\r
//       {\r
//         "@id": "2",\r
//         "name": "Louis",\r
//         "url": "http://www.yahoo.com"\r
//       }\r
//     ]\r
//   }\r
// }</code></pre>\r
<br>\r
<p data-ke-size="size16">Original text: <a href="https://www.newtonsoft.com/json/help/html/ConvertXmlToJson.htm"\r
        target="_blank" rel="noopener">https://www.newtonsoft.com/json/help/html/ConvertXmlToJson.htm</a></p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">&nbsp;</p>`},{category:"csharp",id:78,content:`<h2 data-ke-size="size26"><b>1. Introduction to WixSharp</b></h2>\r
<p data-ke-size="size16">&nbsp;If you have ever created an installation file for deploying Windows Desktop applications,\r
    you might have used the Wix toolset at least once. It is a powerful tool provided for free as open-source, but it\r
    has the inconvenience of having to write XML tags one by one. Especially for customizing the installation dialog,\r
    you need to specify the coordinates of each control one by one, and to verify it, you have to create the msi file\r
    and run it, which is quite inconvenient.</p>\r
<p data-ke-size="size16">&nbsp;WixSharp is a great tool that allows you to write these inconvenient XML tags in C# code.\r
    In particular, it is very convenient because you can implement the harvest of the installation target files simply\r
    using C# Linq without having to learn how to use the heat command and filter methods separately, and you can\r
    customize the WPF view directly on the designer screen.</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">Github: <a href="https://github.com/oleg-shilo/wixsharp" target="_blank"\r
        rel="noopener">https://github.com/oleg-shilo/wixsharp</a></p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<h2 data-ke-size="size26"><b>2. Installing WixSharp VS Extension</b></h2>\r
<p data-ke-size="size16">&nbsp;To use WixSharp, open the Visual Studio 2022 - Extensions menu =&gt; Manage Extensions\r
    window, search for wixsharp, and install the WixSharp Project Templates.</p>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FPq8Y4%2Fbtsq0DYXMLn%2FQPDRoXQKpT4TF1VCG2jp4k%2Fimg.png"\r
        alt="">\r
</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<h2 data-ke-size="size26"><b>3. Creating a WixSharp Project</b></h2>\r
<p data-ke-size="size16">&nbsp;First, create a solution named WixSharpTest and a console application project named\r
    MyApp.</p>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FQIv6m%2FbtsqYZ9TS8N%2FE1MENWBebzwK7mtFqpIbPk%2Fimg.png"\r
        alt="">\r
\r
    <br>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEMr9o%2FbtsqZDLBLzg%2FM4lv1ZrSjTZqWsgrq2lq9K%2Fimg.png"\r
        alt="">\r
</p>\r
<br>\r
<br>\r
<p data-ke-size="size16">Right-click on the solution and add a new project. Search for WixSharp, and several project\r
    templates will appear. Select Custom WPF UI.</p>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbuULbX%2FbtsqYDF0Djb%2FNzkPGwuuv9CkXVgZMVWSqK%2Fimg.png"\r
        alt="">\r
</p>\r
<br>\r
<p data-ke-size="size16">Name the project MyAppInstaller.</p>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcV1L1T%2Fbtsq2h1UOtT%2FDiWprQFm6Jc5BBDkojMdak%2Fimg.png"\r
        alt="">\r
</p>\r
<br>\r
<p data-ke-size="size16">Since the template references older versions of NuGet packages, update them to the latest\r
    versions.</p>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdMInkm%2Fbtsq1ctgLCE%2FSthjrGu37RcoqSrZQhwRT1%2Fimg.png"\r
        alt="">\r
    <br>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FR2v8F%2FbtsqYZB0y9e%2FV8gNF8clKvREYq7cA92q1k%2Fimg.png"\r
        alt="">\r
</p>\r
<br>\r
<p data-ke-size="size16">&nbsp;</p>\r
<h2 data-ke-size="size26"><b>4. Building the Target Project and Installer Project</b></h2>\r
<p data-ke-size="size16">&nbsp;Modify the Program.cs file of the MyAppInstaller project as follows.</p>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdfJY9k%2Fbtsq1bHMDoS%2FWBiipLpWbIttoqOEK13cIk%2Fimg.png"\r
        alt="">\r
</p>\r
<br>\r
<pre id="code_1691759011226" class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>using System;\r
    using System.Windows.Forms;\r
    using WixSharp;\r
    using WixSharp.UI.WPF;\r
    \r
    namespace MyAppInstaller\r
    {\r
        internal class Program\r
        {\r
            static void Main()\r
            {\r
                var productName = "MyApp";\r
                var companyName = "HiperzStudio";\r
    \r
                var project = new ManagedProject($"{productName}",\r
                                  new Dir($@"%ProgramFiles%\\{companyName}\\{productName}",\r
                                      new Files("*.*")));\r
    \r
                project.GUID = new Guid("6fe30b47-2577-43ad-9095-1861ba25889b");\r
    \r
                // project.ManagedUI = ManagedUI.DefaultWpf; // all stock UI dialogs\r
    \r
                //custom set of UI WPF dialogs\r
                project.ManagedUI = new ManagedUI();\r
    \r
                project.ManagedUI.InstallDialogs.Add&lt;MyAppInstaller.WelcomeDialog&gt;()\r
                                                .Add&lt;MyAppInstaller.LicenceDialog&gt;()\r
                                                .Add&lt;MyAppInstaller.FeaturesDialog&gt;()\r
                                                .Add&lt;MyAppInstaller.InstallDirDialog&gt;()\r
                                                .Add&lt;MyAppInstaller.ProgressDialog&gt;()\r
                                                .Add&lt;MyAppInstaller.ExitDialog&gt;();\r
    \r
                project.ManagedUI.ModifyDialogs.Add&lt;MyAppInstaller.MaintenanceTypeDialog&gt;()\r
                                               .Add&lt;MyAppInstaller.FeaturesDialog&gt;()\r
                                               .Add&lt;MyAppInstaller.ProgressDialog&gt;()\r
                                               .Add&lt;MyAppInstaller.ExitDialog&gt;();\r
    \r
                // Location of the application's binary files to be deployed\r
                project.SourceBaseDir = System.IO.Path.Combine(System.IO.Directory.GetCurrentDirectory(), @"..\\MyApp\\bin\\debug\\net6.0");\r
\r
                // Folder to create MSI\r
                project.OutDir = System.IO.Path.Combine(System.IO.Directory.GetCurrentDirectory(), @"bin\\deployment");\r
    \r
                project.BuildMsi();\r
            }\r
        }\r
    }</code></pre>\r
<br>\r
<p data-ke-size="size16">Now, if you build MyApp and then build MyAppInstaller, an msi file will be created in the\r
    bin\\deployment folder.</p>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbllnZC%2Fbtsq1I6qRG6%2FmqPG5GdCCoANcJMLTSD350%2Fimg.png"\r
        alt="">\r
    <br>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtmSjq%2FbtsqZtWLWlG%2FPuCn4mBHVXrupxL187ysnk%2Fimg.png"\r
        alt="">\r
</p>\r
<br>\r
<p data-ke-size="size16">When you run MyApp.msi, you will see the installation GUI as shown below. It's very simple,\r
    right?</p>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FT5ybc%2Fbtsq1aITxRS%2FxTkneKLzIjEOLkBHw5YTKK%2Fimg.png"\r
        alt="">\r
</p>\r
<br>\r
<p data-ke-size="size16">Now, if you proceed with the installation, you can see that it is installed correctly under the\r
    Program Files folder as shown below.</p>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbLGZe6%2Fbtsq2kYDXlK%2FK3raCASSVuXJqT1CxjoP10%2Fimg.png"\r
        alt="">\r
</p>\r
<br>\r
<p data-ke-size="size16">You can also see that MyApp appears in the list in the Windows Add or Remove Programs console\r
    as shown below.</p>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdCfM0i%2FbtsqZbB4fYi%2Fkf5PeDtwjdD7qShdtk6R4k%2Fimg.png"\r
        alt="">\r
</p>\r
<br>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">In the next post, we will learn how to filter the target files for deployment and create\r
    shortcut icons on the desktop and start menu.</p>`},{category:"jsts",id:6,content:`<p data-ke-size="size16">\r
  First, go to the PlanetScale (<a href="https://planetscale.com/" target="_blank" rel="noopener"\r
    >https://planetscale.com/</a\r
  >) website and complete the account creation process.\r
</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">\r
  Next, to install the PlanetScale CLI, open a PowerShell terminal window and enter the following command to install\r
  scoop. <span style="letter-spacing: 0px">&nbsp;</span><span style="letter-spacing: 0px">(Reference:&nbsp;</span\r
  ><a style="letter-spacing: 0px" href="https://scoop.sh/)">https://scoop.sh/)</a>\r
</p>\r
<pre\r
  id="code_1672108904004"\r
  class="bash"\r
  data-ke-language="bash"\r
  data-ke-type="codeblock"\r
><code>Set-ExecutionPolicy RemoteSigned -Scope CurrentUser # Optional: Needed to run a remote script the first time\r
irm get.scoop.sh | iex</code></pre>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">\r
  After installing scoop, install pscale. <span>(Reference:<span>&nbsp;</span></span\r
  ><a href="https://github.com/planetscale/cli#installation)">https://github.com/planetscale/cli#installation)</a>\r
</p>\r
<pre\r
  id="code_1672109068281"\r
  class="bash"\r
  data-ke-language="bash"\r
  data-ke-type="codeblock"\r
><code>scoop bucket add pscale https://github.com/planetscale/scoop-bucket.git\r
scoop install pscale mysql</code></pre>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">Now that the PlanetScale CLI is installed, create a new NextJS project to test it.</p>\r
<pre class="autoit"><code>npx create-next-app@latest</code></pre>\r
<p data-ke-size="size16">Enter the project folder and install the prisma package.</p>\r
<pre id="code_1672107607906" class="coffeescript" data-ke-language="bash" data-ke-type="codeblock"><code>npm i prisma -D\r
npm i @prisma/client</code></pre>\r
<p data-ke-size="size16">\r
  <span style="background-color: #ffffff; color: #222222">Enter the prisma initialization command.</span>\r
</p>\r
<pre\r
  id="code_1672107790577"\r
  class="bash"\r
  data-ke-language="bash"\r
  data-ke-type="codeblock"\r
><code>npx prisma init</code></pre>\r
<p data-ke-size="size16">After running the initialization command, the schema.prisma and .env files will be created.</p>\r
<p>\r
  <img\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F5VEZE%2FbtrUL7iGXPE%2F98Gb1t9Df3w0d2MBoYjZl0%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p data-ke-size="size16">Install the vscode extension to conveniently edit the schema.</p>\r
<p>\r
  <img\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fq4w4Y%2FbtrUKYGkoVo%2Fz0t72UCIFAZtPYuG82UTFK%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p data-ke-size="size16">\r
  Define the schema of the table to be used in the schema.prisma file as shown below. For detailed instructions on how\r
  to define the prisma schema, please refer to\r
  <a\r
    href="https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#model-field-scalar-types"\r
    target="_blank"\r
    rel="noopener"\r
    >https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#model-field-scalar-types</a\r
  >.\r
</p>\r
<p data-ke-size="size16">Change the db provider in the default schema from postgresql to mysql.</p>\r
<pre\r
  id="code_1672108346784"\r
  class="bash"\r
  data-ke-language="bash"\r
  data-ke-type="codeblock"\r
><code>// This is your Prisma schema file,\r
// learn more about it in the docs: https://pris.ly/d/prisma-schema\r
\r
generator client {\r
    provider = "prisma-client-js"\r
}\r
\r
datasource db {\r
    provider = "mysql"\r
    url      = env("DATABASE_URL")\r
}\r
\r
model Test {\r
    id   Int    @id @default(autoincrement())\r
    name String\r
}</code></pre>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">To connect to PlanetScale, enter the following command to log in to the PlanetScale site.</p>\r
<pre\r
  id="code_1672109997011"\r
  class="bash"\r
  data-ke-language="bash"\r
  data-ke-type="codeblock"\r
><code>pscale auth login</code></pre>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">After logging in, check the login completion message in the terminal window as shown below.</p>\r
<p>\r
  <img\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdnPv1c%2FbtrUHR824uY%2FUxQmz2OuzOJ3CiZsXrhInK%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">\r
  Now, to connect to the database created in PlanetScale, enter the following command. (For example, if the DB name is\r
  mytestdb)\r
</p>\r
<pre\r
  id="code_1672110969739"\r
  class="bash"\r
  data-ke-language="bash"\r
  data-ke-type="codeblock"\r
><code>pscale connect mytestdb</code></pre>\r
<p>\r
  <img\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F86cvM%2FbtrUDiTSGFg%2FSi0F7Yk4iuRWjRCo0o92V1%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">Change the DATABASE_URL in the .env file as follows.</p>\r
<pre\r
  id="code_1672111109023"\r
  class="bash"\r
  data-ke-language="bash"\r
  data-ke-type="codeblock"\r
><code>DATABASE_URL="mysql://127.0.0.1:3306/mytestdb"</code></pre>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">Enter the following command to create the table model defined in schema.prisma in the DB.</p>\r
<pre\r
  id="code_1672111260682"\r
  class="bash"\r
  data-ke-language="bash"\r
  data-ke-type="codeblock"\r
><code>npx prisma db push</code></pre>\r
<p>\r
  <img\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F4TIew%2FbtrUIgt2Vll%2FX9L7VOxG5n698KHKKwTUak%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">\r
  Once the push is successfully completed, you can check that a new table has been created on the PlanetScale website.\r
</p>\r
<p>\r
  <img\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbpUKVD%2FbtrUHStpLzH%2Fw62M9Pnb3277R1iOknKo4K%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">Click on Tables on the screen above to check the created table schema.</p>\r
<p>\r
  <img\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FDdYcG%2FbtrUBa9Edku%2FWpJNS8tcr9yuJ612fygP31%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p data-ke-size="size16">\r
  Once you have completed the above steps, you can now read and write to the DB created in PlanetScale from NextJS.\r
</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
`},{category:"wpf",id:35,content:`<p data-ke-size="size16">\u203B. This screenshot is based on Visual Studio 2022.</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<h2 data-ke-size="size26"><b>1. Open Visual Studio and create a new WPF project.</b></h2>\r
<p data-ke-size="size16">Search for WPF and select the WPF Application project template.</p>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FVTvhj%2FbtrYqLYRGCK%2FCVGWVkD6S56zMm9m4EJKjK%2Fimg.png" alt="">\r
</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">Specify the project path, solution name, and project name.</p>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FDA6XA%2FbtrYrmYB9nD%2FKyJcVO6Svh70neIvwRTbE0%2Fimg.png" alt="">\r
</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">Since this explanation is based on .Net 6.0 or higher, select 6.0.</p>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FMt23t%2FbtrYtxLWmVB%2F43bmNdFQGQFcd6tVdjsUck%2Fimg.png" alt="">\r
</p>\r
<p data-ke-size="size16">\r
    Once the project is created, check the solution and files in the project in Solution Explorer as shown below.\r
</p>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F5Qj6D%2FbtrYrm5oBFJ%2FJNdqNQCWcTK83vptnCS9F1%2Fimg.png" alt="">\r
</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<h2 data-ke-size="size26"><b>2. Install NuGet Packages</b></h2>\r
<p data-ke-size="size16">\r
    Install the following packages from the NuGet Package Manager or open the project file by double-clicking the project (MyTestApp) in Solution Explorer and add the following PackageReference tags directly and save.\r
</p>\r
<pre id="code_1675820933085" class="html xml" data-ke-language="html" data-ke-type="codeblock"><code>  &lt;ItemGroup&gt;\r
    &lt;PackageReference Include="CommunityToolkit.Mvvm" Version="8.1.0" /&gt;\r
    &lt;PackageReference Include="Microsoft.Extensions.DependencyInjection" Version="7.0.0" /&gt;\r
    &lt;/ItemGroup&gt;</code></pre>\r
<p data-ke-size="size16">\u203B. I personally do not use the Nullable option, so I removed it.</p>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F5phz4%2FbtrYrjnoWEc%2F2kDBKAX7T7glKmyHHyfxzk%2Fimg.png" alt="">\r
</p>\r
<p data-ke-size="size18">&nbsp;</p>\r
<h2 data-ke-size="size26"><b>3. Create Folders and MainWindowViewModel</b></h2>\r
<p data-ke-size="size16">\r
    Create two folders named Views and ViewModels in the project, then move the MainWindow.xaml file to the Views folder. The folder names are personal preferences, so you can name them as you like.\r
</p>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbvGIAt%2FbtrYrUOtYEf%2FwXrshuzzbIje5jKcAbB3c0%2Fimg.png" alt="">\r
</p>\r
<p data-ke-size="size16"></p>\r
    Since the MainWindow.xaml file has been moved to the Views folder, modify the StartupUri in App.xaml as follows.\r
</p>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FUTt3R%2FbtrYriIMzz7%2Fffs3KylhMNrhHharALeE20%2Fimg.png" alt="">\r
</p>\r
<p data-ke-size="size16">Create a new class file named MainWindowViewModel.cs in the ViewModels folder.</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">\r
    To use the code generation feature of the MVVM toolkit, add the partial keyword and define the class as inheriting from ObservableObject as follows.\r
</p>\r
<pre\r
    id="code_1675821808551"\r
    class="csharp"\r
    data-ke-language="csharp"\r
    data-ke-type="codeblock"\r
><code>using CommunityToolkit.Mvvm.ComponentModel;\r
\r
namespace MyTestApp.ViewModels\r
{\r
        public partial class MainWindowViewModel : ObservableObject\r
        {\r
        }\r
}</code></pre>\r
<p data-ke-size="size16"></p>\r
    Since C# does not support multiple inheritance, if the ViewModel needs to inherit from a specific class, declare the INotifyPropertyChanged attribute instead of inheriting from ObservableObject as follows.\r
</p>\r
<pre\r
    id="code_1675822057724"\r
    class="csharp"\r
    data-ke-language="csharp"\r
    data-ke-type="codeblock"\r
><code>using CommunityToolkit.Mvvm.ComponentModel;\r
\r
namespace MyTestApp.ViewModels\r
{\r
        public class MyBaseClass\r
        {\r
        }\r
\r
        [INotifyPropertyChanged]\r
        public partial class MainWindowViewModel : MyBaseClass\r
        {\r
                public MainWindowViewModel()\r
                {\r
                }\r
        }\r
}</code></pre>\r
<p data-ke-size="size16">&nbsp;</p>\r
<h2 data-ke-size="size26"><b>4. Create ViewModel Locator Class</b></h2>\r
<p data-ke-size="size16">Create a VmLocator.cs file in the project.</p>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FAwX2k%2FbtrYqvhQRG3%2FGYdgAh1N0I8KEgEnes5kq0%2Fimg.png" alt="">\r
</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">\r
    To use Dependency Injection in the ViewModel, define the dependencies in this file as follows.\r
</p>\r
<pre\r
    id="code_1675822475503"\r
    class="csharp"\r
    data-ke-language="csharp"\r
    data-ke-type="codeblock"\r
><code>using Microsoft.Extensions.DependencyInjection;\r
using MyTestApp.ViewModels;\r
using System;\r
\r
namespace MyTestApp\r
{\r
        public class VmLocator\r
        {\r
                public IServiceProvider Services { get; }\r
\r
                public VmLocator()\r
                {\r
                        var services = new ServiceCollection();\r
\r
                        services.AddTransient&lt;MainWindowViewModel&gt;();\r
\r
                        Services = services.BuildServiceProvider();\r
                }\r
\r
                public MainWindowViewModel MainWindowVM =&gt; Services.GetService&lt;MainWindowViewModel&gt;();\r
        }\r
}</code></pre>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">\r
    Now, add a tag in App.xaml to create an instance of VmLocator when the app runs.\r
</p>\r
<pre\r
    id="code_1675822744263"\r
    class="html xml"\r
    data-ke-language="html"\r
    data-ke-type="codeblock"\r
><code>&lt;Application x:Class="MyTestApp.App"\r
                         xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"\r
                         xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\r
                         xmlns:local="clr-namespace:MyTestApp"\r
                         StartupUri="Views/MainWindow.xaml"&gt;\r
        &lt;Application.Resources&gt;\r
                &lt;ResourceDictionary&gt;\r
                        &lt;local:VmLocator x:Key="VmLocator" /&gt;\r
                &lt;/ResourceDictionary&gt;\r
        &lt;/Application.Resources&gt;\r
&lt;/Application&gt;</code></pre>\r
<p data-ke-size="size16">&nbsp;</p>\r
<h2 data-ke-size="size26"><b>5. Bind ViewModel to View</b></h2>\r
<p data-ke-size="size16">Bind the DataContext in the MainWindow.xaml file to MainWindowVM as follows.</p>\r
<pre\r
    id="code_1675822930992"\r
    class="html xml"\r
    data-ke-language="html"\r
    data-ke-type="codeblock"\r
><code>&lt;Window x:Class="MyTestApp.MainWindow"\r
                xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"\r
                xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\r
                xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\r
                xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\r
                xmlns:local="clr-namespace:MyTestApp"\r
                mc:Ignorable="d"\r
                Title="MainWindow" Height="450" Width="800"\r
                DataContext="{Binding Source={StaticResource VmLocator}, Path=MainWindowVM}"&gt;\r
        &lt;Grid&gt;\r
\r
        &lt;/Grid&gt;\r
&lt;/Window&gt;</code></pre>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16"></p>\r
    This is the boilerplate code for developing a WPF app using the MVVM pattern. Add new Views to the Views folder and the corresponding ViewModels to the ViewModels folder. Then, declare the ViewModel instance in the VmLocator to be created by the Dependency Injection service and bind it to the View's DataContext in the same way as MainWindowVM.\r
</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
`},{category:"wpf",id:44,content:`<p data-ke-size="size16">\r
  In the previous post, we explained how to create a MainWindowViewModel class that inherits from ObservableObject in\r
  the ViewModels folder and bind it to the DataContext of the MainWindow.xaml view.\r
</p>\r
<p>\r
  <img\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNdLnZ%2Fbtr0JBk4UNZ%2FMmYZK5kjckFZYzn9uM3Ho1%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p data-ke-size="size16">\r
  Now, let's declare member variables in the created ViewModel and bind them to the TextBox control in the View.\r
</p>\r
<p data-ke-size="size16">\r
  When coding with the traditional MVVM pattern, the most annoying part was declaring member variables and notifying the\r
  PropertyChange event for each variable as shown below.\r
</p>\r
<pre\r
  id="code_1677248181508"\r
  class="csharp"\r
  data-ke-language="csharp"\r
  data-ke-type="codeblock"\r
><code>namespace MyTestApp.ViewModels\r
{\r
    public class MainWindowViewModel : INotifyPropertyChanged\r
    {\r
        public event PropertyChangedEventHandler PropertyChanged;\r
\r
        public void OnPropertyChanged([CallerMemberName] string propertyName = null)\r
        {\r
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));\r
        }\r
\r
        private string title;\r
        public string Title\r
        {\r
            get\r
            {\r
                return title;\r
            }\r
            set\r
            {\r
                title = value;\r
                OnPropertyChanged();\r
            }\r
        }\r
     }\r
 }</code></pre>\r
<p data-ke-size="size16">\r
  Declaring a single variable is so verbose, and if you have to write 10 or 20 more, the amount of coding is\r
  considerable. It also makes the code feel cluttered. However, with CommunityToolkit.Mvvm in .Net 6 or higher, you can\r
  simply add an attribute, and the Code Generator will automatically generate the above code at compile time.\r
</p>\r
<p data-ke-size="size16">So the code becomes very simple as shown below. Excellent~!</p>\r
<pre\r
  id="code_1677247755753"\r
  class="csharp"\r
  data-ke-language="csharp"\r
  data-ke-type="codeblock"\r
><code>using CommunityToolkit.Mvvm.ComponentModel;\r
\r
namespace MyTestApp.ViewModels\r
{\r
    public partial class MainWindowViewModel : ObservableObject\r
    {\r
        [ObservableProperty]\r
        private string title;\r
\r
        public MainWindowViewModel() \r
        {\r
            Title = "Initial Value";\r
        }\r
    }\r
}</code></pre>\r
<p data-ke-size="size16">\r
  When declaring member variables, you must use private and start the variable name with a lowercase letter. This is\r
  because the Code Generator creates a public variable with the same name starting with an uppercase letter.\r
</p>\r
<p data-ke-size="size16">\r
  Do not use getter/setter when declaring variables like title above. If you sometimes mindlessly add { get; set; }, you\r
  might waste precious time wondering why VS throws an error...\r
</p>\r
<p data-ke-size="size16">\r
  To use the above attribute for Code Generation, you need to add the partial keyword to the class. This is because the\r
  Code Generator creates a partial class with the same name in another file.\r
</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">Now, open MainWindowView.xaml and add a TextBox control to the View.</p>\r
<pre\r
  id="code_1677249234033"\r
  class="html xml"\r
  data-ke-language="html"\r
  data-ke-type="codeblock"\r
><code>&lt;Window x:Class="MyTestApp.MainWindow"\r
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"\r
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\r
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\r
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\r
        xmlns:local="clr-namespace:MyTestApp"\r
        mc:Ignorable="d"\r
        Title="MainWindow" Height="450" Width="800"\r
        DataContext="{Binding Source={StaticResource VmLocator}, Path=MainWindowVM}"&gt;\r
    &lt;Grid&gt;\r
        &lt;TextBox&gt;&lt;/TextBox&gt;\r
    &lt;/Grid&gt;\r
&lt;/Window&gt;</code></pre>\r
<p data-ke-size="size16">\r
  Now, bind the Text property of the TextBox control to the Title declared in the ViewModel as shown below.\r
</p>\r
<pre id="code_1677249303180" class="html xml" data-ke-language="html" data-ke-type="codeblock"><code>    &lt;Grid&gt;\r
        &lt;TextBox Text="{Binding Title}"&gt;&lt;/TextBox&gt;\r
    &lt;/Grid&gt;</code></pre>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">\r
  Press F5 to run the program, and since the constructor of the ViewModel assigns "Initial Value" to Title, the value\r
  will be displayed in the TextBox as shown below.\r
</p>\r
<p>\r
  <img\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FWudcX%2Fbtr0KG0MZra%2FjZhgOVAh1PCUNR9bRJPbm0%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p data-ke-size="size16">\r
  In this post, we learned how to declare variables in the ViewModel and bind those variables to controls in the View.\r
  In the next post, we will learn how to hook events in the ViewModel when the bound value changes due to user input.\r
</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
`},{category:"wpf",id:52,content:`<p data-ke-size="size16">&nbsp;When developing with the MVVM pattern, there are many cases where you need to deliver events from one ViewModel to another or from a ViewModel to a View in a 1:1 or 1:N manner. In this case, you can create a static class to handle events accessible globally, or create a service class to handle event variables accessible from multiple ViewModels through dependency injection. However, using the WeakReferenceMessenger class provided by CommunityToolkit, you can easily implement a Pub/Sub style event queue.</p>\r
<p data-ke-size="size16">&nbsp;Although it is simple and convenient to use, in practice, there are many cases where you need to apply debounce time to the event stream or use the event buffer as a ring buffer, which is not possible with WeakReferenceMessenger, so it is a bit disappointing.</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">&nbsp;To understand the simple usage, I will explain based on the code written in the previous article.</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">&nbsp;Goal: When a button is clicked in the View, use WeakReferenceMessenger to send a message from MainWindowViewModel to MainWindowView to display "Hello World" in the TextBox control.</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">&nbsp;It is easy to handle events from View to ViewModel through binding, but it is not easy to make the View perform a specific action by triggering an arbitrary event from the ViewModel, so we will implement this using WeakReferenceMessenger.</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<h2 data-ke-size="size26"><b>1. Create Message Class</b></h2>\r
<p data-ke-size="size16">Create a Messages folder in the project and create a TestMessage class file.</p>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdgUn1M%2Fbtr4vo30Yhg%2FZCvgshI0fiAXBdJVfHAya1%2Fimg.png" alt="">    \r
</p>\r
<pre id="code_1679055381567" class="html xml" data-ke-language="html" data-ke-type="codeblock"><code>using CommunityToolkit.Mvvm.Messaging.Messages;\r
\r
namespace MyTestApp.Messages\r
{\r
    public class TestMessage : ValueChangedMessage&lt;string&gt;\r
    {\r
        public TestMessage(string text) : base(text)\r
        {\r
        }\r
    }\r
}</code></pre>\r
<p data-ke-size="size16">&nbsp;</p>\r
<h2 data-ke-size="size26"><b>2. Register to Receive Messages in the View</b></h2>\r
<p data-ke-size="size16">MainWindow.xaml.cs</p>\r
<pre id="code_1679055479924" class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>using CommunityToolkit.Mvvm.Messaging;\r
using MyTestApp.Messages;\r
using System.Windows;\r
\r
namespace MyTestApp\r
{\r
    /// &lt;summary&gt;\r
    /// Interaction logic for MainWindow.xaml\r
    /// &lt;/summary&gt;\r
    public partial class MainWindow : Window\r
    {\r
        public MainWindow()\r
        {\r
            InitializeComponent();\r
\r
            WeakReferenceMessenger.Default.Register&lt;TestMessage&gt;(this, (r, m) =&gt;\r
            {\r
                ctlTextBox.Text = m.Value;\r
            });\r
        }\r
    }\r
}</code></pre>\r
<p data-ke-size="size16">&nbsp;</p>\r
<h2 data-ke-size="size26"><b>3. Add Button and TextBox Controls to the View, Bind to ViewModel Properties/Commands, and Write Code to Send Message on Button Click in ViewModel</b></h2>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">MainWindowViewModel.cs</p>\r
<pre id="code_1679055912361" class="csharp" data-ke-language="csharp" data-ke-type="codeblock"><code>using CommunityToolkit.Mvvm.ComponentModel;\r
using CommunityToolkit.Mvvm.Input;\r
using CommunityToolkit.Mvvm.Messaging;\r
using MyTestApp.Messages;\r
\r
namespace MyTestApp.ViewModels\r
{\r
    public partial class MainWindowViewModel : ObservableObject\r
    {\r
        [ObservableProperty]\r
        private string title;\r
\r
        public MainWindowViewModel()\r
        {\r
            Title = "Initial Value";\r
        }\r
\r
        [RelayCommand]\r
        private void SendMessage()\r
        {\r
            WeakReferenceMessenger.Default.Send(new TestMessage("Hello World"));\r
        }\r
    }\r
}</code></pre>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">MainWindow.xaml</p>\r
<pre id="code_1679055969536" class="html xml" data-ke-language="html" data-ke-type="codeblock"><code>&lt;Window x:Class="MyTestApp.MainWindow"\r
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"\r
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\r
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\r
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\r
        xmlns:local="clr-namespace:MyTestApp"\r
        mc:Ignorable="d"\r
        Title="MainWindow"\r
        Height="450"\r
        Width="800"\r
        DataContext="{Binding Source={StaticResource VmLocator}, Path=MainWindowVM}"&gt;\r
    &lt;Grid&gt;\r
        &lt;StackPanel Orientation="Vertical"&gt;\r
            &lt;TextBox Text="{Binding Title}" /&gt;\r
            &lt;Button Content="Click Here"\r
                    Command="{Binding SendMessageCommand}" /&gt;\r
            &lt;TextBox x:Name="ctlTextBox" /&gt;\r
        &lt;/StackPanel&gt;\r
    &lt;/Grid&gt;\r
&lt;/Window&gt;</code></pre>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">Now, after compiling and running, you can see "Hello World" displayed in the TextBox when you click the button.</p>\r
<p>\r
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F2QMz6%2Fbtr4tPg6juO%2FYZY2tvpje02rUvzORnLHs0%2Fimg.png" alt="">\r
</p>\r
<p data-ke-size="size16">&nbsp;</p>`},{category:"wpf",id:90,content:`<p data-ke-size="size16">\r
  &nbsp;In the previous post, we confirmed that binding the Text Property of the TextBox control to the Title member\r
  variable with the ObservableProperty Attribute in the MainWindowViewModel class and changing the value of the Title\r
  variable in the ViewModel reflects the value in the View.\r
</p>\r
<p data-ke-size="size16">\r
  &nbsp;This time, we will look at the change event callbacks of the Title variable bound by the user entering text in\r
  the TextBox from the UI.\r
</p>\r
<p>\r
  <img\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F55i8l%2FbtsLFA8Xyn5%2F77lXKMF6fghnYGk5sir1W1%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">\r
  When the ObservableProperty attribute is declared, the following callback functions are automatically generated by the\r
  code generator in addition to the getter and setter code that calls the PropertyChanged event.\r
</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p>\r
  <img\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb6jvcd%2FbtsLFeE3B7j%2FkaDZWuAHKmrYRG329UYh6k%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">\r
  In Visual Studio, when you type partial and press the spacebar or tab key, intellisense automatically lists the\r
  available callback functions in the suggestion list.\r
</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p>\r
  <img\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcn3eBQ%2FbtsLDZa4Vvc%2FwBKA5p8k70MaSdpN3wpi80%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">\r
  &nbsp;The naming convention of the function is automatically generated in the form of\r
  On[MemberVariableName]Changing/Changed for the member variable with the ObservableProperty attribute. In the case of\r
  Changing, it is a callback function that is called before the setter of the Title variable is called, with the changed\r
  value passed as the value argument from the control bound to the view. In the case of Changed, it is called after the\r
  value of Title has changed.\r
</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">\r
  &nbsp;To check the order in which each callback function is called, set breakpoints (F9) on all callback functions.\r
</p>\r
<p>\r
  <img\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FZVbnX%2FbtsLFfDZbzb%2F2iukCy7fH48KDCCszksqh1%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p data-ke-size="size16">\r
  &nbsp;After building and running by pressing the F5 key, you can see that it stops at each callback function where the\r
  breakpoint is set in order. Leave the breakpoints as they are and press F5 to continue running the program, then\r
  change the value in the TextBox of the window.\r
</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p>\r
  <img\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FAlrgu%2FbtsLGcM41C8%2FwsUAPCjqk4m3k1ed4Hogqk%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">\r
  &nbsp;However, for some reason, you will find that no matter how much you enter a value in the TextBox, it does not\r
  hit the breakpoints of the change callback.\r
</p>\r
<p data-ke-size="size16">\r
  &nbsp;The reason is that when binding the Title variable of the ViewModel in the previous post, the Update Trigger\r
  method was not specified separately, so it operated in the default mode and the callback functions of the ViewModel\r
  were not called.\r
</p>\r
<p>\r
  <img\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbepZv0%2FbtsLFB7SofO%2FzaAluxkdBoaNhXjHcOcr40%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">\r
  &nbsp;Since the callback functions of the ViewModel are triggered only by the PropertyChanged event, change the Update\r
  Trigger mode in the TextBox binding options of the MainWindow View to PropertyChanged as follows.\r
</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p>\r
  <img\r
    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcFkMiR%2FbtsLFCMs6JY%2FLMgVLSid31xMaWyeIOQ5qK%2Fimg.png"\r
    alt=""\r
  />\r
</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
<p data-ke-size="size16">\r
  &nbsp;After modifying and saving the View file, press any key to enter text in the TextBox, and you will see that it\r
  immediately hits the breakpoints set in the change callbacks.\r
</p>\r
<p data-ke-size="size16">&nbsp;</p>\r
`}];var Ys=class t{constructor(n){this.router=n}history$=new O([]);get currentMenu(){return this.history$.value.at(-1)}home=I(h({},Hs),{command:n=>this.navigateTo(n)});flatList=[];items=[];initialized=!1;initMenu(){if(!this.initialized){this.items=[{label:"Games",items:[...kr]},{label:"JSON Tools",items:[...Tr]},{label:"Other Tools",items:[...Rr]}];let n=[...Gs].reverse(),e=Js.map(s=>I(h({},s),{count:n.filter(o=>o.category===s.category).length}));this.flatList.push(Sr),this.flatList.push(...n,...kr,...Tr,...Rr,...e,...Cr);let r={label:"Trading",items:[...Cr]};this.items.push(r);let i={label:"Blog",items:[Sr,...e]};this.items.push(i),this.flatList.forEach(s=>s.command=o=>this.navigateTo(o)),this.initialized=!0}}getUrl(n){return"/"+n.routerLink}getArticleUrl(n){return n.routerLink}navigateTo(n){let e=n.item;this.router.navigateByUrl(e.routerLink)}navigateToArticle(n){let e=I(h({},n),{routerLink:this.getArticleUrl(n)});this.router.navigateByUrl(e.routerLink)}getRelevantArticles(n){let e=[];if(n){let r=this.flatList.filter(s=>!s.count&&s.category===n.category),i=r.indexOf(n);[-2,-1,1,2].forEach(s=>{let o=i+s;o>=0&&o<r.length&&e.push(r[o])})}return e}getMenuByUrl(n){return this.flatList.find(e=>"/"+e.routerLink===n)}getBlogContentByUrl(n){let e=n.split("/"),r=e.at(-2)??"",i=e.at(-1)??"";return Mr.find(s=>s.category===r&&s.id===+i)}getBlogContent(n,e){return Mr.find(r=>r.category===n&&r.id===e)}static \u0275fac=function(e){return new(e||t)(y(W))};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})};export{io as a,gl as b,ml as c,qi as d,_l as e,Bl as f,Zi as g,na as h,Vl as i,$l as j,pt as k,xe as l,$ as m,oe as n,Na as o,W as p,as as q,dd as r,ud as s,hd as t,fd as u,rl as v,Gs as w,Js as x,Mr as y,Ys as z};
