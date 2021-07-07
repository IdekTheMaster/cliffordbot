module.exports = {
    commands: ['divide', 'division'],
    expectedArgs: '<num1> <num2>',
    permissionError: 'You need more perms for this!!!',
    minArgs: 2,
    maxArgs: 2,
    callback: (message, arguments, text) => {
        const num1 = +arguments[0]
        const num2 = +arguments[1]

        message.reply(`The answer is ${num1 / num2}`)
    },
    permissions: [],
    requiredRoles: []
}