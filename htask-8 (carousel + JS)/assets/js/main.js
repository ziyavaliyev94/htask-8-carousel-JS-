let carousel = document.querySelector(".carousel");
let next = document.getElementById("next");
let prev = document.getElementById("prev");


let data = [
    {
        img: "https://avatars.mds.yandex.net/get-shedevrum/11477113/9c532ac9e78911eea6a8ba0d8cad0506/orig"
    },
    {
        img: "https://masterpiecer-images.s3.yandex.net/0d073ca35aa211eeb176cef0812af5c0:upscaled"
    },
    {
        img: "https://scontent.fgyd20-2.fna.fbcdn.net/v/t1.6435-9/129724225_3594078030647815_1872112308865067728_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=3gcysvuYC5sQ7kNvgFv8mzs&_nc_zt=23&_nc_ht=scontent.fgyd20-2.fna&_nc_gid=ADecWUCXNtuAuedUn-l550U&oh=00_AYDi1KmjDku8HD5hpOMPA7pqfDYcSPV5TXmp0UEGayKgEw&oe=678225B2"
    },
    {
        img: "https://airride.co.uk/wp-content/uploads/Kits-Cars/TA-Technix/Opel-Vauxhall/Vauxhall-Astra-H-Edited.jpg.webp"
    }
]

let firsElement = 0;
const lastElement = 3;

function visible(index) {
    carousel.innerHTML = ""
    for (let i = 0; i < lastElement; i++) {
        let itemIndex = (index + i) % data.length;
        carousel.innerHTML += `
        <div class="carousel-item">
            <img src="${data[itemIndex].img}" alt="">
        </div>
        `
    }
}
visible(firsElement)

next.addEventListener("click", () => {
    firsElement = (firsElement + 1) % data.length;
    visible(firsElement)
    console.log(firsElement);


})

prev.addEventListener("click", () => {
    firsElement = (firsElement - 1 + data.length) % data.length;
    visible(firsElement)
    console.log(firsElement);
})

setInterval(() => {
    firsElement = (firsElement + 1) % data.length;
    visible(firsElement)
}, 2000)

const opelText = document.querySelector('.Opel');

