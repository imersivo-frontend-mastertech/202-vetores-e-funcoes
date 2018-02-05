let ocultarImagens = (seletor) =>{


    let imagens = document.querySelectorAll(seletor);

    for (let imagem of imagens){
        console.log(imagem);
        imagem.style.height = '400px';
        imagem.style.opacity = 0.5;
    }
}
