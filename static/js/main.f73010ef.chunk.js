(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{136:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){},144:function(e,t,n){},442:function(e,t,n){},443:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),i=n(129),a=n.n(i),r=(n(136),n(4)),o=(n(137),n(7)),j=n(5),l=Object(c.createContext)(),u=(n(138),n.p+"static/media/Arrow.5125ef29.svg"),b=n(1),d=function(){var e=Object(c.useContext)(l),t=e.user,n=e.setUser,s=e.loggedIn,i=e.setLoggedIn,a=Object(c.useState)(!1),d=Object(r.a)(a,2),h=d[0],O=d[1],m=Object(j.e)(),p=function(){O(!0),!0===h&&O(!1)};return Object(b.jsxs)("h1",{className:"navbar",children:[Object(b.jsx)(o.b,{to:"/",className:"buttonLink1",children:Object(b.jsx)("button",{className:"button1",children:"Home"})}),!1===s?Object(b.jsx)(o.b,{to:"/login",className:"buttonLink2",children:Object(b.jsx)("button",{className:"button2",children:"Login"})}):!1===h?Object(b.jsx)(o.b,{className:"profilLink",onClick:p,children:Object(b.jsxs)("button",{className:"profilBotun",children:[t.username,Object(b.jsx)("img",{src:u,className:"arrow"})]})}):Object(b.jsxs)(o.b,{className:"profilLink",onClick:p,children:[Object(b.jsxs)("button",{className:"profilBotun",children:[t.username,Object(b.jsx)("img",{src:u,className:"arrow"})]}),Object(b.jsx)("button",{className:"profilList",onClick:function(){O(!1),m.push("/profile")},children:"Create listing"}),Object(b.jsx)("button",{className:"profilList1",onClick:function(){O(!1),m.push("/listings")},children:"My listings"}),Object(b.jsx)("button",{className:"profilList1",onClick:function(){n(""),i(!1),m.push("/")},children:"Logout"})]}),Object(b.jsx)(o.b,{to:"/checkout",className:"buttonLink3",children:Object(b.jsx)("button",{className:"button3",children:"Checkout"})})]})},h=n(24),O=function(){var e=Object(c.useContext)(l),t=(e.itemId,e.setItemId),n=e.items,s=(e.setItems,Object(c.useState)("")),i=Object(r.a)(s,2),a=i[0],u=i[1],d=Object(c.useState)({item:""}),O=Object(r.a)(d,2),m=O[0],p=O[1],x=Object(c.useState)(!1),f=Object(r.a)(x,2),g=f[0],v=f[1],C=Object(j.e)(),I=function(e){if(u(e.target.value),e.preventDefault(),e.target.value.length>=2){var t=n.filter((function(t){return t.item.toLowerCase().includes(e.target.value.toLowerCase())}));console.log("2",t),0!=t.length&&(p(Object(h.a)(t)),v(!0)),console.log(n.item)}e.target.value.length<=2&&v(!1)};console.log(a),console.log(n.item);var N=function(e){e.preventDefault();var c=n.filter((function(e){return e.item.toLowerCase().includes(a.toLowerCase())}));p(Object(h.a)(c)),u(""),""!==m&&v(!0),1===m.length&&(t(m[0].id),u(""),v(!1),C.push("/item/".concat(m[0].id)))};return Object(b.jsx)("div",{children:!1===g?Object(b.jsx)("div",{className:"search",children:Object(b.jsx)("form",{onSubmit:N,children:Object(b.jsx)("input",{className:"inputSearch",type:"text",placeholder:"Search items",value:a,onChange:I})})}):Object(b.jsxs)("div",{className:"search",children:[Object(b.jsx)("form",{onSubmit:N,children:Object(b.jsx)("input",{className:"inputSearch",type:"text",placeholder:"Search items",value:a,onChange:I})}),Object(b.jsx)("ul",{className:"searchList ",children:m.map((function(e){return Object(b.jsx)(o.b,{to:"/item/".concat(e.id),onClick:function(){return n=e.id,t(n),u(""),void v(!1);var n},children:Object(b.jsx)("li",{className:"lista",children:e.item})})}))})]})})},m=(n(144),function(){var e=Object(c.useContext)(l),t=e.itemId,n=(e.setItemId,e.items),s=(e.setItems,n.filter((function(e){return e.id===t})));return Object(b.jsxs)("div",{className:"item",children:[Object(b.jsx)("h3",{children:s[0].item}),Object(b.jsx)("h3",{children:s[0].price})]})}),p=function(){var e=Object(c.useContext)(l),t=e.user,n=e.setUser,s=(e.loggedIn,e.setLoggedIn),i=Object(c.useState)(""),a=Object(r.a)(i,2),o=a[0],u=a[1],d=Object(c.useState)(""),h=Object(r.a)(d,2),O=h[0],m=h[1],p=Object(j.e)(),x=function(e){e.preventDefault(),fetch("https://shoptest-42.herokuapp.com/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o,password:O})}).then((function(e){return e.json()})).then((function(e){e.id&&(p.push("/"),s(!0),n(e),u(""),m(""))}))};return console.log(t),Object(b.jsx)("div",{className:"login",children:Object(b.jsxs)("form",{className:"loginForm",onSubmit:x,children:[Object(b.jsx)("table",{children:"email"}),Object(b.jsx)("input",{type:"email",onChange:function(e){u(e.target.value),console.log(o)},value:o}),Object(b.jsx)("table",{children:"password"}),Object(b.jsx)("input",{type:"password",onChange:function(e){m(e.target.value)},value:O}),Object(b.jsx)("button",{className:"buttonRegister",onClick:x,children:"Login"}),Object(b.jsx)("button",{className:"buttonRegister",onClick:function(){p.push("/register")},children:"Register"})]})})},x=function(){var e=Object(c.useContext)(l),t=e.user,n=e.setUser,s=(e.loggedIn,e.setLoggedIn),i=Object(c.useState)(""),a=Object(r.a)(i,2),o=a[0],u=a[1],d=Object(c.useState)(""),h=Object(r.a)(d,2),O=h[0],m=h[1],p=Object(c.useState)(""),x=Object(r.a)(p,2),f=x[0],g=x[1],v=Object(j.e)(),C=function(e){e.preventDefault(),fetch("https://shoptest-42.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o,password:O,username:f})}).then((function(e){return e.json()})).then((function(e){""!==e.username&&(s(!0),n(e),u(""),m(""),g(""),v.push("/"))}))};return console.log(" mm",t),Object(b.jsx)("div",{className:"login",children:Object(b.jsxs)("form",{className:"loginForm",onSubmit:C,children:[Object(b.jsx)("table",{children:"Set username"}),Object(b.jsx)("input",{onChange:function(e){g(e.target.value)},value:f}),Object(b.jsx)("table",{children:"Register an email"}),Object(b.jsx)("input",{type:"email",onChange:function(e){u(e.target.value),console.log(o)},value:o}),Object(b.jsx)("table",{children:"Set a password"}),Object(b.jsx)("input",{type:"password",onChange:function(e){m(e.target.value)},value:O}),Object(b.jsx)("button",{className:"buttonRegister",onClick:C,children:"Create"})]})})},f=function(){return Object(b.jsx)("div",{})},g=(n(145),function(){var e=Object(c.useContext)(l),t=(e.itemId,e.setItemId,e.items),n=(e.setItems,e.item,e.setItem,e.generateId,e.setGenerateId,Object(c.useState)("")),s=Object(r.a)(n,2),i=s[0],a=s[1],o=Object(c.useState)(),j=Object(r.a)(o,2),u=j[0],d=j[1],h=function(e){e.preventDefault(),""!==i&&fetch("https://shoptest-42.herokuapp.com/profile",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({item:i,price:u})}).then((function(e){return e.json()})).then((function(e){e&&(a(""),d(""))}))};return console.log("add",t),Object(b.jsx)("div",{className:"login",children:Object(b.jsxs)("form",{className:"loginForm",onSubmit:h,children:[Object(b.jsx)("label",{children:"List an item"}),Object(b.jsx)("input",{onChange:function(e){e.preventDefault(),a(e.target.value),console.log(i)},value:i}),Object(b.jsx)("label",{children:"Set a price"}),Object(b.jsx)("input",{onChange:function(e){e.preventDefault(),d(e.target.value)},value:u}),Object(b.jsx)("button",{className:"buttonRegister",onClick:h,children:"Create"})]})})}),v=(n(442),function(){var e=Object(c.useContext)(l),t=(e.itemId,e.setItemId),n=e.items,s=e.setItems;e.item,e.setItem;Object(c.useEffect)((function(){fetch("https://shoptest-42.herokuapp.com/",{method:"get",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=e.map((function(e){return{id:e.id,item:e.item,price:e.price,sales:e.sales}}));0===n.length&&s([].concat(Object(h.a)(n),Object(h.a)(t)))}))}),[]);var i=n.map((function(e){return Object(b.jsx)(o.b,{className:"karticeChild",to:"/item/".concat(e.id),children:Object(b.jsxs)("div",{onClick:function(){return n=e.id,void t(n);var n},children:[Object(b.jsx)("p",{className:"karta",children:e.item}),Object(b.jsx)("p",{className:"karta",children:e.price})]})})}));return Object(b.jsx)("div",{className:"kartice",children:i})}),C=function(){var e=Object(c.useContext)(l),t=e.itemId,n=(e.setItemId,e.items),s=(e.setItems,n.filter((function(e){return e.id===t})));return Object(b.jsxs)("div",{className:"item",children:[Object(b.jsx)("h3",{children:s.item}),Object(b.jsx)("h3",{children:s.price})]})};var I=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)([]),a=Object(r.a)(i,2),u=a[0],h=a[1],I=Object(c.useState)([]),N=Object(r.a)(I,2),S=N[0],k=N[1],L=Object(c.useState)({}),y=Object(r.a)(L,2),w=y[0],D=y[1],F=Object(c.useState)(0),R=Object(r.a)(F,2),T=R[0],J=R[1],B=Object(c.useState)(!1),U=Object(r.a)(B,2),P=U[0],E=U[1];return Object(b.jsx)(o.a,{basename:"/shoptest",children:Object(b.jsx)("div",{children:Object(b.jsxs)(l.Provider,{value:{itemId:n,setItemId:s,items:u,setItems:h,user:w,setUser:D,loggedIn:P,setLoggedIn:E,item:S,setItem:k,generateId:T,setGenerateId:J},children:[Object(b.jsx)(d,{}),Object(b.jsx)(O,{}),Object(b.jsx)(j.a,{exact:!0,path:"/",render:function(){return Object(b.jsx)(v,{})}}),Object(b.jsx)(j.a,{exact:!0,path:"/item/:id",render:function(){return Object(b.jsx)(m,{})}}),Object(b.jsx)(j.a,{exact:!0,path:"/item/:id",render:function(){return Object(b.jsx)(v,{})}}),Object(b.jsx)(j.a,{exact:!0,path:"/login",render:function(){return Object(b.jsx)(p,{})}}),Object(b.jsx)(j.a,{exact:!0,path:"/register",render:function(){return Object(b.jsx)(x,{})}}),Object(b.jsx)(j.a,{exact:!0,path:"/checkout",render:function(){return Object(b.jsx)(f,{})}}),Object(b.jsx)(j.a,{exact:!0,path:"/profile",render:function(){return Object(b.jsx)(g,{})}}),Object(b.jsx)(j.a,{exact:!0,path:"/listings",render:function(){return Object(b.jsx)(C,{})}})]})})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,444)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(I,{})}),document.getElementById("root")),N()}},[[443,1,2]]]);
//# sourceMappingURL=main.f73010ef.chunk.js.map