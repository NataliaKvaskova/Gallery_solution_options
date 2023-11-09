let countSet = 2;
let countPhotoSet = 13;
let setPhoto = [];
for(let i = 0; i < countPhotoSet; i++){
  setPhoto.push(`${i + 1}.jpg`)
}
let main = document.querySelector('main');

for (i = 0; i < countSet; i++){
  let wrapper = document.createElement ('div');
  wrapper.classList.add("wrapper");
  main.append(wrapper);
  let div = document.createElement ('div');
  div.classList.add("setPhoto", `set-${i+1}`);
  wrapper.append(div);
    setPhoto.forEach ((photo) =>{
      let strPhotoCard = `
        <div class = "setPhoto__Photo" style="background-image: url('img/${photo}');"></div>
        `
        div.insertAdjacentHTML("beforeend", strPhotoCard);
    })
}




