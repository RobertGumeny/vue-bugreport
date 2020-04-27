(function(t){function e(e){for(var s,i,n=e[0],l=e[1],c=e[2],d=0,p=[];d<n.length;d++)i=n[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,n=1;n<a.length;n++){var l=a[n];0!==o[l]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},o={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0383":function(t,e,a){"use strict";var s=a("7505"),o=a.n(s);o.a},"14b2":function(t,e,a){},"1a8a":function(t,e,a){"use strict";var s=a("b5e8"),o=a.n(s);o.a},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"Home"}}},[t._v(" Bug "),a("i",{staticClass:"fas fa-bug pl-0"}),a("br"),a("div",{staticClass:"report"},[t._v("Report")])]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:"Home"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Home"}}},[t._v("Home")])],1),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"Profile"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Profile"}}},[t._v("Profile")])],1):t._e()]),a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("div",[a("button",{staticClass:"btn btn-warning mr-2",attrs:{"data-toggle":"modal","data-target":"#reportModal"}},[t._v("Report")]),a("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("Logout")])]):a("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v("Login")])]),a("Modal",{attrs:{id:"reportModal",title:"Report a Bug"}},[a("ReportBug",{attrs:{userName:t.profile.nickname}})],1)],1)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l=a("bc3a"),c=a.n(l),u=a("335d"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal"},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header bg-light"},[a("h5",{staticClass:"modal-title"},[t._v(t._s(t.title))]),t._m(0)]),a("div",{staticClass:"modal-body"},[t._t("default")],2)])])])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close text-danger",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"reportBug"},[a("form",[a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-md-6"},[a("label",{attrs:{for:""}},[t._v("Title:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBug.title,expression:"newBug.title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Bug title..."},domProps:{value:t.newBug.title},on:{input:function(e){e.target.composing||t.$set(t.newBug,"title",e.target.value)}}})]),a("div",{staticClass:"col-md-6"},[a("label",{attrs:{for:""}},[t._v("Reported By:")]),a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:t.userName,disabled:""}})])])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Bug Description:")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newBug.description,expression:"newBug.description"}],staticClass:"form-control",attrs:{rows:"8",placeholder:"Enter bug description here..."},domProps:{value:t.newBug.description},on:{input:function(e){e.target.composing||t.$set(t.newBug,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-md-6"},[a("label",{attrs:{for:""}},[t._v("Priority:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.newBug.importance,expression:"newBug.importance"}],staticClass:"custom-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.newBug,"importance",e.target.multiple?a:a[0])}}},[a("option",{attrs:{selected:""}},[t._v("Select a priority")]),a("option",{staticClass:"text-danger",attrs:{value:"High"}},[t._v("High")]),a("option",{staticClass:"text-warning",attrs:{value:"Medium"}},[t._v("Medium")]),a("option",{staticClass:"text-success",attrs:{value:"Low"}},[t._v("Low")])])])])]),a("button",{staticClass:"btn btn-sm btn-dark",attrs:{type:"submit","data-dismiss":"modal"},on:{click:function(e){return t.reportBug()}}},[t._v("Submit Bug")])])])},m=[],b={name:"reportBug",props:["userName"],data(){return{newBug:{}}},computed:{user(){return this.$auth.user}},methods:{async reportBug(){let t=new Date,e=t.getMonth()+1,a=t.getDate(),s=t.getFullYear(),o=e+"/"+a+"/"+s;this.newBug.modifiedDate=o,this.newBug.creatorEmail=this.user.email,await this.$store.dispatch("reportBug",this.newBug),this.$router.push({name:"bug",params:{bugId:this.$store.state.activeBug.id}}),this.newBug={}}},components:{}},h=b,v=a("2877"),f=Object(v["a"])(h,g,m,!1,null,"59bc67c8",null),_=f.exports,C={name:"modal",props:["title"],data(){return{}},computed:{profile(){this.$store.state.profile}},methods:{},components:{ReportBug:_}},w=C,B=Object(v["a"])(w,d,p,!1,null,"a43b9f76",null),y=B.exports,x={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),console.log("this.$auth.user: "),console.log(this.$auth.user),this.$store.dispatch("getProfile")},async logout(){this.$store.dispatch("resetBearer"),await this.$auth.logout({returnTo:window.location.origin})}},computed:{profile(){return this.$auth.user}},components:{Modal:y,ReportBug:_}},$=x,N=(a("1a8a"),Object(v["a"])($,i,n,!1,null,null,null)),k=N.exports,E={name:"App",async beforeCreate(){await Object(u["c"])(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"))},components:{Navbar:k}},P=E,O=(a("5c0b"),Object(v["a"])(P,o,r,!1,null,null,null)),M=O.exports,D=a("8c4f"),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home container"},[t.$auth.isAuthenticated?a("div",[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-10 mx-auto"},[a("BugTable")],1)])]):a("div",{staticClass:"text-center mt-5"},[a("h2",[t._v("Please log in or register to view reported bugs.")])])])},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row mt-3 mb-1"},[a("div",{staticClass:"col-12"},[a("h2",[t._v("Reported Bugs")])])])}],T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{on:{click:function(e){return t.openBug()}}},[a("th",{attrs:{scope:"row"}},[t._v(t._s(t.bugData.title))]),a("td",[t._v(t._s(t.bugData.creatorEmail))]),"High"==t.bugData.importance?a("td",{staticClass:"text-danger font-weight-bold"},[t._v(t._s(t.bugData.importance))]):t._e(),"Medium"==t.bugData.importance?a("td",{staticClass:"text-warning font-weight-bold"},[t._v(t._s(t.bugData.importance))]):t._e(),"Low"==t.bugData.importance?a("td",{staticClass:"text-success font-weight-bold"},[t._v(t._s(t.bugData.importance))]):t._e(),t.bugData.closed?a("td",{staticClass:"font-italic font-weight-bold text-muted"},[t._v("Closed")]):a("td",{staticClass:"font-weight-bold"},[t._v("Open")]),a("td",[t._v(t._s(t.bugData.modifiedDate))])])},I=[],S={name:"bug",props:["bugData","priorityFilter"],data(){return{}},computed:{},methods:{openBug(){this.$store.commit("setActiveBug",{}),this.$router.push({name:"bug",params:{bugId:this.bugData.id}})}},components:{}},R=S,H=Object(v["a"])(R,T,I,!1,null,"fdd169a8",null),L=H.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bugTable"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-striped"},[a("thead",{staticClass:"thead-light"},[a("tr",{staticClass:"table-primary"},[a("th",{attrs:{scope:"col"}},[t._v("Title")]),a("th",{attrs:{scope:"col"}},[t._v("Reported By")]),a("th",{attrs:{scope:"col"}},[a("div",{staticClass:"dropdown"},[a("button",{staticClass:"btn dropdown-toggle font-weight-bold text-dark mb-0",attrs:{type:"button","data-toggle":"dropdown",id:"priorityFilterMenu"}},[t._v("Priority")]),a("div",{staticClass:"dropdown-menu bg-light"},[a("button",{staticClass:"btn btn-link dropdown-item",on:{click:function(e){return t.priorityAll()}}},[t._v("All")]),a("button",{staticClass:"btn btn-link text-danger dropdown-item",on:{click:function(e){return t.filterPriorityHigh()}}},[t._v("High")]),a("button",{staticClass:"btn btn-link text-warning dropdown-item",on:{click:function(e){return t.filterPriorityMedium()}}},[t._v("Medium")]),a("button",{staticClass:"btn btn-link text-success dropdown-item",on:{click:function(e){return t.filterPriorityLow()}}},[t._v("Low")])])])]),a("th",{attrs:{scope:"col"}},[a("div",{staticClass:"dropdown"},[a("button",{staticClass:"btn dropdown-toggle font-weight-bold text-dark mb-0",attrs:{type:"button","data-toggle":"dropdown",id:"statusFilterMenu"}},[t._v("Status")]),a("div",{staticClass:"dropdown-menu bg-light"},[a("button",{staticClass:"btn btn-link dropdown-item",on:{click:function(e){return t.statusAll()}}},[t._v("All")]),a("button",{staticClass:"btn btn-link dropdown-item font-weight-bold font-italic text-muted",on:{click:function(e){return t.filterStatusClosed()}}},[t._v("Closed")]),a("button",{staticClass:"btn btn-link dropdown-item font-weight-bold",on:{click:function(e){return t.filterStatusOpen()}}},[t._v("Open")])])])]),a("th",{attrs:{scope:"col"}},[t._v("Last Modified")])])]),a("tbody",t._l(t.display,(function(t){return a("Bug",{key:t.id,attrs:{bugData:t}})})),1)])])])},U=[],W={name:"bugTable",data(){return{display:[]}},computed:{bugs(){return this.$store.state.bugs}},mounted(){this.display=this.bugs},methods:{priorityAll(){this.display=this.bugs},filterPriorityHigh(){this.display=this.bugs.filter(t=>"High"==t.importance)},filterPriorityMedium(){this.display=this.bugs.filter(t=>"Medium"==t.importance)},filterPriorityLow(){this.display=this.bugs.filter(t=>"Low"==t.importance)},statusAll(){this.display=this.bugs},filterStatusClosed(){this.display=this.bugs.filter(t=>1==t.closed)},filterStatusOpen(){this.display=this.bugs.filter(t=>0==t.closed)}},components:{Bug:L}},Y=W,z=(a("e923"),Object(v["a"])(Y,F,U,!1,null,"10bda2ae",null)),J=z.exports,V={name:"home",computed:{profile(){return this.$store.profile},bugs(){return this.$store.state.bugs}},mounted(){this.$store.dispatch("getBugs")},components:{ReportBug:_,Bug:L,BugTable:J}},X=V,q=Object(v["a"])(X,A,j,!1,null,null,null),G=q.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about text-center"},[a("h1",[t._v("Welcome "+t._s(t.profile.name))]),a("img",{staticClass:"rounded",attrs:{src:t.profile.picture,alt:""}}),a("p",[t._v(t._s(t.profile.email))])])},Q=[],Z={name:"Profile",computed:{profile(){return this.$store.state.profile}}},tt=Z,et=(a("0383"),Object(v["a"])(tt,K,Q,!1,null,"59c2bb44",null)),at=et.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bugDetails container-fluid"},[a("div",{staticClass:"row my-2"},[a("div",{staticClass:"col-12"},[a("h2",[t._v(t._s(t.bug.title))])])]),a("div",{staticClass:"row justify-content-around mb-3"},[a("div",{staticClass:"col-3 text-left"},[a("span",[t._v("Reported by:")]),a("h5",[t._v(t._s(t.bug.creatorEmail))])]),a("div",{staticClass:"col-3 text-center"},[a("span",[t._v("Importance:")]),a("h5",[t._v(t._s(t.bug.importance))])]),a("div",{staticClass:"col-3 text-right"},[a("span",[t._v("Status:")]),t.bug.closed?a("h5",{staticClass:"text-danger"},[t._v("Closed")]):a("h5",{staticClass:"text-success"},[t._v("Open")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-10 mx-auto"},[a("p",{staticClass:"border"},[t._v(t._s(t.bug.description))])])]),a("div",{staticClass:"row"},[t.bug.closed||t.bug.creatorEmail!=this.$auth.user.email?t._e():a("div",{staticClass:"col-12 text-center"},[a("button",{staticClass:"btn btn-warning mr-2",attrs:{"data-toggle":"modal","data-target":"#editBugModal"},on:{click:function(e){return t.triggerEditBug()}}},[t._v("Edit Bug")]),a("button",{staticClass:"btn btn-danger ml-2",on:{click:function(e){return t.deletePrompt()}}},[t._v("Close Bug")]),a("Modal",{attrs:{title:"Edit Bug",id:"editBugModal"}},[a("EditBug",{attrs:{userName:t.profile.nickname}})],1)],1),a("div",{staticClass:"col-12 text-center"},[t.bug.closed?a("p",{staticClass:"text-danger"},[t._v("This bug has been closed and can no longer be edited.")]):t._e()])]),a("div",{staticClass:"row my-2"},[a("div",{staticClass:"col-12"},[a("span",[a("h2",{staticClass:"d-inline"},[t._v("Notes")]),t.bug.closed?a("p",{staticClass:"text-danger d-inline ml-3"},[t._v("This bug has been closed, no more notes can be added.")]):a("button",{staticClass:"btn btn-success btn-sm mb-2 ml-2",attrs:{"data-toggle":"modal","data-target":"#addNoteModal"}},[t._v("Add")])]),a("Modal",{attrs:{title:"Add a Note",id:"addNoteModal"}},[a("CreateNote",{attrs:{userInfo:t.profile}})],1)],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-11 mx-auto"},[a("NoteTable")],1)])])},ot=[],rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"editBug"},[a("form",[a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-md-6"},[a("label",{attrs:{for:""}},[t._v("Title:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.bug.title,expression:"bug.title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Bug title..."},domProps:{value:t.bug.title},on:{input:function(e){e.target.composing||t.$set(t.bug,"title",e.target.value)}}})]),a("div",{staticClass:"col-md-6"},[a("label",{attrs:{for:""}},[t._v("Reported By:")]),a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:t.userName,disabled:""}})])])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Bug Description:")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.bug.description,expression:"bug.description"}],staticClass:"form-control",attrs:{rows:"8",placeholder:"Enter bug description here..."},domProps:{value:t.bug.description},on:{input:function(e){e.target.composing||t.$set(t.bug,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-md-6"},[a("label",{attrs:{for:""}},[t._v("Priority:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.bug.importance,expression:"bug.importance"}],staticClass:"custom-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.bug,"importance",e.target.multiple?a:a[0])}}},[a("option",{attrs:{selected:""}},[t._v("Select a priority")]),a("option",{staticClass:"text-danger",attrs:{value:"High"}},[t._v("High")]),a("option",{staticClass:"text-warning",attrs:{value:"Medium"}},[t._v("Medium")]),a("option",{staticClass:"text-success",attrs:{value:"Low"}},[t._v("Low")])])])])]),a("button",{staticClass:"btn btn-sm btn-dark",attrs:{type:"submit","data-dismiss":"modal"},on:{click:function(e){return t.editBug()}}},[t._v("Edit Bug")])])])},it=[],nt={name:"editbug",props:["userName"],data(){return{}},computed:{bug(){return this.$store.state.activeBug}},methods:{editBug(){this.$store.dispatch("editBug",this.bug)}},components:{}},lt=nt,ct=Object(v["a"])(lt,rt,it,!1,null,"245ed1a8",null),ut=ct.exports,dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"createNote"},[a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Add a Note:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newNote.content,expression:"newNote.content"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Note contents..."},domProps:{value:t.newNote.content},on:{input:function(e){e.target.composing||t.$set(t.newNote,"content",e.target.value)}}})]),a("button",{staticClass:"btn btn-sm btn-dark",attrs:{type:"submit","data-dismiss":"modal"},on:{click:function(e){return t.createNote()}}},[t._v("Create Note")])])])},pt=[],gt={name:"createNote",props:["userInfo"],data(){return{newNote:{}}},computed:{user(){return this.$auth.user}},methods:{createNote(){this.newNote.bugId=this.$store.state.activeBug.id,this.newNote.creatorEmail=this.userInfo.email,this.newNote.creatorName=this.userInfo.nickname,this.$store.dispatch("createNote",this.newNote),this.newNote={}}},components:{}},mt=gt,bt=Object(v["a"])(mt,dt,pt,!1,null,"46062f14",null),ht=bt.exports,vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticClass:"note"},[a("th",{attrs:{scope:"row"}},[t._v(t._s(t.noteData.creatorName))]),a("td",[t._v(t._s(t.noteData.content))]),t.noteData.creatorEmail==this.$auth.user.email?a("td",[a("button",{staticClass:"btn ml-auto"},[a("i",{staticClass:"fas fa-trash-alt text-danger",on:{click:function(e){return t.deletePrompt()}}})])]):a("td",[t._m(0)])])},ft=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn ml-auto"},[a("i",{staticClass:"fas fa-trash-alt text-muted"})])}],_t={name:"note",props:["noteData"],data(){return{}},computed:{user(){return this.$auth.user}},methods:{deletePrompt(){this.$swal.fire({title:"Are you sure?",text:"Once a note is closed, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(t=>{t.value&&this.deleteNote()})},deleteNote(){this.$store.dispatch("deleteNote",this.noteData)}},components:{}},Ct=_t,wt=Object(v["a"])(Ct,vt,ft,!1,null,"a8fbbe34",null),Bt=wt.exports,yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"noteTable"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-striped"},[t._m(0),a("tbody",t._l(t.notes,(function(t){return a("Note",{key:t.id,attrs:{noteData:t}})})),1)])])])},xt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-light"},[a("tr",{staticClass:"table-primary"},[a("th",{attrs:{scope:"col"}},[t._v("Author")]),a("th",{attrs:{scope:"col"}},[t._v("Message")]),a("th",{attrs:{scope:"col"}},[t._v("Delete")])])])}],$t={name:"noteTable",data(){return{}},computed:{notes(){return this.$store.state.notes}},methods:{},components:{Note:Bt}},Nt=$t,kt=Object(v["a"])(Nt,yt,xt,!1,null,"c515043a",null),Et=kt.exports,Pt={name:"bugdetails",data(){return{}},computed:{bug(){return this.$store.state.activeBug},profile(){return this.$auth.user},notes(){return this.$store.state.notes}},mounted(){this.$store.dispatch("getBugById",this.$route.params.bugId),this.$store.dispatch("getNotesByBugId",this.$route.params.bugId)},methods:{triggerEditBug(){console.log(this.bug)},deletePrompt(){this.$swal.fire({title:"Are you sure?",text:"Once a bug is closed, it cannot be reopened",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, close it!"}).then(t=>{t.value&&this.closeBug()})},closeBug(){console.log("Bug",this.bug.id,"closed"),this.bug.closed=!0,this.$store.dispatch("closeBug",this.bug)}},components:{Modal:y,EditBug:ut,CreateNote:ht,Note:Bt,NoteTable:Et}},Ot=Pt,Mt=Object(v["a"])(Ot,st,ot,!1,null,"728e55e7",null),Dt=Mt.exports;s["a"].use(D["a"]);const At=[{path:"/",name:"Home",component:G},{path:"/profile",name:"Profile",component:at,beforeEnter:u["b"]},{path:"/bugs/:bugId",name:"bug",component:Dt,beforeEnter:u["b"]}],jt=new D["a"]({routes:At});var Tt=jt,It=a("2f62");s["a"].use(It["a"]);let St=location.host.includes("localhost")?"http://localhost:3000/":"/",Rt=c.a.create({baseURL:St+"api/",timeout:6e3,withCredentials:!0});var Ht=new It["a"].Store({state:{profile:{},bugs:[],activeBug:{},notes:[]},mutations:{setProfile(t,e){t.profile=e},setBugs(t,e){t.bugs=e},setActiveBug(t,e){t.activeBug=e},setActiveNotes(t,e){t.notes=e}},actions:{setBearer({},t){Rt.defaults.headers.authorization=t},resetBearer(){Rt.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await Rt.get("profile");t("setProfile",e.data)}catch(e){console.error(e)}},async getBugs({commit:t,dispatch:e}){try{let e=await Rt.get("bugs");t("setBugs",e.data)}catch(a){console.error(a)}},async getBugById({commit:t,dispatch:e},a){try{let e=await Rt.get("bugs/"+a);t("setActiveBug",e.data)}catch(s){console.error(s)}},async getNotesByBugId({commit:t,dispatch:e},a){try{let e=await Rt.get("bugs/"+a+"/notes");t("setActiveNotes",e.data)}catch(s){console.error(s)}},async reportBug({commit:t,dispatch:e},a){try{let e=await Rt.post("bugs",a);t("setActiveBug",e.data)}catch(s){console.error(s)}},async createNote({commit:t,dispatch:e},a){try{await Rt.post("notes",a),e("getNotesByBugId",a.bugId)}catch(s){console.error(s)}},async editBug({commit:t,dispatch:e},a){try{await Rt.put("bugs/"+a.id,a)}catch(s){console.error(s)}},async closeBug({commit:t,dispatch:e},a){try{console.log("deleting",a),await Rt.put("bugs/"+a._id,{closed:a.closed}),e("getBugById",a._id)}catch(s){console.error(s)}},async deleteNote({commit:t,dispatch:e},a){try{await Rt.delete("notes/"+a.id),e("getNotesByBugId",a.bugId)}catch(s){console.error(s)}}}});const Lt="dev-l0nrcp1d.auth0.com",Ft="https://bugreportapi.com",Ut="Xamrn4SeNotWxs1E2nwISTBrUcVR1Va6";var Wt=a("5886");s["a"].use(u["a"],{domain:Lt,clientId:Ut,audience:Ft,onRedirectCallback:t=>{Tt.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),s["a"].use(Wt["a"]),new s["a"]({router:Tt,store:Ht,render:function(t){return t(M)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),o=a.n(s);o.a},7505:function(t,e,a){},"9c0c":function(t,e,a){},b5e8:function(t,e,a){},e923:function(t,e,a){"use strict";var s=a("14b2"),o=a.n(s);o.a}});