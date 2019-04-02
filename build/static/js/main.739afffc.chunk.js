(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,t,a){e.exports=a(74)},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(29),i=a.n(r),s=(a(52),a(19)),o=a(14),l=a(22),p=a.n(l),m=a(25),u=a(16),h=a(17),d=a(20),f=a(18),b=a(21),E=a(75),v=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return c.a.createElement(E.a,{className:"navbar",expand:"lg"},c.a.createElement(E.a.Brand,{className:"navbar-brand m-auto",href:"/"},"Frank's Recipes"))}}]),t}(n.Component),y=a(77),g=a(78),j=function(e){return c.a.createElement("div",{className:"recipe-list justify-content-around"},e.recipes&&e.recipes.map(function(e,t){return c.a.createElement(y.a,{key:t,className:"recipe-card justify-content-center"},c.a.createElement(y.a.Img,{variant:"top",className:"recipe-card-image",src:e.recipe.image,alt:e.recipe.label}),c.a.createElement(y.a.Body,null,c.a.createElement(y.a.Title,{className:"recipe-title"},e.recipe.label),c.a.createElement(y.a.Text,{className:"recipe-text"},"Publisher: ",e.recipe.source)),c.a.createElement(s.b,{to:{pathname:"/recipe/".concat(e.recipe.label),state:{recipe:e.recipe}}},c.a.createElement(g.a,{className:"card-btn"},"View Recipe")))}))},w=a(76),N=a(46),O=function(e){return c.a.createElement(w.a,{className:"justify-content-center mt-3",inline:!0,onSubmit:e.getRecipe},c.a.createElement(N.a,{className:"mr-1",placeholder:"Search...",type:"text",name:"recipeName",style:{width:"19em"}}),c.a.createElement(g.a,{type:"submit"},"Search"))},k=(a(73),"656fcd69bb389ceb2a79714296c08daa"),x="68014d35",R=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(c)))).state={recipes:[]},a.getRecipe=function(){var e=Object(m.a)(p.a.mark(function e(t){var n,c,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.elements.recipeName.value,t.preventDefault(),e.next=4,fetch("https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=".concat(n,"&app_id=").concat(x,"&app_key=").concat(k));case 4:return c=e.sent,e.next=7,c.json();case 7:r=e.sent,a.setState({recipes:r.hits});case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.componentDidMount=function(){var e=localStorage.getItem("recipes"),t=JSON.parse(e);a.setState({recipes:t})},a.componentDidUpdate=function(){var e=JSON.stringify(a.state.recipes);localStorage.setItem("recipes",e)},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(v,null),c.a.createElement(O,{getRecipe:this.getRecipe}),c.a.createElement(j,{recipes:this.state.recipes}))}}]),t}(n.Component),S="656fcd69bb389ceb2a79714296c08daa",I="68014d35",_=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(c)))).state={activeRecipe:[]},a.componentDidMount=Object(m.a)(p.a.mark(function e(){var t,n,c;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.location.state.recipe.label,e.next=3,fetch("https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=".concat(t,"&app_id=").concat(I,"&app_key=").concat(S));case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,a.setState({activeRecipe:c.hits[0]});case 8:case"end":return e.stop()}},e)})),a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state.activeRecipe;return c.a.createElement("div",null,c.a.createElement(v,null),c.a.createElement("div",{className:"container"},0!==this.state.activeRecipe.length&&c.a.createElement(y.a,{className:"recipe-show justify-content-center"},c.a.createElement(y.a.Img,{src:e.recipe.image,alt:e.recipe.title}),c.a.createElement(y.a.Title,{className:"m-auto"},e.title),c.a.createElement(y.a.Text,{className:"m-auto"},"Publisher: ",c.a.createElement("span",null,e.recipe.source)),c.a.createElement("a",{href:e.recipe.url,target:"_blank",rel:"noopener noreferrer"},c.a.createElement(g.a,null,e.recipe.url)),c.a.createElement(s.b,{to:"/"},c.a.createElement(g.a,null,"Go Home")))))}}]),t}(n.Component),B=function(){return c.a.createElement(s.a,null,c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/",component:R,exact:!0}),c.a.createElement(o.a,{path:"/recipe/:id",component:_})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[47,1,2]]]);
//# sourceMappingURL=main.739afffc.chunk.js.map