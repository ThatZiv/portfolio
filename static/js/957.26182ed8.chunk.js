"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[957],{2882:function(e,t,n){n.d(t,{Z:function(){return r}});n(2791);var i=n(1288),o=n(2734),a=n(184);function r(e){return(0,a.jsx)(i.Z,{container:!0,justifyContent:"space-between",alignItems:"center",children:e.repos.map((function(t,n){return(0,a.jsx)(i.Z,{item:!0,children:(0,a.jsx)(o.ZP,{placement:"top",title:"https://github.com/"+t,children:(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/"+t,children:(0,a.jsx)("img",{alt:"".concat(e.title," #").concat(n+1),className:"Media",src:"https://gh-card.dev/repos/".concat(t,".svg?fullname=")})})})},"repo:".concat(n,":").concat(t))}))})}},8882:function(e,t,n){var i=n(9439),o=n(2791),a=n(4554),r=n(9584),s=n(5527),c=n(533),l=n(890),d=n(6151),p=n(1889),h=n(8596),m=n(1133),u=n(5397),g=n(1065),f=n(8894),x=n(3241),j=n(7303),v=n(5110),b=n(184),y=(0,h.Z)((function(){return{root:{backgroundColor:"#1c1c1c !important",color:"white !important"},disabled:{backgroundColor:"#fff !important"}}}));t.Z=function(e){var t=o.useContext(j.S),n=(0,v.S)().width,h=t[1],w=o.useState(0),Z=(0,i.Z)(w,2),k=Z[0],S=Z[1],C=e.images.length,D=y(),P=o.useMemo((function(){return"undefined"!==typeof window?(0,f.bH)(g.ZP):null}),[]),T=o.useMemo((function(){return e.images.map((function(e,t){return(0,b.jsx)("div",{onClick:function(){h({type:"UI_dialog",dialog:{open:!0,title:"Open File",content:"Would you like to open the image: ".concat(e.imgPath.split("/").pop(),"?"),callback:function(){window.open(e.imgPath,"_blank")}}})},children:(0,b.jsx)("div",{children:Math.abs(k-t)<=2?(0,b.jsx)(a.Z,{component:"img",sx:{maxHeight:500,display:"block",backgroundImage:"url(/bg.svg)",backgroundRepeat:"repeat",objectFit:"contain",overflow:"hidden",width:"100%",height:"100%",cursor:"zoom-in"},src:e.imgPath,alt:e.label}):null},e.label)},"gallery:".concat(t,":").concat(e.label))}))}),[e.images,h,k]);return(0,b.jsx)(p.ZP,{item:!0,sx:{width:"100%"},children:(0,b.jsxs)(a.Z,{sx:{flexGrow:1},className:[D.root,"Media"].join(" "),children:[(0,b.jsx)(s.Z,{square:!0,elevation:0,className:D.root,sx:{display:"flex",alignItems:"center",height:50,maxHeight:"100%",maxWidth:"100%",pl:2,bgcolor:x.Z.palette.background.default},children:(0,b.jsx)(l.Z,{variant:"body1",children:(0,b.jsx)(c.Z,{href:e.images[k].imgPath,target:"_blank",children:e.images[k].label})})}),P?(0,b.jsx)(P,{axis:"rtl"===x.Z.direction?"x-reverse":"x",index:k,sx:{maxHeight:"100%",maxWidth:"100%"},interval:e.timeout||7500,onChangeIndex:function(e){S(e)},enableMouseEvents:!0,children:T}):(0,b.jsx)(a.Z,{children:T}),(0,b.jsx)(r.Z,{steps:C,variant:n>600?"dots":"progress",position:"static",className:D.root,activeStep:k,nextButton:(0,b.jsxs)(d.Z,{size:"small",onClick:function(){S((function(e){return e+1}))},disabled:k===C-1,sx:{fontSize:"0.8rem",padding:"6px"},children:["Next","rtl"===x.Z.direction?(0,b.jsx)(m.Z,{}):(0,b.jsx)(u.Z,{})]}),backButton:(0,b.jsxs)(d.Z,{size:"small",onClick:function(){S((function(e){return e-1}))},disabled:0===k,sx:{fontSize:"0.8rem",padding:"6px"},children:["rtl"===x.Z.direction?(0,b.jsx)(u.Z,{}):(0,b.jsx)(m.Z,{}),"Back"]})}),(0,b.jsx)(l.Z,{sx:{textAlign:"center",marginTop:1.5},variant:"subtitle2",color:"gray",children:"Click image to enlarge"})]})})}},7147:function(e,t,n){var i=n(1413),o=(n(2791),n(1459)),a=n(890),r=n(184),s={h1:function(e){e.node;var t=e.children;return(0,r.jsx)(a.Z,{variant:"h1",style:{fontFamily:"Blinker, sans-serif"},children:t})},img:function(e){var t=e.node;return(0,r.jsx)("img",{src:t.properties.src,alt:t.properties.alt,className:"Media",title:t.properties.title})},code:function(e){var t=e.children;return(0,r.jsx)("pre",{style:{backgroundColor:"#000",color:"white",padding:10},children:(0,r.jsx)("code",{style:{whiteSpace:"pre-line",wordBreak:"break-word"},children:t})})},hr:function(){return(0,r.jsx)("hr",{style:{border:"1.5px solid #737373",borderRadius:5}})},blockquote:function(e){var t=e.children;return(0,r.jsx)("blockquote",{style:{padding:10,paddingTop:11,marginLeft:0,borderLeft:"5px solid #ccc"},children:t})}};t.Z=function(e){var t=e.children,n=e.overrideConfig,a=void 0===n?{}:n;return(0,r.jsx)(o.D,{linkTarget:"_blank",components:(0,i.Z)((0,i.Z)({},s),a),children:t})}},3718:function(e,t,n){n.d(t,{Z:function(){return Y}});var i=n(1413),o=n(9439),a=n(4942),r=n(2791),s=n(8596),c=n(283),l=n(4589),d=n(4697),p=n(2953),h=n(9370),m=n(6685),u=n(6513),g=n(8302),f=n(1288),x=n(3032),j=n(5720),v=n(7447),b=n(6129),y=n(7147),w=n(908),Z=n(9418),k=n(184),S=(0,s.Z)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.1)}}}}));function C(e){var t,n=S(),i=null===(t=e.children)||void 0===t?void 0:t.replace(" ","_");return(0,k.jsx)("div",{className:n.root,children:(0,k.jsx)(w.Z,{tag:i,color:"primary",icon:(0,k.jsx)(Z.Z,{className:"material-icons-outlined",children:"tag"}),label:e.children})})}var D=n(2067),P=n(3392),T=n(4778),I=(0,s.Z)((function(e){return{root:{width:"100%",padding:"10px",borderRadius:"5px",backgroundColor:e.palette.background.default}}}));function W(e){var t=I();return(0,k.jsx)("div",{className:t.root,children:(0,k.jsx)(D.Z,{component:"nav","aria-label":"secondary",children:e.list.split("|").map((function(e){return(0,k.jsx)(P.Z,{divider:!0,children:(0,k.jsx)(T.Z,{primary:e})},e)}))},e.list)})}var A=n(8721),H=n(242),M=n(4512),L=n(5825),G=n(4554),z=n(890);function F(e){var t=(0,r.useState)(0),n=(0,o.Z)(t,1)[0];return(0,k.jsx)("div",{style:{color:"whitesmoke"},children:(0,k.jsx)(G.Z,{sx:{width:"100%"},children:(0,k.jsx)(H.Z,{activeStep:n,orientation:"vertical",children:e.steps.map((function(e,t){var n=(0,o.Z)(e,2),i=n[0],a=n[1];return(0,k.jsx)(M.Z,{active:!0,children:(0,k.jsx)(L.Z,{optional:(0,k.jsx)(z.Z,{style:{color:"gray"},variant:"caption",children:i}),children:(0,k.jsx)(z.Z,{style:{color:"whitesmoke"},variant:"body2",children:a})})},t)}))})})})}function R(e){var t=e.timeline[0][0].match("[0-9]{4}")[0],n=e.timeline[e.timeline.length-1][0].match("[0-9]{4}")[0],i=e.complete?n:"Now",o=t===n&&e.complete?t:t+" - "+i;return(0,k.jsx)(g.Z,{variant:"subtitle1",style:{color:"gray",textAlign:"right",marginTop:"-5px"},component:"div",children:o})}var U=n(3967),E=n(8476),J=n(9823);function N(e){var t,n=e.open,i=e.onClose,o=e.children,r=(0,U.Z)();return(0,k.jsx)("div",{children:(0,k.jsx)(E.Z,{sx:{width:"100%"},open:n,onClose:i,children:(0,k.jsxs)(G.Z,{sx:(t={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},(0,a.Z)(t,r.breakpoints.down("sm"),{maxHeight:"93vh",width:"100%"}),(0,a.Z)(t,r.breakpoints.up("md"),{maxHeight:"93vh",width:"85%"}),(0,a.Z)(t,"bgcolor","#1e1e1e"),(0,a.Z)(t,"maxHeight","100vh"),(0,a.Z)(t,"width","85%"),(0,a.Z)(t,"border","2px solid #000"),(0,a.Z)(t,"boxShadow",24),(0,a.Z)(t,"p",2),(0,a.Z)(t,"overflow","auto"),t),children:[(0,k.jsx)("div",{style:{position:"absolute",top:7,right:7,fontSize:8,marginBottom:15},children:(0,k.jsx)("div",{onClick:i,children:(0,k.jsx)(J.Z,{sx:{mb:10,"&:hover":{cursor:"pointer",color:"gray"}}})})}),(0,k.jsx)(G.Z,{sx:{mt:2},children:o})]})})})}var B=n(1087),O=(0,s.Z)((function(e){return{media:{height:140},cardcontent:{"&:last-child":{paddingBottom:0}},paper:{padding:e.spacing(2)},tags:{overflow:"visible",float:"right",maxHeight:"34px",minWidth:"90%"},title:(0,a.Z)({fontFamily:"Blinker",fontWeight:"bold",color:"#d6d6d6",fontSize:"2.9rem"},e.breakpoints.down("sm"),{fontSize:"2.5rem"})}}));function Y(e){var t=O(),n=r.useState(!1),a=(0,o.Z)(n,2),s=a[0],w=a[1],Z=r.useState(!1),S=(0,o.Z)(Z,2),D=S[0],P=S[1],T=r.useState(e.size||6),I=(0,o.Z)(T,1)[0],H=r.useRef(null),M="expand",L=(0,B.lr)(),G=(0,o.Z)(L,2),z=G[0],U=G[1];r.useEffect((function(){z.has(M)&&z.get("expand")==e.title&&(E(),w(!0))}),[]);var E=function(){return H.current.scrollIntoView({behavior:"smooth"})},J=function(){w(!s),s?U(new URLSearchParams):(U((function(t){return t.set(M,e.title),t})),E())},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"none";b.ZP.event({category:"z_ui-card-expand",label:e,action:e})};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(x.Z,{in:!0,timeout:700,children:(0,k.jsx)(f.Z,{item:!0,xs:12,md:I||e.size,lg:I||e.size,children:(0,k.jsxs)(c.Z,{ref:H,style:s?{border:"2px solid #3f51b5"}:{border:null},elevation:3,children:[(0,k.jsxs)(l.Z,{onClick:function(){J(),Y(e.title)},children:[(0,k.jsx)(m.Z,{className:t.media,style:{filter:D?"none":"blur(0.75rem)"},image:e.banner,component:"img",alt:e.title,onLoad:function(){return P(!0)},title:e.title}),!D&&(0,k.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:10,marginTop:10},children:(0,k.jsx)(j.Z,{color:"secondary"})}),(0,k.jsxs)(p.Z,{className:t.cardcontent,children:[(0,k.jsxs)(f.Z,{justifyContent:"space-between",container:!0,children:[(0,k.jsx)(f.Z,{item:!0,xs:10,children:(0,k.jsx)(g.Z,{gutterBottom:!0,variant:"h3",className:t.title,component:"h2",children:e.title})}),(0,k.jsx)(f.Z,{item:!0,sm:!0,children:(0,k.jsx)(R,(0,i.Z)({},e))})]}),(0,k.jsx)(f.Z,{item:!0,children:(0,k.jsx)(g.Z,{variant:"body2",color:"textSecondary",children:(0,k.jsx)(y.Z,{children:e.description})})})]})]}),(0,k.jsxs)(h.Z,{in:!1,timeout:"auto",unmountOnExit:!0,children:[(0,k.jsx)(v.Z,{style:{marginRight:"18px",marginLeft:"18px"}}),(0,k.jsx)(p.Z,{})]}),(0,k.jsx)(d.Z,{children:"string"==typeof e.tags&&(0,k.jsx)(f.Z,{style:{overflowY:"scroll",maxHeight:"20vh"},alignItems:"baseline",container:!0,spacing:1,children:e.tags.split(",").map((function(e){return(0,k.jsx)(f.Z,{item:!0,children:(0,k.jsx)(C,{children:e})},"tag:".concat(e))}))})}),(0,k.jsx)(u.Z,{onClick:function(){J(),Y(e.title)},style:{paddingBottom:20,paddingTop:20},size:"small",color:"primary",children:s?"Less":"More"})]})})}),(0,k.jsxs)(N,{open:s,onClose:J,children:[(0,k.jsxs)(f.Z,{justifyContent:"space-between",container:!0,children:[(0,k.jsx)(f.Z,{item:!0,xs:10,children:(0,k.jsx)(g.Z,{gutterBottom:!0,variant:"h3",className:t.title,component:"h2",children:e.title})}),(0,k.jsx)(f.Z,{item:!0,sm:!0,children:(0,k.jsx)(R,(0,i.Z)({},e))})]}),(0,k.jsx)(f.Z,{item:!0,children:(0,k.jsx)(g.Z,{variant:"body2",color:"textSecondary",children:(0,k.jsx)(y.Z,{children:e.description})})}),(0,k.jsxs)(g.Z,{variant:"body2",color:"textSecondary",component:"p",children:[e.prechildren,e.objectives&&(0,k.jsx)(A.Z,{icon:"fa-solid fa-list",title:"Deliverables",children:(0,k.jsx)(W,{list:e.objectives})}),e.timeline&&(0,k.jsx)(A.Z,{icon:"fa-solid fa-timeline",title:"Timeline",children:(0,k.jsx)(F,{steps:e.timeline})}),e.children,"string"==typeof e.tags&&(0,k.jsx)(f.Z,{alignItems:"baseline",container:!0,style:{marginTop:10},spacing:1,children:e.tags.split(",").map((function(e){return(0,k.jsx)(f.Z,{item:!0,children:(0,k.jsx)(C,{children:e})},"inner:".concat(e))}))})]})]})]})}},8721:function(e,t,n){n.d(t,{Z:function(){return u}});var i=n(9439),o=n(2791),a=n(1462),r=n(7791),s=n(5121),c=n(8596),l=n(8302),d=n(9418),p=n(1087),h=n(184),m=(0,c.Z)((function(e){return{root:{width:"100%",padding:"10px",borderRadius:"5px",backgroundColor:e.palette.background.default},bg:{backgroundColor:"#151515",marginTop:"5px",padding:"20px",borderRadius:"5px",boxShadow:"8px 5px 5px #111111"},heading:{fontSize:e.typography.pxToRem(25),fontWeight:e.typography.fontWeightRegular,fontFamily:"Teko, sans-serif"}}}));function u(e){var t=m(),n="section_1",c=o.useState((null===e||void 0===e?void 0:e.open)&&n),u=(0,i.Z)(c,2),g=u[0],f=u[1],x=(0,p.lr)(),j=(0,i.Z)(x,2),v=j[0],b=j[1];return o.useEffect((function(){v.has(e.title)&&"true"==v.get(e.title)&&f(n)}),[]),(0,h.jsxs)(a.Z,{className:t.root,onChange:function(t){return function(n,i){f(!!i&&t),b((function(t){return i?t.set(e.title,!0):t.delete(e.title),t}))}}(n),defaultExpanded:null===e||void 0===e?void 0:e.open,expanded:g===n,children:[(0,h.jsx)(r.Z,{expandIcon:(0,h.jsx)(d.Z,{className:"material-icons-outlined",children:"expand_more"}),children:(0,h.jsx)(l.Z,{className:t.heading,children:(0,h.jsxs)("div",{children:[(0,h.jsx)("i",{className:e.icon}),"\xa0\xa0",e.title]})})}),(0,h.jsx)(s.Z,{children:e.children})]})}},1407:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(184);function o(e){return(0,i.jsx)("div",{className:"video-responsive",children:(0,i.jsx)("iframe",{width:"480",height:"270",src:"https://www.youtube-nocookie.com/embed/".concat(e.id),title:e.id,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},6957:function(e,t,n){n.r(t),n.d(t,{LayoutGrid:function(){return S},default:function(){return C}});var i=n(1413),o=n(7447),a=n(1288),r=n(890),s=n(3208),c=(n(2791),n(3718)),l=n(8721),d=n(1407),p=n(184),h={meta:{title:"Doxim",description:"## Software Intern \n[Doxim](https://doxim.com/) is the customer communications management and engagement technology leader serving highly regulated markets, including financial services, utilities and healthcare. We provide omnichannel document and payment solutions that transform experiences and strengthen engagement throughout the entire lifecycle.",banner:"/pics/doxim.png",complete:!0,tags:"C#,PowerShell,MySQL,Agile,Scripting,Virtualization Environments,Internship,Pair Programming,Doxim",objectives:"Parsed and extracted data from text files using C# and PowerShell to create billing statements.\n        |Managed credit union workflows to ensure organized and optimized month-end billing deliveries.\n        |Designed proof-of-concept for virtual machine manager full-stack web project.\n        |Created automation scripts for the composition, storage, and archival of business-critical documents. ",timeline:[["May 2nd, 2022","Internship begins."],["April 26th, 2023","Internship ends."]]},components:{MoreInfo:function(){return(0,p.jsx)("div",{children:(0,p.jsxs)(a.Z,{container:!0,children:[(0,p.jsx)(a.Z,{item:!0,xs:12,children:(0,p.jsx)(d.Z,{id:"eU-eX6Akb2w"})}),(0,p.jsxs)(a.Z,{item:!0,sm:!0,children:[(0,p.jsx)("i",{children:"Taken from www.doxim.com: "}),(0,p.jsx)("br",{}),(0,p.jsxs)(r.Z,{variant:"caption",children:["The Doxim Platform helps clients communicate reliably and effectively, improves cross-sell and upsell opportunities, and drives increased loyalty and wallet share through personalized communications and easy-to-use payment processes. The platform addresses key digitization, operational efficiency, and customer experience challenges through our suite of plug-and-play, integrated, SaaS software and technology solutions. Learn more at"," ",(0,p.jsx)("a",{href:"https://www.doxim.com/",children:"www.doxim.com"}),"."]})]})]})})}}};var m=n(5006);function u(e){var t=e.children,n=e.YouTubeID,i=e.title;return(0,p.jsxs)(a.Z,{item:!0,xs:12,md:6,lg:6,children:[(0,p.jsxs)("div",{style:{padding:10},children:[(0,p.jsx)(r.Z,{align:"Left",style:{fontFamily:"Teko"},variant:"h4",children:i}),(0,p.jsx)(d.Z,{id:n}),t]}),(0,p.jsx)(o.Z,{style:{marginRight:18,marginLeft:18,marginTop:8}})]})}var g={meta:{title:"Google Developer Student Club at WSU",banner:"pics/gdsc-social-share.png",complete:!0,tags:"Kotlin,Android Development,App Development,JavaScript,TypeScript,Firebase,BaaS,Git,Pair Programming,Android Studio,GDSC,Google",objectives:"Technical Facilitating at Google Developer Student Club (GDSC) WSU.\n|Organize and host workshops based on Google technologies.\n|Oversee all organizational planning and operations.",description:"## President\n[Google Developer Student Clubs](https://gdsc.community.dev/wayne-state-university/) (GDSC) are university-based communities, where students learn about Google technology and use their skills to solve local problems. The GDSC gives students the opportunity to connect and network with individuals from diverse backgrounds and majors. It also allows students to learn about different technical topics through talks, workshops, and events. The GDSC is a great opportunity for students to give back to their community and develop themselves along the way!",timeline:[["October 2022","Recruited as Technical Lead."],["November 2022","Hosted Android Study Jams Event (1/2)."],["December 2022","Hosted Android Study Jams Event (2/2)."],["March 4, 2023","Co-hosted Google Firebase workshop."],["August 2023","Promoted to President."],["November 17, 2023","Co-hosted industry speaker event."],["August 2024","Stepped down as President."]]},components:{Lectures:function(){return(0,p.jsxs)(a.Z,{container:!0,children:[(0,p.jsx)(u,{title:"Google Firebase",YouTubeID:"nUOMTViKsko"}),(0,p.jsx)(u,{title:"Android App Development (1/2)",YouTubeID:"xv_tRBvfYDU"}),(0,p.jsx)(u,{title:"Android App Development (2/2)",YouTubeID:"k8xtZQevP4w"})]})},Links:function(){return(0,p.jsxs)(a.Z,{container:!0,spacing:2,children:[(0,p.jsx)(a.Z,{item:!0,children:(0,p.jsx)(m.Z,{name:"GetInvolved",icon:"fa-solid fa-graduation-cap",url:"https://getinvolved.wayne.edu/organization/gdsc"})}),(0,p.jsx)(a.Z,{item:!0,children:(0,p.jsx)(m.Z,{icon:"fa-brands fa-instagram",url:"https://www.instagram.com/gdsc.waynestate/"})}),(0,p.jsx)(a.Z,{item:!0,children:(0,p.jsx)(m.Z,{icon:"fa-brands fa-linkedin-in",url:"https://www.linkedin.com/company/gdsc-wsu/"})}),(0,p.jsx)(a.Z,{item:!0,children:(0,p.jsx)(m.Z,{icon:"fa-brands fa-google",url:"https://developers.google.com/community/gdsc"})}),(0,p.jsx)(a.Z,{item:!0,children:(0,p.jsx)(m.Z,{icon:"fa-brands fa-youtube",url:"https://www.youtube.com/channel/UCyDp4aiePo-fFSG41m4sXQg"})})]})}}};var f=n(2882),x=n(8496),j=n(8882),v={meta:{title:"Society of Computer Developers",description:"## President\n[Society of Computer Developers](https://getinvolved.wayne.edu/organization/scd) (SCD) at [Wayne State University](https://wayne.edu) is focused on creating opportunities for students interested in coding and development. We aim to provide a community of peers that support one another in coding, resume building, networking, and developing new skills. We invite industry speakers, allow members to present a project they developed, give organization updates, and practice coding problems. We also host events which include, skill-building workshops, hackathons, coding nights, and social events!",banner:"/pics/scd.png",complete:!1,tags:"TypeScript,JavaScript,Python,C/C++,HTML/CSS,Docker,CI/CD,Full Stack,REST API,DOM,MongoDB,React.js,Agile,Pair Programming,Lecturing,SCD,GitHub Actions,Version Control",objectives:"Oversee all organizational planning and operations.\n|Created and hosted programming-related workshop events for students.\n|Tutored and assisted students with coursework and other programming-related content.\n|Developed and maintain official club website with React and GitHub.",timeline:[["September 2021","Joined SCD as a member."],["October 2021","Recruited as Secretary."],["November 2021",'Participated in WSU SCD 2021 Hackathon ("Most Technical" award).'],["February 2022","Promoted to Software Lead."],["February 8, 2022","Participated in WSU SCD 2022 Hackathon (3rd place)."],["February 25, 2022","Hosted web scraping workshop."],["April 17, 2022","Hosted REST API workshop."],["August 2022","Began development of official website."],["September 2022","Orchestrated month-long dynamic website project with weekly meetings."],["October 2022","Completed preview build of club website for production."],["October 19, 2022","Hosted Docker & Containerization workshop."],["November 2022",'Completed and deployed website to "scd.cs.wayne.edu".'],["November 28, 2022","Hosted React.js (web framework) workshop."],["January 2023","Promoted to Vice President."],["March 3, 2023","Hosted JavaScript DOM workshop."],["March 4, 2023","Co-hosted Google Firebase workshop."],["March 5, 2023",'Organized and hosted "WayneHacks" - Wayne State\'s 3rd 48-hour hackathon.'],["April 7, 2023","Hosted Next.js (web framework) workshop."],["May 2023","Inherited role of President."],["June 8, 2023",'Began SCD "Summer Project"'],["September 2023",'Halted development for SCD "Summer Project"'],["October 27, 2023","Hosted Introduction to Front-End Web Development (HTML/CSS & DOM) workshop."],["January 2024",'Directed and hosted "WayneHacks 2" - Wayne State\'s first in-person hackathon.']]},components:{Lectures:function(){return(0,p.jsxs)(a.Z,{container:!0,children:[(0,p.jsx)(u,{title:"Intro to Front-End",YouTubeID:"i9zdb99-LTs"}),(0,p.jsx)(u,{title:"Next.js (v12)",YouTubeID:"t9YXEcGXAHg"}),(0,p.jsx)(u,{title:"Google Firebase",YouTubeID:"nUOMTViKsko"}),(0,p.jsx)(u,{title:"JavaScript DOM",YouTubeID:"HTxYtiTAsZU"}),(0,p.jsx)(u,{title:"React.js",YouTubeID:"S7wWg11tZxM"}),(0,p.jsx)(u,{title:"Docker",YouTubeID:"MrE1uvzuJW8"}),(0,p.jsx)(u,{title:"Full Stack (REST API Part 2)",YouTubeID:"9OlMQpivP2Q"}),(0,p.jsx)(u,{title:"REST API Development",YouTubeID:"UAWJ37Dmvz0"}),(0,p.jsx)(u,{title:"Web Scraping",YouTubeID:"WOwC2NeDyF4"}),(0,p.jsx)(u,{title:"Dynamic Website Project (1/4)",YouTubeID:"tyCX7s3QfyY"}),(0,p.jsx)(u,{title:"Dynamic Website Project (2/4)",YouTubeID:"rXnBDTKaH3Y"}),(0,p.jsx)(u,{title:"Dynamic Website Project (3/4)",YouTubeID:"xxyelsQcz58"}),(0,p.jsx)(u,{title:"Dynamic Website Project (4/4)",YouTubeID:"AQg_lSHrwHs"})]})},Contribs:function(){return(0,p.jsx)(a.Z,{container:!0,children:(0,p.jsx)(a.Z,{item:!0,children:(0,p.jsx)(f.Z,{repos:["WSU-Society-of-Computer-Developers/summer-project","WSU-Society-of-Computer-Developers/workshops","WSU-Society-of-Computer-Developers/website2","WSU-Society-of-Computer-Developers/dynamic-website-project","WSU-Society-of-Computer-Developers/verify-service","WSU-Society-of-Computer-Developers/waynehacks-website"],title:"WSU SCD Repository"})})})},Links:function(){return(0,p.jsxs)(a.Z,{container:!0,spacing:2,children:[(0,p.jsx)(a.Z,{item:!0,children:(0,p.jsx)(m.Z,{name:"Website",icon:"fa-solid fa-globe",url:"https://scd.cs.wayne.edu"})}),(0,p.jsx)(a.Z,{item:!0,children:(0,p.jsx)(m.Z,{name:"GetInvolved",icon:"fa-solid fa-graduation-cap",url:"https://getinvolved.wayne.edu/organization/scd"})}),(0,p.jsx)(a.Z,{item:!0,children:(0,p.jsx)(m.Z,{icon:"fa-brands fa-instagram",url:"https://www.instagram.com/scd_wsu/"})}),(0,p.jsx)(a.Z,{item:!0,children:(0,p.jsx)(m.Z,{icon:"fa-brands fa-linkedin",url:"https://www.linkedin.com/company/society-of-computer-developers/"})}),(0,p.jsx)(a.Z,{item:!0,children:(0,p.jsx)(m.Z,{icon:"fa-brands fa-facebook",url:"https://www.facebook.com/scdwsu"})}),(0,p.jsx)(a.Z,{item:!0,children:(0,p.jsx)(m.Z,{icon:"fa-brands fa-twitter",url:"https://twitter.com/scd_wsu"})}),(0,p.jsx)(a.Z,{xs:12,item:!0,children:(0,p.jsx)(x.Z,{url:"https://scd.cs.wayne.edu/",paper:!0})})]})},Pictures:function(){return(0,p.jsx)(j.Z,{images:[{label:"SCD at Festifall (myself 2nd from the left)",imgPath:"https://se-images-blob.campuslabs.com/documents/204/f0eaec97-9199-4aff-279a-08dab6692024/1500.jpg"},{label:"General Body Meetings",imgPath:"https://se-images-blob.campuslabs.com/documents/204/aee7b032-28ee-4514-dd13-08dabb5f3f2a/600.jpg"}]})}}};var b={meta:{title:"WayneHacks Hackathon",description:"## Co-Director\n\n[WayneHacks](https://waynehacks.devpost.com/) is a 48-hour virtual hackathon hosted at \n[Wayne State University](https://engineering.wayne.edu/). Hackers have 48 hours to complete a project related to the theme given at the opening ceremony. \nWayneHacks also hosts workshops and two gaming tournaments during the event! $5000 in prizes are given out at the end to the best hacks. \nIn total, there were over **100 registrants**, **50 active participants**, and **16 project submissions**.",banner:"/pics/whacks.png",complete:!0,tags:"JavaScript,Python,HTML/CSS,Docker,JS DOM,React.js,Agile,Pair Programming,Git,CI/CD,Hackathon,Competition,Team Management,Co-Director",objectives:"Conducted preliminary meetings relating to funding, event schedule, and judging criteria with committee members.|\nDeveloped interactive JavaScript DOM workshop with JavaScript.|\nDeveloped interactive Google Firebase workshop with JavaScript and Python.|\nCo-hosted public ceremonies for opening and closing of the Hackathon event.",timeline:[["January 2023","Created committee for event planning."],["Early-February 2023","Reached out to Wayne State University faculty members for judging."],["Late-February 2023",'Created and deployed WayneHacks website to "www.waynehacks.com".'],["Late-February 2023","Finalized event schedule."],["March 3, 2023","Co-hosted opening ceremony."],["March 3, 2023","Hosted JavaScript DOM workshop."],["March 4, 2023","Co-hosted Google Firebase workshop."],["March 4, 2023","Ran game tournament with production-ready Docker servers."],["March 5, 2023","Co-hosted closing ceremony."]]},components:{Lectures:function(){return(0,p.jsxs)(a.Z,{container:!0,children:[(0,p.jsx)(u,{title:"Opening Ceremony",YouTubeID:"eD6vRXIsiYQ"}),(0,p.jsx)(u,{title:"Workshop Event #1 (JavaScript DOM)",YouTubeID:"HTxYtiTAsZU"}),(0,p.jsx)(u,{title:"Workshop Event #2 (Google Firebase)",YouTubeID:"nUOMTViKsko"}),(0,p.jsx)(u,{title:"Presentations",YouTubeID:"BUvKisZIHjs"}),(0,p.jsx)(u,{title:"Closing Ceremony",YouTubeID:"WYBUJVTmHnk"})]})},Contribs:function(){return(0,p.jsxs)(a.Z,{container:!0,children:[(0,p.jsx)(a.Z,{item:!0,children:(0,p.jsx)(f.Z,{repos:["WSU-Society-of-Computer-Developers/workshops","WSU-Society-of-Computer-Developers/waynehacks-website"],title:"WSU SCD Repository"})}),(0,p.jsx)(a.Z,{item:!0,children:(0,p.jsx)(x.Z,{paper:!0,pattern:"/WayneHacks/g",url:"https://waynehacks.com"})})]})},Links:function(){return(0,p.jsxs)(a.Z,{container:!0,spacing:2,children:[(0,p.jsx)(a.Z,{item:!0,children:(0,p.jsx)(m.Z,{name:"Project Submissions",icon:"fa-solid fa-envelope-circle-check",url:"https://waynehacks.devpost.com/project-gallery"})}),(0,p.jsx)(a.Z,{item:!0,children:(0,p.jsx)(m.Z,{name:"Website",icon:"fa-solid fa-globe",url:"https://waynehacks.com/"})}),(0,p.jsx)(a.Z,{item:!0,children:(0,p.jsx)(m.Z,{name:"GetInvolved",icon:"fa-solid fa-graduation-cap",url:"https://getinvolved.wayne.edu/event/8905074"})}),(0,p.jsx)(a.Z,{item:!0,children:(0,p.jsx)(m.Z,{icon:"fa-solid fa-instagram",url:"https://www.instagram.com/wayne.hacks/"})}),(0,p.jsx)(a.Z,{xs:12,item:!0,children:(0,p.jsx)(x.Z,{pattern:"/WayneHacks/g",url:"https://waynehacks.com"})})]})}}};var y={meta:{title:"Principal Financial Group",description:"## Software Engineering Intern\n[Principal](https://principal.com) is a [Fortune 500\xae](https://fortune.com/company/principal-financial/fortune500/) American global financial investment management and insurance company headquartered in [Des Moines](https://en.wikipedia.org/wiki/Des_Moines), Iowa, U.S.",banner:"/pics/pfg.png",complete:!1,tags:"Java,TypeScript,JavaScript,React,Electron,Python,Spring boot,Amazon Web Services,\nAWS CDK,AWS Lambda,DynamoDB,API Gateway,IaC,S3,Spotify Backstage,Webpack,UI/UX,Docker,SQL,GraphQL,Elasticsearch,\nPowershell,Bash,Ansible,GitHub,CI/CD,Agile,SCRUM,DevOps,LCM,Internship,PFG,Principal",objectives:"Developed full-stack GUI using React.js, Electron, TypeScript, and AWS services to facilitate onboarding for new engineers.\n        |Contributed to internal company-wide developer portal, leveraging React.js, AWS, and Spotify Backstage, enhancing the workflow of ~15K engineers daily.\n        |Managed team and utilized AWS Lambda, DynamoDB, React.js, and Electron to develop a scalable solution in company-wide hackathon competition.\n        |Drove and documented architectural decisions, codebase structure, and integration design to build a long-term resilient product.\n        |Adhered to Agile methodologies, ensuring timely task completion, iterative development, and product deployment with GitHub and Jira.\n        |Actively engaged in code reviews, offering constructive feedback to team members as well as receiving feedback to overall enhance the quality of the codebase.\n        |Set up CI/CD pipelines with GitHub Actions to automate the testing and deployment process, facilitating rapid and consistent releases.\n        |Collaborated with UX/UI designers and backend developers to ensure a cohesive and user-friendly experience.\n        |Demonstrated strong problem-solving skills by quickly identifying and resolving hot issues, improving application stability and reliability.\n        |Contributed to actuarial/accountant application using Java/Spring Boot, SQL, Docker, AWS and JavaScript/React.\n        |Improved product performance with asynchronous programming and run-time analysis in Java/SQL.\n        |Leveraged Docker for containerization, ensuring consistent deployment environments and faster development cycles.\n        |Designed and developed REST APIs for seamless integration with existing financial systems.",timeline:[["May 8, 2023","Internship begins on DevOps team. Tools used: TypeScript/JavaScript, React, Electron.js, Python, Ansible, Bash, Powershell, Docker, GitHub, CI/CD, AWS, Artifactory."],["July 13, 2023","Joined full-stack web development company-wide developer portal team. Tools used: TypeScript/JavaScript, React, Spotify Backstage, Python, AWS (IaC), Docker, GraphQL, GitHub."],["May 7, 2024","Joined Integrated Finance Solutions (IFS) team for actuarial modernization efforts. Tools used: Java, Spring Boot, TypeScript/JavaScript, React, AWS, SQL, Docker, Excel add-in API."],["September 2024","Joined IFS Data team for building and maintaining internal company-wide data lake and respective infrastructure. Tools used: Python, AWS, CDK, IaC, Docker."]]},components:{MoreInfo:function(){return(0,p.jsx)("div",{children:(0,p.jsxs)(a.Z,{container:!0,children:[(0,p.jsx)(a.Z,{item:!0,xs:12,children:(0,p.jsx)(d.Z,{id:"RoCzo6tgUjY"})}),(0,p.jsxs)(a.Z,{item:!0,sm:!0,children:[(0,p.jsxs)("i",{children:["Taken from"," ",(0,p.jsx)("a",{href:"https://www.principal.com/about-us/our-company/profile-and-offerings#:~:text=English%20Company%20Profile%20(PDF)",target:"_blank",rel:"noreferrer",children:"principal.com"}),":"," "]}),(0,p.jsx)("br",{}),(0,p.jsxs)(r.Z,{variant:"caption",children:["We help people and companies in Asia, Australia, Europe, Latin America, and North America build and protect their financial well-being. We've been doing it for 143 years.",(0,p.jsx)("br",{}),"A FORTUNE 500\xae company, we're known for our innovative ideas and real-life solutions that help customers make financial progress, no matter their income or portfolio size.",(0,p.jsx)("br",{}),"And while we have employees around the world, we're all bound by a common purpose: to give you the financial tools, resources, and information you need so you can live the life you want. ",(0,p.jsx)("br",{}),"What's most important to us ...",(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:"Meet the needs of our more than 62 million customers, who rely on our expertise in retirement, insurance and asset management."}),(0,p.jsx)("li",{children:"Attract, develop and retain the best people in the business, offering them a diverse and inclusive work environment in offices in 27 nations and territories."}),(0,p.jsx)("li",{children:"Give back to the communities where our employees live and work, supporting programs that help people learn more, earn more, and save more."}),(0,p.jsx)("li",{children:"Deliver value for our shareholders, who have placed their trust in us (Nasdaq: PFG). Get to know us better. Read on to find key facts, awards and recognition, and financial highlights."})]})]})]})]})})}}};var w={meta:{title:"WayneHacks 2 Hackathon",description:"## Director\n\n[WayneHacks 2](https://waynehacks-2.devpost.com/) is a 24-hour in-person hackathon hosted at \n[Wayne State University](https://engineering.wayne.edu/). Hackers have 24 hours to collaborate and create a project\n that solves real-world problems. Over $1400 in prizes are given out at the end to the best hacks. \nIn total, there were **97 registrants**, **34 active participants** from all across Southeast Michigan, and **10 project submissions**.\n*We were projecting over 60 participants but uncooperative weather conditions made it difficult for many to attend.*",banner:"/pics/whacks2_banner.png",complete:!0,tags:"TypeScript,Next.js,Supabase,PostgreSQL,Vercel,TailwindCSS,Agile,Git,CI/CD,Hackathon,Competition,Team Management,Trello,Leadership,Director,Public Speaking",objectives:"Oversaw a wide range of operational responsibilities, such as catering logistics, finances, procurement, and other assorted tasks.|\nLead bi-weekly meetings for website development and all other operational tasks with committee members.|\nDeveloped, architected, and maintained waynehacks.com platform using TypeScript, Next.js (v14), Vercel, TailwindCSS, and Supabase.|\nHosted opening and closing ceremonies in front of live audience.",timeline:[["August 2023","Created committee for event planning."],["Late-August 2023","Began overall delegation of tasks as well as development of waynehacks.com website."],["Late-September 2023","Deployed WayneHacks website through Vercel and opened early-registration for users."],["October 2023","Completed WayneHacks admin dashboard for applicant check-in and management."],["November 2023","Confirmed venue location with date and time."],["Early-December 2023","Secured extra funding from corporate sponsors."],["Late-December 2023","Confirmed judges from both the industry and university."],["Early-January 2024","Finalized event schedule, funding proposals, and catering logistics."],["January 13, 2024","WayneHacks Event: Day 1."],["January 14, 2024","WayneHacks Event: Day 2."]]},components:{Contribs:function(){return(0,p.jsx)(a.Z,{container:!0,children:(0,p.jsx)(a.Z,{item:!0,children:(0,p.jsx)(f.Z,{repos:["thatziv/waynehacks"],title:"WSU SCD Repository"})})})},Pictures:function(){return(0,p.jsx)(j.Z,{images:[{imgPath:"/pics/ext/waynehacks2/9.jpg",label:"Myself"},{imgPath:"/pics/ext/waynehacks2/1.jpg",label:"Miscellaneous (1/4)"},{imgPath:"/pics/ext/waynehacks2/10.jpg",label:"Miscellaneous (2/4)"},{imgPath:"/pics/ext/waynehacks2/11.jpg",label:"Miscellaneous (3/4)"},{imgPath:"/pics/ext/waynehacks2/12.jpg",label:"Miscellaneous (4/4)"},{imgPath:"/pics/ext/waynehacks2/13.jpg",label:"Networking Event (1/4)"},{imgPath:"/pics/ext/waynehacks2/14.jpg",label:"Networking Event (2/4)"},{imgPath:"/pics/ext/waynehacks2/15.jpg",label:"Networking Event (3/4)"},{imgPath:"/pics/ext/waynehacks2/17.jpg",label:"Networking Event (4/4)"},{imgPath:"/pics/ext/waynehacks2/2.jpg",label:"Lunch"},{imgPath:"/pics/ext/waynehacks2/6.jpg",label:"Closing Ceremony (1/4)"},{imgPath:"/pics/ext/waynehacks2/7.jpg",label:"Closing Ceremony (2/4)"},{imgPath:"/pics/ext/waynehacks2/5.jpg",label:"Closing Ceremony (3/4)"},{imgPath:"/pics/ext/waynehacks2/4.jpg",label:"Closing Ceremony (4/4)"},{imgPath:"/pics/ext/waynehacks2/8.jpg",label:"Judges"},{imgPath:"/pics/ext/waynehacks2/3.jpg",label:"Winners"}]})},Links:function(){return(0,p.jsxs)(a.Z,{container:!0,spacing:2,children:[(0,p.jsx)(a.Z,{item:!0,children:(0,p.jsx)(m.Z,{name:"Project Submissions",icon:"fa-solid fa-envelope-circle-check",url:"https://waynehacks-2.devpost.com/project-gallery"})}),(0,p.jsx)(a.Z,{item:!0,children:(0,p.jsx)(m.Z,{name:"Website",icon:"fa-solid fa-globe",url:"https://waynehacks.com/"})}),(0,p.jsx)(a.Z,{item:!0,children:(0,p.jsx)(m.Z,{name:"GetInvolved",icon:"fa-solid fa-graduation-cap",url:"https://getinvolved.wayne.edu/event/9630763"})})]})}}};var Z={heading:{fontSize:25,fontWeight:"regular",fontFamily:"Teko, sans-serif","@media (max-width:600px)":{textAlign:"center"}}},k=function(e){var t=e.icon,n=e.title;return(0,p.jsxs)("div",{id:n,style:{marginTop:18},children:[(0,p.jsx)(r.Z,{sx:Z.heading,children:(0,p.jsxs)("div",{children:[(0,p.jsx)("i",{className:t}),"\xa0\xa0",n]})}),(0,p.jsx)(o.Z,{style:{marginBottom:14}})]})},S=function(e){var t=e.children;return(0,p.jsx)(a.Z,{justifyContent:"flex-start",style:{marginTop:"10px"},container:!0,spacing:2,children:t})};function C(){return(0,p.jsx)(s.Z,{in:!0,timeout:500,children:(0,p.jsxs)("div",{children:[(0,p.jsx)(k,{icon:"fa-solid fa-briefcase",title:"Employment"}),(0,p.jsx)(S,{children:(0,p.jsx)(c.Z,(0,i.Z)((0,i.Z)({},y.meta),{},{size:12,children:(0,p.jsx)(l.Z,{icon:"fa-solid fa-circle-info",title:"Info",children:(0,p.jsx)(y.components.MoreInfo,{})})}))}),(0,p.jsx)(S,{children:(0,p.jsx)(c.Z,(0,i.Z)((0,i.Z)({},h.meta),{},{size:12,children:(0,p.jsx)(l.Z,{icon:"fa-solid fa-circle-info",title:"Info",children:(0,p.jsx)(h.components.MoreInfo,{})})}))}),(0,p.jsx)(k,{icon:"fa-solid fa-table-columns",title:"Organizations"}),(0,p.jsxs)(S,{children:[(0,p.jsxs)(c.Z,(0,i.Z)((0,i.Z)({},w.meta),{},{children:[(0,p.jsx)(l.Z,{icon:"fa-solid fa-images",title:"Gallery",children:(0,p.jsx)(w.components.Pictures,{})}),(0,p.jsx)(l.Z,{icon:"fa-solid fa-code",title:"Code",children:(0,p.jsx)(w.components.Contribs,{})}),(0,p.jsx)(l.Z,{icon:"fa-solid fa-arrow-up-right-from-square",title:"Links",children:(0,p.jsx)(w.components.Links,{})})]})),(0,p.jsxs)(c.Z,(0,i.Z)((0,i.Z)({prechildren:(0,p.jsx)(l.Z,{icon:"fa-solid fa-video",title:"Videos",children:(0,p.jsx)(b.components.Lectures,{})})},b.meta),{},{children:[(0,p.jsx)(l.Z,{icon:"fa-solid fa-code",title:"Code",children:(0,p.jsx)(b.components.Contribs,{})}),(0,p.jsx)(l.Z,{icon:"fa-solid fa-arrow-up-right-from-square",title:"Links",children:(0,p.jsx)(b.components.Links,{})})]})),(0,p.jsxs)(c.Z,(0,i.Z)((0,i.Z)({prechildren:(0,p.jsx)(l.Z,{icon:"fa-solid fa-video",title:"Videos",children:(0,p.jsx)(v.components.Lectures,{})})},v.meta),{},{children:[(0,p.jsx)(l.Z,{icon:"fa-solid fa-images",title:"Gallery",children:(0,p.jsx)(v.components.Pictures,{})}),(0,p.jsx)(l.Z,{icon:"fa-solid fa-code",title:"Code",children:(0,p.jsx)(v.components.Contribs,{})}),(0,p.jsx)(l.Z,{icon:"fa-solid fa-arrow-up-right-from-square",title:"Links",children:(0,p.jsx)(v.components.Links,{})})]})),(0,p.jsx)(c.Z,(0,i.Z)((0,i.Z)({prechildren:(0,p.jsx)(l.Z,{icon:"fa-solid fa-video",title:"Videos",children:(0,p.jsx)(g.components.Lectures,{})})},g.meta),{},{children:(0,p.jsx)(l.Z,{icon:"fa-solid fa-arrow-up-right-from-square",title:"Links",children:(0,p.jsx)(g.components.Links,{})})}))]})]})})}}}]);
//# sourceMappingURL=957.26182ed8.chunk.js.map