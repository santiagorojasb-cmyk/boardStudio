const SPACE = "3huqn7he4shw";
const TOKEN = "OYK0ds7HZwtY0mMUApH1ueg_jgGFWZlYEOQFYDeQ1i8";
const TIPO = "boardStudioParcial3";
const url = "https://cdn.contentful.com/spaces/" + SPACE
+ "/environments/master/entries?content_type=" + TIPO
+ "&limit=1&access_token=" + TOKEN;
fetch(url)
.then(res => res.json())
.then(data => {
if (!data.items || data.items.length === 0) return;
const app = data.items[0].fields;

 const assets = data.includes?.Asset || [];

   

    const obtenerUrlImagen = (campoImagen) => {
      if (!campoImagen) return null;
      const assetEncontrado = assets.find(a => a.sys.id === campoImagen.sys.id);
      return assetEncontrado ? "https:" + assetEncontrado.fields.file.url : null;
    };
   
document.querySelector("h1").textContent = app.nombreWeb;

document.querySelector(".header-p p").textContent = app.introduccion;

document.querySelector("main p").textContent = app.descripcion;

const enlaces = document.querySelectorAll(".div_a a");
    if (app.url1 && enlaces[0]) enlaces[0].href = app.url1;
    if (app.url2 && enlaces[1]) enlaces[1].href = app.url2;
    if (app.url3 && enlaces[2]) enlaces[2].href = app.url3;

document.querySelector(".div_ul ul").innerHTML =
app.funciones.map(f => `<li class="function_item">${f}</li>`).join("");

const imgsGaleria = document.querySelectorAll(".section_galery img");
    const img1 = obtenerUrlImagen(app.imagen1);
    const img2 = obtenerUrlImagen(app.imagen2);
    const img3 = obtenerUrlImagen(app.imagen3);

    if (img1 && imgsGaleria[0]) imgsGaleria[0].src = img1;
    if (img2 && imgsGaleria[1]) imgsGaleria[1].src = img2;
    if (img3 && imgsGaleria[2]) imgsGaleria[2].src = img3;
});
