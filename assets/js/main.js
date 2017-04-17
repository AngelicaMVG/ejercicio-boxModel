var imagenes = document.getElementsByClassName('imagenes');

for(var i = 0; i < imagenes.length; i++){
  imagenes[i].addEventListener('click', function(){mostrarImg(this)});

};

function mostrarImg(img){

  img.style.transform = "scale(3)";
  img.style.padding = "3px";
  img.style.borderWidth = '10% 10%';
  img.style.borderHeight = '10% 10%';
  img.style.borderStyle= "solid";
  img.style.borderColor = 'grey';
};

// function mostrarImg(img){
//
//   img.style.transform = "scale(3)";
//   img.style.padding = "3px";
//   img.style.borderWidth = 10% 10%;
//   img.style.borderHeight = 10% 10%;
//   img.style.display = "block";
//   img.style.background =
//
// }
