window.addEventListener('DOMContentLoaded', (e) => {
    ready()
})

let arr = ""
let minor_arr = ""
let option
let num1, num2

function IsFixedRequired(num) {
    let dec = parseInt((num - parseInt(num)) * 1000)
    return (dec) ? true : false;
}


function numberPressed(event) {
    let screen = document.getElementsByClassName('cal-screen')[0]
    let screen_minor = document.getElementsByClassName('cal-screen-minor')[0]
    let val = event.target.innerText
    console.log(val)
    switch (val) {
        case 'AC': { minor_arr = ""; arr = ""; break; }
        case 'C': {
            if (minor_arr.length) {
                arr = minor_arr.slice(0, minor_arr.length - 1)
                minor_arr = ""
            }
            else {
                minor_arr = "";
                if (screen.innerText === "Infinity" || screen.innerText === "NaN") arr = ""
                else arr = arr.slice(0, arr.length - 1);
            }

            break;
        }
        case '=': {
            num2 = parseFloat(arr)
            switch (option) {
                case '/': {
                    let ans = (num1 / num2);
                    arr = String(ans.toFixed(IsFixedRequired(ans) ? 4 : 0));
                    break;
                }
                case 'x': {
                    let ans = num1 * num2;
                    arr = String(ans.toFixed(IsFixedRequired(ans) ? 4 : 0));
                    break;
                }
                case '-': {
                    let ans = num1 - num2;
                    arr = String(ans.toFixed(IsFixedRequired(ans) ? 4 : 0));
                    break;
                }
                case '+': {
                    let ans = num1 + num2;
                    arr = String(ans.toFixed(IsFixedRequired(ans) ? 4 : 0));
                    break;
                }
                case '%': {
                    let ans = num1 % num2;
                    arr = String(ans.toFixed(IsFixedRequired(ans) ? 4 : 0));
                    break;
                }
            }
            break;
        }
        case 'x2': {
            num1 = parseFloat(arr)
            arr = String((num1 * num1).toPrecision(8))
            minor_arr = ""
            break;
        }
        case '/': case 'x': case '+': case '-': case '%': {
            num1 = parseFloat(arr)
            option = val
            arr = ""
            minor_arr = String(num1.toFixed(IsFixedRequired(num1) ? 4 : 0)) + String(option)
            break;
        }
        default: {
            if (event.target.className === "square") {
                num1 = parseFloat(arr)
                arr = String((num1 * num1).toPrecision(4))
            } else
                arr += event.target.innerText
            break;
        }
    }
    screen.innerText = arr
    screen_minor.innerText = minor_arr
}

function ready() {
    document.getElementsByClassName('cal-interface')[0].addEventListener('click', numberPressed);
}