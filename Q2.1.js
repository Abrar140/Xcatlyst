mostFrequentTask(["A", "B", "A", "C", "A", "B"]);

function mostFrequentTask(tasks) {
    let map = new Map();
    for (let i = 0; i < tasks.length; i++) {
        if (map.has(tasks[i])) {
            map.set(tasks[i], map.get(tasks[i]) + 1);
        } else {
            map.set(tasks[i], 1);
        }
    }
    let max = 0;
    let task = "";
    map.forEach((value, key) => {
        if (value > max) {
            max = value;
            task = key;
        }
    });
    return task;
}