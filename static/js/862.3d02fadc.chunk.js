"use strict";(self.webpackChunkstudy_project=self.webpackChunkstudy_project||[]).push([[862],{4862:function(n,e,s){s.r(e),s.d(e,{default:function(){return x}});var t=s(2791),i=s(6030),r=s(885),a=s(2444),o=s(9547),c=s(3154),l="Paginator_selectedPage__inu-G",u="Paginator_page__Bzy40",d="Paginator_btns__5oAXE",f=s(184),h=function(n){for(var e=n.isFetching,s=n.pageSize,h=n.currentPage,_=n.totalItemsCount,m=n.portionSize,j=(0,i.I0)(),v=[],x=Math.ceil(_/s),p=Math.ceil(x/m),g=(0,t.useState)(1),N=(0,r.Z)(g,2),w=N[0],C=N[1],b=(w-1)*m+1,U=w*m,k=1;k<=x;k++)v.push(k);var P=v.filter((function(n){return n>=b&&n<=U}));return(0,f.jsxs)("div",{className:d,children:[(0,f.jsx)("div",{children:e?(0,f.jsx)(c.Z,{}):null}),w>1&&(0,f.jsx)("button",{onClick:function(){return C(w-1)},children:"Down"}),P.map((function(n){return(0,f.jsx)("span",{onClick:function(e){j(function(n,e){return function(s){s((0,o.YA)(n)),s((0,o.vs)(!0)),(0,a.Rf)(n,e).then((function(n){s((0,o.HM)(n.data.items)),s((0,o.vs)(!1))}))}}(n,s))},className:h===n?l:u,children:n},n)})),w<p&&(0,f.jsx)("button",{onClick:function(){return C(w+1)},name:"next",children:"Next"})]})},_=s(801),m={mainWrapper:"Users_mainWrapper__mSNYg",content:"Users_content__lwG1E",users:"Users_users__5-09y",user:"Users_user__CCx2S",info:"Users_info__RJdwL",name:"Users_name__aqHdG",btns:"Users_btns__fP0-K",followed:"Users_followed__j006G",pages:"Users_pages__1LUt8"},j=s(3504),v=function(n){var e=n.id,s=n.photos,t=n.followed,r=n.status,c=n.name,l=(0,i.I0)();return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("div",{className:m.users,children:[(0,f.jsxs)("div",{className:m.user,children:[(0,f.jsx)(j.OL,{to:"../profile/".concat(e),children:(0,f.jsx)("img",{src:null!=s.small?s.small:"https://cdn1.ozone.ru/s3/multimedia-a/c1200/6064056070.jpg"})}),(0,f.jsx)("br",{}),(0,f.jsx)("div",{children:t?(0,f.jsx)("button",{className:m.followed,onClick:function(){var n;l((n=e,function(e){(0,a.j6)(n).then((function(s){0==s.data.resultCode&&e((0,o.fv)(n))}))}))},children:"unfollow"}):(0,f.jsx)("button",{className:m.followed,onClick:function(){var n;l((n=e,function(e){(0,a.lu)(n).then((function(s){0==s.data.resultCode&&e((0,o.ZN)(n)),e((0,o.YZ)(!1))}))}))},children:"follow"})})]}),(0,f.jsxs)("div",{className:m.info,children:[(0,f.jsxs)("div",{className:m.name,children:[(0,f.jsx)("div",{children:c}),(0,f.jsx)("div",{children:null!=r?r:"Here need a status"})]}),(0,f.jsxs)("div",{className:m.location,children:[(0,f.jsx)("div",{children:"Atlantic ocean"}),(0,f.jsx)("div",{children:"Bikini Bottom"})]})]})]},e)})},x=function(n){var e=(0,i.I0)(),s=(0,i.v9)(_.qZ),r=(0,i.v9)(_.b7),c=(0,i.v9)(_.FZ),l=(0,i.v9)(_.Rf),u=(0,i.v9)(_.jA);return(0,t.useEffect)((function(){0===l.length&&e(function(n,e){return function(s){(0,o.vs)(!0),(0,a.Rf)(n,e).then((function(n){s((0,o.HM)(n.data.items)),s((0,o.vs)(!1))}))}}(c,r))}),[]),(0,f.jsxs)("div",{className:m.mainWrapper,children:["Users",(0,f.jsx)("div",{className:m.content,children:(0,f.jsx)("div",{children:l.map((function(n){return(0,f.jsx)(v,{id:n.id,photos:n.photos,followed:n.followed,status:n.status,name:n.name},n.id)}))})}),(0,f.jsx)("div",{className:m.pages,children:(0,f.jsx)(h,{isFetching:u,pageSize:r,totalItemsCount:s,currentPage:c,portionSize:5})})]})}}}]);
//# sourceMappingURL=862.3d02fadc.chunk.js.map