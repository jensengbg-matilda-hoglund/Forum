(function(t){function e(e){for(var a,n,r=e[0],c=e[1],l=e[2],p=0,d=[];p<r.length;p++)n=r[p],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,r=1;r<s.length;r++){var c=s[r];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},o={app:0},i=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"04d4":function(t,e,s){},"0beb":function(t,e,s){"use strict";var a=s("7c52"),o=s.n(a);o.a},"0ee7":function(t,e,s){"use strict";var a=s("e4e6"),o=s.n(a);o.a},1:function(t,e){},"1d28":function(t,e,s){},2:function(t,e){},"26c3":function(t,e,s){"use strict";var a=s("281c"),o=s.n(a);o.a},"281c":function(t,e,s){},"2e1c":function(t,e,s){"use strict";var a=s("50c0"),o=s.n(a);o.a},3:function(t,e){},"34a4":function(t,e,s){"use strict";var a=s("e238"),o=s.n(a);o.a},"353d":function(t,e,s){},4:function(t,e){},"50c0":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],n=(s("5c0b"),s("2877")),r={},c=Object(n["a"])(r,o,i,!1,null,null,null),l=c.exports,u=s("8c4f"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"start"},[t.login?s("LogIn",{on:{signUp:t.signUp}}):s("CreateUser",{on:{signIn:t.signIn}})],1)},d=[],m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-form"},[s("h1",[t._v("Sign In")]),s("div",{staticClass:"user"},[s("i",{staticClass:"fas fa-user"}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{placeholder:"Username",name:"username",type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),s("div",{staticClass:"pwd"},[s("i",{staticClass:"fas fa-lock"}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],attrs:{placeholder:"Password",name:"password",type:"text"},domProps:{value:t.pwd},on:{input:function(e){e.target.composing||(t.pwd=e.target.value)}}})]),s("button",{staticClass:"btn",on:{click:t.logIn}},[t._v("Login")]),s("span",{staticClass:"switch-form",on:{click:t.signUp}},[t._v("Don't have an account? Sign Up!")])])},h=[],f={name:"LogIn",props:{},data:()=>({username:"",pwd:""}),computed:{authentication(){return this.$store.state.checkAuthenticate.user_id}},watch:{authentication(){this.$router.push("/home"),this.$store.dispatch("fetchCategories")}},methods:{logIn(){const t={username:this.username,pwd:this.pwd};this.$store.dispatch("authenticateUser",t)},signUp(){this.$emit("signUp",event)}}},g=f,v=(s("34a4"),Object(n["a"])(g,m,h,!1,null,"410e2190",null)),C=v.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-form"},[s("h1",[t._v("Create User")]),s("div",{staticClass:"email"},[s("i",{staticClass:"fas fa-envelope"}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.input.email,expression:"input.email"}],attrs:{name:"email",type:"email",placeholder:"Email"},domProps:{value:t.input.email},on:{input:function(e){e.target.composing||t.$set(t.input,"email",e.target.value)}}})]),s("div",{staticClass:"user"},[s("i",{staticClass:"fas fa-user"}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.input.username,expression:"input.username"}],attrs:{name:"username",type:"text",placeholder:"Username"},domProps:{value:t.input.username},on:{input:function(e){e.target.composing||t.$set(t.input,"username",e.target.value)}}})]),s("div",{staticClass:"pwd"},[s("i",{staticClass:"fas fa-lock"}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.input.pwd,expression:"input.pwd"}],attrs:{name:"password",type:"password",placeholder:"Password"},domProps:{value:t.input.pwd},on:{input:function(e){e.target.composing||t.$set(t.input,"pwd",e.target.value)}}})]),s("button",{staticClass:"btn",on:{click:t.createUser}},[t._v("Create")]),s("span",{staticClass:"switch-form",on:{click:t.signIn}},[t._v("Sign In!")])])},y=[],b={name:"CreateUser",props:{},data:()=>({input:{email:"",username:"",pwd:""}}),methods:{signIn(){this.$emit("signIn")},createUser(){const t=["January","February","March","April","May","June","July","August","September","October","November","December"];let e=new Date,s=e.getMonth();s=t[s];let a=e.getFullYear(),o=s+" "+a;const i={email:this.input.email,username:this.input.username,pwd:this.input.pwd,regDate:o};console.log(i);const n="http://localhost:3005/users/register";fetch(n,{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}}).then(t=>t.json()).then(t=>{console.log(t)}).catch(t=>{console.log(t)}),this.signIn()}}},w=b,T=(s("e2bf"),Object(n["a"])(w,_,y,!1,null,"097f361a",null)),x=T.exports,$={name:"start",components:{LogIn:C,CreateUser:x},data:()=>({login:!0}),methods:{signUp(){this.login=!1},signIn(){this.login=!0}}},j=$,S=(s("2e1c"),Object(n["a"])(j,p,d,!1,null,"194e4988",null)),O=S.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("Header",{staticClass:"header"}),s("main",{staticClass:"main"},[s("Categories",{staticClass:"categories",on:{category:t.showCategory}}),s("Discussion",{staticClass:"discussion",attrs:{Topic:t.topic}}),s("SideBar",{staticClass:"side-bar"})],1)],1)},E=[],k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("header",{staticClass:"header"},[s("div",{staticClass:"title"},[s("h1",[t._v("GeekStorm")])]),s("nav",{staticClass:"nav"},[s("ul",[s("li",[t._v("Hot Topics")]),s("li",[t._v("New Topics")]),s("li",[t._v("Rules")])])]),s("section",{staticClass:"user"},[s("button",{staticClass:"user-menu"},[s("i",{staticClass:"fas fa-envelope"})]),s("button",{staticClass:"user-menu"},[s("i",{staticClass:"fas fa-bell"})]),s("button",{staticClass:"user-menu profile"},[s("i",{staticClass:"fas fa-user-circle"})]),s("p",{staticClass:"username"},[t._v("John Doe")])])])])}],N=(s("9c80"),{}),U=Object(n["a"])(N,k,q,!1,null,"abe735c6",null),I=U.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"categories"},[s("h3",[t._v("Categories")]),t._l(t.categories,(function(e,a){return s("li",{key:a,staticClass:"category-title",on:{click:function(s){return t.fetchCategory(e._id)}}},[t._v(t._s(e.title))])})),s("aside",{staticClass:"add-category",on:{click:t.categoryPanel}},[s("i",{staticClass:"fas fa-plus"})])],2)},J=[],D={data:()=>({}),computed:{categories(){return this.$store.state.getCategories.categories}},methods:{categoryPanel(){this.$router.push("/Admin")},fetchCategory(t){this.$store.dispatch("fetchCategoryTopics",t)}}},H=D,M=(s("0ee7"),Object(n["a"])(H,A,J,!1,null,"675f4520",null)),L=M.exports,G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"discussion"},[t.showSpecificTopic?s("section",{staticClass:"topic"},[s("Topic"),s("Topic-Replies")],1):s("CategoryTopics",{on:{postTopic:t.postTopic}}),t.showPostTopic?s("PostTopic",{attrs:{category_id:t.category_id}}):t._e()],1)},R=[],B=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"topic"},[s("section",{staticClass:"header"},[s("h4",{staticClass:"title"},[t._v("How to create relations between databases in mongoDB/mongoose?")]),s("div",{staticClass:"user"},[s("p",{staticClass:"username"},[t._v("John Doe")]),s("i",{staticClass:"fas fa-user-circle"})])]),s("span",{staticClass:"divider"}),s("section",{staticClass:"content"},[s("p",{staticClass:"description"},[t._v("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.")]),s("aside",{staticClass:"created"},[t._v("13:20 02/06/19")])])])}],Y={data:()=>({})},z=Y,K=(s("9336"),Object(n["a"])(z,B,F,!1,null,"4de9599a",null)),Q=K.exports,V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"topic_replies"},[s("span",{staticClass:"divider-reply"}),s("section",{staticClass:"content"},[s("p",{staticClass:"reply"},[t._v("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.")]),s("div",{staticClass:"details"},[s("div",{staticClass:"user"},[s("p",{staticClass:"username"},[t._v("John Doe")]),s("i",{staticClass:"fas fa-user-circle"})]),s("aside",{staticClass:"created"},[t._v("09:34 02/07/19")])])])])}],X=(s("0beb"),{}),Z=Object(n["a"])(X,V,W,!1,null,"06c8354e",null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"topic"},[s("section",{staticClass:"header"},[s("h4",{staticClass:"title"},[t._v(t._s(t.category.title))]),s("div",{staticClass:"add-topic",on:{click:t.postTopic}},[s("h3",[t._v("Post Topic")]),s("i",{staticClass:"fas fa-plus"})])]),s("span",{staticClass:"divider"}),s("section",{staticClass:"content"},[t._m(0),t._l(t.category.topics,(function(e,a){return s("li",{key:a,staticClass:"topic-grid"},[s("p",{staticClass:"title"},[t._v(t._s(t.title))]),s("p",{staticClass:"author"},[t._v(t._s(t.author))]),s("aside",{staticClass:"created"},[t._v(t._s(t.created_at))])])}))],2)])},st=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-header"},[s("p",{staticClass:"title"},[t._v("Title")]),s("p",{staticClass:"author"},[t._v("Author")]),s("aside",{staticClass:"created"},[t._v("Created at")])])}],at={data:()=>({}),computed:{category(){return this.$store.state.getTopics.category}},methods:{postTopic(){this.$emit("postTopic")}}},ot=at,it=(s("e1fb"),Object(n["a"])(ot,et,st,!1,null,"a1c28f86",null)),nt=it.exports,rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"category"},[s("h3",[t._v("Post a Topic")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.topic.title,expression:"topic.title"}],attrs:{type:"text",name:"title",placeholder:"Title",autocomplete:"off"},domProps:{value:t.topic.title},on:{input:function(e){e.target.composing||t.$set(t.topic,"title",e.target.value)}}}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.topic.description,expression:"topic.description"}],attrs:{type:"text",name:"description",autocomplete:"off"},domProps:{value:t.topic.description},on:{input:function(e){e.target.composing||t.$set(t.topic,"description",e.target.value)}}}),s("button",{staticClass:"btn",on:{click:t.postTopic}},[t._v("Add Category")])])},ct=[],lt={data:()=>({topic:{title:"",description:""}}),computed:{category_id(){return this.$store.state.getTopics.category._id}},methods:{postTopic(){const t=window.localStorage.getItem("user_id"),e={category_id:this.category_id,title:this.topic.title,description:this.topic.description,user_id:t};console.log(e),this.$store.dispatch("postNewTopic",e)}}},ut=lt,pt=(s("887b"),Object(n["a"])(ut,rt,ct,!1,null,"31089125",null)),dt=pt.exports,mt={components:{Topic:Q,TopicReplies:tt,CategoryTopics:nt,PostTopic:dt},data:()=>({showSpecificTopic:!1,showPostTopic:!1,category_id:""}),methods:{postTopic(t){this.category_id=t,this.showPostTopic=!0}}},ht=mt,ft=(s("e323"),Object(n["a"])(ht,G,R,!1,null,"029276de",null)),gt=ft.exports,vt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ct=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"side-menu"},[s("h3",[t._v("Side")]),s("p",[t._v("Something")]),s("p",[t._v("Something else")]),s("p",[t._v("Anything")]),s("p",[t._v("Let's be serious")]),s("p",[t._v("Another something")]),s("p",[t._v("And another useless something")])])}],_t=(s("26c3"),{}),yt=Object(n["a"])(_t,vt,Ct,!1,null,"b7bdfdf6",null),bt=yt.exports,wt={components:{Header:I,Categories:L,Discussion:gt,SideBar:bt},data:()=>({topic:""}),methods:{showCategory(t){this.topic=t}}},Tt=wt,xt=(s("6f68"),Object(n["a"])(Tt,P,E,!1,null,"6225dc63",null)),$t=xt.exports,jt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"admin-panel"},[s("Header",{staticClass:"header"}),s("section",{staticClass:"admin-controllers"},[s("Add-Category")],1)],1)},St=[],Ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"category"},[s("h3",[t._v("New Category")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.category.title,expression:"category.title"}],attrs:{type:"text",name:"title",placeholder:"Category Title",autocomplete:"off"},domProps:{value:t.category.title},on:{input:function(e){e.target.composing||t.$set(t.category,"title",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.category.description,expression:"category.description"}],attrs:{type:"text",name:"description",placeholder:"Category Description",autocomplete:"off"},domProps:{value:t.category.description},on:{input:function(e){e.target.composing||t.$set(t.category,"description",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.category.img,expression:"category.img"}],attrs:{type:"text",name:"imgurl",placeholder:"Image URL",autocomplete:"off"},domProps:{value:t.category.img},on:{input:function(e){e.target.composing||t.$set(t.category,"img",e.target.value)}}}),t.complete?s("aside",{staticClass:"complete"},[t._v("Category successfully added!")]):t._e(),s("button",{staticClass:"btn",on:{click:t.postCategory}},[t._v("Add Category")])])},Pt=[],Et={data:()=>({category:{title:"",description:"",img:""},complete:!1}),methods:{postCategory(){const t="http://localhost:3005/admin/addCat";fetch(t,{method:"POST",body:JSON.stringify(this.category),headers:{"Content-Type":"application/json"}}).then(t=>t.json()).then(t=>{console.log(t),t.success&&(this.complete=!0)}).catch(t=>{console.error("Error:",t)}),setTimeout(()=>{this.complete=!1},3e3)}}},kt=Et,qt=(s("84dd"),Object(n["a"])(kt,Ot,Pt,!1,null,"1e077e58",null)),Nt=qt.exports,Ut={name:"Admin",components:{Header:I,AddCategory:Nt}},It=Ut,At=(s("dde3"),Object(n["a"])(It,jt,St,!1,null,"644ecfe7",null)),Jt=At.exports;a["a"].use(u["a"]);const Dt=[{path:"/",name:"Start",component:O},{path:"/home",name:"Home",meta:{requiresAuth:!0},component:$t},{path:"/admin",name:"Admin",meta:{requiresAuth:!0},component:Jt}],Ht=new u["a"]({mode:"history",base:"/",routes:Dt});Ht.beforeEach((t,e,s)=>{t.meta.requiresAuth?localStorage.getItem("user_id")?s():s({name:"login"}):s()});var Mt=Ht,Lt=s("2f62");const Gt={state:{user_id:""},mutations:{loginUser(t,e){console.log(e),localStorage.setItem("user_id",e),t.user_id=e}},actions:{async authenticateUser(t,e){const s="http://localhost:3005/auth/login";fetch(s,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(t=>t.json()).then(t=>{t.success&&this.dispatch("redirect",t)}).catch(t=>{console.error("Error:",t)})},async redirect(t,e){const s="http://localhost:3005/auth/user";fetch(s,{method:"GET",headers:{"Content-Type":"application/json",token:e.token}}).then(t=>t.json()).then(e=>{e.success&&(console.log(e),t.commit("loginUser",e.user._id))}).catch(t=>{console.error("Error:",t)})}},modules:{}};var Rt=Gt;const Bt={state:{categories:[]},mutations:{clearState(t){t.categories=[]},renderCategories(t,e){t.categories=e}},actions:{async fetchCategories(t){t.commit("clearState");const e="http://localhost:3005/forumContent/getCategories";fetch(e,{method:"GET",headers:{"Content-Type":"application/json"}}).then(t=>t.json()).then(e=>{e&&t.commit("renderCategories",e)}).catch(t=>{console.error("Error:",t)})}},modules:{}};var Ft=Bt;const Yt={state:{category:{}},mutations:{clearState(t){t.category={}},renderTopics(t,e){t.category=e}},actions:{async fetchCategoryTopics(t,e){t.commit("clearState"),console.log(e+"fuuck");const s="http://localhost:3005/forumContent/categoryTopics";fetch(s,{method:"GET",headers:{"Content-Type":"application/json",category_id:e}}).then(t=>t.json()).then(e=>{e&&t.commit("renderTopics",e.category)}).catch(t=>{console.error("Error:",t)})}},modules:{}};var zt=Yt;s("14b7");const Kt={state:{},mutations:{clearState(t){t.category={}}},actions:{async postNewTopic(t,e){const s="http://localhost:3005/forumPosts/addTopic";console.log(e),fetch(s,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(t=>t.json()).then(t=>{console.log(t),t&&console.log(t)}).catch(t=>{console.error("Error:",t)})}},modules:{}};var Qt=Kt;a["a"].use(Lt["a"]);var Vt=new Lt["a"].Store({state:{},mutations:{},actions:{},modules:{checkAuthenticate:Rt,getCategories:Ft,getTopics:zt,postInForum:Qt}});a["a"].config.productionTip=!1,new a["a"]({router:Mt,store:Vt,render:t=>t(l)}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var a=s("9c0c"),o=s.n(a);o.a},"5ff7":function(t,e,s){},"6f68":function(t,e,s){"use strict";var a=s("ff19"),o=s.n(a);o.a},"7c52":function(t,e,s){},"84dd":function(t,e,s){"use strict";var a=s("b850"),o=s.n(a);o.a},8620:function(t,e,s){},"887b":function(t,e,s){"use strict";var a=s("04d4"),o=s.n(a);o.a},9336:function(t,e,s){"use strict";var a=s("e6ea"),o=s.n(a);o.a},"9c0c":function(t,e,s){},"9c80":function(t,e,s){"use strict";var a=s("efce"),o=s.n(a);o.a},b850:function(t,e,s){},dde3:function(t,e,s){"use strict";var a=s("353d"),o=s.n(a);o.a},e1fb:function(t,e,s){"use strict";var a=s("1d28"),o=s.n(a);o.a},e238:function(t,e,s){},e2bf:function(t,e,s){"use strict";var a=s("8620"),o=s.n(a);o.a},e323:function(t,e,s){"use strict";var a=s("5ff7"),o=s.n(a);o.a},e4e6:function(t,e,s){},e6ea:function(t,e,s){},efce:function(t,e,s){},ff19:function(t,e,s){}});
//# sourceMappingURL=app.4737ffa5.js.map