<template>
  <Nav />
  <div class="container pt-20">
    <h1 class="text-2xl font-bold text-gray-800 my-6">Users List</h1>

    <div class="flex items-center  w-full">
      <input type="text" class="input-main mr-4 w-32" placeholder="Name">
      <input type="text" class="input-main w-32" placeholder="Email">
    </div>
    <button class="btn-blue block ml-auto">Add User</button>
  
    <table id="table" class="w-full">
      <tr class="text-left border-b border-gray-300 !bg-white">
        <th class="py-4">Name</th>
        <th class="py-4">Email</th>
        <th class="py-4">id</th>
        <th class="py-4"></th>
      </tr>
      <tr class="bg-white even:bg-gray-400" v-for="user in users" :key="user.id">
        <td class="py-3 font-bold">{{user.name}}</td>
        <td class="py-3">{{user.email}}</td>
        <td class="py-3">{{user.id}}</td>
        <td><button @click="deleteuser(user.id)" class="font-semibold text-red-500 ml-auto block">Delete</button></td>
      </tr>
    </table>
  </div>
  
  
</template>

<script>
import Nav from '@/components/Nav.vue'
export default {
  components: { Nav },
  data() {
    return {
      name: '',
      email: '',
      id: null,
      users: [
          { name: 'Mel John', email: 'mlon@gmail.com', id: 1 },
          { name: 'Jessie Jake', email: 'amolo@gmail.com', id: 2 },
          { name: 'Jhonie Jane', email: 'mx12@gmail.com', id: 3 },
      ],
    }
  },
  methods: {
      async deleteuser(id) {
          this.users = this.users.filter(item => item.id !== id)
      }
  },
}
</script>

<style>

</style>