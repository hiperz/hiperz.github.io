import{A as P,B as q,F as J,H as L,N as R,P as M,U as h,V as X,X as v,Xa as N,Z as o,a as I,fb as z,hb as W,hc as Z,la as w,q as p,ra as S,s as f,v as V,z as F}from"./chunk-URIV444J.js";var c=class{},Q=(()=>{class n extends c{getTranslation(e){return p({})}static \u0275fac=(()=>{let e;return function(s){return(e||(e=w(n)))(s||n)}})();static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})(),b=class{},Y=(()=>{class n{handle(e){return e.key}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})();function j(n,r){if(n===r)return!0;if(n===null||r===null)return!1;if(n!==n&&r!==r)return!0;let e=typeof n,t=typeof r,s,i,a;if(e==t&&e=="object")if(Array.isArray(n)){if(!Array.isArray(r))return!1;if((s=n.length)==r.length){for(i=0;i<s;i++)if(!j(n[i],r[i]))return!1;return!0}}else{if(Array.isArray(r))return!1;a=Object.create(null);for(i in n){if(!j(n[i],r[i]))return!1;a[i]=!0}for(i in r)if(!(i in a)&&typeof r[i]<"u")return!1;return!0}return!1}function u(n){return typeof n<"u"&&n!==null}function D(n){return E(n)&&!H(n)&&n!==null}function E(n){return typeof n=="object"}function H(n){return Array.isArray(n)}function $(n){return typeof n=="string"}function ne(n){return typeof n=="function"}function K(n,r){let e=Object.assign({},n);return E(n)?(E(n)&&E(r)&&Object.keys(r).forEach(t=>{D(r[t])?t in n?e[t]=K(n[t],r[t]):Object.assign(e,{[t]:r[t]}):Object.assign(e,{[t]:r[t]})}),e):K({},r)}function x(n,r){let e=r.split(".");r="";do r+=e.shift(),u(n)&&u(n[r])&&(D(n[r])||H(n[r])||!e.length)?(n=n[r],r=""):e.length?r+=".":n=void 0;while(e.length);return n}function se(n,r,e){let t=r.split("."),s=n;for(let i=0;i<t.length;i++){let a=t[i];i===t.length-1?s[a]=e:((!s[a]||!D(s[a]))&&(s[a]={}),s=s[a])}}var d=class{},k=(()=>{class n extends d{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(e,t){if($(e))return this.interpolateString(e,t);if(ne(e))return this.interpolateFunction(e,t)}interpolateFunction(e,t){return e(t)}interpolateString(e,t){return t?e.replace(this.templateMatcher,(s,i)=>{let a=x(t,i);return u(a)?a:s}):e}static \u0275fac=(()=>{let e;return function(s){return(e||(e=w(n)))(s||n)}})();static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})(),g=class{},ee=(()=>{class n extends g{compile(e,t){return e}compileTranslations(e,t){return e}static \u0275fac=(()=>{let e;return function(s){return(e||(e=w(n)))(s||n)}})();static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})(),m=class{defaultLang;currentLang=this.defaultLang;translations={};langs=[];onTranslationChange=new S;onLangChange=new S;onDefaultLangChange=new S},O=new v("ISOLATE_TRANSLATE_SERVICE"),U=new v("USE_DEFAULT_LANG"),_=new v("DEFAULT_LANGUAGE"),B=new v("USE_EXTEND"),C=n=>f(n)?n:p(n),G=(()=>{class n{store;currentLoader;compiler;parser;missingTranslationHandler;useDefaultLang;extend;loadingTranslations;pending=!1;_translationRequests={};lastUseLanguage=null;get onTranslationChange(){return this.store.onTranslationChange}get onLangChange(){return this.store.onLangChange}get onDefaultLangChange(){return this.store.onDefaultLangChange}get defaultLang(){return this.store.defaultLang}set defaultLang(e){this.store.defaultLang=e}get currentLang(){return this.store.currentLang}set currentLang(e){this.store.currentLang=e}get langs(){return this.store.langs}set langs(e){this.store.langs=e}get translations(){return this.store.translations}set translations(e){this.store.translations=e}constructor(e,t,s,i,a,A=!0,l=!1,T=!1,y){this.store=e,this.currentLoader=t,this.compiler=s,this.parser=i,this.missingTranslationHandler=a,this.useDefaultLang=A,this.extend=T,l&&(this.store=new m),y&&this.setDefaultLang(y)}setDefaultLang(e){if(e===this.defaultLang)return;let t=this.retrieveTranslations(e);typeof t<"u"?(this.defaultLang==null&&(this.defaultLang=e),t.pipe(L(1)).subscribe(()=>{this.changeDefaultLang(e)})):this.changeDefaultLang(e)}getDefaultLang(){return this.defaultLang}use(e){if(this.lastUseLanguage=e,e===this.currentLang)return p(this.translations[e]);this.currentLang||(this.currentLang=e);let t=this.retrieveTranslations(e);return f(t)?(t.pipe(L(1)).subscribe(()=>{this.changeLang(e)}),t):(this.changeLang(e),p(this.translations[e]))}changeLang(e){e===this.lastUseLanguage&&(this.currentLang=e,this.onLangChange.emit({lang:e,translations:this.translations[e]}),this.defaultLang==null&&this.changeDefaultLang(e))}retrieveTranslations(e){if(typeof this.translations[e]>"u"||this.extend)return this._translationRequests[e]=this._translationRequests[e]||this.loadAndCompileTranslations(e),this._translationRequests[e]}getTranslation(e){return this.loadAndCompileTranslations(e)}loadAndCompileTranslations(e){this.pending=!0;let t=this.currentLoader.getTranslation(e).pipe(R(1),L(1));return this.loadingTranslations=t.pipe(V(s=>this.compiler.compileTranslations(s,e)),R(1),L(1)),this.loadingTranslations.subscribe({next:s=>{this.translations[e]=this.extend&&this.translations[e]?I(I({},s),this.translations[e]):s,this.updateLangs(),this.pending=!1},error:s=>{this.pending=!1}}),t}setTranslation(e,t,s=!1){let i=this.compiler.compileTranslations(t,e);(s||this.extend)&&this.translations[e]?this.translations[e]=K(this.translations[e],i):this.translations[e]=i,this.updateLangs(),this.onTranslationChange.emit({lang:e,translations:this.translations[e]})}getLangs(){return this.langs}addLangs(e){let t=e.filter(s=>!this.langs.includes(s));t.length>0&&(this.langs=[...this.langs,...t])}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResultForKey(e,t,s){let i;if(e&&(i=this.runInterpolation(x(e,t),s)),i===void 0&&this.defaultLang!=null&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(i=this.runInterpolation(x(this.translations[this.defaultLang],t),s)),i===void 0){let a={key:t,translateService:this};typeof s<"u"&&(a.interpolateParams=s),i=this.missingTranslationHandler.handle(a)}return i!==void 0?i:t}runInterpolation(e,t){if(H(e))return e.map(s=>this.runInterpolation(s,t));if(D(e)){let s={};for(let i in e){let a=this.runInterpolation(e[i],t);a!==void 0&&(s[i]=a)}return s}else return this.parser.interpolate(e,t)}getParsedResult(e,t,s){if(t instanceof Array){let i={},a=!1;for(let l of t)i[l]=this.getParsedResultForKey(e,l,s),a=a||f(i[l]);if(!a)return i;let A=t.map(l=>C(i[l]));return q(A).pipe(V(l=>{let T={};return l.forEach((y,te)=>{T[t[te]]=y}),T}))}return this.getParsedResultForKey(e,t,s)}get(e,t){if(!u(e)||!e.length)throw new Error('Parameter "key" is required and cannot be empty');return this.pending?this.loadingTranslations.pipe(J(s=>C(this.getParsedResult(s,e,t)))):C(this.getParsedResult(this.translations[this.currentLang],e,t))}getStreamOnTranslationChange(e,t){if(!u(e)||!e.length)throw new Error('Parameter "key" is required and cannot be empty');return F(P(()=>this.get(e,t)),this.onTranslationChange.pipe(M(s=>{let i=this.getParsedResult(s.translations,e,t);return C(i)})))}stream(e,t){if(!u(e)||!e.length)throw new Error('Parameter "key" required');return F(P(()=>this.get(e,t)),this.onLangChange.pipe(M(s=>{let i=this.getParsedResult(s.translations,e,t);return C(i)})))}instant(e,t){if(!u(e)||e.length===0)throw new Error('Parameter "key" is required and cannot be empty');let s=this.getParsedResult(this.translations[this.currentLang],e,t);return f(s)?Array.isArray(e)?e.reduce((i,a)=>(i[a]=a,i),{}):e:s}set(e,t,s=this.currentLang){se(this.translations[s],e,$(t)?this.compiler.compile(t,s):this.compiler.compileTranslations(t,s)),this.updateLangs(),this.onTranslationChange.emit({lang:s,translations:this.translations[s]})}changeDefaultLang(e){this.defaultLang=e,this.onDefaultLangChange.emit({lang:e,translations:this.translations[e]})}reloadLang(e){return this.resetLang(e),this.loadAndCompileTranslations(e)}resetLang(e){delete this._translationRequests[e],delete this.translations[e]}getBrowserLang(){if(typeof window>"u"||!window.navigator)return;let e=this.getBrowserCultureLang();return e?e.split(/[-_]/)[0]:void 0}getBrowserCultureLang(){if(!(typeof window>"u"||typeof window.navigator>"u"))return window.navigator.languages?window.navigator.languages[0]:window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage}static \u0275fac=function(t){return new(t||n)(o(m),o(c),o(g),o(d),o(b),o(U),o(O),o(B),o(_))};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ve=(()=>{class n{translate;_ref;value="";lastKey=null;lastParams=[];onTranslationChange;onLangChange;onDefaultLangChange;constructor(e,t){this.translate=e,this._ref=t}updateValue(e,t,s){let i=a=>{this.value=a!==void 0?a:e,this.lastKey=e,this._ref.markForCheck()};if(s){let a=this.translate.getParsedResult(s,e,t);f(a)?a.subscribe(i):i(a)}this.translate.get(e,t).subscribe(i)}transform(e,...t){if(!e||!e.length)return e;if(j(e,this.lastKey)&&j(t,this.lastParams))return this.value;let s;if(u(t[0])&&t.length)if($(t[0])&&t[0].length){let i=t[0].replace(/(')?([a-zA-Z0-9_]+)(')?(\s)?:/g,'"$2":').replace(/:(\s)?(')(.*?)(')/g,':"$3"');try{s=JSON.parse(i)}catch(a){throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${t[0]}`)}}else D(t[0])&&(s=t[0]);return this.lastKey=e,this.lastParams=t,this.updateValue(e,s),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(i=>{this.lastKey&&i.lang===this.translate.currentLang&&(this.lastKey=null,this.updateValue(e,s,i.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(i=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,s,i.translations))})),this.onDefaultLangChange||(this.onDefaultLangChange=this.translate.onDefaultLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,s))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onDefaultLangChange<"u"&&(this.onDefaultLangChange.unsubscribe(),this.onDefaultLangChange=void 0)}ngOnDestroy(){this._dispose()}static \u0275fac=function(t){return new(t||n)(N(G,16),N(Z,16))};static \u0275pipe=W({name:"translate",type:n,pure:!1});static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})();var Ce=(()=>{class n{static forRoot(e={}){return{ngModule:n,providers:[e.loader||{provide:c,useClass:Q},e.compiler||{provide:g,useClass:ee},e.parser||{provide:d,useClass:k},e.missingTranslationHandler||{provide:b,useClass:Y},m,{provide:O,useValue:e.isolate},{provide:U,useValue:e.useDefaultLang},{provide:B,useValue:e.extend},{provide:_,useValue:e.defaultLanguage},G]}}static forChild(e={}){return{ngModule:n,providers:[e.loader||{provide:c,useClass:Q},e.compiler||{provide:g,useClass:ee},e.parser||{provide:d,useClass:k},e.missingTranslationHandler||{provide:b,useClass:Y},{provide:O,useValue:e.isolate},{provide:U,useValue:e.useDefaultLang},{provide:B,useValue:e.extend},{provide:_,useValue:e.defaultLanguage},G]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=z({type:n});static \u0275inj=X({})}return n})();export{c as a,G as b,ve as c,Ce as d};
