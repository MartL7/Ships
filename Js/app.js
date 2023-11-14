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
    const select = document.getElementById('Persona1').value;
    const select2 = document.getElementById('Persona2').value;
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
            (Nada[select] === "Nombre4" && Nada[select2] === "Nombre3")
        ) {
            Porcentaje = PorcentajeRandom(1);
            if(Porcentaje > 50) {
                Corazon.src = "https://i.gifer.com/Vh2.gif";
            }
            p.innerHTML = "El ship de " + select + " Con " + select2 + " Es de <br> <br>" + Porcentaje + "%";
        } else {
            if(Porcentaje > 50) {
                Corazon.src = "https://i.gifer.com/Vh2.gif";
    
            } else if(Porcentaje <= 50) {
                Corazon.src = "https://media.tenor.com/DnNxobCSQZkAAAAC/coraz%C3%B3n-roto.gif";
            }
            p.innerHTML = "El ship de " + select + " Con " + select2 + " Es de <br> <br>" + Porcentaje + "%";
        }
    } 
}

const Nada = {
    GEOVANY: "Nombre1",
    LESLIE: "Nombre2",
    "JUAN MARTIN": "Nombre3",
    KAREN: "Nombre4"
};

function PorcentajeRandom(numero) {
    if(numero === 2) {
        return Math.floor(Math.random() * 101);
    } else if(numero === 1) {
        return Math.floor(Math.random() * 31) + 70;
    } else {
        return false;
    }
}

function Reiniciar() {
    location.reload();
}