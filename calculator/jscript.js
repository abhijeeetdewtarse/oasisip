let screen = document.getElementById("input");

// for all numeric buttons
for (let i = 0; i < 11; i++) {
    document.querySelectorAll(".numeric_button")[i].addEventListener("click", (event) => {
        screen.value += event.target.innerText;
    });
}

// for arithmetic operators such as +, -, *, /
for (let i = 0; i < 4; i++) {
    document
        .querySelectorAll(".arithmetic_button")
    [i].addEventListener("click", (event) => {
        screen.value += event.target.innerText;
    });
}

document.getElementById(".").addEventListener("click", () => {
    screen.value += ".";
});

document.getElementById("C").addEventListener("click", () => {
    screen.value = "";
});

document.getElementById("back_space").addEventListener("click", () => {
    screen.value = screen.value.slice(0, screen.value.length - 1);
});

document.getElementById("=").addEventListener("click", () => {
    onEqualClickHandler();
});

const onEqualClickHandler = () => {
    let count = 0;

    for (let i = 0; i < screen.value.length; i++) {
        if (
            screen.value[i] === "+" ||
            screen.value[i] === "-" ||
            screen.value[i] === "*" ||
            screen.value[i] === "/" ||
            screen.value[i] === "."
        ) {
            count++;
            if (count > 1) {
                screen.value = "Syntax Error";
                count = 0;
                return;
            }
        } else {
            count = 0;
        }
    }
    try {
        screen.value = eval(screen.value);
    } catch (err) {
        if (err.message === "Unexpected end of input") {
            screen.value = "Syntax Error";
            return;
        }
    }
};

document.getElementById("sq").addEventListener("click", () => {
    let count = 0;

    for (let i = 0; i < screen.value.length; i++) {
        if (
            screen.value[i] === "+" ||
            screen.value[i] === "-" ||
            screen.value[i] === "*" ||
            screen.value[i] === "/" ||
            screen.value[i] === "."
        ) {
            count++;
            if (count > 1) {
                screen.value = "Syntax Error";
                count = 0;
                return;
            }
        } else {
            count = 0;
        }
    }
    try {
        screen.value = Math.pow(eval(screen.value), 2);
    } catch (err) {
        if (err.message === "Unexpected end of input") {
            screen.value = "Syntax Error";
            return;
        }
    }
});

// to detect key presses

document.addEventListener("keydown", (event) => {
    onClickHandler(event.key);
});

const onClickHandler = (key) => {
    switch (key) {
        case "1": {
            screen.value += 1;
            return;
        }
        case "2": {
            screen.value += 2;
            return;
        }
        case "3": {
            screen.value += 3;
            return;
        }
        case "4": {
            screen.value += 4;
            return;
        }
        case "5": {
            screen.value += 5;
            return;
        }
        case "6": {
            screen.value += 6;
            return;
        }
        case "7": {
            screen.value += 7;
            return;
        }
        case "8": {
            screen.value += 8;
            return;
        }
        case "9": {
            screen.value += 9;
            return;
        }
        case "0": {
            screen.value += 0;
            return;
        }
        case "+": {
            screen.value += "+";
            return;
        }
        case "-": {
            screen.value += "-";
            return;
        }
        case "*": {
            screen.value += "*";
            return;
        }
        case "/": {
            screen.value += "/";
            return;
        }
        case ".": {
            screen.value += ".";
            return;
        }
        case "=":
        case "Enter": {
            onEqualClickHandler();
            return;
        }
        case "Delete":
        case "Backspace": {
            screen.value = screen.value.slice(0, screen.value.length - 1);
            return;
        }
        case "C":
        case "c": {
            screen.value = "";
            return;
        }
        case "S":
        case "s": {
            let count = 0;

            for (let i = 0; i < screen.value.length; i++) {
                if (
                    screen.value[i] === "+" ||
                    screen.value[i] === "-" ||
                    screen.value[i] === "*" ||
                    screen.value[i] === "/" ||
                    screen.value[i] === "."
                ) {
                    count++;
                    if (count > 1) {
                        screen.value = "Syntax Error";
                        count = 0;
                        return;
                    }
                } else {
                    count = 0;
                }
            }
            try {
                screen.value = Math.pow(eval(screen.value), 2);
            } catch (err) {
                if (err.message === "Faulty Input") {
                    screen.value = "Syntax Error";
                    return;
                }
            }
        }
        default:
    }
};