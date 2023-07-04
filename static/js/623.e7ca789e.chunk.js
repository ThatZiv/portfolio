"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[623],{2882:function(e,t,n){n.d(t,{Z:function(){return r}});n(2791);var i=n(1288),o=n(2734),s=n(184);function r(e){return(0,s.jsx)(i.Z,{container:!0,justifyContent:"space-between",alignItems:"center",children:e.repos.map((function(t,n){return(0,s.jsx)(i.Z,{item:!0,children:(0,s.jsx)(o.ZP,{placement:"top",title:"https://github.com/"+t,children:(0,s.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/"+t,children:(0,s.jsx)("img",{alt:"".concat(e.title," #").concat(n+1),className:"Media",src:"https://gh-card.dev/repos/".concat(t,".svg?fullname=")})})})})}))})}},8882:function(e,t,n){var i=n(9439),o=n(2791),s=n(4554),r=n(9584),a=n(5527),c=n(533),l=n(890),d=n(6151),u=n(1133),h=n(5397),p=n(1065),m=n(8894),g=n(3241),f=n(8596),x=n(7303),v=n(1288),j=n(184),y=(0,m.bH)(p.ZP),w=(0,f.Z)((function(e){return{root:{backgroundColor:"#1c1c1c !important",color:"white !important"},disabled:{backgroundColor:"#fff !important"}}}));t.Z=function(e){var t=o.useContext(x.S),n=(0,i.Z)(t,2),p=(n[0],n[1]),m=o.useState(0),f=(0,i.Z)(m,2),b=f[0],Z=f[1],k=e.images.length,S=w();return(0,j.jsx)(v.Z,{item:!0,md:7,children:(0,j.jsxs)(s.Z,{sx:{flexGrow:1},className:[S.root,"Media"].join(" "),children:[(0,j.jsx)(a.Z,{square:!0,elevation:0,className:S.root,sx:{display:"flex",alignItems:"center",height:50,maxHeight:"100%",maxWidth:"100%",pl:2,bgcolor:g.Z.palette.background.default},children:(0,j.jsx)(l.Z,{variant:"body1",children:(0,j.jsx)(c.Z,{href:e.images[b].imgPath,target:"_blank",children:e.images[b].label})})}),(0,j.jsx)(y,{axis:"rtl"===g.Z.direction?"x-reverse":"x",index:b,sx:{maxHeight:"100%",maxWidth:"100%"},interval:e.timeout||7500,onChangeIndex:function(e){Z(e)},enableMouseEvents:!0,children:e.images.map((function(e,t){return(0,j.jsx)("div",{onClick:function(){p({type:"UI_dialog",dialog:{open:!0,title:"Open File",content:"Would you like to open the image: ".concat(e.imgPath.split("/").pop(),"?"),callback:function(){window.open(e.imgPath,"_blank")}}})},children:(0,j.jsx)("div",{children:Math.abs(b-t)<=2?(0,j.jsx)(s.Z,{component:"img",sx:{maxHeight:400,display:"block",overflow:"hidden",width:"100%",height:"100%",cursor:"zoom-in"},src:e.imgPath,alt:e.label}):null},e.label)})}))}),(0,j.jsx)(r.Z,{steps:k,position:"static",className:S.root,activeStep:b,nextButton:(0,j.jsxs)(d.Z,{size:"small",onClick:function(){Z((function(e){return e+1}))},disabled:b===k-1,children:["Next","rtl"===g.Z.direction?(0,j.jsx)(u.Z,{}):(0,j.jsx)(h.Z,{})]}),backButton:(0,j.jsxs)(d.Z,{size:"small",onClick:function(){Z((function(e){return e-1}))},disabled:0===b,children:["rtl"===g.Z.direction?(0,j.jsx)(h.Z,{}):(0,j.jsx)(u.Z,{}),"Back"]})}),(0,j.jsx)(l.Z,{sx:{textAlign:"center",marginTop:1.5},variant:"subtitle2",color:"gray",children:"Click picture to enlarge"})]})})}},5181:function(e,t,n){n.d(t,{Z:function(){return c}});var i=n(1889),o=n(890),s=n(7924),r=(n(2791),n(7147)),a=n(184);function c(e){return(0,a.jsx)(i.ZP,{direction:"row",container:!0,children:e.entries.map((function(e){var t=e.title,n=e.content;return(0,a.jsxs)(i.ZP,{xs:12,item:!0,children:[(0,a.jsx)(o.Z,{variant:"h4",style:{fontFamily:"Blinker, sans-serif"},children:t}),(0,a.jsx)(o.Z,{variant:"body1",children:(0,a.jsx)(r.Z,{children:n})}),(0,a.jsx)(s.Z,{style:{marginBottom:15}})]})}))})}},7147:function(e,t,n){n(2791);var i=n(1459),o=n(890),s=n(184),r={h1:function(e){e.node;var t=e.children;return(0,s.jsx)(o.Z,{variant:"h1",style:{fontFamily:"Blinker, sans-serif"},children:t})}};t.Z=function(e){var t=e.children;return(0,s.jsx)(i.D,{linkTarget:"_blank",components:r,children:t})}},3718:function(e,t,n){n.d(t,{Z:function(){return B}});var i=n(1413),o=n(9439),s=n(2791),r=n(8596),a=n(283),c=n(4589),l=n(4697),d=n(2953),u=n(9370),h=n(6685),p=n(6513),m=n(8302),g=n(1288),f=n(3032),x=n(7447),v=n(6129),j=n(7147),y=n(908),w=n(9418),b=n(184),Z=(0,r.Z)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.1)}}}}));function k(e){var t,n=Z(),i=null===(t=e.children)||void 0===t?void 0:t.replace(" ","_");return(0,b.jsx)("div",{className:n.root,children:(0,b.jsx)(y.Z,{tag:i,color:"primary",icon:(0,b.jsx)(w.Z,{className:"material-icons-outlined",children:"tag"}),label:e.children})})}var S=n(2067),C=n(3392),P=n(4778),D=(0,r.Z)((function(e){return{root:{width:"100%",padding:"10px",borderRadius:"5px",backgroundColor:e.palette.background.default}}}));function T(e){var t=D();return(0,b.jsx)("div",{className:t.root,children:(0,b.jsx)(S.Z,{component:"nav","aria-label":"secondary",children:e.list.split("|").map((function(e){return(0,b.jsx)(C.Z,{divider:!0,children:(0,b.jsx)(P.Z,{primary:e})},e)}))},e.list)})}var A=n(7227),I=n(242),W=n(4512),H=n(5825),M=n(4554),G=n(890);function z(e){var t=(0,s.useState)(0),n=(0,o.Z)(t,2),i=n[0];n[1];return(0,b.jsx)("div",{style:{color:"whitesmoke"},children:(0,b.jsx)(M.Z,{sx:{width:"100%"},children:(0,b.jsx)(I.Z,{activeStep:i,orientation:"vertical",children:e.steps.map((function(e,t){var n=(0,o.Z)(e,2),i=n[0],s=n[1];return(0,b.jsx)(W.Z,{active:!0,children:(0,b.jsx)(H.Z,{optional:(0,b.jsx)(G.Z,{style:{color:"gray"},variant:"caption",children:i}),children:(0,b.jsx)(G.Z,{style:{color:"whitesmoke"},variant:"body2",children:s})})},t)}))})})})}function F(e){var t=e.timeline[0][0].match("[0-9]{4}")[0],n=e.timeline[e.timeline.length-1][0].match("[0-9]{4}")[0],i=e.complete?n:"Now",o=t===n?t:t+" - "+i;return(0,b.jsx)(m.Z,{variant:"subtitle1",style:{color:"gray",textAlign:"right",marginTop:"-5px"},component:"div",children:o})}var Y=n(4942),L=n(3967),U=n(8476),E=n(9823);function N(e){var t,n=e.open,i=e.onClose,o=e.children,s=(0,L.Z)();return(0,b.jsx)("div",{children:(0,b.jsx)(U.Z,{open:n,onClose:i,children:(0,b.jsxs)(M.Z,{sx:(t={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},(0,Y.Z)(t,s.breakpoints.down("sm"),{maxHeight:"93vh",width:"100%"}),(0,Y.Z)(t,s.breakpoints.up("md"),{maxHeight:"93vh",width:"85%"}),(0,Y.Z)(t,"bgcolor","#1e1e1e"),(0,Y.Z)(t,"maxHeight","100vh"),(0,Y.Z)(t,"width","85%"),(0,Y.Z)(t,"border","2px solid #000"),(0,Y.Z)(t,"boxShadow",24),(0,Y.Z)(t,"p",4),(0,Y.Z)(t,"overflow","auto"),t),children:[(0,b.jsx)("div",{style:{position:"absolute",top:7,right:7,fontSize:8},children:(0,b.jsx)("div",{onClick:i,children:(0,b.jsx)(E.Z,{sx:{"&:hover":{cursor:"pointer",color:"gray"}}})})}),o]})})})}var O=(0,r.Z)((function(e){return{media:{height:140},cardcontent:{"&:last-child":{paddingBottom:0}},paper:{padding:e.spacing(2)},tags:{overflow:"visible",float:"right",maxHeight:"34px",minWidth:"90%"}}}));function B(e){var t=O(),n=s.useState(!1),r=(0,o.Z)(n,2),y=r[0],w=r[1],Z=s.useState(e.size||6),S=(0,o.Z)(Z,2),C=S[0],P=(S[1],s.useRef(null)),D=function(){w(!y),y||P.current.scrollIntoView({behavior:"smooth"})},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"none";v.ZP.event({category:"z_ui-card-expand",label:e,action:e})};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f.Z,{in:!0,timeout:700,children:(0,b.jsx)(g.Z,{item:!0,xs:12,md:C||e.size,lg:C||e.size,children:(0,b.jsxs)(a.Z,{ref:P,style:y?{border:"2px solid #3f51b5"}:{border:null},elevation:3,children:[(0,b.jsxs)(c.Z,{onClick:function(){D(),I(e.title)},children:[(0,b.jsx)(h.Z,{className:t.media,image:e.banner,title:e.title}),(0,b.jsxs)(d.Z,{className:t.cardcontent,children:[(0,b.jsxs)(g.Z,{justifyContent:"space-between",container:!0,children:[(0,b.jsx)(g.Z,{item:!0,xs:10,children:(0,b.jsx)(m.Z,{gutterBottom:!0,variant:"h3",style:{fontFamily:"Bebas Neue"},component:"h2",children:e.title})}),(0,b.jsx)(g.Z,{item:!0,sm:!0,children:(0,b.jsx)(F,(0,i.Z)({},e))})]}),(0,b.jsx)(g.Z,{item:!0,children:(0,b.jsx)(m.Z,{variant:"body2",color:"textSecondary",children:(0,b.jsx)(j.Z,{children:e.description})})})]})]}),(0,b.jsxs)(u.Z,{in:!1,timeout:"auto",unmountOnExit:!0,children:[(0,b.jsx)(x.Z,{style:{marginRight:"18px",marginLeft:"18px"}}),(0,b.jsx)(d.Z,{})]}),(0,b.jsx)(l.Z,{children:"string"==typeof e.tags&&(0,b.jsx)(g.Z,{style:{overflowY:"scroll",maxHeight:"20vh"},alignItems:"baseline",container:!0,spacing:1,children:e.tags.split(",").map((function(e){return(0,b.jsx)(g.Z,{item:!0,children:(0,b.jsx)(k,{children:e})})}))})}),(0,b.jsx)(p.Z,{onClick:function(){D(),I(e.title)},style:{paddingBottom:20,paddingTop:20},size:"small",color:"primary",children:y?"Less":"More"})]})})}),(0,b.jsxs)(N,{open:y,onClose:D,children:[(0,b.jsxs)(g.Z,{justifyContent:"space-between",container:!0,children:[(0,b.jsx)(g.Z,{item:!0,xs:10,children:(0,b.jsx)(m.Z,{gutterBottom:!0,variant:"h3",style:{fontFamily:"Bebas Neue"},component:"h2",children:e.title})}),(0,b.jsx)(g.Z,{item:!0,sm:!0,children:(0,b.jsx)(F,(0,i.Z)({},e))})]}),(0,b.jsx)(g.Z,{item:!0,children:(0,b.jsx)(m.Z,{variant:"body2",color:"textSecondary",children:(0,b.jsx)(j.Z,{children:e.description})})}),(0,b.jsxs)(m.Z,{variant:"body2",color:"textSecondary",component:"p",children:[e.prechildren,e.objectives&&(0,b.jsx)(A.Z,{icon:"fa-solid fa-list",title:"Deliverables",children:(0,b.jsx)(T,{list:e.objectives})}),e.timeline&&(0,b.jsx)(A.Z,{icon:"fa-solid fa-timeline",title:"Timeline",children:(0,b.jsx)(z,{steps:e.timeline})}),e.children,"string"==typeof e.tags&&(0,b.jsx)(g.Z,{alignItems:"baseline",container:!0,style:{marginTop:10},spacing:1,children:e.tags.split(",").map((function(e){return(0,b.jsx)(g.Z,{item:!0,children:(0,b.jsx)(k,{children:e})})}))})]})]})]})}},1407:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(184);function o(e){return(0,i.jsx)("div",{className:"video-responsive",children:(0,i.jsx)("iframe",{width:"480",height:"270",src:"https://www.youtube-nocookie.com/embed/".concat(e.id),title:e.id,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},8623:function(e,t,n){n.r(t),n.d(t,{LayoutGrid:function(){return I},default:function(){return W}});var i=n(1413),o=n(7447),s=n(1288),r=n(890),a=n(3208),c=(n(2791),n(3718)),l=n(7227),d=n(1407),u=n(184),h={meta:{title:"Doxim",description:"## Implementation Programming Intern \n[Doxim](https://doxim.com/) is the customer communications management and engagement technology leader serving highly regulated markets, including financial services, utilities and healthcare. We provide omnichannel document and payment solutions that transform experiences and strengthen engagement throughout the entire lifecycle.",banner:"/pics/doxim.png",complete:!0,tags:"C#,PowerShell,MySQL,Agile,Scripting,Virtualization Environments,Internship,Pair Programming,Doxim",objectives:"Parsed and extracted data from text files using C# and PowerShell to create billing statements.\n        |Managed credit union workflows to ensure organized and optimized month-end billing deliveries.\n        |Designed proof-of-concept for virtual machine manager full-stack web project.\n        |Created automation scripts for the composition, storage, and archival of business-critical documents. ",timeline:[["May 2nd, 2022","Internship begins."],["April 26th, 2023","Internship ends."]]},components:{MoreInfo:function(){return(0,u.jsx)("div",{children:(0,u.jsxs)(s.Z,{container:!0,children:[(0,u.jsx)(s.Z,{item:!0,xs:12,children:(0,u.jsx)(d.Z,{id:"eU-eX6Akb2w"})}),(0,u.jsxs)(s.Z,{item:!0,sm:!0,children:[(0,u.jsx)("i",{children:"Taken from www.doxim.com: "}),(0,u.jsx)("br",{}),(0,u.jsxs)(r.Z,{variant:"caption",children:["The Doxim Platform helps clients communicate reliably and effectively, improves cross-sell and upsell opportunities, and drives increased loyalty and wallet share through personalized communications and easy-to-use payment processes. The platform addresses key digitization, operational efficiency, and customer experience challenges through our suite of plug-and-play, integrated, SaaS software and technology solutions. Learn more at"," ",(0,u.jsx)("a",{href:"https://www.doxim.com/",children:"www.doxim.com"}),"."]})]})]})})},Welcoming:function(){return(0,u.jsx)("div",{children:(0,u.jsx)("iframe",{src:"https://www.linkedin.com/embed/feed/update/urn:li:share:6941068042143510528",height:"1000px",width:"100%",frameBorder:"0",allowFullScreen:"",title:"Embedded post"})})}}};var p=n(5006);function m(e){var t=e.children,n=e.YouTubeID,i=e.title;return(0,u.jsxs)(s.Z,{item:!0,xs:12,md:6,lg:6,children:[(0,u.jsxs)("div",{style:{padding:10},children:[(0,u.jsx)(r.Z,{align:"Left",style:{fontFamily:"Teko"},variant:"h4",children:i}),(0,u.jsx)(d.Z,{id:n}),t]}),(0,u.jsx)(o.Z,{style:{marginRight:18,marginLeft:18,marginTop:8}})]})}var g={meta:{title:"Google Developer Student Club at WSU",banner:"pics/gdsc-social-share.png",complete:!1,tags:"Kotlin,Android Development,App Development,JavaScript,TypeScript,Firebase,BaaS,Git,Pair Programming,Android Studio,GDSC,Google",objectives:"Technical Facilitating at Google Developer Student Club (GDSC) WSU.|Organize and host workshops based on Google technologies.",description:"## Technical Lead\n[Google Developer Student Clubs](https://gdsc.community.dev/wayne-state-university/) (GDSC) are university-based communities, where students learn about Google technology and use their skills to solve local problems. The GDSC gives students the opportunity to connect and network with individuals from diverse backgrounds and majors. It also allows students to learn about different technical topics through talks, workshops, and events. The GDSC is a great opportunity for students to give back to their community and develop themselves along the way!",timeline:[["October, 2022","Recruited as Technical Lead."],["November, 2022","Hosted Android Study Jams Event (1/2)."],["December, 2022","Hosted Android Study Jams Event (2/2)."],["March 4, 2023","Co-hosted Google Firebase workshop."]]},components:{Lectures:function(){return(0,u.jsxs)(s.Z,{container:!0,children:[(0,u.jsx)(m,{title:"Google Firebase",YouTubeID:"nUOMTViKsko"}),(0,u.jsx)(m,{title:"Android App Development (1/2)",YouTubeID:"xv_tRBvfYDU"}),(0,u.jsx)(m,{title:"Android App Development (2/2)",YouTubeID:"k8xtZQevP4w"})]})},Links:function(){return(0,u.jsxs)(s.Z,{container:!0,spacing:2,children:[(0,u.jsx)(s.Z,{item:!0,children:(0,u.jsx)(p.Z,{name:"GetInvolved",icon:"fa-solid fa-graduation-cap",url:"https://getinvolved.wayne.edu/organization/gdsc"})}),(0,u.jsx)(s.Z,{item:!0,children:(0,u.jsx)(p.Z,{icon:"fa-brands fa-instagram",url:"https://www.instagram.com/gdsc.waynestate/"})}),(0,u.jsx)(s.Z,{item:!0,children:(0,u.jsx)(p.Z,{icon:"fa-brands fa-linkedin-in",url:"https://www.linkedin.com/company/gdsc-wsu/"})}),(0,u.jsx)(s.Z,{item:!0,children:(0,u.jsx)(p.Z,{icon:"fa-brands fa-google",url:"https://developers.google.com/community/gdsc"})})]})}}};var f=n(2882),x=n(9324),v=n(8882),j={meta:{title:"Society of Computer Developers",description:"## Vice President\n[Society of Computer Developers](https://getinvolved.wayne.edu/organization/scd) (SCD) at [Wayne State University](https://wayne.edu) is focused on creating opportunities for students interested in coding and development. We aim to provide a community of peers that support one another in coding, resume building, networking, and developing new skills. We invite industry speakers, allow members to present a project they developed, give organization updates, and practice coding problems. We also host events which include, skill-building workshops, hackathons, coding nights, and social events!",banner:"/pics/scd.png",complete:!1,tags:"TypeScript,JavaScript,Python,C/C++,HTML/CSS,Docker,CI/CD,Full Stack,REST API,DOM,MongoDB,React.js,Agile,Pair Programming,Lecturing,SCD,GitHub Actions,Version Control",objectives:"Created and hosted programming-related workshop events for students.\n|Tutored and assisted students with coursework and other programming-related content.\n|Developed and managed official club website to display dynamic content using React, Express, and MongoDB.",timeline:[["September 2021","Joined SCD as a member."],["October 2021","Recruited as Secretary."],["November 2021",'Participated in WSU SCD 2021 Hackathon ("Most Technical" award).'],["February 2022","Promoted to Software Lead."],["February 8, 2022","Participated in WSU SCD 2022 Hackathon (3rd place)."],["February 25, 2022","Hosted web scraping workshop."],["April 17, 2022","Hosted REST API workshop."],["August 2022","Began development of official website."],["September 2022","Orchestrated month-long dynamic website project with weekly meetings."],["October 2022","Completed preview build of club website for production."],["October 19, 2022","Hosted Docker & Containerization workshop."],["November 2022",'Completed and deployed website to "scd.cs.wayne.edu".'],["November 28, 2022","Hosted React.js (web framework) workshop."],["January 2023","Promoted to Vice President."],["March 3, 2023","Hosted JavaScript DOM workshop."],["March 4, 2023","Co-hosted Google Firebase workshop."],["March 5, 2023",'Organized and hosted "WayneHacks" - Wayne State\'s 3rd 48-hour hackathon.']]},components:{Lectures:function(){return(0,u.jsxs)(s.Z,{container:!0,children:[(0,u.jsx)(m,{title:"Google Firebase",YouTubeID:"nUOMTViKsko"}),(0,u.jsx)(m,{title:"JavaScript DOM",YouTubeID:"HTxYtiTAsZU"}),(0,u.jsx)(m,{title:"React.js",YouTubeID:"S7wWg11tZxM"}),(0,u.jsx)(m,{title:"Docker",YouTubeID:"MrE1uvzuJW8"}),(0,u.jsx)(m,{title:"Full Stack (REST API Part 2)",YouTubeID:"9OlMQpivP2Q"}),(0,u.jsx)(m,{title:"REST API Development",YouTubeID:"UAWJ37Dmvz0"}),(0,u.jsx)(m,{title:"Web Scraping",YouTubeID:"WOwC2NeDyF4"}),(0,u.jsx)(m,{title:"Dynamic Website Project (1/4)",YouTubeID:"tyCX7s3QfyY"}),(0,u.jsx)(m,{title:"Dynamic Website Project (2/4)",YouTubeID:"rXnBDTKaH3Y"}),(0,u.jsx)(m,{title:"Dynamic Website Project (3/4)",YouTubeID:"xxyelsQcz58"}),(0,u.jsx)(m,{title:"Dynamic Website Project (4/4)",YouTubeID:"AQg_lSHrwHs"})]})},Contribs:function(){return(0,u.jsxs)(s.Z,{container:!0,children:[(0,u.jsx)(s.Z,{item:!0,children:(0,u.jsx)(f.Z,{repos:["WSU-Society-of-Computer-Developers/workshops","WSU-Society-of-Computer-Developers/website2","WSU-Society-of-Computer-Developers/dynamic-website-project","WSU-Society-of-Computer-Developers/verify-service","WSU-Society-of-Computer-Developers/waynehacks-website"],title:"WSU SCD Repository"})}),(0,u.jsx)(s.Z,{item:!0,children:(0,u.jsx)(x.Z,{paper:!0,url:"https://scd.cs.wayne.edu/"})})]})},Links:function(){return(0,u.jsxs)(s.Z,{container:!0,spacing:2,children:[(0,u.jsx)(s.Z,{item:!0,children:(0,u.jsx)(p.Z,{name:"Website",icon:"fa-solid fa-globe",url:"https://scd.cs.wayne.edu"})}),(0,u.jsx)(s.Z,{item:!0,children:(0,u.jsx)(p.Z,{name:"GetInvolved",icon:"fa-solid fa-graduation-cap",url:"https://getinvolved.wayne.edu/organization/scd"})}),(0,u.jsx)(s.Z,{item:!0,children:(0,u.jsx)(p.Z,{icon:"fa-brands fa-instagram",url:"https://www.instagram.com/scd_wsu/"})}),(0,u.jsx)(s.Z,{item:!0,children:(0,u.jsx)(p.Z,{icon:"fa-brands fa-linkedin",url:"https://www.linkedin.com/company/society-of-computer-developers/"})}),(0,u.jsx)(s.Z,{item:!0,children:(0,u.jsx)(p.Z,{icon:"fa-brands fa-facebook",url:"https://www.facebook.com/scdwsu"})}),(0,u.jsx)(s.Z,{item:!0,children:(0,u.jsx)(p.Z,{icon:"fa-brands fa-twitter",url:"https://twitter.com/scd_wsu"})}),(0,u.jsx)(s.Z,{xs:12,item:!0,children:(0,u.jsx)(x.Z,{url:"https://scd.cs.wayne.edu/"})})]})},Pictures:function(){return(0,u.jsx)(v.Z,{images:[{label:"SCD at Festifall (myself 2nd from the left)",imgPath:"https://se-images-blob.campuslabs.com/documents/204/f0eaec97-9199-4aff-279a-08dab6692024/1500.jpg"},{label:"General Body Meetings",imgPath:"https://se-images-blob.campuslabs.com/documents/204/aee7b032-28ee-4514-dd13-08dabb5f3f2a/600.jpg"}]})}}};var y={meta:{title:"WayneHacks Winter 2023 Hackathon",description:"## Co-Director\n\n[WayneHacks](https://waynehacks.devpost.com/) is a 48-hour virtual hackathon hosted by \n[Wayne State University](https://engineering.wayne.edu/). Hackers have 48 hours to complete a project related to the theme given at the opening ceremony. \nWayneHacks also hosts workshops and two gaming tournaments during the event! $5000 in prizes are given out at the end to the best hacks. \nIn total, there were over **100 registrants**, **50 active participants**, and **16 project submissions**.",banner:"/pics/whacks.png",complete:!0,tags:"JavaScript,Python,HTML/CSS,Docker,JS DOM,React.js,Agile,Pair Programming,Git,CI/CD,Hackathon,Competition,Team Management",objectives:"Conducted preliminary meetings relating to funding, event schedule, and judging criteria with committee members.|\nDeveloped interactive JavaScript DOM workshop with JavaScript.|\nDeveloped interactive Google Firebase workshop with JavaScript and Python.|\nCo-hosted public ceremonies for opening and closing of the Hackathon event.",timeline:[["January 2023","Created committee for event planning."],["Early-February 2023","Reached out to Wayne State University faculty members for judging."],["Late-February 2023",'Created and deployed WayneHacks website to "www.waynehacks.com".'],["Late-February 2023","Finalized event schedule."],["March 3, 2023","Co-hosted opening ceremony."],["March 3, 2023","Hosted JavaScript DOM workshop."],["March 4, 2023","Co-hosted Google Firebase workshop."],["March 4, 2023","Ran game tournament with production-ready Docker servers."],["March 5, 2023","Co-hosted closing ceremony."]]},components:{Lectures:function(){return(0,u.jsxs)(s.Z,{container:!0,children:[(0,u.jsx)(m,{title:"Opening Ceremony",YouTubeID:"eD6vRXIsiYQ"}),(0,u.jsx)(m,{title:"Workshop Event #1 (JavaScript DOM)",YouTubeID:"HTxYtiTAsZU"}),(0,u.jsx)(m,{title:"Workshop Event #2 (Google Firebase)",YouTubeID:"nUOMTViKsko"}),(0,u.jsx)(m,{title:"Presentations",YouTubeID:"BUvKisZIHjs"}),(0,u.jsx)(m,{title:"Closing Ceremony",YouTubeID:"WYBUJVTmHnk"})]})},Contribs:function(){return(0,u.jsxs)(s.Z,{container:!0,children:[(0,u.jsx)(s.Z,{item:!0,children:(0,u.jsx)(f.Z,{repos:["WSU-Society-of-Computer-Developers/workshops","WSU-Society-of-Computer-Developers/waynehacks-website"],title:"WSU SCD Repository"})}),(0,u.jsx)(s.Z,{item:!0,children:(0,u.jsx)(x.Z,{paper:!0,pattern:"/WayneHacks/g",url:"https://waynehacks.com"})})]})},Links:function(){return(0,u.jsxs)(s.Z,{container:!0,spacing:2,children:[(0,u.jsx)(s.Z,{item:!0,children:(0,u.jsx)(p.Z,{name:"Project Submissions",icon:"fa-solid fa-envelope-circle-check",url:"https://waynehacks.devpost.com/project-gallery"})}),(0,u.jsx)(s.Z,{item:!0,children:(0,u.jsx)(p.Z,{name:"Website",icon:"fa-solid fa-globe",url:"https://waynehacks.com/"})}),(0,u.jsx)(s.Z,{item:!0,children:(0,u.jsx)(p.Z,{name:"GetInvolved",icon:"fa-solid fa-graduation-cap",url:"https://getinvolved.wayne.edu/event/8905074"})}),(0,u.jsx)(s.Z,{item:!0,children:(0,u.jsx)(p.Z,{icon:"fa-solid fa-instagram",url:"https://www.instagram.com/wayne.hacks/"})}),(0,u.jsx)(s.Z,{xs:12,item:!0,children:(0,u.jsx)(x.Z,{pattern:"/WayneHacks/g",url:"https://waynehacks.com"})})]})}}};var w=n(5671),b=n(3144),Z=n(5181),k="3.95",S={meta:{title:"Wayne State University",banner:"pics/wsu.png",complete:!0,tags:"Wayne State University,WSU,University,College,Education,Extracurricular,Clubs,Organizations,Activities,Classes,Coursework,Projects,Leadership",description:"## Bachelor of Science in Computer Science \u2022 **".concat(k," GPA**\n[Wayne State University](https://wayne.edu) is a public research university in Detroit, Michigan. \nIt is Michigan's third-largest university. Founded in 1868, Wayne State consists of \n13 schools and colleges offering approximately 350 programs to nearly 24,000 graduate and undergraduate students."),timeline:[["Fall 2021","Start date."],["Spring 2025","Expected graduation date."]]},components:{Coursework:function(){var e=function(){function e(t){var n=t.name,i=t.title,o=t.description;return(0,w.Z)(this,e),this.name=n,this.title=i,this.description=o,{title:i,content:"## [".concat(n,"](").concat(this.getCoursePage(),")\n").concat(o)}}return(0,b.Z)(e,[{key:"getCoursePage",value:function(){return"https://bulletins.wayne.edu/search/?P=".concat(encodeURIComponent(this.name))}}]),e}(),t=[new e({name:"CSC 1100",title:"Programming and Problem Solving",description:"Problem solving with algorithms, and their realization as computer programs using a structured, general purpose programming language; data types, operators, expressions, assignment, input and output, selection and repetition control structures; modularity and procedural abstraction using functions with parameters; structured data types, arrays, pointers and strings.Problem solving with algorithms, and their realization as computer programs using a structured, general purpose programming language; data types, operators, expressions, assignment, input and output, selection and repetition control structures; modularity and procedural abstraction using functions with parameters; structured data types, arrays, pointers and strings."}),new e({name:"CSC 1500",title:"Fundamental Structures in Computer Science",description:"Introduction to fundamental control and data structures in computer science such as algorithms and complexity; recursive algorithms; program correctness using the predicate calculus; reasoning about algorithms using mathematical induction; divide and conquer algorithms; recurrence relations; set properties and their computation; and computing with relations. Graph properties and their computation, and tree properties and their computation, will be covered if time permits."}),new e({name:"CSC 2110",title:"Computer Science I",description:"Rigorous introduction to fundamental object-oriented concepts and techniques of computer programming using an object-oriented language. Introduction to data abstraction; design of abstract data types. Introduction to recursion; programming with generic data types; inheritance; polymorphism; and exception handlers. Concepts applied to console programs and event-driven programming"}),new e({name:"CSC 3010",title:"Ethics in Computer Science",description:"Students will study the ethical and legal issues that arise with the usage and development of computing technology. Students will learn the responsibilities of the computer professionals and how to make appropriate decisions when faced with legal and ethical issues in computing."}),new e({name:"CSC 2200",title:"Computer Science II",description:"Design and implementation of fundamental abstract data types of computer science (such as stacks, queues, trees, lists, hashing, and graphs), using an object-oriented language. Programming requirements include the implementation of abstract data types using arrays and dynamic links; recursion; sorting and searching; hashing; and string processing. Introduction to algorithm analysis."}),new e({name:"CSC 3750",title:"Introduction to Web Technology",description:"Understanding the Internet using several access methods; required software and tools. Topics include: e-mail, FTP, Telnet, Gopher, Archie, Newsgroups, WWW, HTML, CGI and PHP scripting and how to create an active web site."}),new e({name:"MAT 2030",title:"Calculus III",description:"Multi-variable calculus with applications. Vectors and vector functions in two and three dimensions; functions of several variables; differentiation; integration; vector calculus."}),new e({name:"MAT 2250",title:"Linear Algebra",description:"Systems of linear equations, matrices, vector spaces, basis, dimension, inner products, linear transformations and eigenvalues. Applications presented. "})];return(0,u.jsx)(Z.Z,{entries:t})},Awards:function(){return(0,u.jsx)(Z.Z,{entries:[{title:"Dean's List",content:"Awarded [Fall 2021](https://engineering.wayne.edu/news/undergraduate-deans-list-for-fall-2021-46885#cs), \n[Winter 2022](https://engineering.wayne.edu/news/undergraduate-deans-list-for-winter-2022-48391#cs),\n[Fall 2022](https://engineering.wayne.edu/news/undergraduate-deans-list-for-fall-2022-50373#cs), \nFall 2023. This award is given to students who have achieved a GPA of 3.5 or higher as a full-time student."},{title:"Warrior Award",content:"Awarded Fall 2021-Winter 2025. The [Warrior Award](https://wayne.edu/scholarships/warrior) is up to $6,000 per year for four consecutive years and is offered to the strongest admissions applicants based on GPA and ACT/SAT scores."}]})},Grade:function(){return(0,u.jsxs)("div",{children:[k,"/4 Unweighted Grade Point Average (GPA)"]})}}};var C=n(7147),P="3.91",D={meta:{title:"Troy High School",banner:"pics/troy_high.jpeg",complete:!0,tags:"Troy High School,THS,School,High School,Education,Extracurricular,Clubs,Classes,Coursework,Projects,Leadership,AP,Advanced Placement",description:"## High School Diploma \u2022 **".concat(P," GPA**\n[Troy High School](https://www.troycolts.org) has been recognized by U.S. News and World Report, Newsweek, NICHE, and many others as one of the best high schools in the nation.\nTroy High School is a public high school in Troy, Michigan, United States. It is a part of the Troy School District. \nIt enrolls approximately 2,000 students in grades 9-12."),timeline:[["Fall 2017","Start date."],["November 2019","Founded Troy High Cycling Club."],["Spring 2020","Elected event chair of Troy High Project Lead."],["Spring 2021","Graduation."]]},components:{Awards:function(){return(0,u.jsx)(Z.Z,{entries:[{title:"Honor Roll",content:"You must maintain a grade point average (GPA) of 3.0 or higher."},{title:"National Honor Society (NHS)",content:"[NHS](https://www.nationalhonorsociety.org/) - You must have an unweighted GPA of 3.0 or higher. You must have completed 15 service hours.\n        "},{title:"AP\xae Scholar with Honor",content:"[Granted](https://apstudents.collegeboard.org/awards-recognitions/ap-scholar-award#:~:text=more%20AP%20Exams.-,AP%20Scholar%20with%20Honor,-Granted%20to%20students) to students who receive an average score of at least 3.25 on all AP Exams taken, and scores of 3 or higher on four or more of these exams."}]})},Coursework:function(){return(0,u.jsx)(Z.Z,{entries:[{title:"AP\xae Computer Science Principles",content:"Learn the principles that underlie the science of computing and develop the thinking skills that computer scientists use. You'll work on your own and as part of a team to creatively address real-world issues using the tools and processes of computation."},{title:"AP\xae Macroeconomics",content:"Explore the principles of economics that apply to an economic system as a whole. You'll use graphs, charts, and data to analyze, describe, and explain economic concepts."},{title:"AP\xae Microeconomics",content:"Study the principles of economics that apply to the behavior of individuals within an economic system. You'll use graphs, charts, and data to analyze, describe, and explain economic concepts."},{title:"AP\xae Psychology",content:"Explore the ideas, theories, and methods of the scientific study of behavior and mental processes. You'll examine the concepts of psychology through reading and discussion and you'll analyze data from psychological research studies."},{title:"AP\xae Calculus BC",content:"Explore the concepts, methods, and applications of differential and integral calculus, including topics such as parametric, polar, and vector functions, and series. You'll perform experiments and investigations and solve problems by applying your knowledge and skills. "},{title:"AP\xae Environmental Science",content:"Explore and investigate the interrelationships of the natural world and analyze environmental problems, both natural and human-made. You'll take part in laboratory investigations and field work."},{title:"AP\xae Physics C: Mechanics",content:"Explore concepts such as kinematics; Newton's laws of motion, work, energy, and power; systems of particles and linear momentum; rotation; oscillations; and gravitation. You'll do hands-on laboratory work and in-class activities to investigate phenomena and use calculus to solve problems."},{title:"AP\xae Physics C: Electricity and Magnetism",content:"Explore concepts such as electrostatics; conductors, capacitors, and dielectrics; electric circuits; magnetic fields; and electromagnetism. You'll do hands-on laboratory work to investigate phenomena."}]})},Grade:function(){return(0,u.jsxs)("div",{children:[P,"/4 Unweighted Grade Point Average (GPA)"]})},Organizations:function(){return(0,u.jsx)(C.Z,{children:"\n* [Troy High Cycling Club](https://thatziv.github.io/cyclingclubths) - President\n* [Troy High Project Lead](https://www.thsprojectlead.com/) - Event Chair\n* [National Honor Society](https://www.nationalhonorsociety.org/) - Member\n  "})}}};var T={heading:{fontSize:25,fontWeight:"regular",fontFamily:"Teko, sans-serif","@media (max-width:600px)":{textAlign:"center"}}},A=function(e){var t=e.icon,n=e.title;return(0,u.jsxs)("div",{id:n,style:{marginTop:18},children:[(0,u.jsx)(r.Z,{sx:T.heading,children:(0,u.jsxs)("div",{children:[(0,u.jsx)("i",{className:t}),"\xa0\xa0",n]})}),(0,u.jsx)(o.Z,{style:{marginBottom:14}})]})},I=function(e){var t=e.children;return(0,u.jsx)(s.Z,{justifyContent:"flex-start",style:{marginTop:"10px"},container:!0,spacing:2,children:t})};function W(){return(0,u.jsx)(a.Z,{in:!0,timeout:500,children:(0,u.jsxs)("div",{children:[(0,u.jsx)(A,{icon:"fa-solid fa-briefcase",title:"Employment"}),(0,u.jsx)(I,{children:(0,u.jsxs)(c.Z,(0,i.Z)((0,i.Z)({},h.meta),{},{size:12,children:[(0,u.jsx)(l.Z,{icon:"fa-solid fa-circle-info",title:"Info",children:(0,u.jsx)(h.components.MoreInfo,{})}),(0,u.jsx)(l.Z,{icon:"fa-solid fa-star",title:"Welcoming",children:(0,u.jsx)(h.components.Welcoming,{})})]}))}),(0,u.jsx)(A,{icon:"fa-solid fa-table-columns",title:"Organizations"}),(0,u.jsxs)(I,{children:[(0,u.jsxs)(c.Z,(0,i.Z)((0,i.Z)({prechildren:(0,u.jsx)(l.Z,{icon:"fa-solid fa-video",title:"Videos",children:(0,u.jsx)(j.components.Lectures,{})})},j.meta),{},{children:[(0,u.jsx)(l.Z,{icon:"fa-solid fa-images",title:"Gallery",children:(0,u.jsx)(j.components.Pictures,{})}),(0,u.jsx)(l.Z,{icon:"fa-solid fa-code",title:"Code",children:(0,u.jsx)(j.components.Contribs,{})}),(0,u.jsx)(l.Z,{icon:"fa-solid fa-arrow-up-right-from-square",title:"Links",children:(0,u.jsx)(j.components.Links,{})})]})),(0,u.jsx)(c.Z,(0,i.Z)((0,i.Z)({prechildren:(0,u.jsx)(l.Z,{icon:"fa-solid fa-video",title:"Videos",children:(0,u.jsx)(g.components.Lectures,{})})},g.meta),{},{children:(0,u.jsx)(l.Z,{icon:"fa-solid fa-arrow-up-right-from-square",title:"Links",children:(0,u.jsx)(g.components.Links,{})})})),(0,u.jsxs)(c.Z,(0,i.Z)((0,i.Z)({prechildren:(0,u.jsx)(l.Z,{icon:"fa-solid fa-video",title:"Videos",children:(0,u.jsx)(y.components.Lectures,{})})},y.meta),{},{children:[(0,u.jsx)(l.Z,{icon:"fa-solid fa-code",title:"Code",children:(0,u.jsx)(y.components.Contribs,{})}),(0,u.jsx)(l.Z,{icon:"fa-solid fa-arrow-up-right-from-square",title:"Links",children:(0,u.jsx)(y.components.Links,{})})]}))]}),(0,u.jsx)(A,{icon:"fa-solid fa-graduation-cap",title:"Education"}),(0,u.jsxs)(I,{children:[(0,u.jsxs)(c.Z,(0,i.Z)((0,i.Z)({prechildren:(0,u.jsx)(l.Z,{icon:"fa-solid fa-map",title:"Coursework",children:(0,u.jsx)(S.components.Coursework,{})})},S.meta),{},{children:[(0,u.jsx)(l.Z,{icon:"fa-solid fa-award",title:"Awards",children:(0,u.jsx)(S.components.Awards,{})}),(0,u.jsx)(l.Z,{icon:"fa-solid fa-ranking-star",title:"GPA",children:(0,u.jsx)(S.components.Grade,{})})]})),(0,u.jsxs)(c.Z,(0,i.Z)((0,i.Z)({prechildren:(0,u.jsx)(l.Z,{icon:"fa-solid fa-map",title:"Coursework",children:(0,u.jsx)(D.components.Coursework,{})})},D.meta),{},{children:[(0,u.jsx)(l.Z,{icon:"fa-solid fa-award",title:"Awards",children:(0,u.jsx)(D.components.Awards,{})}),(0,u.jsx)(l.Z,{icon:"fa-solid fa-ranking-star",title:"GPA",children:(0,u.jsx)(D.components.Grade,{})}),(0,u.jsx)(l.Z,{icon:"fa-solid fa-table-columns",title:"Organizations",children:(0,u.jsx)(D.components.Organizations,{})})]}))]})]})})}}}]);
//# sourceMappingURL=623.e7ca789e.chunk.js.map