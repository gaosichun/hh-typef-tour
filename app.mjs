import*as e from'three';import{OrbitControls as t}from'three/addons/controls/OrbitControls.js'
;import{RoomEnvironment as o}from'three/addons/environments/RoomEnvironment.js'
;import{RoundedBoxGeometry as a}from'three/addons/geometries/RoundedBoxGeometry.js';import*as n from'three';function l(e){let t=e>>>0
;return()=>(t=1664525*t+1013904223>>>0,t/4294967296)}function r(e){const t=new n.Color(e);return[255*t.r,255*t.g,255*t.b]}function i(e,t=0){
return`rgb(${0|Math.max(0,Math.min(255,e[0]+t))},${0|Math.max(0,Math.min(255,e[1]+.9*t))},${0|Math.max(0,Math.min(255,e[2]+.8*t))})`}function s(e,t=1,o=!0){
const a=new n.CanvasTexture(e);return a.wrapS=a.wrapT=n.RepeatWrapping,a.repeat.set(t,t),o&&(a.colorSpace=n.SRGBColorSpace),a.anisotropy=8,a}
function c(e,t=1,o=1024){const a=document.createElement('canvas');a.width=a.height=o;const n=a.getContext('2d'),s=l(t),c=r(e),d=o/8;for(let e=0;e<8;e++){
let t=-s()*o;for(;t<o;){const a=o*(.45+.6*s()),l=18*(s()-.5);n.fillStyle=i(c,l),n.fillRect(e*d,t,d,a);for(let o=0;o<26;o++){const o=e*d+s()*d,r=40*(s()-.5)
;n.strokeStyle=i(c,l+r),n.globalAlpha=.18+.2*s(),n.lineWidth=.6+1.6*s(),n.beginPath(),n.moveTo(o,t),
n.bezierCurveTo(o+8*(s()-.5),t+.33*a,o+8*(s()-.5),t+.66*a,o+6*(s()-.5),t+a),n.stroke()}s()<.25&&(n.globalAlpha=.25,n.fillStyle=i(c,-40),n.beginPath(),
n.ellipse(e*d+s()*d,t+s()*a,3+4*s(),8+10*s(),0,0,7),n.fill()),n.globalAlpha=1,n.fillStyle='rgba(0,0,0,0.28)',n.fillRect(e*d,t,d,2),t+=a}
n.fillStyle='rgba(0,0,0,0.3)',n.fillRect(e*d,0,1.5,o)}return a}function d(e,t=3,o=512){const a=document.createElement('canvas');a.width=a.height=o
;const n=a.getContext('2d'),s=l(t),c=r(e);n.fillStyle=i(c),n.fillRect(0,0,o,o);for(let e=0;e<340;e++){const e=s()*o,t=36*(s()-.5);n.strokeStyle=i(c,t),
n.globalAlpha=.15+.25*s(),n.lineWidth=.5+2*s(),n.beginPath(),n.moveTo(e,0),n.bezierCurveTo(e+20*(s()-.5),.33*o,e+20*(s()-.5),.66*o,e,o),n.stroke()}
return n.globalAlpha=1,a}function h(e='#f3f1ee',t='#8f8a85',o=7,a=1024,n=9){const r=document.createElement('canvas');r.width=r.height=a
;const i=r.getContext('2d'),s=l(o);i.fillStyle=e,i.fillRect(0,0,a,a);for(let e=0;e<40;e++){
const e=s()*a,t=s()*a,o=60+200*s(),n=i.createRadialGradient(e,t,0,e,t,o);n.addColorStop(0,'rgba(160,155,150,0.06)'),n.addColorStop(1,'rgba(160,155,150,0)'),
i.fillStyle=n,i.fillRect(e-o,t-o,2*o,2*o)}i.strokeStyle=t,i.lineCap='round';for(let e=0;e<n;e++){let e=s()*a,t=s()<.5?0:s()*a,o=s()*Math.PI*2;const n=.6+3.5*s()
;i.globalAlpha=.25+.5*s(),i.beginPath(),i.moveTo(e,t);for(let a=0;a<120;a++)o+=.5*(s()-.5),e+=10*Math.cos(o),t+=10*Math.sin(o),i.lineWidth=n*(.4+s()),
i.lineTo(e,t);i.stroke()}return i.globalAlpha=1,r}function f(e,t=14,o=11,a=256,n=!1){const i=document.createElement('canvas');i.width=i.height=a
;const s=i.getContext('2d'),c=l(o),d=r(e),h=s.createImageData(a,a);for(let e=0;e<a;e++)for(let o=0;o<a;o++){let l=(c()-.5)*t;n&&(l+=o%4<2!=e%4<2?4:-4)
;const r=4*(e*a+o);h.data[r]=d[0]+l,h.data[r+1]=d[1]+l,h.data[r+2]=d[2]+l,h.data[r+3]=255}return s.putImageData(h,0,0),i}function u(e,t,o=2,a=4,n=5,s=512){
const c=document.createElement('canvas');c.width=c.height=s;const d=c.getContext('2d'),h=l(n),f=r(e),u=s/o,p=s/a;for(let e=0;e<o;e++)for(let t=0;t<a;t++){
d.fillStyle=i(f,10*(h()-.5)),d.fillRect(e*u,t*p,u,p);for(let o=0;o<30;o++){d.fillStyle=`rgba(120,110,100,${.05*h()})`;const o=10+50*h()
;d.fillRect(e*u+h()*u,t*p+h()*p,o,.6*o)}}d.strokeStyle=t,d.lineWidth=3;for(let e=0;e<=o;e++)d.beginPath(),d.moveTo(e*u,0),d.lineTo(e*u,s),d.stroke()
;for(let e=0;e<=a;e++)d.beginPath(),d.moveTo(0,e*p),d.lineTo(s,e*p),d.stroke();return c}function p(e,t,o=9,a=512){
const n=f(e,10,o,a,!1),r=n.getContext('2d'),i=l(o);r.globalAlpha=.25,r.strokeStyle=t,r.lineWidth=3;for(let e=0;e<6;e++){r.beginPath();let e=0,t=i()*a
;for(r.moveTo(e,t);e<a;)e+=20,t+=30*(i()-.5),r.lineTo(e,t);r.stroke()}return r.globalAlpha=.12,r.lineWidth=16,r.strokeRect(24,24,a-48,a-48),r.globalAlpha=1,n}
function w(e=21,t=512,o=256,a=['#e9dfcf','#c9b598','#a88f72']){const n=document.createElement('canvas');n.width=t,n.height=o;const r=n.getContext('2d'),i=l(e)
;r.fillStyle=a[0],r.fillRect(0,0,t,o);for(let e=0;e<26;e++){r.fillStyle=a[1+e%2],r.globalAlpha=.25+.4*i(),r.beginPath();const n=i()*t,l=i()*o
;r.ellipse(n,l,20+70*i(),10+35*i(),3*i(),0,7),r.fill()}return r.globalAlpha=1,n}
var m=.0127,g=2.8,b=e=>(e-248)*m,y=e=>(e-140)*m,x=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&window.innerWidth<1100,M=new URLSearchParams(location.search),v=new e.WebGLRenderer({
antialias:!0,powerPreference:'high-performance',preserveDrawingBuffer:M.has('shot')});v.setPixelRatio(Math.min(window.devicePixelRatio,x?1.5:2)),
v.setSize(window.innerWidth,window.innerHeight),v.outputColorSpace=e.SRGBColorSpace,v.toneMapping=e.ACESFilmicToneMapping,v.toneMappingExposure=.82,
v.shadowMap.enabled=!0,v.shadowMap.type=e.PCFSoftShadowMap,v.shadowMap.autoUpdate=!1,document.getElementById('app').appendChild(v.domElement);var k=new e.Scene
;k.background=new e.Color('#2b2826');var S=new e.PMREMGenerator(v);k.environment=S.fromScene(new o,.04).texture,k.environmentIntensity=.28
;var P=new e.PerspectiveCamera(72,innerWidth/innerHeight,.05,200);P.rotation.order='YXZ'
;var E=new e.PerspectiveCamera(40,innerWidth/innerHeight,.1,300),C=t=>new e.MeshStandardMaterial(t),z={floor:C({roughness:.55}),wall:C({roughness:.92}),
ceiling:C({color:'#f3f0eb',roughness:.95}),accent:C({roughness:.85}),cabUpper:C({roughness:.6}),cabLower:C({roughness:.55}),wood:C({roughness:.6}),closet:C({
roughness:.6}),counter:C({roughness:.25}),marble:C({roughness:.18}),blackMarble:C({roughness:.15}),sofa:C({roughness:.95}),pillow:C({roughness:.95}),pillow2:C({
roughness:.95}),lounge:C({roughness:.9}),stool:C({roughness:.6}),dinChair:C({roughness:.85}),dinChair2:C({roughness:.85}),rug:C({roughness:1}),metal:C({
color:'#1c1c1c',roughness:.35,metalness:.8}),brass:C({color:'#b08a55',roughness:.35,metalness:.9}),steel:C({color:'#8d8c8a',roughness:.3,metalness:.85}),
glass:new e.MeshPhysicalMaterial({color:'#dfe8ea',roughness:.05,metalness:0,transparent:!0,opacity:.16,depthWrite:!1,side:e.DoubleSide}),
frosted:new e.MeshPhysicalMaterial({color:'#e8e6e0',roughness:.6,transparent:!0,opacity:.55,depthWrite:!1,side:e.DoubleSide}),tv:C({color:'#050505',
roughness:.12,metalness:.2}),panelDark:C({color:'#1b1b1c',roughness:.5}),bedding:C({roughness:1}),sheet:C({color:'#f1efea',roughness:1}),headboard:C({
roughness:.9}),tile:C({roughness:.5}),bathFloor:C({roughness:.45}),porcelain:C({color:'#f7f7f5',roughness:.12}),mirror:C({color:'#b9c3c7',roughness:.06,
metalness:.5,emissive:'#47524f',emissiveIntensity:.6}),black:C({color:'#111',roughness:.5}),led:new e.MeshBasicMaterial({color:'#fff1d6'}),
ledWarm:new e.MeshBasicMaterial({color:'#ffd9a8'}),curtain:C({color:'#f4f1ea',roughness:1,transparent:!0,opacity:.8,side:e.DoubleSide}),art:C({roughness:.9}),
plant:C({color:'#5d7048',roughness:.9}),flower:C({color:'#f5f2ea',roughness:.9}),book:C({color:'#3a3f46',roughness:.8}),white:C({color:'#f2f0ec',roughness:.7}),
washer:C({color:'#e9e9e7',roughness:.3})};z.tv.envMapIntensity=1.5;var L={1:{name:'方案一 · 浅色极简',floor:'#d9c6a8',wall:'#ece7df',accent:'#ebe5dc',accentGlow:0,
cabUpper:'#ecebe7',cabLower:'#97918a',wood:'#d3bf a2'.replace(' ',''),closet:'#e7e2d9',counter:'#efede9',sofa:'#ece6db',sofaRough:.95,pillow:'#f6f3ec',
pillow2:'#a9abaf',lounge:'#5d6884',loungeRough:.92,stool:'#9c8672',dinChair:'#ebe7e1',dinChair2:'#55585c',rug:'#e4ded3',rugLine:'#b9b2a6',bedding:'#a9adb2',
headboard:'#dcd7cf',tile:'#d8d1c6',bathFloor:'#cdc6bb',kitchenWall:null,art:['#e9dfcf','#cbb79a','#a99074']},2:{name:'方案二 · 暖调复古',floor:'#7d5b41',
wall:'#e5ddd1',accent:'#c06636',accentGlow:.35,cabUpper:'#ece8e1',cabLower:'#4b3427',wood:'#5b3d2b',closet:'#5e4130',counter:'#f1eeea',sofa:'#8e5a38',
sofaRough:.48,pillow:'#7b4c30',pillow2:'#9a6a48',lounge:'#3d2820',loungeRough:.45,stool:'#6b4a35',dinChair:'#dcd3c7',dinChair2:'#3a3a3c',rug:'#d9d2c7',
rugLine:'#a4998a',bedding:'#a5a6a8',headboard:'#b49b82',tile:'#d3c9bb',bathFloor:'#c6bcae',kitchenWall:'#5b3d2b',art:['#e7dccb','#c3ab8c','#9a7c5d']}},I={}
;var R=s(h('#f4f2ef','#8d8781',7,1024,10),1),T=s(h('#161515','#bdb7b0',4,512,14),1);z.marble.map=R,z.counter.map=R,z.blackMarble.map=T;var D=1,G=[]
;function W(t){D=t;const o=L[t],a=function(t){if(I[t])return I[t];const o=L[t],a={floor:s(c(o.floor,13*t),1),wood:s(d(o.wood,7*t),1),
closet:2===t?s(d(o.closet,17),1):null,cabLower:2===t?s(d(o.cabLower,19),1):null,sofa:s(f(o.sofa,1===t?16:8,3,256,1===t),6),
lounge:s(f(o.lounge,12,5,256,1===t),4),rug:s(p(o.rug,o.rugLine,4+t),1),tile:s(u(o.tile,'#bdb5a9',2,2,8),1),bathFloor:s(u(o.bathFloor,'#aaa196',2,2,9),1),
art:s(w(30+t,512,256,o.art),1)};return a.floor.repeat.set(3.6875,12.375),a.tile.repeat.set(1,1),a.bathFloor.repeat.set(4,4),
a.art.wrapS=a.art.wrapT=e.ClampToEdgeWrapping,a.art.repeat.set(1,1),a.rug.wrapS=a.rug.wrapT=e.ClampToEdgeWrapping,a.rug.repeat.set(1,1),I[t]=a
}(t),n=(e,t,o=null)=>{e.color.set(t),e.map=o,e.needsUpdate=!0};n(z.floor,'#ffffff',a.floor),n(z.wall,o.wall),n(z.accent,o.accent),
z.accent.emissive.set(o.accent),z.accent.emissiveIntensity=o.accentGlow,n(z.cabUpper,o.cabUpper),n(z.cabLower,a.cabLower?'#ffffff':o.cabLower,a.cabLower),
n(z.wood,'#ffffff',a.wood),n(z.closet,a.closet?'#ffffff':o.closet,a.closet),z.counter.color.set(o.counter),n(z.sofa,'#ffffff',a.sofa),
z.sofa.roughness=o.sofaRough,n(z.pillow,o.pillow),n(z.pillow2,o.pillow2),z.pillow.roughness=z.pillow2.roughness=o.sofaRough,n(z.lounge,'#ffffff',a.lounge),
z.lounge.roughness=o.loungeRough,n(z.stool,o.stool),n(z.dinChair,o.dinChair),n(z.dinChair2,o.dinChair2),n(z.rug,'#ffffff',a.rug),n(z.bedding,o.bedding),
n(z.headboard,o.headboard),z.headboard.roughness=2===t?.5:.95,n(z.tile,'#ffffff',a.tile),n(z.bathFloor,'#ffffff',a.bathFloor),n(z.art,'#ffffff',a.art),
Z&&(o.kitchenWall?Z.material=z.wood:Z.material=z.wall),G.forEach(e=>e.intensity=2===t?e.userData.i2:e.userData.i1),
document.querySelectorAll('[data-scheme]').forEach(e=>e.classList.toggle('on',+e.dataset.scheme===t)),document.getElementById('schemeName').textContent=o.name,
De()}var A=new e.Group;k.add(A);var B=new e.Group;k.add(B);var F=new e.Group;k.add(F);var $=[],j=[],U=new e.BoxGeometry(1,1,1);function X(e,t,o,a){$.push({
x1:Math.min(e,o),z1:Math.min(t,a),x2:Math.max(e,o),z2:Math.max(t,a)})}function V(t,o,n,l,r,i,s,c=A,d={}){
const h=d.round?new a(t,o,n,3,Math.min(d.round,t/2,o/2,n/2)):U,f=new e.Mesh(h,l);return d.round||f.scale.set(t,o,n),f.position.set(r,i+o/2,s),
f.castShadow=!1!==d.cast,f.receiveShadow=!0,c.add(f),f}function Y(e,t,o,a,n,l,r,i={}){
const s=b(Math.min(e,o)),c=b(Math.max(e,o)),d=y(Math.min(t,a)),h=y(Math.max(t,a)),f=V(c-s,l-n,h-d,r,(s+c)/2,n,(d+h)/2,i.parent||A,i)
;return i.collide&&X(s,d,c,h),i.plan&&j.push({x1:s,z1:d,x2:c,z2:h,kind:i.plan}),f}function q(e,t={}){return[t.px||e,t.nx||e,t.py||e,t.ny||e,t.pz||e,t.nz||e]}
function H(e,t,o,a,n={}){const l=n.px||n.nx||n.pz||n.nz?q(z.wall,n):z.wall;return Y(e,t,o,a,n.y0??0,n.y1??g,l,{collide:(n.y0??0)<1,plan:(n.y0??0)<1?'wall':null
})}function K(e,t,o,a,n=0,l=g,r=z.glass,i=!0){const s=Y(e,t,o,a,n,l,r,{cast:!1,collide:n<1,plan:n<1?'glass':null});if(s.receiveShadow=!1,s.renderOrder=2,i){
const r=Math.abs(o-e)<Math.abs(a-t),i=.03,s=b(Math.min(e,o)),c=b(Math.max(e,o)),d=y(Math.min(t,a)),h=y(Math.max(t,a)),f=(s+c)/2,u=(d+h)/2;if(r){
V(.04,i,h-d,z.metal,f,n,u),V(.04,i,h-d,z.metal,f,l-i,u);const e=Math.max(1,Math.round((h-d)/.9));for(let t=0;t<=e;t++)V(.045,l-n,i,z.metal,f,n,d+t*(h-d)/e)
}else{V(c-s,i,.04,z.metal,f,n,u),V(c-s,i,.04,z.metal,f,l-i,u);const e=Math.max(1,Math.round((c-s)/.9))
;for(let t=0;t<=e;t++)V(i,l-n,.045,z.metal,s+t*(c-s)/e,n,u)}}return s}function N(t,o,a,n,l,r,i,s=A,c=24){const d=new e.Mesh(new e.CylinderGeometry(t,o,a,c),n)
;return d.position.set(l,r+a/2,i),d.castShadow=!0,d.receiveShadow=!0,s.add(d),d}function O(t,o,a=0,n=0){const l=new e.Group;return l.position.set(b(t),n,y(o)),
l.rotation.y=a,A.add(l),l}var Z=null;function _(e,t){const o=O(e,t,Math.PI/2);V(.46,.06,.44,z.dinChair2,0,.44,0,o,{round:.02}),
V(.46,.4,.05,z.dinChair2,0,.5,.2,o,{round:.02}),[[-.2,-.18],[.2,-.18],[-.2,.18],[.2,.18]].forEach(([e,t])=>V(.02,.44,.02,z.wood,e,0,t,o)),
X(b(e)-.25,y(t)-.25,b(e)+.25,y(t)+.25)}function Q(e,t,o){const a=O(e,t,o);V(.42,.07,.4,z.stool,0,.66,0,a,{round:.03}),V(.42,.25,.05,z.stool,0,.74,.2,a,{
round:.02}),[[-.18,-.16],[.18,-.16],[-.18,.16],[.18,.16]].forEach(([e,t])=>V(.02,.66,.02,z.metal,e,0,t,a)),V(.38,.015,.015,z.metal,0,.25,-.16,a)}
function J(e,t,o,a){const n=O(e,t,o);V(.46,.08,.46,a,0,.44,0,n,{round:.035});V(.46,.38,.06,a,0,.5,.21,n,{round:.03}).rotation.x=-.12,
[[-.2,-.19],[.2,-.19],[-.2,.19],[.2,.19]].forEach(([e,t])=>V(.018,.44,.018,z.metal,e,0,t,n)),X(b(e)-.24,y(t)-.24,b(e)+.24,y(t)+.24)}function ee(t,o,a=1.6,n={}){
const l=2.05,r=b(713),i=y(o),s=new e.Group;if(s.position.set(r,0,i),A.add(s),V(.1,1.05,a+.3,z.headboard,-.06,0,0,s,{round:.04}),
V(l,.3,a,z.headboard,-1.135,.05,0,s,{round:.04}),V(l-.05,.24,a-.04,z.sheet,-1.135,.33,0,s,{round:.08}),V(1.271,.06,a+.06,z.bedding,-1.4015,.5,0,s,{round:.03}),
V(.25,.14,.42*a,z.sheet,-.3,.56,.23*-a,s,{round:.06}),V(.25,.14,.42*a,z.sheet,-.3,.56,.23*a,s,{round:.06}),[-1,1].forEach(t=>{
if(V(.45,.04,.42,z.wood,-.35,.5,t*(a/2+.38),s),V(.4,.2,.38,z.wood,-.35,.3,t*(a/2+.38),s),N(.05,.07,.12,z.white,-.35,.54,t*(a/2+.38)-.08*t,s,14),!n.noPendant){
N(.002,.002,g-1.25,z.metal,-.35,1.25,t*(a/2+.38),s,4),N(.035,.035,.12,z.metal,-.35,1.13,t*(a/2+.38),s,14)
;const o=new e.Mesh(new e.CircleGeometry(.03,12),z.ledWarm);o.rotation.x=Math.PI/2,o.position.set(-.35,1.125,t*(a/2+.38)),s.add(o)}}),
V(.03,1.05,a+1.5,z.wood,-.015,0,0,s,{cast:!1}),V(.02,g-1.12,a+1.6,z.white,-.01,1.08,0,s,{cast:!1}),n.art){V(.02,.62,1.2,z.art,-.035,1.55,0,s,{cast:!1})}
return V(.006,.01,a+1.5,z.led,-.04,1.05,0,s,{cast:!1}),X(r-.11-l,i-a/2-.6,r,i+a/2+.6),s}function te(e,t,o){const a=O(e,t,o);V(.38,.4,.55,z.porcelain,0,0,0,a,{
round:.12}),V(.38,.38,.16,z.porcelain,0,.38,.2,a,{round:.05}),X(b(e)-.3,y(t)-.3,b(e)+.3,y(t)+.3)}!function(){
const t=new e.Mesh(new e.PlaneGeometry(b(713)-b(248),y(1700)-y(140)),z.floor);t.rotation.x=-Math.PI/2,t.position.set((b(248)+b(713))/2,0,(y(140)+y(1700))/2),
t.receiveShadow=!0,A.add(t),Y(417,437,713,582,0,.004,z.bathFloor,{cast:!1}),Y(565,600,713,895,0,.004,z.bathFloor,{cast:!1}),Y(248,1700,713,1716,-.02,0,z.black,{
cast:!1}),Y(200,120,760,1720,g,2.92,z.ceiling,{parent:B}).castShadow=!0,Y(640,1175,713,1640,2.48,g,z.ceiling,{parent:B}),Y(636,1175,640,1640,2.46,g-.31,z.led,{
parent:B,cast:!1}),Y(297,1165,360,1640,g-.2,g,z.ceiling,{parent:B}),Y(358,1165,362,1640,g-.205,2.61,z.panelDark,{parent:B,cast:!1});const o=z.tile
;H(230,145,248,1700),Y(213,754,248,802,0,g,z.wall,{collide:!0,plan:'wall'}),Y(205,1640,262,1716,0,g,z.wall,{collide:!0,plan:'wall'}),H(322,145,400,161),
Y(230,128,250,161,0,g,z.wall,{collide:!0,plan:'wall'}),Y(205,120,250,135,2.1,g,z.wall),Y(250,145,322,161,2.13,g,z.wall),H(400,120,423,193),H(410,120,750,140),
H(713,120,735,437),H(713,437,735,582,{nx:o}),H(713,582,735,600),H(713,600,735,895,{nx:o}),H(713,895,735,1640),Y(713,754,747,802,0,g,z.wall,{collide:!0}),
Y(698,1640,760,1716,0,g,z.wall,{collide:!0,plan:'wall'}),K(262,1697,698,1703,0,g,z.glass,!1),
[262,297,373,455,538,617,698].forEach(e=>Y(e-2.5,1694,e+2.5,1706,0,g,z.metal)),Y(262,1694,698,1706,0,.06,z.metal),Y(262,1694,698,1706,g-.08,g,z.metal),
Y(455,1693,538,1707,0,g,z.metal,{cast:!1}).visible=!1,Y(410,140,713,190,0,g,z.closet,{collide:!0,plan:'furn'})
;for(let e=413;e<710;e+=37.5)Y(e,190,e+1,191,.05,2.75,z.panelDark,{cast:!1});Y(410,191,713,192,0,.05,z.panelDark,{cast:!1}),K(408,265,412,430),
Y(405,190,418,195,0,g,z.wall,{collide:!0}),Y(405,193,418,265,2.15,g,z.wall),H(403,430,713,437,{pz:o}),H(407,437,417,505,{px:o}),H(407,582,417,592,{px:o}),
Y(407,505,417,582,2.15,g,q(z.wall,{px:o})),H(407,582,560,600,{nz:o}),H(560,582,713,600,{nz:o,pz:o}),K(643,437,646,540),H(405,600,418,1163),H(555,600,565,725,{
px:o}),H(555,818,565,900,{px:o}),Y(555,725,565,818,2.15,g,q(z.wall,{px:o})),H(418,895,480,905),Y(480,895,552,905,2.15,g,z.wall),H(552,895,570,905,{nz:o}),
H(705,895,713,905,{nz:o}),Y(570,895,705,905,0,.62,q(z.wall,{nz:o}),{collide:!0,plan:'wall'}),Y(570,895,705,905,2.15,g,q(z.wall,{nz:o})),
K(570,898,705,902,.62,2.15,z.frosted),K(500,1155,700,1159),H(699,1155,713,1163),Y(418,1155,500,1163,2.15,g,z.wall);const a=z.closet,n=(e,t,o=299)=>{
Y(248,e,o,t,0,g,a,{collide:!0,plan:'furn'});const n=Math.max(1,Math.round((t-e)*m/.5));for(let a=1;a<n;a++){const l=e+a*(t-e)/n
;Y(o,l-.4,o+.6,l+.4,.05,2.75,z.panelDark,{cast:!1})}for(let a=0;a<n;a++){const l=e+(a+.5)*(t-e)/n;Y(o,l-.3,o+1.6,l+.3,.9,1.25,z.metal,{cast:!1})}
Y(o,e,o+.6,t,0,.06,z.panelDark,{cast:!1})};n(370,520),n(605,752),n(802,935),Y(248,520,323,600,0,g,z.closet,{collide:!0,plan:'furn'}).visible=!1,
Y(248,520,323,526,0,g,z.closet),Y(248,594,323,600,0,g,z.closet),Y(248,520,254,600,0,g,z.closet),V(.6,.85,.6,z.washer,b(288),.02,y(560)),
V(.6,.85,.6,z.washer,b(288),.9,y(560)),N(.18,.18,.02,z.black,b(311.7),.45,y(560)).rotation.z=Math.PI/2,
N(.18,.18,.02,z.black,b(311.7),1.33,y(560)).rotation.z=Math.PI/2,Y(254,526,323,594,1.8,g,z.closet),Y(248,935,299,940,0,g,a,{collide:!0}),
Y(248,1157,299,1165,0,g,a,{collide:!0,plan:'wall'}),Y(248,940,293,1157,.72,.76,z.wood,{collide:!0,plan:'furn'}),Y(248,940,268,1157,1.15,1.18,z.wood),
Y(248,940,268,1157,1.55,1.58,z.wood),Y(248,940,270,1157,1.95,g,a),Y(268,942,269,1155,1.92,1.94,z.led,{cast:!1})
;for(let e=0;e<9;e++)V(.03,.22+e%3*.03,.18,e%2?z.book:z.white,b(256),1.18,y(990+3.3*e),A,{cast:!1});_(318,985),_(318,1110),function(){const t=1167,o=1233
;Y(250,t,300,o,0,1.85,z.steel,{collide:!0,plan:'furn'}),Y(300,t+1,301,(t+o)/2-.5,.05,1.8,z.black,{cast:!1}),Y(300,(t+o)/2+.5,301,o-1,.05,1.8,z.black,{cast:!1}),
Y(300,1190,302,1192,.9,1.4,z.metal),Y(300,1208,302,1210,.9,1.4,z.metal),Y(250,t,300,o,1.85,g,z.wood),Y(248,1162,300,1167,0,g,z.wood),
Y(248,1233,300,1238,0,g,z.wood);const a=1238,n=1608;Y(250,a,296,n,.1,.88,z.cabLower,{collide:!0,plan:'furn'}),Y(250,a,294,n,0,.1,z.black,{cast:!1}),
Y(248,a,299,n,.88,.92,z.counter);for(let e=a+47;e<n;e+=47)Y(296,e-.3,296.6,e+.3,.12,.86,z.panelDark,{cast:!1});Y(296,a,296.6,n,.6,.61,z.panelDark,{cast:!1}),
Z=Y(248,a,249.5,n,.92,1.55,z.wall,{cast:!1}),Y(248,a,249.2,n,.92,1.5,z.accent,{cast:!1}).name='backsplash',Y(248,a,276,n,1.88,g,z.cabUpper,{plan:null})
;for(let e=a+46;e<n;e+=46)Y(276,e-.3,276.6,e+.3,1.9,2.78,z.panelDark,{cast:!1});Y(248,a,276,n,1.55,1.58,z.wood),Y(248,a,276,n,1.86,1.88,z.wood),
Y(270,a,271,n,1.845,1.855,z.led,{cast:!1}),Y(270,a,271,n,1.535,1.545,z.led,{cast:!1})
;for(let e=0;e<6;e++)N(.04,.04,.1+e%2*.05,z.white,b(262),1.58,y(1290+6*e),A,12);Y(256,1290,292,1340,.92,.93,z.tv,{cast:!1}),
Y(250,1288,276,1342,1.5,1.55,z.steel),Y(258,1460,290,1505,.905,.925,z.black,{cast:!1});const l=b(252),r=y(1482);N(.012,.015,.32,z.metal,l,.92,r,A,10),
V(.2,.02,.02,z.metal,l+.09,1.22,r),N(.12,.08,.06,z.white,b(270),.92,y(1420),A,16),[[-.04,.02],[.04,-.02],[0,.04]].forEach(([t,o])=>{
const a=new e.Mesh(new e.SphereGeometry(.035,12,8),C({color:'#e08a2a',roughness:.6}));a.position.set(b(270)+t,.99,y(1420)+o),A.add(a)}),
N(.07,.08,.2,z.white,b(268),.92,y(1560),A,16),Y(262,1608,300,1694,0,g,z.wood,{collide:!0,plan:'furn'}),Y(248,1608,262,1640,0,g,z.wood)
;const i=1293,s=1424,c=365,d=449;Y(c+4,i+3,d-2,s,0,.88,z.wood,{collide:!0,plan:'furn'}),Y(c,i,d,s,.88,.93,z.marble),Y(c,i,d,i+3.5,0,.88,z.marble),
Y(c,i,c+3.5,s,0,.88,z.marble),Y(378,s,449,1548,.73,.77,z.marble,{collide:!1,plan:'furn'}),Y(445,s,449,1548,0,.73,z.marble),Y(378,1544,449,1548,0,.73,z.marble),
X(b(378),y(s),b(449),y(1548)),N(.06,.05,.22,z.glass,b(410),.93,y(1360),A,16);for(let t=0;t<9;t++){const o=new e.Mesh(new e.SphereGeometry(.06,10,8),z.flower)
;o.position.set(b(410)+.08*Math.cos(t),1.2+.04*Math.sin(3*t),y(1360)+.08*Math.sin(t)),o.castShadow=!0,A.add(o)}N(.15,.09,.06,z.white,b(413),.77,y(1480),A,20),
Q(462,1327,-Math.PI/2),Q(462,1380,-Math.PI/2),J(360,1458,Math.PI/2,z.dinChair2),J(360,1516,Math.PI/2,z.dinChair),J(468,1458,-Math.PI/2,z.dinChair),
J(468,1516,-Math.PI/2,z.dinChair);const h=y(1305),f=y(1535),u=b(408);V(.07,.04,f-h,z.wood,u,1.95,(h+f)/2,B),V(.05,.006,f-h-.04,z.led,u,1.945,(h+f)/2,B,{cast:!1
}),V(.004,g-2,.004,z.metal,u,1.99,h+.1,B),V(.004,g-2,.004,z.metal,u,1.99,f-.1,B)}()}(),function(){Y(512,1270,690,1630,.002,.012,z.rug,{cast:!1}),function(){
const t=new e.Group;A.add(t);const o=b(522),a=.98,n=y(1300),l=y(1580),r=.42,i=(e,o,a,n,l=0)=>{const i=V(e,.2,o,z.sofa,a,r-.2+.02,n,t,{round:.08})
;return i.rotation.y=l,i};V(a,.24,l-n,z.sofa,o+.49,.02,(n+l)/2,t,{round:.06});const s=(l-n-a)/3;for(let e=0;e<3;e++)i(.76,s-.02,o+.49+.1,n+a+s*(e+.5))
;V(.24,.72,l-n,z.sofa,o+.12,.02,(n+l)/2,t,{round:.1});const c=b(668);V(c-o,.24,a,z.sofa,(o+c)/2,.02,n+.49,t,{round:.06}),
V(c-o,.72,.24,z.sofa,(o+c)/2,.02,n+.12,t,{round:.1});const d=(c-o-.24)/2;for(let e=0;e<2;e++)i(d-.02,.76,o+.24+d*(e+.5),n+.49+.1)
;V(a,.55,.22,z.sofa,o+.49,.02,l-.11,t,{round:.1});const h=(e,o,a,n)=>{const l=V(.5,.45,.16,n,e,.44,o,t,{round:.07});l.rotation.y=a,l.rotation.x=-.15}
;h(o+.33,n+.55,Math.PI/2-.5,z.pillow),h(o+.33,n+1.2,Math.PI/2,z.pillow2),h(o+.9,n+.33,.1,z.pillow),h(o+1.5,n+.33,-.1,z.pillow2),
V(.5,.03,.7,z.rug,o+.55,.44,l-.6,t,{round:.01}),X(o,n,o+a,l),X(o,n,c,n+a),j.push({x1:o,z1:n,x2:o+a,z2:l,kind:'furn'},{x1:o,z1:n,x2:c,z2:n+a,kind:'furn'})}()
;const t=[b(612),y(1430)],o=[b(642),y(1478)];N(.46,.46,.035,z.blackMarble,t[0],.36,t[1],A,40),N(.24,.26,.36,z.black,t[0],0,t[1],A,24),
N(.33,.33,.03,z.marble,o[0],.47,o[1],A,40),N(.11,.13,.47,z.black,o[0],0,o[1],A,20),X(t[0]-.45,t[1]-.45,o[0]+.33,o[1]+.33),
V(.28,.04,.2,z.book,t[0]-.12,.395,t[1]-.1),V(.24,.03,.17,z.white,t[0]-.12,.435,t[1]-.1),N(.04,.05,.22,z.glass,t[0]+.1,.395,t[1]+.05,A,12),function(e,t,o){
const a=O(e,t,o);V(.8,.22,.8,z.lounge,0,.12,0,a,{round:.06}),V(.8,.6,.18,z.lounge,0,.12,.33,a,{round:.07}).rotation.x=-.18,V(.14,.55,.85,z.lounge,-.36,0,0,a,{
round:.05}),V(.14,.55,.85,z.lounge,.36,0,0,a,{round:.05}),X(b(e)-.45,y(t)-.45,b(e)+.45,y(t)+.45)}(660,1590,-2.4);const a=b(690),n=y(1612)
;N(.13,.13,.03,z.metal,a,0,n,A,20),N(.01,.01,1.7,z.metal,a,.03,n,A,8),V(.6,.012,.012,z.metal,a-.3,1.72,n,A),N(.06,.08,.06,z.metal,a-.6,1.66,n,A,14)
;const l=1262,r=1600;Y(690,l,713,r,.3,2.15,z.cabUpper,{collide:!0,plan:'furn'}),Y(688,1360,690,1522,.62,1.95,z.panelDark,{cast:!1}),
Y(685,1380,688,1502,.82,1.62,z.tv,{cast:!1}),Y(689,l,690,r,.3,.31,z.ledWarm,{cast:!1}),Y(696,l,713,r,0,.3,z.panelDark,{cast:!1}),
Y(689,1308,690.2,1309,.32,2.14,z.panelDark,{cast:!1}),Y(710,l,713,r,2.15,2.48,z.accent,{cast:!1}),Y(700,r,713,1640,0,g,z.wood,{collide:!0}),
Y(700,1175,713,l,0,g,z.wood,{collide:!0});const i=new e.PlaneGeometry(1,g-.1,24,1),s=i.attributes.position
;for(let e=0;e<s.count;e++)s.setZ(e,.03*Math.sin(40*s.getX(e)));i.computeVertexNormals(),[[b(264)+.4,.8],[b(696)-.55,1.1]].forEach(([t,o])=>{
const a=new e.Mesh(i,z.curtain);a.scale.x=o,a.position.set(t,(g-.1)/2,y(1688)),A.add(a)}),Y(262,1684,698,1688,2.76,g,z.metal,{parent:B})
;const c=b(500),d=y(1670);N(.18,.15,.4,z.white,c,0,d,A,20);for(let t=0;t<14;t++){const o=new e.Mesh(new e.SphereGeometry(.16,10,8),z.plant)
;o.scale.set(1,.5,.6),o.position.set(c+.18*Math.cos(2.4*t),.6+t%5*.15,d+.18*Math.sin(2.4*t)),o.rotation.y=t,o.castShadow=!0,A.add(o)}X(c-.2,d-.2,c+.2,d+.2)}(),
ee(0,1032,1.6,{art:!0}),Y(470,950,640,1135,.002,.01,z.rug,{cast:!1}),Y(418,905,713,935,2.55,g,z.ceiling,{parent:B}),Y(418,935,713,936,2.53,g-.245,z.led,{
parent:B,cast:!1}),ee(0,312,1.5,{art:!1}),V(.02,.5,.9,z.art,b(713)-.04,1.5,y(312)),Y(418,330,470,425,0,.75,z.wood,{collide:!0,plan:'furn'}),function(){
const e=z.wood;Y(418,600,458,895,0,g,e,{collide:!0,plan:'furn'}),Y(458,600,555,640,0,g,e,{collide:!0,plan:'furn'})
;for(let e=.4;e<2.4;e+=.38)Y(458,642,555,643,e,e+.012,z.led,{cast:!1});for(let e=620;e<890;e+=40)Y(458,e,460,e+1,.05,2.75,z.metal,{cast:!1})
;K(459,610,461,890,.05,2.75,z.glass,!1),Y(460,610,461,890,1.75,1.76,z.ledWarm,{cast:!1})
;for(let e=0;e<4;e++)V(.28,.16,.28,e%2?z.white:z.headboard,b(480+19*e),1.3,y(620),A,{cast:!1});Y(485,700,530,800,0,.9,e,{collide:!0,plan:'furn'}),
Y(483,698,532,802,.9,.93,z.glass)}(),function(){Y(660,672,713,815,.25,.85,z.wood,{collide:!0,plan:'furn'}),Y(656,668,713,819,.85,.89,z.marble),
Y(663,674,713,813,.23,.25,z.ledWarm,{cast:!1}),Y(709,660,713,828,.89,2.5,z.marble,{cast:!1}),[705,780].forEach(t=>{const o=new e.Group
;o.position.set(b(708),1.55,y(t)),o.rotation.y=-Math.PI/2,A.add(o);const n=new e.Shape,l=.26,r=.5;n.moveTo(-l,-r),n.lineTo(l,-r),n.lineTo(l,r-l),
n.absarc(0,r-l,l,0,Math.PI,!1),n.lineTo(-l,-r);const i=new e.Mesh(new e.ExtrudeGeometry(n,{depth:.025,bevelEnabled:!1}),z.metal);i.position.z=-.04,o.add(i)
;const s=new e.Mesh(new e.ShapeGeometry(n),z.mirror);s.scale.set(.93,.95,1),o.add(s);const c=new e.Mesh(new a(.45,.12,.34,3,.04),z.porcelain)
;c.position.set(b(684)-b(708),.95-1.55,0),c.rotation.y=Math.PI/2,o.add(c),c.position.set(0,-.6,.27);V(.02,.02,.16,z.metal,0,0,0,o).position.set(0,-.25,.08)}),
te(690,628,-Math.PI/2);const t=new e.Mesh(new a(b(707)-b(567),.58,y(895)-y(830),4,.06),z.porcelain);t.position.set((b(567)+b(707))/2,.29,(y(830)+y(895))/2),
t.castShadow=t.receiveShadow=!0,A.add(t);const o=new e.Mesh(new a(b(700)-b(574),.05,y(888)-y(837),3,.04),C({color:'#c9d4d4',roughness:.05,metalness:.1}))
;o.position.set(t.position.x,.53,t.position.z),A.add(o),X(b(567),y(828),b(707),y(895)),j.push({x1:b(567),z1:y(828),x2:b(707),z2:y(895),kind:'furn'}),
N(.012,.012,.25,z.metal,b(690),.58,y(890),A,8),K(567,719,640,722),N(.12,.12,.01,z.metal,b(600),2.48,y(650),A,20),Y(565,600,566,719,0,g,z.tile,{cast:!1}),
Y(440,437,520,480,.3,.85,z.wood,{collide:!0,plan:'furn'}),Y(437,437,523,483,.85,.89,z.marble);const n=new e.Mesh(new a(.42,.12,.32,3,.04),z.porcelain)
;n.position.set(b(480),.95,y(455)),A.add(n),Y(445,437,515,439,1.1,1.9,z.mirror,{cast:!1}),te(572,452,Math.PI),N(.12,.12,.01,z.metal,b(680),2.48,y(510),A,20)}(),
function(){const t=new e.HemisphereLight('#fff7ec','#a8957e',.38);k.add(t);const o=new e.DirectionalLight('#ffe7c4',3.2),a=new e.Object3D
;a.position.set(b(480),0,y(1300)),k.add(a),o.target=a,o.position.set(b(480)-6,7.5,y(1300)+14),o.castShadow=!0,o.shadow.mapSize.set(x?1024:2048,x?1024:2048)
;const n=o.shadow.camera;n.left=-7,n.right=7,n.top=12,n.bottom=-12,n.near=1,n.far=40,o.shadow.bias=-4e-4,o.shadow.normalBias=.03,o.shadow.radius=4,k.add(o)
;const l=new e.DirectionalLight('#dfe9f5',.5);l.position.set(b(480),2,y(1700)+10),l.target=a,k.add(l)
;const r=[[600,1420,5.5],[410,1420,4.5],[300,1300,3],[330,760,3.2],[330,1050,3],[300,230,2.5],[570,1030,4],[570,300,3.5],[500,750,2.5],[640,760,3],[560,510,2.6]],i=x?7:r.length
;r.slice(0,i).forEach(([t,o,a],n)=>{const l=new e.PointLight('#ffd9b0',.75*a,6.5,1.6);l.position.set(b(t),g-.45,y(o)),
x||0!==n&&1!==n&&6!==n&&7!==n||(l.castShadow=!0,l.shadow.mapSize.set(512,512),l.shadow.bias=-.002,l.shadow.radius=6,l.shadow.camera.near=.1),k.add(l)}),
[[b(258),1.25,y(1420),.6,2.2],[b(700),2.45,y(1430),0,3]].forEach(([t,o,a,n,l])=>{const r=new e.PointLight('#ff9b55',n,3.5,1.8);r.position.set(t,o,a),
r.userData={i1:n,i2:l},k.add(r),G.push(r)});const s=new e.CircleGeometry(.045,16)
;[[480,1250],[480,1600],[600,1250],[600,1620],[330,300],[330,500],[330,700],[330,900],[330,1100],[470,980],[470,1090],[520,300],[520,380],[640,650],[600,860],[500,650],[500,850],[480,510],[640,510],[280,200]].forEach(([t,o])=>{
const a=new e.Mesh(s,z.led);a.rotation.x=Math.PI/2,a.position.set(b(t),2.798-(t>636&&o>1175?.32:0),y(o)),B.add(a)})}(),function(){const t=s(function(e=2048){
const t=document.createElement('canvas');t.width=e,t.height=e/2;const o=t.getContext('2d'),a=l(42),n=e/2,r=o.createLinearGradient(0,0,0,n)
;r.addColorStop(0,'#8fb5dc'),r.addColorStop(.45,'#c6dbea'),r.addColorStop(.62,'#f3e6d2'),r.addColorStop(1,'#e8d7bf'),o.fillStyle=r,o.fillRect(0,0,e,n)
;const i=(t,l,r)=>{o.fillStyle=l,o.beginPath(),o.moveTo(0,n);let i=t;for(let n=0;n<=e;n+=16)i+=(a()-.5)*r,i=Math.min(t+40,Math.max(t-50,i)),o.lineTo(n,i)
;o.lineTo(e,n),o.fill()};i(.55*n,'#a9ad9f',14),i(.6*n,'#8f977f',12);for(let t=0;t<260;t++){
const t=10+50*a(),l=8+60*a()*(a()<.1?3:1),r=a()*e,i=.66*n-l+a()*n*.1,s=150+70*a();o.fillStyle=`rgb(${s},${s-6},${s-16})`,o.fillRect(r,i,t,l+n),
o.fillStyle='rgba(255,255,255,0.18)';for(let e=0;e<l;e+=6)o.fillRect(r+2,i+e,t-4,1.5)}
for(let t=0;t<500;t++)o.fillStyle=`rgba(${70+30*a()},${90+30*a()},${60+20*a()},0.9)`,o.beginPath(),o.arc(a()*e,.74*n+a()*n*.26,4+10*a(),0,7),o.fill();return t
}(),1);t.wrapS=t.wrapT=e.ClampToEdgeWrapping;const o=new e.Mesh(new e.PlaneGeometry(90,45),new e.MeshBasicMaterial({map:t,toneMapped:!1,color:'#f2f2f2'}))
;o.position.set(b(480),-6,y(1700)+26),o.rotation.y=Math.PI,F.add(o);const a=new e.Mesh(new e.PlaneGeometry(200,200),new e.MeshBasicMaterial({color:'#8b8a7c'}))
;a.rotation.x=-Math.PI/2,a.position.y=-28,F.add(a)}(),Y(180,1706,790,1730,g,3.4,z.wall),Y(180,1706,790,1730,-1.2,0,z.wall);var oe=[{id:'living',name:'客厅',
ox:470,oy:1655,yaw:-.55,lx:610,ly:1450},{id:'dining',name:'餐厅',ox:560,oy:1250,yaw:2.2,lx:410,ly:1470},{id:'master',name:'主卧',ox:440,oy:1040,yaw:-Math.PI/2,
lx:560,ly:1030},{id:'second',name:'次卧',ox:440,oy:360,yaw:-1.3,lx:560,ly:300},{id:'wic',name:'衣帽间',ox:515,oy:880,yaw:.15,lx:505,ly:760},{id:'bath',name:'主卫',
ox:572,oy:772,yaw:-Math.PI/2+.25,lx:640,ly:760},{id:'bath2',name:'次卫',ox:360,oy:545,yaw:-Math.PI/2,lx:560,ly:510},{id:'kitchen',name:'厨房',ox:345,oy:1600,
yaw:.05,lx:275,ly:1400},{id:'entry',name:'入户',ox:290,oy:200,yaw:Math.PI,lx:290,ly:230}],ae={mode:'orbit',yaw:0,pitch:0,pos:new e.Vector3(b(470),1.6,y(1655)),
keys:{},joy:{x:0,y:0},tween:null},ne=.22,le=new t(E,v.domElement);function re(e){for(let t=0;t<2;t++)for(const t of $){
const o=Math.max(t.x1,Math.min(e.x,t.x2)),a=Math.max(t.z1,Math.min(e.z,t.z2)),n=e.x-o,l=e.z-a,r=n*n+l*l;if(r<.0484)if(r>1e-8){const t=Math.sqrt(r);e.x=o+n/t*ne,
e.z=a+l/t*ne}else{const o=e.x-t.x1,a=t.x2-e.x,n=e.z-t.z1,l=t.z2-e.z,r=Math.min(o,a,n,l);r===o?e.x=t.x1-ne:r===a?e.x=t.x2+ne:e.z=r===n?t.z1-ne:t.z2+ne}}}
function ie(e,t={}){ae.mode=e,B.visible='walk'===e,F.visible='walk'===e,le.enabled='orbit'===e,document.body.classList.toggle('walk','walk'===e),
document.body.classList.toggle('orbit','orbit'===e),document.getElementById('modeBtn').textContent='walk'===e?'鸟瞰模式':'漫游模式',
'orbit'===e&&document.pointerLockElement&&document.exitPointerLock()}function se(e,t=!1){const o='string'==typeof e?oe.find(t=>t.id===e):e,a={x:b(o.ox),
z:y(o.oy),yaw:o.yaw};'walk'!==ae.mode&&(ie('walk'),t=!0),t?(ae.pos.set(a.x,1.6,a.z),ae.yaw=a.yaw,ae.pitch=-.05,ae.tween=null):ae.tween={from:{x:ae.pos.x,
z:ae.pos.z,yaw:ae.yaw,pitch:ae.pitch},to:a,t:0},document.querySelectorAll('[data-room]').forEach(e=>e.classList.toggle('on',e.dataset.room===o.id))}
le.target.set(b(480),.8,y(920)),E.position.set(b(480)+11,15,y(920)+9),le.enableDamping=!0,le.maxPolarAngle=.47*Math.PI,le.minDistance=4,le.maxDistance=40,
le.update(),addEventListener('keydown',e=>{ae.keys[e.code]=!0,'KeyV'!==e.code&&'Tab'!==e.code||(e.preventDefault(),ve()),'Digit1'===e.code&&W(1),
'Digit2'===e.code&&W(2)}),addEventListener('keyup',e=>{ae.keys[e.code]=!1}),addEventListener('blur',()=>{ae.keys={}});var ce=v.domElement,de=!1,he=0,fe=0
;function ue(e,t,o){ae.yaw-=e*o,ae.pitch=Math.max(-1.3,Math.min(1.3,ae.pitch-t*o)),ae.tween=null}ce.addEventListener('mousedown',e=>{if('walk'===ae.mode){
if(ce.requestPointerLock&&!document.pointerLockElement&&!x)try{const e=ce.requestPointerLock();e&&e.catch&&e.catch(()=>{})}catch(e){}de=!0,he=e.clientX,
fe=e.clientY}}),addEventListener('mouseup',()=>de=!1),addEventListener('mousemove',e=>{
'walk'===ae.mode&&(document.pointerLockElement===ce?ue(e.movementX,e.movementY,.0022):de&&(ue(e.clientX-he,e.clientY-fe,.004),he=e.clientX,fe=e.clientY))}),
document.addEventListener('pointerlockchange',()=>document.body.classList.toggle('locked',document.pointerLockElement===ce))
;var pe=document.getElementById('joy'),we=document.getElementById('knob'),me=null,ge=null,be={x:0,y:0},ye={x:0,y:0};function xe(e){
let t=e.clientX-be.x,o=e.clientY-be.y;const a=Math.hypot(t,o);a>50&&(t*=50/a,o*=50/a),we.style.transform=`translate(${t}px,${o}px)`,ae.joy={x:t/50,y:o/50},
ae.tween=null}function Me(){me=null,we.style.transform='',ae.joy={x:0,y:0}}function ve(){'walk'===ae.mode?ie('orbit'):ie('walk')}
pe.addEventListener('touchstart',e=>{e.preventDefault(),function(e){me=e.identifier;const t=pe.getBoundingClientRect();be={x:t.left+t.width/2,y:t.top+t.height/2
},xe(e)}(e.changedTouches[0])},{passive:!1}),ce.addEventListener('touchstart',e=>{
if('walk'===ae.mode)for(const t of e.changedTouches)null===ge&&(ge=t.identifier,ye={x:t.clientX,y:t.clientY})},{passive:!0}),addEventListener('touchmove',e=>{
for(const t of e.changedTouches)t.identifier===me?(e.preventDefault(),xe(t)):t.identifier===ge&&'walk'===ae.mode&&(ue(t.clientX-ye.x,t.clientY-ye.y,.006),ye={
x:t.clientX,y:t.clientY})},{passive:!1}),addEventListener('touchend',e=>{for(const t of e.changedTouches)t.identifier===me&&Me(),t.identifier===ge&&(ge=null)}),
addEventListener('touchcancel',()=>{Me(),ge=null});var ke=e=>document.getElementById(e);ke('modeBtn').onclick=()=>ve(),
document.querySelectorAll('[data-scheme]').forEach(e=>e.onclick=()=>W(+e.dataset.scheme));var Se=ke('rooms');oe.forEach(e=>{
const t=document.createElement('button');t.textContent=e.name,t.dataset.room=e.id,t.onclick=()=>se(e),Se.appendChild(t)}),
ke('helpBtn').onclick=()=>ke('intro').classList.remove('hidden'),ke('startBtn').onclick=()=>{ke('intro').classList.add('hidden')},ke('startWalk').onclick=()=>{
ke('intro').classList.add('hidden'),se('living',!0)},x&&document.body.classList.add('touch'),M.has('shot')&&document.body.classList.add('shot')
;var Pe=ke('labels'),Ee=oe.filter(e=>!['entry','kitchen'].includes(e.id)||!0).map(t=>{const o=document.createElement('div');return o.className='label',
o.textContent=t.name,o.onclick=()=>se(t),Pe.appendChild(o),{el:o,v:new e.Vector3(b(t.lx),1.2,y(t.ly))}
}),Ce=ke('minimap'),ze=Ce.getContext('2d'),Le=b(760)-b(200),Ie=y(1720)-y(110),Re=null,Te=1;function De(){
const e=Ce.clientHeight||260,t=Math.round(e*Le/Ie),o=Math.min(2,window.devicePixelRatio);Ce.width=t*o,Ce.height=e*o,Ce.style.width=t+'px',Te=e*o/Ie
;const a=document.createElement('canvas');a.width=Ce.width,a.height=Ce.height;const n=a.getContext('2d'),l=e=>(e-b(200))*Te,r=e=>(e-y(110))*Te
;n.fillStyle=1===D?'rgba(236,228,214,0.92)':'rgba(150,112,82,0.92)',n.fillRect(l(b(248)),r(y(140)),(b(713)-b(248))*Te,(y(1700)-y(140))*Te),j.forEach(e=>{
n.fillStyle='wall'===e.kind?'#2a2623':'glass'===e.kind?'#7fb3c9':'rgba(80,70,60,0.35)',
n.fillRect(l(e.x1),r(e.z1),Math.max(1.5,(e.x2-e.x1)*Te),Math.max(1.5,(e.z2-e.z1)*Te))}),n.fillStyle='#7fb3c9',
n.fillRect(l(b(262)),r(y(1697)),(b(698)-b(262))*Te,3*o),n.font=10*o+'px sans-serif',n.fillStyle=1===D?'#5a5048':'#fff3e6',n.textAlign='center',oe.forEach(e=>{
'entry'!==e.id&&n.fillText(e.name,l(b(e.lx)),r(y(e.ly)))}),Re=a}function Ge(){const e=innerWidth,t=innerHeight;v.setSize(e,t),P.aspect=E.aspect=e/t,
P.fov=e<t?80:72,P.updateProjectionMatrix(),E.updateProjectionMatrix(),De()}Ce.addEventListener('click',t=>{
const o=Ce.getBoundingClientRect(),a=Ce.width/o.width,n=(t.clientX-o.left)*a/Te+b(200),l=(t.clientY-o.top)*a/Te+y(110)
;if(n<b(250)||n>b(711)||l<y(142)||l>y(1695))return;const r=new e.Vector3(n,1.6,l);re(r);se({id:'mm',ox:r.x/m+248,oy:r.z/m+140,yaw:'walk'===ae.mode?ae.yaw:0})}),
addEventListener('resize',Ge);var We=new e.Clock,Ae=new e.Vector3,Be=new e.Vector3,Fe=new e.Vector3;var $e=0,je=0,Ue=0;W(+(M.get('scheme')||1)),ie('orbit'),
v.shadowMap.needsUpdate=!0,Ge(),M.has('nointro')&&ke('intro').classList.add('hidden'),M.get('room')&&se(M.get('room'),!0),
'walk'!==M.get('view')||M.get('room')||se('living',!0),ke('loading').classList.add('hidden'),function e(){const t=Math.min(.05,We.getDelta());!function(e){
if('walk'===ae.mode){if(ae.tween){const t=ae.tween;t.t=Math.min(1,t.t+e/.9);const o=t.t<.5?2*t.t*t.t:1-Math.pow(-2*t.t+2,2)/2;let a=t.to.yaw-t.from.yaw
;a=Math.atan2(Math.sin(a),Math.cos(a)),ae.pos.x=t.from.x+(t.to.x-t.from.x)*o,ae.pos.z=t.from.z+(t.to.z-t.from.z)*o,ae.yaw=t.from.yaw+a*o,
ae.pitch=t.from.pitch+(-.05-t.from.pitch)*o,t.t>=1&&(ae.tween=null)}else{const t=ae.keys;let o=0,a=0;(t.KeyW||t.ArrowUp)&&(a+=1),(t.KeyS||t.ArrowDown)&&(a-=1),
t.KeyA&&(o-=1),t.KeyD&&(o+=1),t.ArrowLeft&&(ae.yaw+=1.8*e),t.ArrowRight&&(ae.yaw-=1.8*e),t.KeyQ&&(ae.yaw+=1.8*e),t.KeyE&&(ae.yaw-=1.8*e),o+=ae.joy.x,a-=ae.joy.y
;const n=Math.hypot(o,a);if(n>.05){const l=(t.ShiftLeft||t.ShiftRight?3.2:1.7)*Math.min(1,n);Ae.set(-Math.sin(ae.yaw),0,-Math.cos(ae.yaw)),
Be.set(Math.cos(ae.yaw),0,-Math.sin(ae.yaw)),Fe.copy(Ae).multiplyScalar(a/n).addScaledVector(Be,o/n).multiplyScalar(l*e);const r=Math.ceil(Fe.length()/.08)
;for(let e=0;e<r;e++)ae.pos.addScaledVector(Fe,1/r),re(ae.pos);ae.bob=(ae.bob||0)+e*l*5}}P.position.set(ae.pos.x,1.6+.012*Math.sin(ae.bob||0),ae.pos.z),
P.rotation.set(ae.pitch,ae.yaw,0)}else{le.update();const e=innerWidth,t=innerHeight;Ee.forEach(o=>{Fe.copy(o.v).project(E);const a=Fe.z<1
;o.el.style.display=a?'':'none',o.el.style.transform=`translate(-50%,-50%) translate(${(.5*Fe.x+.5)*e}px,${(.5*-Fe.y+.5)*t}px)`})}}(t),
v.render(k,'walk'===ae.mode?P:E),function(){if(!Re)return;ze.clearRect(0,0,Ce.width,Ce.height),ze.drawImage(Re,0,0)
;const e='walk'===ae.mode?ae.pos:E.position,t='walk'===ae.mode?ae.yaw:Math.atan2(E.position.x-le.target.x,E.position.z-le.target.z),o=(e.x-b(200))*Te,a=(e.z-y(110))*Te,n=Ce.width/Ce.clientWidth
;'walk'===ae.mode&&(ze.save(),ze.translate(o,a),ze.rotate(-t),ze.fillStyle='rgba(230,120,40,0.25)',ze.beginPath(),ze.moveTo(0,0),
ze.arc(0,0,28*n,-Math.PI/2-.6,-Math.PI/2+.6),ze.fill(),ze.fillStyle='#e66a1e',ze.beginPath(),ze.arc(0,0,4.5*n,0,7),ze.fill(),ze.restore())}(),$e++,
(je+=t)>1&&(Ue=$e/je,$e=0,je=0,ke('fps').textContent=Ue.toFixed(0)+' fps'),requestAnimationFrame(e)}(),window.__app={applyScheme:W,teleport:se,setMode:ie,
state:ae,colliders:$,renderer:v,scene:k};
