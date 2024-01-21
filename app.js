document.querySelector("body").style.backgroundColor = "#ff1d58";
let h1 = document.querySelector("h1");
h1.style.color = "#ff6600";
function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            let num = Math.floor(Math.random() * 10) + 1;
            if(num < 3) {
                reject("Promise rejected");
            }
            h1.style.color = color;
            console.log(`color changed to ${color}`);
            resolve("color changed!");
        }, delay);
    });
}
async function newColor() {
    try {
        await changeColor("#ff660", 1000);
        await changeColor("white", 1000);
        await changeColor("#1c1ca5", 1000);
        await changeColor("white", 1000);
        await changeColor("#046434", 1000);
    } catch(err) {
        console.log("error occured.");
        console.log(err);
    }
    let a = 5;
    console.log(a+2);
    console.log(a+3);
}
newColor();
function getnum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        let num = Math.floor(Math.random() * 10) + 1;
        console.log(num);
        resolve(num);
    }, 1000);
    });
}
async function demo() {
    const num1 = await getnum();
    const num2 = await getnum();
    const num3 = await getnum();
    const num4 = await getnum();
    const num5 = await getnum();
    console.log("Generated numbers: ", num1, num2, num3, num4, num5);
}
demo();
