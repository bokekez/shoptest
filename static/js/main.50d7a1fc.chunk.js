(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(19),i=c.n(a),r=(c(25),c(3)),j=(c(26),c(4)),o=c(2),l=Object(n.createContext)(),u=(c(27),c.p+"static/media/Arrow.5125ef29.svg"),b=c(0),O=function(){var e=Object(n.useContext)(l),t=e.user,c=(e.setUser,e.loggedIn),s=(e.setLoggedIn,Object(n.useState)(!1)),a=Object(r.a)(s,2),i=a[0],O=a[1],d=Object(o.e)(),m=function(){O(!0),!0===i&&O(!1)};return Object(b.jsxs)("h1",{className:"navbar",children:[Object(b.jsx)(j.b,{to:"/",className:"buttonLink1",children:Object(b.jsx)("button",{className:"button1",children:"Home"})}),!1===c?Object(b.jsx)(j.b,{to:"/login",className:"buttonLink2",children:Object(b.jsx)("button",{className:"button2",children:"Login"})}):!1===i?Object(b.jsx)(j.b,{className:"profilLink",onClick:m,children:Object(b.jsxs)("button",{className:"profilBotun",children:[t.name,Object(b.jsx)("img",{src:u,className:"arrow"})]})}):Object(b.jsxs)(j.b,{className:"profilLink",onClick:m,children:[Object(b.jsxs)("button",{className:"profilBotun",children:[t.name,Object(b.jsx)("img",{src:u,className:"arrow"})]}),Object(b.jsx)("button",{className:"profilList",onClick:function(){O(!1),d.push("/profile")},children:"Create listing"}),Object(b.jsx)("button",{className:"profilList1",onClick:function(){O(!1),d.push("/listings")},children:"My listings"})]}),Object(b.jsx)(j.b,{to:"/checkout",className:"buttonLink3",children:Object(b.jsx)("button",{className:"button3",children:"Checkout"})})]})},d=c(9),m=function(){var e=Object(n.useContext)(l),t=(e.itemId,e.setItemId),c=e.items,s=(e.setItems,Object(n.useState)("")),a=Object(r.a)(s,2),i=a[0],u=a[1],O=Object(n.useState)({item:""}),m=Object(r.a)(O,2),h=m[0],x=m[1],f=Object(n.useState)(!1),g=Object(r.a)(f,2),p=g[0],v=g[1],I=Object(o.e)(),N=function(e){if(u(e.target.value),e.preventDefault(),e.target.value.length>=2){var t=c.filter((function(t){return t.item.toLowerCase().includes(e.target.value.toLowerCase())}));console.log("2",t),0!=t.length&&(x(Object(d.a)(t)),v(!0)),console.log(c.item)}e.target.value.length<=2&&v(!1)};console.log(i),console.log(c.item);var C=function(e){e.preventDefault();var n=c.filter((function(e){return e.item.toLowerCase().includes(i.toLowerCase())}));x(Object(d.a)(n)),u(""),""!==h&&v(!0),1===h.length&&(t(h[0].id),u(""),v(!1),I.push("/item/".concat(h[0].id)))};return Object(b.jsx)("div",{children:!1===p?Object(b.jsx)("div",{className:"search",children:Object(b.jsx)("form",{onSubmit:C,children:Object(b.jsx)("input",{className:"inputSearch",type:"text",placeholder:"Search items",value:i,onChange:N})})}):Object(b.jsxs)("div",{className:"search",children:[Object(b.jsx)("form",{onSubmit:C,children:Object(b.jsx)("input",{className:"inputSearch",type:"text",placeholder:"Search items",value:i,onChange:N})}),Object(b.jsx)("ul",{className:"searchList ",children:h.map((function(e){return Object(b.jsx)(j.b,{to:"/item/".concat(e.id),onClick:function(){return c=e.id,t(c),u(""),void v(!1);var c},children:Object(b.jsx)("li",{className:"lista",children:e.item})})}))})]})})},h=(c(34),function(){var e=Object(n.useContext)(l),t=e.itemId,c=(e.setItemId,e.items),s=(e.setItems,c.filter((function(e){return e.id===t})));return Object(b.jsxs)("div",{className:"item",children:[Object(b.jsx)("h3",{children:s[0].item}),Object(b.jsx)("h3",{children:s[0].price})]})}),x=function(){return Object(b.jsx)("div",{className:"login",children:Object(b.jsxs)("form",{className:"loginForm",children:[Object(b.jsx)("table",{children:"Email"}),Object(b.jsx)("input",{type:"email"}),Object(b.jsx)("table",{children:"Password"}),Object(b.jsx)("input",{type:"password"}),Object(b.jsx)(j.b,{to:"/register",children:Object(b.jsx)("button",{className:"buttonRegister",children:"Register"})})]})})},f=function(){var e=Object(n.useContext)(l),t=e.user,c=e.setUser,s=(e.loggedIn,e.setLoggedIn),a=Object(n.useState)(""),i=Object(r.a)(a,2),j=i[0],u=i[1],O=Object(n.useState)(""),d=Object(r.a)(O,2),m=d[0],h=d[1],x=Object(n.useState)(""),f=Object(r.a)(x,2),g=f[0],p=f[1],v=Object(o.e)(),I=function(e){e.preventDefault(),c({name:g,email:j,password:m}),u(""),h(""),p(""),console.log("1"),v.push("/"),s(!0)};return console.log(t),Object(b.jsx)("div",{className:"login",children:Object(b.jsxs)("form",{className:"loginForm",onSubmit:I,children:[Object(b.jsx)("table",{children:"Set username"}),Object(b.jsx)("input",{onChange:function(e){p(e.target.value)},value:g}),Object(b.jsx)("table",{children:"Register an email"}),Object(b.jsx)("input",{type:"email",onChange:function(e){u(e.target.value),console.log(j)},value:j}),Object(b.jsx)("table",{children:"Set a password"}),Object(b.jsx)("input",{type:"password",onChange:function(e){h(e.target.value)},value:m}),Object(b.jsx)("button",{className:"buttonRegister",onClick:I,children:"Create"})]})})},g=function(){return Object(b.jsx)("div",{})},p=function(){var e=Object(n.useContext)(l),t=(e.itemId,e.setItemId,e.items),c=e.setItems,s=(e.item,e.setItem,e.generateId),a=e.setGenerateId,i=Object(n.useState)(""),j=Object(r.a)(i,2),o=j[0],u=j[1],O=Object(n.useState)(),m=Object(r.a)(O,2),h=m[0],x=m[1],f=function(e){if(e.preventDefault(),""!==o){a(s+1);var n={id:s,item:o,price:h};c([].concat(Object(d.a)(t),[n])),u(""),x("")}};return console.log("add",t),Object(b.jsx)("div",{className:"login",children:Object(b.jsxs)("form",{className:"loginForm",onSubmit:f,children:[Object(b.jsx)("label",{children:"List an item"}),Object(b.jsx)("input",{onChange:function(e){e.preventDefault(),u(e.target.value),console.log(o)},value:o}),Object(b.jsx)("label",{children:"Set a price"}),Object(b.jsx)("input",{onChange:function(e){e.preventDefault(),x(e.target.value)},value:h}),Object(b.jsx)("button",{className:"buttonRegister",onClick:f,children:"Create"})]})})},v=(c(35),function(){var e=Object(n.useContext)(l),t=(e.itemId,e.setItemId),c=e.items;e.setItems,e.item,e.setItem;Object(n.useEffect)((function(){}));var s=c.map((function(e){return Object(b.jsx)(j.b,{className:"karticeChild",to:"/item/".concat(e.id),children:Object(b.jsxs)("div",{onClick:function(){return c=e.id,void t(c);var c},children:[Object(b.jsx)("p",{className:"karta",children:e.item}),Object(b.jsx)("p",{className:"karta",children:e.price})]})})}));return Object(b.jsx)("div",{className:"kartice",children:s})}),I=function(){var e=Object(n.useContext)(l),t=e.itemId,c=(e.setItemId,e.items),s=(e.setItems,c.filter((function(e){return e.id===t})));return Object(b.jsxs)("div",{className:"item",children:[Object(b.jsx)("h3",{children:s.item}),Object(b.jsx)("h3",{children:s.price})]})};var N=function(){var e=Object(n.useState)(0),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),i=Object(r.a)(a,2),u=i[0],d=i[1],N=Object(n.useState)([]),C=Object(r.a)(N,2),S=C[0],k=C[1],L=Object(n.useState)({}),w=Object(r.a)(L,2),y=w[0],D=w[1],F=Object(n.useState)(0),R=Object(r.a)(F,2),B=R[0],P=R[1],E=Object(n.useState)(!1),U=Object(r.a)(E,2),G=U[0],J=U[1];return Object(b.jsx)(j.a,{basename:"/shoptest",children:Object(b.jsx)("div",{children:Object(b.jsxs)(l.Provider,{value:{itemId:c,setItemId:s,items:u,setItems:d,user:y,setUser:D,loggedIn:G,setLoggedIn:J,item:S,setItem:k,generateId:B,setGenerateId:P},children:[Object(b.jsx)(O,{}),Object(b.jsx)(m,{}),Object(b.jsx)(o.a,{exact:!0,path:"/",render:function(){return Object(b.jsx)(v,{})}}),Object(b.jsx)(o.a,{exact:!0,path:"/item/:id",render:function(){return Object(b.jsx)(h,{})}}),Object(b.jsx)(o.a,{exact:!0,path:"/item/:id",render:function(){return Object(b.jsx)(v,{})}}),Object(b.jsx)(o.a,{exact:!0,path:"/login",render:function(){return Object(b.jsx)(x,{})}}),Object(b.jsx)(o.a,{exact:!0,path:"/register",render:function(){return Object(b.jsx)(f,{})}}),Object(b.jsx)(o.a,{exact:!0,path:"/checkout",render:function(){return Object(b.jsx)(g,{})}}),Object(b.jsx)(o.a,{exact:!0,path:"/profile",render:function(){return Object(b.jsx)(p,{})}}),Object(b.jsx)(o.a,{exact:!0,path:"/listings",render:function(){return Object(b.jsx)(I,{})}})]})})})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),C()}},[[36,1,2]]]);
//# sourceMappingURL=main.50d7a1fc.chunk.js.map