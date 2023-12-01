let todos = [
    { id: 1, name: '123466888' },
    { id: 1, name: '555' },
];
const delay = () => new Promise<void>((res) => setTimeout(() => res(), 800));

export async function getTodos() {
    // await delay();
    const res = await fetch(`http://106.12.154.161/images/json/dummy-backend.json`, {
        // cache: 'no-store',
        next: { revalidate: 10 },
    });
    const data: { data: any[] } = await res.json();
    console.log('222', data.data);
    return data.data;
}

export async function addTodo(todo: any) {
    // await delay();
    // if (Math.random() < 0.5) throw new Error("Failed to add new item!");
    const result = await getTodos();
    todos = [...result, todo];
    console.log('123', todos);
    return todos;
}
