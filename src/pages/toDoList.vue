<template>
  <div>
    <div class="container mt-4 card p-4">



      <div class="row">
        <h4 class="py-2">My to do App</h4>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Add task" @blur="answer = ''"
                 v-model="addItem.task">
          <div class="input-group-append">
            <button class="btn btn-info" type="button" @click="addTask">Add</button>
          </div>
        </div>
        <p>{{ answer }}</p>
      </div>
      <div class="row my-2 justify-content-between">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary" @click="listItemsStatus=1">All</button>
          <button type="button" class="btn btn-secondary" @click="listItemsStatus=3">Completed</button>
          <button type="button" class="btn btn-secondary" @click="listItemsStatus=2">Active</button>
        </div>
        <div class="tab_status">   <p > {{currentFilter}}  </p>   </div>
        <button class="btn btn-success" @click="setAllComplite">Complete all tasks</button>
      </div>
      <div class="row ">
        <transition-group name="slide-fade" tag="ul" class="list-group col-12 p-0">
          <li class="list-group-item  d-flex justify-content-between" v-for="(item, index) in filterList"
              :key="index+1" :class="{'list-group-item-success': item.completed}">
            <div class="item_info">
              <span class="mr-2">{{ index + 1 }}.</span>
              <span v-if="item.completed === false"> {{ item.task }} </span>
              <span v-if="item.completed === true"> <del>{{ item.task }}  </del></span>
            </div>
            <div class="actions">
              <button class="btn-info btn mr-2" @click="taskStatus(index)">
                <span v-if="item.completed === false"> To do </span>
                <span v-if="item.completed === true"> Done</span>
              </button>
              <button class="btn-danger btn" @click="removeTask(index)">Remove</button>
            </div>
          </li>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "toDoList",
  data() {

    return {
      show: true,
      answer: '',
      addItem: {
        "completed": false,
        task: ''
      },
      todolist: [],
      listItemsStatus : 1,
      currentFilter : 'All',

    }
  },
  methods: {
    addTask: function () {
      if (this.addItem.task !== '') {
        this.todolist.push({
          completed: this.addItem.completed,
          task: this.addItem.task
        })
        this.addItem.task = ''
      } else {
        alert('Task is empty')
      }
    },
    removeTask: function (index) {
      this.todolist.splice(index, 1)
    },
    taskStatus: function (index) {

      if (this.todolist[index].completed === true) {
        this.todolist[index].completed = false;
      } else {
        this.todolist[index].completed = true;
      }
      localStorage.setItem("todos", JSON.stringify(this.todolist));

    },
    setAllComplite: function () {
      this.todolist.forEach(function (todo) {
        todo.completed = true
      });

    },
  },
  mounted() {
    if (localStorage.getItem('todos')) {
      this.todolist = JSON.parse(localStorage.getItem('todos'))
    }

  },
  computed: {
    completed() {
      return this.todolist.map(item => item.completed)
    },
    filterList:function() {
      if (this.listItemsStatus === 2) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.currentFilter = 'Active'
        return this.todolist.filter(item => !item.completed)
      } else if (this.listItemsStatus === 3) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.currentFilter = 'Completed'
        return this.todolist.filter(item => item.completed)
      } else {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.currentFilter = 'All'
        return this.todolist
      }
    },


  },

  watch: {
    'addItem.task': function () {
      if (this.addItem.task === '') {
        this.answer = ''
      } else {
        this.answer = 'writing...'
      }
    },
    todolist: function () {
      localStorage.setItem("todos", JSON.stringify(this.todolist));
    },
    completed() {
      localStorage.setItem("todos", JSON.stringify(this.todolist));
    },
  },
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .4s ease;
}

.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active до версии 2.1.8 */
{
  transform: translateX(10px);
  opacity: 0;
}

</style>