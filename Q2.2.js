const tasks = {
    A: ["B"],
    B: ["C"],
    C: ["A"]
  };
  
  const visited = new Set();
  
  function dfs(task) {
    if (visited.has(task)) return false;
    visited.add(task);
  
    for (let next of tasks[task]) {
      if (dfs(next)) return true;
    }
  
    return false;
  }