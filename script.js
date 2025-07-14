function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

document.getElementById("btn").addEventListener("click", () => {
    const count = counter();
    document.getElementById("cnt").textContent = `Clicks-> ${count}`;
});