function pedeRecursos() {

	var town_url = 'http://br34.grepolis.com/game/farm_town_info?action=claim_load&town_id=18474&h=6de5bd53599';

	var barbaros = [ '{"target_id":"7381","claim_type":"normal","time":300,"town_id":18474,"nlreq_id":0}',			//Tanatos
					 '{"target_id":"7377","claim_type":"normal","time":300,"town_id":18474,"nlreq_id":3642469}',	//Rosta
					 '{"target_id":"7378","claim_type":"normal","time":300,"town_id":18474,"nlreq_id":3642469}',	//Strigarho
					 '{"target_id":"7383","claim_type":"normal","time":300,"town_id":18474,"nlreq_id":3642469}',	//Natatadra
					 '{"target_id":"7382","claim_type":"normal","time":300,"town_id":18474,"nlreq_id":3799679}'		//Giaestri
				];

	for (var i=0; i<barbaros.length; i++) {
		$.ajax({
			url: town_url,
			type: 'POST',
			dataType: 'text',
			data: {
				json : barbaros[i]
			}
		});
	}
}

var intervalo_recursos = intervalo_recursos || null;
if (intervalo_recursos != null) {
	window.clearInterval(intervalo_recursos);
}
intervalo_recursos = window.setInterval(
		function(){
			var dt = new Date();
			//dt.toShortString() => "22:52 26/03/2013"
			//dt.toLocaleString() => "terça-feira, 26 de março de 2013 19:58:44"
			console.log('===== Pede Recursos =====');
			console.log(dt.toLocaleString());
			pedeRecursos();
	}, 305000);

