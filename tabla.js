const semanas = [
    {
        numero:"1",
        subtitulo: "Clasificación de problemas",
        tema:"algorítmicos Presentación del curso. Clasificación de problemas algorítmicos, problemas P y NP. Problemas de decisión, localización y optimización. Descripción de algunos problemas NP-difícil.",
        archivos: {tipo: "power_point",nombre:"archivos 1",link:"https://docs.google.com/presentation/d/1EzWnm403W2xPvLDssZvvHS-WTzT7o7zkh9qLKgkpKRs/edit?usp=sharing"}
    },
    {
        numero:"2",
        subtitulo: "Fundamentos de la inteligencia artificial",
        tema:"Definición de la Inteligencia Artificial. Máquina inteligente. Diferencia entre sistemas operacionales y sistemas inteligentes. Aplicaciones en la industria y servicios (robótica, planificación, gestión de desperdicios). Test de Turing.",
        /*archivos: {tipo: "power_point",nombre:"archivos 2",link:"https://docs.google.com/presentation/d/1ediU4PRx2BVvWLq7adaVr6uSNTjrsjbO7QcA7Z50aH8/edit?usp=sharing"},
        trabajo:[
            {
                tipo: "lisp",
                nombre: "lisp1",
                link:"https://drive.google.com/file/d/1TGfCO-0Tln2C7s9GKAV8nKnpI_FPUZ20/view?usp=sharing"
            },
            {
                tipo: "lisp",
                nombre: "lisp2",
                link:"https://drive.google.com/file/d/1PslihSCez8R34cJz7aGWmQ_oUnYcef7T/view?usp=sharing"
            },
            {
                tipo: "lisp",
                nombre: "lisp3",
                link:"https://drive.google.com/file/d/1J0SCnP-B1ifebfyzuUgLYpEmQ1pzAwmd/view?usp=sharing"
            },
            {
                tipo: "word",
                nombre: "sistemas inteligentes",
                link:"https://docs.google.com/document/d/1LVUZWLURz0dZ9GtYG4ZV_atlKELSNas4L6kFUqhTUww/edit?usp=sharing"
            }
        ]*/

    },
    {
        numero:"3",
        subtitulo: "",
        tema:"",
    },
    {
        numero:"4",
        subtitulo: "",
        tema:"",
    },
    {
        numero:"5",
        subtitulo: "",
        tema:"",
    },
    {
        numero:"6",
        subtitulo: "",
        tema:"",
    },
    {
        numero:"7",
        subtitulo: "",
        tema:"",
    },
    {
        numero:"9",
        subtitulo: "",
        tema:"",
    },
    {
        numero:"10",
        subtitulo: "",
        tema:"",
    },
    {
        numero:"11",
        subtitulo: "",
        tema:"",
    },
    {
        numero:"12",
        subtitulo: "",
        tema:"",
    },
    {
        numero:"13",
        subtitulo: "",
        tema:"",
    },
    {
        numero:"14",
        subtitulo: "",
        tema:"",
    },
    {
        numero:"15",
        subtitulo: "",
        tema:"",
    },
];


const $tabla = document.querySelector(".tabla");

for(let i = 0; i < semanas.length; i = i + 1){
    let datos_fila = semanas[i];
    const $nuevaFila = document.createElement("tr");

    let elemento_tema = `
        <td class="tabla__tema">
        <h2>${datos_fila.subtitulo}</h2>
        <p>${datos_fila.tema}</p>
        </td>
    `

    let elemento_archivos = datos_fila.hasOwnProperty("archivos")?
    `
        <td class="tabla__archivos">
        <a class="archivos__elemento" href="${datos_fila.archivos.link}" target="__blank">
            <img class="tabla__logo" src="./img/icon/${datos_fila.archivos.tipo}.png" alt="${datos_fila.archivos.nombre}" title="${datos_fila.archivos.nombre}">
            <span>${datos_fila.archivos.nombre}</span>
        </a>
        </td>
    `:'<td class="tabla__archivos"></td>'

    
    let elemento_trabajo = `<td class="tabla__anotaciones"></td>`;
    if(datos_fila.hasOwnProperty("trabajo")){
        elemento_trabajo = `<td class="tabla__anotaciones trabajo__elementos">`;
        for(let i = 0; i < datos_fila["trabajo"].length; i = i + 1){
            let elemento = datos_fila["trabajo"][i];
            elemento_trabajo = elemento_trabajo + 
            `<a class="archivos__elemento" href="${elemento.link}" target="__blank">
            <img class="tabla__logo" src="./img/icon/${elemento.tipo}.png" alt="${elemento.nombre}" title="${elemento.nombre}">
            <span>${elemento.nombre}</span>
            </a>`
        }
        elemento_trabajo = elemento_trabajo + `</td>`;
    }

    
    $nuevaFila.innerHTML = `
    <td class="tabla__semana">${datos_fila.numero}</td>
    ${elemento_tema}
    ${elemento_archivos}
    ${elemento_trabajo}`
    $tabla.appendChild($nuevaFila);
}