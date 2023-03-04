//Eventlistener per al scroll
window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);

//Aquesta part m'ha sigut una mica dificil d'entendre...
//El listener de DOMContentLoaded s'ha hagut de ficar perquè em deia que pare era null
document.addEventListener('DOMContentLoaded', () => {
const pare = document.querySelector(".pare");
const quadresard = document.querySelector(".quadresard");
const sard = document.querySelector(".quadresard img");


pare.addEventListener('mousemove', (e) => {
  //Quan es fa moviment amb el ratolí, es canvia la posició del div de la imatge per donar un efecte de paralaxi
  const x = e.clientX / window.innerWidth - 0.5; 
  const y = e.clientY / window.innerHeight - 0.5; 

  //Quan fem moviment amb el ratolí, es fa un rotació t<nt en eix de les x com de les y 
  quadresard.style.transform = `rotateY(${x * 80}deg) rotateX(${-y * 80}deg)`;
});

//Quan el ratolí surt del quadre, es reseteja a la seva rotació inicial
pare.addEventListener('mouseleave', () => {
  quadresard.style.transform = 'rotateY(0) rotateX(0)'; 
});
//Això no ho acabo d'entendre
sard.addEventListener('load', () => {
  pare.style.height = `${quadresard.offsetHeight}px`; 
});
});



//Les funcions constantinoble i transilvania fan que es canvii la imatge de la bandera durant 2,1 segons i la bandera faci un gir de 360º. 
//Les ficarem a onmouseover al html, per a que siguin detectades al fer hover
function constantinoble(){

  quadre1.classList.add('quadreanimacio');
  document.getElementById("turk").src="byzantium.jpg";

  setTimeout(function(){
      quadre1.classList.remove('quadreanimacio');
      document.getElementById("turk").src="turkey.png";
  },2100);

}

function transilvania(){
  quadre2.classList.add('quadreanimacio2');
  document.getElementById("romanian").src="hungary.png";

  setTimeout(function(){
      quadre2.classList.remove('quadreanimacio2');
      document.getElementById("romanian").src="romania.png";
  },2100);
}

