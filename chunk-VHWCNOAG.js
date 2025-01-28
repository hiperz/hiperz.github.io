import{c as z,e as H}from"./chunk-XVRCGFJS.js";import{a as K}from"./chunk-TRQRKCI2.js";import"./chunk-ISJQRGFJ.js";import"./chunk-3AQ75QP2.js";import"./chunk-POHGELP5.js";import"./chunk-B3L447HN.js";import"./chunk-KYV3WCF5.js";import"./chunk-OGU3TJ4F.js";import"./chunk-SWIMMNMM.js";import"./chunk-4FHPWRTT.js";import"./chunk-G3Y44POW.js";import"./chunk-M4UGFUFS.js";import{$ as V,L as J,S as W,T as A,U as G,V as b,Y as L}from"./chunk-EAVIETVT.js";import{Bb as i,Cb as o,Db as P,Eb as M,Ec as $,Fb as x,Gb as y,Gc as N,Hc as R,Ic as B,Jb as h,Kb as j,Kc as T,Lb as v,Mb as m,Ob as f,Pb as u,Rb as p,Sb as S,Ta as r,U as E,V as D,Yb as q,_ as I,cb as _,db as F,gb as O,ja as C,jb as s,qb as Q,rb as l,va as w,vb as k}from"./chunk-NEDSRAHM.js";var ee=({dt:e})=>`
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
`,te={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},U=(()=>{class e extends L{name="card";theme=ee;classes=te;static \u0275fac=(()=>{let t;return function(n){return(t||(t=C(e)))(n||e)}})();static \u0275prov=E({token:e,factory:e.\u0275fac})}return e})();var ne=["header"],ie=["title"],oe=["subtitle"],ae=["content"],re=["footer"],le=["*",[["p-header"]],[["p-footer"]]],ce=["*","p-header","p-footer"];function pe(e,c){e&1&&y(0)}function de(e,c){if(e&1&&(i(0,"div",8),v(1,1),s(2,pe,1,0,"ng-container",6),o()),e&2){let t=h();r(2),l("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function se(e,c){if(e&1&&(M(0),p(1),x()),e&2){let t=h(2);r(),S(t.header)}}function me(e,c){e&1&&y(0)}function fe(e,c){if(e&1&&(i(0,"div",9),s(1,se,2,1,"ng-container",10)(2,me,1,0,"ng-container",6),o()),e&2){let t=h();r(),l("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),r(),l("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function ue(e,c){if(e&1&&(M(0),p(1),x()),e&2){let t=h(2);r(),S(t.subheader)}}function ge(e,c){e&1&&y(0)}function he(e,c){if(e&1&&(i(0,"div",11),s(1,ue,2,1,"ng-container",10)(2,ge,1,0,"ng-container",6),o()),e&2){let t=h();r(),l("ngIf",t.subheader&&!t._subtitleTemplate&&t.subtitleTemplate),r(),l("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function ye(e,c){e&1&&y(0)}function _e(e,c){e&1&&y(0)}function ve(e,c){if(e&1&&(i(0,"div",12),v(1,2),s(2,_e,1,0,"ng-container",6),o()),e&2){let t=h();r(2),l("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var Te=(()=>{class e extends V{header;subheader;set style(t){J(this._style(),t)||this._style.set(t)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=w(null);_componentStyle=I(U);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=C(e)))(n||e)}})();static \u0275cmp=_({type:e,selectors:[["p-card"]],contentQueries:function(d,n,g){if(d&1&&(m(g,W,5),m(g,A,5),m(g,ne,4),m(g,ie,4),m(g,oe,4),m(g,ae,4),m(g,re,4),m(g,G,4)),d&2){let a;f(a=u())&&(n.headerFacet=a.first),f(a=u())&&(n.footerFacet=a.first),f(a=u())&&(n.headerTemplate=a.first),f(a=u())&&(n.titleTemplate=a.first),f(a=u())&&(n.subtitleTemplate=a.first),f(a=u())&&(n.contentTemplate=a.first),f(a=u())&&(n.footerTemplate=a.first),f(a=u())&&(n.templates=a)}},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[q([U]),O],ngContentSelectors:ce,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[4,"ngIf"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(d,n){d&1&&(j(le),i(0,"div",0),s(1,de,3,1,"div",1),i(2,"div",2),s(3,fe,3,2,"div",3)(4,he,3,2,"div",4),i(5,"div",5),v(6),s(7,ye,1,0,"ng-container",6),o(),s(8,ve,3,1,"div",7),o()()),d&2&&(k(n.styleClass),l("ngClass","p-card p-component")("ngStyle",n._style()),Q("data-pc-name","card"),r(),l("ngIf",n.headerFacet||n.headerTemplate||n._headerTemplate),r(2),l("ngIf",n.header||n.titleTemplate||n._titleTemplate),r(),l("ngIf",n.subheader||n.subtitleTemplate||n._subtitleTemplate),r(3),l("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),r(),l("ngIf",n.footerFacet||n.footerTemplate||n._footerTemplate))},dependencies:[T,$,N,B,R,b],encapsulation:2,changeDetection:0})}return e})(),X=(()=>{class e{static \u0275fac=function(d){return new(d||e)};static \u0275mod=F({type:e});static \u0275inj=D({imports:[Te,b,b]})}return e})();var Y=class e{ngOnInit(){}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=_({type:e,selectors:[["app-home"]],decls:22,vars:0,consts:[["translate","",1,"title"],["translate","",1,"intro"],[1,"section"],["translate",""],["translate","",1,"section"],[1,"mt-5"]],template:function(t,d){t&1&&(i(0,"div")(1,"div",0),p(2," Welcome to JunaPapa's Blog! "),o(),i(3,"div",1),p(4," JunaPapa's Blog is a comprehensive website where you can find a variety of games I developed for casual play on the web, useful developer tools, and articles with development tips and troubleshooting advice. "),o(),i(5,"div",2)(6,"h3",3),p(7,"Games for Fun"),o(),i(8,"p",3),p(9,"Explore a selection of fun and simple games that you can enjoy right here on the website. These games are designed for quick enjoyment and easy access, no downloads required!"),o()(),i(10,"div",2)(11,"h3",3),p(12,"Developer Tools"),o(),i(13,"p",3),p(14,"Check out useful development tools that can make your coding tasks easier and more efficient. Whether you need code snippets, debugging tools, or more, you'll find helpful resources here."),o()(),i(15,"div",4)(16,"h3",3),p(17,"Development Tips & Troubleshooting"),o(),i(18,"p",3),p(19,"Stay updated with the latest development tips, tricks, and troubleshooting advice. Whether you're solving a complex issue or learning something new, here articles have got you covered."),o()(),i(20,"div",5),P(21,"app-article-list"),o()())},dependencies:[T,X,K,H,z],styles:[".content[_ngcontent-%COMP%]{text-align:center;margin-top:50px;padding:20px}.title[_ngcontent-%COMP%]{font-size:2.5em;font-weight:700;color:#333}.intro[_ngcontent-%COMP%]{font-size:1.2em;color:#666;margin-top:20px;line-height:1.6}.section[_ngcontent-%COMP%]{margin-top:40px}.section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#37addc;font-weight:700}.section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1em;color:#555}"],changeDetection:0})};export{Y as HomeComponent};
