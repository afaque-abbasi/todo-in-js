let todos = [];
let userPrompt = "Enter a to-do (or type 'done' to finish):";

while (true) {
    let todo = prompt(userPrompt);
    
    // Check if the user wants to stop
    if (todo.toLowerCase() === 'done') {
        break;
    }
    
    // Validate input to prevent empty to-dos
    if (todo.trim()) {
        todos.push(todo);
    } else {
        alert("To-do cannot be empty. Please enter a valid task.");
    }
}

// Display the final list of to-dos
console.log("Your to-do list:", todos);
