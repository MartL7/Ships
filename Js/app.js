fetch('personas.json')
    .then(response => response.json())
    .then(data => {
        const select = document.getElementById('Persona1');
        const select2 = document.getElementById('Persona2');
        console.log(data);

        data.forEach(element => {
            const option = document.createElement('option');
            
            option.value = element.Nombre;
            option.text = element.Nombre;

            select.appendChild(option);
            select2.appendChild(option.cloneNode(true));
        });
    });

function Ship() {
    const select = document.getElementById('Persona1').value.toLowerCase();
    const select2 = document.getElementById('Persona2').value.toLowerCase();
    const p = document.getElementById('TextoShip');
    const Corazon = document.getElementById('Corazonimg');
    const DivImg = document.querySelector('.Con-img');
    
    if(select === select2) {
        Swal.fire({
            title: "Error",
            text: "No puedes poner nombres iguales",
            icon: "warning",
            confirmButtonText: "Regresar",
            footer: "Recuerda poner Nombres diferentes",
            allowOutsideClick: false,
            customClass: {
                popup: "Contenedor-Alerta"
            }
        });
        p.innerHTML = "";
        DivImg.style.display = "none";

    } else {

        DivImg.style.display = "flex";
        let Porcentaje = PorcentajeRandom(2);

        if (
            (Nada[select] === "Nombre1" && Nada[select2] === "Nombre2") ||
            (Nada[select] === "Nombre3" && Nada[select2] === "Nombre4") ||
            (Nada[select] === "Nombre2" && Nada[select2] === "Nombre1") ||
            (Nada[select] === "Nombre4" && Nada[select2] === "Nombre3") ||
            (Nada[select] === "Nombre5" && Nada[select2] === "Nombre2") ||
            (Nada[select] === "Nombre2" && Nada[select2] === "Nombre5") ||
            (Nada[select] === "Nombre6" && Nada[select2] === "Nombre3") || 
            (Nada[select] === "Nombre3" && Nada[select2] === "Nombre6")
        ) {
            Porcentaje = PorcentajeRandom(1);
            Corazon.src = (Porcentaje > 50 && Porcentaje < 100) ? "https://i.gifer.com/Vh2.gif" : (Porcentaje === 100) ? "https://usagif.com/wp-content/uploads/gif/heart-eyes-16.gif" : Corazon.src;
            
            p.innerHTML = "El ship de " + select + " Con " + select2 + " Es de <br> <br>" 
            + Porcentaje + "%";
        } else {
            Corazon.src = (Porcentaje > 50) ? "https://i.gifer.com/Vh2.gif" : (Porcentaje <= 50) ? "https://media.tenor.com/DnNxobCSQZkAAAAC/coraz%C3%B3n-roto.gif" : Corazon.src;
            
            p.innerHTML = "El ship de " + select + " Con " + select2 + " Es de <br> <br>" + Porcentaje + "%";
        }
    } 
}

function Version() {
    const Contenedor_Select = document.querySelector(".Contenedor");
    const Contenedor_Input = document.querySelector(".Contenedor2");
    const DivImg = document.querySelector(".Con-img");
    const p = document.getElementById("TextoShip");

    Contenedor_Select.remove();
    Contenedor_Input.style.display = "block";
    DivImg.style.display = "none";
    p.innerHTML = "";
    
}

const Nada = {
    geovany: "Nombre1",
    leslie: "Nombre2",
    martin: "Nombre3",
    karen: "Nombre4",
    geovas: "Nombre5",
    andres: "Nombre6"
};

function PorcentajeRandom(numero) {

    return (numero === 2) ? Math.floor(Math.random() * 101) 
    : (numero === 1) ? Math.floor(Math.random() * 21) + 80 
    : false;
}

function Reiniciar() {
    location.reload();
}
