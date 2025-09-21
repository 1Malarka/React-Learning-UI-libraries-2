export const createTodo = (set, get) => ({
     todos: [],
     filter: "All",
     setFilter: (f) => set({filter: f}),  // filter (omg)
     
     addTodo: (text) => 
      set((state) => ({
        todos: [...state.todos, {id: Date.now(), text, completed: false}]
      })),
    removeTodo: (id) =>
      set((state) => ({
        todos: state.todos.filter((t) => t.id !== id)
      })),
    toggleTodo: (id) =>
      set((state) => ({
        todos: state.todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      ),
}))})

export const createCounter = (set) => ({
     count: 0,
     increase: () => set((state) => ({ count: state.count + 1 })),
     decrease: () => set((state) => ({ count: state.count - 1 })),
     reset: () => set(() => ({ count: 0 })),
})

export const jokeCreater = (set, get) => ({
    loading: false,
    error: null,
    data: null,
    
    fetch: async () => {
      set({ loading: true, error: null });
      try {
        const res = await fetch("https://v2.jokeapi.dev/joke/Any");
        const data = await res.json();
        set({
          loading: false,
          error: null,
          data: data,
        });
      } catch (err) {
        set({ loading: false, error: "failed to fetch data" })
      }
    }
})