(this["webpackJsonpcsc642-individual-project"]=this["webpackJsonpcsc642-individual-project"]||[]).push([[0],{119:function(e,t,a){e.exports=a(173)},155:function(e,t){e.exports=["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VA","WA","WV","WI","WY"]},173:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),i=a.n(l),c=a(12),o=a(9),s=a(204),u=a(93),m=a(210),d=a(211),h=a(212),g=a(213),p=a(98),f=a(92),E=a(208),b=a(209),v=a(218),x=a(214),j=a(216),y=a(99),O=a(217),S=a(107),C=a(206),A=a(207),I=a(50),N=Object(s.a)((function(e){return{root:{flexGrow:1,width:"100vw",maxWidth:"100vw",marginTop:-10,marginLeft:-10},title:{flexGrow:1}}}));var w=function(e){var t=N();return r.a.createElement("div",{className:t.root},r.a.createElement(C.a,{position:"static"},r.a.createElement(A.a,null,r.a.createElement(I.a,{variant:"h6",className:t.title},e.title))))},T=a(103),P=a.n(T),k=a(155),q=Object(s.a)((function(e){return{root:{margin:"40px auto",width:"100vw",height:"80%",maxWidth:"75%",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",boxShadow:"0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",background:"#f3f3f3",overflow:"auto"},card:{overflow:"auto"},formControl:{margin:e.spacing(1),minWidth:120}}}));var L=function(e){var t=q(),a=Object(n.useState)(""),l=Object(o.a)(a,2),i=l[0],c=l[1],s=Object(n.useState)(""),C=Object(o.a)(s,2),A=C[0],I=C[1],N=Object(n.useState)(""),T=Object(o.a)(N,2),L=T[0],F=T[1],M=Object(n.useState)(""),W=Object(o.a)(M,2),D=W[0],z=W[1],H=Object(n.useState)(""),Z=Object(o.a)(H,2),G=Z[0],R=Z[1],X=Object(n.useState)(""),Y=Object(o.a)(X,2),B=Y[0],K=Y[1],V=Object(n.useState)(""),J=Object(o.a)(V,2),Q=J[0],_=J[1],U=Object(n.useState)(""),$=Object(o.a)(U,2),ee=$[0],te=$[1],ae=Object(n.useState)(""),ne=Object(o.a)(ae,2),re=ne[0],le=ne[1],ie=Object(n.useState)(""),ce=Object(o.a)(ie,2),oe=ce[0],se=ce[1],ue=Object(n.useState)(""),me=Object(o.a)(ue,2),de=me[0],he=me[1],ge=Object(n.useState)(""),pe=Object(o.a)(ge,2),fe=pe[0],Ee=pe[1],be=Object(n.useState)(""),ve=Object(o.a)(be,2),xe=ve[0],je=ve[1],ye=Object(n.useState)(""),Oe=Object(o.a)(ye,2),Se=Oe[0],Ce=Oe[1],Ae=Object(n.useState)(!1),Ie=Object(o.a)(Ae,2),Ne=Ie[0],we=Ie[1],Te=Object(n.useState)(!1),Pe=Object(o.a)(Te,2),ke=Pe[0],qe=Pe[1],Le=Object(n.useState)(!1),Fe=Object(o.a)(Le,2),Me=Fe[0],We=Fe[1],De=Object(n.useState)(!1),ze=Object(o.a)(De,2),He=ze[0],Ze=ze[1],Ge=Object(n.useState)(!1),Re=Object(o.a)(Ge,2),Xe=Re[0],Ye=Re[1],Be=Object(n.useState)(!1),Ke=Object(o.a)(Be,2),Ve=Ke[0],Je=Ke[1],Qe=Object(n.useState)(!1),_e=Object(o.a)(Qe,2),Ue=_e[0],$e=_e[1],et=Object(n.useState)(!1),tt=Object(o.a)(et,2),at=tt[0],nt=tt[1],rt=Object(n.useState)(""),lt=Object(o.a)(rt,2),it=lt[0],ct=lt[1],ot=Object(n.useState)(""),st=Object(o.a)(ot,2),ut=st[0],mt=st[1],dt=Object(n.useState)(""),ht=Object(o.a)(dt,2),gt=ht[0],pt=ht[1],ft=Object(n.useState)(""),Et=Object(o.a)(ft,2),bt=Et[0],vt=Et[1];Object(n.useEffect)((function(){if(sessionStorage.getItem("userData")){var e=JSON.parse(sessionStorage.getItem("userData"));console.log("Found your old data! Data: ",e),c(e.firstName),I(e.lastName),F(e.birthday),z(e.heightFT),R(e.heightIN),K(e.phone),_(e.educationLevel),te(e.streetAddress),le(e.streetAddressExtra),se(e.zipCode),he(e.city),Ee(e.state),je(e.email)}else console.log("You are starting fresh!")}),[]);var xt={firstName:i,lastName:A,birthday:L,heightFT:D,heightIN:G,phone:B,educationLevel:Q,streetAddress:ee,streetAddressExtra:re,zipCode:oe,city:de,state:fe,email:xe,confirmEmail:Se,checkedTermsAndConditions:Ne,checkedCaptcha:ke,checkedValidationNameError:Me};return Object(n.useEffect)((function(){i.length+A.length>40?We(!0):We(!1);var e=!1,t=!1,a=function(e){for(var t=0;t<e.length;t++){var a=e.charCodeAt(t);if(32!==a&&!(a>47&&a<58)&&!(a>64&&a<91)&&!(a>96&&a<123))return!1}return!0}(ee),n=!1,r=!1,l=function(e){for(var t=0;t<e.length;t++){var a=e.charCodeAt(t);if(!(a>47&&a<58))return!1}return!0}(oe),c=!1,o=!1,s=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(xe),u=!1;ee.length<41&&(e=!0),""!==ee&&(t=!0),oe.length<6&&(n=!0),""!==oe&&(r=!0),xe.length<41&&(c=!0),""!==xe&&(o=!0),xe===Se&&(u=!0),a&&e&&t?Ze(!1):a||e||!t?!a&&e&&t?(ct("Address contains non-alphanumeric characters"),Ze(!0)):a&&!e&&t?(ct("Address cannot be more than 40 characters"),Ze(!0)):Ze(!1):(ct("Address contains non-alphanumeric characters and cannot be more than 40 characters"),Ze(!0)),n&&l&&r?Ye(!1):n||l||!r?n&&!l&&r?(mt("ZIP Code contains non-numeric characters"),Ye(!0)):!n&&l&&r?(mt("ZIP Code cannot be more than 5 numbers"),Ye(!0)):Ye(!1):(mt("ZIP Code contains non-numeric characters and cannot be more than 5 numbers"),Ye(!0)),c&&s&&o?Je(!1):c||s||!o?!c&&s&&o?(pt("Email cannot be more than 40 characters"),Je(!0)):c&&!s&&o?(pt("Invalid email"),Je(!0)):Je(!1):(pt("Invalid email and cannot be more than 40 characters"),Je(!0)),u?$e(!1):(vt("Emails must match!"),$e(!0)),nt(!!(He||Xe||Ve||Ue||Me))}),[xt]),r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{title:"CSC 642 Summer 2020 Individual Assignment - Steve Tu"}),r.a.createElement(m.a,{className:t.root},r.a.createElement(d.a,{title:"Data Survey Form"}),r.a.createElement("hr",{style:{maxWidth:"95%"}}),r.a.createElement(h.a,null,r.a.createElement("form",{onSubmit:function(t){return sessionStorage.setItem("userData",JSON.stringify(xt)),void e.history.push({pathname:"/results",state:{data:xt}})}},r.a.createElement(g.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:1},r.a.createElement(g.a,{item:!0,xs:6,sm:3},Me?r.a.createElement(p.a,{error:!0,helperText:"Full name cannot be more than 40 characters",id:"first-name-textfield",label:"First Name",type:"text",value:i,onChange:function(e){return c(e.target.value)},required:!0,variant:"filled"}):r.a.createElement(p.a,{id:"first-name-textfield",label:"First Name",type:"text",value:i,onChange:function(e){return c(e.target.value)},required:!0,variant:"filled"})),r.a.createElement(g.a,{item:!0,xs:6,sm:3},Me?r.a.createElement(p.a,{error:!0,helperText:"Full name cannot be more than 40 characters",id:"last-name-textfield",label:"Last Name",type:"text",value:A,onChange:function(e){return I(e.target.value)},required:!0,variant:"filled"}):r.a.createElement(p.a,{id:"last-name-textfield",label:"Last Name",type:"text",value:A,onChange:function(e){return I(e.target.value)},required:!0,variant:"filled"})),r.a.createElement(g.a,{item:!0,xs:6,sm:3},r.a.createElement(p.a,{id:"birthday-textfield",label:"Birthday",type:"date",value:L,onChange:function(e){return F(e.target.value)},required:!0,variant:"filled",className:t.textField,InputLabelProps:{shrink:!0}}))),r.a.createElement(g.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:1,style:{paddingTop:10}},r.a.createElement(g.a,{item:!0,xs:6,sm:3},r.a.createElement(p.a,{id:"height-ft-textfield",label:"Height (optional)",type:"number",value:D,onChange:function(e){return z(e.target.value)},InputLabelProps:{shrink:!0},InputProps:{inputProps:{min:0},shrink:"false",endAdornment:r.a.createElement(f.a,{position:"end"},"ft")},variant:"filled"})),r.a.createElement(g.a,{item:!0,xs:6,sm:3},r.a.createElement(p.a,{id:"height-in-textfield",label:"Height (optional)",type:"number",value:G,onChange:function(e){return R(e.target.value)},InputLabelProps:{shrink:!0},InputProps:{inputProps:{min:0},shrink:"false",endAdornment:r.a.createElement(f.a,{position:"end"},"in")},variant:"filled"}))),r.a.createElement(g.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:1,style:{paddingTop:10}},r.a.createElement(g.a,{item:!0,xs:12,sm:6},r.a.createElement(P.a,{value:B,label:"Phone Number",onChange:function(e){K(e)},required:!0,variant:"filled"}))),r.a.createElement(g.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:1,style:{paddingTop:10}},r.a.createElement(g.a,{item:!0,xs:6,sm:3},r.a.createElement(E.a,{component:"fieldset"},r.a.createElement(b.a,{component:"legend"},"Education Level (optional)"),r.a.createElement(v.a,{"aria-label":"education-level",name:"education-level1",value:Q,onChange:function(e){return _(e.target.value)}},r.a.createElement(x.a,{value:"None",control:r.a.createElement(j.a,null),label:"None"}),r.a.createElement(x.a,{value:"High School",control:r.a.createElement(j.a,null),label:"High School"}),r.a.createElement(x.a,{value:"College",control:r.a.createElement(j.a,null),label:"College"}),r.a.createElement(x.a,{value:"Graduate Studies",control:r.a.createElement(j.a,null),label:"Graduate Studies"}),r.a.createElement(x.a,{value:"Ph.D",control:r.a.createElement(j.a,null),label:"Ph.D"}))))),r.a.createElement(g.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:1,style:{paddingTop:10}},r.a.createElement(g.a,{item:!0,xs:12},He?r.a.createElement(p.a,{error:!0,helperText:it,id:"street-address-textfield",label:"Street Address",value:ee,onChange:function(e){return te(e.target.value)},required:!0,variant:"filled",style:{width:"80%"}}):r.a.createElement(p.a,{id:"street-address-textfield",label:"Street Address",value:ee,onChange:function(e){return te(e.target.value)},required:!0,variant:"filled",style:{width:"80%"}}))),r.a.createElement(g.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:1,style:{paddingTop:10}},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(p.a,{id:"street-address-extra-textfield",label:"Apartment, unit, etc. (optional)",value:re,onChange:function(e){return le(e.target.value)},variant:"filled",style:{width:"80%"}}))),r.a.createElement(g.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:1,style:{paddingTop:10}},r.a.createElement(g.a,{item:!0,xs:6,sm:3},Xe?r.a.createElement(p.a,{error:!0,helperText:ut,id:"zip-code-textfield",label:"ZIP Code",value:oe,onChange:function(e){return se(e.target.value)},required:!0,variant:"filled"}):r.a.createElement(p.a,{id:"zip-code-textfield",label:"ZIP Code",value:oe,onChange:function(e){return se(e.target.value)},required:!0,variant:"filled"})),r.a.createElement(g.a,{item:!0,xs:6,sm:3},r.a.createElement(p.a,{id:"city-textfield",label:"City",value:de,onChange:function(e){return he(e.target.value)},required:!0,variant:"filled"})),r.a.createElement(g.a,{item:!0,xs:6,sm:3},r.a.createElement(p.a,{id:"textfield-select-state",label:"State",select:!0,defaultValue:"",value:fe,onChange:function(e){return Ee(e.target.value)},required:!0,variant:"filled"},k.map((function(e,t){return r.a.createElement(y.a,{key:e+"-"+t,value:e},e)}))))),r.a.createElement(g.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:1,style:{paddingTop:10}},r.a.createElement(g.a,{item:!0,xs:12},Ve?r.a.createElement(p.a,{error:!0,helperText:gt,id:"email-address-textfield",label:"Email Address",value:xe,onChange:function(e){return je(e.target.value)},required:!0,variant:"filled",style:{width:"80%"}}):r.a.createElement(p.a,{id:"email-address-textfield",label:"Email Address",value:xe,onChange:function(e){return je(e.target.value)},required:!0,variant:"filled",style:{width:"80%"}}))),r.a.createElement(g.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:1,style:{paddingTop:10}},r.a.createElement(g.a,{item:!0,xs:12},Ue?r.a.createElement(p.a,{error:!0,helperText:bt,id:"email-address-confirm-textfield",label:"Confirm Email Address",value:Se,onChange:function(e){return Ce(e.target.value)},required:!0,variant:"filled",style:{width:"80%"}}):r.a.createElement(p.a,{id:"email-address-confirm-textfield",label:"Confirm Email Address",value:Se,onChange:function(e){return Ce(e.target.value)},required:!0,variant:"filled",style:{width:"80%"}}))),r.a.createElement(g.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:1,style:{paddingTop:10}},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(S.a,{sitekey:"6LcKB7EZAAAAAOnfPRTQWnXMcjhq4AV_hhhsisw_",onChange:function(){qe(!0)}}))),r.a.createElement(g.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:1,style:{paddingTop:10}},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(E.a,null,r.a.createElement(x.a,{control:r.a.createElement(O.a,{name:"terms",checked:Ne,onChange:function(e){return we(e.target.checked)},required:!0}),label:"I accept the Terms and Conditions"})))),r.a.createElement(g.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:1,style:{paddingTop:10}},r.a.createElement(g.a,{item:!0,xs:12},function(){var e="",t=!1;return Ne&&ke&&!at?(e="Submit",t=!1):Ne||!ke||at?!Ne||ke||at?at?(e="Please resolve all errors",t=!0):(e="Please accept the terms and conditions and Captcha",t=!0):(e="Please accept the captcha",t=!0):(e="Please accept the terms and conditions",t=!0),t?r.a.createElement(u.a,{type:"submit",disabled:!0,variant:"contained",color:"secondary"},e):r.a.createElement(u.a,{type:"submit",variant:"contained",color:"secondary"},e)}()))))))},F=a(215),M=a(104),W=a(105),D=a(108),z=a(106),H=a(71),Z={width:"250px",height:"250px",maxWidth:"80%",maxHeight:"80%"},G=function(e){Object(D.a)(a,e);var t=Object(z.a)(a);function a(){return Object(M.a)(this,a),t.apply(this,arguments)}return Object(W.a)(a,[{key:"render",value:function(){return console.log("Received props are : ",this.props.coordinates),r.a.createElement(H.Map,{google:this.props.google,zoom:14,style:Z,initialCenter:{lat:this.props.coordinates.lati,lng:this.props.coordinates.long}},r.a.createElement(H.Marker,{position:{lat:this.props.coordinates.lati,lng:this.props.coordinates.long}}))}}]),a}(n.Component),R=Object(H.GoogleApiWrapper)({apiKey:"AIzaSyBYR-fyWSCdQ3XfZohzXX2adrSyta-qYGo"})(G),X=a(80),Y=a.n(X),B=Object(s.a)((function(e){return{root:{width:"100vw",maxWidth:"75%",height:"80vh",maxHeight:"50%",position:"absolute",left:"50%",top:"30%",transform:"translate(-50%, -50%)",margin:"40px auto"},card:{maxWidth:"100%",boxShadow:"0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",background:"#f3f3f3",height:"70vh"},formControl:{margin:e.spacing(1),minWidth:120}}}));var K=function(e){var t=B(),a=Object(n.useState)(!1),l=Object(o.a)(a,2),i=l[0],c=l[1],s=Object(n.useState)(!1),p=Object(o.a)(s,2),f=p[0],E=p[1],b="",v={lati:0,long:0};function x(){0!==v.lati&&0!==v.long?(console.log("Map is now shown!"),E(!0)):(console.log("Map's coordinates at (0,0)!"),E(!1))}return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{title:"Results Verification Page - Steve Tu"}),r.a.createElement(g.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:2,className:t.root},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(m.a,{className:t.card},r.a.createElement(d.a,{title:"Results from Survey"}),r.a.createElement("hr",null),r.a.createElement(h.a,null,function(){if(sessionStorage.getItem("userData")){var e=JSON.parse(sessionStorage.getItem("userData"));console.log("History's data: ",e),b=e.streetAddress+" "+e.city+" "+e.state+" "+e.zipCode,Y.a.setApiKey("AIzaSyBYR-fyWSCdQ3XfZohzXX2adrSyta-qYGo"),Y.a.fromAddress(b).then((function(e){var t=e.results[0].geometry.location,a=t.lat,n=t.lng;v.lati=a,v.long=n,setTimeout((function(){c(!0)}),2500)}),(function(e){console.error(e)}));var t="No height provided",a="No education level provided";if(""!==e.heightFT||""!==e.heightIN){var n=e.heightFT,l=e.heightIN;""===e.heightFT&&""!==e.heightIN&&(n=0),""!==e.heightFT&&""===e.heightIN&&(l=0),t=n+" ft "+l+" in"}return""!==e.educationLevel&&(a=e.educationLevel),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Name: "),e.firstName+" "+e.lastName),r.a.createElement("p",null,r.a.createElement("strong",null,"Birthday: "),"Born on ",e.birthday),r.a.createElement("p",null,r.a.createElement("strong",null,"Height: "),t),r.a.createElement("p",null,r.a.createElement("strong",null,"Phone: "),e.phone),r.a.createElement("p",null,r.a.createElement("strong",null,"Address: "),e.streetAddress+" "+e.streetAddressExtra+", "+e.city+", "+e.state+" "+e.zipCode),r.a.createElement("p",null,r.a.createElement("strong",null,"Education Level: "),a),r.a.createElement("p",null,r.a.createElement("strong",null,"Email: "),e.email),i?r.a.createElement(u.a,{variant:"contained",color:"primary",onClick:x},"Click to show Map"):r.a.createElement(F.a,null))}return r.a.createElement("div",null,r.a.createElement("h1",null,"Did not receive data object inside history as its null."))}()))),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(m.a,{className:t.card},r.a.createElement(d.a,{title:"Google Map"}),r.a.createElement("hr",null),r.a.createElement(h.a,null,f&&r.a.createElement(g.a,{item:!0,xs:!0},r.a.createElement(R,{coordinates:v})))))))};var V=function(){return r.a.createElement("div",null,r.a.createElement(c.a,{exact:!0,path:"/",component:L}),r.a.createElement(c.a,{path:"/survey",component:L}),r.a.createElement(c.a,{path:"/results",component:K}))},J=a(79);i.a.render(r.a.createElement(J.a,null,r.a.createElement(V,null)),document.getElementById("root"))}},[[119,1,2]]]);
//# sourceMappingURL=main.87f6a7b9.chunk.js.map