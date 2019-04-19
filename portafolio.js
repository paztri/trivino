// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/foto-01.jpg",
    title: "FiestaExpo. | Junio 2018",
    about: "Exposición colaborativa de tema libre en la que participaron más de 20 artistas y músicos. Se expusieron muestras de fotografía, pintura, collage y performance. Convocó cerca de 200 personas en Casa Antro, Bellavista.",
}, {
    figure: "media/foto-02.jpg",
    title: "ExpoCuerpo | Septiembre 2018",
    about: "Exposición colaborativa centrada en el cuerpo, en la que participaron 22 artistas. Se expusieron muestras de fotografía, audiovisual, escultura, creación editorial, cuerpos pintados, danza, acroyoga y música en vivo. Convocó a 350 personas en una jornada extendida de 6 horas en Casa MC, Providencia.",
}, {
    figure: "media/foto-03.jpg",
    title: "Ilustraciones | 2017",
    about: "Ilustraciones análogas y digital. Animación digital.",
}, {
    figure: "media/foto-04.jpg",
    title: "Photographer | 2018-2019",
    about: "Asistente técnica del estudio fotográfico de campus Lo Contador, Uc.Coordinación de una master class de Nikkon para los estudiantes en septiembre 2018.Desarrollo personal enfocado en books de estudio.",
}, {
    figure: "media/foto-05.jpg",
    title: "Wear Parada | 2018-",
    about: "Fashion blog dedicado a capturar el urban style de las señoras que están en paraderos de micro, en la calle y en la feria.Wear Parada es parte de Proyecto Usar, una iniciativa que surgió el año 2018 a fin de activar el intercambio de bienes en desuso (ocupar lo que está).Proyecto Usar ganó fondos del concurso de investigación de invierno de la PUC, por dilucidar ciclos de desecho de ropa usada en ferias libres de Santiago de Chile.",
}, {
    figure: "media/foto-06.jpg",
    title: "Colaboraciones | 2018",
    about: "La mayoría han sido como modelo de obras fotográficas.",
}, {
    figure: "media/foto-07.jpg",
    title: "EP | Proyecto en desarrollo",
    about: "Junto a Felipe Zenteno, músico y productor de profesión, estamos haciendo música desde octubre de 2018. El estilo no es definido, pero se puede entender como electrónica chill, rap, blues. Esperamos que salga en Septiembre de este año ",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';

    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
