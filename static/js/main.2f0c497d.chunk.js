(this.webpackJsonpbp=this.webpackJsonpbp||[]).push([[0],{109:function(e,t){},111:function(e,t){},124:function(e,t){},126:function(e,t){},139:function(e,t,a){"use strict";a.r(t);a(77);var n=a(0),r=a.n(n),c=a(33),l=a.n(c),s=a(17),i=a(24),o=a(72),u=a(23),m=a(4),d=a(40),p=a.n(d),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PRODUCTS":return Object(m.a)(Object(m.a)({},e),p.a.keyBy(t.payload,"id"));case"FETCH_PRODUCT":return Object(m.a)(Object(m.a)({},e),{},Object(u.a)({},t.payload.id,t.payload));default:return e}},f=JSON.parse(localStorage.getItem("cart")),h=f||{},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":var a=Object(u.a)({},t.payload.id,t.payload);return f?localStorage.setItem("cart",JSON.stringify(Object(m.a)(Object(m.a)({},f),a))):localStorage.setItem("cart",JSON.stringify(Object(m.a)({},a))),Object(m.a)(Object(m.a)({},e),a);default:return e}},b={isLoaded:!1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOADED":return Object(m.a)(Object(m.a)({},e),{},{isLoaded:!0});case"SET_NOT_LOADED":return Object(m.a)(Object(m.a)({},e),{},{isLoaded:!1});default:return e}},g=Object(s.c)({products:E,cart:_,state:v}),O=a(13),y=a(3),N=a(14),j=a(16),T=a(26),D=a(25),k=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)},S=function(e){var t="";return e.black&&(t+="page-section--black "),r.a.createElement("div",{className:"page-section "+t},e.children)},w=function(e){Object(T.a)(a,e);var t=Object(D.a)(a);function a(){return Object(N.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"site-header",style:{height:"62px"}},r.a.createElement(k,null,r.a.createElement("div",{className:"site-header__logo"},r.a.createElement("h1",{className:"site-header__logo-text"},r.a.createElement(O.b,{to:"/"},"Bands Merch")),r.a.createElement("img",{src:"/assets/images/nadi2.gif",alt:""})),r.a.createElement("div",{className:"site-header__menu-icon","data-state":"closed"},r.a.createElement("i",{className:"fa fa-bars fa-lg","aria-hidden":"true"})),r.a.createElement("div",{className:"site-header__menu-section"},r.a.createElement("nav",{className:"main-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(O.b,{to:"/"},"Songs")),r.a.createElement("li",null,r.a.createElement(O.b,{to:"/"},"Archive")),r.a.createElement("li",null,r.a.createElement(O.b,{to:"/"},"About Us")),r.a.createElement("li",null,r.a.createElement(O.b,{to:"/"},"Policies")))))))}}]),a}(r.a.Component),C=function(){return r.a.createElement("footer",{className:"site-footer"},r.a.createElement("p",{className:"site-footer__sub"},"\xa9 i want to die"),r.a.createElement("div",{className:"site-footer__menu"},r.a.createElement("ul",null,r.a.createElement("li",null))))},L=a(31),A=a.n(L),x=a(44),P=a(73),R=a(35),F=a.n(R),U="ck_95b5da1e753c462564e397317342c739f3122705",B="cs_c5def3dbf8fd50709aad6dec02fb8aa695aeeaf9",I="http://localhost",M=new P.a({url:I,consumerKey:U,consumerSecret:B,version:"wc/v3"}),H=(F.a.create({baseURL:"".concat(I,"/wp-json/cocart/v1/"),headers:{Authorization:"Basic ".concat(U,":").concat(B)}}),function(){return r.a.createElement("div",{className:"large-hero"},r.a.createElement("div",{className:"large-hero__image"},r.a.createElement("img",{src:"",alt:""}),r.a.createElement("img",{src:"",alt:""}),r.a.createElement("img",{src:"https://images.wallpaperscraft.com/image/guitarist_guitar_musical_instrument_124648_2048x1152.jpg",alt:""})),r.a.createElement("div",{className:"large-hero__text-content"},r.a.createElement("h2",{className:"large-hero__title"},"Bad Puppet"),r.a.createElement("p",{className:"large-hero__subtitle"},"For all of your dysfunctional needs.")))}),J=function(e){var t=e.product;if(!t)return"loading";var a=t.id,n=t.images,c=t.name,l=t.price;return r.a.createElement("div",{className:"item"},r.a.createElement(O.b,{to:"/product/".concat(a)},r.a.createElement("img",{src:n[0].src,alt:"",className:"item__image"})),r.a.createElement("div",{className:"item__description"},r.a.createElement("h3",{className:"generic-content"},c),r.a.createElement("div",{className:"item__price-tag"},l,"$")))},X=function(e){Object(T.a)(a,e);var t=Object(D.a)(a);function a(){return Object(N.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchProducts()}},{key:"renderList",value:function(){if(this.props.state.isLoaded){var e=this.props.products;return Object.values(e).map((function(e){return r.a.createElement(J,{product:e,key:e.id})}))}return"loading."}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),r.a.createElement(S,{black:!0},r.a.createElement(k,null,r.a.createElement("div",{className:"row"},this.renderList()))))}}]),a}(r.a.Component),$=Object(i.b)((function(e){return e}),{fetchProducts:function(){return function(){var e=Object(x.a)(A.a.mark((function e(t){var a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"SET_NOT_LOADED"}),e.next=4,M.get("products");case 4:a=e.sent,t({type:"FETCH_PRODUCTS",payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,t({type:"SET_LOADED"}),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(t){return e.apply(this,arguments)}}()}})(X),z=function(e){Object(T.a)(a,e);var t=Object(D.a)(a);function a(){return Object(N.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchProduct(this.props.match.params.id)}},{key:"renderContent",value:function(){var e=this;if(!this.props.state.isLoaded)return"loading";var t=this.props.products[this.props.match.params.id],a=t.id,n=t.name,c=t.images,l=t.description,s=t.price;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"md-col-1-of-2"},r.a.createElement("img",{src:c[0].src,alt:"",className:"product__image"})),r.a.createElement("div",{className:"product__details md-col-1-of-2"},r.a.createElement("h4",{className:"product__title"},n),r.a.createElement("div",{className:"product__price-tag"},"Price: ",s,"$"),r.a.createElement("div",{className:"product__description",dangerouslySetInnerHTML:{__html:l}}),r.a.createElement("div",{className:"product__buttons"},r.a.createElement("button",{className:"btn btn--large btn--gray-outline mr-small",onClick:function(){return e.props.addToCart({id:a,name:n,price:s})}},"Add to Cart"),r.a.createElement("button",{className:"btn btn--large btn--gray"},"Buy it Now"))))}},{key:"render",value:function(){return r.a.createElement(S,{black:!0},r.a.createElement(k,null,r.a.createElement("div",{className:"product"},r.a.createElement("div",{className:"row"},this.renderContent()))))}}]),a}(r.a.Component),K=Object(i.b)((function(e){return e}),{fetchProduct:function(e){return function(){var t=Object(x.a)(A.a.mark((function t(a){var n;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"SET_NOT_LOADED"}),t.next=4,M.get("products/".concat(e));case 4:n=t.sent,a({type:"FETCH_PRODUCT",payload:n.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:return t.prev=11,a({type:"SET_LOADED"}),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(e){return t.apply(this,arguments)}}()},addToCart:function(e){return{type:"ADD_TO_CART",payload:e}}})(z);var V=function(){return r.a.createElement(O.a,null,r.a.createElement(w,null),r.a.createElement(y.a,{path:"/",exact:!0,component:$}),r.a.createElement(y.a,{path:"/product/:id",exact:!0,component:K}),r.a.createElement(C,null))},q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,G=Object(s.e)(g,q(Object(s.a)(o.a)));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:G},r.a.createElement(V,null))),document.getElementById("root"))},76:function(e,t,a){e.exports=a(139)},77:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.2f0c497d.chunk.js.map