import{a as O,b as j}from"./chunk-ODYEPA4H.js";import{a as F,b as U,c as Y,d as q}from"./chunk-77T3ILQY.js";import{a as z,b as H}from"./chunk-3MRLYSDT.js";import{b as P,e as k,f as A,g as L}from"./chunk-DP65WXLZ.js";import{c as V,d as K,oa as G,pa as N}from"./chunk-VZYFHTC7.js";import{Db as a,Eb as r,Fb as D,Jb as W,Kb as v,Ta as l,Tb as i,Ub as g,Vb as s,Xb as h,Yb as C,Zb as T,cb as E,ga as x,gc as o,ha as f,hc as p,jb as B,kc as R,tb as w}from"./chunk-OHA7V53V.js";function ne(M,c){if(M&1&&(i(0),o(1,"translate")),M&2){let t=c.$implicit;s(" ",p(1,1,t)," ")}}var ae=(e=>(e[e.Day=0]="Day",e[e.Month=1]="Month",e[e.Year=2]="Year",e))(ae||{}),J=class M{calcResult={};principle=1e8;principleInKor=this.numToKorean(this.principle);taxrate1=14;taxrate2=1.4;yearlyInterest=4;days=30;calcData;interestCalcType="General";interestCalcOptions=["General","Toss"];ngOnInit(){}onPrincipleChange(c){this.principleInKor=this.numToKorean(this.principle)}onCalculateClick(){let t={isToss:this.interestCalcType==="Toss",principle:this.principle,taxrate1:this.taxrate1,taxrate2:this.taxrate2,yearlyInterest:this.yearlyInterest,days:this.days},e=5e7,d=t.isToss&&t.principle>e?e:t.principle,m=t.isToss&&t.principle>e?t.principle-e:0,n=t.isToss?2.3:t.yearlyInterest,y=t.isToss?4:0,u=this.calcInterestPerDay(d,n),I=this.calcInterestPerDay(m,y),Q=Math.trunc(u+I),X=Math.trunc(this.applyTax(u+I,t.taxrate1,t.taxrate2)),S=this.calcInterest(d,t.days,n,t.isToss,0),_=this.calcInterest(m,t.days,y,t.isToss,0),Z=Math.trunc(S+_),b=Math.trunc(this.applyTax(S+_,t.taxrate1,t.taxrate2)),$=this.calcInterest(d,t.days,n,!1,0),ee=this.calcInterest(m,t.days,y,!1,0),re=Math.trunc(S+_),te=Math.trunc(this.applyTax($+ee,t.taxrate1,t.taxrate2)),ie=t.isToss?{h:"Toss\uB294 \uC77C \uBCF5\uB9AC \uACC4\uC0B0\uC73C\uB85C \uB2E8\uB9AC\uC2DD \uBCF4\uB2E4",c:this.numToKorean(b-te)+"\uC6D0",t:"\uB354 \uBC1B\uC2B5\uB2C8\uB2E4."}:{};this.calcResult={days:t.days,di1:u,di2:I,totaldi:Q,totaldiat:X,ti1:S,ti2:_,totalti:Z,totaltiat:b,tsimessage:ie}}numToKorean(c){if(c>=0){let t=c,e=["","\uB9CC ","\uC5B5 ","\uC870 ","\uACBD "],d=1e4,m=e.length,n=[],y="";for(let u=0;u<m;u++){let I=t%Math.pow(d,u+1)/Math.pow(d,u);I=Math.floor(I),I>0&&(n[u]=I)}for(let u=0;u<n.length;u++)n[u]&&(y=String(n[u])+e[u]+y);return y?.length>0?y:"0"}else return"0"}calcInterestPerDay(c,t){return c*t/100/365}applyTax(c,t,e){let d=Math.trunc(c*t/1e3)*10,m=Math.trunc(c*e/1e3)*10;return c-(d+m)}calcInterest(c,t,e,d,m){let n=0;return e>0&&c>0&&Array.from({length:t},(y,u)=>u).forEach(y=>{let u=d?c+n:c;n+=this.calcInterestPerDay(u,e)}),Math.trunc(n)}static \u0275fac=function(t){return new(t||M)};static \u0275cmp=E({type:M,selectors:[["app-toss-calculator"]],decls:112,vars:79,consts:[["item",""],[1,"flex","flex-col","bg-gray-100","p-5"],[1,"flex","items-center","justify-center","px-5","p-5"],["src","/assets/images/calculator.png","width","50","height","50","alt",""],[1,"max-w","ml-2","text-4xl","font-dark","font-bold"],[1,"flex","h-full","items-start","justify-center"],[1,"flex","w-full","flex-col","items-center","px-5","bg-white","drop-shadow","border","p-5"],[1,"max-w","text-3xl","font-dark","font-bold","mb-5"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-1"],["type","text","pInputText","",3,"ngModelChange","ngModel"],["type","text","pInputText","",3,"ngModelChange","ngModel","disabled"],[3,"ngModelChange","ngModel","options","unselectable"],[1,"flex","mt-5","justify-center"],[1,"p-button-outlined",3,"onClick","label","disabled"],[1,"flex","flex-col","items-center","justify-center","px-5","text-gray-500","max-w","text-2xl","font-dark","font-bold"],[1,"m-1"],[1,"text-blue-400"],[1,"m-1","text-gray-700"],[1,"text-blue-500"]],template:function(t,e){if(t&1){let d=W();a(0,"div",1)(1,"div",2),D(2,"img",3),a(3,"span",4),i(4),o(5,"translate"),r()(),a(6,"div",5)(7,"div",6)(8,"div",7)(9,"span"),i(10),o(11,"translate"),r(),i(12),a(13,"span"),i(14),o(15,"translate"),r()(),a(16,"div",8)(17,"p-inputgroup")(18,"p-inputgroup-addon"),i(19),o(20,"translate"),r(),a(21,"input",9),T("ngModelChange",function(n){return x(d),C(e.principle,n)||(e.principle=n),f(n)}),v("ngModelChange",function(n){return x(d),f(e.onPrincipleChange(n))}),r(),a(22,"p-inputgroup-addon"),i(23),o(24,"translate"),r()(),a(25,"p-inputgroup")(26,"p-inputgroup-addon"),i(27),o(28,"translate"),r(),a(29,"input",10),T("ngModelChange",function(n){return x(d),C(e.yearlyInterest,n)||(e.yearlyInterest=n),f(n)}),r(),a(30,"p-inputgroup-addon"),i(31,"%"),r()(),a(32,"p-inputgroup")(33,"p-inputgroup-addon"),i(34),o(35,"translate"),r(),a(36,"input",9),T("ngModelChange",function(n){return x(d),C(e.taxrate1,n)||(e.taxrate1=n),f(n)}),r(),a(37,"p-inputgroup-addon"),i(38,"%"),r()(),a(39,"p-inputgroup")(40,"p-inputgroup-addon"),i(41),o(42,"translate"),r(),a(43,"input",9),T("ngModelChange",function(n){return x(d),C(e.taxrate2,n)||(e.taxrate2=n),f(n)}),r(),a(44,"p-inputgroup-addon"),i(45,"%"),r()(),a(46,"p-inputgroup")(47,"p-inputgroup-addon"),i(48),o(49,"translate"),r(),a(50,"input",9),T("ngModelChange",function(n){return x(d),C(e.days,n)||(e.days=n),f(n)}),r(),a(51,"p-inputgroup-addon"),i(52),o(53,"translate"),r()(),a(54,"p-inputgroup")(55,"p-inputgroup-addon"),i(56),o(57,"translate"),r(),a(58,"p-selectButton",11),T("ngModelChange",function(n){return x(d),C(e.interestCalcType,n)||(e.interestCalcType=n),f(n)}),B(59,ne,2,3,"ng-template",null,0,R),r()()(),a(61,"div",12)(62,"p-button",13),o(63,"translate"),v("onClick",function(){return x(d),f(e.onCalculateClick())}),r()(),a(64,"div",12)(65,"div",14)(66,"div",15)(67,"span"),i(68),o(69,"translate"),r(),a(70,"span",16),i(71),r(),a(72,"span"),i(73),o(74,"translate"),r(),i(75," ("),a(76,"span"),i(77),o(78,"translate"),r(),i(79,": "),a(80,"span",16),i(81),r(),a(82,"span"),i(83),o(84,"translate"),r(),i(85,") "),r(),a(86,"div",17),i(87),a(88,"span"),i(89),o(90,"translate"),r(),a(91,"span",18),i(92),r(),a(93,"span"),i(94),o(95,"translate"),r(),i(96," ("),a(97,"span"),i(98),o(99,"translate"),r(),i(100,": "),a(101,"span",18),i(102),r(),a(103,"span"),i(104),o(105,"translate"),r(),i(106,") "),r(),a(107,"div",17),i(108),a(109,"span",18),i(110),r(),i(111),r()()()()()()}t&2&&(l(4),s(" ",p(5,39,"Interest Calculator")," "),l(6),g(p(11,41,"Principal")),l(2),s(": ",e.principleInKor,""),l(2),g(p(15,43,"\uC6D0")),l(5),s(" ",p(20,45,"Principal")," "),l(2),h("ngModel",e.principle),l(2),s(" ",p(24,47,"KRW")," "),l(4),s(" ",p(28,49,"Annual Interest")," "),l(2),h("ngModel",e.yearlyInterest),w("disabled",e.interestCalcType==="Toss"),l(5),s(" ",p(35,51,"Income Tax")," "),l(2),h("ngModel",e.taxrate1),l(5),s(" ",p(42,53,"Local Tax")," "),l(2),h("ngModel",e.taxrate2),l(5),s(" ",p(49,55,"Deposit Period")," "),l(2),h("ngModel",e.days),l(2),s(" ",p(53,57,"Days"),""),l(4),s(" ",p(57,59,"Interest Calculation Method")," "),l(2),h("ngModel",e.interestCalcType),w("options",e.interestCalcOptions)("unselectable",!1),l(4),w("label",p(63,61,"Calculate"))("disabled",e.principle<=0),l(6),g(p(69,63,"Daily Interest")),l(3),s(" ",e.numToKorean(e.calcResult.totaldi)," "),l(2),g(p(74,65,"KRW")),l(4),g(p(78,67,"After Tax")),l(4),s(" ",e.numToKorean(e.calcResult.totaldiat)," "),l(2),g(p(84,69,"KRW")),l(4),s(" ",e.calcResult.days," "),l(2),g(p(90,71,"Total Interest for Days")),l(3),s(" ",e.numToKorean(e.calcResult.totalti)," "),l(2),g(p(95,73,"KRW")),l(4),g(p(99,75,"After Tax")),l(4),s(" ",e.numToKorean(e.calcResult.totaltiat)," "),l(2),g(p(105,77,"KRW")),l(4),s(" ",e.calcResult.tsimessage==null?null:e.calcResult.tsimessage.h," "),l(2),s(" ",e.calcResult.tsimessage==null?null:e.calcResult.tsimessage.c," "),l(),s(" ",e.calcResult.tsimessage==null?null:e.calcResult.tsimessage.t," "))},dependencies:[L,P,k,A,H,z,N,G,j,O,U,F,q,Y,K,V],encapsulation:2})};export{ae as InterestCalculationPeriodType,J as TossCalculatorComponent};
