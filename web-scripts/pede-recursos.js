//<a onclick="w(this).call('claimLoad', '7381', 'normal', 300);" class="farm_claim_button" href="#">pedir </a>
//<a onclick="w(this).call('claimLoad', '7377', 'normal', 300);" class="farm_claim_button" href="#">pedir </a>

function pedeRecursos() {

	var town_url = 'http://br34.grepolis.com/game/farm_town_info?action=claim_load&town_id=18474&h=6de5bd53599';

	var barbaros = [ '{"target_id":"7381","claim_type":"normal","time":300,"town_id":18474,"nlreq_id":0}',			//Tanatos
					 '{"target_id":"7377","claim_type":"normal","time":300,"town_id":18474,"nlreq_id":3642469}',	//Rosta
					 '{"target_id":"7378","claim_type":"normal","time":300,"town_id":18474,"nlreq_id":3642469}',	//Strigarho
					 '{"target_id":"7383","claim_type":"normal","time":300,"town_id":18474,"nlreq_id":3642469}'		//Natatadra
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

var intervalo_recursos = window.setInterval(
		function(){
			console.log('===== Pede Recursos =====');
			pedeRecursos();
	}, 305000);

