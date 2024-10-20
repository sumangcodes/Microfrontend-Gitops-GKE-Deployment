"use strict";(self.webpackChunkproduct_catalog=self.webpackChunkproduct_catalog||[]).push([[875],{875:(e,t,o)=>{o.r(t),o.d(t,{default:()=>d});var n=o(674),a=o.n(n),c=o(421),r=o(864);const l=r.default.div`
  border: ${e=>e.theme.microfrontendBorder};
  padding: ${e=>e.theme.spacing(2)};
  margin: ${e=>e.theme.spacing(2)};
  background-color: ${e=>e.theme.colors.background};
`,d=()=>a().createElement(r.ThemeProvider,{theme:c.w4},a().createElement(l,null,a().createElement("h2",null,"Product Catalog"),a().createElement("ul",null,[{id:1,name:"Laptop",price:6e4},{id:2,name:"Phone",price:3e4}].map((e=>a().createElement("li",{key:e.id},e.name," - ₹",e.price.toLocaleString()," ",a().createElement(c.$n,{onClick:()=>(e=>{console.log(`Emitting add-to-cart event for product ID: ${e.id}`),console.log("Window object before dispatch:",window);const t=new CustomEvent("add-to-cart",{detail:e,bubbles:!0,cancelable:!0});window.dispatchEvent(t)})(e)},"Add to Cart")))))))}}]);