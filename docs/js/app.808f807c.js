(function(e){function t(t){for(var o,i,c=t[0],a=t[1],u=t[2],p=0,d=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,c=1;c<n.length;c++){var a=n[c];0!==r[a]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},s=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=a;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function r(e,t,n,r,s,i){var c=Object(o["p"])("Welcome"),a=Object(o["p"])("Scenes"),u=Object(o["p"])("Final");return Object(o["l"])(),Object(o["e"])(o["a"],null,[Object(o["g"])(c),Object(o["g"])(a),Object(o["g"])(u)],64)}n("b0c0");var s={key:0};function i(e,t,n,r,i,c){var a=Object(o["p"])("Message");return this.$store.getters.isCurrentScene(this.$options.name)?(Object(o["l"])(),Object(o["e"])("div",s,[Object(o["g"])(a)])):Object(o["d"])("",!0)}var c={class:"welcome centered"},a=Object(o["f"])("h2",null,"Alex Pujol TFG",-1),u=Object(o["f"])("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat unde animi sed tenetur repellendus quasi quod odio saepe ducimus voluptatem! ",-1);function l(e,t){var n=this;return Object(o["l"])(),Object(o["e"])("div",c,[a,u,Object(o["f"])("button",{onClick:t[0]||(t[0]=function(e){return n.$store.commit("nextScene")})},"Start Game")])}var p=n("6b0d"),d=n.n(p);const b={},f=d()(b,[["render",l]]);var m=f,O={name:"Welcome",components:{Message:m}};const j=d()(O,[["render",i]]);var h=j;function g(e,t,n,r,s,i){var c=Object(o["p"])("Visuals1"),a=Object(o["p"])("Scene");return Object(o["l"])(),Object(o["c"])(a,{name:"Scene1"},{default:Object(o["t"])((function(){return[Object(o["g"])(c)]})),_:1})}function v(e,t,n,r,s,i){var c=Object(o["p"])("PerspectiveCamera"),a=Object(o["p"])("PointLight"),u=Object(o["p"])("Texture"),l=Object(o["p"])("StandardMaterial"),p=Object(o["p"])("Plane"),d=Object(o["p"])("FbxModel"),b=Object(o["p"])("Scene"),f=Object(o["p"])("Renderer");return Object(o["l"])(),Object(o["c"])(f,{ref:"renderer",resize:"window"},{default:Object(o["t"])((function(){return[Object(o["g"])(c,{ref:"camera",lookAt:s.cameraLookAt,position:s.cameraPosition},null,8,["lookAt","position"]),Object(o["g"])(b,{background:"#000000"},{default:Object(o["t"])((function(){return[Object(o["g"])(a,{position:{x:0,y:0,z:3},intensity:.4},null,8,["intensity"]),Object(o["g"])(p,{width:30,height:30,rotation:{x:-Math.PI/2,y:0,z:0},position:{y:-3}},{default:Object(o["t"])((function(){return[Object(o["g"])(l,{props:{displacementScale:.2,roughness:0,metalness:0}},{default:Object(o["t"])((function(){return[Object(o["g"])(u,{src:"./assets/textures/Wood_Tiles_002_basecolor.jpg"}),Object(o["g"])(u,{src:"./assets/textures/Wood_Tiles_002_height.png",name:"displacementMap"}),Object(o["g"])(u,{src:"./assets/textures/Wood_Tiles_002_normal.jpg",name:"normalMap"}),Object(o["g"])(u,{src:"./assets/textures/Wood_Tiles_002_roughness.jpg",name:"roughnessMap"}),Object(o["g"])(u,{src:"./assets/textures/Wood_Tiles_002_ambientOcclusion.jpg",name:"aoMap"})]})),_:1},8,["props"])]})),_:1},8,["rotation"]),Object(o["g"])(d,{src:"./assets/models/Samba Dancing.fbx",ref:"model1",onLoad:i.onLoad,position:{y:-3,x:-2,z:0},rotation:{y:.5*Math.PI},scale:{x:.02,y:.02,z:.02}},null,8,["onLoad","rotation","scale"]),Object(o["g"])(d,{src:"./assets/models/Samba Dancing.fbx",ref:"model2",position:{y:-3,x:2,z:0},rotation:{y:.5*-Math.PI},scale:{x:.02,y:.02,z:.02}},null,8,["rotation","scale"])]})),_:1})]})),_:1},512)}var y=n("cffa"),x={name:"Visuals1",data:function(){return{cameraLookAt:{x:0,y:0,z:0},cameraPosition:{x:0,y:0,z:5}}},mounted:function(){this.renderer=this.$refs.renderer,this.model1=this.$refs.model1,this.model2=this.$refs.model2,this.camera=this.$refs.camera,this.init()},methods:{init:function(){this.renderer.onBeforeRender(this.animate)},animate:function(){},updateView:function(){y["a"].to(this.cameraPosition,{duration:2,x:this.model1.position.x,y:this.model1.position.y+3,z:this.model1.position.z}),y["a"].to(this.cameraLookAt,{duration:2,x:this.model2.position.x,y:this.model2.position.y+3,z:this.model2.position.z})},onLoad:function(e){this.updateView()}}};const S=d()(x,[["render",v]]);var _=S,P={key:0};function w(e,t,n,r,s,i){var c=Object(o["p"])("Options");return this.$store.getters.isCurrentScene(n.name)?(Object(o["l"])(),Object(o["e"])("div",P,[Object(o["o"])(e.$slots,"default"),Object(o["g"])(c,{information:s.optionsProps},null,8,["information"])])):Object(o["d"])("",!0)}var k=n("1da1"),M=(n("96cf"),{class:"title"}),z={class:"options"};function $(e,t,n,r,s,i){var c=Object(o["p"])("Option");return Object(o["l"])(),Object(o["e"])("div",null,[Object(o["f"])("div",M,[Object(o["g"])(c,{message:n.information.title},null,8,["message"])]),Object(o["f"])("div",z,[Object(o["g"])(c,{message:n.information.option1},null,8,["message"]),Object(o["g"])(c,{message:n.information.option2},null,8,["message"]),Object(o["g"])(c,{message:n.information.option3},null,8,["message"])])])}function I(e,t,n,r,s,i){var c=this;return Object(o["l"])(),Object(o["e"])("div",{onClick:t[0]||(t[0]=function(e){return c.$store.commit("nextScene")})},[Object(o["f"])("button",null,Object(o["q"])(n.message),1)])}var L={name:"Option",props:["message"]};const T=d()(L,[["render",I]]);var W=T,A={name:"Options",props:["information"],components:{Option:W}};const C=d()(A,[["render",$]]);var F=C,V={components:{Options:F},props:{name:String},data:function(){return{optionsProps:null}},created:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.getters.getSceneOptions(e.name);case 2:e.optionsProps=t.sent;case 3:case"end":return t.stop()}}),t)})))()}};const R=d()(V,[["render",w]]);var q=R,G={name:"Scenes",components:{Scene:q,Visuals1:_}};const D=d()(G,[["render",g]]);var J=D,B={key:0},Y=Object(o["f"])("h3",null,"This is the final",-1),E=[Y];function H(e,t,n,r,s,i){return this.$store.getters.isCurrentScene(this.$options.name)?(Object(o["l"])(),Object(o["e"])("div",B,E)):Object(o["d"])("",!0)}var K={name:"Final"};const N=d()(K,[["render",H]]);var Q=N,U={name:"App",components:{Welcome:h,Scenes:J,Final:Q}};const X=d()(U,[["render",r]]);var Z=X,ee=n("af1e"),te=n("5502"),ne=Object(te["a"])({state:function(){return{scenes:["Scene1","Final"],currentSceneIndex:0,scenesOptions:{Scene1:{title:"Your friend is sad because she failed, but you are on the phone",option1:"Ignore and stay on the phone.",option2:"Listen while on the phone.",option3:"Give her all your attention."}}}},mutations:{nextScene:function(e){e.currentSceneIndex+1<e.scenes.length&&e.currentSceneIndex++},prevScene:function(e){e.currentSceneIndex-1<0&&e.currentSceneIndex--}},getters:{isCurrentScene:function(e){return function(t){return e.scenes[e.currentSceneIndex]==t}},getSceneOptions:function(e){return function(t){return e.scenesOptions[t]}}}});Object(o["b"])(Z).use(ne).use(ee["a"]).mount("#app")}});
//# sourceMappingURL=app.808f807c.js.map