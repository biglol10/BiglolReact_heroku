(this.webpackJsonpbiglol_page=this.webpackJsonpbiglol_page||[]).push([[0],{111:function(e,t,c){},112:function(e,t,c){},114:function(e,t,c){var s={"./Home":57,"./Home.css":77,"./Home.js":57,"./HomeConstVariable":58,"./HomeConstVariable.js":58,"./IntroComponent":47,"./IntroComponent.css":78,"./IntroComponent.js":47,"./ItemImage":68,"./ItemImage.js":68,"./Login":59,"./Login.css":87,"./Login.js":59,"./logo-js.png":139};function n(e){var t=a(e);return c(t)}function a(e){if(!c.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=a,e.exports=n,n.id=114},139:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/logo-js.75220e22.png"},141:function(e,t,c){},142:function(e,t,c){},143:function(e,t,c){},144:function(e,t,c){},146:function(e,t,c){},147:function(e,t,c){},148:function(e,t,c){},149:function(e,t,c){},150:function(e,t,c){},151:function(e,t,c){},152:function(e,t,c){},153:function(e,t,c){},154:function(e,t,c){},155:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(11),r=c.n(a),i=(c(111),c.p,c(112),c(57)),l=c(9),o=(c(141),c(13)),j=c(14),d=c(34),b=c(1);var u=function(e){var t=e.backStyle,c=Object(o.f)(),n=Object(s.useState)(""),a=Object(l.a)(n,2),r=a[0],i=a[1],u=Object(s.useState)("header"),O=Object(l.a)(u,2),h=O[0],x=O[1],m=Object(d.b)(),g=Object(l.a)(m,2),p=(g[0].jwt_token,g[1]);return Object(s.useEffect)((function(){x(t?"header":"header backBlack");var e=sessionStorage.getItem("jwt");i(null!=e?"Logout":"Login")}),[t]),Object(b.jsxs)("div",{className:h,children:[Object(b.jsx)(j.b,{to:"/",children:Object(b.jsx)("div",{className:"home_text",children:"My First Project Using React + Spring"})}),Object(b.jsxs)("div",{className:"header_link",children:[Object(b.jsx)(j.b,{to:"/",children:Object(b.jsx)("div",{className:"header_link_option",children:Object(b.jsx)("span",{className:"headerText",children:"HomePage"})})}),Object(b.jsx)(j.b,{to:"/about",children:Object(b.jsx)("div",{className:"header_link_option",children:Object(b.jsx)("span",{className:"headerText",children:"About me"})})}),Object(b.jsx)(j.b,{to:"/courses",children:Object(b.jsx)("div",{className:"header_link_option",children:Object(b.jsx)("span",{className:"headerText",children:"Courses Taken"})})}),Object(b.jsx)(j.b,{to:"/projects",children:Object(b.jsx)("div",{className:"header_link_option",children:Object(b.jsx)("span",{className:"headerText",children:"Projects"})})}),Object(b.jsx)(j.b,{onClick:function(){"Login"==r?c.push("/login"):(sessionStorage.removeItem("jwt"),c.push("/"),i("Login"),p({type:"SET_USER_NULL"}))},children:Object(b.jsx)("div",{className:"header_link_option",children:Object(b.jsx)("span",{className:"headerText",children:r})})})]})]})},O=c(10),h=c.n(O),x=c(25);c(142),c(143);var m=function(e){var t=e.rating,c=e.ratingColor,n=Object(s.useState)("yellowgreen"),a=Object(l.a)(n,2),r=a[0],i=a[1];Object(s.useEffect)((function(){c&&i(c)}),[]);var o=parseInt(t,10),j=!1;t-o==.5&&(j=!0);var d=parseInt(5-t,10);return Object(b.jsxs)("div",{className:"ratingComp",style:{color:r,display:"flex"},children:[" ",Array(o).fill().map((function(e,t){return Object(b.jsx)("i",{className:"fas fa-star"})})),j&&Object(b.jsx)("i",{className:"fas fa-star-half-alt"}),Array(d).fill().map((function(e,t){return Object(b.jsx)("i",{className:"far fa-star"})}))]})};var g=function(e){var t=e.name,c=e.opinion,s=e.path,n=e.rating;return parseInt(n,10),parseInt(5-n,10),Object(b.jsxs)("di",{className:"skillCard",children:[Object(b.jsx)("img",{src:s,alt:""}),Object(b.jsx)("h4",{children:t}),Object(b.jsx)("hr",{}),c.length<=15?Object(b.jsxs)("span",{children:[c,Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]}):Object(b.jsx)("span",{children:c}),Object(b.jsx)(m,{rating:n})]})},p=c(33);var f=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1];return sessionStorage.getItem("jwt"),Object(s.useEffect)((function(){(function(){var e=Object(x.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)({method:"get",url:"/skills"});case 2:t=e.sent,n(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(b.jsxs)("div",{className:"skillPage",children:[Object(b.jsx)("div",{className:"skillSets",children:Object(b.jsx)("h1",{children:"My Skillset"})}),Object(b.jsx)("div",{className:"skill_lists",children:c.map((function(e,t){return Object(b.jsx)("div",{className:"skill_card",children:Object(b.jsx)(g,{name:e.name,opinion:e.opinion,path:e.path,rating:e.rating})})}))})]})},v=(c(144),c(66)),N=c.n(v),S=c(90),_=c.n(S),k=c(92),y=c.n(k),I=c(91),w=c.n(I),C=c(93),T=c.n(C),P=c(69),E=c.n(P),L=c(94),U=c.n(L);var A=function(){var e=Object(o.f)(),t=Object(s.useState)(""),c=Object(l.a)(t,2),n=c[0],a=c[1];return Object(s.useEffect)((function(){var e=sessionStorage.getItem("jwt");a(null!=e?"Logout":"Login")}),[]),Object(b.jsxs)("div",{className:"sidebar",children:[Object(b.jsx)(j.b,{to:"/",children:Object(b.jsx)("div",{className:"sidebarOption_logo",children:Object(b.jsx)("img",{src:"./Images/Home/SidebarLogo.png"})})}),Object(b.jsx)(j.b,{to:"/",children:Object(b.jsxs)("div",{className:"sidebarOption",children:[Object(b.jsx)(N.a,{}),Object(b.jsx)("span",{children:"HOME"})]})}),Object(b.jsx)(j.b,{to:"/about",children:Object(b.jsxs)("div",{className:"sidebarOption",children:[Object(b.jsx)(_.a,{}),Object(b.jsx)("span",{children:"ABOUT"})]})}),Object(b.jsx)(j.b,{to:"/skills",children:Object(b.jsxs)("div",{className:"sidebarOption",children:[Object(b.jsx)(w.a,{}),Object(b.jsx)("span",{children:"SKILLS"})]})}),Object(b.jsx)(j.b,{to:"/courses",children:Object(b.jsxs)("div",{className:"sidebarOption",children:[Object(b.jsx)(y.a,{}),Object(b.jsx)("span",{children:"COURSES"})]})}),Object(b.jsx)(j.b,{to:"/projects",children:Object(b.jsxs)("div",{className:"sidebarOption",children:[Object(b.jsx)(T.a,{}),Object(b.jsx)("span",{children:"CLONE / PROJECTS"})]})}),Object(b.jsx)(j.b,{onClick:function(){"Login"==n?e.push("/login"):(sessionStorage.removeItem("jwt"),e.push("/"),a("Login"))},children:Object(b.jsxs)("div",{className:"sidebarOption",children:["Login"==n?Object(b.jsx)(E.a,{}):Object(b.jsx)(U.a,{}),Object(b.jsx)("span",{children:n})]})})]})};c(146),c(147);var B=function(e){var t=e.itemIdx,c=e.name,s=e.path,n=e.reference,a=e.opinion,r=e.original_creator,i=e.rating,l=e.noUrl,o=e.deployedURL;return Object(b.jsxs)("div",{className:"projectBox",children:[Object(b.jsx)("div",{className:"projectImage",children:Object(b.jsx)("img",{src:s,alt:""})}),Object(b.jsxs)("h1",{children:[t+1," ",Object(b.jsx)("span",{style:{"margin-left":"50px"},children:c})]}),Object(b.jsx)("div",{className:"projectInfoTable",children:Object(b.jsxs)("table",{children:[Object(b.jsxs)("colgroup",{children:[Object(b.jsx)("col",{style:{width:"20%"}}),Object(b.jsx)("col",{style:{width:"80%"}})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Reference:"}),Object(b.jsx)("td",{children:l?n:Object(b.jsx)("a",{href:n,children:n})})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Original Creator:"}),Object(b.jsx)("td",{children:r})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Opinion:"}),Object(b.jsx)("td",{children:a})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Rating:"}),Object(b.jsx)("td",{children:Object(b.jsx)(m,{rating:i,ratingColor:"#2980B9"})})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"DeployedUrl:"}),Object(b.jsx)("td",{children:l?o:Object(b.jsx)("a",{href:o,children:o})})]})]})})]})};var M=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){(function(){var e=Object(x.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)({method:"get",url:"/projects"});case 2:t=e.sent,n(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(b.jsxs)("div",{className:"projectsPage",children:[Object(b.jsx)("div",{className:"projectText",children:Object(b.jsx)("h1",{children:"Clone/Personal Projects"})}),Object(b.jsx)("div",{className:"project_lists",children:c.map((function(e,t){return Object(b.jsx)(B,{name:e.name,path:e.path,reference:e.reference,opinion:e.opinion,original_creator:e.original_creator,rating:e.rating,noUrl:e.noUrl,deployedURL:e.deployedURL,itemIdx:t})}))})]})};c(148),c(149);var R=function(e){var t=e.name,c=e.url,s=e.path,n=e.instructor_details,a=e.price,r=e.rating;return Object(b.jsxs)("div",{className:"courseItem",children:[Object(b.jsx)("a",{className:"courseImage",href:c,children:Object(b.jsxs)("div",{className:"courseImage playButtonTrigger",children:[Object(b.jsx)("img",{src:s,alt:"",style:{width:"100%",height:"135px"}}),Object(b.jsx)("div",{className:"playButton"})]})}),Object(b.jsx)("a",{className:"courseExplanation",href:c,children:Object(b.jsxs)("div",{className:"courseDetails",children:[Object(b.jsx)("strong",{children:t}),Object(b.jsx)("div",{className:"courseInstructor",children:Object(b.jsx)("span",{children:n.length>50?n.substring(0,50)+"...":n})}),Object(b.jsxs)("div",{className:"coursePricingRating",children:[Object(b.jsx)("div",{children:Object(b.jsxs)("span",{children:["\u20a9 ",a]})}),Object(b.jsx)("div",{children:Object(b.jsx)(m,{rating:r})}),Object(b.jsx)("br",{})]})]})})]})};var q=function(){var e=function(e,t){for(var c=document.getElementsByClassName("courseCategory"),s=0;s<c.length;s++)c[s].classList.remove("categoryShow");document.getElementById(e).classList.add("categoryShow"),a(t)},t=Object(s.useState)("T"),c=Object(l.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)([]),i=Object(l.a)(r,2),o=i[0],j=i[1];return Object(s.useEffect)((function(){(function(){var e=Object(x.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)({method:"get",url:"/courses/".concat(n)});case 2:t=e.sent,j(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),console.log(o),Object(b.jsxs)("div",{className:"coursesPage",children:[Object(b.jsx)("div",{className:"courseText",children:Object(b.jsx)("h1",{children:"The courses I took and interested in"})}),Object(b.jsxs)("div",{className:"courseContainer",children:[Object(b.jsxs)("div",{className:"courseButtons",children:[Object(b.jsx)("div",{onClick:function(){return e("courseT","T")},id:"courseT",className:"courseCategory categoryShow",children:Object(b.jsx)("span",{children:"Courses Taken"})}),Object(b.jsx)("div",{onClick:function(){return e("courseI","I")},id:"courseI",className:"courseCategory",children:Object(b.jsx)("span",{children:"Courses Interested"})})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"courseWrapper",children:o.map((function(e,t){return Object(b.jsx)(R,{name:e.name,url:e.url,path:e.path,instructor_details:e.instructorDetails,price:e.price,rating:e.rating})}))})]})]})},F=(c(150),c(151),c(95)),D=c.n(F),H={"~ 2090":["Moved to a country called Uzbekistan","Studied in TUIS, which stands for Tashkent Ulugbek International School","Studied English and Russian at School and through private lessons","Got a grade of  4.9 / 5.0"],"2010 ~ 2012":["Entered Korea University Located in Seoul","Entered College of Government and Business","Majored Statistics"],"2012 ~ 2014":["Served Military Service","Artillery regiment located in Incheon","FDC(Fire Direction Center)"],"2014 ~ 2018":["Continued learning Statistics","Took R programming class and got interested in programming","Took an external course about Python and Tensorflow","Got a grade of 3.36 / 4.5"],"2019 ~":["Got a job in LG CNS","Working as an application developer and system manager in the Smart Factory field","Major language in this field: ASP.NET","Learning React, Spring personally"]};var K=function(e){var t=e.year,c=e.circleColor,n=Object(s.useState)(""),a=Object(l.a)(n,2),r=a[0],i=a[1];return Object(s.useEffect)((function(){var e=setInterval((function(){i("appearOpacity")}),200);return function(){return clearInterval(e)}}),[]),Object(b.jsxs)("div",{className:"chronology  + ".concat(r),children:[Object(b.jsx)("strong",{className:"compYear",children:t}),Object(b.jsx)("p",{className:"compCircle",style:{color:c},children:Object(b.jsx)(D.a,{})}),Object(b.jsxs)("div",{className:"arrowLine",children:[Object(b.jsx)("hr",{style:{borderTop:"dotted 3px #E74C3C"}}),Object(b.jsx)("i",{class:"fas fa-angle-double-right"})]}),Object(b.jsx)("div",{className:"compContent",children:H[t].map((function(e,t){return Object(b.jsxs)("p",{children:[Object(b.jsx)("i",{class:"fas fa-comment-dots"}),e]})}))})]})},V=c(70),z=c.n(V),G=c(96),J=c.n(G);var W=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){var e=setInterval((function(){n("appearOpacity")}),200);return function(){return clearInterval(e)}}),[]),Object(b.jsxs)("div",{className:"aboutPage",children:[Object(b.jsxs)("div",{className:"aboutContainer",children:[Object(b.jsx)("h1",{children:"SELF INTRODUCTION"}),Object(b.jsxs)("div",{className:"titleLayer",children:[Object(b.jsx)("img",{id:"myPhoto",src:"./Images/AboutMe/me.PNG",alt:""}),Object(b.jsx)("div",{className:"aboutName",children:Object(b.jsx)("span",{children:"Jiwook Byun"})}),Object(b.jsxs)("div",{className:"aboutCity ".concat(c),children:[Object(b.jsx)("div",{className:"aboutIcon",children:Object(b.jsx)(N.a,{})}),Object(b.jsx)("div",{className:"aboutInformation",children:"Republic of Korea"})]}),Object(b.jsxs)("div",{className:"aboutPhone ".concat(c),children:[Object(b.jsx)("div",{className:"aboutIcon",children:Object(b.jsx)(z.a,{})}),Object(b.jsx)("div",{className:"aboutInformation",children:"010-xxxx-xxxx"})]}),Object(b.jsxs)("div",{className:"aboutEmail ".concat(c),children:[Object(b.jsx)("div",{className:"aboutIcon",children:Object(b.jsx)(J.a,{})}),Object(b.jsx)("div",{className:"aboutInformation",children:"xxxx@xxxx.com"})]})]})]}),Object(b.jsxs)("div",{className:"chronologyContainer",children:[Object(b.jsx)(K,{year:"~ 2090",circleColor:"#3498DB"}),Object(b.jsx)(K,{year:"2010 ~ 2012",circleColor:"#990000"}),Object(b.jsx)(K,{year:"2012 ~ 2014",circleColor:"#4b5320"}),Object(b.jsx)(K,{year:"2014 ~ 2018",circleColor:"#F7DC6F"}),Object(b.jsx)(K,{year:"2019 ~",circleColor:"#C39BD3"})]})]})},Y=c(59),$=c(44),Q=c(23),X=(c(152),c(153),c(73));c(154);var Z=function(){return Object(b.jsxs)("div",{class:"pages",children:[Object(b.jsxs)("div",{class:"page-1",children:[Object(b.jsx)("h3",{children:"01"}),Object(b.jsx)("svg",{class:"slide active",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("circle",{cx:"6",cy:"6",r:"6",fill:"white"})})]}),Object(b.jsxs)("div",{class:"page-2",children:[Object(b.jsx)("h3",{children:"02"}),Object(b.jsx)("svg",{class:"slide ",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("circle",{cx:"6",cy:"6",r:"6",fill:"white"})})]}),Object(b.jsxs)("div",{class:"page-3",children:[Object(b.jsx)("h3",{children:"03"}),Object(b.jsx)("svg",{class:"slide",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("circle",{cx:"6",cy:"6",r:"6",fill:"white"})})]})]})},ee=c(98);var te=function(){var e=Object(d.b)(),t=Object(l.a)(e,2),c=t[0].jwt_token,n=(t[1],Object(o.f)()),a=Object(s.useState)({skill_name:"",skill_path:"",skill_opinion:"",skill_rating:0}),r=Object(l.a)(a,2),i=r[0],j=r[1],u=function(e){j(Object(Q.a)(Object(Q.a)({},i),{},Object($.a)({},e.target.name,e.target.value)))};return Object(s.useEffect)((function(){c&&(!function(){var e=Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{className:"quotes",children:"Unauthorized Access"}),Object(b.jsx)("br",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{className:"quotes",children:"There is no proper JWT Token"}),Object(b.jsx)("p",{className:"quotes",children:"You should Login before you add something"}),Object(b.jsx)("span",{className:"quotes-from",children:"\u2015 Biglol"})]});X.PopupboxManager.open({content:e})}(),setTimeout((function(){n.push("/")}),3e3))}),[]),Object(b.jsxs)("div",{className:"addPageMain",children:[Object(b.jsx)(X.PopupboxContainer,{}),!c&&Object(b.jsx)("main",{children:Object(b.jsxs)("section",{class:"addPage",children:[Object(b.jsxs)("div",{class:"details",children:[Object(b.jsx)("h1",{children:"Elena Morell"}),Object(b.jsx)("h2",{children:"Photographer"}),Object(b.jsx)("p",{children:"02/08/2018"})]}),Object(b.jsx)("form",{onSubmit:function(e){e.preventDefault(),alert("ASDF")},children:Object(b.jsxs)("div",{class:"hero",children:[Object(b.jsx)(ee.a,{required:!0,id:"outlined-required",label:"Skill name",name:"skill_name",defaultValue:"",variant:"outlined",onChange:u}),Object(b.jsx)(ee.a,{required:!0,id:"outlined-required",label:"Skill path",name:"skill_path",defaultValue:"",variant:"outlined",onChange:u}),Object(b.jsx)(ee.a,{required:!0,id:"outlined-required",label:"Skill opinion",name:"skill_opinion",defaultValue:"",variant:"outlined",onChange:u}),Object(b.jsx)(ee.a,{required:!0,id:"outlined-required",label:"Skill rating",name:"skill_rating",defaultValue:"",variant:"outlined",onChange:u})]})})]})}),Object(b.jsx)(Z,{})]})};var ce=function(){return Object(b.jsx)(j.a,{children:Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/skills",children:Object(b.jsxs)("div",{className:"AppPage",children:[Object(b.jsx)(A,{}),Object(b.jsx)(f,{})]})}),Object(b.jsx)(o.a,{path:"/projects",children:Object(b.jsxs)("div",{className:"AppPage",children:[Object(b.jsx)(A,{}),Object(b.jsx)(M,{})]})}),Object(b.jsx)(o.a,{path:"/courses",children:Object(b.jsxs)("div",{className:"AppPage",children:[Object(b.jsx)(A,{}),Object(b.jsx)(q,{})]})}),Object(b.jsx)(o.a,{path:"/about",children:Object(b.jsxs)("div",{className:"AppPage",children:[Object(b.jsx)(A,{}),Object(b.jsx)(W,{})]})}),Object(b.jsx)(o.a,{path:"/login",children:Object(b.jsxs)("div",{children:[Object(b.jsx)(u,{backStyle:!1}),Object(b.jsx)(Y.default,{})]})}),Object(b.jsx)(o.a,{path:"/addpage",children:Object(b.jsxs)("div",{children:[Object(b.jsx)(u,{backStyle:!1}),Object(b.jsx)(te,{})]})}),Object(b.jsx)(o.a,{path:"/",children:Object(b.jsxs)("div",{className:"AppHome",children:[Object(b.jsx)(u,{backStyle:!0}),Object(b.jsx)(i.default,{})]})})]})})})},se=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,204)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))},ne=function(e,t){switch(t.type){case"SET_USER":return Object(Q.a)(Object(Q.a)({},e),{},{jwt_token:t.jwt_token});case"SET_USER_NULL":return Object(Q.a)(Object(Q.a)({},e),{},{jwt_token:null});default:return e}};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(d.a,{initialState:{jwt_token:null},reducer:ne,children:Object(b.jsx)(ce,{})})}),document.getElementById("root")),se()},33:function(e,t,c){"use strict";var s=c(89),n=c.n(s).a.create({baseURL:"http://localhost:8080"});t.a=n},34:function(e,t,c){"use strict";c.d(t,"a",(function(){return r})),c.d(t,"b",(function(){return i}));var s=c(0),n=c(1),a=Object(s.createContext)(),r=function(e){var t=e.reducer,c=e.initialState,r=e.children;return Object(n.jsx)(a.Provider,{value:Object(s.useReducer)(t,c),children:r})},i=function(){return Object(s.useContext)(a)}},47:function(e,t,c){"use strict";c.r(t);c(0),c(78),c.p,c.p,c.p;var s=c(58),n=(c(68),c(13)),a=c(1);t.default=function(e){var t=e.variant,c=Object(n.f)();return Object(a.jsxs)("div",{className:"introComponent",children:[Object(a.jsxs)("div",{className:"introComponent_info",children:[Object(a.jsx)("p",{children:t}),Object(a.jsx)("div",{className:"comp_lists",children:""!=t&&s.default[t].map((function(e,t){return Object(a.jsxs)("div",{className:"itemList",children:[Object(a.jsx)("img",{src:e.img_url,alt:e.item_name}),Object(a.jsx)("div",{className:"item_desc",children:e.item_name})]})}))})]}),Object(a.jsx)("button",{onClick:function(e){e.preventDefault(),"Skills"==t?c.push("/skills"):"Clone/Projects"==t?c.push("/projects"):"AboutMe"==t?c.push("/about"):c.push("/")},children:"See Details"})]})}},57:function(e,t,c){"use strict";c.r(t);var s=c(0),n=(c(77),c(47)),a=c(74),r=c(1);t.default=function(){return Object(s.useEffect)((function(){var e=window.addEventListener("keydown",(function(e){1==e.ctrlKey&&e.key}));return function(){window.removeEventListener("keydown",e)}}),[]),Object(r.jsxs)("div",{className:"landing_page",children:[Object(r.jsxs)("div",{className:"introText",children:[Object(r.jsx)(a.a,{steps:["",0,"Welcome to Biglol Page"],loop:1,wrapper:"p"}),Object(r.jsx)(a.a,{steps:["",0,"[React and SpringBoot]"],loop:1,wrapper:"p"})]}),Object(r.jsxs)("div",{className:"myVariants",children:[Object(r.jsx)(n.default,{variant:"Skills"}),Object(r.jsx)(n.default,{variant:"AboutMe"}),Object(r.jsx)(n.default,{variant:"Clone/Projects"})]})]})}},58:function(e,t,c){"use strict";c.r(t);t.default={Skills:[{item_name:"Javascript",img_url:"./Images/Skills/logo-js.png"},{item_name:"React",img_url:"./Images/Skills/logo-react.png"},{item_name:"Html",img_url:"./Images/Skills/logo-html-5.png"},{item_name:"Jquery",img_url:"./Images/Skills/logo-jquery.png"},{item_name:"CSS",img_url:"./Images/Skills/logo-css.png"},{item_name:"ASP.NET",img_url:"./Images/Skills/logo-aspnet.png"},{item_name:"SpringBoot",img_url:"./Images/Skills/logo-springboot.png"}],AboutMe:[{item_name:"Korea",img_url:"./Images/AboutMe/Flag_of_Korea.png"},{item_name:"Uzbekistan",img_url:"./Images/AboutMe/Flag_of_Uzbekistan.png"},{item_name:"TUIS",img_url:"./Images/AboutMe/TUIS.png"},{item_name:"KU",img_url:"./Images/AboutMe/Korea_Univ.png"}],"Clone/Projects":[{item_name:"20WebProjects",img_url:"./Images/Projects/20WebProjects.png"},{item_name:"ServerInventory",img_url:"./Images/Projects/ServInventory.png"},{item_name:"Covid19Tracker",img_url:"./Images/Projects/Covid19Tracker.png"},{item_name:"NetflixClone",img_url:"./Images/Projects/NetflixClone.png"},{item_name:"SystemMonitoring",img_url:"./Images/Projects/SystemMonitoring.png"},{item_name:"AmazonClone",img_url:"./Images/Projects/AmazonClone.png"}]}},59:function(e,t,c){"use strict";c.r(t);var s=c(44),n=c(23),a=c(88),r=c(9),i=c(0),l=c(33),o=c(98),j=c(158),d=(c(87),c(161)),b=c(163),u=c(5),O=c(50),h=c(159),x=c(157),m=c(51),g=(c(133),c(13)),p=c(34),f=c(1);t.default=function(){var e=Object(i.useState)({username:"",password:""}),t=Object(r.a)(e,2),c=t[0],v=t[1],N=Object(i.useState)(!1),S=Object(r.a)(N,2),_=(S[0],S[1]),k=Object(i.useState)(),y=Object(r.a)(k,2),I=y[0],w=y[1],C=Object(g.f)(),T=Object(p.b)(),P=Object(r.a)(T,2);Object(a.a)(P[0]);var E=P[1],L=Object(u.a)({root:{color:O.a[400],"&$checked":{color:O.a[600]}},checked:{}})((function(e){return Object(f.jsx)(d.a,Object(n.a)({color:"default"},e))})),U=function(e){v(Object(n.a)(Object(n.a)({},c),{},Object(s.a)({},e.target.name,e.target.value)))},A=Object(x.a)((function(e){return{button:{margin:e.spacing(1)}}}))(),B=function(){c.username.length<3||c.password.length<3?m.b.warn("Username Or Password length is incorrect",{position:m.b.POSITION.BOTTOM_LEFT}):l.a.post("/login",{username:c.username,password:c.password}).then((function(e){var t=e.headers.authorization;sessionStorage.setItem("jwt",t),localStorage.setItem("remem",I),localStorage.setItem("idvalue",c.username),_(!0),C.push("/"),E({type:"SET_USER",user:t})}),(function(e){m.b.error("Username/Password is incorrect",{position:m.b.POSITION.BOTTOM_LEFT})}))};return Object(i.useEffect)((function(){var e=localStorage.getItem("remem"),t=localStorage.getItem("idvalue");null==e||0==e||"false"==e||0==I?(w(!1),v({username:"",password:""})):(v({username:null!=t&&t,password:""}),w(!0))}),[]),Object(f.jsxs)("div",{className:"loginPage",children:[Object(f.jsxs)("div",{className:"accountArea",children:[Object(f.jsxs)("div",{className:"accountTitle",children:[Object(f.jsx)("img",{src:"./Images/Home/LoginPageImage.png",alt:""}),Object(f.jsx)("span",{children:"Biglol Page Login"})]}),Object(f.jsx)("hr",{}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{className:"idpwArea",children:[Object(f.jsx)("div",{className:"idarea",children:Object(f.jsx)(o.a,{required:!0,id:"outlined-required1",label:"Account",name:"username",defaultValue:"",variant:"outlined",onChange:U,value:c.username,onKeyPress:function(e){"Enter"===e.key&&B()}})}),Object(f.jsx)("div",{className:"pwarea",children:Object(f.jsx)(o.a,{required:!0,id:"outlined-required2",label:"Password",name:"password",defaultValue:"",variant:"outlined",type:"password",onChange:U,onKeyPress:function(e){"Enter"===e.key&&B()}})})]}),Object(f.jsx)("hr",{}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{className:"submitArea",children:[Object(f.jsx)(b.a,{control:Object(f.jsx)(L,{checked:I,onChange:function(e){w(e.target.checked)},name:"checkedGS"}),label:"Remember Me"}),Object(f.jsx)(j.a,{variant:"contained",color:"primary",className:A.button,endIcon:Object(f.jsx)(h.a,{children:"send"}),onClick:B,children:"Send"})]})]}),Object(f.jsx)("div",{className:"loginBackImage"}),Object(f.jsx)(m.a,{autoClose:3e3})]})}},68:function(e,t,c){"use strict";c.r(t);c(0);var s=c(1);t.default=function(e){var t=e.skill_set,n=e.img_url;return Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:c(114)("".concat(n)),alt:t,style:{width:"50px",height:"50px"}})})}},77:function(e,t,c){},78:function(e,t,c){},87:function(e,t,c){}},[[155,1,2]]]);
//# sourceMappingURL=main.df0a5935.chunk.js.map