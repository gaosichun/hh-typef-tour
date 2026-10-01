import*as e from'three';import{OrbitControls as t}from'three/addons/controls/OrbitControls.js'
;import{RoomEnvironment as a}from'three/addons/environments/RoomEnvironment.js'
;import{RoundedBoxGeometry as o}from'three/addons/geometries/RoundedBoxGeometry.js'
;import{EffectComposer as n,RenderPass as r,EffectPass as l,SMAAEffect as s,SMAAPreset as i,BloomEffect as c,ToneMappingEffect as d,ToneMappingMode as h,VignetteEffect as u}from'postprocessing'
;import{N8AOPostPass as p}from'n8ao';import*as f from'three';function m(e){let t=e>>>0;return()=>(t=1664525*t+1013904223>>>0,t/4294967296)}
function w(e,t=1,a=!0){const o=new f.CanvasTexture(e);return o.wrapS=o.wrapT=f.RepeatWrapping,o.repeat.set(t,t),a&&(o.colorSpace=f.SRGBColorSpace),
o.anisotropy=8,o}function g(e,t=14,a=11,o=256,n=!1){const r=document.createElement('canvas');r.width=r.height=o;const l=r.getContext('2d'),s=m(a),i=function(e){
const t=new f.Color(e);return[255*t.r,255*t.g,255*t.b]}(e),c=l.createImageData(o,o);for(let e=0;e<o;e++)for(let a=0;a<o;a++){let r=(s()-.5)*t
;n&&(r+=a%4<2!=e%4<2?4:-4);const l=4*(e*o+a);c.data[l]=i[0]+r,c.data[l+1]=i[1]+r,c.data[l+2]=i[2]+r,c.data[l+3]=255}return l.putImageData(c,0,0),r}
function y(e=128){const t=document.createElement('canvas');t.width=t.height=e;const a=t.getContext('2d'),o=a.createImageData(e,e)
;for(let t=0;t<e;t++)for(let a=0;a<e;a++){const n=a/e*2-1,r=t/e*2-1
;let l=Math.pow(Math.abs(n),6)*Math.sign(n)*1.6+.12*Math.sin(9*r+3*n),s=Math.pow(Math.abs(r),6)*Math.sign(r)*1.6+.12*Math.sin(8*n-2*r)
;(Math.abs(n)>.93||Math.abs(r)>.93)&&(l=.2*n,s=.2*r);const i=Math.hypot(l,s,1),c=4*(t*e+a);o.data[c]=255*(l/i*.5+.5),o.data[c+1]=255*(-s/i*.5+.5),
o.data[c+2]=255*(1/i*.5+.5),o.data[c+3]=255}return a.putImageData(o,0,0),t}import*as b from'three'
;import{mergeVertices as M}from'three/addons/utils/BufferGeometryUtils.js';var x=(e,t,a)=>Math.max(t,Math.min(a,e));function v(e,t){
const a=43758.5453*Math.sin(127.1*e+311.7*t);return a-Math.floor(a)}function k(e,t){
const a=Math.floor(e),o=Math.floor(t),n=e-a,r=t-o,l=n*n*(3-2*n),s=r*r*(3-2*r),i=v(a,o),c=v(a+1,o),d=v(a,o+1);return i+(c-i)*l+(d-i)*s+(i-c-d+v(a+1,o+1))*l*s}
function P(e){return e.deleteAttribute('uv'),e.deleteAttribute('normal'),(e=M(e,1e-5)).computeVertexNormals(),e}function S(e,t,a,o={}){
const n=Math.min(o.r??.05,e/2-.001,t/2-.001,a/2-.001),r=o.seg??1,l=Math.max(4,Math.ceil(e/.025*r)),s=Math.max(4,Math.ceil(t/.025*r)),i=Math.max(4,Math.ceil(a/.025*r))
;let c=new b.BoxGeometry(e,t,a,l,s,i);const d=c.attributes.position,h=e/2-n,u=t/2-n,p=a/2-n,f=new b.Vector3,m=new b.Vector3,w=new b.Vector3,g=(e,t,a)=>{
if(!t)return 0;const n=Math.round((e+a)/t),r=e+a-n*t;return n>0&&n*t<2*a-.001?Math.exp(-r*r/(o.qw??.012)**2):0};for(let r=0;r<d.count;r++){
f.fromBufferAttribute(d,r),m.set(x(f.x,-h,h),x(f.y,-u,u),x(f.z,-p,p)),w.subVectors(f,m),w.lengthSq()<1e-12&&w.set(0,1,0),w.normalize(),
f.copy(m).addScaledVector(w,n);const l=x(f.x/(e/2),-1,1),s=x(f.y/(t/2),-1,1),i=x(f.z/(a/2),-1,1);if(o.puff){const e=(1-l*l)*(1-i*i)
;f.y+=o.puff*e*Math.max(0,w.y)}if(o.puffF){const e=(1-l*l)*(1-s*s);f.z+=o.puffF*e*Math.max(0,w.z)-o.puffF*e*Math.max(0,-w.z)*.3}if(o.qd){
const n=Math.max(g(f.x,o.qx,e/2),g(f.z,o.qz,a/2),g(f.y,o.qy,t/2));f.addScaledVector(w,-o.qd*n)}o.wr&&f.addScaledVector(w,(k(9*f.x+3*f.y,9*f.z)-.5)*o.wr),
d.setXYZ(r,f.x,f.y,f.z)}return P(c)}function z(e,t,a,o={}){const n=new b.PlaneGeometry(e,t,28,28).attributes.position,r=[],l=[];for(let s=0;s<n.count;s++){
const i=n.getX(s),c=n.getY(s),d=i/(e/2),h=c/(t/2),u=1-d*d*h*h*.12,p=Math.pow(Math.max(0,(1-Math.pow(Math.abs(d),2.6))*(1-Math.pow(Math.abs(h),2.6))),.55),f=a/2*p,m=o.wr?(k(14*i,14*c)-.5)*o.wr*p:0
;r.push([i*u,c*u,f+m]),l.push([i*u,c*u,-f*(o.flatBack?.6:1)])}const s=[],i=[],c=29;r.forEach(e=>s.push(...e)),l.forEach(e=>s.push(...e))
;for(let e=0;e<28;e++)for(let t=0;t<28;t++){const a=e*c+t,o=a+1,n=a+c,r=n+1;i.push(a,n,o,o,n,r);const l=841;i.push(l+a,l+o,l+n,l+o,l+r,l+n)}
const d=new b.BufferGeometry;return d.setAttribute('position',new b.Float32BufferAttribute(s,3)),d.setIndex(i),P((d.toNonIndexed,d))}function E(e,t,a=.01,o=32){
const n=new b.ExtrudeGeometry(e,{depth:Math.max(.001,t-2*a),bevelEnabled:a>0,bevelSize:a,bevelThickness:a,bevelSegments:4,curveSegments:o})
;return n.rotateX(-Math.PI/2),n.translate(0,a,0),n.computeVertexNormals(),n}function C(e,t,a,o=0){const n=new b.Shape;for(let r=0;r<=160;r++){
const l=r/160*Math.PI*2;let s=0;for(let n=0;n<e;n++){const r=o+n/e*Math.PI*2,i=Math.cos(r)*a,c=Math.sin(r)*a,d=Math.cos(l)*i+Math.sin(l)*c,h=d*d-(i*i+c*c-t*t)
;h>=0&&(s=Math.max(s,d+Math.sqrt(h)))}const i=Math.cos(l)*s,c=Math.sin(l)*s;r?n.lineTo(i,c):n.moveTo(i,c)}return n}function L(e,t,a){
const o=new b.Shape,n=-e/2,r=-t/2;return o.moveTo(n+a,r),o.lineTo(n+e-a,r),o.quadraticCurveTo(n+e,r,n+e,r+a),o.lineTo(n+e,r+t-a),
o.quadraticCurveTo(n+e,r+t,n+e-a,r+t),o.lineTo(n+a,r+t),o.quadraticCurveTo(n,r+t,n,r+t-a),o.lineTo(n,r+a),o.quadraticCurveTo(n,r,n+a,r),o}function _(e,t,a=.4){
const o=[new b.Vector2(0,0)],n=t*a;o.push(new b.Vector2(e-n,0));for(let a=0;a<=8;a++){const r=-Math.PI/2+a/8*Math.PI
;o.push(new b.Vector2(e-n+Math.cos(r)*n,t/2+Math.sin(r)*t/2))}return o.push(new b.Vector2(0,t)),new b.LatheGeometry(o,72)}function I(e,t=48){
return new b.LatheGeometry(e.map(([e,t])=>new b.Vector2(e,t)),t)}function D(e,t,a=24,o=8){
return new b.TubeGeometry(new b.CatmullRomCurve3(e.map(e=>new b.Vector3(...e)),!1,'catmullrom',.1),a,t,o,!1)}function T(e,t,a,o){const n=S(e,a,o,{
r:Math.min(.03,o/2-.002),puffF:-.006}),r=n.attributes.position;for(let e=0;e<r.count;e++){const o=r.getX(e);r.setXYZ(e,o,r.getY(e)+a/2,r.getZ(e)-o*o/(2*t))}
return n.computeVertexNormals(),n}function G(e,t=64){const a=[],o=[],n=e.length;e.forEach(([e,o,n,r,l=0])=>{for(let s=0;s<t;s++){
const i=s/t*Math.PI*2,c=Math.cos(i),d=Math.sin(i);a.push(o*Math.sign(c)*Math.pow(Math.abs(c),2/r),e,l+n*Math.sign(d)*Math.pow(Math.abs(d),2/r))}})
;for(let e=0;e<n-1;e++)for(let a=0;a<t;a++){const n=e*t+a,r=e*t+(a+1)%t,l=n+t,s=r+t;o.push(n,l,r,r,l,s)}const r=a.length/3;a.push(0,e[0][0],e[0][4]||0)
;const l=r+1,s=e[n-1];a.push(0,s[0],s[4]||0);for(let e=0;e<t;e++)o.push(r,e,(e+1)%t),o.push(l,(n-1)*t+(e+1)%t,(n-1)*t+e);const i=new b.BufferGeometry
;return i.setAttribute('position',new b.Float32BufferAttribute(a,3)),i.setIndex(o),i.computeVertexNormals(),i}function W(e,t,a,o,n=6,r=.9,l=64){
return G([[0,e*r,t*r,n],[.15*a,.98*e,.98*t,n],[a,e,t,n],[a,e-o,t-o,n],[1.5*o,.94*(e-o),.9*(t-o),n]],l)}import*as V from'three'
;import{GLTFLoader as B}from'three/addons/loaders/GLTFLoader.js';import{RGBELoader as q}from'three/addons/loaders/RGBELoader.js'
;import{unzipSync as R}from'fflate';var A=new V.LoadingManager,$={bytes:0,files:0}
;A.setURLModifier(e=>e.replace(/[/]Models[/]gltf[/]1k[/]([^/]+)[/]textures[/]/,'/Models/jpg/1k/$1/').replace(/[/]Models[/]gltf[/]1k[/]([^/]+)[/]([^/]+[.]bin)$/,'/Models/gltf/8k/$1/$2'))
;var j='https://dl.polyhaven.org/file/ph-assets/',F=new V.TextureLoader(A);F.setCrossOrigin('anonymous');var U=new B(A),X=8;function H(e){try{
const t=document.createElement('canvas');t.width=t.height=16;const a=t.getContext('2d');a.drawImage(e,0,0,16,16);const o=a.getImageData(0,0,16,16).data
;let n=0,r=0,l=0;for(let e=0;e<o.length;e+=4)n+=o[e],r+=o[e+1],l+=o[e+2];const s=o.length/4;return[n/s/255,r/s/255,l/s/255]}catch(e){return null}}
function Y(e,t,a,o,n='#9d968d',r=3){const l=2048,s=document.createElement('canvas');s.width=s.height=l;const i=s.getContext('2d');let c=r
;const d=()=>(c=16807*c%2147483647)/2147483647,h=l/t,u=a*h,p=o*h;for(let t=0;t<l;t+=p)for(let a=0;a<l;a+=u){
const o=e.width*(.35+.2*d()),n=o*(p/u),r=d()*(e.width-o),l=d()*Math.max(1,e.height-n);i.drawImage(e,r,l,o,n,a,t,u,p),
i.fillStyle=d()<.5?`rgba(255,250,240,${.06*d()})`:`rgba(60,50,40,${.05*d()})`,i.fillRect(a,t,u,p)}i.fillStyle=n;for(let e=0;e<=l;e+=u)i.fillRect(e-1.5,0,3,l)
;for(let e=0;e<=l;e+=p)i.fillRect(0,e-1.5,l,3);return s}function N(e,t,a){return e.wrapS=e.wrapT=V.RepeatWrapping,e.repeat.set(1/t.size,1/(t.sizeV||t.size)),
t.rot&&(e.rotation=t.rot),e.anisotropy=X,e.colorSpace=a?V.SRGBColorSpace:V.NoColorSpace,e.needsUpdate=!0,e}var O={};var K=e=>new V.Color(e);function Z(e,t,a){
if(e.userData.spec=t,e.color.copy(K(t.target||'#ffffff')),void 0!==t.rough&&(e.roughness=t.rough),!t.id)return e.map=e.normalMap=e.roughnessMap=e.aoMap=null,
e.needsUpdate=!0,void(a&&a());const o=function(e){const t=[e.src,e.id,e.res,e.size,e.rot,e.tiles].join('|');if(O[t])return O[t];const a={};if('ph'===e.src){
const t=e.res||'1k',o=`${j}Textures/jpg/${t}/${e.id}/${e.id}_`,n=e.nres||t,r=`${j}Textures/jpg/${n}/${e.id}/${e.id}_`,l=[],s=(t,a)=>new Promise(o=>{
F.load(t,t=>o(N(t,e,a)),void 0,()=>o(null))});!1!==e.diff&&l.push(s(`${o}diff_${t}.jpg`,!0).then(t=>{if(t)if(a.avg=H(t.image),e.tiles){
const o=new V.CanvasTexture(Y(t.image,e.size,e.tiles[0],e.tiles[1],e.grout));N(o,e,!0),a.map=o,t.dispose()}else a.map=t})),
!1!==e.nor&&l.push(s(`${r}nor_gl_${n}.jpg`,!1).then(e=>a.normalMap=e)),!1!==e.arm&&l.push(s(`${r}${e.rgh?'rough':'arm'}_${n}.jpg`,!1).then(t=>(a.arm=t,
a.armHasAO=!e.rgh))),a.ready=Promise.all(l).then(()=>a)}else{
const t=`https://acg-download.struffelproductions.com/file/ambientCG-Web/download/${e.id}_${e.hash}/${e.id}_1K-JPG.zip`;A.itemStart(t),a.ready=fetch(t,{
mode:'cors'}).then(e=>{if(!e.ok)throw new Error(e.status);return e.arrayBuffer()}).then(async t=>{$.bytes+=t.byteLength;const o=R(new Uint8Array(t),{
filter:e=>/_(Color|NormalGL|Roughness)[.]jpg$/.test(e.name)}),n=async e=>{const t=Object.keys(o).find(t=>t.endsWith(e));if(!t)return null;const a=new Image
;return a.src=URL.createObjectURL(new Blob([o[t]],{type:'image/jpeg'})),await a.decode(),a
},[r,l,s]=await Promise.all([n('_Color.jpg'),n('_NormalGL.jpg'),n('_Roughness.jpg')]);if(r){a.avg=H(r)
;const t=e.tiles?Y(r,e.size,e.tiles[0],e.tiles[1],e.grout):r;a.map=N(e.tiles?new V.CanvasTexture(t):new V.Texture(t),e,!0)}
return l&&!1!==e.nor&&(a.normalMap=N(new V.Texture(l),e,!1)),s&&(a.arm=N(new V.Texture(s),e,!1),a.armHasAO=!1),a
}).catch(t=>(console.warn('ambientCG load failed',e.id,t.message),a)).finally(()=>A.itemEnd(t))}return O[t]=a}(t);o.ready.then(()=>{if(e.userData.spec===t){
if(e.map=!1===t.diff?null:o.map||null,e.normalMap=o.normalMap||null,e.normalMap&&e.normalScale.set(t.ns||1,t.ns||1),e.roughnessMap=o.arm||null,
e.aoMap=o.arm&&o.armHasAO&&!1!==t.ao?o.arm:null,e.aoMapIntensity=t.aoI??.8,e.roughness=t.rough??1,e.map&&o.avg&&t.target){
const a=(new V.Color).setRGB(o.avg[0],o.avg[1],o.avg[2],V.SRGBColorSpace),n=K(t.target)
;e.color.setRGB(Math.min(4,n.r/Math.max(.01,a.r)),Math.min(4,n.g/Math.max(.01,a.g)),Math.min(4,n.b/Math.max(.01,a.b)))}e.needsUpdate=!0,a&&a()}})}
var Q=.0127,J=2.8,ee=e=>(e-248)*Q,te=e=>(e-140)*Q,ae=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&window.innerWidth<1100,oe=new URLSearchParams(location.search),ne=e=>document.getElementById(e),re=oe.get('q')||localStorage.getItem('tf_q')||(ae?'low':'high')
;['high','mid','low'].includes(re)||(re='high');var le,se=new e.WebGLRenderer({antialias:!1,stencil:!1,powerPreference:'high-performance',
preserveDrawingBuffer:oe.has('shot')});se.setSize(window.innerWidth,window.innerHeight),se.outputColorSpace=e.SRGBColorSpace,se.toneMapping=e.NoToneMapping,
se.shadowMap.enabled=!0,se.shadowMap.type=e.PCFSoftShadowMap,se.shadowMap.autoUpdate=!1,le=Math.min(8,se.capabilities.getMaxAnisotropy()),X=le,
ne('app').appendChild(se.domElement);var ie=new e.Scene;ie.background=new e.Color('#24211f');var ce=new e.PMREMGenerator(se),de=ce.fromScene(new a,.04).texture
;ie.environment=de,ie.environmentIntensity=.35;var he=null,ue=null,pe=new e.PerspectiveCamera(40,innerWidth/innerHeight,.05,300);pe.rotation.order='YXZ'
;var fe=pe,me=t=>new e.MeshStandardMaterial(t),we=(e,t=1.6)=>me({color:'#000000',emissive:e,emissiveIntensity:t,roughness:1}),ge={floor:me(),wall:me(),
ceiling:me({color:'#f1eee9',roughness:.95}),accent:me(),cabUpper:me(),cabLower:me(),tvPanel:me(),wood:me(),closet:me(),counter:me(),marble:me(),
blackMarble:me(),sofa:me(),pillow:me(),pillow2:me(),lounge:me(),throwM:me(),stool:me(),dinChair:me(),dinChair2:me(),rug:me(),rug2:me({roughness:1}),metal:me({
color:'#141414',roughness:.38,metalness:.7}),brass:me({color:'#b08a55',roughness:.3,metalness:1}),steel:me({color:'#7d7c7a',roughness:.28,metalness:.9}),
chrome:me({color:'#d8d8d8',roughness:.08,metalness:1}),glass:new e.MeshPhysicalMaterial({color:'#e4ecec',roughness:.03,metalness:0,transparent:!0,opacity:.12,
depthWrite:!1,side:e.DoubleSide,envMapIntensity:1.5}),smoked:new e.MeshPhysicalMaterial({color:'#5a4a3c',roughness:.05,metalness:0,transparent:!0,opacity:.38,
depthWrite:!1,side:e.DoubleSide}),frosted:new e.MeshPhysicalMaterial({color:'#e8e6e0',roughness:.6,transparent:!0,opacity:.55,depthWrite:!1,side:e.DoubleSide}),
tv:me({color:'#040404',roughness:.08,metalness:.3}),panelDark:me({color:'#101010',roughness:.62,envMapIntensity:.4}),bedding:me(),sheet:me(),headboard:me(),
bedBase:me(),vanity:me(),tile:me(),bathFloor:me(),porcelain:me({color:'#f6f5f2',roughness:.08}),mirror:me({color:'#ffffff',roughness:.02,metalness:1}),
black:me({color:'#111',roughness:.5}),led:we('#fff1d9',1.5),ledWarm:we('#ffd6a0',1.8),ledOrange:we('#ff9a52',1.6),curtain:me({color:'#f4f1ea',roughness:1,
transparent:!0,opacity:.72,side:e.DoubleSide}),art:me({roughness:.9}),plant:me({color:'#5d7048',roughness:.9}),flower:me({color:'#f5f2ea',roughness:.9}),
book:me({color:'#3a3f46',roughness:.8}),white:me({color:'#f2f0ec',roughness:.6}),washer:me({color:'#e9e9e7',roughness:.3}),fridge:me({color:'#8c8780',
roughness:.4,metalness:.15})};ge.tv.envMapIntensity=1.5;var ye=(e,t,a={})=>({src:'ph',id:e,size:t,...a}),be=(e,t,a,o={})=>({src:'acg',id:e,hash:t,size:a,...o
}),Me=(e,t=.6)=>({target:e,rough:t}),xe='low'===re,ve={floor1:ye('laminate_floor_02',1.7,{rot:Math.PI/2,target:'#bd9a71',rough:.85,res:xe?'1k':'2k',nres:'1k'}),
floor2:ye('laminate_floor_02',1.7,{rot:Math.PI/2,target:'#6e4b33',rough:.8,res:xe?'1k':'2k',nres:'1k'}),wall1:ye('plastered_wall_04',3.2,{diff:!1,
target:'#ece8e1',rough:.95,ns:.25,ao:!1}),wall2:ye('plastered_wall_04',3.2,{diff:!1,target:'#e7e0d6',rough:.95,ns:.25,ao:!1}),oak:ye('oak_veneer_01',1.83,{
target:'#d0ad84',rough:.85}),oakMid:ye('oak_veneer_01',1.83,{target:'#94735a',rough:.8}),walnut:ye('natural_walnut_veneer',1,{rot:Math.PI/2,target:'#5c3c28',
rough:.8}),lacquerW:Me('#ebe8e3',.42),lacquerG:Me('#dcd8d2',.45),greyCab1:Me('#8e8c88',.5),greyCab2:Me('#76736f',.5),closetW:Me('#e9e5de',.5),
calacatta:be('Marble014','Xqn3wdfc',1.9,{target:'#ebe6df',rough:.22}),nero:be('Marble016','7ZKE2x3V',.9,{target:'#222120',rough:.2}),
stoneWall:be('Marble024','EL4AzDhq',2.4,{target:'#b2a494',rough:.55,tiles:[1.2,.6]}),stoneFloor:be('Marble024','EL4AzDhq',2.4,{target:'#bbae9f',rough:.5,
tiles:[.6,1.2]}),linen1:ye('rough_linen',.27,{target:'#e8e3da',rough:1,ns:.8}),linenP1:ye('rough_linen',.27,{target:'#f2eee7',rough:1,ns:.8}),
linenP2:ye('rough_linen',.27,{target:'#b4b4b2',rough:1,ns:.8}),cognac:ye('fabric_leather_02',.5,{target:'#9a6646',rough:.62}),
cognacP:ye('fabric_leather_02',.5,{target:'#87573b',rough:.62}),darkLeather:ye('fabric_leather_01',.4,{target:'#3a251b',rough:.55}),
navyWool:ye('poly_wool_herringbone',.27,{target:'#2e3a58',rough:1,ns:.7}),taupe:ye('leather_white',.3,{target:'#8b6e5c',rough:.6}),
taupe2:ye('leather_white',.3,{target:'#76594a',rough:.6}),boucleW:ye('wool_boucle',.35,{diff:!1,target:'#ddd7cf',rough:1,ns:1}),boucleD:ye('wool_boucle',.35,{
diff:!1,target:'#4a4b48',rough:1,ns:1}),rug1:ye('poly_wool_herringbone',.27,{target:'#d2cdc5',rough:1,ns:.4}),rug2:ye('poly_wool_herringbone',.27,{
target:'#c3bcb3',rough:1,ns:.4}),throw1:ye('rough_linen',.27,{target:'#d8cfc1',rough:1}),bedding1:ye('rough_linen',.27,{diff:!1,target:'#a2a7ae',rough:1,ns:.6
}),bedding2:ye('rough_linen',.27,{diff:!1,target:'#a9a49e',rough:1,ns:.6}),sheet:ye('rough_linen',.27,{diff:!1,target:'#f1eee8',rough:1,ns:.5}),
bedFab:ye('wool_boucle',.35,{diff:!1,target:'#dcd7cf',rough:1,ns:.6}),bedLeather:ye('leather_white',.3,{target:'#b28a64',rough:.55}),
orange:ye('plastered_wall_04',3.2,{diff:!1,target:'#c4632f',rough:.9,ns:.4,ao:!1}),accent1:ye('plastered_wall_04',3.2,{diff:!1,target:'#ebe6de',rough:.95,
ns:.25,ao:!1}),black:Me('#161615',.5)},ke={1:{name:'方案一 · 浅色极简',accentGlow:0,mats:{floor:'floor1',wall:'wall1',accent:'accent1',cabUpper:'lacquerW',
tvPanel:'lacquerW',cabLower:'greyCab1',wood:'oak',closet:'closetW',counter:'calacatta',marble:'calacatta',blackMarble:'nero',sofa:'linen1',pillow:'linenP1',
pillow2:'linenP2',lounge:'navyWool',stool:'taupe',dinChair:'boucleW',dinChair2:'boucleD',rug:'rug1',throwM:'throw1',bedding:'bedding1',sheet:'sheet',
headboard:'bedFab',bedBase:'bedFab',tile:'stoneWall',bathFloor:'stoneFloor',vanity:'oakMid'},art:['#e9dfcf','#cbb79a','#a99074']},2:{name:'方案二 · 暖调复古',
accentGlow:.5,mats:{floor:'floor2',wall:'wall2',accent:'orange',cabUpper:'lacquerG',tvPanel:'lacquerG',cabLower:'greyCab2',wood:'walnut',closet:'walnut',
counter:'calacatta',marble:'calacatta',blackMarble:'nero',sofa:'cognac',pillow:'cognacP',pillow2:'cognac',lounge:'darkLeather',stool:'taupe2',
dinChair:'boucleW',dinChair2:'boucleD',rug:'rug2',throwM:'throw1',bedding:'bedding2',sheet:'sheet',headboard:'bedLeather',bedBase:'bedLeather',tile:'stoneWall',
bathFloor:'stoneFloor',vanity:'walnut'},art:['#e7dccb','#c3ab8c','#9a7c5d']}},Pe={},Se=w(function(e,t,a=9,o=512){
const n=g(e,10,a,o,!1),r=n.getContext('2d'),l=m(a);r.globalAlpha=.25,r.strokeStyle=t,r.lineWidth=3;for(let e=0;e<6;e++){r.beginPath();let e=0,t=l()*o
;for(r.moveTo(e,t);e<o;)e+=20,t+=30*(l()-.5),r.lineTo(e,t);r.stroke()}return r.globalAlpha=.12,r.lineWidth=16,r.strokeRect(24,24,o-48,o-48),r.globalAlpha=1,n
}('#b9b4ad','#5d5955',13),1);Se.wrapS=Se.wrapT=e.ClampToEdgeWrapping,ge.rug2.map=Se;var ze=1,Ee=[],Ce=()=>{};function Le(t){ze=t;const a=ke[t]
;for(const[e,t]of Object.entries(a.mats))Z(ge[e],ve[t],()=>{_e(),Ce()});ge.accent.emissive.set(2===t?'#c4632f':'#000000'),
ge.accent.emissiveIntensity=a.accentGlow,Pe[t]||(Pe[t]=w(function(e=21,t=512,a=256,o=['#e9dfcf','#c9b598','#a88f72']){const n=document.createElement('canvas')
;n.width=t,n.height=a;const r=n.getContext('2d'),l=m(e);r.fillStyle=o[0],r.fillRect(0,0,t,a);for(let e=0;e<26;e++){r.fillStyle=o[1+e%2],
r.globalAlpha=.25+.4*l(),r.beginPath();const n=l()*t,s=l()*a;r.ellipse(n,s,20+70*l(),10+35*l(),3*l(),0,7),r.fill()}return r.globalAlpha=1,n
}(30+t,1024,512,a.art),1),Pe[t].wrapS=Pe[t].wrapT=e.ClampToEdgeWrapping),ge.art.map=Pe[t],ge.art.userData.keepUV=!0,ge.art.needsUpdate=!0,
Xe&&(Xe.material=2===t?ge.accent:ge.wall),Ee.forEach(e=>e.intensity=2===t?e.userData.i2:e.userData.i1),
document.querySelectorAll('[data-scheme]').forEach(e=>e.classList.toggle('on',+e.dataset.scheme===t)),ne('schemeName').textContent=a.name,Wt(),Ce(),Ot()}
function _e(){se.shadowMap.needsUpdate=!0}var Ie=new e.Group;ie.add(Ie);var De=new e.Group;ie.add(De);var Te=new e.Group;ie.add(Te);var Ge=[],We=[]
;function Ve(e,t,a,o){Ge.push({x1:Math.min(e,a),z1:Math.min(t,o),x2:Math.max(e,a),z2:Math.max(t,o)})}function Be(t,a,n,r,l,s,i,c=Ie,d={}){
const h=d.round?new o(t,a,n,3,Math.min(d.round,t/2-.001,a/2-.001,n/2-.001)):new e.BoxGeometry(t,a,n),u=new e.Mesh(h,r);return u.position.set(l,s+a/2,i),
u.castShadow=!1!==d.cast,u.receiveShadow=!0,c.add(u),u}function qe(e,t,a,o,n,r,l,s={}){
const i=ee(Math.min(e,a)),c=ee(Math.max(e,a)),d=te(Math.min(t,o)),h=te(Math.max(t,o)),u=Be(c-i,r-n,h-d,l,(i+c)/2,n,(d+h)/2,s.parent||Ie,s)
;return s.collide&&Ve(i,d,c,h),s.plan&&We.push({x1:i,z1:d,x2:c,z2:h,kind:s.plan}),u}function Re(e,t={}){return[t.px||e,t.nx||e,t.py||e,t.ny||e,t.pz||e,t.nz||e]}
function Ae(e,t,a,o,n={}){const r=n.px||n.nx||n.pz||n.nz?Re(ge.wall,n):ge.wall;return qe(e,t,a,o,n.y0??0,n.y1??J,r,{collide:(n.y0??0)<1,
plan:(n.y0??0)<1?'wall':null})}function $e(e,t,a,o,n=0,r=J,l=ge.glass,s=!0){const i=qe(e,t,a,o,n,r,l,{cast:!1,collide:n<1,plan:n<1?'glass':null})
;if(i.receiveShadow=!1,i.renderOrder=2,s){
const l=Math.abs(a-e)<Math.abs(o-t),s=.03,i=ee(Math.min(e,a)),c=ee(Math.max(e,a)),d=te(Math.min(t,o)),h=te(Math.max(t,o)),u=(i+c)/2,p=(d+h)/2;if(l){
Be(.04,s,h-d,ge.metal,u,n,p),Be(.04,s,h-d,ge.metal,u,r-s,p);const e=Math.max(1,Math.round((h-d)/.9))
;for(let t=0;t<=e;t++)Be(.045,r-n,s,ge.metal,u,n,d+t*(h-d)/e)}else{Be(c-i,s,.04,ge.metal,u,n,p),Be(c-i,s,.04,ge.metal,u,r-s,p)
;const e=Math.max(1,Math.round((c-i)/.9));for(let t=0;t<=e;t++)Be(s,r-n,.045,ge.metal,i+t*(c-i)/e,n,p)}}return i}function je(t,a,o,n,r,l,s,i=Ie,c=24){
const d=new e.Mesh(new e.CylinderGeometry(t,a,o,c),n);return d.position.set(r,l+o/2,s),d.castShadow=!0,d.receiveShadow=!0,i.add(d),d}function Fe(t,a,o=0,n=0){
const r=new e.Group;return r.position.set(ee(t),n,te(a)),r.rotation.y=o,Ie.add(r),r}var Ue,Xe=null;function He(t,a,o,n,r,l=Ie,s){const i=new e.Mesh(t,a)
;return i.position.set(o,n,r),s&&i.rotation.set(s[0],s[1],s[2]),i.castShadow=!0,i.receiveShadow=!0,l.add(i),i}function Ye(e,t){const a=Fe(e,t,Math.PI/2)
;He(S(.46,.07,.44,{r:.03,puff:.01}),ge.dinChair2,0,.475,0,a),He(T(.44,.4,.32,.035),ge.dinChair2,0,.53,.2,a,[-.1,0,0]),
[[-.2,-.18],[.2,-.18],[-.2,.18],[.2,.18]].forEach(([e,t])=>He(D([[.9*e,.45,.9*t],[e,0,1.05*t]],.011,4,8),ge.wood,0,0,0,a)),
Ve(ee(e)-.25,te(t)-.25,ee(e)+.25,te(t)+.25)}function Ne(e,t,a){const o=Fe(e,t,a),n=ge.metal;He(S(.44,.075,.42,{r:.03,puff:.012}),ge.stool,0,.695,0,o),
He(T(.42,.55,.22,.04),ge.stool,0,.8,.19,o,[-.12,0,0])
;[[-.19,-.17],[.19,-.17],[-.19,.17],[.19,.17]].forEach(([e,t])=>He(D([[.92*e,.66,.92*t],[1.08*e,0,1.1*t]],.009,4,8),n,0,0,0,o)),
[[-.2,-.18,.2,-.18],[.2,-.18,.2,.18],[.2,.18,-.2,.18],[-.2,.18,-.2,-.18]].forEach(([e,t,a,r])=>He(D([[e,.25,t],[a,.25,r]],.008,2,6),n,0,0,0,o)),
[-.15,.15].forEach(e=>He(D([[e,.7,.17],[e,.86,.2]],.008,2,6),n,0,0,0,o))}function Oe(e,t,a,o){const n=Fe(e,t,a);He(S(.47,.085,.46,{r:.035,puff:.014
}),o,0,.465,0,n),
He(T(.46,.36,.36,.04),o,0,.5,.18,n,[-.12,0,0]),[[-.19,-.18],[.19,-.18],[-.19,.17],[.19,.17]].forEach(([e,t])=>He(D([[.9*e,.43,.9*t],[1.05*e,0,1.12*t]],.011,4,8),ge.metal,0,0,0,n)),
Ve(ee(e)-.24,te(t)-.24,ee(e)+.24,te(t)+.24)}function Ke(t,a,o=1.6,n={}){const r=2.05,l=ee(713),s=te(a),i=new e.Group;i.position.set(l,0,s),Ie.add(i),
ge.bedding.side=e.DoubleSide,He(S(.13,.82,o+.16,{r:.05,puffF:0,seg:1}),ge.headboard,-.1,.25+.41,0,i),He(S(r,.28,o+.08,{r:.045
}),ge.bedBase,-.16-r/2,.035+.14,0,i),Be(r-.2,.035,o-.1,ge.black,-.16-r/2,0,0,i,{cast:!1}),He(S(r-.06,.24,o-.02,{r:.07,puff:.01}),ge.sheet,-.16-r/2,.435,0,i)
;const c=.555,d=1.394;He(function(e,t,a,o={}){const n=t+2*a,r=e+a,l=new b.PlaneGeometry(r,n,90,70);l.rotateX(-Math.PI/2),l.translate(-r/2,0,0)
;const s=l.attributes.position,i=t/2,c=o.drop??.92*a,d=.05;for(let t=0;t<s.count;t++){
const a=s.getX(t),o=s.getZ(t),n=Math.max(0,Math.abs(o)-i),r=Math.max(0,-a-e),l=Math.hypot(r,n);let h=a,u=o,p=.05;if(l>0){
const t=r>0?-e:a,s=n>0?Math.sign(o)*i:o,f=-r/l,m=n>0?Math.sign(o)*n/l:0,w=Math.min(l,d*Math.PI/2),g=w/d,y=d*Math.sin(Math.min(g,Math.PI/2)),b=d*(1-Math.cos(Math.min(g,Math.PI/2))),M=Math.max(0,l-w),x=Math.min(M,c),v=Math.max(0,M-c)+.08*x+(r>0&&n>0?.18*x:0)
;h=t+f*(y+v),u=s+m*(y+v),p=.05-b-x;const P=r>0&&n<=0?o:a,S=(.012+x/c*.03)*(r>0&&n>0?2.2:1),z=Math.sin(17*P+4*k(3*P,1.7))*S+(k(7*P,4*x)-.5)*S;h+=f*z,u+=m*z}else{
const t=(a+e/2)/(e/2),n=o/i;p=.05+.02*(1-n*n)*(1-t*t*.6),p+=.018*(k(6*a,6*o)-.5)+.008*(k(18*a,3*o)-.5)}s.setXYZ(t,h,p,u)}return l.computeVertexNormals(),l
}(d,o+.04,.44,{drop:.38}),ge.bedding,-2.21+d,.535,0,i);He(S(.3,.035,o+.08,{r:.016,wr:.012}),ge.bedding,-.936,.615,0,i),[-1,1].forEach(t=>{const a=new e.Group
;a.position.set(-.34,c+.17,t*o*.24),a.rotation.z=-1.05,i.add(a),He(z(.7*o/1.6,.46,.19,{wr:.02}),ge.sheet,0,0,0,a,[0,Math.PI/2,0])});const h=-(o/2+.38),u=o/2+.38
;He(S(.42,.13,.55,{r:.008}),ge.panelDark,-.24,.485,h,i),Be(.004,.004,.5,ge.black,-.452,.45,h,i,{cast:!1}),je(.035,.035,.09,ge.white,-.3,.55,h+.12,i,16),
Be(.2,.02,.14,ge.book,-.25,.55,h-.12,i),He(_(.2,.03),ge.black,-.32,.5,u,i),He(I([[0,.5],[.06,.5],[.035,.38],[.03,.26],[0,.24]],32),ge.black,-.32,0,u,i)
;for(let e=0;e<3;e++){const t=e/3*Math.PI*2+.5
;He(D([[0,.3,0],[.1*Math.cos(t),.12,.1*Math.sin(t)],[.17*Math.cos(t),0,.17*Math.sin(t)]],.028,12,10),ge.black,-.32,0,u,i)}
if(n.noPendant||[[-.28,1.12],[-.43,1.26]].forEach(([t,a])=>{je(.0015,.0015,J-a-.1,ge.metal,t,a+.1,h+.05,i,4),
He(I([[0,.1],[.028,.1],[.03,.02],[.034,0],[.026,0]],24),ge.metal,t,a,h+.05,i);const o=new e.Mesh(new e.CircleGeometry(.026,16),ge.ledWarm)
;o.rotation.x=Math.PI/2,o.position.set(t,a+.004,h+.05),i.add(o)}),Be(.03,1.05,o+1.5,ge.wood,-.015,0,0,i,{cast:!1}),Be(.02,J-1.12,o+1.6,ge.white,-.01,1.08,0,i,{
cast:!1}),n.art){Be(.02,.62,1.2,ge.art,-.035,1.55,0,i,{cast:!1})}return Be(.006,.01,o+1.5,ge.led,-.04,1.05,0,i,{cast:!1}),Ve(l-.16-r,s-o/2-.6,l,s+o/2+.6),i}
function Ze(e,t,a){const o=Fe(e,t,a)
;He(G([[0,.13,.22,2.6,0],[.1,.135,.24,2.6,-.01],[.28,.18,.32,2.4,-.06],[.38,.19,.34,2.4,-.07],[.4,.185,.335,2.4,-.07]]),ge.porcelain,0,0,0,o),
He(G([[.4,.175,.32,2.4,-.07],[.43,.17,.31,2.4,-.07],[.435,.16,.3,2.4,-.07]]),ge.porcelain,0,0,0,o),He(S(.36,.48,.22,{r:.09,puff:.01}),ge.porcelain,0,.24,.22,o),
Be(.1,.004,.05,ge.black,0,.49,.24,o,{cast:!1}),Ve(ee(e)-.3,te(t)-.3,ee(e)+.3,te(t)+.3)}function Qe(t){t.updateMatrixWorld(!0)
;const a=new Set,o=new e.Vector3,n=new e.Vector3,r=new e.Matrix3;t.traverse(t=>{if(!t.isMesh||t.userData.keepUV)return
;if((Array.isArray(t.material)?t.material:[t.material]).some(e=>e.userData.keepUV))return;let l=t.geometry;a.has(l)&&(l=l.clone(),t.geometry=l),a.add(l)
;const s=l.attributes.position,i=l.attributes.normal;if(!i)return;const c=new Float32Array(2*s.count);r.getNormalMatrix(t.matrixWorld)
;for(let e=0;e<s.count;e++){o.fromBufferAttribute(s,e).applyMatrix4(t.matrixWorld),n.fromBufferAttribute(i,e).applyMatrix3(r)
;const a=Math.abs(n.x),l=Math.abs(n.y),d=Math.abs(n.z);let h,u;l>=a&&l>=d?(h=o.x,u=o.z):a>=d?(h=o.z,u=o.y):(h=o.x,u=o.y),c[2*e]=h,c[2*e+1]=u}
l.setAttribute('uv',new e.BufferAttribute(c,2))})}async function Je(t,a,o,n,r,l=0){const s=await function(e){
return new Promise(t=>U.load(`${j}Models/gltf/1k/${e}/${e}_1k.gltf`,e=>t(e.scene),void 0,()=>t(null)))}(t);if(!s)return
;const i=(new e.Box3).setFromObject(s),c=i.getSize(new e.Vector3),d=i.getCenter(new e.Vector3),h=r/c.y;s.scale.setScalar(h),
s.position.set(-d.x*h,-i.min.y*h,-d.z*h);const u=new e.Group;u.add(s),u.position.set(a,o,n),u.rotation.y=l,s.traverse(e=>{e.isMesh&&(e.castShadow=!0,
e.receiveShadow=!0,e.userData.keepUV=!0)}),Ie.add(u),_e(),Ce(),Yt=!0}!function(){
const t=new e.Mesh(new e.PlaneGeometry(ee(713)-ee(248),te(1700)-te(140)),ge.floor);t.rotation.x=-Math.PI/2,
t.position.set((ee(248)+ee(713))/2,0,(te(140)+te(1700))/2),t.receiveShadow=!0,Ie.add(t),qe(417,437,713,582,0,.004,ge.bathFloor,{cast:!1}),
qe(565,600,713,895,0,.004,ge.bathFloor,{cast:!1}),qe(248,1700,713,1716,-.02,0,ge.black,{cast:!1}),qe(200,120,760,1720,J,2.92,ge.ceiling,{parent:De
}).castShadow=!0,qe(640,1175,713,1640,2.48,J,ge.ceiling,{parent:De}),qe(636,1175,640,1640,2.46,J-.31,ge.led,{parent:De,cast:!1}),
qe(300,1160,640,1205,J-.22,J,ge.ceiling,{parent:De}),qe(310,1203,630,1206,2.59,2.77,ge.panelDark,{parent:De,cast:!1});const a=ge.tile;Ae(230,145,248,1700),
qe(213,754,248,802,0,J,ge.wall,{collide:!0,plan:'wall'}),qe(205,1640,262,1716,0,J,ge.wall,{collide:!0,plan:'wall'}),Ae(322,145,400,161),
qe(230,128,250,161,0,J,ge.wall,{collide:!0,plan:'wall'}),qe(205,120,250,135,2.1,J,ge.wall),qe(250,145,322,161,2.13,J,ge.wall),Ae(400,120,423,193),
Ae(410,120,750,140),Ae(713,120,735,437),Ae(713,437,735,582,{nx:a}),Ae(713,582,735,600),Ae(713,600,735,895,{nx:a}),Ae(713,895,735,1640),
qe(713,754,747,802,0,J,ge.wall,{collide:!0}),qe(698,1640,760,1716,0,J,ge.wall,{collide:!0,plan:'wall'}),$e(262,1697,698,1703,0,J,ge.glass,!1),
[262,297,373,455,538,617,698].forEach(e=>qe(e-2.5,1694,e+2.5,1706,0,J,ge.metal)),qe(262,1694,698,1706,0,.06,ge.metal),qe(262,1694,698,1706,J-.08,J,ge.metal),
qe(455,1693,538,1707,0,J,ge.metal,{cast:!1}).visible=!1,qe(410,140,713,190,0,J,ge.closet,{collide:!0,plan:'furn'})
;for(let e=413;e<710;e+=37.5)qe(e,190,e+1,191,.05,2.75,ge.panelDark,{cast:!1});qe(410,191,713,192,0,.05,ge.panelDark,{cast:!1}),$e(408,265,412,430),
qe(405,190,418,195,0,J,ge.wall,{collide:!0}),qe(405,193,418,265,2.15,J,ge.wall),Ae(403,430,713,437,{pz:a}),Ae(407,437,417,505,{px:a}),Ae(407,582,417,592,{px:a
}),qe(407,505,417,582,2.15,J,Re(ge.wall,{px:a})),Ae(407,582,560,600,{nz:a}),Ae(560,582,713,600,{nz:a,pz:a}),$e(643,437,646,540),Ae(405,600,418,1163),
Ae(555,600,565,700,{px:a}),Ae(555,835,565,900,{px:a}),qe(555,700,565,835,2.24,J,Re(ge.wall,{px:a})),Ae(418,895,480,905),qe(480,895,552,905,2.15,J,ge.wall),
Ae(552,895,570,905,{nz:a}),Ae(705,895,713,905,{nz:a}),qe(570,895,705,905,0,.62,Re(ge.wall,{nz:a}),{collide:!0,plan:'wall'}),
qe(570,895,705,905,2.15,J,Re(ge.wall,{nz:a})),$e(570,898,705,902,.62,2.15,ge.glass);for(let e=0;e<3;e++)qe(572,899,703,901,2+.05*e,2+.05*e+.035,ge.white,{
cast:!1});$e(500,1155,700,1159),Ae(699,1155,713,1163),qe(418,1155,500,1163,2.15,J,ge.wall);const o=ge.closet,n=(e,t,a=299)=>{qe(248,e,a,t,0,J,o,{collide:!0,
plan:'furn'});const n=Math.max(1,Math.round((t-e)*Q/.5));for(let o=1;o<n;o++){const r=e+o*(t-e)/n;qe(a,r-.4,a+.6,r+.4,.05,2.75,ge.panelDark,{cast:!1})}
for(let o=0;o<n;o++){const r=e+(o+.5)*(t-e)/n;qe(a,r-.3,a+1.6,r+.3,.9,1.25,ge.metal,{cast:!1})}qe(a,e,a+.6,t,0,.06,ge.panelDark,{cast:!1})};n(370,520),
n(605,752),n(802,935),qe(248,520,323,600,0,J,ge.closet,{collide:!0,plan:'furn'}).visible=!1,qe(248,520,323,526,0,J,ge.closet),qe(248,594,323,600,0,J,ge.closet),
qe(248,520,254,600,0,J,ge.closet),Be(.6,.85,.6,ge.washer,ee(288),.02,te(560)),Be(.6,.85,.6,ge.washer,ee(288),.9,te(560)),
je(.18,.18,.02,ge.black,ee(311.7),.45,te(560)).rotation.z=Math.PI/2,je(.18,.18,.02,ge.black,ee(311.7),1.33,te(560)).rotation.z=Math.PI/2,
qe(254,526,323,594,1.8,J,ge.closet),qe(248,935,299,940,0,J,o,{collide:!0}),qe(248,1157,299,1165,0,J,o,{collide:!0,plan:'wall'}),
qe(248,940,293,1157,.72,.76,ge.wood,{collide:!0,plan:'furn'}),qe(248,940,268,1157,1.15,1.18,ge.wood),qe(248,940,268,1157,1.55,1.58,ge.wood),
qe(248,940,270,1157,1.95,J,o),qe(268,942,269,1155,1.92,1.94,ge.led,{cast:!1})
;for(let e=0;e<9;e++)Be(.03,.22+e%3*.03,.18,e%2?ge.book:ge.white,ee(256),1.18,te(990+3.3*e),Ie,{cast:!1});Ye(318,985),Ye(318,1110),function(){
const t=1167,a=1233;qe(250,t,300,a,0,1.85,ge.fridge,{collide:!0,plan:'furn'}),qe(300,t+1,301,(t+a)/2-.5,.05,1.8,ge.black,{cast:!1}),
qe(300,(t+a)/2+.5,301,a-1,.05,1.8,ge.black,{cast:!1}),qe(300,1190,302,1192,.9,1.4,ge.metal),qe(300,1208,302,1210,.9,1.4,ge.metal),
qe(250,t,300,a,1.85,J,ge.wood),qe(248,1162,300,1167,0,J,ge.wood),qe(248,1233,300,1238,0,J,ge.wood);const o=1238,n=1608;qe(250,o,296,n,.1,.88,ge.cabLower,{
collide:!0,plan:'furn'}),qe(250,o,294,n,0,.1,ge.black,{cast:!1}),qe(248,o,299,n,.88,.92,ge.counter)
;for(let e=o+47;e<n;e+=47)qe(296,e-.3,296.6,e+.3,.12,.86,ge.panelDark,{cast:!1});qe(296,o,296.6,n,.6,.61,ge.panelDark,{cast:!1}),
Xe=qe(248,o,249.5,n,.92,1.55,ge.wall,{cast:!1}),qe(248,o,249.2,n,.92,1.5,ge.accent,{cast:!1}).name='backsplash',qe(248,o,276,n,1.88,J,ge.cabUpper,{plan:null})
;for(let e=o+46;e<n;e+=46)qe(276,e-.3,276.6,e+.3,1.9,2.78,ge.panelDark,{cast:!1});qe(248,o,276,n,1.55,1.58,ge.wood),qe(248,o,276,n,1.86,1.88,ge.wood),
qe(270,o,271,n,1.845,1.855,ge.led,{cast:!1}),qe(270,o,271,n,1.535,1.545,ge.led,{cast:!1})
;for(let e=0;e<6;e++)je(.04,.04,.1+e%2*.05,ge.white,ee(262),1.58,te(1290+6*e),Ie,12);qe(256,1290,292,1340,.92,.93,ge.tv,{cast:!1}),
qe(250,1288,276,1342,1.83,1.88,ge.black),qe(258,1460,290,1505,.905,.925,ge.black,{cast:!1});const r=ee(252),l=te(1482);je(.012,.015,.32,ge.metal,r,.92,l,Ie,10),
Be(.2,.02,.02,ge.metal,r+.09,1.22,l),je(.12,.08,.06,ge.white,ee(270),.92,te(1420),Ie,16),[[-.04,.02],[.04,-.02],[0,.04]].forEach(([t,a])=>{
const o=new e.Mesh(new e.SphereGeometry(.035,12,8),me({color:'#e08a2a',roughness:.6}));o.position.set(ee(270)+t,.99,te(1420)+a),Ie.add(o)}),
je(.07,.08,.2,ge.white,ee(268),.92,te(1560),Ie,16),qe(262,1608,300,1694,0,J,ge.wood,{collide:!0,plan:'furn'}),qe(248,1608,262,1640,0,J,ge.wood)
;const s=1293,i=1424,c=365,d=449;qe(c+4,s+3,d-2,i,0,.88,ge.wood,{collide:!0,plan:'furn'}),qe(c,s,d,i,.88,.93,ge.marble),qe(c,s,d,s+3.5,0,.88,ge.marble),
qe(c,s,c+3.5,i,0,.88,ge.marble),qe(378,i,449,1548,.73,.77,ge.marble,{collide:!1,plan:'furn'}),qe(445,i,449,1548,0,.73,ge.marble),
qe(378,1544,449,1548,0,.73,ge.marble),Ve(ee(378),te(i),ee(449),te(1548)),je(.06,.05,.22,ge.glass,ee(410),.93,te(1360),Ie,16);for(let t=0;t<9;t++){
const a=new e.Mesh(new e.SphereGeometry(.06,10,8),ge.flower);a.position.set(ee(410)+.08*Math.cos(t),1.2+.04*Math.sin(3*t),te(1360)+.08*Math.sin(t)),
a.castShadow=!0,Ie.add(a)}je(.15,.09,.06,ge.white,ee(413),.77,te(1480),Ie,20),Ne(462,1327,-Math.PI/2),Ne(462,1380,-Math.PI/2),
Oe(360,1458,Math.PI/2,ge.dinChair2),Oe(360,1516,Math.PI/2,ge.dinChair),Oe(468,1458,-Math.PI/2,ge.dinChair),Oe(468,1516,-Math.PI/2,ge.dinChair)
;const h=te(1305),u=te(1535),p=ee(408);Be(.07,.04,u-h,ge.wood,p,1.95,(h+u)/2,De),Be(.05,.006,u-h-.04,ge.led,p,1.945,(h+u)/2,De,{cast:!1}),
Be(.004,J-2,.004,ge.metal,p,1.99,h+.1,De),Be(.004,J-2,.004,ge.metal,p,1.99,u-.1,De)}()}(),function(){qe(492,1262,688,1615,.002,.014,ge.rug,{cast:!1}),
function(){const t=new e.Group;Ie.add(t);const a=te(1172),o=.95,n=ee(505),r=ee(688),l=te(1395),s=.27,i=.41,c=ge.sofa
;Be(r-n-.1,.04,.83,ge.black,(n+r)/2,0,a+.475,t,{cast:!1}),Be(.83,.04,l-a-.1,ge.black,r-.475,0,(a+l)/2,t,{cast:!1});const d={r:.08,qd:.03,qw:.024,puff:.02,
seg:1.4},h=(e,a,o,n)=>He(S(e,.375,a,{...d,qx:.42,qz:.35,qy:.19}),c,o,.2225,n,t),u=(e,o,n=0)=>He(S(e,.625,s,{...d,puff:0,puffF:.02,qx:.42,qy:.21
}),c,o,.035+.3125,a+s/2,t,[0,n,0]),p=.26,f=r-o-(n+p);He(S(p,.565,o,{...d,r:.1,puff:.01,qz:.32,qy:.19}),c,n+.13,.3175,a+.475,t);const m=f/1
;for(let e=0;e<1;e++)h(m-.006,.7,n+p+m*(e+.5),a+s+(o-s)/2-.01),u(m-.006,n+p+m*(e+.5));u(.944,r-.475),h(.944,l-a-s+.02,r-.475,a+s+(l-a-s)/2-.01)
;const w=(a,o,n,r,l=.52)=>{const s=new e.Group;s.position.set(a,i+.42*l,o),s.rotation.set(-.32,n,0,'YXZ'),t.add(s),He(z(l,l,.2,{wr:.025}),r,0,0,0,s)}
;w(n+.6,a+s+.1,.12,ge.pillow),w(n+1.08,a+s+.1,-.08,ge.pillow),w(r-.45,a+s+.1,.05,ge.pillow2,.48),He(S(.62,.03,.6,{r:.012,wr:.03,seg:1.2
}),ge.throwM,r-.42,i+.03,l-.5,t,[0,.3,0]),Ve(n,a,r,a+o),Ve(r-o,a,r,l),We.push({x1:n,z1:a,x2:r,z2:a+o,kind:'furn'},{x1:r-o,z1:a,x2:r,z2:l,kind:'furn'})}()
;const t=[ee(565),te(1330)],a=[ee(608),te(1372)];He(_(.47,.03,.6),ge.blackMarble,t[0],.355,t[1]),He(E(C(4,.125,.105,.4),.355,.006),ge.black,t[0],0,t[1]),
He(_(.3,.035,.6),ge.marble,a[0],.5,a[1]),He(E(C(3,.085,.07,.2),.5,.005),ge.black,a[0],0,a[1]),Ve(t[0]-.46,t[1]-.46,a[0]+.3,a[1]+.3),
Be(.3,.035,.22,ge.white,t[0]-.12,.395,t[1]-.05).rotation.y=.3,Be(.26,.03,.19,ge.book,t[0]-.12,.43,t[1]-.05).rotation.y=.25,
je(.045,.05,.2,ge.glass,t[0]+.12,.395,t[1]+.02,Ie,12),Be(.3,.04,.22,ge.white,a[0],.53,a[1]).rotation.y=-.2,function(e,t,a){const o=Fe(e,t,a),n=ge.lounge
;[-1,1].forEach(e=>{const t=.385*e;He(S(.15,.11,.84,{r:.03}),n,t,.565,-.02,o,[-.03,0,0]),He(S(.15,.54,.15,{r:.03}),n,t,.27,-.365,o),He(S(.12,.46,.13,{r:.03
}),n,t,.23,.31,o,[.12,0,0])}),He(S(.62,.2,.72,{r:.07,puff:.025}),n,0,.28,-.04,o,[.1,0,0]),He(S(.62,.6,.17,{r:.06,puffF:-.02}),n,0,.6,.31,o,[.26,0,0]),
Be(.5,.14,.12,n,0,0,.3,o,{round:.02}),Ve(ee(e)-.47,te(t)-.47,ee(e)+.47,te(t)+.47)}(650,1560,2.45);const o=ee(688),n=te(1505);He(_(.13,.018,.8),ge.metal,o,0,n),
je(.007,.007,1.42,ge.metal,o,.018,n,Ie,8),He(D([[o,1.43,n],[o,1.47,n-.05],[o,1.48,n-.6]],.006,12,6),ge.metal,0,0,0),
He(I([[0,.06],[.012,.06],[.03,.03],[.045,0],[.04,0]],24),ge.metal,o,1.42,n-.62);const r=1262,l=1600;qe(694,r,713,l,.3,2.15,ge.tvPanel,{collide:!0,plan:'furn'}),
qe(690,r,694,1345,.3,2.15,ge.tvPanel),qe(689.6,1303,690,1305,.32,2.13,ge.panelDark,{cast:!1}),qe(690,1345,694,l,1.95,2.15,ge.tvPanel),
qe(690,1345,694,l,.3,.6,ge.tvPanel),qe(691,1347,694,1388,.6,1.95,ge.panelDark),qe(693,1388,694,1415,.6,1.95,ge.panelDark),
qe(691,1557,694,1598,.6,1.95,ge.panelDark),qe(693,1530,694,1557,.6,1.95,ge.panelDark),qe(690,1530,694,1557,1.3,1.32,ge.panelDark),
qe(692,1415,694,1530,.6,1.95,ge.panelDark),qe(688.5,1418,692,1528,.66,1.62,ge.tv,{cast:!1}),qe(688.3,1420,688.5,1526,.68,1.6,me({color:'#0b0c0e',roughness:.05,
metalness:.6}),{cast:!1}),qe(690,1347,690.4,1598,.6,.605,ge.panelDark,{cast:!1}),qe(689.5,r,690,l,.295,.305,ge.ledWarm,{cast:!1}),
qe(689.5,r,690,l,2.145,2.155,ge.ledWarm,{cast:!1}),qe(710,r,713,l,0,.3,ge.accent,{cast:!1}),qe(710,r,713,l,2.15,2.48,ge.accent,{cast:!1}),
qe(700,l,713,1640,0,J,ge.wood,{collide:!0}),qe(700,1175,713,r,0,J,ge.tvPanel,{collide:!0});const s=new e.PlaneGeometry(1,J-.1,48,1),i=s.attributes.position
;for(let e=0;e<i.count;e++)i.setZ(e,.035*Math.sin(40*i.getX(e)));s.computeVertexNormals(),[[ee(268)+.35,.7],[ee(694)-.4,.8]].forEach(([t,a])=>{
const o=new e.Mesh(s.clone(),ge.curtain);o.scale.x=a,o.position.set(t,(J-.1)/2,te(1688)),Ie.add(o)}),qe(262,1684,698,1688,2.76,J,ge.metal,{parent:De}),
Ve(ee(495)-.25,te(1668)-.25,ee(495)+.25,te(1668)+.25)}(),Ke(0,1032,1.6,{art:!0}),qe(470,950,640,1135,.002,.01,ge.rug2,{cast:!1}),
qe(418,905,713,935,2.55,J,ge.ceiling,{parent:De}),qe(520,935,713,936,2.53,J-.245,ge.led,{parent:De,cast:!1}),qe(418,935,520,1157,2.55,J,ge.ceiling,{parent:De}),
qe(520,935,521,1130,2.53,J-.245,ge.led,{parent:De,cast:!1}),qe(520,1130,713,1157,2.55,J,ge.ceiling,{parent:De}),qe(520,1129,713,1130,2.53,J-.245,ge.led,{
parent:De,cast:!1}),Ke(0,312,1.5,{art:!1}),Be(.02,.5,.9,ge.art,ee(713)-.04,1.5,te(312)),qe(418,330,470,425,0,.75,ge.wood,{collide:!0,plan:'furn'}),function(){
const e=ge.wood,t=[ge.white,ge.headboard,ge.dinChair2,ge.sheet,ge.throwM,ge.bedding];qe(418,600,421,895,0,J,e,{collide:!0,plan:'furn'}),
qe(418,600,458,895,0,.06,e),qe(418,600,458,895,J-.08,J,e);for(let t=600;t<=895;t+=59)qe(421,t-1,458,t+1,0,J,e);Ve(ee(418),te(600),ee(458),te(895)),We.push({
x1:ee(418),z1:te(600),x2:ee(458),z2:te(895),kind:'furn'}),[2.3,1.95].forEach(t=>qe(421,600,458,895,t,t+.025,e));for(let a=600;a<890;a+=59){
const o=Math.round((a-600)/59);if(o%2==0){je(.012,.012,te(a+57)-te(a+2),ge.metal,ee(440),1.8,te(a+30),Ie,8).rotation.x=Math.PI/2;for(let e=0;e<6;e++){
Be(.5,.75+e%3*.12,.03,t[(e+o)%t.length],ee(440),1.02-e%3*.12,te(a+8+8*e)).rotation.y=0}qe(421,a+1,458,a+58,.45,.47,e)
;for(let e=0;e<2;e++)Be(.32,.22,.26,ge.white,ee(438),.47,te(a+18+22*e))}else{for(let t=.35;t<1.9;t+=.32)qe(421,a+1,458,a+58,t,t+.022,e)
;for(let e=.37;e<1.9;e+=.64)Be(.3,.12,.6,t[(o+1)%6],ee(438),e,te(a+30))}}$e(459,602,461,893,.06,J-.08,ge.smoked,!1)
;for(let e=602;e<=893;e+=58.2)qe(458.6,e-.8,461.4,e+.8,.06,J-.08,ge.metal,{cast:!1});qe(460,602,461,893,2.29,2.3,ge.ledWarm,{cast:!1})
;const a=600,o=645,n=470,r=553;qe(n,a,r,603,0,J,e,{collide:!0,plan:'furn'}),Ve(ee(n),te(a),ee(r),te(o)),[n,(n+r)/2,r].forEach(t=>qe(t-1,a,t+1,o,0,J-.12,e)),
[.06,.42,.78,1.18,1.56,1.92,2.3,J-.14].forEach(t=>qe(n,a,r,o,t,t+.025,e)),qe(n,602,r,o,.42,.78,e),[(3*n+r)/4,(n+3*r)/4].forEach(e=>{
qe(e-12,o,e+12,645.5,.58,.61,ge.panelDark,{cast:!1}),Be(.34,.26,.34,ge.headboard,ee(e),.085,te(625)),Be(.3,.2,.3,ge.panelDark,ee(e),1.95,te(622))}),
Be(.3,.2,.25,ge.sheet,ee((3*n+r)/4),.805,te(622)),Be(.3,.2,.25,ge.sheet,ee((n+3*r)/4),.805,te(622)),Be(.6,.08,.32,ge.white,ee((3*n+r)/4),1.58,te(622)),
Be(.6,.08,.32,ge.white,ee((3*n+r)/4),1.66,te(622)),[.06,.78,1.18].forEach(e=>qe(n+2,642,r-2,642.5,e+.3,e+.31,ge.ledWarm,{cast:!1}))}(),function(){const t=745
;qe(668,673,713,817,.2,.85,ge.vanity,{collide:!0,plan:'furn'});for(const e of[709,t,781])qe(667.6,e-.3,668,e+.3,.22,.83,ge.panelDark,{cast:!1})
;qe(667.6,673,668,817,.52,.525,ge.panelDark,{cast:!1}),[[677,671],[813,671],[677,708],[813,708]].forEach(([e,t])=>qe(t-.8,e-.8,t+.8,e+.8,0,.2,ge.metal)),
qe(666,671,713,819,.85,.89,ge.marble),qe(668,673,713,817,.18,.2,ge.ledWarm,{cast:!1}),qe(709,663,713,827,.89,J,ge.marble,{cast:!1}),[711,779].forEach(t=>{
const a=new e.Group;a.position.set(ee(708.5),1.72,te(t)),a.rotation.y=-Math.PI/2,Ie.add(a);const o=(t,a)=>{const o=new e.Shape;return o.moveTo(t,-a+t),
o.lineTo(t,a),o.lineTo(-t,a),o.lineTo(-t,-a+t),o.absarc(0,-a+t,t,Math.PI,2*Math.PI,!1),o},n=new e.Mesh(new e.ExtrudeGeometry(o(.23,.55),{depth:.025,
bevelEnabled:!1,curveSegments:24}),ge.metal);n.position.z=-.03,n.userData.keepUV=!0,a.add(n);const r=new e.Mesh(new e.ShapeGeometry(o(.215,.535),24),ge.mirror)
;r.position.z=-.004,r.userData.keepUV=!0,a.add(r);const l=new e.Path,s=.17,i=.47;l.moveTo(-s,i),l.lineTo(-s,-i+s),l.absarc(0,-i+s,s,Math.PI,2*Math.PI,!1),
l.lineTo(s,i);const c=new e.Mesh(new e.TubeGeometry(new e.CatmullRomCurve3(l.getPoints(40).map(t=>new e.Vector3(t.x,t.y,0))),120,.0035,6,!1),ge.led)
;c.userData.keepUV=!0,a.add(c);const d=new e.Mesh(W(.24,.17,.13,.012,7,.97),ge.porcelain);d.position.set(0,-.83,.3),d.castShadow=!0,a.add(d),
Be(.025,.025,.18,ge.metal,0,1.08-1.72,.09,a),Be(.035,.05,.02,ge.metal,-.1,1.08-1.72,.01,a),Be(.035,.05,.02,ge.metal,.1,1.08-1.72,.01,a)}),
[[-.04],[.04]].forEach(([e])=>je(.025,.025,.14,ge.black,ee(700),.89,te(t)+e,Ie,12)),Ze(686,640,Math.PI/2)
;const a=ee(707)-ee(567),o=te(895)-te(830),n=(ee(567)+ee(707))/2,r=(te(830)+te(895))/2,l=L(a,o,.2);l.holes.push(L(a-.12,o-.12,.26)),
He(E(l,.58,.02),ge.porcelain,n,0,r),He(E(L(a-.13,o-.13,.28),.2,.07),ge.porcelain,n,0,r),Ve(ee(567),te(828),ee(707),te(895)),We.push({x1:ee(567),z1:te(828),
x2:ee(707),z2:te(895),kind:'furn'}),[0,.08,.16].forEach((e,t)=>je(.012,.012,t?.12:.26,ge.metal,ee(690)-e,.58,te(890),Ie,8));const s=new e.MeshPhysicalMaterial({
color:'#b9ad9d',roughness:.1,transparent:!0,opacity:.82,normalMap:w(y(),1,!1),normalScale:new e.Vector2(1.4,1.4),side:e.DoubleSide,depthWrite:!1})
;s.userData.keepUV=!0;const i=qe(551,655,553,735,0,2.2,s,{cast:!1});i.renderOrder=2,i.geometry=new e.BoxGeometry(.025,2.2,te(735)-te(655))
;const c=i.geometry.attributes.uv;for(let e=0;e<c.count;e++)c.setXY(e,13*c.getX(e),28*c.getY(e));qe(550.5,655,553.5,657,0,2.2,ge.metal),
qe(550.5,733,553.5,735,0,2.2,ge.metal),qe(550.5,655,553.5,735,2.17,2.2,ge.metal),qe(550,722,550.6,723.5,.85,1.25,ge.metal),qe(553,700,555,835,2.2,2.24,ge.metal)
}(),function(){qe(440,437,520,480,.3,.85,ge.wood,{collide:!0,plan:'furn'}),qe(437,437,523,483,.85,.89,ge.marble)
;const t=new e.Mesh(W(.21,.16,.12,.012,7,.97),ge.porcelain);t.position.set(ee(480),.89,te(455)),t.castShadow=!0,Ie.add(t),qe(445,437,515,439,1.1,1.9,ge.mirror,{
cast:!1}),Ze(572,452,Math.PI),je(.12,.12,.01,ge.metal,ee(680),2.48,te(510),Ie,20)}(),function(){const t=new e.HemisphereLight('#fff6ea','#a8957e',.25)
;ie.add(t),Ue=new e.DirectionalLight('#ffdcb0',2.2);const a=new e.Object3D;a.position.set(ee(480),0,te(1300)),ie.add(a),Ue.target=a,
Ue.position.set(ee(480)-7,6.5,te(1300)+14),Ue.castShadow=!0;const o='high'===re?4096:2048;Ue.shadow.mapSize.set(o,o);const n=Ue.shadow.camera;n.left=-10,
n.right=10,n.top=18,n.bottom=-18,n.near=.5,n.far=70,Ue.shadow.bias=-3e-4,Ue.shadow.normalBias=.02,Ue.shadow.radius=3,ie.add(Ue)
;const r=new e.DirectionalLight('#dfe9f5',.4);r.position.set(ee(480),2,te(1700)+10),r.target=a,ie.add(r)
;const l=[[560,1300,5],[420,1420,4.5],[300,1300,3],[330,760,3.2],[330,1050,3],[300,230,2.5],[570,1030,4],[570,300,3.5],[505,750,2.6],[640,760,3],[560,510,2.6],[600,1550,3.5]],s='low'===re?7:l.length
;l.slice(0,s).forEach(([t,a,o],n)=>{const r=new e.PointLight('#ffd7ad',.6*o,6.5,1.6);r.position.set(ee(t),2.4,te(a)),
'high'===re&&[0,1,6,9].includes(n)&&(r.castShadow=!0,r.shadow.mapSize.set(512,512),r.shadow.bias=-.002,r.shadow.radius=6,r.shadow.camera.near=.1),ie.add(r)}),
[[ee(258),1.25,te(1420),0,2.2],[ee(705),2.45,te(1430),0,2.6],[ee(705),.2,te(1430),0,1.4]].forEach(([t,a,o,n,r])=>{const l=new e.PointLight('#ff9550',n,3.5,1.8)
;l.position.set(t,a,o),l.userData={i1:n,i2:r},ie.add(l),Ee.push(l)
}),[[ee(700),2.4,te(1430),1.6],[ee(700),.25,te(1430),.8],[ee(565),2.5,te(925),1.2],[ee(262),1.75,te(1420),.9]].forEach(([t,a,o,n])=>{
const r=new e.PointLight('#ffcf98',n,2.6,2);r.position.set(t,a,o),ie.add(r)});const i=new e.CircleGeometry(.04,20)
;[[480,1250],[480,1600],[600,1250],[600,1620],[330,300],[330,500],[330,700],[330,900],[330,1100],[470,980],[470,1090],[520,300],[520,380],[640,650],[600,860],[500,650],[500,850],[480,510],[640,510],[280,200],[330,1350],[330,1500],[600,680],[600,840]].forEach(([t,a])=>{
const o=new e.Mesh(i,ge.led);o.rotation.x=Math.PI/2,o.position.set(ee(t),2.798-(t>636&&a>1175?.32:0),te(a)),De.add(o)})}(),function(){
const t=new e.Mesh(new e.PlaneGeometry(400,400),new e.MeshBasicMaterial({color:'#9a9a90'}));t.rotation.x=-Math.PI/2,t.position.y=-45,t.userData.keepUV=!0,
Te.add(t)}(),qe(180,1706,790,1730,J,3.4,ge.wall),qe(180,1706,790,1730,-1.2,0,ge.wall),ge.rug2.userData.keepUV=!0,ge.art.userData.keepUV=!0,Qe(Ie),Qe(De)
;var et=new e.Color('#24211f'),tt=[{id:'living',name:'客厅',ox:470,oy:1655,yaw:-.55,lx:610,ly:1450},{id:'dining',name:'餐厅',ox:560,oy:1250,yaw:2.2,lx:410,ly:1470
},{id:'master',name:'主卧',ox:440,oy:1040,yaw:-Math.PI/2,lx:560,ly:1030},{id:'second',name:'次卧',ox:440,oy:360,yaw:-1.3,lx:560,ly:300},{id:'wic',name:'衣帽间',ox:515,
oy:880,yaw:.15,lx:505,ly:760},{id:'bath',name:'主卫',ox:572,oy:772,yaw:-Math.PI/2+.25,lx:640,ly:760},{id:'bath2',name:'次卫',ox:360,oy:545,yaw:-Math.PI/2,lx:560,
ly:510},{id:'kitchen',name:'厨房',ox:345,oy:1600,yaw:.05,lx:275,ly:1400},{id:'entry',name:'入户',ox:290,oy:200,yaw:Math.PI,lx:290,ly:230}],at=[{id:'overall',
name:'全景',page:'P10 / P19',ox:560,oy:1695,y:1.35,tx:460,ty:1150,th:1.3,fov:72},{id:'living',name:'客厅',page:'P11 / P20',ox:474,oy:1400,y:1.1,tx:713,ty:1415,th:1,
fov:68},{id:'dining',name:'餐厨',page:'P12 / P21',ox:680,oy:1420,y:1.25,tx:250,ty:1410,th:1.15,fov:60},{id:'bedroom',name:'主卧',page:'P13 / P22',ox:421,oy:1030,
y:1.3,tx:713,ty:1040,th:1.05,fov:78},{id:'closet',name:'衣帽间',page:'P14 / P23',ox:508,oy:892,y:1.45,tx:505,ty:600,th:1.25,fov:62},{id:'bath',name:'主卫',
page:'P15',ox:571,oy:760,y:1.3,tx:713,ty:755,th:1.35,fov:74},{id:'bathdoor',name:'主卫入口',page:'P16 / P24',ox:462,oy:768,y:1.45,tx:713,ty:760,th:1.35,fov:46}]
;function ot(e,t=!1){'walk'!==nt.mode&&(dt('walk'),t=!0);const a=ee(e.tx)-ee(e.ox),o=te(e.ty)-te(e.oy),n=e.th-e.y,r={x:ee(e.ox),z:te(e.oy),
yaw:Math.atan2(-a,-o),pitch:Math.atan2(n,Math.hypot(a,o))};nt.eye=e.y,nt.vfov=e.fov,jt=!0,pe.fov=e.fov,pe.updateProjectionMatrix(),t?(nt.pos.set(r.x,e.y,r.z),
nt.yaw=r.yaw,nt.pitch=r.pitch,nt.tween=null):nt.tween={from:{x:nt.pos.x,z:nt.pos.z,yaw:nt.yaw,pitch:nt.pitch},to:r,t:0},
document.querySelectorAll('#views button').forEach((t,a)=>t.classList.toggle('on',at[a]===e))}var nt={mode:'orbit',yaw:0,pitch:0,
pos:new e.Vector3(ee(470),1.6,te(1655)),keys:{},joy:{x:0,y:0},tween:null},rt=1.6,lt=.22,st=new t(pe,se.domElement),it={p:new e.Vector3(ee(480)+11,15,te(920)+9),
t:new e.Vector3(ee(480),.8,te(920))};function ct(e){for(let t=0;t<2;t++)for(const t of Ge){
const a=Math.max(t.x1,Math.min(e.x,t.x2)),o=Math.max(t.z1,Math.min(e.z,t.z2)),n=e.x-a,r=e.z-o,l=n*n+r*r;if(l<.0484)if(l>1e-8){const t=Math.sqrt(l);e.x=a+n/t*lt,
e.z=o+r/t*lt}else{const a=e.x-t.x1,o=t.x2-e.x,n=e.z-t.z1,r=t.z2-e.z,l=Math.min(a,o,n,r);l===a?e.x=t.x1-lt:l===o?e.x=t.x2+lt:e.z=l===n?t.z1-lt:t.z2+lt}}}
function dt(e,t={}){'orbit'===nt.mode&&'walk'===e&&(it.p.copy(pe.position),it.t.copy(st.target)),'orbit'===e&&'walk'===nt.mode&&(pe.position.copy(it.p),
st.target.copy(it.t),pe.up.set(0,1,0)),nt.mode=e,pe.fov='walk'===e?nt.vfov||(innerWidth<innerHeight?80:72):40,pe.updateProjectionMatrix(),
ie.background='walk'===e&&he?he:et,'orbit'===e&&st.update(),De.visible='walk'===e,Te.visible='walk'===e,st.enabled='orbit'===e,
document.body.classList.toggle('walk','walk'===e),document.body.classList.toggle('orbit','orbit'===e),
document.getElementById('modeBtn').textContent='walk'===e?'鸟瞰模式':'漫游模式','orbit'===e&&document.pointerLockElement&&document.exitPointerLock()}
function ht(e,t=!1){const a='string'==typeof e?tt.find(t=>t.id===e):e,o={x:ee(a.ox),z:te(a.oy),yaw:a.yaw};'walk'!==nt.mode&&(dt('walk'),t=!0),nt.eye=rt,
nt.vfov=0,jt=!0,pe.fov=innerWidth<innerHeight?80:72,pe.updateProjectionMatrix(),document.querySelectorAll('#views button').forEach(e=>e.classList.remove('on')),
t?(nt.pos.set(o.x,rt,o.z),nt.yaw=o.yaw,nt.pitch=-.05,nt.tween=null):nt.tween={from:{x:nt.pos.x,z:nt.pos.z,yaw:nt.yaw,pitch:nt.pitch},to:o,t:0},
document.querySelectorAll('[data-room]').forEach(e=>e.classList.toggle('on',e.dataset.room===a.id))}st.target.set(ee(480),.8,te(920)),
fe.position.set(ee(480)+11,15,te(920)+9),st.enableDamping=!0,st.maxPolarAngle=.47*Math.PI,st.minDistance=4,st.maxDistance=40,st.update(),
addEventListener('keydown',e=>{nt.keys[e.code]=!0,'KeyV'!==e.code&&'Tab'!==e.code||(e.preventDefault(),St()),'Digit1'===e.code&&Le(1),'Digit2'===e.code&&Le(2)
}),addEventListener('keyup',e=>{nt.keys[e.code]=!1}),addEventListener('blur',()=>{nt.keys={}});var ut=se.domElement,pt=!1,ft=0,mt=0;function wt(e,t,a){
nt.yaw-=e*a,nt.pitch=Math.max(-1.3,Math.min(1.3,nt.pitch-t*a)),nt.tween=null}ut.addEventListener('mousedown',e=>{if('walk'===nt.mode){
if(ut.requestPointerLock&&!document.pointerLockElement&&!ae)try{const e=ut.requestPointerLock();e&&e.catch&&e.catch(()=>{})}catch(e){}pt=!0,ft=e.clientX,
mt=e.clientY}}),addEventListener('mouseup',()=>pt=!1),addEventListener('mousemove',e=>{
'walk'===nt.mode&&(document.pointerLockElement===ut?wt(e.movementX,e.movementY,.0022):pt&&(wt(e.clientX-ft,e.clientY-mt,.004),ft=e.clientX,mt=e.clientY))}),
document.addEventListener('pointerlockchange',()=>document.body.classList.toggle('locked',document.pointerLockElement===ut))
;var gt=document.getElementById('joy'),yt=document.getElementById('knob'),bt=null,Mt=null,xt={x:0,y:0},vt={x:0,y:0};function kt(e){
let t=e.clientX-xt.x,a=e.clientY-xt.y;const o=Math.hypot(t,a);o>50&&(t*=50/o,a*=50/o),yt.style.transform=`translate(${t}px,${a}px)`,nt.joy={x:t/50,y:a/50},
nt.tween=null}function Pt(){bt=null,yt.style.transform='',nt.joy={x:0,y:0}}function St(){'walk'===nt.mode?dt('orbit'):dt('walk')}
gt.addEventListener('touchstart',e=>{e.preventDefault(),function(e){bt=e.identifier;const t=gt.getBoundingClientRect();xt={x:t.left+t.width/2,y:t.top+t.height/2
},kt(e)}(e.changedTouches[0])},{passive:!1}),ut.addEventListener('touchstart',e=>{
if('walk'===nt.mode)for(const t of e.changedTouches)null===Mt&&(Mt=t.identifier,vt={x:t.clientX,y:t.clientY})},{passive:!0}),addEventListener('touchmove',e=>{
for(const t of e.changedTouches)t.identifier===bt?(e.preventDefault(),kt(t)):t.identifier===Mt&&'walk'===nt.mode&&(wt(t.clientX-vt.x,t.clientY-vt.y,.006),vt={
x:t.clientX,y:t.clientY})},{passive:!1}),addEventListener('touchend',e=>{for(const t of e.changedTouches)t.identifier===bt&&Pt(),t.identifier===Mt&&(Mt=null)}),
addEventListener('touchcancel',()=>{Pt(),Mt=null}),ne('modeBtn').onclick=()=>St(),
document.querySelectorAll('[data-scheme]').forEach(e=>e.onclick=()=>Le(+e.dataset.scheme));var zt=ne('rooms');tt.forEach(e=>{
const t=document.createElement('button');t.textContent=e.name,t.dataset.room=e.id,t.onclick=()=>ht(e),zt.appendChild(t)}),
ne('helpBtn').onclick=()=>ne('intro').classList.remove('hidden'),ne('startBtn').onclick=()=>{ne('intro').classList.add('hidden')},ne('startWalk').onclick=()=>{
ne('intro').classList.add('hidden'),ht('living',!0)},ae&&document.body.classList.add('touch'),oe.has('shot')&&document.body.classList.add('shot'),
oe.has('clean')&&document.body.classList.add('clean');var Et=ne('labels'),Ct=tt.filter(e=>!['entry','kitchen'].includes(e.id)||!0).map(t=>{
const a=document.createElement('div');return a.className='label',a.textContent=t.name,a.onclick=()=>ht(t),Et.appendChild(a),{el:a,
v:new e.Vector3(ee(t.lx),1.2,te(t.ly))}}),Lt=ne('minimap'),_t=Lt.getContext('2d'),It=ee(760)-ee(200),Dt=te(1720)-te(110),Tt=null,Gt=1;function Wt(){
const e=Lt.clientHeight||260,t=Math.round(e*It/Dt),a=Math.min(2,window.devicePixelRatio);Lt.width=t*a,Lt.height=e*a,Lt.style.width=t+'px',Gt=e*a/Dt
;const o=document.createElement('canvas');o.width=Lt.width,o.height=Lt.height;const n=o.getContext('2d'),r=e=>(e-ee(200))*Gt,l=e=>(e-te(110))*Gt
;n.fillStyle=1===ze?'rgba(236,228,214,0.92)':'rgba(150,112,82,0.92)',n.fillRect(r(ee(248)),l(te(140)),(ee(713)-ee(248))*Gt,(te(1700)-te(140))*Gt),
We.forEach(e=>{n.fillStyle='wall'===e.kind?'#2a2623':'glass'===e.kind?'#7fb3c9':'rgba(80,70,60,0.35)',
n.fillRect(r(e.x1),l(e.z1),Math.max(1.5,(e.x2-e.x1)*Gt),Math.max(1.5,(e.z2-e.z1)*Gt))}),n.fillStyle='#7fb3c9',
n.fillRect(r(ee(262)),l(te(1697)),(ee(698)-ee(262))*Gt,3*a),n.font=10*a+'px sans-serif',n.fillStyle=1===ze?'#5a5048':'#fff3e6',n.textAlign='center',
tt.forEach(e=>{'entry'!==e.id&&n.fillText(e.name,r(ee(e.lx)),l(te(e.ly)))}),Tt=o}Lt.addEventListener('click',t=>{
const a=Lt.getBoundingClientRect(),o=Lt.width/a.width,n=(t.clientX-a.left)*o/Gt+ee(200),r=(t.clientY-a.top)*o/Gt+te(110)
;if(n<ee(250)||n>ee(711)||r<te(142)||r>te(1695))return;const l=new e.Vector3(n,rt,r);ct(l);ht({id:'mm',ox:l.x/Q+248,oy:l.z/Q+140,yaw:'walk'===nt.mode?nt.yaw:0})
});var Vt=null,Bt=null;function qt(t){re=t,localStorage.setItem('tf_q',t);const a=window.devicePixelRatio||1
;se.setPixelRatio('high'===t?Math.min(a,2):'mid'===t?Math.min(a,1.25):Math.min(a,ae?1.25:1)),se.setSize(innerWidth,innerHeight),Vt&&Vt.dispose(),(Vt=new n(se,{
frameBufferType:e.HalfFloatType})).addPass(new r(ie,pe)),Bt=null,'low'!==t&&(Bt=new p(ie,pe,innerWidth,innerHeight),Object.assign(Bt.configuration,{aoRadius:.7,
distanceFalloff:.6,intensity:'high'===t?2.4:2,gammaCorrection:!1,halfRes:'mid'===t,aoSamples:'high'===t?16:8,denoiseSamples:8,denoiseRadius:10,
color:new e.Color('#1a1410')}),Vt.addPass(Bt));const o=[new s({preset:i.HIGH})];'low'!==t&&o.push(new c({luminanceThreshold:.85,luminanceSmoothing:.25,
intensity:.22,mipmapBlur:!0,radius:.6})),o.push(new u({darkness:.32,offset:.35})),o.push(new d({mode:h.ACES_FILMIC})),Vt.addPass(new l(pe,...o)),
Vt.setSize(innerWidth,innerHeight),document.querySelectorAll('[data-q]').forEach(e=>e.classList.toggle('on',e.dataset.q===t)),
'low'===t&&ue?ie.environment=de:ue&&(ie.environment=ue),Ot()}se.toneMappingExposure=.82;var Rt=new e.WebGLCubeRenderTarget('high'===re?256:128,{
type:e.HalfFloatType}),At=new e.CubeCamera(.05,80,Rt),$t=new e.Vector3(1e9,0,0),jt=!0;function Ft(e){if('low'===re)return
;const t=[De.visible,Te.visible],a=ie.background;De.visible=!0,Te.visible=!0,he&&(ie.background=he),ie.environment=de,ie.environmentIntensity=.35,
At.position.copy(e),At.update(se,ie),ue&&ue.dispose(),ue=ce.fromCubemap(Rt.texture).texture,ie.environment=ue,ie.environmentIntensity=.85,ie.background=a,
De.visible=t[0],Te.visible=t[1],$t.copy(e),jt=!1}Ce=()=>{jt=!0};var Ut=null,Xt=!1,Ht=null,Yt=!0,Nt=!1;function Ot(){Ut&&Xt&&(Yt=!0)}async function Kt(t){
if(!Nt){if(Xt=t,document.body.classList.toggle('pt',t),ne('ptBtn').classList.toggle('on',t),!t)return se.toneMapping=e.NoToneMapping,
ie.environment='low'!==re&&ue?ue:de,ie.environmentIntensity=ue?.85:.35,void(ne('ptStat').textContent='');Nt=!0,ne('ptStat').textContent='光线追踪：加载渲染器…';try{
Ht||(Ht=await(import('three-gpu-pathtracer'))),Ut||(Ut=new Ht.WebGLPathTracer(se),Object.assign(Ut,{renderDelay:0,fadeDuration:0,minSamples:1,dynamicLowRes:!0,
lowResScale:.3,bounces:'high'===re?6:4,filterGlossyFactor:.6}),Ut.tiles.set(2,2)),Yt=!0}catch(e){console.warn(e),ne('ptStat').textContent='光线追踪不可用（浏览器不支持）',
Xt=!1,document.body.classList.remove('pt')}Nt=!1}}var Zt=new e.Matrix4;function Qt(){const e=innerWidth,t=innerHeight;se.setSize(e,t),Vt&&Vt.setSize(e,t),
pe.aspect=e/t,pe.fov='walk'===nt.mode?nt.vfov||(e<t?80:72):40,pe.updateProjectionMatrix(),Wt(),Ot()}addEventListener('resize',Qt)
;var Jt=new e.Clock,ea=new e.Vector3,ta=new e.Vector3,aa=new e.Vector3,oa=0;var na=0,ra=0,la=0
;document.querySelectorAll('[data-q]').forEach(e=>e.onclick=()=>qt(e.dataset.q)),ne('ptBtn').onclick=()=>Kt(!Xt),
ne('creditBtn').onclick=()=>ne('credits').classList.remove('hidden'),ne('creditClose').onclick=()=>ne('credits').classList.add('hidden');var sa=ne('views')
;at.forEach((e,t)=>{const a=document.createElement('button');a.textContent=`${t+1} ${e.name}`,a.title=e.page,a.onclick=()=>ot(e),sa.appendChild(a)}),
ne('viewsBtn').onclick=()=>sa.classList.toggle('hidden'),A.onProgress=(e,t,a)=>{const o=Math.round(t/a*100);ne('barIn').style.width=o+'%',
ne('loadTxt').textContent=`正在加载真实材质与模型… ${t}/${a}`};var ia,ca=!0;if(A.onLoad=()=>{ne('loadbar').classList.add('done'),ca&&(ca=!1,
ne('loading').classList.add('hidden'),window.__ready=!0),_e(),Ce(),Ot(),setTimeout(()=>{const e=function(){const e=performance.getEntriesByType('resource')
;let t=0,a=0;return e.forEach(e=>{const o=e.transferSize||e.encodedBodySize||e.decodedBodySize||0;t+=o,a++}),{bytes:t,files:a}}();window.__bytes=e.bytes+$.bytes
},500)},qt(re),Le(+(oe.get('scheme')||1)),dt('orbit'),_e(),Qt(),oe.has('nointro')&&ne('intro').classList.add('hidden'),oe.get('room')&&ht(oe.get('room'),!0),
'walk'!==oe.get('view')||oe.get('room')||ht('living',!0),oe.get('cam')){const e=at.find(e=>e.id===oe.get('cam'));e&&ot(e,!0)}
(ia='https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/canary_wharf_1k.hdr',new Promise(e=>new q(A).load(ia,t=>{t.mapping=V.EquirectangularReflectionMapping,
e(t)},void 0,()=>e(null)))).then(e=>{e&&(he=e,ie.backgroundRotation.y=2.2,ie.backgroundIntensity=1.6,ie.environmentRotation.y=2.2,
'walk'===nt.mode&&(ie.background=he),Ce())}),Je('potted_plant_02',ee(495),0,te(1668),1,.6),Je('potted_plant_04',ee(262),.92,te(1590),.28,.3),
Je('potted_plant_04',ee(485),.89,te(447),.24,1.2),Je('ceramic_vase_04',ee(262),1.58,te(1300),.24,0),Je('ceramic_vase_01',ee(262),1.58,te(1320),.2,0),
Je('ceramic_vase_01',ee(713)-.35,.54,te(1032)+1.18,.26,0),Je('standing_picture_frame_01',ee(262),.76,te(1060),.28,Math.PI/2),setTimeout(()=>{
ne('loading').classList.add('hidden'),window.__ready=!0},25e3),function t(){const a=Math.min(.05,Jt.getDelta());!function(e){if('walk'===nt.mode){if(nt.tween){
const t=nt.tween;t.t=Math.min(1,t.t+e/.9);const a=t.t<.5?2*t.t*t.t:1-Math.pow(-2*t.t+2,2)/2;let o=t.to.yaw-t.from.yaw;o=Math.atan2(Math.sin(o),Math.cos(o)),
nt.pos.x=t.from.x+(t.to.x-t.from.x)*a,nt.pos.z=t.from.z+(t.to.z-t.from.z)*a,nt.yaw=t.from.yaw+o*a,nt.pitch=t.from.pitch+((t.to.pitch??-.05)-t.from.pitch)*a,
t.t>=1&&(nt.tween=null)}else{const t=nt.keys;let a=0,o=0;(t.KeyW||t.ArrowUp)&&(o+=1),(t.KeyS||t.ArrowDown)&&(o-=1),t.KeyA&&(a-=1),t.KeyD&&(a+=1),
t.ArrowLeft&&(nt.yaw+=1.8*e),t.ArrowRight&&(nt.yaw-=1.8*e),t.KeyQ&&(nt.yaw+=1.8*e),t.KeyE&&(nt.yaw-=1.8*e),a+=nt.joy.x,o-=nt.joy.y;const n=Math.hypot(a,o)
;if(n>.05){const r=(t.ShiftLeft||t.ShiftRight?3.2:1.7)*Math.min(1,n);ea.set(-Math.sin(nt.yaw),0,-Math.cos(nt.yaw)),ta.set(Math.cos(nt.yaw),0,-Math.sin(nt.yaw)),
aa.copy(ea).multiplyScalar(o/n).addScaledVector(ta,a/n).multiplyScalar(r*e);const l=Math.ceil(aa.length()/.08)
;for(let e=0;e<l;e++)nt.pos.addScaledVector(aa,1/l),ct(nt.pos);nt.bob=(nt.bob||0)+e*r*5}}
pe.position.set(nt.pos.x,(nt.eye||rt)+.012*Math.sin(nt.bob||0),nt.pos.z),pe.rotation.set(nt.pitch,nt.yaw,0)}else{st.update();const e=innerWidth,t=innerHeight
;Ct.forEach(a=>{aa.copy(a.v).project(pe);const o=aa.z<1;a.el.style.display=o?'':'none',
a.el.style.transform=`translate(-50%,-50%) translate(${(.5*aa.x+.5)*e}px,${(.5*-aa.y+.5)*t}px)`})}}(a),pe.updateMatrixWorld();const o=!Zt.equals(pe.matrixWorld)
;Zt.copy(pe.matrixWorld),oa=o?0:oa+a,'walk'===nt.mode&&'low'!==re&&!Xt&&oa>.4&&(jt||$t.distanceTo(pe.position)>1)&&Ft(pe.position.clone().setY(1.4)),
Xt&&Ut&&!Nt?Yt?async function(){Nt=!0,ne('ptStat').textContent='光线追踪：构建场景BVH…',await new Promise(e=>setTimeout(e,30)),se.toneMapping=e.ACESFilmicToneMapping,
se.toneMappingExposure=1,ie.environment=he||de,ie.environmentIntensity=.9,pe.updateMatrixWorld(),Ut.setScene(ie,pe),Yt=!1,Nt=!1}():(o&&Ut.updateCamera(),
Ut.renderSample(),ne('ptStat').textContent=`光线追踪中 · 采样 ${Math.floor(Ut.samples)} · 静止不动可获得更细腻画面`):Xt||Vt.render(a),function(){if(!Tt)return
;_t.clearRect(0,0,Lt.width,Lt.height),_t.drawImage(Tt,0,0);const e=nt.pos,t=nt.yaw,a=(e.x-ee(200))*Gt,o=(e.z-te(110))*Gt,n=Lt.width/Lt.clientWidth
;'walk'===nt.mode&&(_t.save(),_t.translate(a,o),_t.rotate(-t),_t.fillStyle='rgba(230,120,40,0.25)',_t.beginPath(),_t.moveTo(0,0),
_t.arc(0,0,28*n,-Math.PI/2-.6,-Math.PI/2+.6),_t.fill(),_t.fillStyle='#e66a1e',_t.beginPath(),_t.arc(0,0,4.5*n,0,7),_t.fill(),_t.restore())}(),na++,
(ra+=a)>1&&(la=na/ra,na=0,ra=0,ne('fps').textContent=la.toFixed(0)+' fps · '+{high:'高',mid:'中',low:'低'}[re]),requestAnimationFrame(t)}(),window.__app={
applyScheme:Le,teleport:ht,setMode:dt,state:nt,colliders:Ge,renderer:se,scene:ie,camera:pe,gotoView:ot,VIEWS:at,togglePT:Kt,applyQuality:qt,captureProbe:Ft,
get pt(){return Ut}};