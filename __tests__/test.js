const todoList = require('..');
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

const formattedDate = (d) => d.toISOString().split("T")[0];

const dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(new Date(dateToday.setDate(dateToday.getDate() - 1)));
const tomorrow = formattedDate(new Date(dateToday.setDate(dateToday.getDate() + 2)));


describe("Todolist Test Suite", () => {
    beforeAll(() => {
        add({
            title: "Test todo",
            completed: false,
            dueDate: today,
        });
    });

    test("Should add new todo", () => {
        const initialItemsCount = all.length;
        add({
            title: "Test todo",
            completed: false,
            dueDate: today,
        });
        expect(all.length).toBe(initialItemsCount + 1);
    });

    test("Should mark a todo as complete", () => {
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    });

    test("Should check overdue works", () => {
        const overdueItems = overdue(yesterday);
        expect(overdueItems.length).toBe(0);
    });

    test("Should check due today works", () => {
        const dueTodayItems = dueToday(today);
        expect(dueTodayItems.length).toBe(2); 
    });

    test("Should check due later works", () => {
       
        const dueLaterItems = dueLater(tomorrow);
        expect(dueLaterItems.length).toBe(0);
    });
});