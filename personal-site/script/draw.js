let lastyear = 2023;

document.querySelector("#year").textContent = lastyear;


//let card_img = document.querySelectorAll(".card-img");
//let modal = document.querySelector(".modal");
//let modalImg = document.querySelector(".modal-content");
//let captionText = document.querySelector(".caption-class");
        
//        for (let i = 0; i < card_img.length; i++) {
//            let src_img = card_img[i].attributes[1].nodeValue;
//            card_img[i].onclick = function () {
//                modal.style.display = "block";
//                modalImg.src = src_img;
//                captionText.innerHTML = this.alt;
//            }
//            let span = document.getElementsByClassName("close")[0];
//            span.onclick = function () {
//                modal.style.display = "none";
//            }
//        }



const output = (dibujos) => {
    dibujos.forEach((dibujo) => {
      let article = document.createElement("article");
  
      let nameDraw = document.createElement("h3");
      nameDraw.textContent = dibujo.nameDraw;
  
      let location = document.createElement("h4");
      location.textContent = dibujo.location;
  
      let yearCreate = document.createElement("h4");
      yearCreate.textContent = dibujo.yearCreate;
  
      let img = document.createElement("img");
      img.setAttribute("src", dibujo.imageUrl);
      img.setAttribute("alt", dibujo.nameDraw);
  
      article.appendChild(nameDraw);
      article.appendChild(location);
      article.appendChild(yearCreate);
      article.appendChild(img,);
  
      document.querySelector("#dibujos").appendChild(article);
    });
  };


const getDibujos = async () => {
    const url ="https://draw-b7737-default-rtdb.firebaseio.com/.json"
    const response = await fetch(url);
    if (response.ok){
        console.log('okey');
        dibujoList = await response.json();
        output(dibujoList);
    }
    
};
getDibujos();

const reset = () => {
    document.querySelector("#dibujos").innerHTML = "";
  };




const sortBy = () => {
    reset();
  
    let filter = document.querySelector("#sortBy").value;
  
    switch (filter) {
      case "drawNameAscending":
        output(
          dibujoList.sort((draw1, draw2) => {
            let drawName1 = draw1.nameDraw.toLowerCase();
            let drawName2 = draw2.nameDraw.toLowerCase();
            if (drawName1 < drawName2) return -1;
            else if (drawName1 > drawName2) return 1;
            else return 0;
          })
        );
        break;
      case "drawNameDescending":
        output(
          dibujoList.sort((draw1, draw2) => {
            let drawName1 = draw1.nameDraw.toLowerCase();
            let drawName2 = draw2.nameDraw.toLowerCase();
            if (drawName1 > drawName2) return -1;
            else if (drawName1 < drawName2) return 1;
            else return 0;
          })
        );
        break;
      default:
        // using ternary operators
        output(
          dibujoListt.sort((draw1, draw2) =>
            draw1.nameDraw.toLowerCase() > draw2.nameDraw.toLowerCase()
              ? 1
              : draw2.nameDraw.toLowerCase() >
                draw1.nameDraw.toLowerCase()
              ? -1
              : 0
          )
        );
        break;
    }
  };

document.querySelector("#sortBy").addEventListener("change", sortBy);
