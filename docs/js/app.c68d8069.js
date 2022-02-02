(function(e){function t(t){for(var a,c,s=t[0],r=t[1],u=t[2],d=0,g=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&g.push(o[c][0]),o[c]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);l&&l(t);while(g.length)g.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var r=n[s];0!==o[r]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={app:0},i=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=r;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function o(e,t,n,o,i,c){var s=Object(a["q"])("Welcome"),r=Object(a["q"])("About"),u=Object(a["q"])("Scenes"),l=Object(a["q"])("Survey"),d=Object(a["q"])("Final");return Object(a["m"])(),Object(a["e"])(a["a"],null,[Object(a["g"])(s),Object(a["g"])(r),Object(a["g"])(u),Object(a["g"])(l),Object(a["g"])(d)],64)}var i={key:0},c={class:"card-container"},s={class:"card-title"},r={class:"card-body"},u={class:"card-action"},l=Object(a["f"])("hr",null,null,-1);function d(e,t,n,o,d,g){var f=Object(a["q"])("Disclaimer"),b=Object(a["q"])("Continue"),m=Object(a["q"])("SelectFlag");return e.currentScene("Welcome")?(Object(a["m"])(),Object(a["e"])("div",i,[Object(a["f"])("div",c,[Object(a["f"])("div",s,[Object(a["f"])("h1",null,Object(a["r"])(e.getLabel("welcome_title")),1)]),Object(a["f"])("div",r,[Object(a["f"])("p",null,Object(a["r"])(e.getLabel("welcome_body")),1)]),Object(a["f"])("div",u,[(Object(a["m"])(!0),Object(a["e"])(a["a"],null,Object(a["p"])(e.getLabel("welcome_disclaimers"),(function(e){return Object(a["m"])(),Object(a["c"])(f,{key:e,content:e},null,8,["content"])})),128)),Object(a["g"])(b)]),l,Object(a["g"])(m)])])):Object(a["d"])("",!0)}var g=n("5530"),f=n("5502"),b={computed:Object(g["a"])({},Object(f["c"])({currentScene:"stages/isCurrentStage",getLabel:"data/getLabel"}))},m=n("d959"),h=n.n(m);const p=h()(b,[["render",d]]);var v=p,j={key:0};function O(e,t,n,o,i,c){var s=Object(a["q"])("Form");return e.currentScene("About")?(Object(a["m"])(),Object(a["e"])("div",j,[Object(a["g"])(s,{propQuestions:c.aboutQuestions,title:e.getLabel("about_title"),saveFunction:"saveAboutDecisions"},null,8,["propQuestions","title"])])):Object(a["d"])("",!0)}var y={computed:Object(g["a"])({aboutQuestions:function(){return{age:{title:this.getLabel("about_age"),options:["10-","11-15","15-19","20+"]},gender:{title:this.getLabel("about_gender"),options:this.getLabel("about_gender_options")}}}},Object(f["c"])({currentScene:"stages/isCurrentStage",getLabel:"data/getLabel"}))};const S=h()(y,[["render",O]]);var x=S;function L(e,t,n,o,i,c){var s=Object(a["q"])("Scene");return Object(a["m"])(),Object(a["e"])(a["a"],null,[Object(a["g"])(s,{sceneName:"Scene1"}),Object(a["g"])(s,{sceneName:"Scene2"}),Object(a["g"])(s,{sceneName:"Scene3"})],64)}var A={key:0};function k(e,t,n,o,i,c){var s=Object(a["q"])("SceneVisuals"),r=Object(a["q"])("SceneUi"),u=Object(a["q"])("Report");return e.currentStage(n.sceneName)?(Object(a["m"])(),Object(a["e"])("div",A,[Object(a["g"])(s,{config:i.config[n.sceneName]},null,8,["config"]),Object(a["g"])(r,{information:c.options},null,8,["information"]),Object(a["g"])(u,{sceneName:n.sceneName},null,8,["sceneName"])])):Object(a["d"])("",!0)}var T={Scene1:{sceneName:"scene1",fbx:[{path:"Texting",position:{x:-.3,y:0,z:-1.3},scale:{x:.002,y:.002,z:.002},rotation:{y:2*Math.PI*.75}},{path:"Sitting Talking Right",position:{x:-1,y:.15,z:-1},scale:{x:.002,y:.002,z:.002},rotation:{y:2*Math.PI*.25}},{path:"Sitting Talking Left",position:{x:-1,y:.15,z:-.6},scale:{x:.002,y:.002,z:.002},rotation:{y:2*Math.PI*.25}}],cameraLookAts:[{x:-1,y:.8,z:-1},{x:0,y:0,z:0}],cameraPositions:[{x:-3,y:1,z:-3},{x:-3,y:2,z:-2}],update:function(e){}},Scene2:{sceneName:"scene2",fbx:[{path:"Walking",position:{x:1,y:0,z:0},scale:{x:.002,y:.002,z:.002},rotation:{y:2*Math.PI*0}}],cameraLookAts:[{x:1,y:.49,z:0},{x:1.01,y:.5,z:.01},{x:1.02,y:.51,z:.02},{x:1.03,y:.52,z:.03}],cameraPositions:[{x:1,y:.5,z:1.5},{x:0,y:.51,z:0},{x:1,y:.52,z:-1.5},{x:2,y:.53,z:0}],update:function(e){e.rotation.y+=.003}},Scene3:{sceneName:"scene3",fbx:[{path:"Texting",position:{x:-.5,y:0,z:-0},scale:{x:.002,y:.002,z:.002},rotation:{y:2*Math.PI*.75}},{path:"Sitting Talking Right",position:{x:-2.1,y:.45,z:-.4},scale:{x:.002,y:.002,z:.002},rotation:{y:2*Math.PI*.25}},{path:"Sitting Talking Left",position:{x:-2.1,y:.45,z:-0},scale:{x:.002,y:.002,z:.002},rotation:{y:2*Math.PI*.25}}],cameraLookAts:[{x:-1,y:1,z:0}],cameraPositions:[{x:1.5,y:1,z:.5}],update:function(e){}}},_={props:["sceneName"],data:function(){return{config:T}},computed:Object(g["a"])(Object(g["a"])({},Object(f["c"])({currentStage:"stages/isCurrentStage",getLabel:"data/getLabel"})),{},{options:function(){return{description:this.getLabel("".concat(this.sceneName,"_desc")),title:this.getLabel("".concat(this.sceneName,"_title")),options:this.getLabel("".concat(this.sceneName,"_options"))}}})};const P=h()(_,[["render",k]]);var C=P,M={components:{Scene:C}};const w=h()(M,[["render",L]]);var z=w,D={key:0};function I(e,t,n,o,i,c){var s=Object(a["q"])("Form");return e.currentScene("Survey")?(Object(a["m"])(),Object(a["e"])("div",D,[Object(a["g"])(s,{title:e.getLabel("survey_title"),propQuestions:c.surveyQuestions,saveFunction:"saveSurveyDecisions"},null,8,["title","propQuestions"])])):Object(a["d"])("",!0)}var F={computed:Object(g["a"])({surveyQuestions:function(){var e=this.getLabel("survey_options");return{s1:{title:this.getLabel("s1_title"),options:e},s2:{title:this.getLabel("s2_title"),options:e},s3:{title:this.getLabel("s2_title"),options:e}}}},Object(f["c"])({currentScene:"stages/isCurrentStage",getLabel:"data/getLabel"}))};const E=h()(F,[["render",I]]);var q=E,R={key:0},N={class:"card-container"},G={class:"card-title"},B={class:"card-body"},Y={class:"card-action"};function $(e,t,n,o,i,c){return e.currentScene("Final")?(Object(a["m"])(),Object(a["e"])("div",R,[Object(a["f"])("div",N,[Object(a["f"])("div",G,[Object(a["f"])("h1",null,Object(a["r"])(e.getLabel("final_title")),1)]),Object(a["f"])("div",B,[Object(a["f"])("p",null,Object(a["r"])(e.getLabel("final_body")),1)]),Object(a["f"])("div",Y,[Object(a["f"])("button",{onClick:t[0]||(t[0]=function(e){return c.reloadPage()})},Object(a["r"])(e.getLabel("final_restart")),1)])])])):Object(a["d"])("",!0)}var U={computed:Object(g["a"])({},Object(f["c"])({currentScene:"stages/isCurrentStage",getLabel:"data/getLabel"})),methods:{reloadPage:function(){window.location.reload()}}};const Q=h()(U,[["render",$]]);var H=Q,Z={name:"App",components:{Welcome:v,About:x,Scenes:z,Survey:q,Final:H},mounted:function(){this.$store.dispatch("stages/onAppLoad")}};const W=h()(Z,[["render",o]]);var V=W;function X(e,t,n,o,i,c){var s=this;return Object(a["m"])(),Object(a["e"])("button",{class:"continueButton",onClick:t[0]||(t[0]=function(t){return!s.disabled&&e.nextStage()})},Object(a["r"])(e.getLabel("continue")),1)}var K={props:{disabled:{type:Boolean,default:!1}},computed:Object(g["a"])({},Object(f["c"])({getLabel:"data/getLabel"})),methods:Object(g["a"])({},Object(f["b"])({nextStage:"stages/nextStage"}))};const J=h()(K,[["render",X]]);var ee=J,te=(n("b64b"),{class:"card-container"}),ne={class:"card-title"},ae={class:"card-body"},oe={class:"form-element-title"},ie={class:"form-element-options"},ce=["onClick"],se={class:"card-action"};function re(e,t,n,o,i,c){var s=Object(a["q"])("Popup"),r=Object(a["q"])("Continue");return Object(a["m"])(),Object(a["e"])(a["a"],null,[Object(a["g"])(s,{ref:"popup",message:e.getLabel("popup")},null,8,["message"]),Object(a["f"])("div",te,[Object(a["f"])("div",ne,[Object(a["f"])("h2",null,Object(a["r"])(n.title),1)]),Object(a["f"])("div",ae,[(Object(a["m"])(!0),Object(a["e"])(a["a"],null,Object(a["p"])(Object.keys(c.currentPage),(function(e){return Object(a["m"])(),Object(a["e"])("div",{class:"form-element",key:e},[Object(a["f"])("div",oe,Object(a["r"])(c.currentPage[e].title),1),Object(a["f"])("div",ie,[(Object(a["m"])(!0),Object(a["e"])(a["a"],null,Object(a["p"])(c.currentPage[e].options,(function(t,n){return Object(a["m"])(),Object(a["e"])("div",{class:Object(a["k"])(["form-element-option",{selected:t===c.currentPage[e].optionSelected}]),key:t,onClick:function(a){return c.onDecisionClick(c.currentPage[e],t,n)}},Object(a["r"])(t),11,ce)})),128))])])})),128))]),Object(a["f"])("div",se,[Object(a["g"])(r,{onClick:c.onContinue,disabled:""},null,8,["onClick"])])])],64)}var ue=n("3835"),le=(n("4de4"),n("d3b7"),n("caad"),n("2532"),n("4fad"),{props:{propQuestions:Object,title:String,saveFunction:String},data:function(){return{questions:this.propQuestions,pageIndex:0,PAGE_SIZE:2}},computed:Object(g["a"])(Object(g["a"])({},Object(f["c"])({getLabel:"data/getLabel"})),{},{dataValidated:function(){var e=this;return 0==Object.keys(this.currentPage).filter((function(t){return!e.currentPage[t].options.includes(e.currentPage[t].optionSelected)})).length},currentPage:function(){return this.paginateQuestions(this.questions,this.PAGE_SIZE)[this.pageIndex]}}),methods:Object(g["a"])(Object(g["a"])({},Object(f["b"])({nextStage:"stages/nextStage"})),{},{onContinue:function(){this.dataValidated?(this.saveData(),this.pageIndex===this.pagesLength-1?this.nextStage():this.pageIndex++):this.$refs.popup.activate()},saveData:function(){this.formatDataForSave(),this.$store.commit("data/".concat(this.saveFunction),this.currentPage)},onDecisionClick:function(e,t,n){e.optionSelected=t,e.optionSelectedIndex=n},formatDataForSave:function(){for(var e=0,t=Object.keys(this.currentPage);e<t.length;e++){var n=t[e];this.currentPage[n]=this.currentPage[n].optionSelectedIndex}},paginateQuestions:function(e,t){for(var n=[],a={},o=0,i=0,c=Object.entries(e);i<c.length;i++){var s=Object(ue["a"])(c[i],2),r=s[0],u=s[1];0!==o&&o%t===0&&(n.push(a),a={}),a[r]=u,o++}return 0!==Object.keys(a).length&&n.push(a),this.pagesLength=n.length,n}})});const de=h()(le,[["render",re]]);var ge=de;function fe(e,t,n,o,i,c){var s=Object(a["q"])("ShaderMaterial"),r=Object(a["q"])("Plane");return Object(a["m"])(),Object(a["c"])(r,{ref:"loadingScreen",width:2,height:2,position:{y:-2,z:0}},{default:Object(a["u"])((function(){return[Object(a["g"])(s,{props:{vertexShader:i.vs,fragmentShader:i.fs,uniforms:i.us}},null,8,["props"])]})),_:1},512)}n("b0c0");var be=n("5a89"),me=n("cffa"),he="\nvarying vec2 vUv;\nuniform float uTime;\nvarying float vTime;\nvoid main()\n{\n    gl_Position = vec4(position, 1.0);\n    vUv = uv;\n    vTime = uTime;\n}\n",pe="\nuniform float uAlpha;\nvarying vec2 vUv;\nvarying float vTime;\n\nvec4 permute(vec4 x)\n{\n    return mod(((x*34.0)+1.0)*x, 289.0);\n}\n\nvec2 fade(vec2 t)\n{\n    return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\nfloat cnoise(vec2 P)\n{\n    vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);\n    vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);\n    Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation\n    vec4 ix = Pi.xzxz;\n    vec4 iy = Pi.yyww;\n    vec4 fx = Pf.xzxz;\n    vec4 fy = Pf.yyww;\n    vec4 i = permute(permute(ix) + iy);\n    vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...\n    vec4 gy = abs(gx) - 0.5;\n    vec4 tx = floor(gx + 0.5);\n    gx = gx - tx;\n    vec2 g00 = vec2(gx.x,gy.x);\n    vec2 g10 = vec2(gx.y,gy.y);\n    vec2 g01 = vec2(gx.z,gy.z);\n    vec2 g11 = vec2(gx.w,gy.w);\n    vec4 norm = 1.79284291400159 - 0.85373472095314 * vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));\n    g00 *= norm.x;\n    g01 *= norm.y;\n    g10 *= norm.z;\n    g11 *= norm.w;\n    float n00 = dot(g00, vec2(fx.x, fy.x));\n    float n10 = dot(g10, vec2(fx.y, fy.y));\n    float n01 = dot(g01, vec2(fx.z, fy.z));\n    float n11 = dot(g11, vec2(fx.w, fy.w));\n    vec2 fade_xy = fade(Pf.xy);\n    vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);\n    float n_xy = mix(n_x.x, n_x.y, fade_xy.y);\n    return 2.3 * n_xy;\n}\n\nvoid main()\n{\n    float strength = 1.0 - step(sin(vTime*0.6), sin(cnoise(vUv * 10.0) * 20.0));\n    gl_FragColor = vec4(vec3(strength), uAlpha);\n}\n",ve={data:function(){return{FADETIME:1,us:{uAlpha:{value:1},uTime:{value:0}},vs:he,fs:pe}},mounted:function(){this.loadingScreen=this.$refs.loadingScreen,this.loadingScreen.mesh.name="loadingPlane",this.loadingScreenMaterial=this.loadingScreen.material,this.loadingScreenMaterial.transparent=!0,this.clock=new be["p"]},methods:Object(g["a"])(Object(g["a"])({},Object(f["b"])({loadingFinish:"stages/loadingFinish"})),{},{finish:function(){var e=this;me["a"].to(this.loadingScreenMaterial.uniforms.uAlpha,{duration:this.FADETIME,value:0,onComplete:function(){e.loadingFinish()}})},update:function(){var e=this.clock.getElapsedTime();this.us.uTime.value=e}})};const je=h()(ve,[["render",fe]]);var Oe=je;function ye(e,t,n,o,i,c){return n.message?(Object(a["m"])(),Object(a["e"])("button",{key:0,class:Object(a["k"])(["option hided",{active:!e.sceneLoading,disabled:n.disabled}]),onClick:t[0]||(t[0]=function(){return c.onClick&&c.onClick.apply(c,arguments)})},Object(a["r"])(n.message),3)):Object(a["d"])("",!0)}n("a9e3");var Se={props:{index:Number,message:String,disabled:{type:Boolean,default:!1}},computed:Object(g["a"])({},Object(f["c"])({sceneLoading:"stages/isSceneLoading"})),methods:{onClick:function(){this.disabled||this.$store.commit("data/saveSceneDecision",this.index)}}};const xe=h()(Se,[["render",ye]]);var Le=xe;function Ae(e,t,n,o,i,c){return Object(a["m"])(),Object(a["e"])("div",{class:Object(a["k"])(["popup warning",{popupActive:i.activated,popupInactive:i.deactivated}])},[Object(a["f"])("h5",null,Object(a["r"])(n.message),1)],2)}var ke={data:function(){return{POPUP_TIME:2,activated:!1,deactivated:!1}},props:["message"],methods:{activate:function(){if(!this.activated){this.activated=!0,this.deactivated=!1;var e=this;setTimeout((function(){e.deactivate()}),1e3*this.POPUP_TIME)}},deactivate:function(){this.activated=!1,this.deactivated=!0}}};const Te=h()(ke,[["render",Ae]]);var _e=Te,Pe={class:"disclaimer"},Ce=Object(a["f"])("div",{class:"disclaimer-icon"},[Object(a["f"])("span",{class:"material-icons"}," error_outline ")],-1),Me={class:"disclaimer-content"};function we(e,t,n,o,i,c){return Object(a["m"])(),Object(a["e"])("div",Pe,[Ce,Object(a["f"])("div",Me,Object(a["r"])(n.content),1)])}var ze={props:["content"]};const De=h()(ze,[["render",we]]);var Ie=De,Fe={class:"languages"},Ee=["src","onClick"];function qe(e,t,n,o,i,c){return Object(a["m"])(),Object(a["e"])("div",Fe,[(Object(a["m"])(!0),Object(a["e"])(a["a"],null,Object(a["p"])(i.langs,(function(t){return Object(a["m"])(),Object(a["e"])("img",{key:t,src:"./assets/images/".concat(t,".png"),class:Object(a["k"])({activeLang:e.currentLanguage===t}),onClick:function(n){return e.setLanguage(t)}},null,10,Ee)})),128))])}var Re={data:function(){return{langs:["CAT","ENG"]}},computed:Object(g["a"])({},Object(f["c"])({currentLanguage:"data/getLanguage",getLabel:"data/getLabel"})),methods:Object(g["a"])({},Object(f["b"])({setLanguage:"data/setLanguage"}))};const Ne=h()(Re,[["render",qe]]);var Ge=Ne,Be={key:0},Ye={class:"card-container"},$e={class:"card-body"},Ue={class:"card-action"};function Qe(e,t,n,o,i,c){var s=Object(a["q"])("Continue");return e.sceneReporting?(Object(a["m"])(),Object(a["e"])("div",Be,[Object(a["f"])("div",Ye,[Object(a["f"])("div",$e,[Object(a["f"])("p",null,Object(a["r"])(e.getLabel("".concat(n.sceneName,"_report"))[e.decisionTaken]),1)]),Object(a["f"])("div",Ue,[Object(a["g"])(s)])])])):Object(a["d"])("",!0)}var He={props:["sceneName"],computed:Object(g["a"])({},Object(f["c"])({sceneReporting:"stages/isSceneReporting",getLabel:"data/getLabel",decisionTaken:"data/getDecisionTaken"}))};const Ze=h()(He,[["render",Qe]]);var We=Ze;function Ve(e,t,n,o,i,c){var s=Object(a["q"])("LoadingScreen"),r=Object(a["q"])("LoadBlender"),u=Object(a["q"])("LoadFBX");return Object(a["m"])(),Object(a["e"])(a["a"],null,[Object(a["g"])(s,{ref:"loadingScreen"},null,512),Object(a["g"])(r,{ref:"blender",sceneName:n.payload.blenderSceneName},null,8,["sceneName"]),Object(a["g"])(u,{ref:"fbx",models:n.payload.fbx},null,8,["models"])],64)}var Xe={props:{payload:Object},computed:Object(g["a"])({},Object(f["c"])({isSceneLoading:"stages/isSceneLoading"})),mounted:function(){this.loadingScreen=this.$refs.loadingScreen,this.blender=this.$refs.blender,this.fbx=this.$refs.fbx},methods:{update:function(){this.fbx.update(),this.isSceneLoading&&this.loadingScreen.update(),this.isSceneLoading&&this.isLoaded()&&this.loadingScreen.finish()},isLoaded:function(){return this.blender.isLoaded&&this.fbx.isLoaded}}};const Ke=h()(Xe,[["render",Ve]]);var Je=Ke;function et(e,t,n,o,i,c){return Object(a["m"])(),Object(a["e"])("div")}n("159b");var tt=n("34ad"),nt=n("0ca5"),at={props:["sceneName"],mounted:function(){var e=this;if(this.isLoaded=!1,this.sceneName){var t=new be["nc"],n=new nt["a"],a=new tt["a"];n.setDecoderPath("./assets/draco/"),a.setDRACOLoader(n);var o=t.load("./assets/scenes/".concat(this.sceneName,"/baked.jpg"));o.flipY=!1;var i=new be["ob"]({map:o}),c=new be["ob"]({color:16777215});a.load("./assets/scenes/".concat(this.sceneName,"/scene.glb"),(function(t){t.scene.traverse((function(e){e.material=i})),t.scene.children.filter((function(e){return e.name.includes("Light")})).forEach((function(e){return e.material=c})),e.addScene(t.scene),e.isLoaded=!0}))}else this.isLoaded=!0},methods:Object(g["a"])({},Object(f["b"])({addScene:"stages/addGLTFScene"}))};const ot=h()(at,[["render",et]]);var it=ot;function ct(e,t,n,o,i,c){var s=Object(a["q"])("Aura"),r=Object(a["q"])("FbxModel");return Object(a["m"])(),Object(a["e"])(a["a"],null,[Object(a["g"])(s,{ref:"aura"},null,512),(Object(a["m"])(!0),Object(a["e"])(a["a"],null,Object(a["p"])(n.models,(function(e){return Object(a["m"])(),Object(a["c"])(r,{key:e,src:"./assets/models/".concat(e.path,".fbx"),onLoad:c.onLoad,scale:e.scale||{x:.01,y:.01,z:.01},position:e.position||{x:0,y:0,z:0},rotation:e.rotation||{y:.5*-Math.PI}},null,8,["src","onLoad","scale","position","rotation"])})),128))],64)}function st(e,t,n,o,i,c){return Object(a["m"])(),Object(a["e"])("div")}n("cfc3"),n("907a"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("99af");var rt="\nuniform float uTime;\nuniform float uPixelRatio;\nuniform float uSize;\n\nattribute float aScale;\n\nvoid main()\n{\n    vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n    modelPosition.y += sin(uTime + modelPosition.x * 100.0) * aScale * 0.2;\n\n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectionPosition = projectionMatrix * viewPosition;\n\n    gl_Position = projectionPosition;\n    \n    gl_PointSize = uSize * aScale * uPixelRatio;\n    gl_PointSize *= (1.0 / - viewPosition.z);\n}\n",ut="\nuniform vec3 uColor;\n\nvoid main()\n{\n    float distanceToCenter = distance(gl_PointCoord, vec2(0.5));\n    float strength = 0.05 / distanceToCenter - 0.1;\n\n    gl_FragColor = vec4(uColor, strength);\n}\n",lt={data:function(){return{vs:rt,fs:ut,loaded:!1,AURA_HEIGHT:.8,AURA_SIZE:.3}},mounted:function(){this.clock=new be["p"],this.firefliesMaterial=null,this.fireflies=null,this.red=new be["q"]("red"),this.green=new be["q"]("green")},methods:{init:function(e){for(var t=new be["k"],n=60,a=new Float32Array(3*n),o=new Float32Array(n),i=0;i<n;i++)a[3*i+0]=Math.random()*this.AURA_SIZE+e.x-this.AURA_SIZE/2,a[3*i+1]=Math.random()*this.AURA_HEIGHT,a[3*i+2]=Math.random()*this.AURA_SIZE+e.z-this.AURA_SIZE/2,o[i]=Math.random()+.2;t.setAttribute("position",new be["j"](a,3)),t.setAttribute("aScale",new be["j"](o,1));var c=this.red.lerp(this.green,this.mood);this.firefliesMaterial=new be["ac"]({uniforms:{uTime:{value:0},uPixelRatio:{value:1},uSize:{value:150},uColor:{value:c}},vertexShader:rt,fragmentShader:ut,transparent:!0,blending:be["b"],depthWrite:!1}),this.fireflies=new be["Kb"](t,this.firefliesMaterial),document.getElementById("mood").style.background="\n                linear-gradient(\n                    90deg, \n                    #".concat(c.getHexString()," ").concat(100*this.mood,"%, \n                    #FFFFFF ").concat(100*this.mood,"%\n            )"),this.load()},load:function(){this.$store.commit("stages/addToScene",this.fireflies),this.loaded=!0},update:function(){if(this.loaded){var e=this.clock.getElapsedTime();this.firefliesMaterial.uniforms.uTime.value=e}}},computed:Object(g["a"])({},Object(f["c"])({mood:"data/getMood",renderer:"stages/getRenderer"}))};const dt=h()(lt,[["render",st]]);var gt=dt,ft={props:{models:Array},components:{Aura:gt},mounted:function(){this.modelsSize=this.models&&this.models.length?this.models.length:0,this.isLoaded=0===this.modelsSize,this.animations=[]},methods:{update:function(){this.animations.forEach((function(e){e.animation.update(e.clock.getDelta())})),this.$refs.aura.update()},onLoad:function(e){var t=new be["e"](e);t.clipAction(e.animations[0]).play();var n=new be["p"];0===this.animations.length&&this.$refs.aura.init(this.models[0].position),this.animations.push({animation:t,clock:n}),this.animations.length===this.modelsSize&&(this.isLoaded=!0)}}};const bt=h()(ft,[["render",ct]]);var mt=bt,ht=(n("a4d3"),n("e01a"),{class:"scene-ui"}),pt={key:0,class:"description"},vt={class:"title"},jt={class:"footer",id:"footer"},Ot={class:"info hided",id:"mood"};function yt(e,t,n,o,i,c){var s=this,r=Object(a["q"])("Option");return Object(a["m"])(),Object(a["e"])("div",ht,[e.sceneLoading?(Object(a["m"])(),Object(a["e"])("div",pt,[Object(a["f"])("h1",null,Object(a["r"])(n.information.description),1)])):Object(a["d"])("",!0),Object(a["f"])("div",vt,[Object(a["g"])(r,{message:n.information.title,disabled:""},null,8,["message"])]),Object(a["f"])("div",jt,[Object(a["f"])("div",{class:Object(a["k"])(["icons",{active:!e.sceneLoading}])},[Object(a["f"])("span",Ot,[Object(a["f"])("b",null,Object(a["r"])(c.moodFormatted),1)]),Object(a["f"])("button",{onClick:t[0]||(t[0]=function(e){return i.isExpanded=!i.isExpanded}),class:"material-icons icon hided"},Object(a["r"])(c.icon),1),Object(a["f"])("button",{class:"material-icons icon hided",onClick:t[1]||(t[1]=function(e){return s.$store.commit("stages/nextCamera")})},"360")],2),Object(a["f"])("div",{class:Object(a["k"])(["options",{expanded:i.isExpanded}])},[(Object(a["m"])(!0),Object(a["e"])(a["a"],null,Object(a["p"])(n.information.options,(function(e,t){return Object(a["m"])(),Object(a["c"])(r,{key:e,message:e,index:t},null,8,["message","index"])})),128))],2)])])}var St={props:["information"],data:function(){return{isExpanded:!0}},watch:{sceneReporting:function(e,t){!0===e&&document.getElementById("footer").remove()}},computed:Object(g["a"])(Object(g["a"])({},Object(f["c"])({sceneLoading:"stages/isSceneLoading",sceneReporting:"stages/isSceneReporting",currentCamera:"stages/getSceneCamera",mood:"data/getMood",getLabel:"data/getLabel"})),{},{moodFormatted:function(){return"".concat(this.getLabel("mood"),": ").concat(100*this.mood,"%")},icon:function(){return this.isExpanded?"expand_more":"expand_less"}})};const xt=h()(St,[["render",yt]]);var Lt=xt;function At(e,t,n,o,i,c){var s=Object(a["q"])("PerspectiveCamera"),r=Object(a["q"])("AmbientLight"),u=Object(a["q"])("Loader"),l=Object(a["q"])("Scene"),d=Object(a["q"])("Renderer");return Object(a["m"])(),Object(a["c"])(d,{ref:"renderer",resize:"window"},{default:Object(a["u"])((function(){return[Object(a["g"])(s,{ref:"camera",position:i.cameraPosition,lookAt:i.cameraLookAt},null,8,["position","lookAt"]),Object(a["g"])(l,{ref:"scene",background:"#000000"},{default:Object(a["u"])((function(){return[Object(a["g"])(r,{intensity:.8},null,8,["intensity"]),Object(a["g"])(u,{ref:"loader",payload:{blenderSceneName:n.config.sceneName,fbx:n.config.fbx}},null,8,["payload"])]})),_:1},512)]})),_:1},512)}var kt={props:{config:Object},data:function(){var e=this.config.cameraLookAts,t=this.config.cameraPositions;return{cameras:t.length,cameraPositions:t,cameraPosition:Object.assign({},t[0]),cameraLookAts:e,cameraLookAt:Object.assign({},e[0]),ANIM_TIME:1}},mounted:function(){var e=this;this.scene=this.$refs.scene,this.renderer=this.$refs.renderer,this.$store.commit("stages/setScene",this.scene),this.$store.commit("stages/setRenderer",this.renderer),this.renderer.onBeforeRender((function(){e.$refs.loader.update(),e.update()}))},watch:{camera:function(e,t){e%=this.cameras,this.swap(this.cameraPosition,this.cameraPositions[e]),this.swap(this.cameraLookAt,this.cameraLookAts[e])}},computed:Object(g["a"])({},Object(f["c"])({camera:"stages/getSceneCamera",gltf:"stages/getGLTF"})),methods:{update:function(){this.gltf&&this.config.update(this.gltf)},swap:function(e,t){me["a"].to(e,{duration:this.ANIM_TIME,x:t.x,y:t.y,z:t.z})}}};const Tt=h()(kt,[["render",At]]);var _t=Tt,Pt=(n("7db0"),n("e9c4"),{continue:["Continue","Avança"],popup:["Fill answers please","Emplena les preguntes siusplau"],welcome_title:["TFG","TFG"],welcome_body:["Game for raising awarness on social media addiction ","Joc per conscienciar sobre l'addicció a les xarxes socials"],welcome_disclaimers:[["Anonymous use of Age Gender Answers for statistical analysis","By starting the game, you are consenting the use of the data"],["Anonymous use of Age Gender Answers for statistical analysis","By starting the game, you are consenting the use of the data"]],final_title:["Game end","Fi del joc"],final_body:["Thanks","Gracies"],final_restart:["Restart","Reinicia"],about_title:["About you","Sobre tu"],about_age:["Select your age","Selecciona la teva edat"],about_gender:["Select your gender","Selecciona el teu genere"],about_gender_options:[["Male","Female","Other"],["Home","Dona","Altre"]],survey_title:["Final survey","Enquesta final"],s1_title:["ENGAn excessive use of social media platforms can lead to negative effects in physical and mental health","CATAn excessive use of social media platforms can lead to negative effects in physical and mental health"],s2_title:["ENGAn excessive use of social media platforms can lead to negative effects in physical and mental health","CATAn excessive use of social media platforms can lead to negative effects in physical and mental health"],survey_options:[["Disagree","Neutral","Agree"],["En desacord","Neutral","D'acord"]],mood:["Mood","Anims"],Scene1_desc:["Day 1 Scene 1","Dia 1 Situacio 1"],Scene1_title:["Its early in the morning, you are eating your breakfast before going to school, in the table there are your parents, they start to talk about some family trip ideas","Its early in the morning, you are eating your breakfast before going to school, in the table there are your parents, they start to talk about some family trip ideas"],Scene1_options:[["You disconnect from the conversation and scroll through your phone","You disconnect from the conversation and scroll through your phone","You disconnect from the conversation and scroll through your phone"],["You just focus in finnishing your meal","You just focus in finnishing your meal","You just focus in finnishing your meal"]],Scene1_report:[["Bad","Mid.","Good"],["CATBad","CATMid.CATMid.CATMid.CATMid. CATMid.CATMid. CATMid.","cATGood"]],Scene2_desc:["Day 2 Scene 1","Dia 2 Situacio 1"],Scene2_title:["Its early in the morning, you are eating your breakfast before going to school, in the table there are your parents, they start to talk about some family trip ideas","Its early in the morning, you are eating your breakfast before going to school, in the table there are your parents, they start to talk about some family trip ideas"],Scene2_options:[["You disconnect from the conversation and scroll through your phone","You disconnect from the conversation and scroll through your phone","You disconnect from the conversation and scroll through your phone"],["You just focus in finnishing your meal","You just focus in finnishing your meal","You just focus in finnishing your meal"]],Scene2_report:[["Bad","Mid.","Good"],["CATBad","CATMid.CATMid.CATMid.CATMid. CATMid.CATMid. CATMid.","cATGood"]],Scene3_desc:["Day 3 Scene 1","Dia 3 Situacio 1"],Scene3_title:["Its early in the morning, you are eating your breakfast before going to school, in the table there are your parents, they start to talk about some family trip ideas","Its early in the morning, you are eating your breakfast before going to school, in the table there are your parents, they start to talk about some family trip ideas"],Scene3_options:[["You disconnect from the conversation and scroll through your phone","You disconnect from the conversation and scroll through your phone","You disconnect from the conversation and scroll through your phone"],["You just focus in finnishing your meal","You just focus in finnishing your meal","You just focus in finnishing your meal"]],Scene3_report:[["Bad","Mid.","Good"],["CATBad","CATMid.CATMid.CATMid.CATMid. CATMid.CATMid. CATMid.","cATGood"]]}),Ct=function(){return{languages:{ENG:0,CAT:1},language:1,userData:{sceneDecisions:[],aboutDecisions:{},surveyDecisions:{}},mood:.5,decisionsMood:[[-.5,.3,.1],[-.5,.1,.3],[-.2,-.3,.4]],decisionTaken:null,scenesCollection:"61b4956f0ddbee6f8b1b8c7e",usersCollection:"61b49c4262ed886f915e5a13",masterKey:"$2b$10$yGbK6Zw/E5lzTl.TmQivFuhYR87PWV2Cy2TG.gIi8Lp2BLduGVNyq"}},Mt={getLabel:function(e){return function(t){return Pt[t]?Pt[t][e.language]:"No label"}},getLanguage:function(e){return Object.keys(e.languages).find((function(t){return e.languages[t]===e.language}))},getMood:function(e){return e.mood},getDecisionTaken:function(e){return e.decisionTaken},getUserData:function(e){return e.userData}},wt={setLanguage:function(e,t){var n=e.commit;n("setLanguage",t)},saveData:function(e){e.commit;var t=e.getters;console.log(t.getUserData)}},zt={setLanguage:function(e,t){e.language=e.languages[t]},saveData:function(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){t.readyState==XMLHttpRequest.DONE&&console.log(t.responseText)},t.open("POST","https://api.jsonbin.io/v3/b",!0),t.setRequestHeader("Content-Type","application/json"),t.setRequestHeader("X-Master-Key",e.masterKey),t.setRequestHeader("X-Collection-Id",e.usersCollection),t.send(JSON.stringify(e.userData))},saveAboutDecisions:function(e,t){for(var n=0,a=Object.entries(t);n<a.length;n++){var o=Object(ue["a"])(a[n],2),i=o[0],c=o[1];e.userData.aboutDecisions[i]=c}},saveSurveyDecisions:function(e,t){for(var n=0,a=Object.entries(t);n<a.length;n++){var o=Object(ue["a"])(a[n],2),i=o[0],c=o[1];e.userData.surveyDecisions[i]=c}},saveSceneDecision:function(e,t){var n=e.userData.sceneDecisions.length;e.userData.sceneDecisions.push(t),e.mood+=e.decisionsMood[n][t],e.mood>1&&(e.mood=1),e.mood<0&&(e.mood=0),e.decisionTaken=t,this.commit("stages/reportStart",{root:!0})}},Dt={namespaced:!0,state:Ct,getters:Mt,actions:wt,mutations:zt},It=function(){return{stages:["Welcome","About","Scene1","Scene2","Scene3","Survey","Final"],currentStageIndex:0,sceneLoading:!1,sceneReporting:!1,scene:null,renderer:null,gltfScene:null,sceneCamera:0}},Ft={isCurrentStage:function(e){return function(t){return e.stages[e.currentStageIndex]==t}},currentStageIsScene:function(e){return e.stages[e.currentStageIndex].includes("Scene")},isSceneLoading:function(e){return e.sceneLoading},isSceneReporting:function(e){return e.sceneReporting},getSceneCamera:function(e){return e.sceneCamera},getGLTF:function(e){return e.gltfScene},getRenderer:function(e){return e.renderer},isLastStage:function(e){return e.currentStageIndex==e.stages.length-1}},Et={onAppLoad:function(e){var t=e.commit,n=e.getters;n.currentStageIsScene&&t("loadingStart")},nextStage:function(e){var t=e.commit,n=e.getters;n.isLastStage||t("nextStage"),n.currentStageIsScene&&t("loadingStart"),n.isLastStage&&t("saveData")},addGLTFScene:function(e,t){var n=e.commit;n("addToScene",t),n("setGLTFScene",t)},loadingFinish:function(e){var t=e.commit;t("removeLoading"),t("loadingEnd")}},qt={nextStage:function(e){e.currentStageIndex++},setScene:function(e,t){e.scene=t},setRenderer:function(e,t){e.renderer=t},setGLTFScene:function(e,t){e.gltfScene=t},removeLoading:function(e){e.scene.remove(e.scene.scene.getObjectByName("loadingPlane"))},addToScene:function(e,t){e.scene.add(t)},loadingStart:function(e){e.sceneLoading=!0,e.sceneReporting=!1},loadingEnd:function(e){e.sceneLoading=!1},reportStart:function(e){e.sceneReporting=!0},reportEnd:function(e){e.sceneReporting=!1},saveData:function(){this.dispatch("data/saveData",{root:!0})},nextCamera:function(e){e.sceneCamera++}},Rt={namespaced:!0,state:It,getters:Ft,actions:Et,mutations:qt},Nt=Object(f["a"])({modules:{data:Dt,stages:Rt}}),Gt=n("af1e");Object(a["b"])(V).use(Nt).use(Gt["a"]).component("Continue",ee).component("Form",ge).component("LoadingScreen",Oe).component("Report",We).component("Option",Le).component("Disclaimer",Ie).component("SceneUi",Lt).component("Popup",_e).component("SelectFlag",Ge).component("Loader",Je).component("LoadBlender",it).component("LoadFBX",mt).component("SceneVisuals",_t).mount("#app")}});
//# sourceMappingURL=app.c68d8069.js.map