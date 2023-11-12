let countSet = 2;
let countPhotoSet = 13;
let setPhoto = [];
for(let i = 0; i < countPhotoSet; i++){
  setPhoto.push(`${i + 1}.jpg`)
}
let main = document.querySelector('main');

for (i = 0; i < countSet; i++){
  let h = document.createElement ('h3');
  h.classList.add(`h-${i+1}`);
  h.textContent = "zagolovok"
  main.append(h);
  let wrapper = document.createElement ('div');
  wrapper.classList.add("wrapper");
  main.append(wrapper);
  let div = document.createElement ('div');
  div.classList.add("setPhoto", `set-${i+1}`);
  wrapper.append(div);
    setPhoto.forEach ((photo) =>{
      let strPhotoCard = `
        <div class = "setPhoto__Photo" tabindex = "1" style="background-image: url('img/${photo}');"></div>
        `
        div.insertAdjacentHTML("beforeend", strPhotoCard);
    })
}

document.querySelector(".h-1").textContent = "Вариант - 1. Карусель фотографий с анимацией при наведении курсора мыши.";
document.querySelector(".h-2").textContent = "Вариант - 2. Карусель фотографий с анимацией волны при движении курсора мыши и нажатии на фото.";


