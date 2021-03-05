export let message

function someExpensiveAction() {
    let i = 0
    while (i < 3000000000) {
        i++
    }
    message = 'Hi, I am a module loaded dynamically'
}

someExpensiveAction()

console.log('module execution completed');
