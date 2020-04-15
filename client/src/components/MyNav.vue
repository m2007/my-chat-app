<template>
    <div class="col" id="nav-container" :class="isNav ? '' : 'nav-close'" >
      <div id="nav-input">
        <i class="fas fa-search"></i>
        <input type="text" v-model="inputFind">
      </div>
      <i class="fas fa-arrow-left" @click="isNav = !isNav" :class="isNav ? '' : 'arrow-rot'"></i>
      <div id="nav-content">
        <p id="online-count">Users online: {{`${countOnline}`}}</p>
        <div v-for="user of usersSearch" :key="user.id" class="row row-user">
          <i class="fas fa-circle" :class="user.online ? 'online' : 'offline'"></i>
          <p>User {{user.id}}</p>
        </div>
      </div>
    </div>
</template>
<script>
export default {
	name: 'MyNav',
	props: ['users'],
	data: () => ({
		isNav: false,
		inputFind: '',
	}),
	computed: {
		usersSearch() {
      return this.inputFind ? this.users.filter(user => user.id.indexOf(this.inputFind, 0) != -1) : this.users
    },
    countOnline() {
      return this.users.filter(user => user.online).length
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

#nav-container {
  position: relative;
  background-color: $black;
  overflow-y: auto;
  min-width: 350px;
  height: 100vh;
  transition: all .5s;
}
.nav-close {
  margin-left: -315px;
}
.fa-arrow-left {
  position: absolute;
  right: 10px;
  top: 30px;
  transition: .5s;
}
.arrow-rot {
  transform: rotate(180deg);
}
#nav-input {
  margin: 20px 0;
  padding: 10px 15px;
  border-radius: 5px;
  overflow: hidden;
  background-color: $gray;
}
#nav-input input{
  background-color: $gray;
  padding-left: 10px;
}
#nav-content {
 width: 80%;
}
#online-count {
  font-size: 12pt;
  color: $llgray;
}
i {
  cursor: pointer;
}
.fa-circle {
  font-size: 10pt;
  margin-right: 15px;
}
.fa-search {
  color: $black;
}
.online {
  color: green;
}
.offline {
  color: $lgray;
}
.row-user {
  margin-top: 10px;
}
@media (max-width: 700px) {
  #nav-container {
    min-width: 100%;
  }
  .nav-close {
    margin-left: calc(-100% + 35px);
  }
}
</style>