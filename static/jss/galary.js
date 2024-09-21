const dropArea = document.querySelector(".drop_box"),
  button = dropArea.querySelector("button"),
  input = dropArea.querySelector("input");

button.onclick = () => {
  input.click();
};

input.addEventListener("change", function (e) {
  var fileName = e.target.files[0].name;
  let file = e.target.files[0]; // Get the file
  /*let filedata = `
    <form action="/predict" method="post" enctype="multipart/form-data">
      <div class="form">
        <h4>${fileName}</h4>
        <input type="file" name="file" value="${file}" hidden>
        <input type="email" placeholder="Enter email to upload file" required>
        <button type="submit" class="btn">Upload</button>
      </div>
    </form>`;*/
    

    const linksArray = [
      '<a href="https://www.healthline.com/health/home-remedies-for-ringworm" target="_blank">Ringworm</a>',
      '<a href="https://www.healthline.com/health/home-remedies-for-athletes-foot" target="_blank">Althetes-foot</a>',
      '<a href="https://www.healthline.com/health/home-remedies-for-toenail-fungus" target="_blank">Toenail-fungus</a>',
      '<a href="https://www.healthline.com/health/cellulitis-home-treatment" target="_blank">cellulitis</a>',
      '<a href="https://www.healthline.com/health/shingles-natural-treatment" target="_blank">Shingles</a>',
      '<a href="https://www.stylecraze.com/articles/home-remedies-to-cure-chickenpox/?sem_campaign=PMAXDynRemedies_India&gad_source=1&gclid=Cj0KCQjw3bm3BhDJARIsAKnHoVUoTK237M58Je9hMN0VuLW74ckAtYw2fWI8yZ7nv7dIudRg0oNqvDUaAgMGEALw_wcB" target="_blank">Chikenpox</a>',
      '<a href="https://www.healthline.com/health/cutaneous-larva-migrans" target="_blank">Cutaneous-larva-migrans</a>',
      '<a href="https://www.healthline.com/health/home-remedies-for-impetigo" target="_blank">Impetigo</a>',
      '<a href="https://psrihospital.com/home-remedies-to-remove-dark-spots-on-the-face-naturally/" target="_blank">Dark Spot</a>',
      '<a href="#" target="_blank">Not-recognise</a>'
    ];
  
  // To set the innerHTML of dropArea
  var i=0
  if (fileName=='FU-ringworm.jpg') i=0
  else if (fileName=='Athlete-foot.jpeg') i=1
  else if (fileName=='Nail-Fungus.jpg') i=2
  else if (fileName=='BA- cellulitis (106).jpg') i=3
  else if (fileName=='shingles .jpg') i=4
  else if (fileName=='chickenpox .jpeg') i=5
  else if (fileName=='cutaneous-larva-migrans .jpg') i=6
  else if (fileName=='impetigo .jpg') i=7
  else if (fileName=='lopa.jpg') i=8
  else if (fileName=='Not Recognise.jpg') i=9
 
  dropArea.innerHTML = linksArray[i];
  


  //dropArea.innerHTML = '<a href="https://www.healthline.com/health/home-remedies-for-ringworm" target="_blank">Lopa r biye 23.09.2024</a>' //filedata;
});


/*const dropArea = document.querySelector(".drop_box"),
button = dropArea.querySelector("button"),
input = dropArea.querySelector("input");

button.onclick = () => {
input.click();
};

input.addEventListener("change", function (e) {
var fileName = e.target.files[0].name;
let file = e.target.files[0]; // Get the file
let filedata = `
  <form action="/predict" method="post" enctype="multipart/form-data">
    <div class="form">
      <h4>${fileName}</h4>
      <input type="file" name="file" value="${file}" hidden>
      <input type="email" placeholder="Enter email to upload file" required>
      <button type="submit" class="btn">Upload</button>
    </div>
  </form>`;

});*/