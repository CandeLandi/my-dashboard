import{a as b}from"./chunk-KLPYSV4X.js";import{$ as w,$a as o,Fa as c,Ka as s,Va as g,Wa as h,Xa as u,Za as f,_a as _,ab as i,bb as x,cb as v,gb as l,hb as S,ib as C,kb as E,lb as F,nb as k,ya as r}from"./chunk-5RC3RGOD.js";function T(e,t){return this.frameworks}var $=(e,t,d)=>({"bg-red-100":e,"bg-pink-100":t,"bg-blue-100":d});function y(e,t){e&1&&(o(0,"p"),l(1,"Hola mundo"),i())}function A(e,t){e&1&&(o(0,"p"),l(1,"****"),i())}function I(e,t){e&1&&(o(0,"p"),l(1,"Arriba de 90 "),i())}function M(e,t){e&1&&(o(0,"p"),l(1,"Arriba de 80 "),i())}function D(e,t){e&1&&(o(0,"p"),l(1,"Reprobado"),i())}function R(e,t){if(e&1&&(o(0,"li"),l(1),i()),e&2){let d=t.$implicit,p=t.$index,m=t.$count,n=t.$index,a=t.$count;h(k(5,$,n%2===0&&n!==0&&n!==a-1,n%2!==0&&n!==0&&n!==a-1,n===0||n===a-1)),r(),E(" ",p+1,"/",m," - ",d," ")}}function H(e,t){if(e&1&&(o(0,"li"),l(1),i()),e&2){let d=t.$implicit;r(),S(d)}}function N(e,t){e&1&&(o(0,"li"),l(1," No hay frameworks agregados "),i())}var z=(()=>{let t=class t{constructor(){this.showContent=c(!1),this.grade=c("A"),this.frameworks=c(["Angular","Vue","Svelte","Qwik","React"]),this.frameworks2=c([])}toggleContent(){this.showContent.update(p=>!p)}};t.\u0275fac=function(m){return new(m||t)},t.\u0275cmp=w({type:t,selectors:[["ng-component"]],standalone:!0,features:[F],decls:24,vars:6,consts:[["title","Control Flow",3,"withShadow"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-3"],[1,"bg-white","shadow","p-10"],[1,"text-2xl"],[1,"p-2","bg-blue-500","rounded","text-white",3,"click"],[1,"bg-white","rounded","shadow","p-10"],[1,"text-3xl"],[3,"class"]],template:function(m,n){if(m&1&&(x(0,"app-title",0),o(1,"section",1)(2,"div",2)(3,"h2",3),l(4),i(),o(5,"button",4),v("click",function(){return n.toggleContent()}),l(6," Click me! "),i(),s(7,y,2,0,"p")(8,A,2,0),i(),o(9,"div",5)(10,"h2",6),l(11),i(),s(12,I,2,0)(13,M,2,0)(14,D,2,0),i(),o(15,"div",5)(16,"ul"),f(17,R,2,9,"li",7,T,!0),i()(),o(19,"div",5)(20,"ul"),f(21,H,2,1,"li",null,T,!0,N,2,0,"li"),i()()()),m&2){let a;g("withShadow",!0),r(4),C("if: ",n.showContent(),""),r(3),u(7,n.showContent()?7:8),r(4),C(" ",n.grade()," "),r(),u(12,(a=n.grade())==="A"?12:a==="A"?13:14),r(5),_(n.frameworks()),r(4),_(n.frameworks2())}},dependencies:[b]});let e=t;return e})();export{z as default};
