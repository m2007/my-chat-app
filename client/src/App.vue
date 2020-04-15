<template>
  <div id="app" class="row">
    <my-nav :users="users"></my-nav>
    <my-chat :uid="uid" :msgs="filteredMsgs" 
    @send-msg="sendMsg" @update-msgs="updateMsgs">
    </my-chat>
  </div>
</template>
<script>
import io from 'socket.io-client'

export default {
  name: 'App',
  components: {
    MyNav: () => import('@/components/MyNav.vue'),
    MyChat: () => import('@/components/MyChat.vue')
  },
  data: () => ({
    socket: null,
    users: [],
    msgs: [],
    uid: null
  }),
  created() {
    this.socket = io(window.location.href)
  },
  mounted() {
    let user = window.localStorage.getItem('user')

    if (user) {
      this.socket.emit('user:connect', JSON.parse(user))
      this.uid = JSON.parse(user).id
    } else {
      let userTmp = { id: (Math.random() * 1000).toFixed(0) }
      window.localStorage.setItem('user', JSON.stringify(userTmp))

      this.socket.emit('user:connect', userTmp)
      this.uid = userTmp.id
    }

    this.socket.on('users', data => { 
      this.users = data
      this.users.sort(user => user.online ? -1 : 1)
    })
    this.socket.on('msgs', data => { 
      this.msgs = data
      this.msgs.forEach(msg => {
        msg.date = new Date(msg.date)
      });
      this.msgs = this.filteredMsgs.splice(-20)
      
      setTimeout(() => {
        let chat = document.getElementById('main-chat')
        chat.scrollTop = chat.scrollHeight
      }, 1)
    })

    this.socket.on('msg', data => {
      data.date = new Date(data.date)
      this.msgs.push(data)
    })

    this.socket.emit('users:get')
    this.socket.emit('msgs:get')
  },
  computed: {
    filteredMsgs() {
      return this.msgs.filter(msg => msg.blackList.indexOf(this.uid) == -1)
    }
  },
  methods: {
    sendMsg(inputTxt) {
      if (inputTxt) {
        //eslint-disable-line
        //eslint-disable-next-line
        let text = inputTxt.replace(/\s\:(.*?)\:\s/g, '<img class="emotion" src="/img/$1.png">')
        let msg = {
          text,
          date: new Date(),
          id: this.uid,
          blackList: [],
          active: false
        }
        this.socket.emit('msg', msg)
        this.msgs.push(msg)
      }
    },
    updateMsgs() {
      this.socket.emit('msgs:update', this.msgs)
    }
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&subset=cyrillic');
$white: #ffffff;
$black: #1c1c1c;
$llgray:#8a8a8a;
$lgray: #2d2d37;
$gray: #28282f;

* {
  margin: 0;
  padding: 0; 
  font-family: Roboto;
  font-style: normal;
  font-size: 14pt;
  color: $white;
}
*::-webkit-scrollbar {
  width: 10px;
  opacity: 0;
}
*::-webkit-scrollbar-thumb {
  background-color: $llgray;
}
#app {
  overflow: hidden;
}
input {
  border: none;
  &:focus {
    outline: none;
  }
}
.col {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}
.row {
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
}
</style>
