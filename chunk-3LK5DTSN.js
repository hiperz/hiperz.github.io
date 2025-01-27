import{a as kt}from"./chunk-MBVOM5D7.js";import{a as Ye}from"./chunk-ZOG2MTP2.js";import{a as Ze}from"./chunk-ETPUJBXZ.js";import{a as ie,c as Fe,d as Ne,e as Re,f as Je,g as Be}from"./chunk-D5GQGG2X.js";import{a as et}from"./chunk-OSWOL7F4.js";import{r as je,t as Ae,u as tt}from"./chunk-BQN5MPLM.js";import{M as Ue,N as qe,W as He,X as oe,_ as Qe,ba as We,ha as Ge,ma as Ke,na as Xe}from"./chunk-6UG5DQNX.js";import{$b as G,Cb as u,D as K,Db as p,Eb as k,Fb as ue,Gb as pe,H as X,Hc as ze,Ib as U,Jb as P,Jc as De,Kb as w,Lc as Ve,Nb as he,Nc as te,Ob as ee,Pb as z,Qb as D,T as N,Ta as m,U as R,Ua as _,Ub as q,V as I,Yb as H,Z as ce,Zb as Q,_ as _e,_b as W,a as F,ac as Le,bc as Te,c as ke,d as $e,db as $,e as Me,eb as T,f as se,fa as Y,ga as y,ha as v,hb as J,ia as Se,ja as O,jb as le,kb as S,n as we,pa as L,qa as Ee,rb as M,rc as E,sb as d,sc as Pe,va as Ie,vb as de,wb as B,xb as Oe}from"./chunk-THB3VWDW.js";var mt=Me((Ji,fe)=>{"use strict";var Bt=/[\p{Lu}]/u,Ut=/[\p{Ll}]/u,ct=/^[\p{Lu}](?![\p{Lu}])/gu,ut=/([\p{Alpha}\p{N}_]|$)/u,pt=/[_.\- ]+/,qt=new RegExp("^"+pt.source),lt=new RegExp(pt.source+ut.source,"gu"),dt=new RegExp("\\d+"+ut.source,"gu"),Ht=(e,o,t)=>{let n=!1,i=!1,r=!1;for(let a=0;a<e.length;a++){let l=e[a];n&&Bt.test(l)?(e=e.slice(0,a)+"-"+e.slice(a),n=!1,r=i,i=!0,a++):i&&r&&Ut.test(l)?(e=e.slice(0,a-1)+"-"+e.slice(a-1),r=i,i=!1,n=!0):(n=o(l)===l&&t(l)!==l,r=i,i=t(l)===l&&o(l)!==l)}return e},Qt=(e,o)=>(ct.lastIndex=0,e.replace(ct,t=>o(t))),Wt=(e,o)=>(lt.lastIndex=0,dt.lastIndex=0,e.replace(lt,(t,n)=>o(n)).replace(dt,t=>o(t))),ht=(e,o)=>{if(!(typeof e=="string"||Array.isArray(e)))throw new TypeError("Expected the input to be `string | string[]`");if(o=F({pascalCase:!1,preserveConsecutiveUppercase:!1},o),Array.isArray(e)?e=e.map(r=>r.trim()).filter(r=>r.length).join("-"):e=e.trim(),e.length===0)return"";let t=o.locale===!1?r=>r.toLowerCase():r=>r.toLocaleLowerCase(o.locale),n=o.locale===!1?r=>r.toUpperCase():r=>r.toLocaleUpperCase(o.locale);return e.length===1?o.pascalCase?n(e):t(e):(e!==t(e)&&(e=Ht(e,t,n)),e=e.replace(qt,""),o.preserveConsecutiveUppercase?e=Qt(e,t):e=t(e),o.pascalCase&&(e=n(e.charAt(0))+e.slice(1)),Wt(e,n))};fe.exports=ht;fe.exports.default=ht});var bt=Me((ge,be)=>{"use strict";(function(e,o){typeof ke=="function"&&typeof ge=="object"&&typeof be=="object"?be.exports=o():typeof define=="function"&&define.amd?define(function(){return o()}):e.pluralize=o()})(ge,function(){var e=[],o=[],t={},n={},i={};function r(s){return typeof s=="string"?new RegExp("^"+s+"$","i"):s}function a(s,c){return s===c?c:s===s.toLowerCase()?c.toLowerCase():s===s.toUpperCase()?c.toUpperCase():s[0]===s[0].toUpperCase()?c.charAt(0).toUpperCase()+c.substr(1).toLowerCase():c.toLowerCase()}function l(s,c){return s.replace(/\$(\d{1,2})/g,function(b,f){return c[f]||""})}function C(s,c){return s.replace(c[0],function(b,f){var g=l(c[1],arguments);return a(b===""?s[f-1]:b,g)})}function x(s,c,b){if(!s.length||t.hasOwnProperty(s))return c;for(var f=b.length;f--;){var g=b[f];if(g[0].test(c))return C(c,g)}return c}function ve(s,c,b){return function(f){var g=f.toLowerCase();return c.hasOwnProperty(g)?a(f,g):s.hasOwnProperty(g)?a(f,s[g]):x(g,f,b)}}function Ce(s,c,b,f){return function(g){var A=g.toLowerCase();return c.hasOwnProperty(A)?!0:s.hasOwnProperty(A)?!1:x(A,A,b)===A}}function h(s,c,b){var f=c===1?h.singular(s):h.plural(s);return(b?c+" ":"")+f}return h.plural=ve(i,n,e),h.isPlural=Ce(i,n,e),h.singular=ve(n,i,o),h.isSingular=Ce(n,i,o),h.addPluralRule=function(s,c){e.push([r(s),c])},h.addSingularRule=function(s,c){o.push([r(s),c])},h.addUncountableRule=function(s){if(typeof s=="string"){t[s.toLowerCase()]=!0;return}h.addPluralRule(s,"$0"),h.addSingularRule(s,"$0")},h.addIrregularRule=function(s,c){c=c.toLowerCase(),s=s.toLowerCase(),i[s]=c,n[c]=s},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach(function(s){return h.addIrregularRule(s[0],s[1])}),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach(function(s){return h.addPluralRule(s[0],s[1])}),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach(function(s){return h.addSingularRule(s[0],s[1])}),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(h.addUncountableRule),h})});var Mt=["editor"];var wt="MONACO_PATH",me=(()=>{class e{constructor(t,n){if(this.ngZone=t,this.monacoPathConfig=n,this.isMonacoLoaded$=new we(!1),this._monacoPath="assets/monaco-editor/min/vs",window.monacoEditorAlreadyInitialized){t.run(()=>this.isMonacoLoaded$.next(!0));return}window.monacoEditorAlreadyInitialized=!0,this.monacoPathConfig&&(this.monacoPath=this.monacoPathConfig),this.loadMonaco()}set monacoPath(t){t&&(this._monacoPath=t)}loadMonaco(){let t=()=>{let a=this._monacoPath;window.amdRequire=window.require;let l=!!this.nodeRequire,C=a.includes("http");l&&(window.require=this.nodeRequire,C||(a=window.require("path").resolve(window.__dirname,this._monacoPath))),window.amdRequire.config({paths:{vs:a}}),window.amdRequire(["vs/editor/editor.main"],()=>{this.ngZone.run(()=>this.isMonacoLoaded$.next(!0))},x=>console.error("Error loading monaco-editor: ",x))};if(!!window.amdRequire)return t();!!window.require&&(this.addElectronFixScripts(),this.nodeRequire=window.require);let r=document.createElement("script");r.type="text/javascript",r.src=`${this._monacoPath}/loader.js`,r.addEventListener("load",t),document.body.appendChild(r)}addElectronFixScripts(){let t=document.createElement("script"),n=document.createTextNode("self.module = undefined;"),i=document.createTextNode("self.process.browser = true;");t.appendChild(n),t.appendChild(i),document.body.appendChild(t)}}return e.\u0275fac=function(t){return new(t||e)(ce(Ee),ce(wt,8))},e.\u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var it=(()=>{class e{constructor(t){this.monacoLoader=t,this.init=new L,this.onTouched=()=>{},this.onErrorStatusChange=()=>{},this.propagateChange=()=>{}}get model(){return this.editor&&this.editor.getModel()}get modelMarkers(){return this.model&&monaco.editor.getModelMarkers({resource:this.model.uri})}ngOnInit(){this.monacoLoader.isMonacoLoaded$.pipe(K(t=>t),X(1)).subscribe(()=>{this.initEditor()})}ngOnChanges(t){if(this.editor&&t.options&&!t.options.firstChange){let n=t.options.currentValue,{language:i,theme:r}=n,a=$e(n,["language","theme"]),{language:l,theme:C}=t.options.previousValue;l!==i&&monaco.editor.setModelLanguage(this.editor.getModel(),this.options&&this.options.language?this.options.language:"text"),C!==r&&monaco.editor.setTheme(r),this.editor.updateOptions(a)}if(this.editor&&t.uri){let i=t.uri.currentValue,r=t.uri.previousValue;if(r&&!i||!r&&i||i&&r&&i.path!==r.path){let a=this.editor.getValue();this.modelUriInstance&&this.modelUriInstance.dispose();let l;i&&(l=monaco.editor.getModels().find(C=>C.uri.path===i.path)),this.modelUriInstance=l||monaco.editor.createModel(a,this.options.language||"text",this.uri),this.editor.setModel(this.modelUriInstance)}}}writeValue(t){this.value=t,this.editor&&t?this.editor.setValue(t):this.editor&&this.editor.setValue("")}registerOnChange(t){this.propagateChange=t}registerOnTouched(t){this.onTouched=t}validate(){return this.parsedError?{monaco:{value:this.parsedError.split("|")}}:null}registerOnValidatorChange(t){this.onErrorStatusChange=t}initEditor(){let t={value:[this.value].join(`
`),language:"text",automaticLayout:!0,scrollBeyondLastLine:!1,theme:"vc"};this.editor=monaco.editor.create(this.editorContent.nativeElement,this.options?F(F({},t),this.options):t),this.registerEditorListeners(),this.init.emit(this.editor)}registerEditorListeners(){this.editor.onDidChangeModelContent(()=>{this.propagateChange(this.editor.getValue())}),this.editor.onDidChangeModelDecorations(()=>{let t=this.modelMarkers.map(({message:i})=>i).join("|");this.parsedError!==t&&(this.parsedError=t,this.onErrorStatusChange())}),this.editor.onDidBlurEditorText(()=>{this.onTouched()})}ngOnDestroy(){this.editor&&this.editor.dispose()}}return e.\u0275fac=function(t){return new(t||e)(_(me))},e.\u0275cmp=$({type:e,selectors:[["ngx-monaco-editor"]],viewQuery:function(t,n){if(t&1&&ee(Mt,7),t&2){let i;z(i=D())&&(n.editorContent=i.first)}},inputs:{options:"options",uri:"uri"},outputs:{init:"init"},standalone:!1,features:[G([{provide:ie,useExisting:N(()=>e),multi:!0},{provide:Fe,useExisting:N(()=>e),multi:!0}]),Y],decls:4,vars:0,consts:[["container",""],["editor",""],["fxFlex","",1,"editor-container"],[1,"monaco-editor"]],template:function(t,n){t&1&&(u(0,"div",2,0),k(2,"div",3,1),p())},styles:[".monaco-editor[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0}.editor-container[_ngcontent-%COMP%]{overflow:hidden;position:relative;display:table;width:100%;height:100%;min-width:0}"],changeDetection:0}),e})();var ot=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=T({type:e}),e.\u0275inj=I({imports:[[]]}),e})();var nt=(()=>{class e extends Ge{static \u0275fac=(()=>{let t;return function(i){return(t||(t=O(e)))(i||e)}})();static \u0275cmp=$({type:e,selectors:[["MinusIcon"]],features:[J],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(n,i){n&1&&(Se(),u(0,"svg",0),k(1,"path",1),p()),n&2&&(B(i.getClassNames()),M("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return e})();var Et=({dt:e})=>`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: ${e("checkbox.border.radius")};
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${e("checkbox.border.radius")};
    border: 1px solid ${e("checkbox.border.color")};
    background: ${e("checkbox.background")};
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
    transition: background ${e("checkbox.transition.duration")}, color ${e("checkbox.transition.duration")}, border-color ${e("checkbox.transition.duration")}, box-shadow ${e("checkbox.transition.duration")}, outline-color ${e("checkbox.transition.duration")};
    outline-color: transparent;
    box-shadow: ${e("checkbox.shadow")};
}

.p-checkbox-icon {
    transition-duration: ${e("checkbox.transition.duration")};
    color: ${e("checkbox.icon.color")};
    font-size: ${e("checkbox.icon.size")};
    width: ${e("checkbox.icon.size")};
    height: ${e("checkbox.icon.size")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: ${e("checkbox.hover.border.color")};
}

.p-checkbox-checked .p-checkbox-box {
    border-color: ${e("checkbox.checked.border.color")};
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
    border-color: ${e("checkbox.checked.hover.border.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.hover.color")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.focus.border.color")};
    box-shadow: ${e("checkbox.focus.ring.shadow")};
    outline: ${e("checkbox.focus.ring.width")} ${e("checkbox.focus.ring.style")} ${e("checkbox.focus.ring.color")};
    outline-offset: ${e("checkbox.focus.ring.offset")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.checked.focus.border.color")};
}

.p-checkbox.ng-invalid.ng-dirty > .p-checkbox-box {
    border-color: ${e("checkbox.invalid.border.color")};
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.filled.background")};
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: ${e("checkbox.disabled.background")};
    border-color: ${e("checkbox.checked.disabled.border.color")};
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: ${e("checkbox.icon.disabled.color")};
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: ${e("checkbox.sm.width")};
    height: ${e("checkbox.sm.height")};
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: ${e("checkbox.icon.sm.size")};
    width: ${e("checkbox.icon.sm.size")};
    height: ${e("checkbox.icon.sm.size")};
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: ${e("checkbox.lg.width")};
    height: ${e("checkbox.lg.height")};
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: ${e("checkbox.icon.lg.size")};
    width: ${e("checkbox.icon.lg.size")};
    height: ${e("checkbox.icon.lg.size")};
}
`,It={root:({instance:e,props:o})=>["p-checkbox p-component",{"p-checkbox-checked":e.checked,"p-disabled":o.disabled,"p-invalid":o.invalid,"p-variant-filled":o.variant?o.variant==="filled":e.config.inputStyle==="filled"||e.config.inputVariant==="filled"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},rt=(()=>{class e extends Qe{name="checkbox";theme=Et;classes=It;static \u0275fac=(()=>{let t;return function(i){return(t||(t=O(e)))(i||e)}})();static \u0275prov=R({token:e,factory:e.\u0275fac})}return e})();var Ot=["checkboxicon"],Lt=["input"],Tt=()=>({"p-checkbox-input":!0}),Pt=e=>({checked:e,class:"p-checkbox-icon"});function zt(e,o){if(e&1&&k(0,"span",8),e&2){let t=w(3);d("ngClass",t.checkboxIcon),M("data-pc-section","icon")}}function Dt(e,o){e&1&&k(0,"CheckIcon",9),e&2&&(d("styleClass","p-checkbox-icon"),M("data-pc-section","icon"))}function Vt(e,o){if(e&1&&(ue(0),S(1,zt,1,2,"span",7)(2,Dt,1,2,"CheckIcon",6),pe()),e&2){let t=w(2);m(),d("ngIf",t.checkboxIcon),m(),d("ngIf",!t.checkboxIcon)}}function jt(e,o){e&1&&k(0,"MinusIcon",9),e&2&&(d("styleClass","p-checkbox-icon"),M("data-pc-section","icon"))}function At(e,o){if(e&1&&(ue(0),S(1,Vt,3,2,"ng-container",4)(2,jt,1,2,"MinusIcon",6),pe()),e&2){let t=w();m(),d("ngIf",t.checked),m(),d("ngIf",t._indeterminate())}}function Ft(e,o){}function Nt(e,o){e&1&&S(0,Ft,0,0,"ng-template")}var Rt={provide:ie,useExisting:N(()=>re),multi:!0},re=(()=>{class e extends We{value;name;disabled;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;style;inputStyle;styleClass;inputClass;indeterminate=!1;size;formControl;checkboxIcon;readonly;required;autofocus;trueValue=!0;falseValue=!1;variant="outlined";onChange=new L;onFocus=new L;onBlur=new L;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.model===this.trueValue:qe(this.value,this.model)}get containerClass(){return{"p-checkbox p-component":!0,"p-checkbox-checked p-highlight":this.checked,"p-disabled":this.disabled,"p-variant-filled":this.variant==="filled"||this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-checkbox-sm p-inputfield-sm":this.size==="small","p-checkbox-lg p-inputfield-lg":this.size==="large"}}_indeterminate=Ie(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;_componentStyle=_e(rt);ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._checkboxIconTemplate=t.template;break;case"checkboxicon":this._checkboxIconTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t),t.indeterminate&&this._indeterminate.set(t.indeterminate.currentValue)}updateModel(t){let n,i=this.injector.get(Ne,null,{optional:!0,self:!0}),r=i&&!this.formControl?i.value:this.model;this.binary?(n=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.model=n,this.onModelChange(n)):(this.checked||this._indeterminate()?n=r.filter(a=>!Ue(a,this.value)):n=r?[...r,this.value]:[this.value],this.onModelChange(n),this.model=n,this.formControl&&this.formControl.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:t})}handleChange(t){this.readonly||this.updateModel(t)}onInputFocus(t){this.focused=!0,this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.onBlur.emit(t),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(t){this.model=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){setTimeout(()=>{this.disabled=t,this.cd.markForCheck()})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=O(e)))(i||e)}})();static \u0275cmp=$({type:e,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(n,i,r){if(n&1&&(he(r,Ot,4),he(r,He,4)),n&2){let a;z(a=D())&&(i.checkboxIconTemplate=a.first),z(a=D())&&(i.templates=a)}},viewQuery:function(n,i){if(n&1&&ee(Lt,5),n&2){let r;z(r=D())&&(i.inputViewChild=r.first)}},inputs:{value:"value",name:"name",disabled:[2,"disabled","disabled",E],binary:[2,"binary","binary",E],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",Pe],inputId:"inputId",style:"style",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",E],size:"size",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",E],required:[2,"required","required",E],autofocus:[2,"autofocus","autofocus",E],trueValue:"trueValue",falseValue:"falseValue",variant:"variant"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[G([Rt,rt]),le,J,Y],decls:6,vars:29,consts:[["input",""],[3,"ngClass"],["type","checkbox",3,"focus","blur","change","value","checked","disabled","readonly","ngClass"],[1,"p-checkbox-box"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"styleClass",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"]],template:function(n,i){if(n&1){let r=U();u(0,"div",1)(1,"input",2,0),P("focus",function(l){return y(r),v(i.onInputFocus(l))})("blur",function(l){return y(r),v(i.onInputBlur(l))})("change",function(l){return y(r),v(i.handleChange(l))}),p(),u(3,"div",3),S(4,At,3,2,"ng-container",4)(5,Nt,1,0,null,5),p()()}n&2&&(de(i.style),B(i.styleClass),d("ngClass",i.containerClass),M("data-p-highlight",i.checked)("data-p-checked",i.checked)("data-p-disabled",i.disabled),m(),de(i.inputStyle),B(i.inputClass),d("value",i.value)("checked",i.checked)("disabled",i.disabled)("readonly",i.readonly)("ngClass",Le(26,Tt)),M("id",i.inputId)("name",i.name)("tabindex",i.tabindex)("required",i.required)("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel),m(3),d("ngIf",!i.checkboxIconTemplate&&!i._checkboxIconTemplate),m(),d("ngTemplateOutlet",i.checkboxIconTemplate||i._checkboxIconTemplate)("ngTemplateOutletContext",Te(27,Pt,i.checked)))},dependencies:[te,ze,De,Ve,Ze,nt,oe],encapsulation:2,changeDetection:0})}return e})(),at=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=T({type:e});static \u0275inj=I({imports:[re,oe,oe]})}return e})();var st=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=T({type:e});static \u0275inj=I({})}return e})();var xt=se(kt());var ft=se(mt(),1),Gt=/[^\p{L}\p{N}]+/ug,Zt=e=>e==null?"":Array.isArray(e)?e.map(o=>o.toString().trim()).filter(o=>o.length>0).join(" "):typeof e=="function"?e.name?e.name:"":typeof e.toString!="function"?"":e.toString().trim(),Kt=(e,o={})=>{let t=Zt(e),n=o.punctuationRegex??Gt,i=t?(0,ft.default)(n?t.replace(n," "):t,o):"";return i?i[0].toLocaleUpperCase(o.locale)+i.slice(1):""},gt=Kt;var ye=se(bt()),yt=(e,o)=>{let t=typeof e;return t==="number"?!o&&Number.isInteger(e)||o?.every(n=>Number.isInteger(n))?"int":"double":(0,xt.default)(e).isValid()?"DateTime":t},Z=e=>{let o=typeof e;return o!=="object"&&o!=="function"},xe=(e,o)=>{let t=e[0];return Array.isArray(t)?`List<${xe(t,o)}>`:Z(t)?yt(t,e):V(j(t,o.usePluralize),o.usePascalCase)},V=(e,o)=>o&&e?gt(e):e,Xt=(e,o)=>o&&e?ye.default.plural(e):e,j=(e,o)=>o&&e?ye.default.singular(e):e,ae=(e,o,t,n)=>{if(e[t]=[],Array.isArray(n)){let i=n[0],r=t,a=Z(i)||Array.isArray(i)?`List<${xe(i,o)}>`:`List<${V(j(r,o.usePluralize),o.usePascalCase)}>`;e[t].push({name:r,type:a,isArray:!1}),!Z(i)&&!Array.isArray(i)&&ae(e,o,t,i)}else for(let i in n){let r=Array.isArray(n[i]),a=r?n[i][0]:n[i];if(r){let l=Z(a)||Array.isArray(a)?`List<${xe(n[i],o)}>`:`List<${V(j(i,o.usePluralize),o.usePascalCase)}>`;e[t].push({name:i,type:l,isArray:r}),!Z(a)&&!Array.isArray(a)&&ae(e,o,i,a)}else if(a instanceof Object){let l=V(j(i,o.usePluralize),o.usePascalCase);e[t].push({name:i,type:l,isArray:!1}),ae(e,o,i,a)}else e[t].push({name:i,type:yt(a,null),isArray:!1})}},vt=(e,o)=>{let t="",n=JSON.parse(e);if(!Array.isArray(n)&&typeof n!="object")throw"Invalid JSON";let i={};ae(i,o,"jsonModel",n);let r=!0;for(let a in i){let l=i[a];r?r=!1:t+=`
`,t+=`public class ${V(j(a,o.usePluralize),o.usePascalCase)}
{
`;let C=!0;l?.forEach(x=>{C?C=!1:(t+=`
`,o.usePascalCase&&(t+=`
`)),o.usePascalCase&&(t+=`     [JsonProperty("${x.name}")]
`),t+=`     public ${x.type} ${V(x.isArray?Xt(x.name,o.usePluralize):j(x.name,o.usePluralize),o.usePascalCase)} { get; set; }`}),t+=`
}
`}return t};function Yt(e,o){if(e&1){let t=U();u(0,"div",4)(1,"div",13)(2,"p-checkBox",14),W("ngModelChange",function(i){y(t);let r=w();return Q(r.usePluralize,i)||(r.usePluralize=i),v(i)}),p(),u(3,"label",15),q(4,"Use Auto Pluralize"),p()(),u(5,"div",16)(6,"p-checkBox",17),W("ngModelChange",function(i){y(t);let r=w();return Q(r.usePascalCase,i)||(r.usePascalCase=i),v(i)}),p(),u(7,"label",18),q(8,"Use PascalCase"),p()()()}if(e&2){let t=w();m(2),H("ngModel",t.usePluralize),d("binary",!0),m(4),H("ngModel",t.usePascalCase),d("binary",!0)}}var Ct=class e{constructor(o,t,n){this.monacoLoaderService=o;this.helper=t;this.menuService=n;this.menuService.history$.pipe(Ae()).subscribe(i=>{let r=i.at(-1);r&&(this.data=r.data??{},this.outputEditorOptions.language=this.data.mode===3?"csharp":"javascript")}),this.monacoLoaderService.isMonacoLoaded$.pipe(K(i=>i),X(1)).subscribe(()=>{monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({noSyntaxValidation:!0,noSemanticValidation:!0,noSuggestionDiagnostics:!0})})}editorOptions={theme:"vs",language:"javascript",wordWrap:"on",minimap:{enabled:!1}};outputEditorOptions={theme:"vs",language:"javascript",readOnly:!0,wordWrap:"on",minimap:{enabled:!1}};text="";output="";sample="";usePluralize=!0;usePascalCase=!0;data={};modes=je;ngOnInit(){this.helper.readTextFile("assets/sample2.json").subscribe(o=>{this.sample=o})}onLoadSampleJson(){switch(this.data.mode){case 0:this.text=JSON.stringify(JSON.parse(this.sample));break;case 1:this.text=JSON.stringify(JSON.stringify(JSON.parse(this.sample)));break;case 2:this.text=JSON.stringify(JSON.parse(this.sample),null,2);break;case 3:this.text=JSON.stringify(JSON.parse(this.sample),null,2);break}}onProcess(){switch(this.data.mode){case 0:this.formatJson();break;case 1:this.stringToJson();break;case 2:this.jsonToString();break;case 3:this.jsonToCSharp();break}}formatJson(){try{this.output=JSON.stringify(JSON.parse(this.text),null,2)}catch{this.output="Invalid JSON"}}stringToJson(){try{this.output=JSON.stringify(JSON.parse(JSON.parse(this.text)),null,2)}catch{this.output="Invalid JSON"}}jsonToString(){try{this.output=JSON.stringify(JSON.stringify(JSON.parse(this.text)))}catch(o){console.error(o),this.output="Invalid JSON"}}jsonToCSharp(){this.output=vt(this.text,{usePluralize:this.usePluralize,usePascalCase:this.usePascalCase})}static \u0275fac=function(t){return new(t||e)(_(me),_(et),_(tt))};static \u0275cmp=$({type:e,selectors:[["app-json-formatter"]],decls:22,vars:9,consts:[["upperPart",""],[1,"flex","flex-col","w-full"],[3,"title","subTitle"],[1,"flex","flex-col","items-center","justify-center","mb-5"],[1,"flex","mb-8"],[1,"flex","justify-center"],["variant","outlined",1,"mr-3",3,"onClick","label"],[3,"onClick","label"],[1,"grid","grid-cols-2","gap-2"],[1,"flex","justify-center","mb-1","border","border-zinc-200"],[1,"text-xl","font-semibold"],[1,"flex","justify-center","border","border-zinc-200"],[1,"w-full","h-[600px]",3,"ngModelChange","options","ngModel"],[1,"flex","items-center"],["inputId","pluralize",3,"ngModelChange","ngModel","binary"],["for","pluralize",1,"ml-2"],[1,"flex","items-center","ml-5"],["inputId","pascalcase",3,"ngModelChange","ngModel","binary"],["for","pascalcase",1,"ml-2"]],template:function(t,n){if(t&1){let i=U();u(0,"div",1)(1,"div",null,0),k(3,"app-content-header",2),u(4,"div",3),S(5,Yt,9,4,"div",4),u(6,"div",5)(7,"p-button",6),P("onClick",function(){return y(i),v(n.onLoadSampleJson())}),p(),u(8,"p-button",7),P("onClick",function(){return y(i),v(n.onProcess())}),p()()()(),u(9,"div",8)(10,"div")(11,"div",9)(12,"span",10),q(13,"Input"),p()(),u(14,"div",11)(15,"ngx-monaco-editor",12),W("ngModelChange",function(a){return y(i),Q(n.text,a)||(n.text=a),v(a)}),p()()(),u(16,"div")(17,"div",9)(18,"span",10),q(19,"Output"),p()(),u(20,"div",11)(21,"ngx-monaco-editor",12),W("ngModelChange",function(a){return y(i),Q(n.output,a)||(n.output=a),v(a)}),p()()()()()}t&2&&(m(3),d("title",n.data.title)("subTitle",n.data.subTitle),m(2),Oe(n.data.mode===n.modes.json2CSharp?5:-1),m(2),d("label",n.data.sampleButtonLabel),m(),d("label",n.data.actionButtonLabel),m(7),d("options",n.editorOptions),H("ngModel",n.text),m(6),d("options",n.outputEditorOptions),H("ngModel",n.output))},dependencies:[te,st,Xe,Ke,Be,Re,Je,ot,it,at,re,Ye],encapsulation:2})};export{Ct as JsonFormatterComponent};
