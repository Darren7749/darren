"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[917],{6451:function(e,t,l){l.r(t),l.d(t,{default:function(){return s}});var n=l(7294);const r={borderRadius:"5%",width:"5rem"},a={width:"30rem",overflow:"hidden",background:"#800000",color:"#FF0000",marginBottom:"5rem",padding:"0.5rem"},i={marginLeft:"1rem"};function s(){let e=[],[t,l]=n.useState([]);return n.useEffect((async()=>{let t=await fetch("https://api.sampleapis.com/wines/reds"),s=await t.json();for(let l=0;l<s.length;l++)console.log(s[l].title),e.push(n.createElement("div",{style:a},n.createElement("div",{style:{width:"4rem",float:"left"}}," ",n.createElement("img",{style:r,src:s[l].image})," "),n.createElement("div",{style:i},n.createElement("h2",null,s[l].winery),n.createElement("h4",null,s[l].wine," "),s[l].location," ")));l(e)}),[]),n.createElement("div",{style:{margin:"1rem"}},n.createElement("h1",null,"wine"),n.createElement("main",null,t))}}}]);
//# sourceMappingURL=component---src-pages-wines-js-f958eab820ab28317c30.js.map