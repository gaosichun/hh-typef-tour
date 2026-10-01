import*as e from'three';import{OrbitControls as t}from'three/addons/controls/OrbitControls.js'
;import{RoomEnvironment as a}from'three/addons/environments/RoomEnvironment.js'
;import{RoundedBoxGeometry as o}from'three/addons/geometries/RoundedBoxGeometry.js'
;import{EffectComposer as n,RenderPass as r,EffectPass as l,SMAAEffect as i,SMAAPreset as s,BloomEffect as c,ToneMappingEffect as d,ToneMappingMode as h,VignetteEffect as u}from'postprocessing'
;import{N8AOPostPass as p}from'n8ao';import*as m from'three';function f(e){let t=e>>>0;return()=>(t=1664525*t+1013904223>>>0,t/4294967296)}
function w(e,t=1,a=!0){const o=new m.CanvasTexture(e);return o.wrapS=o.wrapT=m.RepeatWrapping,o.repeat.set(t,t),a&&(o.colorSpace=m.SRGBColorSpace),
o.anisotropy=8,o}function g(e,t=14,a=11,o=256,n=!1){const r=document.createElement('canvas');r.width=r.height=o;const l=r.getContext('2d'),i=f(a),s=function(e){
const t=new m.Color(e);return[255*t.r,255*t.g,255*t.b]}(e),c=l.createImageData(o,o);for(let e=0;e<o;e++)for(let a=0;a<o;a++){let r=(i()-.5)*t
;n&&(r+=a%4<2!=e%4<2?4:-4);const l=4*(e*o+a);c.data[l]=s[0]+r,c.data[l+1]=s[1]+r,c.data[l+2]=s[2]+r,c.data[l+3]=255}return l.putImageData(c,0,0),r}
function y(e=128){const t=document.createElement('canvas');t.width=t.height=e;const a=t.getContext('2d'),o=a.createImageData(e,e)
;for(let t=0;t<e;t++)for(let a=0;a<e;a++){const n=a/e*2-1,r=t/e*2-1
;let l=Math.pow(Math.abs(n),6)*Math.sign(n)*1.6+.12*Math.sin(9*r+3*n),i=Math.pow(Math.abs(r),6)*Math.sign(r)*1.6+.12*Math.sin(8*n-2*r)
;(Math.abs(n)>.93||Math.abs(r)>.93)&&(l=.2*n,i=.2*r);const s=Math.hypot(l,i,1),c=4*(t*e+a);o.data[c]=255*(l/s*.5+.5),o.data[c+1]=255*(-i/s*.5+.5),
o.data[c+2]=255*(1/s*.5+.5),o.data[c+3]=255}return a.putImageData(o,0,0),t}import*as b from'three'
;import{GLTFLoader as M}from'three/addons/loaders/GLTFLoader.js';import{RGBELoader as x}from'three/addons/loaders/RGBELoader.js'
;import{unzipSync as v}from'fflate';var k=new b.LoadingManager,P={bytes:0,files:0}
;k.setURLModifier(e=>e.replace(/[/]Models[/]gltf[/]1k[/]([^/]+)[/]textures[/]/,'/Models/jpg/1k/$1/').replace(/[/]Models[/]gltf[/]1k[/]([^/]+)[/]([^/]+[.]bin)$/,'/Models/gltf/8k/$1/$2'))
;var S='https://dl.polyhaven.org/file/ph-assets/',E=new b.TextureLoader(k);E.setCrossOrigin('anonymous');var z=new M(k),C=8;function _(e){try{
const t=document.createElement('canvas');t.width=t.height=16;const a=t.getContext('2d');a.drawImage(e,0,0,16,16);const o=a.getImageData(0,0,16,16).data
;let n=0,r=0,l=0;for(let e=0;e<o.length;e+=4)n+=o[e],r+=o[e+1],l+=o[e+2];const i=o.length/4;return[n/i/255,r/i/255,l/i/255]}catch(e){return null}}
function L(e,t,a,o,n='#9d968d',r=3){const l=2048,i=document.createElement('canvas');i.width=i.height=l;const s=i.getContext('2d');let c=r
;const d=()=>(c=16807*c%2147483647)/2147483647,h=l/t,u=a*h,p=o*h;for(let t=0;t<l;t+=p)for(let a=0;a<l;a+=u){
const o=e.width*(.35+.2*d()),n=o*(p/u),r=d()*(e.width-o),l=d()*Math.max(1,e.height-n);s.drawImage(e,r,l,o,n,a,t,u,p),
s.fillStyle=d()<.5?`rgba(255,250,240,${.06*d()})`:`rgba(60,50,40,${.05*d()})`,s.fillRect(a,t,u,p)}s.fillStyle=n;for(let e=0;e<=l;e+=u)s.fillRect(e-1.5,0,3,l)
;for(let e=0;e<=l;e+=p)s.fillRect(0,e-1.5,l,3);return i}function D(e,t,a){return e.wrapS=e.wrapT=b.RepeatWrapping,e.repeat.set(1/t.size,1/(t.sizeV||t.size)),
t.rot&&(e.rotation=t.rot),e.anisotropy=C,e.colorSpace=a?b.SRGBColorSpace:b.NoColorSpace,e.needsUpdate=!0,e}var I={};var W=e=>new b.Color(e);function T(e,t,a){
if(e.userData.spec=t,e.color.copy(W(t.target||'#ffffff')),void 0!==t.rough&&(e.roughness=t.rough),!t.id)return e.map=e.normalMap=e.roughnessMap=e.aoMap=null,
e.needsUpdate=!0,void(a&&a());const o=function(e){const t=[e.src,e.id,e.res,e.size,e.rot,e.tiles].join('|');if(I[t])return I[t];const a={};if('ph'===e.src){
const t=e.res||'1k',o=`${S}Textures/jpg/${t}/${e.id}/${e.id}_`,n=e.nres||t,r=`${S}Textures/jpg/${n}/${e.id}/${e.id}_`,l=[],i=(t,a)=>new Promise(o=>{
E.load(t,t=>o(D(t,e,a)),void 0,()=>o(null))});!1!==e.diff&&l.push(i(`${o}diff_${t}.jpg`,!0).then(t=>{if(t)if(a.avg=_(t.image),e.tiles){
const o=new b.CanvasTexture(L(t.image,e.size,e.tiles[0],e.tiles[1],e.grout));D(o,e,!0),a.map=o,t.dispose()}else a.map=t})),
!1!==e.nor&&l.push(i(`${r}nor_gl_${n}.jpg`,!1).then(e=>a.normalMap=e)),!1!==e.arm&&l.push(i(`${r}${e.rgh?'rough':'arm'}_${n}.jpg`,!1).then(t=>(a.arm=t,
a.armHasAO=!e.rgh))),a.ready=Promise.all(l).then(()=>a)}else{
const t=`https://acg-download.struffelproductions.com/file/ambientCG-Web/download/${e.id}_${e.hash}/${e.id}_1K-JPG.zip`;k.itemStart(t),a.ready=fetch(t,{
mode:'cors'}).then(e=>{if(!e.ok)throw new Error(e.status);return e.arrayBuffer()}).then(async t=>{P.bytes+=t.byteLength;const o=v(new Uint8Array(t),{
filter:e=>/_(Color|NormalGL|Roughness)[.]jpg$/.test(e.name)}),n=async e=>{const t=Object.keys(o).find(t=>t.endsWith(e));if(!t)return null;const a=new Image
;return a.src=URL.createObjectURL(new Blob([o[t]],{type:'image/jpeg'})),await a.decode(),a
},[r,l,i]=await Promise.all([n('_Color.jpg'),n('_NormalGL.jpg'),n('_Roughness.jpg')]);if(r){a.avg=_(r)
;const t=e.tiles?L(r,e.size,e.tiles[0],e.tiles[1],e.grout):r;a.map=D(e.tiles?new b.CanvasTexture(t):new b.Texture(t),e,!0)}
return l&&!1!==e.nor&&(a.normalMap=D(new b.Texture(l),e,!1)),i&&(a.arm=D(new b.Texture(i),e,!1),a.armHasAO=!1),a
}).catch(t=>(console.warn('ambientCG load failed',e.id,t.message),a)).finally(()=>k.itemEnd(t))}return I[t]=a}(t);o.ready.then(()=>{if(e.userData.spec===t){
if(e.map=!1===t.diff?null:o.map||null,e.normalMap=o.normalMap||null,e.normalMap&&e.normalScale.set(t.ns||1,t.ns||1),e.roughnessMap=o.arm||null,
e.aoMap=o.arm&&o.armHasAO&&!1!==t.ao?o.arm:null,e.aoMapIntensity=t.aoI??.8,e.roughness=t.rough??1,e.map&&o.avg&&t.target){
const a=(new b.Color).setRGB(o.avg[0],o.avg[1],o.avg[2],b.SRGBColorSpace),n=W(t.target)
;e.color.setRGB(Math.min(4,n.r/Math.max(.01,a.r)),Math.min(4,n.g/Math.max(.01,a.g)),Math.min(4,n.b/Math.max(.01,a.b)))}e.needsUpdate=!0,a&&a()}})}
var G=.0127,R=2.8,B=e=>(e-248)*G,A=e=>(e-140)*G,$=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&window.innerWidth<1100,j=new URLSearchParams(location.search),V=e=>document.getElementById(e),q=j.get('q')||localStorage.getItem('tf_q')||($?'low':'high')
;['high','mid','low'].includes(q)||(q='high');var U,F=new e.WebGLRenderer({antialias:!1,stencil:!1,powerPreference:'high-performance',
preserveDrawingBuffer:j.has('shot')});F.setSize(window.innerWidth,window.innerHeight),F.outputColorSpace=e.SRGBColorSpace,F.toneMapping=e.NoToneMapping,
F.shadowMap.enabled=!0,F.shadowMap.type=e.PCFSoftShadowMap,F.shadowMap.autoUpdate=!1,U=Math.min(8,F.capabilities.getMaxAnisotropy()),C=U,
V('app').appendChild(F.domElement);var H=new e.Scene;H.background=new e.Color('#24211f');var O=new e.PMREMGenerator(F),X=O.fromScene(new a,.04).texture
;H.environment=X,H.environmentIntensity=.35;var Y=null,K=null,N=new e.PerspectiveCamera(40,innerWidth/innerHeight,.05,300);N.rotation.order='YXZ'
;var Z=N,Q=t=>new e.MeshStandardMaterial(t),J=(e,t=1.6)=>Q({color:'#000000',emissive:e,emissiveIntensity:t,roughness:1}),ee={floor:Q(),wall:Q(),ceiling:Q({
color:'#f1eee9',roughness:.95}),accent:Q(),cabUpper:Q(),cabLower:Q(),tvPanel:Q(),wood:Q(),closet:Q(),counter:Q(),marble:Q(),blackMarble:Q(),sofa:Q(),pillow:Q(),
pillow2:Q(),lounge:Q(),throwM:Q(),stool:Q(),dinChair:Q(),dinChair2:Q(),rug:Q(),rug2:Q({roughness:1}),metal:Q({color:'#141414',roughness:.38,metalness:.7}),
brass:Q({color:'#b08a55',roughness:.3,metalness:1}),steel:Q({color:'#7d7c7a',roughness:.28,metalness:.9}),chrome:Q({color:'#d8d8d8',roughness:.08,metalness:1}),
glass:new e.MeshPhysicalMaterial({color:'#e4ecec',roughness:.03,metalness:0,transparent:!0,opacity:.12,depthWrite:!1,side:e.DoubleSide,envMapIntensity:1.5}),
smoked:new e.MeshPhysicalMaterial({color:'#5a4a3c',roughness:.05,metalness:0,transparent:!0,opacity:.38,depthWrite:!1,side:e.DoubleSide}),
frosted:new e.MeshPhysicalMaterial({color:'#e8e6e0',roughness:.6,transparent:!0,opacity:.55,depthWrite:!1,side:e.DoubleSide}),tv:Q({color:'#040404',
roughness:.08,metalness:.3}),panelDark:Q({color:'#101010',roughness:.62,envMapIntensity:.4}),bedding:Q(),sheet:Q(),headboard:Q(),bedBase:Q(),vanity:Q(),
tile:Q(),bathFloor:Q(),porcelain:Q({color:'#f6f5f2',roughness:.08}),mirror:Q({color:'#ffffff',roughness:.02,metalness:1}),black:Q({color:'#111',roughness:.5}),
led:J('#fff1d9',1.5),ledWarm:J('#ffd6a0',1.8),ledOrange:J('#ff9a52',1.6),curtain:Q({color:'#f4f1ea',roughness:1,transparent:!0,opacity:.72,side:e.DoubleSide}),
art:Q({roughness:.9}),plant:Q({color:'#5d7048',roughness:.9}),flower:Q({color:'#f5f2ea',roughness:.9}),book:Q({color:'#3a3f46',roughness:.8}),white:Q({
color:'#f2f0ec',roughness:.6}),washer:Q({color:'#e9e9e7',roughness:.3}),fridge:Q({color:'#8c8780',roughness:.4,metalness:.15})};ee.tv.envMapIntensity=1.5
;var te=(e,t,a={})=>({src:'ph',id:e,size:t,...a}),ae=(e,t,a,o={})=>({src:'acg',id:e,hash:t,size:a,...o}),oe=(e,t=.6)=>({target:e,rough:t}),ne='low'===q,re={
floor1:te('laminate_floor_02',1.7,{rot:Math.PI/2,target:'#bd9a71',rough:.85,res:ne?'1k':'2k',nres:'1k'}),floor2:te('laminate_floor_02',1.7,{rot:Math.PI/2,
target:'#6e4b33',rough:.8,res:ne?'1k':'2k',nres:'1k'}),wall1:te('plastered_wall_04',3.2,{diff:!1,target:'#ece8e1',rough:.95,ns:.25,ao:!1}),
wall2:te('plastered_wall_04',3.2,{diff:!1,target:'#e7e0d6',rough:.95,ns:.25,ao:!1}),oak:te('oak_veneer_01',1.83,{target:'#d0ad84',rough:.85}),
oakMid:te('oak_veneer_01',1.83,{target:'#94735a',rough:.8}),walnut:te('natural_walnut_veneer',1,{rot:Math.PI/2,target:'#5c3c28',rough:.8}),
lacquerW:oe('#ebe8e3',.42),lacquerG:oe('#dcd8d2',.45),greyCab1:oe('#8e8c88',.5),greyCab2:oe('#76736f',.5),closetW:oe('#e9e5de',.5),
calacatta:ae('Marble014','Xqn3wdfc',1.9,{target:'#ebe6df',rough:.22}),nero:ae('Marble016','7ZKE2x3V',.9,{target:'#222120',rough:.2}),
stoneWall:ae('Marble024','EL4AzDhq',2.4,{target:'#b2a494',rough:.55,tiles:[1.2,.6]}),stoneFloor:ae('Marble024','EL4AzDhq',2.4,{target:'#bbae9f',rough:.5,
tiles:[.6,1.2]}),linen1:te('rough_linen',.27,{target:'#e8e3da',rough:1,ns:.8}),linenP1:te('rough_linen',.27,{target:'#f2eee7',rough:1,ns:.8}),
linenP2:te('rough_linen',.27,{target:'#b4b4b2',rough:1,ns:.8}),cognac:te('fabric_leather_02',.5,{target:'#9a6646',rough:.62}),
cognacP:te('fabric_leather_02',.5,{target:'#87573b',rough:.62}),darkLeather:te('fabric_leather_01',.4,{target:'#3a251b',rough:.55}),
navyWool:te('poly_wool_herringbone',.27,{target:'#2e3a58',rough:1,ns:.7}),taupe:te('leather_white',.3,{target:'#8b6e5c',rough:.6}),
taupe2:te('leather_white',.3,{target:'#76594a',rough:.6}),boucleW:te('wool_boucle',.35,{diff:!1,target:'#ddd7cf',rough:1,ns:1}),boucleD:te('wool_boucle',.35,{
diff:!1,target:'#4a4b48',rough:1,ns:1}),rug1:te('poly_wool_herringbone',.27,{target:'#d2cdc5',rough:1,ns:.4}),rug2:te('poly_wool_herringbone',.27,{
target:'#c3bcb3',rough:1,ns:.4}),throw1:te('rough_linen',.27,{target:'#d8cfc1',rough:1}),bedding1:te('rough_linen',.27,{diff:!1,target:'#a2a7ae',rough:1,ns:.6
}),bedding2:te('rough_linen',.27,{diff:!1,target:'#a9a49e',rough:1,ns:.6}),sheet:te('rough_linen',.27,{diff:!1,target:'#f1eee8',rough:1,ns:.5}),
bedFab:te('wool_boucle',.35,{diff:!1,target:'#dcd7cf',rough:1,ns:.6}),bedLeather:te('leather_white',.3,{target:'#b28a64',rough:.55}),
orange:te('plastered_wall_04',3.2,{diff:!1,target:'#c4632f',rough:.9,ns:.4,ao:!1}),accent1:te('plastered_wall_04',3.2,{diff:!1,target:'#ebe6de',rough:.95,
ns:.25,ao:!1}),black:oe('#161615',.5)},le={1:{name:'方案一 · 浅色极简',accentGlow:0,mats:{floor:'floor1',wall:'wall1',accent:'accent1',cabUpper:'lacquerW',
tvPanel:'lacquerW',cabLower:'greyCab1',wood:'oak',closet:'closetW',counter:'calacatta',marble:'calacatta',blackMarble:'nero',sofa:'linen1',pillow:'linenP1',
pillow2:'linenP2',lounge:'navyWool',stool:'taupe',dinChair:'boucleW',dinChair2:'boucleD',rug:'rug1',throwM:'throw1',bedding:'bedding1',sheet:'sheet',
headboard:'bedFab',bedBase:'bedFab',tile:'stoneWall',bathFloor:'stoneFloor',vanity:'oakMid'},art:['#e9dfcf','#cbb79a','#a99074']},2:{name:'方案二 · 暖调复古',
accentGlow:.5,mats:{floor:'floor2',wall:'wall2',accent:'orange',cabUpper:'lacquerG',tvPanel:'lacquerG',cabLower:'greyCab2',wood:'walnut',closet:'walnut',
counter:'calacatta',marble:'calacatta',blackMarble:'nero',sofa:'cognac',pillow:'cognacP',pillow2:'cognac',lounge:'darkLeather',stool:'taupe2',
dinChair:'boucleW',dinChair2:'boucleD',rug:'rug2',throwM:'throw1',bedding:'bedding2',sheet:'sheet',headboard:'bedLeather',bedBase:'bedLeather',tile:'stoneWall',
bathFloor:'stoneFloor',vanity:'walnut'},art:['#e7dccb','#c3ab8c','#9a7c5d']}},ie={},se=w(function(e,t,a=9,o=512){
const n=g(e,10,a,o,!1),r=n.getContext('2d'),l=f(a);r.globalAlpha=.25,r.strokeStyle=t,r.lineWidth=3;for(let e=0;e<6;e++){r.beginPath();let e=0,t=l()*o
;for(r.moveTo(e,t);e<o;)e+=20,t+=30*(l()-.5),r.lineTo(e,t);r.stroke()}return r.globalAlpha=.12,r.lineWidth=16,r.strokeRect(24,24,o-48,o-48),r.globalAlpha=1,n
}('#b9b4ad','#5d5955',13),1);se.wrapS=se.wrapT=e.ClampToEdgeWrapping,ee.rug2.map=se;var ce=1,de=[],he=()=>{};function ue(t){ce=t;const a=le[t]
;for(const[e,t]of Object.entries(a.mats))T(ee[e],re[t],()=>{pe(),he()});ee.accent.emissive.set(2===t?'#c4632f':'#000000'),
ee.accent.emissiveIntensity=a.accentGlow,ie[t]||(ie[t]=w(function(e=21,t=512,a=256,o=['#e9dfcf','#c9b598','#a88f72']){const n=document.createElement('canvas')
;n.width=t,n.height=a;const r=n.getContext('2d'),l=f(e);r.fillStyle=o[0],r.fillRect(0,0,t,a);for(let e=0;e<26;e++){r.fillStyle=o[1+e%2],
r.globalAlpha=.25+.4*l(),r.beginPath();const n=l()*t,i=l()*a;r.ellipse(n,i,20+70*l(),10+35*l(),3*l(),0,7),r.fill()}return r.globalAlpha=1,n
}(30+t,1024,512,a.art),1),ie[t].wrapS=ie[t].wrapT=e.ClampToEdgeWrapping),ee.art.map=ie[t],ee.art.userData.keepUV=!0,ee.art.needsUpdate=!0,
Ce&&(Ce.material=2===t?ee.accent:ee.wall),de.forEach(e=>e.intensity=2===t?e.userData.i2:e.userData.i1),
document.querySelectorAll('[data-scheme]').forEach(e=>e.classList.toggle('on',+e.dataset.scheme===t)),V('schemeName').textContent=a.name,gt(),he(),Dt()}
function pe(){F.shadowMap.needsUpdate=!0}var me=new e.Group;H.add(me);var fe=new e.Group;H.add(fe);var we=new e.Group;H.add(we);var ge=[],ye=[]
;function be(e,t,a,o){ge.push({x1:Math.min(e,a),z1:Math.min(t,o),x2:Math.max(e,a),z2:Math.max(t,o)})}function Me(t,a,n,r,l,i,s,c=me,d={}){
const h=d.round?new o(t,a,n,3,Math.min(d.round,t/2-.001,a/2-.001,n/2-.001)):new e.BoxGeometry(t,a,n),u=new e.Mesh(h,r);return u.position.set(l,i+a/2,s),
u.castShadow=!1!==d.cast,u.receiveShadow=!0,c.add(u),u}function xe(e,t,a,o,n,r,l,i={}){
const s=B(Math.min(e,a)),c=B(Math.max(e,a)),d=A(Math.min(t,o)),h=A(Math.max(t,o)),u=Me(c-s,r-n,h-d,l,(s+c)/2,n,(d+h)/2,i.parent||me,i)
;return i.collide&&be(s,d,c,h),i.plan&&ye.push({x1:s,z1:d,x2:c,z2:h,kind:i.plan}),u}function ve(e,t={}){return[t.px||e,t.nx||e,t.py||e,t.ny||e,t.pz||e,t.nz||e]}
function ke(e,t,a,o,n={}){const r=n.px||n.nx||n.pz||n.nz?ve(ee.wall,n):ee.wall;return xe(e,t,a,o,n.y0??0,n.y1??R,r,{collide:(n.y0??0)<1,
plan:(n.y0??0)<1?'wall':null})}function Pe(e,t,a,o,n=0,r=R,l=ee.glass,i=!0){const s=xe(e,t,a,o,n,r,l,{cast:!1,collide:n<1,plan:n<1?'glass':null})
;if(s.receiveShadow=!1,s.renderOrder=2,i){
const l=Math.abs(a-e)<Math.abs(o-t),i=.03,s=B(Math.min(e,a)),c=B(Math.max(e,a)),d=A(Math.min(t,o)),h=A(Math.max(t,o)),u=(s+c)/2,p=(d+h)/2;if(l){
Me(.04,i,h-d,ee.metal,u,n,p),Me(.04,i,h-d,ee.metal,u,r-i,p);const e=Math.max(1,Math.round((h-d)/.9))
;for(let t=0;t<=e;t++)Me(.045,r-n,i,ee.metal,u,n,d+t*(h-d)/e)}else{Me(c-s,i,.04,ee.metal,u,n,p),Me(c-s,i,.04,ee.metal,u,r-i,p)
;const e=Math.max(1,Math.round((c-s)/.9));for(let t=0;t<=e;t++)Me(i,r-n,.045,ee.metal,s+t*(c-s)/e,n,p)}}return s}function Se(t,a,o,n,r,l,i,s=me,c=24){
const d=new e.Mesh(new e.CylinderGeometry(t,a,o,c),n);return d.position.set(r,l+o/2,i),d.castShadow=!0,d.receiveShadow=!0,s.add(d),d}function Ee(t,a,o=0,n=0){
const r=new e.Group;return r.position.set(B(t),n,A(a)),r.rotation.y=o,me.add(r),r}var ze,Ce=null;function _e(e,t){const a=Ee(e,t,Math.PI/2)
;Me(.46,.06,.44,ee.dinChair2,0,.44,0,a,{round:.02}),Me(.46,.4,.05,ee.dinChair2,0,.5,.2,a,{round:.02}),
[[-.2,-.18],[.2,-.18],[-.2,.18],[.2,.18]].forEach(([e,t])=>Me(.02,.44,.02,ee.wood,e,0,t,a)),be(B(e)-.25,A(t)-.25,B(e)+.25,A(t)+.25)}function Le(e,t,a){
const o=Ee(e,t,a);Me(.42,.07,.4,ee.stool,0,.66,0,o,{round:.03}),Me(.42,.25,.05,ee.stool,0,.74,.2,o,{round:.02}),
[[-.18,-.16],[.18,-.16],[-.18,.16],[.18,.16]].forEach(([e,t])=>Me(.02,.66,.02,ee.metal,e,0,t,o)),Me(.38,.015,.015,ee.metal,0,.25,-.16,o)}function De(e,t,a,o){
const n=Ee(e,t,a);Me(.46,.08,.46,o,0,.44,0,n,{round:.035});Me(.46,.38,.06,o,0,.5,.21,n,{round:.03}).rotation.x=-.12,
[[-.2,-.19],[.2,-.19],[-.2,.19],[.2,.19]].forEach(([e,t])=>Me(.018,.44,.018,ee.metal,e,0,t,n)),be(B(e)-.24,A(t)-.24,B(e)+.24,A(t)+.24)}
function Ie(t,a,o=1.6,n={}){const r=2.05,l=B(713),i=A(a),s=new e.Group;if(s.position.set(l,0,i),me.add(s),Me(.12,.98,o+.2,ee.headboard,-.07,.25,0,s,{round:.05
}),Me(r,.3,o+.04,ee.bedBase,-1.135,.06,0,s,{round:.05}),Me(r-.05,.24,o-.04,ee.sheet,-1.135,.33,0,s,{round:.08}),Me(1.517,.05,o+.12,ee.bedding,-1.381,.565,0,s,{
round:.02}),Me(1.517,.38,.03,ee.bedding,-1.381,.2,o/2+.07,s,{round:.012}),Me(1.517,.38,.03,ee.bedding,-1.381,.2,-o/2-.07,s,{round:.012}),
Me(.03,.4,o+.12,ee.bedding,-.11-r-.02,.2,0,s,{round:.012}),Me(.25,.14,.42*o,ee.sheet,-.3,.56,.23*-o,s,{round:.06}),Me(.25,.14,.42*o,ee.sheet,-.3,.56,.23*o,s,{
round:.06}),[-1,1].forEach(t=>{if(Me(.45,.04,.42,ee.wood,-.35,.5,t*(o/2+.38),s),Me(.4,.2,.38,ee.wood,-.35,.3,t*(o/2+.38),s),
Se(.05,.07,.12,ee.white,-.35,.54,t*(o/2+.38)-.08*t,s,14),!n.noPendant&&t<0){Se(.002,.002,R-1.25,ee.metal,-.35,1.25,t*(o/2+.38),s,4),
Se(.035,.035,.12,ee.metal,-.35,1.13,t*(o/2+.38),s,14);const a=new e.Mesh(new e.CircleGeometry(.03,12),ee.ledWarm);a.rotation.x=Math.PI/2,
a.position.set(-.35,1.125,t*(o/2+.38)),s.add(a)}}),Me(.03,1.05,o+1.5,ee.wood,-.015,0,0,s,{cast:!1}),Me(.02,R-1.12,o+1.6,ee.white,-.01,1.08,0,s,{cast:!1}),
n.art){Me(.02,.62,1.2,ee.art,-.035,1.55,0,s,{cast:!1})}return Me(.006,.01,o+1.5,ee.led,-.04,1.05,0,s,{cast:!1}),be(l-.11-r,i-o/2-.6,l,i+o/2+.6),s}
function We(e,t,a){const o=Ee(e,t,a);Me(.38,.4,.55,ee.porcelain,0,0,0,o,{round:.12}),Me(.38,.38,.16,ee.porcelain,0,.38,.2,o,{round:.05}),
be(B(e)-.3,A(t)-.3,B(e)+.3,A(t)+.3)}function Te(t){t.updateMatrixWorld(!0);const a=new Set,o=new e.Vector3,n=new e.Vector3,r=new e.Matrix3;t.traverse(t=>{
if(!t.isMesh||t.userData.keepUV)return;if((Array.isArray(t.material)?t.material:[t.material]).some(e=>e.userData.keepUV))return;let l=t.geometry
;a.has(l)&&(l=l.clone(),t.geometry=l),a.add(l);const i=l.attributes.position,s=l.attributes.normal;if(!s)return;const c=new Float32Array(2*i.count)
;r.getNormalMatrix(t.matrixWorld);for(let e=0;e<i.count;e++){o.fromBufferAttribute(i,e).applyMatrix4(t.matrixWorld),n.fromBufferAttribute(s,e).applyMatrix3(r)
;const a=Math.abs(n.x),l=Math.abs(n.y),d=Math.abs(n.z);let h,u;l>=a&&l>=d?(h=o.x,u=o.z):a>=d?(h=o.z,u=o.y):(h=o.x,u=o.y),c[2*e]=h,c[2*e+1]=u}
l.setAttribute('uv',new e.BufferAttribute(c,2))})}async function Ge(t,a,o,n,r,l=0){const i=await function(e){
return new Promise(t=>z.load(`${S}Models/gltf/1k/${e}/${e}_1k.gltf`,e=>t(e.scene),void 0,()=>t(null)))}(t);if(!i)return
;const s=(new e.Box3).setFromObject(i),c=s.getSize(new e.Vector3),d=s.getCenter(new e.Vector3),h=r/c.y;i.scale.setScalar(h),
i.position.set(-d.x*h,-s.min.y*h,-d.z*h);const u=new e.Group;u.add(i),u.position.set(a,o,n),u.rotation.y=l,i.traverse(e=>{e.isMesh&&(e.castShadow=!0,
e.receiveShadow=!0,e.userData.keepUV=!0)}),me.add(u),pe(),he(),_t=!0}!function(){const t=new e.Mesh(new e.PlaneGeometry(B(713)-B(248),A(1700)-A(140)),ee.floor)
;t.rotation.x=-Math.PI/2,t.position.set((B(248)+B(713))/2,0,(A(140)+A(1700))/2),t.receiveShadow=!0,me.add(t),xe(417,437,713,582,0,.004,ee.bathFloor,{cast:!1}),
xe(565,600,713,895,0,.004,ee.bathFloor,{cast:!1}),xe(248,1700,713,1716,-.02,0,ee.black,{cast:!1}),xe(200,120,760,1720,R,2.92,ee.ceiling,{parent:fe
}).castShadow=!0,xe(640,1175,713,1640,2.48,R,ee.ceiling,{parent:fe}),xe(636,1175,640,1640,2.46,R-.31,ee.led,{parent:fe,cast:!1}),
xe(300,1160,640,1205,R-.22,R,ee.ceiling,{parent:fe}),xe(310,1203,630,1206,2.59,2.77,ee.panelDark,{parent:fe,cast:!1});const a=ee.tile;ke(230,145,248,1700),
xe(213,754,248,802,0,R,ee.wall,{collide:!0,plan:'wall'}),xe(205,1640,262,1716,0,R,ee.wall,{collide:!0,plan:'wall'}),ke(322,145,400,161),
xe(230,128,250,161,0,R,ee.wall,{collide:!0,plan:'wall'}),xe(205,120,250,135,2.1,R,ee.wall),xe(250,145,322,161,2.13,R,ee.wall),ke(400,120,423,193),
ke(410,120,750,140),ke(713,120,735,437),ke(713,437,735,582,{nx:a}),ke(713,582,735,600),ke(713,600,735,895,{nx:a}),ke(713,895,735,1640),
xe(713,754,747,802,0,R,ee.wall,{collide:!0}),xe(698,1640,760,1716,0,R,ee.wall,{collide:!0,plan:'wall'}),Pe(262,1697,698,1703,0,R,ee.glass,!1),
[262,297,373,455,538,617,698].forEach(e=>xe(e-2.5,1694,e+2.5,1706,0,R,ee.metal)),xe(262,1694,698,1706,0,.06,ee.metal),xe(262,1694,698,1706,R-.08,R,ee.metal),
xe(455,1693,538,1707,0,R,ee.metal,{cast:!1}).visible=!1,xe(410,140,713,190,0,R,ee.closet,{collide:!0,plan:'furn'})
;for(let e=413;e<710;e+=37.5)xe(e,190,e+1,191,.05,2.75,ee.panelDark,{cast:!1});xe(410,191,713,192,0,.05,ee.panelDark,{cast:!1}),Pe(408,265,412,430),
xe(405,190,418,195,0,R,ee.wall,{collide:!0}),xe(405,193,418,265,2.15,R,ee.wall),ke(403,430,713,437,{pz:a}),ke(407,437,417,505,{px:a}),ke(407,582,417,592,{px:a
}),xe(407,505,417,582,2.15,R,ve(ee.wall,{px:a})),ke(407,582,560,600,{nz:a}),ke(560,582,713,600,{nz:a,pz:a}),Pe(643,437,646,540),ke(405,600,418,1163),
ke(555,600,565,700,{px:a}),ke(555,835,565,900,{px:a}),xe(555,700,565,835,2.24,R,ve(ee.wall,{px:a})),ke(418,895,480,905),xe(480,895,552,905,2.15,R,ee.wall),
ke(552,895,570,905,{nz:a}),ke(705,895,713,905,{nz:a}),xe(570,895,705,905,0,.62,ve(ee.wall,{nz:a}),{collide:!0,plan:'wall'}),
xe(570,895,705,905,2.15,R,ve(ee.wall,{nz:a})),Pe(570,898,705,902,.62,2.15,ee.glass);for(let e=0;e<3;e++)xe(572,899,703,901,2+.05*e,2+.05*e+.035,ee.white,{
cast:!1});Pe(500,1155,700,1159),ke(699,1155,713,1163),xe(418,1155,500,1163,2.15,R,ee.wall);const o=ee.closet,n=(e,t,a=299)=>{xe(248,e,a,t,0,R,o,{collide:!0,
plan:'furn'});const n=Math.max(1,Math.round((t-e)*G/.5));for(let o=1;o<n;o++){const r=e+o*(t-e)/n;xe(a,r-.4,a+.6,r+.4,.05,2.75,ee.panelDark,{cast:!1})}
for(let o=0;o<n;o++){const r=e+(o+.5)*(t-e)/n;xe(a,r-.3,a+1.6,r+.3,.9,1.25,ee.metal,{cast:!1})}xe(a,e,a+.6,t,0,.06,ee.panelDark,{cast:!1})};n(370,520),
n(605,752),n(802,935),xe(248,520,323,600,0,R,ee.closet,{collide:!0,plan:'furn'}).visible=!1,xe(248,520,323,526,0,R,ee.closet),xe(248,594,323,600,0,R,ee.closet),
xe(248,520,254,600,0,R,ee.closet),Me(.6,.85,.6,ee.washer,B(288),.02,A(560)),Me(.6,.85,.6,ee.washer,B(288),.9,A(560)),
Se(.18,.18,.02,ee.black,B(311.7),.45,A(560)).rotation.z=Math.PI/2,Se(.18,.18,.02,ee.black,B(311.7),1.33,A(560)).rotation.z=Math.PI/2,
xe(254,526,323,594,1.8,R,ee.closet),xe(248,935,299,940,0,R,o,{collide:!0}),xe(248,1157,299,1165,0,R,o,{collide:!0,plan:'wall'}),
xe(248,940,293,1157,.72,.76,ee.wood,{collide:!0,plan:'furn'}),xe(248,940,268,1157,1.15,1.18,ee.wood),xe(248,940,268,1157,1.55,1.58,ee.wood),
xe(248,940,270,1157,1.95,R,o),xe(268,942,269,1155,1.92,1.94,ee.led,{cast:!1})
;for(let e=0;e<9;e++)Me(.03,.22+e%3*.03,.18,e%2?ee.book:ee.white,B(256),1.18,A(990+3.3*e),me,{cast:!1});_e(318,985),_e(318,1110),function(){const t=1167,a=1233
;xe(250,t,300,a,0,1.85,ee.fridge,{collide:!0,plan:'furn'}),xe(300,t+1,301,(t+a)/2-.5,.05,1.8,ee.black,{cast:!1}),xe(300,(t+a)/2+.5,301,a-1,.05,1.8,ee.black,{
cast:!1}),xe(300,1190,302,1192,.9,1.4,ee.metal),xe(300,1208,302,1210,.9,1.4,ee.metal),xe(250,t,300,a,1.85,R,ee.wood),xe(248,1162,300,1167,0,R,ee.wood),
xe(248,1233,300,1238,0,R,ee.wood);const o=1238,n=1608;xe(250,o,296,n,.1,.88,ee.cabLower,{collide:!0,plan:'furn'}),xe(250,o,294,n,0,.1,ee.black,{cast:!1}),
xe(248,o,299,n,.88,.92,ee.counter);for(let e=o+47;e<n;e+=47)xe(296,e-.3,296.6,e+.3,.12,.86,ee.panelDark,{cast:!1});xe(296,o,296.6,n,.6,.61,ee.panelDark,{cast:!1
}),Ce=xe(248,o,249.5,n,.92,1.55,ee.wall,{cast:!1}),xe(248,o,249.2,n,.92,1.5,ee.accent,{cast:!1}).name='backsplash',xe(248,o,276,n,1.88,R,ee.cabUpper,{plan:null
});for(let e=o+46;e<n;e+=46)xe(276,e-.3,276.6,e+.3,1.9,2.78,ee.panelDark,{cast:!1});xe(248,o,276,n,1.55,1.58,ee.wood),xe(248,o,276,n,1.86,1.88,ee.wood),
xe(270,o,271,n,1.845,1.855,ee.led,{cast:!1}),xe(270,o,271,n,1.535,1.545,ee.led,{cast:!1})
;for(let e=0;e<6;e++)Se(.04,.04,.1+e%2*.05,ee.white,B(262),1.58,A(1290+6*e),me,12);xe(256,1290,292,1340,.92,.93,ee.tv,{cast:!1}),
xe(250,1288,276,1342,1.83,1.88,ee.black),xe(258,1460,290,1505,.905,.925,ee.black,{cast:!1});const r=B(252),l=A(1482);Se(.012,.015,.32,ee.metal,r,.92,l,me,10),
Me(.2,.02,.02,ee.metal,r+.09,1.22,l),Se(.12,.08,.06,ee.white,B(270),.92,A(1420),me,16),[[-.04,.02],[.04,-.02],[0,.04]].forEach(([t,a])=>{
const o=new e.Mesh(new e.SphereGeometry(.035,12,8),Q({color:'#e08a2a',roughness:.6}));o.position.set(B(270)+t,.99,A(1420)+a),me.add(o)}),
Se(.07,.08,.2,ee.white,B(268),.92,A(1560),me,16),xe(262,1608,300,1694,0,R,ee.wood,{collide:!0,plan:'furn'}),xe(248,1608,262,1640,0,R,ee.wood)
;const i=1293,s=1424,c=365,d=449;xe(c+4,i+3,d-2,s,0,.88,ee.wood,{collide:!0,plan:'furn'}),xe(c,i,d,s,.88,.93,ee.marble),xe(c,i,d,i+3.5,0,.88,ee.marble),
xe(c,i,c+3.5,s,0,.88,ee.marble),xe(378,s,449,1548,.73,.77,ee.marble,{collide:!1,plan:'furn'}),xe(445,s,449,1548,0,.73,ee.marble),
xe(378,1544,449,1548,0,.73,ee.marble),be(B(378),A(s),B(449),A(1548)),Se(.06,.05,.22,ee.glass,B(410),.93,A(1360),me,16);for(let t=0;t<9;t++){
const a=new e.Mesh(new e.SphereGeometry(.06,10,8),ee.flower);a.position.set(B(410)+.08*Math.cos(t),1.2+.04*Math.sin(3*t),A(1360)+.08*Math.sin(t)),
a.castShadow=!0,me.add(a)}Se(.15,.09,.06,ee.white,B(413),.77,A(1480),me,20),Le(462,1327,-Math.PI/2),Le(462,1380,-Math.PI/2),De(360,1458,Math.PI/2,ee.dinChair2),
De(360,1516,Math.PI/2,ee.dinChair),De(468,1458,-Math.PI/2,ee.dinChair),De(468,1516,-Math.PI/2,ee.dinChair);const h=A(1305),u=A(1535),p=B(408)
;Me(.07,.04,u-h,ee.wood,p,1.95,(h+u)/2,fe),Me(.05,.006,u-h-.04,ee.led,p,1.945,(h+u)/2,fe,{cast:!1}),Me(.004,R-2,.004,ee.metal,p,1.99,h+.1,fe),
Me(.004,R-2,.004,ee.metal,p,1.99,u-.1,fe)}()}(),function(){xe(492,1262,688,1615,.002,.014,ee.rug,{cast:!1}),function(){const t=new e.Group;me.add(t)
;const a=A(1172),o=.95,n=B(505),r=B(688),l=A(1395),i=.31;Me(r-n-.08,.08,.85,ee.black,(n+r)/2,0,a+.475,t,{cast:!1}),
Me(.85,.08,l-a-.08,ee.black,r-.475,0,(a+l)/2,t,{cast:!1});const s=(e,a,o,n,r,l,i=0)=>{const s=Me(e,a,o,ee.sofa,n,r,l,t,{round:Math.min(.075,a/2-.005)})
;return s.rotation.y=i,s},c=Math.round((r-o-n)/i),d=(r-o-n)/c;for(let e=0;e<c;e++)for(let t=0;t<2;t++)s(d-.012,.2,.345-.012,n+d*(e+.5),.19,a+.26+.345*(t+.5))
;for(let e=0;e<c;e++)s(d-.012,.21,.24,n+d*(e+.5),.07,a+.13+.01);for(let e=0;e<c;e++)for(let t=0;t<2;t++)s(d-.012,.16,.24,n+d*(e+.5),.28+.165*t,a+.13)
;Me(r-n-.02,.12,o-.02,ee.sofa,(n+r)/2,.07,a+.475,t,{round:.04});const h=Math.round((l-a-.26)/i),u=(l-a-.26)/h
;Me(o-.02,.12,l-a-.02,ee.sofa,r-.475,.07,(a+l)/2,t,{round:.04});for(let e=0;e<h;e++)for(let t=0;t<3;t++)s(.298,.2,u-.012,r-o+.01+.31*(t+.5),.19,a+.26+u*(e+.5))
;for(let e=0;e<Math.round(o/i);e++)for(let t=0;t<2;t++)s(o/Math.round(o/i)-.012,.16,.24,r-o+o/Math.round(o/i)*(e+.5),.28+.165*t,a+.13)
;for(let e=0;e<3;e++)s(.2,.15,.69,n+.1,.07+.15*e,a+.26+.345);const p=(e,a,o,n,r=-.25)=>{Me(.5,.48,.15,n,e,.4+.02,a,t,{round:.07}).rotation.set(r,o,0)}
;p(n+.55,a+.36,.08,ee.pillow),p(n+1.05,a+.36,-.06,ee.pillow),p(r-.4,a+.36,0,ee.pillow2),Me(.62,.025,.55,ee.throwM,r-.4,.4+.02,l-.45,t,{round:.01
}).rotation.y=.3,be(n,a,r,a+o),be(r-o,a,r,l),ye.push({x1:n,z1:a,x2:r,z2:a+o,kind:'furn'},{x1:r-o,z1:a,x2:r,z2:l,kind:'furn'})}()
;const t=[B(565),A(1330)],a=[B(608),A(1372)];Se(.46,.46,.035,ee.blackMarble,t[0],.36,t[1],me,48);for(let e=0;e<4;e++){const a=e/4*Math.PI*2+.4
;Se(.13,.13,.36,ee.black,t[0]+.1*Math.cos(a),0,t[1]+.1*Math.sin(a),me,24)}Se(.3,.3,.03,ee.marble,a[0],.5,a[1],me,48);for(let e=0;e<3;e++){const t=e/3*Math.PI*2
;Se(.085,.085,.5,ee.black,a[0]+.06*Math.cos(t),0,a[1]+.06*Math.sin(t),me,20)}be(t[0]-.46,t[1]-.46,a[0]+.3,a[1]+.3),
Me(.3,.035,.22,ee.white,t[0]-.12,.395,t[1]-.05).rotation.y=.3,Me(.26,.03,.19,ee.book,t[0]-.12,.43,t[1]-.05).rotation.y=.25,
Se(.045,.05,.2,ee.glass,t[0]+.12,.395,t[1]+.02,me,12),Me(.3,.04,.22,ee.white,a[0],.53,a[1]).rotation.y=-.2,function(e,t,a){const o=Ee(e,t,a),n=ee.lounge,r={
round:.025};Me(.56,.16,.62,n,0,.22,.02,o,r).rotation.x=.06,Me(.62,.66,.14,n,0,.3,.33,o,r).rotation.x=-.28,[-1,1].forEach(e=>{
Me(.12,.42,.62,n,.35*e,0,.03,o,r).rotation.z=.05*e,Me(.16,.1,.74,n,.37*e,.5,-.02,o,r).rotation.x=.04,Me(.16,.5,.1,n,.37*e,0,-.35,o,r)}),
be(B(e)-.45,A(t)-.45,B(e)+.45,A(t)+.45)}(650,1560,2.45);const o=B(688),n=A(1505);Se(.12,.12,.02,ee.metal,o,0,n,me,24),Se(.008,.008,1.45,ee.metal,o,.02,n,me,8),
Me(.012,.012,.75,ee.metal,o,1.45,n-.37),Se(.03,.045,.05,ee.metal,o,1.42,n-.74,me,16);const r=1262,l=1600;xe(694,r,713,l,.3,2.15,ee.tvPanel,{collide:!0,
plan:'furn'}),xe(690,r,694,1345,.3,2.15,ee.tvPanel),xe(689.6,1303,690,1305,.32,2.13,ee.panelDark,{cast:!1}),xe(690,1345,694,l,1.95,2.15,ee.tvPanel),
xe(690,1345,694,l,.3,.6,ee.tvPanel),xe(691,1347,694,1388,.6,1.95,ee.panelDark),xe(693,1388,694,1415,.6,1.95,ee.panelDark),
xe(691,1557,694,1598,.6,1.95,ee.panelDark),xe(693,1530,694,1557,.6,1.95,ee.panelDark),xe(690,1530,694,1557,1.3,1.32,ee.panelDark),
xe(692,1415,694,1530,.6,1.95,ee.panelDark),xe(688.5,1418,692,1528,.66,1.62,ee.tv,{cast:!1}),xe(688.3,1420,688.5,1526,.68,1.6,Q({color:'#0b0c0e',roughness:.05,
metalness:.6}),{cast:!1}),xe(690,1347,690.4,1598,.6,.605,ee.panelDark,{cast:!1}),xe(689.5,r,690,l,.295,.305,ee.ledWarm,{cast:!1}),
xe(689.5,r,690,l,2.145,2.155,ee.ledWarm,{cast:!1}),xe(710,r,713,l,0,.3,ee.accent,{cast:!1}),xe(710,r,713,l,2.15,2.48,ee.accent,{cast:!1}),
xe(700,l,713,1640,0,R,ee.wood,{collide:!0}),xe(700,1175,713,r,0,R,ee.tvPanel,{collide:!0});const i=new e.PlaneGeometry(1,R-.1,48,1),s=i.attributes.position
;for(let e=0;e<s.count;e++)s.setZ(e,.035*Math.sin(40*s.getX(e)));i.computeVertexNormals(),[[B(268)+.35,.7],[B(694)-.4,.8]].forEach(([t,a])=>{
const o=new e.Mesh(i.clone(),ee.curtain);o.scale.x=a,o.position.set(t,(R-.1)/2,A(1688)),me.add(o)}),xe(262,1684,698,1688,2.76,R,ee.metal,{parent:fe}),
be(B(495)-.25,A(1668)-.25,B(495)+.25,A(1668)+.25)}(),Ie(0,1032,1.6,{art:!0}),xe(470,950,640,1135,.002,.01,ee.rug2,{cast:!1}),
xe(418,905,713,935,2.55,R,ee.ceiling,{parent:fe}),xe(520,935,713,936,2.53,R-.245,ee.led,{parent:fe,cast:!1}),xe(418,935,520,1157,2.55,R,ee.ceiling,{parent:fe}),
xe(520,935,521,1130,2.53,R-.245,ee.led,{parent:fe,cast:!1}),xe(520,1130,713,1157,2.55,R,ee.ceiling,{parent:fe}),xe(520,1129,713,1130,2.53,R-.245,ee.led,{
parent:fe,cast:!1}),Ie(0,312,1.5,{art:!1}),Me(.02,.5,.9,ee.art,B(713)-.04,1.5,A(312)),xe(418,330,470,425,0,.75,ee.wood,{collide:!0,plan:'furn'}),function(){
const e=ee.wood,t=[ee.white,ee.headboard,ee.dinChair2,ee.sheet,ee.throwM,ee.bedding];xe(418,600,421,895,0,R,e,{collide:!0,plan:'furn'}),
xe(418,600,458,895,0,.06,e),xe(418,600,458,895,R-.08,R,e);for(let t=600;t<=895;t+=59)xe(421,t-1,458,t+1,0,R,e);be(B(418),A(600),B(458),A(895)),ye.push({
x1:B(418),z1:A(600),x2:B(458),z2:A(895),kind:'furn'}),[2.3,1.95].forEach(t=>xe(421,600,458,895,t,t+.025,e));for(let a=600;a<890;a+=59){
const o=Math.round((a-600)/59);if(o%2==0){Se(.012,.012,A(a+57)-A(a+2),ee.metal,B(440),1.8,A(a+30),me,8).rotation.x=Math.PI/2;for(let e=0;e<6;e++){
Me(.5,.75+e%3*.12,.03,t[(e+o)%t.length],B(440),1.02-e%3*.12,A(a+8+8*e)).rotation.y=0}xe(421,a+1,458,a+58,.45,.47,e)
;for(let e=0;e<2;e++)Me(.32,.22,.26,ee.white,B(438),.47,A(a+18+22*e))}else{for(let t=.35;t<1.9;t+=.32)xe(421,a+1,458,a+58,t,t+.022,e)
;for(let e=.37;e<1.9;e+=.64)Me(.3,.12,.6,t[(o+1)%6],B(438),e,A(a+30))}}Pe(459,602,461,893,.06,R-.08,ee.smoked,!1)
;for(let e=602;e<=893;e+=58.2)xe(458.6,e-.8,461.4,e+.8,.06,R-.08,ee.metal,{cast:!1});xe(460,602,461,893,2.29,2.3,ee.ledWarm,{cast:!1})
;const a=600,o=645,n=470,r=553;xe(n,a,r,603,0,R,e,{collide:!0,plan:'furn'}),be(B(n),A(a),B(r),A(o)),[n,(n+r)/2,r].forEach(t=>xe(t-1,a,t+1,o,0,R-.12,e)),
[.06,.42,.78,1.18,1.56,1.92,2.3,R-.14].forEach(t=>xe(n,a,r,o,t,t+.025,e)),xe(n,602,r,o,.42,.78,e),[(3*n+r)/4,(n+3*r)/4].forEach(e=>{
xe(e-12,o,e+12,645.5,.58,.61,ee.panelDark,{cast:!1}),Me(.34,.26,.34,ee.headboard,B(e),.085,A(625)),Me(.3,.2,.3,ee.panelDark,B(e),1.95,A(622))}),
Me(.3,.2,.25,ee.sheet,B((3*n+r)/4),.805,A(622)),Me(.3,.2,.25,ee.sheet,B((n+3*r)/4),.805,A(622)),Me(.6,.08,.32,ee.white,B((3*n+r)/4),1.58,A(622)),
Me(.6,.08,.32,ee.white,B((3*n+r)/4),1.66,A(622)),[.06,.78,1.18].forEach(e=>xe(n+2,642,r-2,642.5,e+.3,e+.31,ee.ledWarm,{cast:!1}))}(),function(){const t=745
;xe(668,673,713,817,.2,.85,ee.vanity,{collide:!0,plan:'furn'});for(const e of[709,t,781])xe(667.6,e-.3,668,e+.3,.22,.83,ee.panelDark,{cast:!1})
;xe(667.6,673,668,817,.52,.525,ee.panelDark,{cast:!1}),[[677,671],[813,671],[677,708],[813,708]].forEach(([e,t])=>xe(t-.8,e-.8,t+.8,e+.8,0,.2,ee.metal)),
xe(666,671,713,819,.85,.89,ee.marble),xe(668,673,713,817,.18,.2,ee.ledWarm,{cast:!1}),xe(709,663,713,827,.89,R,ee.marble,{cast:!1}),[711,779].forEach(t=>{
const a=new e.Group;a.position.set(B(708.5),1.72,A(t)),a.rotation.y=-Math.PI/2,me.add(a);const n=(t,a)=>{const o=new e.Shape;return o.moveTo(t,-a+t),
o.lineTo(t,a-t),o.absarc(0,a-t,t,0,Math.PI,!1),o.lineTo(-t,-a+t),o.absarc(0,-a+t,t,Math.PI,2*Math.PI,!1),o},r=new e.Mesh(new e.ExtrudeGeometry(n(.23,.55),{
depth:.025,bevelEnabled:!1,curveSegments:24}),ee.metal);r.position.z=-.03,r.userData.keepUV=!0,a.add(r)
;const l=new e.Mesh(new e.ShapeGeometry(n(.215,.535),24),ee.mirror);l.position.z=-.004,l.userData.keepUV=!0,a.add(l);const i=new e.Path,s=.17,c=.47
;i.moveTo(-s,.28-c),i.lineTo(-s,c-s),i.absarc(0,c-s,s,Math.PI,0,!0),i.lineTo(s,-c+s),i.absarc(0,-c+s,s,0,.5*-Math.PI,!0)
;const d=new e.Mesh(new e.TubeGeometry(new e.CatmullRomCurve3(i.getPoints(40).map(t=>new e.Vector3(t.x,t.y,0))),120,.0035,6,!1),ee.led);d.userData.keepUV=!0,
a.add(d);const h=new e.Mesh(new o(.5,.13,.36,4,.05),ee.porcelain);h.position.set(0,.89+.065-1.72,.3),a.add(h),Me(.025,.025,.18,ee.metal,0,1.08-1.72,.09,a),
Me(.035,.05,.02,ee.metal,-.1,1.08-1.72,.01,a),Me(.035,.05,.02,ee.metal,.1,1.08-1.72,.01,a)}),
[[-.04],[.04]].forEach(([e])=>Se(.025,.025,.14,ee.black,B(700),.89,A(t)+e,me,12)),We(690,640,-Math.PI/2)
;const a=new e.Mesh(new o(B(707)-B(567),.58,A(895)-A(830),4,.05),ee.porcelain);a.position.set((B(567)+B(707))/2,.29,(A(830)+A(895))/2),
a.castShadow=a.receiveShadow=!0,me.add(a);const n=new e.Mesh(new o(B(698)-B(577),.02,A(886)-A(840),3,.009),Q({color:'#e7ecec',roughness:.05}))
;n.position.set(a.position.x,.575,a.position.z),me.add(n),be(B(567),A(828),B(707),A(895)),ye.push({x1:B(567),z1:A(828),x2:B(707),z2:A(895),kind:'furn'}),
[0,.08,.16].forEach((e,t)=>Se(.012,.012,t?.12:.26,ee.metal,B(690)-e,.58,A(890),me,8));const r=new e.MeshPhysicalMaterial({color:'#b9ad9d',roughness:.1,
transparent:!0,opacity:.82,normalMap:w(y(),1,!1),normalScale:new e.Vector2(1.4,1.4),side:e.DoubleSide,depthWrite:!1});r.userData.keepUV=!0
;const l=xe(551,655,553,735,0,2.2,r,{cast:!1});l.renderOrder=2,l.geometry=new e.BoxGeometry(.025,2.2,A(735)-A(655));const i=l.geometry.attributes.uv
;for(let e=0;e<i.count;e++)i.setXY(e,13*i.getX(e),28*i.getY(e));xe(550.5,655,553.5,657,0,2.2,ee.metal),xe(550.5,733,553.5,735,0,2.2,ee.metal),
xe(550.5,655,553.5,735,2.17,2.2,ee.metal),xe(550,722,550.6,723.5,.85,1.25,ee.metal),xe(553,700,555,835,2.2,2.24,ee.metal)}(),function(){
xe(440,437,520,480,.3,.85,ee.wood,{collide:!0,plan:'furn'}),xe(437,437,523,483,.85,.89,ee.marble);const t=new e.Mesh(new o(.42,.12,.32,3,.04),ee.porcelain)
;t.position.set(B(480),.95,A(455)),me.add(t),xe(445,437,515,439,1.1,1.9,ee.mirror,{cast:!1}),We(572,452,Math.PI),
Se(.12,.12,.01,ee.metal,B(680),2.48,A(510),me,20)}(),function(){const t=new e.HemisphereLight('#fff6ea','#a8957e',.25);H.add(t),
ze=new e.DirectionalLight('#ffdcb0',2.2);const a=new e.Object3D;a.position.set(B(480),0,A(1300)),H.add(a),ze.target=a,ze.position.set(B(480)-7,6.5,A(1300)+14),
ze.castShadow=!0;const o='high'===q?4096:2048;ze.shadow.mapSize.set(o,o);const n=ze.shadow.camera;n.left=-10,n.right=10,n.top=18,n.bottom=-18,n.near=.5,
n.far=70,ze.shadow.bias=-3e-4,ze.shadow.normalBias=.02,ze.shadow.radius=3,H.add(ze);const r=new e.DirectionalLight('#dfe9f5',.4)
;r.position.set(B(480),2,A(1700)+10),r.target=a,H.add(r)
;const l=[[560,1300,5],[420,1420,4.5],[300,1300,3],[330,760,3.2],[330,1050,3],[300,230,2.5],[570,1030,4],[570,300,3.5],[505,750,2.6],[640,760,3],[560,510,2.6],[600,1550,3.5]],i='low'===q?7:l.length
;l.slice(0,i).forEach(([t,a,o],n)=>{const r=new e.PointLight('#ffd7ad',.6*o,6.5,1.6);r.position.set(B(t),2.4,A(a)),
'high'===q&&[0,1,6,9].includes(n)&&(r.castShadow=!0,r.shadow.mapSize.set(512,512),r.shadow.bias=-.002,r.shadow.radius=6,r.shadow.camera.near=.1),H.add(r)}),
[[B(258),1.25,A(1420),0,2.2],[B(705),2.45,A(1430),0,2.6],[B(705),.2,A(1430),0,1.4]].forEach(([t,a,o,n,r])=>{const l=new e.PointLight('#ff9550',n,3.5,1.8)
;l.position.set(t,a,o),l.userData={i1:n,i2:r},H.add(l),de.push(l)
}),[[B(700),2.4,A(1430),1.6],[B(700),.25,A(1430),.8],[B(565),2.5,A(925),1.2],[B(262),1.75,A(1420),.9]].forEach(([t,a,o,n])=>{
const r=new e.PointLight('#ffcf98',n,2.6,2);r.position.set(t,a,o),H.add(r)});const s=new e.CircleGeometry(.04,20)
;[[480,1250],[480,1600],[600,1250],[600,1620],[330,300],[330,500],[330,700],[330,900],[330,1100],[470,980],[470,1090],[520,300],[520,380],[640,650],[600,860],[500,650],[500,850],[480,510],[640,510],[280,200],[330,1350],[330,1500],[600,680],[600,840]].forEach(([t,a])=>{
const o=new e.Mesh(s,ee.led);o.rotation.x=Math.PI/2,o.position.set(B(t),2.798-(t>636&&a>1175?.32:0),A(a)),fe.add(o)})}(),function(){
const t=new e.Mesh(new e.PlaneGeometry(400,400),new e.MeshBasicMaterial({color:'#9a9a90'}));t.rotation.x=-Math.PI/2,t.position.y=-45,t.userData.keepUV=!0,
we.add(t)}(),xe(180,1706,790,1730,R,3.4,ee.wall),xe(180,1706,790,1730,-1.2,0,ee.wall),ee.rug2.userData.keepUV=!0,ee.art.userData.keepUV=!0,Te(me),Te(fe)
;var Re=new e.Color('#24211f'),Be=[{id:'living',name:'客厅',ox:470,oy:1655,yaw:-.55,lx:610,ly:1450},{id:'dining',name:'餐厅',ox:560,oy:1250,yaw:2.2,lx:410,ly:1470
},{id:'master',name:'主卧',ox:440,oy:1040,yaw:-Math.PI/2,lx:560,ly:1030},{id:'second',name:'次卧',ox:440,oy:360,yaw:-1.3,lx:560,ly:300},{id:'wic',name:'衣帽间',ox:515,
oy:880,yaw:.15,lx:505,ly:760},{id:'bath',name:'主卫',ox:572,oy:772,yaw:-Math.PI/2+.25,lx:640,ly:760},{id:'bath2',name:'次卫',ox:360,oy:545,yaw:-Math.PI/2,lx:560,
ly:510},{id:'kitchen',name:'厨房',ox:345,oy:1600,yaw:.05,lx:275,ly:1400},{id:'entry',name:'入户',ox:290,oy:200,yaw:Math.PI,lx:290,ly:230}],Ae=[{id:'overall',
name:'全景',page:'P10 / P19',ox:560,oy:1695,y:1.35,tx:460,ty:1150,th:1.3,fov:72},{id:'living',name:'客厅',page:'P11 / P20',ox:453,oy:1405,y:1.1,tx:713,ty:1410,
th:1.08,fov:58},{id:'dining',name:'餐厨',page:'P12 / P21',ox:668,oy:1405,y:1.25,tx:250,ty:1400,th:1.2,fov:52},{id:'bedroom',name:'主卧',page:'P13 / P22',ox:424,
oy:1035,y:1.25,tx:713,ty:1035,th:1.2,fov:64},{id:'closet',name:'衣帽间',page:'P14 / P23',ox:508,oy:892,y:1.45,tx:505,ty:600,th:1.25,fov:62},{id:'bath',name:'主卫',
page:'P15',ox:571,oy:760,y:1.3,tx:713,ty:755,th:1.35,fov:74},{id:'bathdoor',name:'主卫入口',page:'P16 / P24',ox:462,oy:768,y:1.45,tx:713,ty:760,th:1.35,fov:46}]
;function $e(e,t=!1){'walk'!==je.mode&&(Oe('walk'),t=!0);const a=B(e.tx)-B(e.ox),o=A(e.ty)-A(e.oy),n=e.th-e.y,r={x:B(e.ox),z:A(e.oy),yaw:Math.atan2(-a,-o),
pitch:Math.atan2(n,Math.hypot(a,o))};je.eye=e.y,je.vfov=e.fov,Pt=!0,N.fov=e.fov,N.updateProjectionMatrix(),t?(je.pos.set(r.x,e.y,r.z),je.yaw=r.yaw,
je.pitch=r.pitch,je.tween=null):je.tween={from:{x:je.pos.x,z:je.pos.z,yaw:je.yaw,pitch:je.pitch},to:r,t:0},
document.querySelectorAll('#views button').forEach((t,a)=>t.classList.toggle('on',Ae[a]===e))}var je={mode:'orbit',yaw:0,pitch:0,
pos:new e.Vector3(B(470),1.6,A(1655)),keys:{},joy:{x:0,y:0},tween:null},Ve=1.6,qe=.22,Ue=new t(N,F.domElement),Fe={p:new e.Vector3(B(480)+11,15,A(920)+9),
t:new e.Vector3(B(480),.8,A(920))};function He(e){for(let t=0;t<2;t++)for(const t of ge){
const a=Math.max(t.x1,Math.min(e.x,t.x2)),o=Math.max(t.z1,Math.min(e.z,t.z2)),n=e.x-a,r=e.z-o,l=n*n+r*r;if(l<.0484)if(l>1e-8){const t=Math.sqrt(l);e.x=a+n/t*qe,
e.z=o+r/t*qe}else{const a=e.x-t.x1,o=t.x2-e.x,n=e.z-t.z1,r=t.z2-e.z,l=Math.min(a,o,n,r);l===a?e.x=t.x1-qe:l===o?e.x=t.x2+qe:e.z=l===n?t.z1-qe:t.z2+qe}}}
function Oe(e,t={}){'orbit'===je.mode&&'walk'===e&&(Fe.p.copy(N.position),Fe.t.copy(Ue.target)),'orbit'===e&&'walk'===je.mode&&(N.position.copy(Fe.p),
Ue.target.copy(Fe.t),N.up.set(0,1,0)),je.mode=e,N.fov='walk'===e?je.vfov||(innerWidth<innerHeight?80:72):40,N.updateProjectionMatrix(),
H.background='walk'===e&&Y?Y:Re,'orbit'===e&&Ue.update(),fe.visible='walk'===e,we.visible='walk'===e,Ue.enabled='orbit'===e,
document.body.classList.toggle('walk','walk'===e),document.body.classList.toggle('orbit','orbit'===e),
document.getElementById('modeBtn').textContent='walk'===e?'鸟瞰模式':'漫游模式','orbit'===e&&document.pointerLockElement&&document.exitPointerLock()}
function Xe(e,t=!1){const a='string'==typeof e?Be.find(t=>t.id===e):e,o={x:B(a.ox),z:A(a.oy),yaw:a.yaw};'walk'!==je.mode&&(Oe('walk'),t=!0),je.eye=Ve,je.vfov=0,
Pt=!0,N.fov=innerWidth<innerHeight?80:72,N.updateProjectionMatrix(),document.querySelectorAll('#views button').forEach(e=>e.classList.remove('on')),
t?(je.pos.set(o.x,Ve,o.z),je.yaw=o.yaw,je.pitch=-.05,je.tween=null):je.tween={from:{x:je.pos.x,z:je.pos.z,yaw:je.yaw,pitch:je.pitch},to:o,t:0},
document.querySelectorAll('[data-room]').forEach(e=>e.classList.toggle('on',e.dataset.room===a.id))}Ue.target.set(B(480),.8,A(920)),
Z.position.set(B(480)+11,15,A(920)+9),Ue.enableDamping=!0,Ue.maxPolarAngle=.47*Math.PI,Ue.minDistance=4,Ue.maxDistance=40,Ue.update(),
addEventListener('keydown',e=>{je.keys[e.code]=!0,'KeyV'!==e.code&&'Tab'!==e.code||(e.preventDefault(),it()),'Digit1'===e.code&&ue(1),'Digit2'===e.code&&ue(2)
}),addEventListener('keyup',e=>{je.keys[e.code]=!1}),addEventListener('blur',()=>{je.keys={}});var Ye=F.domElement,Ke=!1,Ne=0,Ze=0;function Qe(e,t,a){
je.yaw-=e*a,je.pitch=Math.max(-1.3,Math.min(1.3,je.pitch-t*a)),je.tween=null}Ye.addEventListener('mousedown',e=>{if('walk'===je.mode){
if(Ye.requestPointerLock&&!document.pointerLockElement&&!$)try{const e=Ye.requestPointerLock();e&&e.catch&&e.catch(()=>{})}catch(e){}Ke=!0,Ne=e.clientX,
Ze=e.clientY}}),addEventListener('mouseup',()=>Ke=!1),addEventListener('mousemove',e=>{
'walk'===je.mode&&(document.pointerLockElement===Ye?Qe(e.movementX,e.movementY,.0022):Ke&&(Qe(e.clientX-Ne,e.clientY-Ze,.004),Ne=e.clientX,Ze=e.clientY))}),
document.addEventListener('pointerlockchange',()=>document.body.classList.toggle('locked',document.pointerLockElement===Ye))
;var Je=document.getElementById('joy'),et=document.getElementById('knob'),tt=null,at=null,ot={x:0,y:0},nt={x:0,y:0};function rt(e){
let t=e.clientX-ot.x,a=e.clientY-ot.y;const o=Math.hypot(t,a);o>50&&(t*=50/o,a*=50/o),et.style.transform=`translate(${t}px,${a}px)`,je.joy={x:t/50,y:a/50},
je.tween=null}function lt(){tt=null,et.style.transform='',je.joy={x:0,y:0}}function it(){'walk'===je.mode?Oe('orbit'):Oe('walk')}
Je.addEventListener('touchstart',e=>{e.preventDefault(),function(e){tt=e.identifier;const t=Je.getBoundingClientRect();ot={x:t.left+t.width/2,y:t.top+t.height/2
},rt(e)}(e.changedTouches[0])},{passive:!1}),Ye.addEventListener('touchstart',e=>{
if('walk'===je.mode)for(const t of e.changedTouches)null===at&&(at=t.identifier,nt={x:t.clientX,y:t.clientY})},{passive:!0}),addEventListener('touchmove',e=>{
for(const t of e.changedTouches)t.identifier===tt?(e.preventDefault(),rt(t)):t.identifier===at&&'walk'===je.mode&&(Qe(t.clientX-nt.x,t.clientY-nt.y,.006),nt={
x:t.clientX,y:t.clientY})},{passive:!1}),addEventListener('touchend',e=>{for(const t of e.changedTouches)t.identifier===tt&&lt(),t.identifier===at&&(at=null)}),
addEventListener('touchcancel',()=>{lt(),at=null}),V('modeBtn').onclick=()=>it(),
document.querySelectorAll('[data-scheme]').forEach(e=>e.onclick=()=>ue(+e.dataset.scheme));var st=V('rooms');Be.forEach(e=>{
const t=document.createElement('button');t.textContent=e.name,t.dataset.room=e.id,t.onclick=()=>Xe(e),st.appendChild(t)}),
V('helpBtn').onclick=()=>V('intro').classList.remove('hidden'),V('startBtn').onclick=()=>{V('intro').classList.add('hidden')},V('startWalk').onclick=()=>{
V('intro').classList.add('hidden'),Xe('living',!0)},$&&document.body.classList.add('touch'),j.has('shot')&&document.body.classList.add('shot'),
j.has('clean')&&document.body.classList.add('clean');var ct=V('labels'),dt=Be.filter(e=>!['entry','kitchen'].includes(e.id)||!0).map(t=>{
const a=document.createElement('div');return a.className='label',a.textContent=t.name,a.onclick=()=>Xe(t),ct.appendChild(a),{el:a,
v:new e.Vector3(B(t.lx),1.2,A(t.ly))}}),ht=V('minimap'),ut=ht.getContext('2d'),pt=B(760)-B(200),mt=A(1720)-A(110),ft=null,wt=1;function gt(){
const e=ht.clientHeight||260,t=Math.round(e*pt/mt),a=Math.min(2,window.devicePixelRatio);ht.width=t*a,ht.height=e*a,ht.style.width=t+'px',wt=e*a/mt
;const o=document.createElement('canvas');o.width=ht.width,o.height=ht.height;const n=o.getContext('2d'),r=e=>(e-B(200))*wt,l=e=>(e-A(110))*wt
;n.fillStyle=1===ce?'rgba(236,228,214,0.92)':'rgba(150,112,82,0.92)',n.fillRect(r(B(248)),l(A(140)),(B(713)-B(248))*wt,(A(1700)-A(140))*wt),ye.forEach(e=>{
n.fillStyle='wall'===e.kind?'#2a2623':'glass'===e.kind?'#7fb3c9':'rgba(80,70,60,0.35)',
n.fillRect(r(e.x1),l(e.z1),Math.max(1.5,(e.x2-e.x1)*wt),Math.max(1.5,(e.z2-e.z1)*wt))}),n.fillStyle='#7fb3c9',
n.fillRect(r(B(262)),l(A(1697)),(B(698)-B(262))*wt,3*a),n.font=10*a+'px sans-serif',n.fillStyle=1===ce?'#5a5048':'#fff3e6',n.textAlign='center',Be.forEach(e=>{
'entry'!==e.id&&n.fillText(e.name,r(B(e.lx)),l(A(e.ly)))}),ft=o}ht.addEventListener('click',t=>{
const a=ht.getBoundingClientRect(),o=ht.width/a.width,n=(t.clientX-a.left)*o/wt+B(200),r=(t.clientY-a.top)*o/wt+A(110)
;if(n<B(250)||n>B(711)||r<A(142)||r>A(1695))return;const l=new e.Vector3(n,Ve,r);He(l);Xe({id:'mm',ox:l.x/G+248,oy:l.z/G+140,yaw:'walk'===je.mode?je.yaw:0})})
;var yt=null,bt=null;function Mt(t){q=t,localStorage.setItem('tf_q',t);const a=window.devicePixelRatio||1
;F.setPixelRatio('high'===t?Math.min(a,2):'mid'===t?Math.min(a,1.25):Math.min(a,$?1.25:1)),F.setSize(innerWidth,innerHeight),yt&&yt.dispose(),(yt=new n(F,{
frameBufferType:e.HalfFloatType})).addPass(new r(H,N)),bt=null,'low'!==t&&(bt=new p(H,N,innerWidth,innerHeight),Object.assign(bt.configuration,{aoRadius:.7,
distanceFalloff:.6,intensity:'high'===t?2.4:2,gammaCorrection:!1,halfRes:'mid'===t,aoSamples:'high'===t?16:8,denoiseSamples:8,denoiseRadius:10,
color:new e.Color('#1a1410')}),yt.addPass(bt));const o=[new i({preset:s.HIGH})];'low'!==t&&o.push(new c({luminanceThreshold:.85,luminanceSmoothing:.25,
intensity:.22,mipmapBlur:!0,radius:.6})),o.push(new u({darkness:.32,offset:.35})),o.push(new d({mode:h.ACES_FILMIC})),yt.addPass(new l(N,...o)),
yt.setSize(innerWidth,innerHeight),document.querySelectorAll('[data-q]').forEach(e=>e.classList.toggle('on',e.dataset.q===t)),
'low'===t&&K?H.environment=X:K&&(H.environment=K),Dt()}F.toneMappingExposure=.82;var xt=new e.WebGLCubeRenderTarget('high'===q?256:128,{type:e.HalfFloatType
}),vt=new e.CubeCamera(.05,80,xt),kt=new e.Vector3(1e9,0,0),Pt=!0;function St(e){if('low'===q)return;const t=[fe.visible,we.visible],a=H.background
;fe.visible=!0,we.visible=!0,Y&&(H.background=Y),H.environment=X,H.environmentIntensity=.35,vt.position.copy(e),vt.update(F,H),K&&K.dispose(),
K=O.fromCubemap(xt.texture).texture,H.environment=K,H.environmentIntensity=.85,H.background=a,fe.visible=t[0],we.visible=t[1],kt.copy(e),Pt=!1}he=()=>{Pt=!0}
;var Et=null,zt=!1,Ct=null,_t=!0,Lt=!1;function Dt(){Et&&zt&&(_t=!0)}async function It(t){if(!Lt){if(zt=t,document.body.classList.toggle('pt',t),
V('ptBtn').classList.toggle('on',t),!t)return F.toneMapping=e.NoToneMapping,H.environment='low'!==q&&K?K:X,H.environmentIntensity=K?.85:.35,
void(V('ptStat').textContent='');Lt=!0,V('ptStat').textContent='光线追踪：加载渲染器…';try{Ct||(Ct=await(import('three-gpu-pathtracer'))),
Et||(Et=new Ct.WebGLPathTracer(F),Object.assign(Et,{renderDelay:0,fadeDuration:0,minSamples:1,dynamicLowRes:!0,lowResScale:.3,bounces:'high'===q?6:4,
filterGlossyFactor:.6}),Et.tiles.set(2,2)),_t=!0}catch(e){console.warn(e),V('ptStat').textContent='光线追踪不可用（浏览器不支持）',zt=!1,document.body.classList.remove('pt')}
Lt=!1}}var Wt=new e.Matrix4;function Tt(){const e=innerWidth,t=innerHeight;F.setSize(e,t),yt&&yt.setSize(e,t),N.aspect=e/t,
N.fov='walk'===je.mode?je.vfov||(e<t?80:72):40,N.updateProjectionMatrix(),gt(),Dt()}addEventListener('resize',Tt)
;var Gt=new e.Clock,Rt=new e.Vector3,Bt=new e.Vector3,At=new e.Vector3,$t=0;var jt=0,Vt=0,qt=0
;document.querySelectorAll('[data-q]').forEach(e=>e.onclick=()=>Mt(e.dataset.q)),V('ptBtn').onclick=()=>It(!zt),
V('creditBtn').onclick=()=>V('credits').classList.remove('hidden'),V('creditClose').onclick=()=>V('credits').classList.add('hidden');var Ut=V('views')
;Ae.forEach((e,t)=>{const a=document.createElement('button');a.textContent=`${t+1} ${e.name}`,a.title=e.page,a.onclick=()=>$e(e),Ut.appendChild(a)}),
V('viewsBtn').onclick=()=>Ut.classList.toggle('hidden'),k.onProgress=(e,t,a)=>{const o=Math.round(t/a*100);V('barIn').style.width=o+'%',
V('loadTxt').textContent=`正在加载真实材质与模型… ${t}/${a}`};var Ft,Ht=!0;if(k.onLoad=()=>{V('loadbar').classList.add('done'),Ht&&(Ht=!1,
V('loading').classList.add('hidden'),window.__ready=!0),pe(),he(),Dt(),setTimeout(()=>{const e=function(){const e=performance.getEntriesByType('resource')
;let t=0,a=0;return e.forEach(e=>{const o=e.transferSize||e.encodedBodySize||e.decodedBodySize||0;t+=o,a++}),{bytes:t,files:a}}();window.__bytes=e.bytes+P.bytes
},500)},Mt(q),ue(+(j.get('scheme')||1)),Oe('orbit'),pe(),Tt(),j.has('nointro')&&V('intro').classList.add('hidden'),j.get('room')&&Xe(j.get('room'),!0),
'walk'!==j.get('view')||j.get('room')||Xe('living',!0),j.get('cam')){const e=Ae.find(e=>e.id===j.get('cam'));e&&$e(e,!0)}
(Ft='https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/canary_wharf_1k.hdr',new Promise(e=>new x(k).load(Ft,t=>{t.mapping=b.EquirectangularReflectionMapping,
e(t)},void 0,()=>e(null)))).then(e=>{e&&(Y=e,H.backgroundRotation.y=2.2,H.backgroundIntensity=1.6,H.environmentRotation.y=2.2,
'walk'===je.mode&&(H.background=Y),he())}),Ge('potted_plant_02',B(495),0,A(1668),1,.6),Ge('potted_plant_04',B(262),.92,A(1590),.28,.3),
Ge('potted_plant_04',B(485),.89,A(447),.24,1.2),Ge('ceramic_vase_04',B(262),1.58,A(1300),.24,0),Ge('ceramic_vase_01',B(262),1.58,A(1320),.2,0),
Ge('ceramic_vase_01',B(713)-.35,.54,A(1032)+1.18,.26,0),Ge('standing_picture_frame_01',B(262),.76,A(1060),.28,Math.PI/2),setTimeout(()=>{
V('loading').classList.add('hidden'),window.__ready=!0},25e3),function t(){const a=Math.min(.05,Gt.getDelta());!function(e){if('walk'===je.mode){if(je.tween){
const t=je.tween;t.t=Math.min(1,t.t+e/.9);const a=t.t<.5?2*t.t*t.t:1-Math.pow(-2*t.t+2,2)/2;let o=t.to.yaw-t.from.yaw;o=Math.atan2(Math.sin(o),Math.cos(o)),
je.pos.x=t.from.x+(t.to.x-t.from.x)*a,je.pos.z=t.from.z+(t.to.z-t.from.z)*a,je.yaw=t.from.yaw+o*a,je.pitch=t.from.pitch+((t.to.pitch??-.05)-t.from.pitch)*a,
t.t>=1&&(je.tween=null)}else{const t=je.keys;let a=0,o=0;(t.KeyW||t.ArrowUp)&&(o+=1),(t.KeyS||t.ArrowDown)&&(o-=1),t.KeyA&&(a-=1),t.KeyD&&(a+=1),
t.ArrowLeft&&(je.yaw+=1.8*e),t.ArrowRight&&(je.yaw-=1.8*e),t.KeyQ&&(je.yaw+=1.8*e),t.KeyE&&(je.yaw-=1.8*e),a+=je.joy.x,o-=je.joy.y;const n=Math.hypot(a,o)
;if(n>.05){const r=(t.ShiftLeft||t.ShiftRight?3.2:1.7)*Math.min(1,n);Rt.set(-Math.sin(je.yaw),0,-Math.cos(je.yaw)),Bt.set(Math.cos(je.yaw),0,-Math.sin(je.yaw)),
At.copy(Rt).multiplyScalar(o/n).addScaledVector(Bt,a/n).multiplyScalar(r*e);const l=Math.ceil(At.length()/.08)
;for(let e=0;e<l;e++)je.pos.addScaledVector(At,1/l),He(je.pos);je.bob=(je.bob||0)+e*r*5}}
N.position.set(je.pos.x,(je.eye||Ve)+.012*Math.sin(je.bob||0),je.pos.z),N.rotation.set(je.pitch,je.yaw,0)}else{Ue.update();const e=innerWidth,t=innerHeight
;dt.forEach(a=>{At.copy(a.v).project(N);const o=At.z<1;a.el.style.display=o?'':'none',
a.el.style.transform=`translate(-50%,-50%) translate(${(.5*At.x+.5)*e}px,${(.5*-At.y+.5)*t}px)`})}}(a),N.updateMatrixWorld();const o=!Wt.equals(N.matrixWorld)
;Wt.copy(N.matrixWorld),$t=o?0:$t+a,'walk'===je.mode&&'low'!==q&&!zt&&$t>.4&&(Pt||kt.distanceTo(N.position)>1)&&St(N.position.clone().setY(1.4)),
zt&&Et&&!Lt?_t?async function(){Lt=!0,V('ptStat').textContent='光线追踪：构建场景BVH…',await new Promise(e=>setTimeout(e,30)),F.toneMapping=e.ACESFilmicToneMapping,
F.toneMappingExposure=1,H.environment=Y||X,H.environmentIntensity=.9,N.updateMatrixWorld(),Et.setScene(H,N),_t=!1,Lt=!1}():(o&&Et.updateCamera(),
Et.renderSample(),V('ptStat').textContent=`光线追踪中 · 采样 ${Math.floor(Et.samples)} · 静止不动可获得更细腻画面`):zt||yt.render(a),function(){if(!ft)return
;ut.clearRect(0,0,ht.width,ht.height),ut.drawImage(ft,0,0);const e=je.pos,t=je.yaw,a=(e.x-B(200))*wt,o=(e.z-A(110))*wt,n=ht.width/ht.clientWidth
;'walk'===je.mode&&(ut.save(),ut.translate(a,o),ut.rotate(-t),ut.fillStyle='rgba(230,120,40,0.25)',ut.beginPath(),ut.moveTo(0,0),
ut.arc(0,0,28*n,-Math.PI/2-.6,-Math.PI/2+.6),ut.fill(),ut.fillStyle='#e66a1e',ut.beginPath(),ut.arc(0,0,4.5*n,0,7),ut.fill(),ut.restore())}(),jt++,
(Vt+=a)>1&&(qt=jt/Vt,jt=0,Vt=0,V('fps').textContent=qt.toFixed(0)+' fps · '+{high:'高',mid:'中',low:'低'}[q]),requestAnimationFrame(t)}(),window.__app={
applyScheme:ue,teleport:Xe,setMode:Oe,state:je,colliders:ge,renderer:F,scene:H,camera:N,gotoView:$e,VIEWS:Ae,togglePT:It,applyQuality:Mt,captureProbe:St,
get pt(){return Et}};