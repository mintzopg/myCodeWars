function solution(input, markers) {
    let str = input.split("\n")
    markers.forEach(mark => {
        str = str.map(item => item.split(mark)[0])
    })
    return str.join('\n')
}



var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
console.log(result)

console.log(solution("aaaa\\n#test\n# bbbb\ncccc# dddd", ['#', '!'])); // should return "aaaa\\n\n\ncccc"
console.log(solution('a#b\nc$\nd$efg', ['#', '!']))