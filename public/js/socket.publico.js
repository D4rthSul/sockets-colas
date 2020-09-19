var socket = io();

var lblticket1 = $('#lblTicket1');
var lblticket2 = $('#lblTicket2');
var lblticket3 = $('#lblTicket3');
var lblticket4 = $('#lblTicket4');

var lblescritorio1 = $('#lblEscritorio1');
var lblescritorio2 = $('#lblEscritorio2');
var lblescritorio3 = $('#lblEscritorio3');
var lblescritorio4 = $('#lblEscritorio4');

var lblTickets = [lblticket1, lblticket2, lblticket3, lblticket4];
var lblEscritorios = [lblescritorio1, lblescritorio2, lblescritorio3, lblescritorio4];

socket.on('estadoActual', function(resp) {

    actualizaHtml(resp.ultimos4);

});

socket.on('ultimos4', function(data) {

    var audio = new Audio('audio/new-ticket.mp3');
    let playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(_ => {
            // Automatic playback started!
            // Show playing UI.
        }).catch(error => {
            // Auto-play was prevented
            // Show paused UI.
            console.log('Error con la reproducción.');
        });
    }

    actualizaHtml(data);

});

function actualizaHtml(ultimos4) {

    for (var i = 0; i <= ultimos4.length - 1; i++) {

        lblTickets[i].text('Ticket ' + ultimos4[i].numero);
        lblEscritorios[i].text('Escritorio ' + ultimos4[i].escritorio);

    }

}