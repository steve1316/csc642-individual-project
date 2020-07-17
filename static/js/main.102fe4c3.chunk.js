(this["webpackJsonpcsc642-individual-project"]=this["webpackJsonpcsc642-individual-project"]||[]).push([[0],{119:function(e,t,a){e.exports=a(172)},172:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),i=a.n(l),c=a(12),o=a(11),s=a(203),m=a(98),u=a(93),d=a(209),h=a(210),p=a(211),g=a(212),f=a(92),E=a(207),v=a(208),b=a(217),x=a(213),y=a(215),j=a(99),O=a(216),S=a(107),C=a(205),A=a(206),I=a(50),N=Object(s.a)((function(e){return{root:{flexGrow:1,width:"100vw",maxWidth:"100vw",marginTop:-10,marginLeft:-10},title:{flexGrow:1}}}));var w=function(e){var t=N();return r.a.createElement("div",{className:t.root},r.a.createElement(C.a,{position:"static"},r.a.createElement(A.a,null,r.a.createElement(I.a,{variant:"h6",className:t.title},e.title))))},T=a(103),P=a.n(T),k=Object(s.a)((function(e){return{root:{margin:"40px auto",width:"100vw",height:"80%",maxWidth:"75%",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",boxShadow:"0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",background:"#f3f3f3",overflow:"auto"},card:{overflow:"auto"},formControl:{margin:e.spacing(1),minWidth:120}}}));var q=function(e){var t=k(),a=Object(n.useState)(""),l=Object(o.a)(a,2),i=l[0],c=l[1],s=Object(n.useState)(""),C=Object(o.a)(s,2),A=C[0],I=C[1],N=Object(n.useState)(""),T=Object(o.a)(N,2),q=T[0],L=T[1],F=Object(n.useState)(""),M=Object(o.a)(F,2),W=M[0],D=M[1],H=Object(n.useState)(""),z=Object(o.a)(H,2),G=z[0],R=z[1],X=Object(n.useState)(""),Y=Object(o.a)(X,2),B=Y[0],K=Y[1],J=Object(n.useState)(""),V=Object(o.a)(J,2),Z=V[0],Q=V[1],_=Object(n.useState)(""),U=Object(o.a)(_,2),$=U[0],ee=U[1],te=Object(n.useState)(""),ae=Object(o.a)(te,2),ne=ae[0],re=ae[1],le=Object(n.useState)(""),ie=Object(o.a)(le,2),ce=ie[0],oe=ie[1],se=Object(n.useState)(""),me=Object(o.a)(se,2),ue=me[0],de=me[1],he=Object(n.useState)(""),pe=Object(o.a)(he,2),ge=pe[0],fe=pe[1],Ee=Object(n.useState)(""),ve=Object(o.a)(Ee,2),be=ve[0],xe=ve[1],ye=Object(n.useState)(!1),je=Object(o.a)(ye,2),Oe=je[0],Se=je[1],Ce=Object(n.useState)(!1),Ae=Object(o.a)(Ce,2),Ie=Ae[0],Ne=Ae[1],we=Object(n.useState)(!1),Te=Object(o.a)(we,2),Pe=Te[0],ke=Te[1],qe=Object(n.useState)(!1),Le=Object(o.a)(qe,2),Fe=Le[0],Me=Le[1],We=Object(n.useState)(!1),De=Object(o.a)(We,2),He=De[0],ze=De[1],Ge=Object(n.useState)(""),Re=Object(o.a)(Ge,2),Xe=Re[0],Ye=Re[1];Object(n.useEffect)((function(){if(sessionStorage.getItem("userData")){var e=JSON.parse(sessionStorage.getItem("userData"));console.log("Found your old data! Data: ",e),c(e.firstName),I(e.lastName),L(e.birthday),D(e.heightFT),R(e.heightIN),K(e.phone),Q(e.educationLevel),ee(e.streetAddress),re(e.streetAddressExtra),oe(e.zipCode),de(e.city),fe(e.state),xe(e.email)}else console.log("You are starting fresh!")}),[]);var Be={firstName:i,lastName:A,birthday:q,heightFT:W,heightIN:G,phone:B,educationLevel:Z,streetAddress:$,streetAddressExtra:ne,zipCode:ce,city:ue,state:ge,email:be};return Object(n.useEffect)((function(){i.length+A.length>40?ke(!0):ke(!1);var e=!1,t=!1,a=function(e){for(var t=0;t<e.length;t++){var a=e.charCodeAt(t);if(32!=a&&!(a>47&&a<58)&&!(a>64&&a<91)&&!(a>96&&a<123))return!1}return!0}($);$.length<40&&(e=!0),""!==$&&(t=!0),a&&e&&t?Me(!1):a||e||!t?!a&&e&&t?(Ye("Address contains non-alphanumeric characters"),Me(!0)):a&&!e&&t?(Ye("Address cannot be more than 40 characters"),Me(!0)):Me(!1):(Ye("Address contains non-alphanumeric characters and cannot be more than 40 characters"),Me(!0)),ze(!(!Fe&&!Pe)),m.a}),[Be]),r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{title:"CSC 642 Summer 2020 Individual Assignment - Steve Tu"}),r.a.createElement(d.a,{className:t.root},r.a.createElement(h.a,{title:"Data Survey Form"}),r.a.createElement("hr",{style:{maxWidth:"95%"}}),r.a.createElement(p.a,null,r.a.createElement("form",{onSubmit:function(t){return sessionStorage.setItem("userData",JSON.stringify(Be)),void e.history.push({pathname:"/results",state:{data:Be}})}},r.a.createElement(g.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:1},r.a.createElement(g.a,{item:!0,xs:6,sm:3},Pe?r.a.createElement(m.a,{error:!0,helperText:"Full name cannot be more than 40 characters",id:"first-name-textfield",label:"First Name",type:"text",value:i,onChange:function(e){return c(e.target.value)},required:!0,variant:"filled"}):r.a.createElement(m.a,{id:"first-name-textfield",label:"First Name",type:"text",value:i,onChange:function(e){return c(e.target.value)},required:!0,variant:"filled"})),r.a.createElement(g.a,{item:!0,xs:6,sm:3},Pe?r.a.createElement(m.a,{error:!0,helperText:"Full name cannot be more than 40 characters",id:"last-name-textfield",label:"Last Name",type:"text",value:A,onChange:function(e){return I(e.target.value)},required:!0,variant:"filled"}):r.a.createElement(m.a,{id:"last-name-textfield",label:"Last Name",type:"text",value:A,onChange:function(e){return I(e.target.value)},required:!0,variant:"filled"})),r.a.createElement(g.a,{item:!0,xs:6,sm:3},r.a.createElement(m.a,{id:"birthday-textfield",label:"Birthday",type:"date",value:q,onChange:function(e){return L(e.target.value)},required:!0,variant:"filled",className:t.textField,InputLabelProps:{shrink:!0}}))),r.a.createElement(g.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:1,style:{paddingTop:10}},r.a.createElement(g.a,{item:!0,xs:6,sm:3},r.a.createElement(m.a,{id:"height-ft-textfield",label:"Height (optional)",type:"number",value:W,onChange:function(e){return D(e.target.value)},InputLabelProps:{shrink:!0},InputProps:{inputProps:{min:0},shrink:"false",endAdornment:r.a.createElement(f.a,{position:"end"},"ft")},variant:"filled"})),r.a.createElement(g.a,{item:!0,xs:6,sm:3},r.a.createElement(m.a,{id:"height-in-textfield",label:"Height (optional)",type:"number",value:G,onChange:function(e){return R(e.target.value)},InputLabelProps:{shrink:!0},InputProps:{inputProps:{min:0},shrink:"false",endAdornment:r.a.createElement(f.a,{position:"end"},"in")},variant:"filled"}))),r.a.createElement(g.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:1,style:{paddingTop:10}},r.a.createElement(g.a,{item:!0,xs:12,sm:6},r.a.createElement(P.a,{value:B,label:"Phone Number",onChange:function(e){K(e)},required:!0,variant:"filled"}))),r.a.createElement(g.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:1,style:{paddingTop:10}},r.a.createElement(g.a,{item:!0,xs:6,sm:3},r.a.createElement(E.a,{component:"fieldset"},r.a.createElement(v.a,{component:"legend"},"Education Level (optional)"),r.a.createElement(b.a,{"aria-label":"education-level",name:"education-level1",value:Z,onChange:function(e){return Q(e.target.value)}},r.a.createElement(x.a,{value:"None",control:r.a.createElement(y.a,null),label:"None"}),r.a.createElement(x.a,{value:"High School",control:r.a.createElement(y.a,null),label:"High School"}),r.a.createElement(x.a,{value:"College",control:r.a.createElement(y.a,null),label:"College"}),r.a.createElement(x.a,{value:"Graduate Studies",control:r.a.createElement(y.a,null),label:"Graduate Studies"}),r.a.createElement(x.a,{value:"Ph.D",control:r.a.createElement(y.a,null),label:"Ph.D"}))))),r.a.createElement(g.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:1,style:{paddingTop:10}},r.a.createElement(g.a,{item:!0,xs:12},Fe?r.a.createElement(m.a,{error:!0,helperText:Xe,id:"street-address-textfield",label:"Street Address",value:$,onChange:function(e){return ee(e.target.value)},required:!0,variant:"filled",style:{width:"80%"}}):r.a.createElement(m.a,{id:"street-address-textfield",label:"Street Address",value:$,onChange:function(e){return ee(e.target.value)},required:!0,variant:"filled",style:{width:"80%"}}))),r.a.createElement(g.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:1,style:{paddingTop:10}},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(m.a,{id:"street-address-extra-textfield",label:"Apartment, unit, etc. (optional)",value:ne,onChange:function(e){return re(e.target.value)},variant:"filled",style:{width:"80%"}}))),r.a.createElement(g.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:1,style:{paddingTop:10}},r.a.createElement(g.a,{item:!0,xs:6,sm:3},r.a.createElement(m.a,{id:"zip-code-textfield",label:"ZIP Code",value:ce,onChange:function(e){return oe(e.target.value)},required:!0,variant:"filled"})),r.a.createElement(g.a,{item:!0,xs:6,sm:3},r.a.createElement(m.a,{id:"city-textfield",label:"City",value:ue,onChange:function(e){return de(e.target.value)},required:!0,variant:"filled"})),r.a.createElement(g.a,{item:!0,xs:6,sm:3},r.a.createElement(m.a,{id:"textfield-select-state",label:"State",select:!0,defaultValue:"",value:ge,onChange:function(e){return fe(e.target.value)},required:!0,variant:"filled"},["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VA","WA","WV","WI","WY"].map((function(e,t){return r.a.createElement(j.a,{key:e+"-"+t,value:e},e)}))))),r.a.createElement(g.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:1,style:{paddingTop:10}},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(m.a,{id:"email-address-textfield",label:"Email Address",value:be,onChange:function(e){return xe(e.target.value)},required:!0,variant:"filled",style:{width:"80%"}}))),r.a.createElement(g.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:1,style:{paddingTop:10}},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(m.a,{id:"email-address-confirm-textfield",label:"Confirm Email Address",required:!0,variant:"filled",style:{width:"80%"}}))),r.a.createElement(g.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:1,style:{paddingTop:10}},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(S.a,{sitekey:"6LcKB7EZAAAAAOnfPRTQWnXMcjhq4AV_hhhsisw_",onChange:function(){Ne(!0)}}))),r.a.createElement(g.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:1,style:{paddingTop:10}},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(E.a,null,r.a.createElement(x.a,{control:r.a.createElement(O.a,{name:"terms",checked:Oe,onChange:function(e){return Se(e.target.checked)},required:!0}),label:"I accept the Terms and Conditions"})))),r.a.createElement(g.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:1,style:{paddingTop:10}},r.a.createElement(g.a,{item:!0,xs:12},function(){var e="",t=!1;return Oe&&Ie&&!He?(e="Submit",t=!1):Oe||!Ie||He?!Oe||Ie||He?He?(e="Please resolve all errors",t=!0):(e="Please accept the terms and conditions and Captcha",t=!0):(e="Please accept the captcha",t=!0):(e="Please accept the terms and conditions",t=!0),t?r.a.createElement(u.a,{type:"submit",disabled:!0,variant:"contained",color:"secondary"},e):r.a.createElement(u.a,{type:"submit",variant:"contained",color:"secondary"},e)}()))))))},L=a(214),F=a(104),M=a(105),W=a(108),D=a(106),H=a(71),z={width:"250px",height:"250px",maxWidth:"80%",maxHeight:"80%"},G=function(e){Object(W.a)(a,e);var t=Object(D.a)(a);function a(){return Object(F.a)(this,a),t.apply(this,arguments)}return Object(M.a)(a,[{key:"render",value:function(){return console.log("Received props are : ",this.props.coordinates),r.a.createElement(H.Map,{google:this.props.google,zoom:14,style:z,initialCenter:{lat:this.props.coordinates.lati,lng:this.props.coordinates.long}},r.a.createElement(H.Marker,{position:{lat:this.props.coordinates.lati,lng:this.props.coordinates.long}}))}}]),a}(n.Component),R=Object(H.GoogleApiWrapper)({apiKey:"AIzaSyBYR-fyWSCdQ3XfZohzXX2adrSyta-qYGo"})(G),X=a(80),Y=a.n(X),B=Object(s.a)((function(e){return{root:{width:"100vw",maxWidth:"75%",height:"80vh",maxHeight:"50%",position:"absolute",left:"50%",top:"30%",transform:"translate(-50%, -50%)",margin:"40px auto"},card:{maxWidth:"100%",boxShadow:"0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",background:"#f3f3f3",height:"70vh"},formControl:{margin:e.spacing(1),minWidth:120}}}));var K=function(e){var t=B(),a=Object(n.useState)(!1),l=Object(o.a)(a,2),i=l[0],c=l[1],s=Object(n.useState)(!1),m=Object(o.a)(s,2),f=m[0],E=m[1],v="",b={lati:0,long:0};function x(){0!==b.lati&&0!==b.long?(console.log("Map is now shown!"),E(!0)):(console.log("Map's coordinates at (0,0)!"),E(!1))}return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{title:"Results Verification Page - Steve Tu"}),r.a.createElement(g.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:2,className:t.root},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(d.a,{className:t.card},r.a.createElement(h.a,{title:"Results from Survey"}),r.a.createElement("hr",null),r.a.createElement(p.a,null,function(){if(sessionStorage.getItem("userData")){var e=JSON.parse(sessionStorage.getItem("userData"));console.log("History's data: ",e),v=e.streetAddress+" "+e.city+" "+e.state+" "+e.zipCode,Y.a.setApiKey("AIzaSyBYR-fyWSCdQ3XfZohzXX2adrSyta-qYGo"),Y.a.fromAddress(v).then((function(e){var t=e.results[0].geometry.location,a=t.lat,n=t.lng;b.lati=a,b.long=n,setTimeout((function(){c(!0)}),2500)}),(function(e){console.error(e)}));var t="No height provided",a="No education level provided";if(""!==e.heightFT||""!==e.heightIN){var n=e.heightFT,l=e.heightIN;""===e.heightFT&&""!==e.heightIN&&(n=0),""!==e.heightFT&&""===e.heightIN&&(l=0),t=n+" ft "+l+" in"}return""!==e.educationLevel&&(a=e.educationLevel),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Name: "),e.firstName+" "+e.lastName),r.a.createElement("p",null,r.a.createElement("strong",null,"Birthday: "),"Born on ",e.birthday),r.a.createElement("p",null,r.a.createElement("strong",null,"Height: "),t),r.a.createElement("p",null,r.a.createElement("strong",null,"Phone: "),e.phone),r.a.createElement("p",null,r.a.createElement("strong",null,"Address: "),e.streetAddress+" "+e.streetAddressExtra+", "+e.city+", "+e.state+" "+e.zipCode),r.a.createElement("p",null,r.a.createElement("strong",null,"Education Level: "),a),r.a.createElement("p",null,r.a.createElement("strong",null,"Email: "),e.email),i?r.a.createElement(u.a,{variant:"contained",color:"primary",onClick:x},"Click to show Map"):r.a.createElement(L.a,null))}return r.a.createElement("div",null,r.a.createElement("h1",null,"Did not receive data object inside history as its null."))}()))),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(d.a,{className:t.card},r.a.createElement(h.a,{title:"Google Map"}),r.a.createElement("hr",null),r.a.createElement(p.a,null,f&&r.a.createElement(g.a,{item:!0,xs:!0},r.a.createElement(R,{coordinates:b})))))))};var J=function(){return r.a.createElement("div",null,r.a.createElement(c.a,{exact:!0,path:"/",component:q}),r.a.createElement(c.a,{path:"/survey",component:q}),r.a.createElement(c.a,{path:"/results",component:K}))},V=a(79);i.a.render(r.a.createElement(V.a,null,r.a.createElement(J,null)),document.getElementById("root"))}},[[119,1,2]]]);
//# sourceMappingURL=main.102fe4c3.chunk.js.map