(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{8559:(e,s,t)=>{Promise.resolve().then(t.bind(t,6915))},6915:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>T});var r=t(5155),a=t(4999),i=t(1626),l=t(7410),n=t(8207),o=t(9257),c=t(8173),d=t.n(c),x=t(1714),h=t(2115),m=t(3463),p=t(9795);function u(){for(var e=arguments.length,s=Array(e),t=0;t<e;t++)s[t]=arguments[t];return(0,p.QP)((0,m.$)(s))}let f=h.forwardRef((e,s)=>{let{className:t,...a}=e;return(0,r.jsx)("div",{ref:s,className:u("rounded-lg border bg-card text-card-foreground shadow-sm",t),...a})});f.displayName="Card";let g=h.forwardRef((e,s)=>{let{className:t,...a}=e;return(0,r.jsx)("div",{ref:s,className:u("flex flex-col space-y-1.5 p-6",t),...a})});g.displayName="CardHeader";let j=h.forwardRef((e,s)=>{let{className:t,...a}=e;return(0,r.jsx)("div",{ref:s,className:u("text-2xl font-semibold leading-none tracking-tight",t),...a})});j.displayName="CardTitle",h.forwardRef((e,s)=>{let{className:t,...a}=e;return(0,r.jsx)("div",{ref:s,className:u("text-sm text-muted-foreground",t),...a})}).displayName="CardDescription";let y=h.forwardRef((e,s)=>{let{className:t,...a}=e;return(0,r.jsx)("div",{ref:s,className:u("p-6 pt-0",t),...a})});y.displayName="CardContent",h.forwardRef((e,s)=>{let{className:t,...a}=e;return(0,r.jsx)("div",{ref:s,className:u("flex items-center p-6 pt-0",t),...a})}).displayName="CardFooter";let v=e=>{let{title:s,description:t,icon:a}=e;return(0,r.jsx)(x.P.div,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:(0,r.jsxs)(f,{className:"bg-white shadow-lg hover:shadow-xl transition-shadow duration-300",children:[(0,r.jsxs)(g,{className:"space-y-2",children:[(0,r.jsx)("div",{className:"w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center",children:(0,r.jsx)(a,{className:"w-6 h-6 text-primary"})}),(0,r.jsx)(j,{className:"text-2xl text-gray-800",children:s})]}),(0,r.jsx)(y,{children:(0,r.jsx)("p",{className:"text-gray-600",children:t})})]})})};var N=t(5565);let w=()=>(0,r.jsxs)(d(),{href:"/",className:"flex items-center gap-2 text-2xl font-bold",children:[(0,r.jsx)(N.default,{src:"/logo.png",alt:"FutureMorph Logo",width:40,height:40}),(0,r.jsx)("span",{className:"text-primary",children:"FutureMorph"})]}),b=[{title:"AI-Powered Customer Service",description:"Implemented an AI chatbot that reduced customer service response times by 80% for a leading e-commerce company.",before:"/placeholder.svg?height=200&width=300",after:"/placeholder.svg?height=200&width=300"},{title:"Predictive Maintenance System",description:"Developed a machine learning model that predicts equipment failures, reducing downtime by 50% for a manufacturing client.",before:"/placeholder.svg?height=200&width=300",after:"/placeholder.svg?height=200&width=300"}],C=()=>(0,r.jsx)("div",{className:"flex overflow-x-auto space-x-6 py-4",children:b.map((e,s)=>(0,r.jsx)(x.P.div,{className:"flex-none w-80",initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{delay:.1*s},children:(0,r.jsxs)(f,{className:"h-full",children:[(0,r.jsx)(g,{children:(0,r.jsx)(j,{className:"text-xl text-primary",children:e.title})}),(0,r.jsxs)(y,{className:"space-y-4",children:[(0,r.jsx)("p",{className:"text-gray-600",children:e.description}),(0,r.jsxs)("div",{className:"flex space-x-2",children:[(0,r.jsx)("img",{src:e.before,alt:"Before",className:"w-1/2 h-auto rounded"}),(0,r.jsx)("img",{src:e.after,alt:"After",className:"w-1/2 h-auto rounded"})]})]})]})},s))});var A=t(5683),P=t(767),k=t(9271),F=t(1290);let S=(0,t(1027).F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),I=h.forwardRef((e,s)=>{let{className:t,variant:a,size:i,asChild:l=!1,...n}=e,o=l?F.DX:"button";return(0,r.jsx)(o,{className:u(S({variant:a,size:i,className:t})),ref:s,...n})});I.displayName="Button";let _=()=>{let[e,s]=(0,h.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x.P.div,{className:"fixed bottom-4 right-4 z-50",initial:{scale:0},animate:{scale:1},transition:{type:"spring",stiffness:260,damping:20},children:(0,r.jsx)(I,{className:"w-12 h-12 rounded-full bg-cta text-white shadow-lg",onClick:()=>s(!e),children:e?(0,r.jsx)(P.A,{}):(0,r.jsx)(k.A,{})})}),(0,r.jsx)(A.N,{children:e&&(0,r.jsx)(x.P.div,{className:"fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl z-50",initial:{opacity:0,y:50,scale:.3},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,scale:.5,transition:{duration:.2}},children:(0,r.jsxs)("div",{className:"p-4",children:[(0,r.jsx)("h3",{className:"text-lg font-semibold mb-2",children:"AI Assistant"}),(0,r.jsx)("p",{className:"text-gray-600 mb-4",children:"How can I help you today?"}),(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("input",{type:"text",placeholder:"Type your message...",className:"flex-grow border rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"}),(0,r.jsx)(I,{className:"rounded-l-none bg-primary text-white",children:"Send"})]})]})})})]})},H=e=>{let{children:s}=e;return(0,r.jsx)(x.P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{duration:.3},variants:{visible:{opacity:1,scale:1},hidden:{opacity:0,scale:.9}},children:s})};function T(){return(0,r.jsxs)("div",{className:"flex flex-col min-h-screen bg-[#F9F9F9]",children:[(0,r.jsx)(x.P.header,{className:"sticky top-0 w-full py-4 bg-white shadow-md z-50",initial:{y:-50,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5},children:(0,r.jsxs)("div",{className:"container flex items-center justify-between",children:[(0,r.jsx)(w,{}),(0,r.jsx)("nav",{className:"hidden md:flex items-center gap-8",children:["Home","About Us","Services","Case Studies","Contact"].map(e=>(0,r.jsx)(d(),{href:"#",className:"text-gray-600 hover:text-primary transition-colors",children:e},e))}),(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[(0,r.jsx)(x.P.a,{href:"https://linkedin.com/company/futuremorph",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,color:"#007BFF"},whileTap:{scale:.9},initial:{x:20,opacity:0},animate:{x:0,opacity:1},transition:{delay:.2},children:(0,r.jsx)(a.A,{className:"h-5 w-5"})}),(0,r.jsx)(x.P.a,{href:"https://github.com/futuremorph",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,color:"#6A0DAD"},whileTap:{scale:.9},initial:{x:20,opacity:0},animate:{x:0,opacity:1},transition:{delay:.3},children:(0,r.jsx)(i.A,{className:"h-5 w-5"})})]})]})}),(0,r.jsxs)("main",{className:"flex-1",children:[(0,r.jsxs)("section",{className:"w-full py-24 md:py-32 bg-gradient-to-r from-primary to-secondary overflow-hidden relative",children:[(0,r.jsx)("div",{className:"container px-4 md:px-6 relative z-10",children:(0,r.jsxs)(x.P.div,{className:"flex flex-col items-center text-center space-y-8",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5},children:[(0,r.jsx)("h1",{className:"text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl text-white",children:"Empowering Startups to Harness the Power of AI"}),(0,r.jsx)("p",{className:"mx-auto max-w-[700px] text-cyan-100 md:text-xl lg:text-2xl",children:"Transform your business with cutting-edge AI solutions"}),(0,r.jsx)(x.P.button,{className:"text-lg bg-cta text-white hover:bg-orange-600",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Schedule a Free Consultation"})]})}),(0,r.jsx)("div",{className:"absolute inset-0 z-0",children:(0,r.jsxs)("svg",{className:"w-full h-full",viewBox:"0 0 1000 1000",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"a",gradientTransform:"rotate(90)",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:"#007BFF",stopOpacity:"0.3"}),(0,r.jsx)("stop",{offset:"100%",stopColor:"#6A0DAD",stopOpacity:"0.3"})]})}),(0,r.jsx)("path",{d:"M0,1000 C200,800 300,600 500,600 C700,600 800,800 1000,1000",fill:"url(#a)",children:(0,r.jsx)("animate",{attributeName:"d",dur:"10s",repeatCount:"indefinite",values:" M0,1000 C200,800 300,600 500,600 C700,600 800,800 1000,1000; M0,1000 C200,900 300,800 500,700 C700,600 800,700 1000,1000; M0,1000 C200,800 300,600 500,600 C700,600 800,800 1000,1000 "})})]})})]}),(0,r.jsx)(H,{children:(0,r.jsx)("section",{className:"w-full py-20 bg-white",children:(0,r.jsxs)("div",{className:"container px-4 md:px-6",children:[(0,r.jsx)("h2",{className:"text-3xl font-bold text-center mb-12 text-gray-800",children:"Our Services"}),(0,r.jsxs)("div",{className:"grid md:grid-cols-3 gap-8",children:[(0,r.jsx)(v,{title:"AI Integration for Small Businesses",description:"Seamlessly integrate AI into your existing business processes to boost efficiency and productivity.",icon:l.A}),(0,r.jsx)(v,{title:"Custom NLP Solutions",description:"Harness the power of Natural Language Processing to understand and interact with your customers better.",icon:n.A}),(0,r.jsx)(v,{title:"Computer Vision Applications",description:"Implement cutting-edge computer vision technology to automate visual tasks and gain valuable insights.",icon:o.A})]})]})})}),(0,r.jsx)(H,{children:(0,r.jsx)("section",{className:"w-full py-20 bg-[#F9F9F9]",children:(0,r.jsxs)("div",{className:"container px-4 md:px-6",children:[(0,r.jsx)("h2",{className:"text-3xl font-bold text-center mb-12 text-gray-800",children:"Case Studies"}),(0,r.jsx)(C,{})]})})}),(0,r.jsx)("section",{className:"w-full py-20 bg-gradient-to-r from-primary to-secondary",children:(0,r.jsx)("div",{className:"container px-4 md:px-6",children:(0,r.jsxs)(x.P.div,{className:"flex flex-col items-center text-center space-y-8",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5},children:[(0,r.jsx)("h2",{className:"text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white",children:"Ready to transform your business?"}),(0,r.jsx)("p",{className:"mx-auto max-w-[700px] text-cyan-100 md:text-xl",children:"Let's discuss how our AI solutions can drive innovation and growth for your startup."}),(0,r.jsx)(x.P.button,{className:"text-lg bg-cta text-white hover:bg-orange-600",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Schedule a Free Consultation"})]})})})]}),(0,r.jsx)("footer",{className:"w-full py-12 bg-[#333333] text-white",children:(0,r.jsxs)("div",{className:"container px-4 md:px-6",children:[(0,r.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:[(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsx)("h3",{className:"text-lg font-semibold",children:"Company"}),(0,r.jsxs)("ul",{className:"space-y-2",children:[(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"#",className:"text-gray-300 hover:text-white transition-colors",children:"About Us"})}),(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"#",className:"text-gray-300 hover:text-white transition-colors",children:"Careers"})}),(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"#",className:"text-gray-300 hover:text-white transition-colors",children:"Press"})})]})]}),(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsx)("h3",{className:"text-lg font-semibold",children:"Services"}),(0,r.jsxs)("ul",{className:"space-y-2",children:[(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"#",className:"text-gray-300 hover:text-white transition-colors",children:"AI Integration"})}),(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"#",className:"text-gray-300 hover:text-white transition-colors",children:"NLP Solutions"})}),(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"#",className:"text-gray-300 hover:text-white transition-colors",children:"Computer Vision"})})]})]}),(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsx)("h3",{className:"text-lg font-semibold",children:"Resources"}),(0,r.jsxs)("ul",{className:"space-y-2",children:[(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"#",className:"text-gray-300 hover:text-white transition-colors",children:"Blog"})}),(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"#",className:"text-gray-300 hover:text-white transition-colors",children:"Case Studies"})}),(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"#",className:"text-gray-300 hover:text-white transition-colors",children:"Documentation"})})]})]}),(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsx)("h3",{className:"text-lg font-semibold",children:"Legal"}),(0,r.jsxs)("ul",{className:"space-y-2",children:[(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"#",className:"text-gray-300 hover:text-white transition-colors",children:"Privacy Policy"})}),(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"#",className:"text-gray-300 hover:text-white transition-colors",children:"Terms of Service"})}),(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"#",className:"text-gray-300 hover:text-white transition-colors",children:"Contact Us"})})]})]})]}),(0,r.jsxs)("div",{className:"mt-12 pt-8 border-t border-gray-700 flex justify-between items-center",children:[(0,r.jsx)("p",{children:"\xa9 2024 FutureMorph. All rights reserved."}),(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[(0,r.jsx)(x.P.a,{href:"https://linkedin.com/company/futuremorph",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,color:"#007BFF"},whileTap:{scale:.9},children:(0,r.jsx)(a.A,{className:"h-5 w-5"})}),(0,r.jsx)(x.P.a,{href:"https://github.com/futuremorph",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,color:"#6A0DAD"},whileTap:{scale:.9},children:(0,r.jsx)(i.A,{className:"h-5 w-5"})})]})]})]})}),(0,r.jsx)(_,{})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[661,441,517,358],()=>s(8559)),_N_E=e.O()}]);