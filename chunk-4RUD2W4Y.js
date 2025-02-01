import{b as X}from"./chunk-EGE3N36K.js";import{a as W}from"./chunk-C7VLAFM3.js";import{c as q,d as J,f as M}from"./chunk-DROQJ7SX.js";import{Pa as K,Qa as Q,Ra as V,h as $,p as G,w as y,x as b}from"./chunk-ZL7XJN45.js";import{Ab as j,Cb as D,Db as A,Eb as s,Fb as a,Gb as h,Jc as N,Lb as B,Mb as z,Qc as U,Ta as L,Ua as w,Ub as p,Vb as g,Wa as n,Wb as _,Xa as o,Xb as I,fb as v,hb as E,ib as H,kc as c,lc as f,mb as R,mc as F,ub as l,wa as k,zb as O}from"./chunk-VECOZZOS.js";function ie(r,i){if(r&1&&(s(0,"div")(1,"a",4),p(2),a()()),r&2){let e=i.$implicit;n(),l("href",e.routerLink,w),n(),_(" ",e.label," ")}}var C=class r{constructor(i){this.menuService=i}_item;get item(){return this._item}set item(i){if(i!==this._item&&(this._item=i,this._item)){let e=q.find(t=>t.category===this._item.category);this.category=e.label,this.itemList=this.menuService.getRelevantArticles(this._item)}}category="";itemList=[];static \u0275fac=function(e){return new(e||r)(o(M))};static \u0275cmp=v({type:r,selectors:[["app-relevant-article-list"]],inputs:{item:"item"},decls:11,vars:4,consts:[[1,"mt-10","p-2"],[1,"text-zinc-700"],[1,"border-b","my-2","border-zinc-300"],[1,"text-sm","text-zinc-500","font-semibold"],[1,"text-zinc-500","hover:text-primary-500","cursor-pointer",3,"href"]],template:function(e,t){e&1&&(s(0,"div",0)(1,"div",1)(2,"h2")(3,"span"),p(4),a(),p(5),c(6,"translate"),a()(),h(7,"div",2),s(8,"div",3),D(9,ie,3,2,"div",null,j),a()()),e&2&&(n(4),g(t.category),n(),_(" > ",f(6,2,"Posts related to this category")," "),n(4),A(t.itemList))},dependencies:[b,y],encapsulation:2})};var x=class r{constructor(i){this.elementRef=i;typeof MutationObserver<"u"&&new MutationObserver((t,d)=>{let u=this.elementRef.nativeElement.getElementsByTagName("script");if(u.length>0){this.at=0,this.total=u.length,this.reinsertScripts(u),d.disconnect();return}}).observe(this.elementRef.nativeElement,{childList:!0,subtree:!0})}at=0;total=0;reinsertScripts(i){let e=i[this.at];if(e){let t=document.createElement("script");t.type=e.type?e.type:"text/javascript",e.innerHTML?t.innerHTML=e.innerHTML:e.src&&(t.src=e.src),t.async=!1,t.onload=d=>{this.at++,this.reinsertScripts(i)},e.parentNode.replaceChild(t,e)}}static \u0275fac=function(e){return new(e||r)(o(k))};static \u0275dir=E({type:r,selectors:[["","runScripts",""]]})};var S=class r{constructor(i){this.sanitizer=i}transform(i){return this.sanitizer.bypassSecurityTrustHtml(i)}static \u0275fac=function(e){return new(e||r)(o($,16))};static \u0275pipe=H({name:"safeHtml",type:r,pure:!0})};function re(r,i){if(r&1&&(h(0,"div",6),c(1,"safeHtml")),r&2){let e=z();l("innerHTML",f(1,1,e.html),L)}}var Y=class r{constructor(i,e,t,d){this.menuService=i;this.router=e;this.helper=t;this.counter=d}htmlPath="";title="";tags=[];html;item;totalRead=0;timestamp="";script=`
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"><\/script>
<script>hljs.highlightAll();<\/script>
  `;ngOnInit(){let i=N.stripTrailingSlash(this.router.url),e=this.menuService.getMenuByUrl(i);if(e){this.item=e,this.title=e.label??"",this.timestamp=e.timestamp??"",this.tags=e.keywords?e.keywords.split(",").map(m=>m.trim()):[],this.htmlPath=`assets/${e.routerLink}.html`,this.html=void 0;let t=e.routerLink.split("/"),d=t.at(-2),u=+t.at(-1),T=J.find(m=>m.category===d&&m.id===u);if(T){let m=T.content;this.helper.updateMetaTags(m,e.keywords),this.html=this.script+m}}this.counter.getCounts([i]).subscribe(t=>{t.data.length>0&&(this.totalRead=t.data[0].visit??0)})}goBack(){history.back()}static \u0275fac=function(e){return new(e||r)(o(M),o(G),o(W),o(V))};static \u0275cmp=v({type:r,selectors:[["app-articles"]],inputs:{htmlPath:"htmlPath"},decls:16,vars:17,consts:[[1,"article-container","mx-auto","md:p-5","text-zinc-800","p-2"],[1,"mb-3","flex","justify-end"],[3,"click","label","text"],[1,"text-2xl","font-bold","mb-5","text-surface-700"],[1,"text-sm","font-bold","mb-5","text-surface-500","border-b","flex","flex-row","items-center"],[1,"ml-2"],["runScripts","",1,"overflow-auto",3,"innerHTML"],[3,"keywords"],[3,"item"]],template:function(e,t){e&1&&(s(0,"div",0)(1,"div",1)(2,"p-button",2),B("click",function(){return t.goBack()}),a()(),s(3,"div",3),p(4),a(),s(5,"div",4)(6,"div"),p(7),c(8,"translate"),c(9,"date"),a(),s(10,"div",5),p(11),c(12,"translate"),a()(),R(13,re,2,3,"div",6),a(),h(14,"app-article-tags",7)(15,"app-relevant-article-list",8)),e&2&&(n(2),l("label","Go back")("text",!0),n(2),g(t.title),n(3),I("",f(8,10,"Publish Date"),":\xA0",F(9,12,t.timestamp,"yyyy-MM-dd HH:mm:ss"),""),n(4),I("",f(12,15,"Total read"),":\xA0",t.totalRead,""),n(2),O(t.html?13:-1),n(),l("keywords",t.tags),n(),l("item",t.item))},dependencies:[S,x,Q,K,X,C,b,y,U],styles:['@charset "UTF-8";.article-container[_ngcontent-%COMP%]{line-height:2}[_nghost-%COMP%]     h1{border-inline-start:5px solid var(--p-primary-300)!important;padding-left:.8rem;line-height:1.2}[_nghost-%COMP%]     h2{border-inline-start:5px solid var(--p-primary-300)!important;padding-left:.8rem;line-height:1.2}[_nghost-%COMP%]     h3{border-inline-start:5px solid var(--p-primary-300)!important;padding-left:.8rem;line-height:1.2}[_nghost-%COMP%]     h4{border-inline-start:5px solid var(--p-primary-300)!important;padding-left:.8rem;line-height:1.2}[_nghost-%COMP%]     p{overflow-wrap:anywhere}[_nghost-%COMP%]     pre{line-height:1.5}[_nghost-%COMP%]     pre code{white-space:pre;margin:.5rem 0;font-size:1rem;border-radius:18px;padding:2rem!important}[_nghost-%COMP%]     pre ::-webkit-scrollbar{width:10px;height:10px;background-color:transparent}[_nghost-%COMP%]     pre ::-webkit-scrollbar-track{background:transparent}[_nghost-%COMP%]     pre ::-webkit-scrollbar-thumb{background-color:#00000080;border-radius:4px}']})};export{Y as ArticlesComponent};
