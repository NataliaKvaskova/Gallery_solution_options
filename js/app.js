let countSet = 2;
let countPhotoSet = 13;
let setPhoto = [];
for(let i = 0; i < countPhotoSet; i++){
  setPhoto.push(`${i + 1}.jpg`)
}
let main = document.querySelector('main');

for (i = 0; i < countSet; i++){
  let div = document.createElement ('div');
  main.append(div);
    setPhoto.forEach ((photo, index) =>{
      let strPhotoCard = `
        <div class = "setPhoto__Photo" style="background-image: url('img/${setPhoto[index]}');"></div>
        `
        div.insertAdjacentHTML("beforeend", strPhotoCard);
    })
}




