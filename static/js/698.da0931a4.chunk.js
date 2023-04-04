"use strict";(self.webpackChunksocialjet=self.webpackChunksocialjet||[]).push([[698],{6698:function(n,e,a){a.r(e);var r,t,i,s,o,c,l,d,x=a(9439),g=a(168),f=a(6444),h=a(7087),p=a(2912),u=a(7337),v=a(9361),m=a(7547),j=a(946),b=a(2435),k=a(6942),y=a(360),z=a(498),w=a(2791),Z=a(184),C=f.ZP.section(r||(r=(0,g.Z)(["\n  overflow: hidden;\n  background: radial-gradient(\n      87.41% 29.55% at 49.09% 103.28%,\n      #06a5d8 20.47%,\n      rgba(0, 51, 233, 0.637795) 59.04%,\n      rgba(41, 1, 157, 0) 100%\n    ),\n    radial-gradient(\n      68.14% 62.26% at 42.1% -14.94%,\n      #ecbbc3 0%,\n      rgba(200, 62, 198, 0.637795) 57.81%,\n      rgba(160, 9, 230, 0) 100%\n    ),\n    #29009c;\n\n  padding: 70px 0 70px;\n  border-radius: 30px;\n\n  & > div > p {\n    text-align: center;\n    margin: 0 auto;\n  }\n"]))),_=(0,f.ZP)(p.Rn)(t||(t=(0,g.Z)(["\n  margin-bottom: 30px;\n  font-size: 26px;\n"]))),L=f.ZP.div(i||(i=(0,g.Z)(["\n  position: relative;\n  margin-top: 80px;\n  margin-bottom: 50px;\n  width: 100%;\n  min-height: 70vw;\n"]))),N=f.ZP.div(s||(s=(0,g.Z)(["\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n\n  margin: 0 auto;\n  overflow: hidden;\n  max-width: 90vw;\n  height: fit-content;\n  width: 100%;\n  border-radius: 14px;\n  outline: 5px solid #ffffff22;\n\n  background: radial-gradient(\n    240.7% 80.8% at 107.77% 65.48%,\n    #a927ca 0%,\n    #d72f75 41.67%,\n    #e79079 76.04%,\n    #e3592f 98.44%\n  );\n\n  img {\n    width: 100%;\n    margin-bottom: -5px;\n  }\n\n  transition: 0.5s;\n  opacity: 0;\n\n  &.prev {\n    transform: translateX(-70%) rotate(-2.5deg);\n    opacity: 0.5;\n    z-index: 1;\n  }\n\n  &.active {\n    z-index: 2;\n    opacity: 1;\n    transform: translateX(-50%) rotate(0.5deg);\n  }\n\n  &.next {\n    transform: translateX(-30%) translateY(7%) rotate(3.5deg);\n    opacity: 0.5;\n    z-index: 1;\n  }\n"]))),A=f.ZP.div(o||(o=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  margin: 0 auto;\n  margin-top: 50px;\n  width: 100%;\n"]))),X=f.ZP.div(c||(c=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 20px;\n  gap: 10px;\n  width: fit-content;\n  border-radius: 51px;\n\n  p {\n    font-size: 12px;\n  }\n\n  ","\n"])),(function(n){switch(n.color){case"orange":return"\n        background: #e3592f;\n        box-shadow: inset 0px 0px 38px rgba(255, 255, 255, 0.29);\n        transform: rotate(2.17deg); ";case"pink":return"\n        background: #D72F75;\n        box-shadow: inset 0px 0px 38px rgba(255, 255, 255, 0.29);\n        transform: translateX(-10%) rotate(-3.1deg); ";case"yellow":return"\n        background: #EBA050;\n        box-shadow: inset 0px 0px 38px rgba(255, 255, 255, 0.29);\n        transform:  translateX(10%) rotate(1.84deg); ";case"whiteblue":return"\n        background: #0079E6;\n        box-shadow: inset 0px 0px 38px rgba(255, 255, 255, 0.29);\n        transform:  translateX(-30%) rotate(-2.89deg); ";case"violet":return"\n        background: #9C00E8;\n        box-shadow: inset 0px 0px 38px rgba(255, 255, 255, 0.29);\n        transform:  translateX(10%)  rotate(1.84deg); ";case"blue":return"\n        background: #1010F2;\n        box-shadow: inset 0px 0px 38px rgba(255, 255, 255, 0.29);\n        transform:  translateX(-10%)  rotate(-3.91deg); "}})),P=(0,f.ZP)(h.LazyLoadImage)(l||(l=(0,g.Z)(["\n  max-width: 35px;\n"]))),F=f.ZP.div(d||(d=(0,g.Z)(["\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  gap: 15px;\n\n  & > div {\n    position: relative;\n    width: 4px;\n    height: 4px;\n    border-radius: 10px;\n    background-color: #ffffff60;\n\n    svg {\n      display: none;\n      pointer-events: none;\n    }\n\n    &.active {\n      background-color: #fff;\n\n      svg {\n        display: block;\n\n        animation: circle 6s linear;\n\n        @keyframes circle {\n          0% {\n            stroke-dashoffset: 0;\n          }\n          100% {\n            stroke-dashoffset: 62;\n          }\n        }\n      }\n    }\n\n    svg {\n      position: absolute;\n      top: 0;\n      left: 0;\n      transform: translate(-50%, -50%) scale(0.4);\n      transform-origin: center;\n      transition: storke-dashoffset 0.3s;\n\n      .progress-ring__circle {\n        stroke-dasharray: 62, 62;\n      }\n    }\n  }\n"])));e.default=function(n){n.language;var e=(0,w.useRef)(null),a=(0,w.useRef)(null),r=(0,w.useState)(1),t=(0,x.Z)(r,2),i=t[0],s=t[1];return(0,w.useEffect)((function(){var n=e.current.querySelectorAll("div");n.forEach((function(n,e){n.classList.remove("prev"),n.classList.remove("next")})),n.forEach((function(e,a){if(e.classList.contains("active")){var r=n[a-1],t=n[a+1];r&&r.classList.add("prev"),t&&t.classList.add("next")}})),setTimeout((function(){s(4==i?1:i+1)}),6e3)}),[i]),(0,Z.jsx)(C,{children:(0,Z.jsxs)(p.i2,{children:[(0,Z.jsxs)(_,{children:["\u041a\u0430\u043a \u0431\u0443\u0434\u0435\u0442 ",(0,Z.jsx)("br",{})," \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c ",(0,Z.jsx)("br",{})," \u0432\u0430\u0448\u0430 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f"]}),(0,Z.jsxs)(L,{ref:e,children:[(0,Z.jsx)(N,{className:1==i?"active":"",active:1==i,onClick:function(){s(1)},children:(0,Z.jsx)(h.LazyLoadImage,{src:y,alt:"Future",loading:"lazy"})}),(0,Z.jsx)(N,{className:2==i?"active":"",active:2==i,onClick:function(){s(2)},children:(0,Z.jsx)(h.LazyLoadImage,{src:z,alt:"Future",loading:"lazy"})}),(0,Z.jsx)(N,{className:3==i?"active":"",active:3==i,onClick:function(){s(3)},children:(0,Z.jsx)(h.LazyLoadImage,{src:y,alt:"Future",loading:"lazy"})}),(0,Z.jsx)(N,{className:4==i?"active":"",active:4==i,onClick:function(){s(4)},children:(0,Z.jsx)(h.LazyLoadImage,{src:z,alt:"Future",loading:"lazy"})}),(0,Z.jsxs)(F,{ref:a,children:[(0,Z.jsx)("div",{onClick:function(){s(1)},className:1==i?"active":"",children:(0,Z.jsx)("svg",{width:"120",height:"120",children:(0,Z.jsx)("circle",{className:"progress-ring__circle",stroke:"#A927CA",strokeWidth:"2",cx:"65",cy:"65",r:"10",fill:"transparent"})})}),(0,Z.jsx)("div",{onClick:function(){s(2)},className:2==i?"active":"",children:(0,Z.jsx)("svg",{width:"120",height:"120",children:(0,Z.jsx)("circle",{className:"progress-ring__circle",stroke:"#A927CA",strokeWidth:"2",cx:"65",cy:"65",r:"10",fill:"transparent"})})}),(0,Z.jsx)("div",{onClick:function(){s(3)},className:3==i?"active":"",children:(0,Z.jsx)("svg",{width:"120",height:"120",children:(0,Z.jsx)("circle",{className:"progress-ring__circle",stroke:"#A927CA",strokeWidth:"2",cx:"65",cy:"65",r:"10",fill:"transparent"})})}),(0,Z.jsx)("div",{onClick:function(){s(4)},className:4==i?"active":"",children:(0,Z.jsx)("svg",{width:"120",height:"120",children:(0,Z.jsx)("circle",{className:"progress-ring__circle",stroke:"#A927CA",strokeWidth:"2",cx:"65",cy:"65",r:"10",fill:"transparent"})})})]})]}),(0,Z.jsx)(_,{children:"\u0410 \u0447\u0442\u043e \u0435\u0449\u0435?"}),(0,Z.jsxs)(p.xv,{fix_size:"12",size:"12",children:["\u0412\u043c\u0435\u0441\u0442\u043e \u043e\u0431\u044b\u0447\u043d\u044b\u0445 \u0441\u0441\u044b\u043b\u043e\u043a \u0432\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432 \u043d\u0435\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u043e\u0435",(0,Z.jsx)("br",{}),"\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u0438\u043c\u043e\u0432 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 ",(0,Z.jsx)("br",{})," \u043f\u0440\u043e\u043c\u043e-\u0444\u043e\u0440\u043c\u0430\u0442"]}),(0,Z.jsxs)(A,{children:[(0,Z.jsxs)(X,{color:"orange",children:[(0,Z.jsx)(P,{src:m.Z,alt:"Idea",loading:"lazy"}),(0,Z.jsx)(p.xv,{fix_size:"12",size:"12",children:"User-generated \u043a\u043e\u043d\u0442\u0435\u043d\u0442"})]}),(0,Z.jsxs)(X,{color:"pink",children:[(0,Z.jsx)(P,{src:v.Z,alt:"Card",loading:"lazy"}),(0,Z.jsx)(p.xv,{fix_size:"12",size:"12",children:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u043e\u043a"})]}),(0,Z.jsxs)(X,{color:"yellow",children:[(0,Z.jsx)(P,{src:b.Z,alt:"Loyalty",loading:"lazy"}),(0,Z.jsx)(p.xv,{fix_size:"12",size:"12",children:"\u041b\u043e\u044f\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0430\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u0438"})]}),(0,Z.jsxs)(X,{color:"whiteblue",children:[(0,Z.jsx)(P,{src:j.Z,alt:"Tag",loading:"lazy"}),(0,Z.jsx)(p.xv,{fix_size:"12",size:"12",children:"White label"})]}),(0,Z.jsxs)(X,{color:"violet",children:[(0,Z.jsx)(P,{src:k.Z,alt:"Crown",loading:"lazy"}),(0,Z.jsx)(p.xv,{fix_size:"12",size:"12",children:"\u0422\u043e\u043d\u043a\u0438\u0439 \u0442\u0430\u0440\u0433\u0435\u0442\u0438\u043d\u0433"})]}),(0,Z.jsxs)(X,{color:"blue",children:[(0,Z.jsx)(P,{src:u.Z,alt:"Document",loading:"lazy"}),(0,Z.jsx)(p.xv,{fix_size:"12",size:"12",children:"Full service"})]})]})]})})}}}]);
//# sourceMappingURL=698.da0931a4.chunk.js.map