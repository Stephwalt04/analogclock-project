var hour = 0;
var minute = 0;
var second = 0;
var d = new Date();

setInterval(
    function () {
        d = new Date();
        second = d.getSeconds() * 6;
        minute = d.getMinutes() * 6;
        hour = d.getHours() * 30 + Math.round(minute / 12);
        document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)";
        document.getElementById("minute-hand").style.transform = "rotate(" + minute + "deg)";
        document.getElementById("hour-hand").style.transform = "rotate(" + hour + "deg)";
    }, 1000
);

// function changeBackgroundColor() {
//     const bgColorInput = document.getElementById("bgColor");
//     const clock = document.querySelector(".clock");
//     clock.style.backgroundColor = bgColorInput.value;
// }
// const bgColorInput = document.getElementById("bgColor");
// bgColorInput.addEventListener("change", changeBackgroundColor);


let changeColor = function () {

}
// const colors = ["#000080", "#00008B", "#0000CD", "#0000FF", "#006400","#ff0000",
//     "#008000", "#008080", "#008B8B", "#00BFFF", "#00CED1", "#00FA9A", "#00FF00", "#00FF7F",
//     "#00FFFF", "#00FFFF", "#191970", "#1E90FF", "#20B2AA", "#228B22", "#2E8B57", "#2F4F4F", "#2F4F4F", "#32CD32", "#3CB371",
//     "#40E0D0", "#4169E1", "#4682B4", "#483D8B", "#48D1CC", "#4B0082", "#556B2F", "#5F9EA0", "#6495ED", "#663399", "#66CDAA",
//     "#696969", "#696969", "#6A5ACD", "#6B8E23", "#708090", "#708090", "#778899", "#778899", "#7B68EE", "#7CFC00", "#7FFF00",
//     "#7FFFD4", "#800000", "#800080", "#808000", "#808080", "#808080", "#87CEEB", "#87CEFA", "#8A2BE2", "#8B0000", "#8B008B",
//     "#8B4513", "#8FBC8F", "#90EE90", "#9370DB", "#9400D3", "#98FB98", "#9932CC", "#9ACD32", "#A0522D", "#A52A2A", "#A9A9A9",
//     "#A9A9A9", "#ADD8E6", "#ADFF2F", "#AFEEEE", "#B0C4DE", "#B0E0E6", "#B22222", "#B8860B", "#BA55D3", "#BC8F8F", "#BDB76B",
//     "#C0C0C0", "#C71585", "#CD5C5C", "#CD853F", "#D2691E", "#D2B48C", "#D3D3D3", "#D3D3D3", "#D8BFD8", "#DA70D6", "#DAA520",
//     "#DB7093", "#DC143C", "#DCDCDC", "#DDA0DD", "#DEB887", "#E0FFFF", "#E6E6FA", "#E9967A", "#EE82EE", "#EEE8AA", "#F08080",
//     "#F0E68C", "#F0F8FF", "#F0FFF0", "#F0FFFF", "#F4A460", "#F5DEB3", "#F5F5DC", "#F5F5F5", "#F5FFFA", "#F8F8FF", "#FA8072",
//     "#FAEBD7", "#FAF0E6", "#FAFAD2", "#FDF5E6", "#FF0000", "#FF00FF", "#FF00FF", "#FF1493", "#FF4500", "#FF6347", "#FF69B4",
//     "#FFEBCD", "#FFEFD5", "#FFF0F5", "#FFF5EE", "#FFF8DC", "#FFFACD", "#FFFAF0", "#FFFAFA", "#FFFF00", "#FFFFE0", "#FFFFF0", "#FFFFFF"];

const btn = document.getElementById("btn");
const color = document.querySelector('.pick');

btn.addEventListener("click", () => {
    //     const randomNumber = getRandomNumber();
    //     document.body.style.backgroundColor =
    //         color.textContent = colors[randomNumber];
    const colorIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
    let mainCode = ''
    for (let i = 0; i < 6; i++) {
        const random =  Math.floor(Math.random() * colorIndex.length);
        mainCode += colorIndex[random]
    }
    document.body.style.backgroundColor = "#"+mainCode
    document.querySelector(".pick").textContent = "#"+mainCode
    console.log(colorIndex)

// function getRandomNumber() {
//     return Math.floor(Math.random() * colors.length);
// }
})