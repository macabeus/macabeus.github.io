import{S as Qe,i as Xe,s as Ye,e as i,t as _,k,j as He,c,a as p,g as v,d as l,n as E,m as Ne,b as j,f as y,Q as e,o as De,x as xe,u as Fe,v as Ue,h as je,X as Ze}from"../chunks/vendor-e84e9766.js";import{a as Se}from"../chunks/paths-bacddcca.js";import{G as et,a as tt}from"../chunks/GridWorks-6c5dca5c.js";const rt=async()=>await(await fetch("https://api.github.com/users/macabeus/repos?per_page=100&type=sources&page=1")).json();function We(b,t,n){const o=b.slice();return o[5]=t[n],o}function qe(b){let t,n=b[2]+"",o;return{c(){t=i("p"),o=_(n)},l(a){t=c(a,"P",{});var r=p(t);o=v(r,n),r.forEach(l)},m(a,r){y(a,t,r),e(t,o)},p(a,r){r&4&&n!==(n=a[2]+"")&&je(o,n)},d(a){a&&l(t)}}}function Be(b){let t,n,o=b[3]+"",a;return{c(){t=i("p"),n=_("\u2B50 "),a=_(o)},l(r){t=c(r,"P",{});var h=p(t);n=v(h,"\u2B50 "),a=v(h,o),h.forEach(l)},m(r,h){y(r,t,h),e(t,n),e(t,a)},p(r,h){h&8&&o!==(o=r[3]+"")&&je(a,o)},d(r){r&&l(t)}}}function Je(b){let t,n=b[5]+"",o;return{c(){t=i("span"),o=_(n),this.h()},l(a){t=c(a,"SPAN",{class:!0});var r=p(t);o=v(r,n),r.forEach(l),this.h()},h(){j(t,"class","tag svelte-8yvz59")},m(a,r){y(a,t,r),e(t,o)},p(a,r){r&16&&n!==(n=a[5]+"")&&je(o,n)},d(a){a&&l(t)}}}function at(b){let t,n,o,a=b[2]&&qe(b),r=b[3]!==null&&Be(b),h=b[4],u=[];for(let s=0;s<h.length;s+=1)u[s]=Je(We(b,h,s));return{c(){a&&a.c(),t=k(),r&&r.c(),n=k(),o=i("p");for(let s=0;s<u.length;s+=1)u[s].c()},l(s){a&&a.l(s),t=E(s),r&&r.l(s),n=E(s),o=c(s,"P",{});var g=p(o);for(let f=0;f<u.length;f+=1)u[f].l(g);g.forEach(l)},m(s,g){a&&a.m(s,g),y(s,t,g),r&&r.m(s,g),y(s,n,g),y(s,o,g);for(let f=0;f<u.length;f+=1)u[f].m(o,null)},p(s,g){if(s[2]?a?a.p(s,g):(a=qe(s),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null),s[3]!==null?r?r.p(s,g):(r=Be(s),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null),g&16){h=s[4];let f;for(f=0;f<h.length;f+=1){const M=We(s,h,f);u[f]?u[f].p(M,g):(u[f]=Je(M),u[f].c(),u[f].m(o,null))}for(;f<u.length;f+=1)u[f].d(1);u.length=h.length}},d(s){a&&a.d(s),s&&l(t),r&&r.d(s),s&&l(n),s&&l(o),Ze(u,s)}}}function st(b){let t,n,o,a,r,h,u,s,g,f,M,A,Z,L,ee,te,re,V,ae,se,w,H,$,oe,le,N,ne,ie,D,ce,pe,x,ue,he,S,F,R,fe,me,G,U,ge,de,_e,O,ve,W,be,ke,B,T,q,Ee,we,C,J;return r=new et({props:{images:[{src:`${Se}/klo-gba-js.png`,alt:"klo-gba.js website, showing a Game Boy Advance running Klonoa's game and a tilemap editor",caption:"klo-gba.js"},{src:`${Se}/macro-compiler.png`,alt:"Talk about MacroCompiler, with the slide showing the source code and its version compiled",caption:"MacroCompiler"},{src:`${Se}/vscode-fluent.png`,alt:"VSCode with the extension vscode-fluent running",caption:"vscode-fluent"}]}}),C=new tt({props:{works:b[0],$$slots:{default:[at,({description:m,stargazers:d,tags:P})=>({2:m,3:d,4:P}),({description:m,stargazers:d,tags:P})=>(m?4:0)|(d?8:0)|(P?16:0)]},$$scope:{ctx:b}}}),{c(){t=i("article"),n=i("h1"),o=_("Highlighted Open Source Projects"),a=k(),He(r.$$.fragment),h=k(),u=i("article"),s=i("h5"),g=i("a"),f=_("klo-gba.js"),M=k(),A=i("p"),Z=_("It's the level editor for "),L=i("strong"),ee=_("Klonoa: Empire of Dreams"),te=_(" game."),re=k(),V=i("p"),ae=_("Using this web tool, you can push the limits of this awesome game by customizing its maps and playing a custom ROM."),se=k(),w=i("article"),H=i("h5"),$=i("a"),oe=_("Macro Compiler"),le=k(),N=i("p"),ne=_("It's the compiler from EventMacro to an OpenKore plugin (a script written in Perl)."),ie=k(),D=i("p"),ce=_("EventMacro is the DSL used to automate the actions made on OpenKore \u2013 the bot used in the Ragnarok online game."),pe=k(),x=i("p"),ue=_("The compiler outputs a script in Perl since OpenKore itself is written in Perl."),he=k(),S=i("article"),F=i("h5"),R=i("a"),fe=_("vscode-fluent"),me=k(),G=i("p"),U=i("strong"),ge=_("Fluent"),de=_(" is Mozilla's programming language for natural-sounding translations."),_e=k(),O=i("p"),ve=_("And "),W=i("strong"),be=_("vscode-fluent"),ke=_(` is the Visual Code Studio extension to improve developer experience while working
      with this language, offering features such as syntax errors, code action to extract a string, and much more!`),B=k(),T=i("article"),q=i("h1"),Ee=_("Pet Open Source Projects"),we=k(),He(C.$$.fragment),this.h()},l(m){t=c(m,"ARTICLE",{});var d=p(t);n=c(d,"H1",{});var P=p(n);o=v(P,"Highlighted Open Source Projects"),P.forEach(l),a=E(d),Ne(r.$$.fragment,d),h=E(d),u=c(d,"ARTICLE",{});var I=p(u);s=c(I,"H5",{});var ye=p(s);g=c(ye,"A",{href:!0,target:!0,rel:!0});var $e=p(g);f=v($e,"klo-gba.js"),$e.forEach(l),ye.forEach(l),M=E(I),A=c(I,"P",{});var Q=p(A);Z=v(Q,"It's the level editor for "),L=c(Q,"STRONG",{});var Re=p(L);ee=v(Re,"Klonoa: Empire of Dreams"),Re.forEach(l),te=v(Q," game."),Q.forEach(l),re=E(I),V=c(I,"P",{});var Te=p(V);ae=v(Te,"Using this web tool, you can push the limits of this awesome game by customizing its maps and playing a custom ROM."),Te.forEach(l),I.forEach(l),se=E(d),w=c(d,"ARTICLE",{});var z=p(w);H=c(z,"H5",{});var Ce=p(H);$=c(Ce,"A",{href:!0,target:!0,rel:!0});var ze=p($);oe=v(ze,"Macro Compiler"),ze.forEach(l),Ce.forEach(l),le=E(z),N=c(z,"P",{});var Ae=p(N);ne=v(Ae,"It's the compiler from EventMacro to an OpenKore plugin (a script written in Perl)."),Ae.forEach(l),ie=E(z),D=c(z,"P",{});var Oe=p(D);ce=v(Oe,"EventMacro is the DSL used to automate the actions made on OpenKore \u2013 the bot used in the Ragnarok online game."),Oe.forEach(l),pe=E(z),x=c(z,"P",{});var Me=p(x);ue=v(Me,"The compiler outputs a script in Perl since OpenKore itself is written in Perl."),Me.forEach(l),z.forEach(l),he=E(d),S=c(d,"ARTICLE",{});var K=p(S);F=c(K,"H5",{});var Ge=p(F);R=c(Ge,"A",{href:!0,target:!0,rel:!0});var Ie=p(R);fe=v(Ie,"vscode-fluent"),Ie.forEach(l),Ge.forEach(l),me=E(K),G=c(K,"P",{});var Pe=p(G);U=c(Pe,"STRONG",{});var Ke=p(U);ge=v(Ke,"Fluent"),Ke.forEach(l),de=v(Pe," is Mozilla's programming language for natural-sounding translations."),Pe.forEach(l),_e=E(K),O=c(K,"P",{});var X=p(O);ve=v(X,"And "),W=c(X,"STRONG",{});var Le=p(W);be=v(Le,"vscode-fluent"),Le.forEach(l),ke=v(X,` is the Visual Code Studio extension to improve developer experience while working
      with this language, offering features such as syntax errors, code action to extract a string, and much more!`),X.forEach(l),K.forEach(l),d.forEach(l),B=E(m),T=c(m,"ARTICLE",{});var Y=p(T);q=c(Y,"H1",{});var Ve=p(q);Ee=v(Ve,"Pet Open Source Projects"),Ve.forEach(l),we=E(Y),Ne(C.$$.fragment,Y),Y.forEach(l),this.h()},h(){j(g,"href","https://github.com/macabeus/klo-gba.js"),j(g,"target","_blank"),j(g,"rel","noopener noreferrer"),j($,"href","https://github.com/macabeus/macro-compiler"),j($,"target","_blank"),j($,"rel","noopener noreferrer"),j(R,"href","https://github.com/macabeus/vscode-fluent"),j(R,"target","_blank"),j(R,"rel","noopener noreferrer")},m(m,d){y(m,t,d),e(t,n),e(n,o),e(t,a),De(r,t,null),e(t,h),e(t,u),e(u,s),e(s,g),e(g,f),e(u,M),e(u,A),e(A,Z),e(A,L),e(L,ee),e(A,te),e(u,re),e(u,V),e(V,ae),e(t,se),e(t,w),e(w,H),e(H,$),e($,oe),e(w,le),e(w,N),e(N,ne),e(w,ie),e(w,D),e(D,ce),e(w,pe),e(w,x),e(x,ue),e(t,he),e(t,S),e(S,F),e(F,R),e(R,fe),e(S,me),e(S,G),e(G,U),e(U,ge),e(G,de),e(S,_e),e(S,O),e(O,ve),e(O,W),e(W,be),e(O,ke),y(m,B,d),y(m,T,d),e(T,q),e(q,Ee),e(T,we),De(C,T,null),J=!0},p(m,[d]){const P={};d&1&&(P.works=m[0]),d&284&&(P.$$scope={dirty:d,ctx:m}),C.$set(P)},i(m){J||(xe(r.$$.fragment,m),xe(C.$$.fragment,m),J=!0)},o(m){Fe(r.$$.fragment,m),Fe(C.$$.fragment,m),J=!1},d(m){m&&l(t),Ue(r),m&&l(B),m&&l(T),Ue(C)}}}function ot(b,t,n){let o;return(async()=>{(await rt()).forEach(h=>{h.name in o&&(n(0,o[h.name].stargazers=h.stargazers_count,o),n(0,o[h.name].description=h.description,o))}),n(0,o)})(),n(0,o={"js-proposal-algebraic-effects":{priority:1,link:"https://github.com/macabeus/js-proposal-algebraic-effects",stargazers:null,description:null,tags:["JS"]},GridView:{priority:2,link:"https://github.com/macabeus/GridView",stargazers:null,description:null,tags:["Swift","Apple TV"]},"rust-neander":{priority:3,link:"https://github.com/macabeus/rust-neander",stargazers:null,description:null,tags:["Rust","Virtual Machine"]},"react-gbajs":{priority:4,link:"https://github.com/macabeus/react-gbajs",stargazers:null,description:null,tags:["TS","React"]},TvLightSegments:{priority:5,link:"https://github.com/macabeus/js-TvLightSegments",stargazers:null,description:null,tags:["Swift","Apple TV"]},"fluent-typescript":{priority:6,link:"https://github.com/macabeus/js-proposal-fluent-typescript",stargazers:null,description:null,tags:["TS"]},"switch-folklore":{priority:7,link:"https://github.com/macabeus/js-switch-folklore",stargazers:null,description:null,tags:["TS","C","React"]},TvCodeScreen:{priority:8,link:"https://github.com/macabeus/TvCodeScreen",stargazers:null,description:null,tags:["Swift","Apple TV"]}}),[o]}class ct extends Qe{constructor(t){super();Xe(this,t,ot,st,Ye,{})}}export{ct as default};
