function dirReduc(arr) {
    let stack = [arr[0]]

    function func(arr) {
        if (arr.length == 0) return
        if (!cancels(stack[stack.length - 1], arr[0])) {
            stack.push(arr[0])
            func(arr.slice(1))
        } else {
            stack.pop()
            func(arr.slice(1))
        }
    }
    func(arr.slice(1))
    return stack
}

function cancels(x, y) {
    if ((x === 'WEST' && y === 'EAST') ||
        (x === 'EAST' && y === 'WEST')) return true
    else if ((x === 'NORTH' && y === 'SOUTH') ||
        (x === 'SOUTH' && y === 'NORTH')) return true
    else return false
}

console.log(
    dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), // ["WEST"]
    dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]),  // ["NORTH", "WEST", "SOUTH", "EAST"]
    dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])  //, []
)

