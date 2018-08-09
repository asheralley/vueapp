<template>
    <div class="test">
      <input type="text" v-model="search.placeholder"><br />
      <h1>{{title}}</h1>
      <p>{{user.firstName}}</p>
      <p v-if="showName">{{user.lastName}}</p>
      <p v-else>No last name, sorry.</p>
      <ul>
        <li v-for="item in items">{{item.title}}</li>
      </ul>
      <button v-on:click="greet('Hello')">Say greeting</button><br />
      <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">
      <hr />
      <label>First Name:</label><input type="text" v-model="user.firstName">
      <br />
      <label>Last Name:</label><input type="text" v-model="user.lastName">
      <h3>{{fullName}}</h3>
      <h2>{{msg}}</h2>
    </div>
</template>

<script>
export default {
    name: 'test',
    props: {
      msg: {
        type: String,
        default: 'Foobar'
      }
    },
    data(){
      return {
        title: 'Hello world',
        user: {
          firstName: 'John',
          lastName: 'Doe'
        },
        showName: true,
        items: [
          {title: 'Item One'},
          {title: 'Item Two'},
          {title: 'Item Three'},
        ],
        search: {
          placeholder: 'Type here, please'
        }
      }
    },
    methods: {
      greet: function (greeting) {
        alert(greeting);
      },
      pressKey: function (e) {
        console.log(e.target.value);
      },
      enterHit: function () {
        alert('You hit enter!');
      }
    },
    computed: {
      fullName: function(){
        return this.user.firstName+ ' ' +this.user.lastName;
      }
    }
  }
</script>

<style scoped>

</style>
