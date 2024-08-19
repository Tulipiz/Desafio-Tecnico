Vue.component("header-page", {
  props: ["title"],
  template: `<h2>{{ title }}</h2>`,
});

Vue.component("task-list", {
  props: ["tasks"],
  template: `
    <div>
      <ul v-if="tasks.length">
        <li 
          v-for="(item, index) in tasks" 
          :key="index" 
          :class="{ 
            strikeout: item.status, 
            color: item.status 
          }"
        >
          <input 
            type="checkbox" 
            v-model="item.status"
          >
          {{ firstUpperCase(item.nome) }}
        </li>
      </ul>
      <p v-else>{{ tasks.length ? '' : 'Nenhum registro encontrado.' }}</p>
    </div>

  `,
  methods: {
    firstUpperCase(task) {
      if (!task) return "";
      return task.charAt(0).toUpperCase() + task.slice(1);
    },
  },
});

Vue.component("input-task", {
  data() {
    return {
      newItem: "",
      errorMessage: "",
    };
  },
  template: `
     <div>
      <div class="input-wrapper">
          <input 
            type="text" 
            v-model="newItem" 
            placeholder="Adicione uma nova tarefa"
            @keyup.enter="addTask"
            
          />
          <button @click="addTask">Add</button>
          <transition name="fade" class="message">0,
            <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
          </transition>
        </div>
    </div>
  `,
  methods: {
    addTask() {
      if (this.newItem !== "") {
        this.$emit("task-added", this.newItem);
        return (this.newItem = "");
      }
      this.errorMessage = "Digite algo antes de adicionar uma tarefa.";
      setTimeout(() => {
        this.errorMessage = "";
      }, 3000);
    },
  },
});
Vue.component("filter-status", {
  data() {
    return {
      selected: "Select",
      items: ["Select", "Concluida", "Pendente"],
    };
  },
  template: `
    <div>
      <select v-model="selected" @change="emitFilter" class="custom-select">
        <option disabled value="">Please select one</option>
        <option v-for="(item, index) in items" :key="index" :value="item">
          {{ item }}
        </option>
      </select>
    </div>
  `,
  methods: {
    emitFilter() {
      this.$emit("filter-changed", this.selected);
    },
  },
});

new Vue({
  el: "#app",
  data() {
    return {
      tasks: [],
      filter: "Select",
    };
  },
  computed: {
    filteredTasks() {
      if (this.filter === "Concluida") {
        return this.tasks.filter((task) => task.status);
      } else if (this.filter === "Pendente") {
        return this.tasks.filter((task) => !task.status);
      } else {
        return this.tasks;
      }
    },
  },
  methods: {
    handleTaskAdded(newTask) {
      this.tasks.push({ nome: newTask, status: false });
    },
    handleFilterChange(newFilter) {
      this.filter = newFilter;
    },
  },
});
