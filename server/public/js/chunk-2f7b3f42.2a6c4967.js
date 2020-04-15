(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f7b3f42"],{"12b5":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"main-container"}},[i("div",{staticClass:"row",attrs:{id:"main-header"}},[i("nobr",{staticClass:"logo"},[e._v("Chat Node.js + Vue.js + Socket.io")]),i("div",{staticClass:"del-but",on:{click:e.EditMsgs}},[e._v(e._s(e.state))])],1),i("div",{ref:"chat",attrs:{id:"main-chat"}},[i("transition-group",{attrs:{name:"msg"}},e._l(e.msgs,(function(t){return i("div",{key:t.date.getTime().toString(),staticClass:"col msg-container",class:{"msg-chouse":"Delete"==e.state,"msg-active":t.active&&"Delete"==e.state},style:t.id==e.uid?"align-items: flex-end;":"align-items: flex-start;",on:{click:function(i){return e.chouseMsg(t)}}},[i("div",{staticClass:"msg-box",domProps:{innerHTML:e._s(t.text)}}),i("p",{staticClass:"msg-info"},[e._v(e._s("User "+t.id+" "+e.getMsgTime(t.date)))])])})),0)],1),i("div",{staticClass:"row",attrs:{id:"main-input"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.inputTxt,expression:"inputTxt"}],attrs:{type:"text",placeholder:"Send message.."},domProps:{value:e.inputTxt},on:{input:function(t){t.target.composing||(e.inputTxt=t.target.value)}}}),i("i",{staticClass:"far fa-smile",staticStyle:{"margin-right":"10px"},on:{click:e.toogleSmileBox}}),i("i",{staticClass:"far fa-paper-plane",on:{click:e.sendMsg}})]),i("transition",{attrs:{name:"fade"}},[e.smileBox?i("div",{staticClass:"smile-box"},e._l(e.smiles,(function(t){return i("img",{key:t,staticClass:"emotion",attrs:{src:"img/"+t+".png"},on:{click:function(i){return e.writeSmile(t)}}})})),0):e._e()])],1)},n=[],a=(i("99af"),i("4160"),i("159b"),{name:"MyChat",props:["msgs","uid"],data:function(){return{state:"Edit",inputTxt:"",smileBox:!1,smiles:["afro-1","afro","agent","alien-1","alien","angel","angry-1","angry-2","angry-3","angry-4","angry-5","angry","arguing","arrogant","asian-1","asian","avatar","baby-1","baby-2","baby","bully","burglar","businessman","cheeky-1","cheeky","clown","confused-1","confused-2","confused-3","confused","creepy","crying-1","crying-2","crying-3","crying","dazed-1","dazed-2","dazed-3","dazed","dead-1","dead-2","dead-3","dead-4","dead-5","dead-6","dead","desperate-1","desperate","detective","dissapointment","doctor","drunk","dumb","emo-1","emo-2","emo","emoticon","evil","faint-1","faint","flirt-1","flirt-2","flirt","flirty","gangster","geek-1","geek","gentleman-1","gentleman-2","gentleman-3","gentleman-4","gentleman","ginger","girl-1","girl","goofy-1","goofy-2","goofy-3","goofy-4","goofy","grubby-1","grubby","happy-1","happy-10","happy-11","happy-12","happy-13","happy-14","happy-15","happy-16","happy-2","happy-3","happy-4","happy-5","happy-6","happy-7","happy-8","happy-9","happy","harry-potter","heisenberg","hipster-1","hipster-2","hipster","in-love-1","in-love-2","in-love-3","in-love-4","in-love-5","in-love-6","in-love","japan","jew","joyful-1","joyful-2","joyful","kiss-1","kiss-2","kiss-3","kiss-4","kiss","laughing-1","laughing-2","laughing-3","laughing","listening","love","manly","miserly-1","miserly","nerd-1","nerd-2","nerd-3","nerd-4","nerd","ninja","pirate-1","pirate-2","pirate","punk-1","punk-2","punk","rapper","relieved","rich-1","rich-2","rich","rockstar","sad-1","sad-2","sad-3","sad-4","sad-5","sad-6","sad","scared-1","scared-2","scared-3","scared","sceptic-1","sceptic-2","sceptic-3","sceptic-4","sceptic-5","sceptic-6","sceptic-7","sceptic","secret","shocked-1","shocked-2","shocked-3","shocked","sick-1","sick-2","sick-3","sick-4","sick","silent","skeleton","smile","smiling-1","smiling","smoked","smug-1","smug-2","smug-3","smug-4","smug-5","smug-6","smug","sporty","stunned","superhero-1","superhero-2","superhero-3","superhero-4","superhero","surprised-1","surprised","thinking","tired-1","tired-2","tired-3","tired","tough-1","tough","trendy","vampire-1","vampire","wink-1","wink-2","wink","winking-1","winking","yawning-1","yawning-2","yawning-3","yawning","yelling","zombie"]}},mounted:function(){var e=this;document.addEventListener("keyup",(function(t){"Enter"==t.code&&e.sendMsg()}))},methods:{chouseMsg:function(e){"Delete"==this.state&&(e.active=!e.active)},writeSmile:function(e){this.inputTxt+=" :".concat(e,": ")},toogleSmileBox:function(){this.smileBox=!this.smileBox},EditMsgs:function(){var e=this;"Edit"==this.state?this.state="Delete":(this.msgs.forEach((function(t){t.active&&t.blackList.push(e.uid)})),this.state="Edit",this.$emit("update-msgs"))},getMsgTime:function(e){var t=new Date,i=(t.getTime()-e.getTime())/864e5,s=e.getHours(),n=e.getMinutes();return n=n<10?"0"+n:n,i<1?"в ".concat(s,":").concat(n):i>1&&i<2?"вчера в ".concat(s,":").concat(n):"".concat(e.getDate(),"/").concat(e.getMonth()," в ").concat(s,":").concat(n)},sendMsg:function(){var e=this;this.$emit("send-msg",this.inputTxt),this.inputTxt="",this.smileBox=!1,setTimeout((function(){e.$refs.chat.scrollTop=e.$refs.chat.scrollHeight}),1)}}}),r=a,o=(i("4132"),i("2877")),c=Object(o["a"])(r,s,n,!1,null,null,null);t["default"]=c.exports},4132:function(e,t,i){"use strict";var s=i("b8b2"),n=i.n(s);n.a},"99af":function(e,t,i){"use strict";var s=i("23e7"),n=i("d039"),a=i("e8b5"),r=i("861d"),o=i("7b0b"),c=i("50c4"),d=i("8418"),l=i("65f0"),g=i("1dde"),u=i("b622"),p=i("2d00"),m=u("isConcatSpreadable"),h=9007199254740991,f="Maximum allowed index exceeded",y=p>=51||!n((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),v=g("concat"),k=function(e){if(!r(e))return!1;var t=e[m];return void 0!==t?!!t:a(e)},b=!y||!v;s({target:"Array",proto:!0,forced:b},{concat:function(e){var t,i,s,n,a,r=o(this),g=l(r,0),u=0;for(t=-1,s=arguments.length;t<s;t++)if(a=-1===t?r:arguments[t],k(a)){if(n=c(a.length),u+n>h)throw TypeError(f);for(i=0;i<n;i++,u++)i in a&&d(g,u,a[i])}else{if(u>=h)throw TypeError(f);d(g,u++,a)}return g.length=u,g}})},b8b2:function(e,t,i){}}]);
//# sourceMappingURL=chunk-2f7b3f42.2a6c4967.js.map