(this["webpackJsonpcsc-642-individual"]=this["webpackJsonpcsc-642-individual"]||[]).push([[0],{181:function(e,t,n){e.exports=n(391)},186:function(e,t,n){},187:function(e,t,n){e.exports=n.p+"static/media/logo.8dad8028.svg"},192:function(e,t,n){},27:function(e,t,n){e.exports={row:"Counter_row__1C_4f",value:"Counter_value__1d0te",button:"Counter_button__1xpSV",textbox:"Counter_textbox__3ODaX",asyncButton:"Counter_asyncButton__2UAr3 Counter_button__1xpSV"}},391:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(32),i=n.n(l),o=(n(186),n(79)),c=n(80),u=n(86),m=n(83),d=n(35),p=(n(187),n(178),n(59)),s=n(84),h=Object(s.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),b=h.actions,f=(b.increment,b.decrement,b.incrementByAmount,h.reducer);n(27);n(192);var E=n(408),g=n(412),v=n(410),x=n(411),y=Object(E.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function w(){var e=y();return r.a.createElement("div",{className:e.root},r.a.createElement(g.a,{position:"static"},r.a.createElement(v.a,null,r.a.createElement(x.a,{variant:"h6",className:e.title},"CSC-842 Individual Assignment"))))}n(111),n(173);var j=n(19);function N(){var e=Object(d.a)(["\n  font-family: sans-serif;\n\n  h1 {\n    text-align: center;\n    color: #222;\n  }\n\n  & > div {\n    text-align: center;\n  }\n\n  a {\n    display: block;\n    text-align: center;\n    color: #222;\n  }\n\n  form {\n    width: 90%;\n    margin: 10px auto;\n    border: 1px solid #ccc;\n    padding: 20px;\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);\n    border-radius: 3px;\n    @media (min-width: 600px) {\n      width: 50%;\n    }\n\n    & > div {\n      display: flex;\n      flex-flow: row wrap;\n      line-height: 2em;\n      margin: 5px;\n      & > label {\n        color: #333;\n        width: 30%;\n        font-size: 0.75em;\n        // line-height: 32px;\n        @media (min-width: 400px) {\n          font-size: 1em;\n        }\n      }\n      & > input,\n      & > select,\n      & > textarea {\n        flex: 1;\n        width: 70%;\n        padding: 3px 5px;\n        font-size: 1em;\n        margin-left: 15px;\n        border: 1px solid #ccc;\n        border-radius: 3px;\n      }\n      & > input[type='checkbox'] {\n        margin-top: 7px;\n      }\n      & > div {\n        margin-left: 16px;\n        & > label {\n          display: block;\n          & > input {\n            margin-right: 3px;\n          }\n        }\n      }\n      & > span {\n        line-height: 32px;\n        margin-left: 10px;\n        color: #800;\n        font-weight: bold;\n      }\n    }\n    & > .buttons {\n      display: flex;\n      flex-flow: row nowrap;\n      justify-content: center;\n      margin-top: 15px;\n    }\n    button {\n      margin: 0 10px;\n      &[type='submit'] {\n        ",";\n      }\n      &[type='button'] {\n        ",";\n      }\n    }\n    pre {\n      border: 1px solid #ccc;\n      background: rgba(0, 0, 0, 0.1);\n      box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);\n      padding: 20px;\n    }\n  }\n"]);return N=function(){return e},e}function O(){var e=Object(d.a)(["\n  "," color: #555;\n"]);return O=function(){return e},e}function _(){var e=Object(d.a)(["\n  white-space: nowrap;\n  display: inline-block;\n  border-radius: 5px;\n  padding: 5px 15px;\n  font-size: 16px;\n  color: white;\n  &:visited {\n    color: white;\n  }\n  background-image: linear-gradient(",", ",");\n  border: 1px solid ",";\n  &:hover {\n    background-image: linear-gradient(",", ",");\n    &[disabled] {\n      background-image: linear-gradient(",", ",");\n    }\n  }\n  &:visited {\n    color: black;\n  }\n  &[disabled] {\n    opacity: 0.6;\n    cursor: not-allowed;\n  }\n"]);return _=function(){return e},e}var k=function(e,t){return Object(j.a)(_(),e,t,t,e,t,e,t)},C=Object(j.a)(O(),k("#ffffff","#d5d5d5")),S=k("#4f93ce","#285f8f"),A=j.b.div(N(),S,C),D=n(14),z=n(195),I=function(e){return e?void 0:"Required"},B=function(e){return isNaN(e)?"Must be a number":void 0},M=function(e){return e.includes("@")?void 0:"Invalid"},F=function(e){return isNaN(e)||e.length>7||e.length<7?"Invalid":void 0},G=function(e){return e.length>40?"< 40 Char Required":void 0},P=function(e){return e.length>5||e.length<5||isNaN(e)?"Invalid":void 0},R=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce((function(t,n){return t||n(e)}),void 0)}},H=function(){console.log("Done!!!!")},L=function(e){console.log(e)},Y=function(e){return r.a.createElement(A,null,r.a.createElement(D.b,{onSubmit:function(t){return e.submit(t)},render:function(e){var t=e.handleSubmit,n=e.form,a=e.submitting,l=e.pristine;e.values;return r.a.createElement("form",{onSubmit:t},r.a.createElement(D.a,{name:"firstName",component:"input",validate:R(I,G)},(function(e){var t=e.input,n=e.meta;return r.a.createElement("div",null,r.a.createElement("label",null,"First Name*"),r.a.createElement("input",Object.assign({},t,{type:"text",placeholder:"First Name"})),n.error&&n.touched&&r.a.createElement("span",null,n.error))})),r.a.createElement("div",null,r.a.createElement("label",null,"Birthdate*"),r.a.createElement(D.a,{name:"birthMonth",component:"input",type:"text",placeholder:"Month",validate:R(I,B)}),r.a.createElement(D.a,{name:"birthDay",component:"input",type:"text",placeholder:"Day",validate:R(I,B)}),r.a.createElement(D.a,{name:"birthYear",component:"input",type:"text",placeholder:"Year",validate:R(I,B)})),r.a.createElement(D.a,{name:"lastName",component:"input",validate:R(I,G)},(function(e){var t=e.input,n=e.meta;return r.a.createElement("div",null,r.a.createElement("label",null,"Last Name*"),r.a.createElement("input",Object.assign({},t,{type:"text",placeholder:"Last Name"})),n.error&&n.touched&&r.a.createElement("span",null,n.error))})),r.a.createElement(D.a,{name:"address",component:"input",validate:R(I,G)},(function(e){var t=e.input,n=e.meta;return r.a.createElement("div",null,r.a.createElement("label",null,"Address*"),r.a.createElement("input",Object.assign({},t,{type:"text",placeholder:"Address"})),n.error&&n.touched&&r.a.createElement("span",null,n.error))})),r.a.createElement(D.a,{name:"zip",component:"input",validate:R(I,P)},(function(e){var t=e.input,n=e.meta;return r.a.createElement("div",null,r.a.createElement("label",null,"Zip*"),r.a.createElement("input",Object.assign({},t,{type:"text",placeholder:"Zip"})),n.error&&n.touched&&r.a.createElement("span",null,n.error))})),r.a.createElement("div",null,r.a.createElement("label",null,"Education"),r.a.createElement(D.a,{name:"education",component:"select"},r.a.createElement("option",null),r.a.createElement("option",null,"High School"),r.a.createElement("option",null,"College"),r.a.createElement("option",null,"Graduate"),r.a.createElement("option",null,"Ph.D"))),r.a.createElement("div",null,r.a.createElement("label",null,"Height"),r.a.createElement(D.a,{name:"heightFeet",component:"input",type:"text",placeholder:"(ft)"}),r.a.createElement(D.a,{name:"heightInches",component:"input",type:"text",placeholder:"(in)"})),r.a.createElement(D.a,{name:"phoneNumber",component:"input",validate:R(I,F)},(function(e){var t=e.input,n=e.meta;return r.a.createElement("div",null,r.a.createElement("label",null,"Phone*"),r.a.createElement("input",Object.assign({},t,{type:"text",placeholder:"Phone #"})),n.error&&n.touched&&r.a.createElement("span",null,n.error))})),r.a.createElement(D.a,{name:"email",component:"input",validate:R(I,M)},(function(e){var t=e.input,n=e.meta;return r.a.createElement("div",null,r.a.createElement("label",null,"Email*"),r.a.createElement("input",Object.assign({},t,{type:"text",placeholder:"Email"})),n.error&&n.touched&&r.a.createElement("span",null,n.error))})),r.a.createElement("div",null,r.a.createElement("label",null,"I Agree to Terms*"),r.a.createElement(D.a,{name:"termsConditions",component:"input",type:"checkbox"})),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{type:"submit",disabled:a||l},"Submit"),r.a.createElement("button",{type:"button",onClick:n.reset,disabled:a||l},"Reset")),r.a.createElement(z,{sitekey:"6Lfq3rMZAAAAAO8DbodP0iH67juV03gtQzc1w5s4",render:"explicit",hl:"ja",theme:"dark",verifyCallback:L,onloadCallback:H}))}}))},Z=n(112);function q(){var e=Object(d.a)(["\n  width: 30%;\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: center;\n  align-items: center;\n"]);return q=function(){return e},e}var J=j.b.div(q()),V=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=Object(Z.withGoogleMap)((function(e){return r.a.createElement(Z.GoogleMap,{defaultCenter:{lat:40.756795,lng:-73.954298},defaultZoom:13})}));return r.a.createElement(J,null,r.a.createElement(e,{containerElement:r.a.createElement("div",{style:{height:"500px",width:"500px"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})}))}}]),n}(a.Component),W=n(5),T=j.b.div.withConfig({displayName:"Submit__Split",componentId:"sc-2z0irl-0"})(["width:100%;display:grid;margin-left:auto;margin-right:auto;grid-template-columns:1fr 1fr;align-items:center;grid-gap:10px;border:2px black solid;margin-bottom:8px;@media (min-width:600px){font-size:1em;width:50%;}"]),Q=j.b.p.withConfig({displayName:"Submit__SplitContent",componentId:"sc-2z0irl-1"})(["font-size:20px;text-align:center;width:100%;"]),U=(j.b.div.withConfig({displayName:"Submit__TextWrapper",componentId:"sc-2z0irl-2"})(["width:100%;"]),function(e){console.log(e);var t=e.data.firstName+" "+e.data.lastName,n=e.data.address+" "+e.data.zip,a=e.data.phoneNumber,l=e.data.email,i=e.data.birthMonth.toString()+"/"+e.data.birthDay.toString()+"/"+e.data.birthYear.toString(),o=void 0!==e.data.education?e.data.education:"None",c=void 0!==e.data.heightFeet?e.data.heightFeet.toString()+"'"+e.data.heightInches+'"':"None";return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Results verification page ",t),r.a.createElement(T,null,r.a.createElement(Q,null,"Name"),r.a.createElement(Q,null,t)),r.a.createElement(T,null,r.a.createElement(Q,null,"Birth Day"),r.a.createElement(Q,null,i)),r.a.createElement(T,null,r.a.createElement(Q,null,"Height"),r.a.createElement(Q,null,c)),r.a.createElement(T,null,r.a.createElement(Q,null,"address"),r.a.createElement(Q,null,n)),r.a.createElement(T,null,r.a.createElement(Q,null,"Email"),r.a.createElement(Q,null,l)),r.a.createElement(T,null,r.a.createElement(Q,null,"Phone"),r.a.createElement(Q,null,a)),r.a.createElement(T,null,r.a.createElement(Q,null,"Education"),r.a.createElement(Q,null,o)))});function X(){var e=Object(d.a)(["\n  width: 100%;\n  // justify-content: center;\n  // align-items: center;\n"]);return X=function(){return e},e}var $=j.b.div(X()),K=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onSubmit=function(e){console.log(e),a.setState({formData:e}),a.props.history.push("/submit")},a.state={formData:{firstName:"Jaren",birthMonth:"1",birthDay:"1",birthYear:"1",lastName:"Lynch",zip:"94109",address:"745 hyde street",phoneNumber:"1122298",email:"jaren.d.lynch@gmail.com"}},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(W.a,{component:w}),r.a.createElement(W.c,null,r.a.createElement(W.a,{exact:!0,path:"/",component:function(){return r.a.createElement(Y,{submit:e.onSubmit})}}),r.a.createElement(W.a,{path:"/submit",component:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(U,{data:e.state.formData}),r.a.createElement($,null,r.a.createElement(V,{formData:e.state.formData})))}})))}}]),n}(a.Component),ee=Object(W.f)(K),te=Object(s.a)({reducer:{counter:f}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ne=n(56);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,{store:te},r.a.createElement(ne.a,null,r.a.createElement(ee,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[181,1,2]]]);
//# sourceMappingURL=main.f452bb99.chunk.js.map