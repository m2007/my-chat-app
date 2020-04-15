<template>
  <div id="main-container">
    <div class="row" id="main-header">
      <nobr class="logo">Chat Node.js + Vue.js + Socket.io</nobr>
      <div class="del-but" @click="EditMsgs">{{state}}</div>
    </div>
    <div id="main-chat" ref="chat">
      <transition-group name='msg'>
        <div v-for="msg of msgs" :key="msg.date.getTime().toString()" 
        class="col msg-container" :class="{'msg-chouse': state == 'Delete', 'msg-active': msg.active && state == 'Delete'}"
        :style="msg.id == uid ? 'align-items: flex-end;' : 'align-items: flex-start;'"
        @click="chouseMsg(msg)">
          <div class="msg-box" v-html="msg.text"></div>
          <p class="msg-info">{{`User ${msg.id} ${getMsgTime(msg.date)}`}}</p>
        </div>
      </transition-group>
    </div>
    <div class="row" id="main-input">
      <input type="text" placeholder="Send message.." v-model="inputTxt">
      <i class="far fa-smile" @click="toogleSmileBox" style="margin-right: 10px"></i>
      <i class="far fa-paper-plane" @click="sendMsg"></i>
    </div>
    <transition name="fade">
      <div class="smile-box" v-if="smileBox">
        <img v-for="smile of smiles" :key='smile' :src="'img/'+smile+'.png'" class="emotion" @click="writeSmile(smile)">
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'MyChat',
  props: ['msgs', 'uid'],
  data: () => ({
    state: 'Edit',
    inputTxt: '',
    smileBox: false,
    smiles: ['afro-1','afro','agent','alien-1','alien','angel','angry-1','angry-2','angry-3','angry-4','angry-5','angry','arguing','arrogant','asian-1','asian','avatar','baby-1','baby-2','baby','bully','burglar','businessman','cheeky-1','cheeky','clown','confused-1','confused-2','confused-3','confused','creepy','crying-1','crying-2','crying-3','crying','dazed-1','dazed-2','dazed-3','dazed','dead-1','dead-2','dead-3','dead-4','dead-5','dead-6','dead','desperate-1','desperate','detective','dissapointment','doctor','drunk','dumb','emo-1','emo-2','emo','emoticon','evil','faint-1','faint','flirt-1','flirt-2','flirt','flirty','gangster','geek-1','geek','gentleman-1','gentleman-2','gentleman-3','gentleman-4','gentleman','ginger','girl-1','girl','goofy-1','goofy-2','goofy-3','goofy-4','goofy','grubby-1','grubby','happy-1','happy-10','happy-11','happy-12','happy-13','happy-14','happy-15','happy-16','happy-2','happy-3','happy-4','happy-5','happy-6','happy-7','happy-8','happy-9','happy','harry-potter','heisenberg','hipster-1','hipster-2','hipster','in-love-1','in-love-2','in-love-3','in-love-4','in-love-5','in-love-6','in-love','japan','jew','joyful-1','joyful-2','joyful','kiss-1','kiss-2','kiss-3','kiss-4','kiss','laughing-1','laughing-2','laughing-3','laughing','listening','love','manly','miserly-1','miserly','nerd-1','nerd-2','nerd-3','nerd-4','nerd','ninja','pirate-1','pirate-2','pirate','punk-1','punk-2','punk','rapper','relieved','rich-1','rich-2','rich','rockstar','sad-1','sad-2','sad-3','sad-4','sad-5','sad-6','sad','scared-1','scared-2','scared-3','scared','sceptic-1','sceptic-2','sceptic-3','sceptic-4','sceptic-5','sceptic-6','sceptic-7','sceptic','secret','shocked-1','shocked-2','shocked-3','shocked','sick-1','sick-2','sick-3','sick-4','sick','silent','skeleton','smile','smiling-1','smiling','smoked','smug-1','smug-2','smug-3','smug-4','smug-5','smug-6','smug','sporty','stunned','superhero-1','superhero-2','superhero-3','superhero-4','superhero','surprised-1','surprised','thinking','tired-1','tired-2','tired-3','tired','tough-1','tough','trendy','vampire-1','vampire','wink-1','wink-2','wink','winking-1','winking','yawning-1','yawning-2','yawning-3','yawning','yelling','zombie'],
  }),
  mounted() {
    document.addEventListener('keyup', e => { if (e.code == "Enter") this.sendMsg() })
  },
  methods: {
    chouseMsg(msg) {
      if (this.state == 'Delete') msg.active = !msg.active
    },
    writeSmile(smile) {
      this.inputTxt += ` :${smile}: `
    },
    toogleSmileBox() {
      this.smileBox = !this.smileBox
    },
    EditMsgs() {
      if (this.state == 'Edit') this.state = 'Delete'
      else {
        this.msgs.forEach(msg => { 
          if (msg.active) {
            msg.blackList.push(this.uid)
            msg.active = false
          }
        })
        this.state = 'Edit'
        
        this.$emit('update-msgs')
      }
    },
    getMsgTime(date) {
      let now = new Date()
      let daysAgo = (now.getTime() - date.getTime()) / 86400000

      let h = date.getHours()
      let m = date.getMinutes()
      m = m < 10 ? '0' + m : m
      
      if (daysAgo < 1) return `в ${h}:${m}`
      else if (daysAgo > 1 && daysAgo < 2) return `вчера в ${h}:${m}`
      else return `${date.getDate()}/${date.getMonth()} в ${h}:${m}`
    },
    sendMsg() {
      this.$emit('send-msg', this.inputTxt)
      this.inputTxt = ''
      this.smileBox = false
      setTimeout(() => {this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight }, 1)
    }
  }
}
</script>
<style lang="scss">
$white: #ffffff;
$black: #1c1c1c;
$llgray:#8a8a8a;
$lgray: #2d2d37;
$gray: #28282f;

#main-container {
  position: relative;
  background-color: $gray;
  width: 100%;
  height: 100vh;
}
#main-header, #main-input, #main-input input {
  background-color: $lgray;
}
#main-header{
  height: 50px;
  padding: 0 10px;
  justify-content: space-between;
}
.logo {
  color: $llgray;
}
.del-but {
  user-select: none;
  cursor: pointer;
  color: $white;
}
#main-input {
  height: 40px;
  padding: 0 10px;
}
#main-input input {
  width: 100%;
}
#main-chat{
  height: calc(100% - 90px);
  overflow: hidden;
  overflow-y: auto;
}
.msg-container {
  padding: 10px 20px 0;
}
.msg-chouse:hover, .msg-active {
  cursor: pointer;
  background-color: #25252a;
}
.msg-box {
  background-color: #737373;
  display: flex;
  align-items: baseline;
  padding: 10px 20px;
  border-radius: 5px;
}
.msg-info {
  margin-top: 2px;
  font-size: 9pt;
  color: $llgray;
}
.emotion {
  cursor: pointer;
  margin: 0 3px;
  width: 1rem;
  display: inline;
}
.smile-box {
  position: absolute;
  bottom: 40px;
  right: 0px;
  padding: 10px;
  width: 190px;
  height: 200px;
  overflow: hidden;
  overflow-y: scroll;
  background-color: $black;
}
.msg-enter-active, .msg-leave-active {
  transition: all .3s;
}
.msg-enter, .msg-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>