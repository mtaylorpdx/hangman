var animals = [
    "dog",
    "cat",
    "fish",
    "snake",
    "giraffe",
    "mouse",
    "frog",
    "shark",
    "elephant",
    "turtle",
    "pigeon",
    "bird",
    "squirrel",
    "unicorn"
]

function randomWord() {
    return animals[Math.floor(Math.random() * animals.length)]
}

export { randomWord }