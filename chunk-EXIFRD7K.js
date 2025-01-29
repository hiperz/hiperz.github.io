import{a as Z}from"./chunk-5GRQPP36.js";import"./chunk-TKZV4TZY.js";import"./chunk-4PYQVCM6.js";import"./chunk-5KH6VXMJ.js";import"./chunk-VH7NCB2A.js";import"./chunk-S35HUXPS.js";import"./chunk-ZIHJXZUP.js";import"./chunk-3MRLYSDT.js";import"./chunk-DP65WXLZ.js";import"./chunk-WDOVNPTQ.js";import{r as G}from"./chunk-GJXUTEHT.js";import{P as L,X as V,Y as K,Z as U,_ as S,ba as X,c as W,d as A,ea as Y}from"./chunk-VZYFHTC7.js";import{Db as a,Eb as o,Fb as q,Gb as E,Hb as D,Hc as R,Ib as T,Jc as z,Kc as H,Lb as y,Lc as J,Mb as N,Nb as x,Nc as M,Ob as m,Qb as f,Rb as u,Ta as i,Tb as c,U as F,Ub as v,V as Q,Vb as C,_ as O,_b as $,cb as b,db as w,gb as B,gc as g,hc as h,ja as I,jb as s,sb as P,tb as l,va as k,xb as j}from"./chunk-OHA7V53V.js";var ae=({dt:e})=>`
.p-card {
    background: ${e("card.background")};
    color: ${e("card.color")};
    box-shadow: ${e("card.shadow")};
    border-radius: ${e("card.border.radius")};
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: ${e("card.caption.gap")};
}

.p-card-body {
    padding: ${e("card.body.padding")};
    display: flex;
    flex-direction: column;
    gap: ${e("card.body.gap")};
}

.p-card-title {
    font-size: ${e("card.title.font.size")};
    font-weight: ${e("card.title.font.weight")};
}

.p-card-subtitle {
    color: ${e("card.subtitle.color")};
}
`,oe={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},ee=(()=>{class e extends X{name="card";theme=ae;classes=oe;static \u0275fac=(()=>{let t;return function(n){return(t||(t=I(e)))(n||e)}})();static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})();var re=["header"],le=["title"],pe=["subtitle"],ce=["content"],de=["footer"],se=["*",[["p-header"]],[["p-footer"]]],me=["*","p-header","p-footer"];function fe(e,p){e&1&&T(0)}function ue(e,p){if(e&1&&(a(0,"div",8),x(1,1),s(2,fe,1,0,"ng-container",6),o()),e&2){let t=y();i(2),l("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function ge(e,p){if(e&1&&(E(0),c(1),D()),e&2){let t=y(2);i(),v(t.header)}}function he(e,p){e&1&&T(0)}function _e(e,p){if(e&1&&(a(0,"div",9),s(1,ge,2,1,"ng-container",10)(2,he,1,0,"ng-container",6),o()),e&2){let t=y();i(),l("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),i(),l("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function ye(e,p){if(e&1&&(E(0),c(1),D()),e&2){let t=y(2);i(),v(t.subheader)}}function ve(e,p){e&1&&T(0)}function Te(e,p){if(e&1&&(a(0,"div",11),s(1,ye,2,1,"ng-container",10)(2,ve,1,0,"ng-container",6),o()),e&2){let t=y();i(),l("ngIf",t.subheader&&!t._subtitleTemplate&&t.subtitleTemplate),i(),l("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function Ce(e,p){e&1&&T(0)}function be(e,p){e&1&&T(0)}function xe(e,p){if(e&1&&(a(0,"div",12),x(1,2),s(2,be,1,0,"ng-container",6),o()),e&2){let t=y();i(2),l("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var Me=(()=>{class e extends Y{header;subheader;set style(t){L(this._style(),t)||this._style.set(t)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=k(null);_componentStyle=O(ee);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=I(e)))(n||e)}})();static \u0275cmp=b({type:e,selectors:[["p-card"]],contentQueries:function(d,n,_){if(d&1&&(m(_,V,5),m(_,K,5),m(_,re,4),m(_,le,4),m(_,pe,4),m(_,ce,4),m(_,de,4),m(_,U,4)),d&2){let r;f(r=u())&&(n.headerFacet=r.first),f(r=u())&&(n.footerFacet=r.first),f(r=u())&&(n.headerTemplate=r.first),f(r=u())&&(n.titleTemplate=r.first),f(r=u())&&(n.subtitleTemplate=r.first),f(r=u())&&(n.contentTemplate=r.first),f(r=u())&&(n.footerTemplate=r.first),f(r=u())&&(n.templates=r)}},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[$([ee]),B],ngContentSelectors:me,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[4,"ngIf"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(d,n){d&1&&(N(se),a(0,"div",0),s(1,ue,3,1,"div",1),a(2,"div",2),s(3,_e,3,2,"div",3)(4,Te,3,2,"div",4),a(5,"div",5),x(6),s(7,Ce,1,0,"ng-container",6),o(),s(8,xe,3,1,"div",7),o()()),d&2&&(j(n.styleClass),l("ngClass","p-card p-component")("ngStyle",n._style()),P("data-pc-name","card"),i(),l("ngIf",n.headerFacet||n.headerTemplate||n._headerTemplate),i(2),l("ngIf",n.header||n.titleTemplate||n._titleTemplate),i(),l("ngIf",n.subheader||n.subtitleTemplate||n._subtitleTemplate),i(3),l("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),i(),l("ngIf",n.footerFacet||n.footerTemplate||n._footerTemplate))},dependencies:[M,R,z,J,H,S],encapsulation:2,changeDetection:0})}return e})(),te=(()=>{class e{static \u0275fac=function(d){return new(d||e)};static \u0275mod=w({type:e});static \u0275inj=Q({imports:[Me,S,S]})}return e})();var ne=class e{intro=G;static \u0275fac=function(t){return new(t||e)};static \u0275cmp=b({type:e,selectors:[["app-home"]],decls:30,vars:24,consts:[[1,"title"],[1,"intro"],[1,"section"],[1,"mt-5"]],template:function(t,d){t&1&&(a(0,"div")(1,"div",0),c(2),g(3,"translate"),o(),a(4,"div",1),c(5),g(6,"translate"),o(),a(7,"div",2)(8,"h3"),c(9),g(10,"translate"),o(),a(11,"p"),c(12),g(13,"translate"),o()(),a(14,"div",2)(15,"h3"),c(16),g(17,"translate"),o(),a(18,"p"),c(19),g(20,"translate"),o()(),a(21,"div",2)(22,"h3"),c(23),g(24,"translate"),o(),a(25,"p"),c(26),g(27,"translate"),o()(),a(28,"div",3),q(29,"app-article-list"),o()()),t&2&&(i(2),C(" ",h(3,8,"Welcome to JunaPapa's Blog!")," "),i(3),C(" ",h(6,10,d.intro)," "),i(4),v(h(10,12,"Games for Fun")),i(3),C(" ",h(13,14,"Explore a selection of fun and simple games that you can enjoy right here on the website. These games are designed for quick enjoyment and easy access, no downloads required!")," "),i(4),v(h(17,16,"Developer Tools")),i(3),C(" ",h(20,18,"Check out useful development tools that can make your coding tasks easier and more efficient. Whether you need code snippets, debugging tools, or more, you'll find helpful resources here.")," "),i(4),v(h(24,20,"Development Tips & Troubleshooting")),i(3),C(" ",h(27,22,"Stay updated with the latest development tips, tricks, and troubleshooting advice. Whether you're solving a complex issue or learning something new, here articles have got you covered.")," "))},dependencies:[M,te,Z,A,W],styles:[".content[_ngcontent-%COMP%]{text-align:center;margin-top:50px;padding:20px}.title[_ngcontent-%COMP%]{font-size:2.5em;font-weight:700;color:#333}.intro[_ngcontent-%COMP%]{font-size:1.2em;color:#666;margin-top:20px;line-height:1.6}.section[_ngcontent-%COMP%]{margin-top:40px}.section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#37addc;font-weight:700}.section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1em;color:#555}"]})};export{ne as HomeComponent};
