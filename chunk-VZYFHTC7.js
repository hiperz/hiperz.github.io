import{$ as Ie,A as Le,Ac as tt,B as on,Db as yt,Eb as vt,F as rn,Fb as X,Gb as le,H as Rt,Hb as ce,Hc as vn,Ib as gn,Jc as Sn,Kb as bn,Kc as Cn,Lb as W,Lc as En,Mb as lt,N as xe,Nb as ct,Nc as ut,Ob as Pt,P as Oe,Pc as fe,Qb as Ft,Qc as wn,Rb as Mt,Ta as x,Tb as ue,U as b,Ua as kt,Ub as de,V as F,X as rt,Xa as cn,Z as K,Za as un,_ as g,_b as G,a as C,ac as Ae,cb as M,db as B,eb as H,fa as Dt,fb as dn,gb as R,ia as sn,ib as bt,ja as S,jb as at,la as an,m as ft,nb as pn,nc as pe,pa as J,q as $t,qa as ln,rc as T,s as ht,sa as Z,sb as Y,sc as mn,ta as Nt,tb as E,tc as $e,ub as fn,uc as yn,v as _e,va as st,vc as Bt,wb as hn,xb as mt,z as Te,za as gt}from"./chunk-OHA7V53V.js";var St=class{},_n=(()=>{class t extends St{getTranslation(e){return $t({})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=S(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Wt=class{},Tn=(()=>{class t{handle(e){return e.key}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();function ge(t,o){if(t===o)return!0;if(t===null||o===null)return!1;if(t!==t&&o!==o)return!0;let e=typeof t,n=typeof o,i,r,s;if(e==n&&e=="object")if(Array.isArray(t)){if(!Array.isArray(o))return!1;if((i=t.length)==o.length){for(r=0;r<i;r++)if(!ge(t[r],o[r]))return!1;return!0}}else{if(Array.isArray(o))return!1;s=Object.create(null);for(r in t){if(!ge(t[r],o[r]))return!1;s[r]=!0}for(r in o)if(!(r in s)&&typeof o[r]<"u")return!1;return!0}return!1}function et(t){return typeof t<"u"&&t!==null}function Ut(t){return he(t)&&!Be(t)&&t!==null}function he(t){return typeof t=="object"}function Be(t){return Array.isArray(t)}function He(t){return typeof t=="string"}function Li(t){return typeof t=="function"}function Re(t,o){let e=Object.assign({},t);return he(t)?(he(t)&&he(o)&&Object.keys(o).forEach(n=>{Ut(o[n])?n in t?e[n]=Re(t[n],o[n]):Object.assign(e,{[n]:o[n]}):Object.assign(e,{[n]:o[n]})}),e):Re({},o)}function De(t,o){let e=o.split(".");o="";do o+=e.shift(),et(t)&&et(t[o])&&(Ut(t[o])||Be(t[o])||!e.length)?(t=t[o],o=""):e.length?o+=".":t=void 0;while(e.length);return t}function xi(t,o,e){let n=o.split("."),i=t;for(let r=0;r<n.length;r++){let s=n[r];r===n.length-1?i[s]=e:((!i[s]||!Ut(i[s]))&&(i[s]={}),i=i[s])}}var Ct=class{},Ln=(()=>{class t extends Ct{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(e,n){if(He(e))return this.interpolateString(e,n);if(Li(e))return this.interpolateFunction(e,n)}interpolateFunction(e,n){return e(n)}interpolateString(e,n){return n?e.replace(this.templateMatcher,(i,r)=>{let s=De(n,r);return et(s)?s:i}):e}static \u0275fac=(()=>{let e;return function(i){return(e||(e=S(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Et=class{},xn=(()=>{class t extends Et{compile(e,n){return e}compileTranslations(e,n){return e}static \u0275fac=(()=>{let e;return function(i){return(e||(e=S(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Vt=class{defaultLang;currentLang=this.defaultLang;translations={};langs=[];onTranslationChange=new J;onLangChange=new J;onDefaultLangChange=new J},Ne=new rt("ISOLATE_TRANSLATE_SERVICE"),ke=new rt("USE_DEFAULT_LANG"),Pe=new rt("DEFAULT_LANGUAGE"),Fe=new rt("USE_EXTEND"),Ht=t=>ht(t)?t:$t(t),Me=(()=>{class t{store;currentLoader;compiler;parser;missingTranslationHandler;useDefaultLang;extend;loadingTranslations;pending=!1;_translationRequests={};lastUseLanguage=null;get onTranslationChange(){return this.store.onTranslationChange}get onLangChange(){return this.store.onLangChange}get onDefaultLangChange(){return this.store.onDefaultLangChange}get defaultLang(){return this.store.defaultLang}set defaultLang(e){this.store.defaultLang=e}get currentLang(){return this.store.currentLang}set currentLang(e){this.store.currentLang=e}get langs(){return this.store.langs}set langs(e){this.store.langs=e}get translations(){return this.store.translations}set translations(e){this.store.translations=e}constructor(e,n,i,r,s,a=!0,l=!1,c=!1,u){this.store=e,this.currentLoader=n,this.compiler=i,this.parser=r,this.missingTranslationHandler=s,this.useDefaultLang=a,this.extend=c,l&&(this.store=new Vt),u&&this.setDefaultLang(u)}setDefaultLang(e){if(e===this.defaultLang)return;let n=this.retrieveTranslations(e);typeof n<"u"?(this.defaultLang==null&&(this.defaultLang=e),n.pipe(Rt(1)).subscribe(()=>{this.changeDefaultLang(e)})):this.changeDefaultLang(e)}getDefaultLang(){return this.defaultLang}use(e){if(this.lastUseLanguage=e,e===this.currentLang)return $t(this.translations[e]);this.currentLang||(this.currentLang=e);let n=this.retrieveTranslations(e);return ht(n)?(n.pipe(Rt(1)).subscribe(()=>{this.changeLang(e)}),n):(this.changeLang(e),$t(this.translations[e]))}changeLang(e){e===this.lastUseLanguage&&(this.currentLang=e,this.onLangChange.emit({lang:e,translations:this.translations[e]}),this.defaultLang==null&&this.changeDefaultLang(e))}retrieveTranslations(e){if(typeof this.translations[e]>"u"||this.extend)return this._translationRequests[e]=this._translationRequests[e]||this.loadAndCompileTranslations(e),this._translationRequests[e]}getTranslation(e){return this.loadAndCompileTranslations(e)}loadAndCompileTranslations(e){this.pending=!0;let n=this.currentLoader.getTranslation(e).pipe(xe(1),Rt(1));return this.loadingTranslations=n.pipe(_e(i=>this.compiler.compileTranslations(i,e)),xe(1),Rt(1)),this.loadingTranslations.subscribe({next:i=>{this.translations[e]=this.extend&&this.translations[e]?C(C({},i),this.translations[e]):i,this.updateLangs(),this.pending=!1},error:i=>{this.pending=!1}}),n}setTranslation(e,n,i=!1){let r=this.compiler.compileTranslations(n,e);(i||this.extend)&&this.translations[e]?this.translations[e]=Re(this.translations[e],r):this.translations[e]=r,this.updateLangs(),this.onTranslationChange.emit({lang:e,translations:this.translations[e]})}getLangs(){return this.langs}addLangs(e){let n=e.filter(i=>!this.langs.includes(i));n.length>0&&(this.langs=[...this.langs,...n])}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResultForKey(e,n,i){let r;if(e&&(r=this.runInterpolation(De(e,n),i)),r===void 0&&this.defaultLang!=null&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(r=this.runInterpolation(De(this.translations[this.defaultLang],n),i)),r===void 0){let s={key:n,translateService:this};typeof i<"u"&&(s.interpolateParams=i),r=this.missingTranslationHandler.handle(s)}return r!==void 0?r:n}runInterpolation(e,n){if(Be(e))return e.map(i=>this.runInterpolation(i,n));if(Ut(e)){let i={};for(let r in e){let s=this.runInterpolation(e[r],n);s!==void 0&&(i[r]=s)}return i}else return this.parser.interpolate(e,n)}getParsedResult(e,n,i){if(n instanceof Array){let r={},s=!1;for(let l of n)r[l]=this.getParsedResultForKey(e,l,i),s=s||ht(r[l]);if(!s)return r;let a=n.map(l=>Ht(r[l]));return on(a).pipe(_e(l=>{let c={};return l.forEach((u,d)=>{c[n[d]]=u}),c}))}return this.getParsedResultForKey(e,n,i)}get(e,n){if(!et(e)||!e.length)throw new Error('Parameter "key" is required and cannot be empty');return this.pending?this.loadingTranslations.pipe(rn(i=>Ht(this.getParsedResult(i,e,n)))):Ht(this.getParsedResult(this.translations[this.currentLang],e,n))}getStreamOnTranslationChange(e,n){if(!et(e)||!e.length)throw new Error('Parameter "key" is required and cannot be empty');return Te(Le(()=>this.get(e,n)),this.onTranslationChange.pipe(Oe(i=>{let r=this.getParsedResult(i.translations,e,n);return Ht(r)})))}stream(e,n){if(!et(e)||!e.length)throw new Error('Parameter "key" required');return Te(Le(()=>this.get(e,n)),this.onLangChange.pipe(Oe(i=>{let r=this.getParsedResult(i.translations,e,n);return Ht(r)})))}instant(e,n){if(!et(e)||e.length===0)throw new Error('Parameter "key" is required and cannot be empty');let i=this.getParsedResult(this.translations[this.currentLang],e,n);return ht(i)?Array.isArray(e)?e.reduce((r,s)=>(r[s]=s,r),{}):e:i}set(e,n,i=this.currentLang){xi(this.translations[i],e,He(n)?this.compiler.compile(n,i):this.compiler.compileTranslations(n,i)),this.updateLangs(),this.onTranslationChange.emit({lang:i,translations:this.translations[i]})}changeDefaultLang(e){this.defaultLang=e,this.onDefaultLangChange.emit({lang:e,translations:this.translations[e]})}reloadLang(e){return this.resetLang(e),this.loadAndCompileTranslations(e)}resetLang(e){delete this._translationRequests[e],delete this.translations[e]}getBrowserLang(){if(typeof window>"u"||!window.navigator)return;let e=this.getBrowserCultureLang();return e?e.split(/[-_]/)[0]:void 0}getBrowserCultureLang(){if(!(typeof window>"u"||typeof window.navigator>"u"))return window.navigator.languages?window.navigator.languages[0]:window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage}static \u0275fac=function(n){return new(n||t)(K(Vt),K(St),K(Et),K(Ct),K(Wt),K(ke),K(Ne),K(Fe),K(Pe))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ho=(()=>{class t{translate;_ref;value="";lastKey=null;lastParams=[];onTranslationChange;onLangChange;onDefaultLangChange;constructor(e,n){this.translate=e,this._ref=n}updateValue(e,n,i){let r=s=>{this.value=s!==void 0?s:e,this.lastKey=e,this._ref.markForCheck()};if(i){let s=this.translate.getParsedResult(i,e,n);ht(s)?s.subscribe(r):r(s)}this.translate.get(e,n).subscribe(r)}transform(e,...n){if(!e||!e.length)return e;if(ge(e,this.lastKey)&&ge(n,this.lastParams))return this.value;let i;if(et(n[0])&&n.length)if(He(n[0])&&n[0].length){let r=n[0].replace(/(')?([a-zA-Z0-9_]+)(')?(\s)?:/g,'"$2":').replace(/:(\s)?(')(.*?)(')/g,':"$3"');try{i=JSON.parse(r)}catch(s){throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${n[0]}`)}}else Ut(n[0])&&(i=n[0]);return this.lastKey=e,this.lastParams=n,this.updateValue(e,i),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(r=>{this.lastKey&&r.lang===this.translate.currentLang&&(this.lastKey=null,this.updateValue(e,i,r.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(r=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,i,r.translations))})),this.onDefaultLangChange||(this.onDefaultLangChange=this.translate.onDefaultLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,i))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onDefaultLangChange<"u"&&(this.onDefaultLangChange.unsubscribe(),this.onDefaultLangChange=void 0)}ngOnDestroy(){this._dispose()}static \u0275fac=function(n){return new(n||t)(kt(Me,16),kt(pe,16))};static \u0275pipe=dn({name:"translate",type:t,pure:!1});static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var Wo=(()=>{class t{static forRoot(e={}){return{ngModule:t,providers:[e.loader||{provide:St,useClass:_n},e.compiler||{provide:Et,useClass:xn},e.parser||{provide:Ct,useClass:Ln},e.missingTranslationHandler||{provide:Wt,useClass:Tn},Vt,{provide:Ne,useValue:e.isolate},{provide:ke,useValue:e.useDefaultLang},{provide:Fe,useValue:e.extend},{provide:Pe,useValue:e.defaultLanguage},Me]}}static forChild(e={}){return{ngModule:t,providers:[e.loader||{provide:St,useClass:_n},e.compiler||{provide:Et,useClass:xn},e.parser||{provide:Ct,useClass:Ln},e.missingTranslationHandler||{provide:Wt,useClass:Tn},{provide:Ne,useValue:e.isolate},{provide:ke,useValue:e.useDefaultLang},{provide:Fe,useValue:e.extend},{provide:Pe,useValue:e.defaultLanguage},Me]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=B({type:t});static \u0275inj=F({})}return t})();function On(t,o){return t?t.classList?t.classList.contains(o):new RegExp("(^| )"+o+"( |$)","gi").test(t.className):!1}function jt(t,o){if(t&&o){let e=n=>{On(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[o].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function Oi(){return window.innerWidth-document.documentElement.offsetWidth}function wt(t){for(let o of document?.styleSheets)try{for(let e of o?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch{}return null}function zo(t="p-overflow-hidden"){let o=wt(/-scrollbar-width$/);o?.name&&document.body.style.setProperty(o.name,Oi()+"px"),jt(document.body,t)}function dt(t,o){if(t&&o){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[o].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function Ko(t="p-overflow-hidden"){let o=wt(/-scrollbar-width$/);o?.name&&document.body.style.removeProperty(o.name),dt(document.body,t)}function In(t){let o={width:0,height:0};return t&&(t.style.visibility="hidden",t.style.display="block",o.width=t.offsetWidth,o.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible"),o}function An(){let t=window,o=document,e=o.documentElement,n=o.getElementsByTagName("body")[0],i=t.innerWidth||e.clientWidth||n.clientWidth,r=t.innerHeight||e.clientHeight||n.clientHeight;return{width:i,height:r}}function Ii(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}function Ai(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function Go(t,o,e=!0){var n,i,r,s;if(t){let a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:In(t),l=a.height,c=a.width,u=o.offsetHeight,d=o.offsetWidth,p=o.getBoundingClientRect(),f=Ai(),h=Ii(),m=An(),w,O,_="top";p.top+u+l>m.height?(w=p.top+f-l,_="bottom",w<0&&(w=f)):w=u+p.top+f,p.left+c>m.width?O=Math.max(0,p.left+h+d-c):O=p.left+h,t.style.top=w+"px",t.style.left=O+"px",t.style.transformOrigin=_,e&&(t.style.marginTop=_==="bottom"?`calc(${(i=(n=wt(/-anchor-gutter$/))==null?void 0:n.value)!=null?i:"2px"} * -1)`:(s=(r=wt(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function $n(t,o){if(t instanceof HTMLElement){let e=t.offsetWidth;if(o){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function qo(t,o,e=!0){var n,i,r,s;if(t){let a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:In(t),l=o.offsetHeight,c=o.getBoundingClientRect(),u=An(),d,p,f="top";c.top+l+a.height>u.height?(d=-1*a.height,f="bottom",c.top+d<0&&(d=-1*c.top)):d=l,a.width>u.width?p=c.left*-1:c.left+a.width>u.width?p=(c.left+a.width-u.width)*-1:p=0,t.style.top=d+"px",t.style.left=p+"px",t.style.transformOrigin=f,e&&(t.style.marginTop=f==="bottom"?`calc(${(i=(n=wt(/-anchor-gutter$/))==null?void 0:n.value)!=null?i:"2px"} * -1)`:(s=(r=wt(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function _t(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function We(t){let o=t;return t&&typeof t=="object"&&(t.hasOwnProperty("current")?o=t.current:t.hasOwnProperty("el")&&(t.el.hasOwnProperty("nativeElement")?o=t.el.nativeElement:o=t.el)),_t(o)?o:void 0}function Yo(t,o){let e=We(t);if(e)e.appendChild(o);else throw new Error("Cannot append "+o+" to "+t)}function be(t,o={}){if(_t(t)){let e=(n,i)=>{var r,s;let a=(r=t?.$attrs)!=null&&r[n]?[(s=t?.$attrs)==null?void 0:s[n]]:[];return[i].flat().reduce((l,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){let d=Array.isArray(c)?e(n,c):Object.entries(c).map(([p,f])=>n==="style"&&(f||f===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${f}`:f?p:void 0);l=d.length?l.concat(d.filter(p=>!!p)):l}}return l},a)};Object.entries(o).forEach(([n,i])=>{if(i!=null){let r=n.match(/^on(.+)/);r?t.addEventListener(r[1].toLowerCase(),i):n==="p-bind"||n==="pBind"?be(t,i):(i=n==="class"?[...new Set(e("class",i))].join(" ").trim():n==="style"?e("style",i).join(";").trim():i,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=i),t.setAttribute(n,i))}})}}function Qo(t,o={},...e){if(t){let n=document.createElement(t);return be(n,o),n.append(...e),n}}function Jo(t,o){if(t){t.style.opacity="0";let e=+new Date,n="0",i=function(){n=`${+t.style.opacity+(new Date().getTime()-e)/o}`,t.style.opacity=n,e=+new Date,+n<1&&(window.requestAnimationFrame&&requestAnimationFrame(i)||setTimeout(i,16))};i()}}function $i(t,o){return _t(t)?Array.from(t.querySelectorAll(o)):[]}function Ri(t,o){return _t(t)?t.matches(o)?t:t.querySelector(o):null}function Zo(t,o){t&&document.activeElement!==t&&t.focus(o)}function Xo(t,o){if(_t(t)){let e=t.getAttribute(o);return isNaN(e)?e==="true"||e==="false"?e==="true":e:+e}}function Rn(t,o=""){let e=$i(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o}`),n=[];for(let i of e)getComputedStyle(i).display!="none"&&getComputedStyle(i).visibility!="hidden"&&n.push(i);return n}function tr(t,o){let e=Rn(t,o);return e.length>0?e[0]:null}function Ve(t){if(t){let o=t.offsetHeight,e=getComputedStyle(t);return o-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),o}return 0}function Di(t){if(t){let o=t.parentNode;return o&&o instanceof ShadowRoot&&o.host&&(o=o.host),o}return null}function er(t,o){let e=Rn(t,o);return e.length>0?e[e.length-1]:null}function Dn(t){if(t){let o=t.getBoundingClientRect();return{top:o.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:o.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function Ue(t,o){if(t){let e=t.offsetHeight;if(o){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function nr(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function Ni(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&Di(t))}function ir(t,o){var e;if(t)switch(t){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return o?.nextElementSibling;case"@prev":return o?.previousElementSibling;case"@parent":return o?.parentElement;case"@grandparent":return(e=o?.parentElement)==null?void 0:e.parentElement;default:if(typeof t=="string")return document.querySelector(t);let i=We((r=>!!(r&&r.constructor&&r.call&&r.apply))(t)?t():t);return i?.nodeType===9||Ni(i)?i:void 0}}function je(t){if(t){let o=t.offsetWidth,e=getComputedStyle(t);return o-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),o}return 0}function or(t){return!!(t&&t.offsetParent!=null)}function rr(t){return t?getComputedStyle(t).direction==="rtl":!1}function sr(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function Nn(t){var o;t&&("remove"in Element.prototype?t.remove():(o=t.parentNode)==null||o.removeChild(t))}function ar(t,o){let e=We(t);if(e)e.removeChild(o);else throw new Error("Cannot remove "+o+" from "+t)}function lr(t,o){let e=getComputedStyle(t).getPropertyValue("borderTopWidth"),n=e?parseFloat(e):0,i=getComputedStyle(t).getPropertyValue("paddingTop"),r=i?parseFloat(i):0,s=t.getBoundingClientRect(),l=o.getBoundingClientRect().top+document.body.scrollTop-(s.top+document.body.scrollTop)-n-r,c=t.scrollTop,u=t.clientHeight,d=Ue(o);l<0?t.scrollTop=c+l:l+d>u&&(t.scrollTop=c+l-u+d)}function kn(t,o="",e){_t(t)&&e!==null&&e!==void 0&&t.setAttribute(o,e)}function Pn(){let t=new Map;return{on(o,e){let n=t.get(o);return n?n.push(e):n=[e],t.set(o,n),this},off(o,e){let n=t.get(o);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(o,e){let n=t.get(o);n&&n.slice().map(i=>{i(e)})},clear(){t.clear()}}}var ki=Object.defineProperty,Fn=Object.getOwnPropertySymbols,Pi=Object.prototype.hasOwnProperty,Fi=Object.prototype.propertyIsEnumerable,Mn=(t,o,e)=>o in t?ki(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,Mi=(t,o)=>{for(var e in o||(o={}))Pi.call(o,e)&&Mn(t,e,o[e]);if(Fn)for(var e of Fn(o))Fi.call(o,e)&&Mn(t,e,o[e]);return t};function N(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function ze(t,o,e=new WeakSet){if(t===o)return!0;if(!t||!o||typeof t!="object"||typeof o!="object"||e.has(t)||e.has(o))return!1;e.add(t).add(o);let n=Array.isArray(t),i=Array.isArray(o),r,s,a;if(n&&i){if(s=t.length,s!=o.length)return!1;for(r=s;r--!==0;)if(!ze(t[r],o[r],e))return!1;return!0}if(n!=i)return!1;let l=t instanceof Date,c=o instanceof Date;if(l!=c)return!1;if(l&&c)return t.getTime()==o.getTime();let u=t instanceof RegExp,d=o instanceof RegExp;if(u!=d)return!1;if(u&&d)return t.toString()==o.toString();let p=Object.keys(t);if(s=p.length,s!==Object.keys(o).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(o,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!ze(t[a],o[a],e))return!1;return!0}function Bi(t,o){return ze(t,o)}function Hn(t){return!!(t&&t.constructor&&t.call&&t.apply)}function y(t){return!N(t)}function me(t,o){if(!t||!o)return null;try{let e=t[o];if(y(e))return e}catch{}if(Object.keys(t).length){if(Hn(o))return o(t);if(o.indexOf(".")===-1)return t[o];{let e=o.split("."),n=t;for(let i=0,r=e.length;i<r;++i){if(n==null)return null;n=n[e[i]]}return n}}return null}function Ke(t,o,e){return e?me(t,e)===me(o,e):Bi(t,o)}function pr(t,o){if(t!=null&&o&&o.length){for(let e of o)if(Ke(t,e))return!0}return!1}function fr(t,o){let e=-1;if(y(t))try{e=t.findLastIndex(o)}catch{e=t.lastIndexOf([...t].reverse().find(o))}return e}function U(t,o=!0){return t instanceof Object&&t.constructor===Object&&(o||Object.keys(t).length!==0)}function D(t,...o){return Hn(t)?t(...o):t}function nt(t,o=!0){return typeof t=="string"&&(o||t!=="")}function Bn(t){return nt(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function ye(t,o="",e={}){let n=Bn(o).split("."),i=n.shift();return i?U(t)?ye(D(t[Object.keys(t).find(r=>Bn(r)===i)||""],e),n.join("."),e):void 0:D(t,e)}function ve(t,o=!0){return Array.isArray(t)&&(o||t.length!==0)}function Wn(t){return y(t)&&!isNaN(t)}function hr(t=""){return y(t)&&t.length===1&&!!t.match(/\S| /)}function A(t,o){if(o){let e=o.test(t);return o.lastIndex=0,e}return!1}function zt(...t){let o=(e={},n={})=>{let i=Mi({},e);return Object.keys(n).forEach(r=>{U(n[r])&&r in e&&U(e[r])?i[r]=o(e[r],n[r]):i[r]=n[r]}),i};return t.reduce((e,n,i)=>i===0?n:o(e,n),{})}function pt(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function $(t){if(t&&/[\xC0-\xFF\u0100-\u017E]/.test(t)){let e={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let n in e)t=t.replace(e[n],n)}return t}function Se(t){return nt(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(o,e)=>e===0?o:"-"+o.toLowerCase()).toLowerCase():t}function Ge(t){return nt(t)?t.replace(/[A-Z]/g,(o,e)=>e===0?o:"."+o.toLowerCase()).toLowerCase():t}var Ce={};function Kt(t="pui_id_"){return Ce.hasOwnProperty(t)||(Ce[t]=0),Ce[t]++,`${t}${Ce[t]}`}function Hi(){let t=[],o=(s,a,l=999)=>{let c=i(s,a,l),u=c.value+(c.key===s?0:l)+1;return t.push({key:s,value:u}),u},e=s=>{t=t.filter(a=>a.value!==s)},n=(s,a)=>i(s,a).value,i=(s,a,l=0)=>[...t].reverse().find(c=>a?!0:c.key===s)||{key:s,value:l},r=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:r,set:(s,a,l)=>{a&&(a.style.zIndex=String(o(s,!0,l)))},clear:s=>{s&&(e(r(s)),s.style.zIndex="")},getCurrent:s=>n(s,!0)}}var mr=Hi();var L=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})();var Ar=(()=>{class t{filter(e,n,i,r,s){let a=[];if(e)for(let l of e)for(let c of n){let u=me(l,c);if(this.filters[r](u,i,s)){a.push(l);break}}return a}filters={startsWith:(e,n,i)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let r=$(n.toString()).toLocaleLowerCase(i);return $(e.toString()).toLocaleLowerCase(i).slice(0,r.length)===r},contains:(e,n,i)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let r=$(n.toString()).toLocaleLowerCase(i);return $(e.toString()).toLocaleLowerCase(i).indexOf(r)!==-1},notContains:(e,n,i)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let r=$(n.toString()).toLocaleLowerCase(i);return $(e.toString()).toLocaleLowerCase(i).indexOf(r)===-1},endsWith:(e,n,i)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let r=$(n.toString()).toLocaleLowerCase(i),s=$(e.toString()).toLocaleLowerCase(i);return s.indexOf(r,s.length-r.length)!==-1},equals:(e,n,i)=>n==null||typeof n=="string"&&n.trim()===""?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()===n.getTime():e==n?!0:$(e.toString()).toLocaleLowerCase(i)==$(n.toString()).toLocaleLowerCase(i),notEquals:(e,n,i)=>n==null||typeof n=="string"&&n.trim()===""?!1:e==null?!0:e.getTime&&n.getTime?e.getTime()!==n.getTime():e==n?!1:$(e.toString()).toLocaleLowerCase(i)!=$(n.toString()).toLocaleLowerCase(i),in:(e,n)=>{if(n==null||n.length===0)return!0;for(let i=0;i<n.length;i++)if(Ke(e,n[i]))return!0;return!1},between:(e,n)=>n==null||n[0]==null||n[1]==null?!0:e==null?!1:e.getTime?n[0].getTime()<=e.getTime()&&e.getTime()<=n[1].getTime():n[0]<=e&&e<=n[1],lt:(e,n,i)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<n.getTime():e<n,lte:(e,n,i)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<=n.getTime():e<=n,gt:(e,n,i)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>n.getTime():e>n,gte:(e,n,i)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>=n.getTime():e>=n,is:(e,n,i)=>this.filters.equals(e,n,i),isNot:(e,n,i)=>this.filters.notEquals(e,n,i),before:(e,n,i)=>this.filters.lt(e,n,i),after:(e,n,i)=>this.filters.gt(e,n,i),dateIs:(e,n)=>n==null?!0:e==null?!1:e.toDateString()===n.toDateString(),dateIsNot:(e,n)=>n==null?!0:e==null?!1:e.toDateString()!==n.toDateString(),dateBefore:(e,n)=>n==null?!0:e==null?!1:e.getTime()<n.getTime(),dateAfter:(e,n)=>n==null?!0:e==null?!1:(e.setHours(0,0,0,0),e.getTime()>n.getTime())};register(e,n){this.filters[e]=n}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),$r=(()=>{class t{messageSource=new ft;clearSource=new ft;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(e){e&&this.messageSource.next(e)}addAll(e){e&&e.length&&this.messageSource.next(e)}clear(e){this.clearSource.next(e||null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Rr=(()=>{class t{clickSource=new ft;clickObservable=this.clickSource.asObservable();add(e){e&&this.clickSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Vn=["*"],Dr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["p-header"]],standalone:!1,ngContentSelectors:Vn,decls:1,vars:0,template:function(n,i){n&1&&(lt(),ct(0))},encapsulation:2})}return t})(),Nr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:Vn,decls:1,vars:0,template:function(n,i){n&1&&(lt(),ct(0))},encapsulation:2})}return t})(),Un=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(kt(cn))};static \u0275dir=H({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),it=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=B({type:t});static \u0275inj=F({imports:[ut]})}return t})(),kr=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return t})();var Wi=Object.defineProperty,Vi=Object.defineProperties,Ui=Object.getOwnPropertyDescriptors,we=Object.getOwnPropertySymbols,Kn=Object.prototype.hasOwnProperty,Gn=Object.prototype.propertyIsEnumerable,jn=(t,o,e)=>o in t?Wi(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,z=(t,o)=>{for(var e in o||(o={}))Kn.call(o,e)&&jn(t,e,o[e]);if(we)for(var e of we(o))Gn.call(o,e)&&jn(t,e,o[e]);return t},qe=(t,o)=>Vi(t,Ui(o)),Q=(t,o)=>{var e={};for(var n in t)Kn.call(t,n)&&o.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&we)for(var n of we(t))o.indexOf(n)<0&&Gn.call(t,n)&&(e[n]=t[n]);return e};function Mr(...t){return zt(...t)}var ji=Pn(),k=ji;function zn(t,o){ve(t)?t.push(...o||[]):U(t)&&Object.assign(t,o)}function zi(t){return U(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function Ki(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Ye(t="",o=""){return Ki(`${nt(t,!1)&&nt(o,!1)?`${t}-`:t}${o}`)}function qn(t="",o=""){return`--${Ye(t,o)}`}function Gi(t=""){let o=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(o+e)%2!==0}function Yn(t,o="",e="",n=[],i){if(nt(t)){let r=/{([^}]*)}/g,s=t.trim();if(Gi(s))return;if(A(s,r)){let a=s.replaceAll(r,u=>{let p=u.replace(/{|}/g,"").split(".").filter(f=>!n.some(h=>A(f,h)));return`var(${qn(e,Se(p.join("-")))}${y(i)?`, ${i}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,c=/var\([^)]+\)/g;return A(a.replace(c,"0"),l)?`calc(${a})`:a}return s}else if(Wn(t))return t}function qi(t,o,e){nt(o,!1)&&t.push(`${o}:${e};`)}function Tt(t,o){return t?`${t}{${o}}`:""}var Lt=(...t)=>Yi(v.getTheme(),...t),Yi=(t={},o,e,n)=>{if(o){let{variable:i,options:r}=v.defaults||{},{prefix:s,transform:a}=t?.options||r||{},c=A(o,/{([^}]*)}/g)?o:`{${o}}`;return n==="value"||N(n)&&a==="strict"?v.getTokenValue(o):Yn(c,void 0,s,[i.excludedKeyRegex],e)}return""};function Qi(t,o={}){let e=v.defaults.variable,{prefix:n=e.prefix,selector:i=e.selector,excludedKeyRegex:r=e.excludedKeyRegex}=o,s=(c,u="")=>Object.entries(c).reduce((d,[p,f])=>{let h=A(p,r)?Ye(u):Ye(u,Se(p)),m=zi(f);if(U(m)){let{variables:w,tokens:O}=s(m,h);zn(d.tokens,O),zn(d.variables,w)}else d.tokens.push((n?h.replace(`${n}-`,""):h).replaceAll("-",".")),qi(d.variables,qn(h),Yn(m,h,n,[r]));return d},{variables:[],tokens:[]}),{variables:a,tokens:l}=s(t,n);return{value:a,tokens:l,declarations:a.join(""),css:Tt(i,a.join(""))}}var j={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let o=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=o.map(i=>i.resolve(e)).find(i=>i.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,o){return Qi(t,{prefix:o?.prefix})},getCommon({name:t="",theme:o={},params:e,set:n,defaults:i}){var r,s,a,l,c,u,d;let{preset:p,options:f}=o,h,m,w,O,_,ot,P;if(y(p)&&f.transform!=="strict"){let{primitive:Gt,semantic:qt,extend:Yt}=p,Ot=qt||{},{colorScheme:Qt}=Ot,Jt=Q(Ot,["colorScheme"]),Zt=Yt||{},{colorScheme:Xt}=Zt,It=Q(Zt,["colorScheme"]),At=Qt||{},{dark:te}=At,ee=Q(At,["dark"]),ne=Xt||{},{dark:ie}=ne,oe=Q(ne,["dark"]),re=y(Gt)?this._toVariables({primitive:Gt},f):{},se=y(Jt)?this._toVariables({semantic:Jt},f):{},ae=y(ee)?this._toVariables({light:ee},f):{},Xe=y(te)?this._toVariables({dark:te},f):{},tn=y(It)?this._toVariables({semantic:It},f):{},en=y(oe)?this._toVariables({light:oe},f):{},nn=y(ie)?this._toVariables({dark:ie},f):{},[li,ci]=[(r=re.declarations)!=null?r:"",re.tokens],[ui,di]=[(s=se.declarations)!=null?s:"",se.tokens||[]],[pi,fi]=[(a=ae.declarations)!=null?a:"",ae.tokens||[]],[hi,gi]=[(l=Xe.declarations)!=null?l:"",Xe.tokens||[]],[bi,mi]=[(c=tn.declarations)!=null?c:"",tn.tokens||[]],[yi,vi]=[(u=en.declarations)!=null?u:"",en.tokens||[]],[Si,Ci]=[(d=nn.declarations)!=null?d:"",nn.tokens||[]];h=this.transformCSS(t,li,"light","variable",f,n,i),m=ci;let Ei=this.transformCSS(t,`${ui}${pi}`,"light","variable",f,n,i),wi=this.transformCSS(t,`${hi}`,"dark","variable",f,n,i);w=`${Ei}${wi}`,O=[...new Set([...di,...fi,...gi])];let _i=this.transformCSS(t,`${bi}${yi}color-scheme:light`,"light","variable",f,n,i),Ti=this.transformCSS(t,`${Si}color-scheme:dark`,"dark","variable",f,n,i);_=`${_i}${Ti}`,ot=[...new Set([...mi,...vi,...Ci])],P=D(p.css,{dt:Lt})}return{primitive:{css:h,tokens:m},semantic:{css:w,tokens:O},global:{css:_,tokens:ot},style:P}},getPreset({name:t="",preset:o={},options:e,params:n,set:i,defaults:r,selector:s}){var a,l,c;let u,d,p;if(y(o)&&e.transform!=="strict"){let f=t.replace("-directive",""),h=o,{colorScheme:m,extend:w,css:O}=h,_=Q(h,["colorScheme","extend","css"]),ot=w||{},{colorScheme:P}=ot,Gt=Q(ot,["colorScheme"]),qt=m||{},{dark:Yt}=qt,Ot=Q(qt,["dark"]),Qt=P||{},{dark:Jt}=Qt,Zt=Q(Qt,["dark"]),Xt=y(_)?this._toVariables({[f]:z(z({},_),Gt)},e):{},It=y(Ot)?this._toVariables({[f]:z(z({},Ot),Zt)},e):{},At=y(Yt)?this._toVariables({[f]:z(z({},Yt),Jt)},e):{},[te,ee]=[(a=Xt.declarations)!=null?a:"",Xt.tokens||[]],[ne,ie]=[(l=It.declarations)!=null?l:"",It.tokens||[]],[oe,re]=[(c=At.declarations)!=null?c:"",At.tokens||[]],se=this.transformCSS(f,`${te}${ne}`,"light","variable",e,i,r,s),ae=this.transformCSS(f,oe,"dark","variable",e,i,r,s);u=`${se}${ae}`,d=[...new Set([...ee,...ie,...re])],p=D(O,{dt:Lt})}return{css:u,tokens:d,style:p}},getPresetC({name:t="",theme:o={},params:e,set:n,defaults:i}){var r;let{preset:s,options:a}=o,l=(r=s?.components)==null?void 0:r[t];return this.getPreset({name:t,preset:l,options:a,params:e,set:n,defaults:i})},getPresetD({name:t="",theme:o={},params:e,set:n,defaults:i}){var r;let s=t.replace("-directive",""),{preset:a,options:l}=o,c=(r=a?.directives)==null?void 0:r[s];return this.getPreset({name:s,preset:c,options:l,params:e,set:n,defaults:i})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,o){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?o.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:o.options.darkModeSelector):[]},getLayerOrder(t,o={},e,n){let{cssLayer:i}=o;return i?`@layer ${D(i.order||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:o={},params:e,props:n={},set:i,defaults:r}){let s=this.getCommon({name:t,theme:o,params:e,set:i,defaults:r}),a=Object.entries(n).reduce((l,[c,u])=>l.push(`${c}="${u}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[c,u])=>{if(u?.css){let d=pt(u?.css),p=`${c}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${p}" ${a}>${d}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:o={},params:e,props:n={},set:i,defaults:r}){var s;let a={name:t,theme:o,params:e,set:i,defaults:r},l=(s=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,c=Object.entries(n).reduce((u,[d,p])=>u.push(`${d}="${p}"`)&&u,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${c}>${pt(l)}</style>`:""},createTokens(t={},o,e="",n="",i={}){return Object.entries(t).forEach(([r,s])=>{let a=A(r,o.variable.excludedKeyRegex)?e:e?`${e}.${Ge(r)}`:Ge(r),l=n?`${n}.${r}`:r;U(s)?this.createTokens(s,o,a,l,i):(i[a]||(i[a]={paths:[],computed(c,u={}){var d,p;return this.paths.length===1?(d=this.paths[0])==null?void 0:d.computed(this.paths[0].scheme,u.binding):c&&c!=="none"?(p=this.paths.find(f=>f.scheme===c))==null?void 0:p.computed(c,u.binding):this.paths.map(f=>f.computed(f.scheme,u[f.scheme]))}}),i[a].paths.push({path:l,value:s,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(c,u={}){let d=/{([^}]*)}/g,p=s;if(u.name=this.path,u.binding||(u.binding={}),A(s,d)){let h=s.trim().replaceAll(d,O=>{var _;let ot=O.replace(/{|}/g,""),P=(_=i[ot])==null?void 0:_.computed(c,u);return ve(P)&&P.length===2?`light-dark(${P[0].value},${P[1].value})`:P?.value}),m=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,w=/var\([^)]+\)/g;p=A(h.replace(w,"0"),m)?`calc(${h})`:h}return N(u.binding)&&delete u.binding,{colorScheme:c,path:this.path,paths:u,value:p.includes("undefined")?void 0:p}}}))}),i},getTokenValue(t,o,e){var n;let r=(l=>l.split(".").filter(u=>!A(u.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(o),s=o.includes("colorScheme.light")?"light":o.includes("colorScheme.dark")?"dark":void 0,a=[(n=t[r])==null?void 0:n.computed(s)].flat().filter(l=>l);return a.length===1?a[0].value:a.reduce((l={},c)=>{let u=c,{colorScheme:d}=u,p=Q(u,["colorScheme"]);return l[d]=p,l},void 0)},getSelectorRule(t,o,e,n){return e==="class"||e==="attr"?Tt(y(o)?`${t}${o},${t} ${o}`:t,n):Tt(t,y(o)?Tt(o,n):n)},transformCSS(t,o,e,n,i={},r,s,a){if(y(o)){let{cssLayer:l}=i;if(n!=="style"){let c=this.getColorSchemeOption(i,s);o=e==="dark"?c.reduce((u,{type:d,selector:p})=>(y(p)&&(u+=p.includes("[CSS]")?p.replace("[CSS]",o):this.getSelectorRule(p,a,d,o)),u),""):Tt(a??":root",o)}if(l){let c={name:"primeui",order:"primeui"};U(l)&&(c.name=D(l.name,{name:t,type:n})),y(c.name)&&(o=Tt(`@layer ${c.name}`,o),r?.layerNames(c.name))}return o}return""}},v={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:o}=t;o&&(this._theme=qe(z({},o),{options:z(z({},this.defaults.options),o.options)}),this._tokens=j.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),k.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=qe(z({},this.theme),{preset:t}),this._tokens=j.createTokens(t,this.defaults),this.clearLoadedStyleNames(),k.emit("preset:change",t),k.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=qe(z({},this.theme),{options:t}),this.clearLoadedStyleNames(),k.emit("options:change",t),k.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return j.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",o){return j.getCommon({name:t,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",o){let e={name:t,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return j.getPresetC(e)},getDirective(t="",o){let e={name:t,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return j.getPresetD(e)},getCustomPreset(t="",o,e,n){let i={name:t,preset:o,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return j.getPreset(i)},getLayerOrderCSS(t=""){return j.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",o,e="style",n){return j.transformCSS(t,o,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",o,e={}){return j.getCommonStyleSheet({name:t,theme:this.theme,params:o,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,o,e={}){return j.getStyleSheet({name:t,theme:this.theme,params:o,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:o}){this._loadingStyles.size&&(this._loadingStyles.delete(o),k.emit(`theme:${o}:load`,t),!this._loadingStyles.size&&k.emit("theme:load"))}};var Ji=0,Qn=(()=>{class t{document=g(tt);use(e,n={}){let i=!1,r=e,s=null,{immediate:a=!0,manual:l=!1,name:c=`style_${++Ji}`,id:u=void 0,media:d=void 0,nonce:p=void 0,first:f=!1,props:h={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${c}"]`)||u&&this.document.getElementById(u)||this.document.createElement("style"),!s.isConnected){r=e,be(s,{type:"text/css",media:d,nonce:p});let m=this.document.head;f&&m.firstChild?m.insertBefore(s,m.firstChild):m.appendChild(s),kn(s,"data-primeng-style-id",c)}return s.textContent!==r&&(s.textContent=r),{id:u,name:c,el:s,css:r}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var xt={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},Zi=({dt:t})=>`
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
    opacity: ${t("disabled.opacity")};
}

.pi {
    font-size: ${t("icon.size")};
}

.p-icon {
    width: ${t("icon.size")};
    height: ${t("icon.size")};
}

.p-overlay-mask {
    background: ${t("mask.background")};
    color: ${t("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${t("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${t("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${t("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${t("mask.background")};
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
`,Xi=({dt:t})=>`
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
    padding-right: ${t("scrollbar.width")};
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
`,I=(()=>{class t{name="base";useStyle=g(Qn);theme=Zi;css=Xi;classes={};inlineStyles={};load=(e,n={},i=r=>r)=>{let r=i(D(e,{dt:Lt}));return r?this.useStyle.use(pt(r),C({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},n="")=>this.load(this.theme,e,(i="")=>v.transformCSS(e.name||this.name,`${i}${n}`));getCommonTheme=e=>v.getCommon(this.name,e);getComponentTheme=e=>v.getComponent(this.name,e);getDirectiveTheme=e=>v.getDirective(this.name,e);getPresetTheme=(e,n,i)=>v.getCustomPreset(this.name,e,n,i);getLayerOrderThemeCSS=()=>v.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let i=D(this.css,{dt:Lt}),r=pt(`${i}${e}`),s=Object.entries(n).reduce((a,[l,c])=>a.push(`${l}="${c}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>v.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let i=[v.getStyleSheet(this.name,e,n)];if(this.theme){let r=this.name==="base"?"global-style":`${this.name}-style`,s=D(this.theme,{dt:Lt}),a=pt(v.transformCSS(r,s)),l=Object.entries(n).reduce((c,[u,d])=>c.push(`${u}="${d}"`)&&c,[]).join(" ");i.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${a}</style>`)}return i.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var to=(()=>{class t{theme=st(void 0);csp=st({nonce:void 0});isThemeChanged=!1;document=g(tt);baseStyle=g(I);constructor(){Bt(()=>{k.on("theme:change",e=>{yn(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),Bt(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){v.clearLoadedStyleNames(),k.clear()}onThemeChange(e){v.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!v.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:i,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,C({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,C({name:"semantic-variables"},s)),this.baseStyle.load(i?.css,C({name:"global-variables"},s)),this.baseStyle.loadTheme(C({name:"global-style"},s),r),v.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:i}=e||{};n&&this.theme.set(n),i&&this.csp.set(i)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Qe=(()=>{class t extends to{ripple=st(!1);platformId=g(gt);inputStyle=st("outlined");inputVariant=st("outlined");overlayOptions={};csp=st({nonce:void 0});filterMatchModeOptions={text:[L.STARTS_WITH,L.CONTAINS,L.NOT_CONTAINS,L.ENDS_WITH,L.EQUALS,L.NOT_EQUALS],numeric:[L.EQUALS,L.NOT_EQUALS,L.LESS_THAN,L.LESS_THAN_OR_EQUAL_TO,L.GREATER_THAN,L.GREATER_THAN_OR_EQUAL_TO],date:[L.DATE_IS,L.DATE_IS_NOT,L.DATE_BEFORE,L.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new ft;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=C(C({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:i,inputStyle:r,theme:s,overlayOptions:a,translation:l}=e||{};n&&this.csp.set(n),i&&this.ripple.set(i),r&&this.inputStyle.set(r),a&&(this.overlayOptions=a),l&&this.setTranslation(l),s&&this.setThemeConfig({theme:s,csp:n})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=S(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),eo=new rt("PRIME_NG_CONFIG");function hs(...t){let o=t?.map(n=>({provide:eo,useValue:n,multi:!1})),e=pn(()=>{let n=g(Qe);t?.forEach(i=>n.setConfig(i))});return Ie([...o,e])}var Jn=(()=>{class t extends I{name="common";static \u0275fac=(()=>{let e;return function(i){return(e||(e=S(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),q=(()=>{class t{document=g(tt);platformId=g(gt);el=g(Nt);injector=g(an);cd=g(pe);renderer=g(un);config=g(Qe);baseComponentStyle=g(Jn);baseStyle=g(I);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=Kt("pc");_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,n="",i={}){return ye(e,n,i)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!wn(this.platformId)){let{dt:n}=e;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles()}_loadStyles(){let e=()=>{xt.isStyleNameLoaded("base")||(this.baseStyle.loadCSS(this.styleOptions),xt.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!xt.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),xt.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!v.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:i,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,C({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,C({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(i?.css,C({name:"global-variables"},this.styleOptions)),this.baseStyle.loadTheme(C({name:"global-style"},this.styleOptions),r),v.setLoadedStyleName("common")}if(!v.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,C({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(C({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),v.setLoadedStyleName(this.componentStyle?.name)}if(!v.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,C({name:"layer-order",first:!0},this.styleOptions)),v.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:n}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},i=this.componentStyle?.load(n,C({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){xt.clearLoadedStyleNames(),k.on("theme:change",e)}cx(e,n){let i=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof i=="function"?i({instance:this}):typeof i=="string"?i:e}sx(e){let n=this.componentStyle?.inlineStyles?.[e];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:C({},n)}get parent(){return this.parentInstance}static \u0275fac=function(n){return new(n||t)};static \u0275dir=H({type:t,inputs:{dt:"dt"},features:[G([Jn,I]),Dt]})}return t})();var Je=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let i=n.trim().split(" ");for(let r=0;r<i.length;r++)e.classList.add(i[r])}else{let i=n.split(" ");for(let r=0;r<i.length;r++)e.className+=" "+i[r]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,i=0;for(var r=0;r<n.length;r++){if(n[r]==e)return i;n[r].nodeType==1&&i++}return-1}static indexWithinGroup(e,n){let i=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<i.length;s++){if(i[s]==e)return r;i[s].attributes&&i[s].attributes[n]&&i[s].nodeType==1&&r++}return-1}static appendOverlay(e,n,i="self"){i!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,i="self",r=!0){e&&n&&(r&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),i==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,i=!0){let r=_=>{if(_)return getComputedStyle(_).getPropertyValue("position")==="relative"?_:r(_.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=n.offsetHeight,l=n.getBoundingClientRect(),c=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),d=this.getViewport(),f=r(e)?.getBoundingClientRect()||{top:-1*c,left:-1*u},h,m;l.top+a+s.height>d.height?(h=l.top-f.top-s.height,e.style.transformOrigin="bottom",l.top+h<0&&(h=-1*l.top)):(h=a+l.top-f.top,e.style.transformOrigin="top");let w=l.left+s.width-d.width,O=l.left-f.left;s.width>d.width?m=(l.left-f.left)*-1:w>0?m=O-w:m=l.left-f.left,e.style.top=h+"px",e.style.left=m+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,n,i=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,a=r.width,l=n.offsetHeight,c=n.offsetWidth,u=n.getBoundingClientRect(),d=this.getWindowScrollTop(),p=this.getWindowScrollLeft(),f=this.getViewport(),h,m;u.top+l+s>f.height?(h=u.top+d-s,e.style.transformOrigin="bottom",h<0&&(h=d)):(h=l+u.top+d,e.style.transformOrigin="top"),u.left+a>f.width?m=Math.max(0,u.left+p+c-a):m=u.left+p,e.style.top=h+"px",e.style.left=m+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let i=this.getParents(e),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of i){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let c=l.split(",");for(let u of c){let d=this.findSingle(a,u);d&&s(d)&&n.push(d)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let i=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=i?parseFloat(i):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=e.getBoundingClientRect(),u=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,d=e.scrollTop,p=e.clientHeight,f=this.getOuterHeight(n);u<0?e.scrollTop=d+u:u+f>p&&(e.scrollTop=d+u-p+f)}static fadeIn(e,n){e.style.opacity=0;let i=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-i)/n,e.style.opacity=r,i=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(e,n){var i=1,r=50,s=n,a=r/s;let l=setInterval(()=>{i=i-a,i<=0&&(i=0,clearInterval(l)),e.style.opacity=i},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var i=Element.prototype,r=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,n)}static getOuterWidth(e,n){let i=e.offsetWidth;if(n){let r=getComputedStyle(e);i+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return i}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static width(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),n}static getOuterHeight(e,n){let i=e.offsetHeight;if(n){let r=getComputedStyle(e);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}static getHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),n}static getViewport(){let e=window,n=document,i=n.documentElement,r=n.getElementsByTagName("body")[0],s=e.innerWidth||i.clientWidth||r.clientWidth,a=e.innerHeight||i.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let i=e.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var i=e.indexOf("Trident/");if(i>0){var r=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let i=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,i){e[n].apply(e,i)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let i=this.find(e,this.getFocusableSelectorString(n)),r=[];for(let s of i){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(e,n=""){let i=this.findSingle(e,this.getFocusableSelectorString(n));if(i){let r=getComputedStyle(i);if(this.isVisible(i)&&r.display!="none"&&r.visibility!="hidden")return i}return null}static getFirstFocusableElement(e,n=""){let i=this.getFocusableElements(e,n);return i.length>0?i[0]:null}static getLastFocusableElement(e,n){let i=this.getFocusableElements(e,n);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(e,n=!1){let i=t.getFocusableElements(e),r=0;if(i&&i.length>0){let s=i.indexOf(i[0].ownerDocument.activeElement);n?s==-1||s===0?r=i.length-1:r=s-1:s!=-1&&s!==i.length-1&&(r=s+1)}return i[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let i=typeof e;if(i==="string")return document.querySelector(e);if(i==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let i=e.getAttribute(n);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...i){if(e){let r=document.createElement(e);return this.setAttributes(r,n),r.append(...i),r}}static setAttribute(e,n="",i){this.isElement(e)&&i!==null&&i!==void 0&&e.setAttribute(n,i)}static setAttributes(e,n={}){if(this.isElement(e)){let i=(r,s)=>{let a=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[s].flat().reduce((l,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){let d=Array.isArray(c)?i(r,c):Object.entries(c).map(([p,f])=>r==="style"&&(f||f===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${f}`:f?p:void 0);l=d.length?l.concat(d.filter(p=>!!p)):l}}return l},a)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?e.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(i("class",s))].join(" ").trim():r==="style"?i("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})(),Zn=class{element;listener;scrollableParents;constructor(o,e=()=>{}){this.element=o,this.listener=e}bindScrollListener(){this.scrollableParents=Je.getScrollableParents(this.element);for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Xn=(()=>{class t extends q{autofocus=!1;_autofocus=!1;focused=!1;platformId=g(gt);document=g(tt);host=g(Nt);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){fe(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=Je.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=S(t)))(i||t)}})();static \u0275dir=H({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",T],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[bt,R]})}return t})();var no=({dt:t})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${t("badge.border.radius")};
    justify-content: center;
    padding: ${t("badge.padding")};
    background: ${t("badge.primary.background")};
    color: ${t("badge.primary.color")};
    font-size: ${t("badge.font.size")};
    font-weight: ${t("badge.font.weight")};
    min-width: ${t("badge.min.width")};
    height: ${t("badge.height")};
    line-height: ${t("badge.height")};
}

.p-badge-dot {
    width: ${t("badge.dot.size")};
    min-width: ${t("badge.dot.size")};
    height: ${t("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${t("badge.secondary.background")};
    color: ${t("badge.secondary.color")};
}

.p-badge-success {
    background: ${t("badge.success.background")};
    color: ${t("badge.success.color")};
}

.p-badge-info {
    background: ${t("badge.info.background")};
    color: ${t("badge.info.color")};
}

.p-badge-warn {
    background: ${t("badge.warn.background")};
    color: ${t("badge.warn.color")};
}

.p-badge-danger {
    background: ${t("badge.danger.background")};
    color: ${t("badge.danger.color")};
}

.p-badge-contrast {
    background: ${t("badge.contrast.background")};
    color: ${t("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${t("badge.sm.font.size")};
    min-width: ${t("badge.sm.min.width")};
    height: ${t("badge.sm.height")};
    line-height: ${t("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${t("badge.lg.font.size")};
    min-width: ${t("badge.lg.min.width")};
    height: ${t("badge.lg.height")};
    line-height: ${t("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${t("badge.xl.font.size")};
    min-width: ${t("badge.xl.min.width")};
    height: ${t("badge.xl.height")};
    line-height: ${t("badge.xl.height")};
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
`,io={root:({props:t,instance:o})=>["p-badge p-component",{"p-badge-circle":y(t.value)&&String(t.value).length===1,"p-badge-dot":N(t.value)&&!o.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},ti=(()=>{class t extends I{name="badge";theme=no;classes=io;static \u0275fac=(()=>{let e;return function(i){return(e||(e=S(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var Ze=(()=>{class t extends q{styleClass=Z();style=Z();badgeSize=Z();size=Z();severity=Z();value=Z();badgeDisabled=Z(!1,{transform:T});_componentStyle=g(ti);containerClass=$e(()=>{let e="p-badge p-component";return y(this.value())&&String(this.value()).length===1&&(e+=" p-badge-circle"),this.badgeSize()==="large"?e+=" p-badge-lg":this.badgeSize()==="xlarge"?e+=" p-badge-xl":this.badgeSize()==="small"&&(e+=" p-badge-sm"),N(this.value())&&(e+=" p-badge-dot"),this.styleClass()&&(e+=` ${this.styleClass()}`),this.severity()&&(e+=` p-badge-${this.severity()}`),e});static \u0275fac=(()=>{let e;return function(i){return(e||(e=S(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["p-badge"]],hostVars:6,hostBindings:function(n,i){n&2&&(hn(i.style()),mt(i.containerClass()),fn("display",i.badgeDisabled()&&"none"))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[G([ti]),R],decls:1,vars:1,template:function(n,i){n&1&&ue(0),n&2&&de(i.value())},dependencies:[ut,it],encapsulation:2,changeDetection:0})}return t})(),ei=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=B({type:t});static \u0275inj=F({imports:[Ze,it,it]})}return t})();var ro=`
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
`,so=(()=>{class t extends I{name="baseicon";inlineStyles=ro;static \u0275fac=(()=>{let e;return function(i){return(e||(e=S(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var ao=["*"],ni=(()=>{class t extends q{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=N(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(i){return(e||(e=S(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",T],styleClass:"styleClass"},features:[G([so]),bt,R],ngContentSelectors:ao,decls:1,vars:0,template:function(n,i){n&1&&(lt(),ct(0))},encapsulation:2,changeDetection:0})}return t})();var ii=(()=>{class t extends ni{pathId;ngOnInit(){this.pathId="url(#"+Kt()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=S(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["SpinnerIcon"]],features:[R],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(sn(),yt(0,"svg",0)(1,"g"),X(2,"path",1),vt(),yt(3,"defs")(4,"clipPath",2),X(5,"rect",3),vt()()()),n&2&&(mt(i.getClassNames()),Y("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),x(),Y("clip-path",i.pathId),x(3),E("id",i.pathId))},encapsulation:2})}return t})();var lo=({dt:t})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
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
`,co={root:"p-ink"},oi=(()=>{class t extends I{name="ripple";theme=lo;classes=co;static \u0275fac=(()=>{let e;return function(i){return(e||(e=S(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var ri=(()=>{class t extends q{zone=g(ln);_componentStyle=g(oi);animationListener;mouseDownListener;timeout;constructor(){super(),Bt(()=>{fe(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(dt(n,"p-ink-active"),!Ve(n)&&!je(n)){let a=Math.max($n(this.el.nativeElement),Ue(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let i=Dn(this.el.nativeElement),r=e.pageX-i.left+this.document.body.scrollTop-je(n)/2,s=e.pageY-i.top+this.document.body.scrollLeft-Ve(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),jt(n,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&dt(a,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&dt(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),dt(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Nn(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=H({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[G([oi]),R]})}return t})(),ma=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=B({type:t});static \u0275inj=F({})}return t})();var uo=({dt:t})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding-block: ${t("button.padding.y")};
    padding-inline: ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
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
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding-block: ${t("button.sm.padding.y")};
    padding-inline: ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding-block: ${t("button.lg.padding.y")};
    padding-inline: ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,po={root:({instance:t,props:o})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!o.label&&!o.badge,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-button-loading":o.loading,"p-button-link":o.link,[`p-button-${o.severity}`]:o.severity,"p-button-raised":o.raised,"p-button-rounded":o.rounded,"p-button-text":o.text,"p-button-outlined":o.outlined,"p-button-sm":o.size==="small","p-button-lg":o.size==="large","p-button-plain":o.plain,"p-button-fluid":o.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},si=(()=>{class t extends I{name="button";theme=uo;classes=po;static \u0275fac=(()=>{let e;return function(i){return(e||(e=S(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var fo=["content"],ho=["loading"],go=["icon"],bo=["*"],ai=t=>({class:t});function mo(t,o){t&1&&gn(0)}function yo(t,o){if(t&1&&X(0,"span",8),t&2){let e=W(3);E("ngClass",e.iconClass()),Y("aria-hidden",!0)("data-pc-section","loadingicon")}}function vo(t,o){if(t&1&&X(0,"SpinnerIcon",9),t&2){let e=W(3);E("styleClass",e.spinnerIconClass())("spin",!0),Y("aria-hidden",!0)("data-pc-section","loadingicon")}}function So(t,o){if(t&1&&(le(0),at(1,yo,1,3,"span",6)(2,vo,1,4,"SpinnerIcon",7),ce()),t&2){let e=W(2);x(),E("ngIf",e.loadingIcon),x(),E("ngIf",!e.loadingIcon)}}function Co(t,o){}function Eo(t,o){if(t&1&&at(0,Co,0,0,"ng-template",10),t&2){let e=W(2);E("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function wo(t,o){if(t&1&&(le(0),at(1,So,3,2,"ng-container",2)(2,Eo,1,1,null,5),ce()),t&2){let e=W();x(),E("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),x(),E("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",Ae(3,ai,e.iconClass()))}}function _o(t,o){if(t&1&&X(0,"span",8),t&2){let e=W(2);mt(e.icon),E("ngClass",e.iconClass()),Y("data-pc-section","icon")}}function To(t,o){}function Lo(t,o){if(t&1&&at(0,To,0,0,"ng-template",10),t&2){let e=W(2);E("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function xo(t,o){if(t&1&&(le(0),at(1,_o,1,4,"span",11)(2,Lo,1,1,null,5),ce()),t&2){let e=W();x(),E("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),x(),E("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",Ae(3,ai,e.iconClass()))}}function Oo(t,o){if(t&1&&(yt(0,"span",12),ue(1),vt()),t&2){let e=W();Y("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),x(),de(e.label)}}function Io(t,o){if(t&1&&X(0,"p-badge",13),t&2){let e=W();E("value",e.badge)("severity",e.badgeSeverity)}}var Ao=(()=>{class t extends q{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new J;onFocus=new J;onBlur=new J;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return N(this.fluid)?!!n:this.fluid}_componentStyle=g(si);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this.contentTemplate=e.template;break;case"icon":this.iconTemplate=e.template;break;case"loadingicon":this.loadingIconTemplate=e.template;break;default:this.contentTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let i=n.currentValue;for(let r in i)this[r]=i[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(i){return(e||(e=S(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["p-button"]],contentQueries:function(n,i,r){if(n&1&&(Pt(r,fo,5),Pt(r,ho,5),Pt(r,go,5),Pt(r,Un,4)),n&2){let s;Ft(s=Mt())&&(i.contentTemplate=s.first),Ft(s=Mt())&&(i.loadingIconTemplate=s.first),Ft(s=Mt())&&(i.iconTemplate=s.first),Ft(s=Mt())&&(i.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",T],loading:[2,"loading","loading",T],loadingIcon:"loadingIcon",raised:[2,"raised","raised",T],rounded:[2,"rounded","rounded",T],text:[2,"text","text",T],plain:[2,"plain","plain",T],severity:"severity",outlined:[2,"outlined","outlined",T],link:[2,"link","link",T],tabindex:[2,"tabindex","tabindex",mn],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",T],fluid:[2,"fluid","fluid",T],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[G([si]),bt,R,Dt],ngContentSelectors:bo,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(n,i){n&1&&(lt(),yt(0,"button",0),bn("click",function(s){return i.onClick.emit(s)})("focus",function(s){return i.onFocus.emit(s)})("blur",function(s){return i.onBlur.emit(s)}),ct(1),at(2,mo,1,0,"ng-container",1)(3,wo,3,5,"ng-container",2)(4,xo,3,5,"ng-container",2)(5,Oo,2,3,"span",3)(6,Io,1,2,"p-badge",4),vt()),n&2&&(E("ngStyle",i.style)("disabled",i.disabled||i.loading)("ngClass",i.buttonClass)("pAutoFocus",i.autofocus),Y("type",i.type)("aria-label",i.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",i.tabindex),x(2),E("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),x(),E("ngIf",i.loading),x(),E("ngIf",!i.loading),x(),E("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.label),x(),E("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.badge))},dependencies:[ut,vn,Sn,En,Cn,ri,Xn,ii,ei,Ze,it],encapsulation:2,changeDetection:0})}return t})(),ja=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=B({type:t});static \u0275inj=F({imports:[ut,Ao,it,it]})}return t})();export{St as a,Me as b,Ho as c,Wo as d,On as e,jt as f,zo as g,dt as h,Ko as i,An as j,Ii as k,Ai as l,Go as m,$n as n,qo as o,Yo as p,Qo as q,Jo as r,$i as s,Ri as t,Zo as u,Xo as v,Rn as w,tr as x,Ve as y,er as z,Dn as A,Ue as B,nr as C,ir as D,je as E,or as F,rr as G,sr as H,ar as I,lr as J,kn as K,N as L,Bi as M,y as N,me as O,Ke as P,pr as Q,fr as R,hr as S,Kt as T,Ar as U,$r as V,Rr as W,Dr as X,Nr as Y,Un as Z,it as _,kr as $,Mr as aa,I as ba,Qe as ca,hs as da,q as ea,Je as fa,Zn as ga,Xn as ha,Ze as ia,ei as ja,ni as ka,ii as la,ri as ma,ma as na,Ao as oa,ja as pa};
