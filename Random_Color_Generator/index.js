const getColor = () => {
    //hex code
    const randomnum = Math.floor(Math.random() * 16777215);
    const randcode = "#"+randomnum.toString(16);
    document.body.style.backgroundColor = randcode;
    document.getElementById("color-code").innerText = randcode;
    document.getElementById("cpy").innerText = "Copy";
    // func(randcode);
    // const func = () => {
    //     navigator.clipboard.writeText(randcode);
    // }
    navigator.clipboard.writeText(randcode);
}

document.getElementById("btn").addEventListener(
    "click",
    getColor
)
getColor();

const func = () => {
    document.getElementById("cpy").innerText = "Copied!";
}
    // document.getElementById("cpy").addEventListener(
    //     "click",
    //     func
    // )
        