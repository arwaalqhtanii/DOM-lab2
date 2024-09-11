let eItem = document.getElementsByClassName("item")[0]
setInterval(() => {
   

    let width = Math.random() * 100; 
    eItem.style.width = `${width}px`
    let height = Math.random() * 100; 
    eItem.style.height = `${height}px`
    
    eItem.style.transform = `translate(${width}px, ${height}px)`;
    let left = Math.random() * 200; 
   eItem.style.width = `${left}px`
    let right = Math.random() * 200; 
    eItem.style.right = `${right}px`
    
    let color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    eItem.style.backgroundColor = color;


},
 2000);
/*
 let item = document.getElementById('item');

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(15)}`;
}
function eItem() {
    let a = Math.random() * (innerWidth - 100);
    const b = Math.random() * (innerHeight - 100); 
    item.style.transform = `translate(${a}px, ${b}px)`;

    item.style.backgroundColor = getRandomColor();
    item.style.opacity = Math.random();
}
setInterval(eItem, 2000);
*/