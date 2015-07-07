/*
 *	recupera as farms desta town

http://br34.grepolis.com/game/farm_town_overviews?action=get_farm_towns_for_town&town_id=18474&h=6de5bd53599&json=%7B%22island_x%22%3A626%2C%22island_y%22%3A479%2C%22booty_researched%22%3A1%2C%22trade_office%22%3A0%2C%22town_id%22%3A18474%2C%22nlreq_id%22%3A3861782%7D&_=1364390485673

GET Params:
_	1364390485673
action	get_farm_towns_for_town
h	6de5bd53599
json	{"island_x":626,"island_y":479,"booty_researched":1,"trade_office":0,"town_id":18474,"nlreq_id":3861782}
town_id	18474



Response:

2354
{"menu":"{\r\n\"fto_claim\":{\"id\":\"fto_claim\",\"className\":\"active\",\"name\":\"Pedir\"},\r\n\"fto_pillage\":{\"id\":\"fto_pillage\",\"onclick\":\"sendMessage(\\\"pillageClick\\\")\",\"name\":\"Pilhar\"}}","loads_data":{"300":{"resources":[20,24,28,32,36,40],"mood":6},"1200":{"resources":[46,54,62,70,78,86],"mood":12},"5400":{"resources":[103,120,136,153,170,186],"mood":24},"14400":{"resources":[200,233,266,300,333,366],"mood":48},"600":{"resources":[33,40,46,53,60,66],"mood":10},"2400":{"resources":[77,91,104,117,131,144],"mood":20},"10800":{"resources":[172,200,227,255,283,311],"mood":40},"28800":{"resources":[333,388,444,500,555,611],"mood":80}},"farm_town_list":[{"id":7384,"name":"Gahy","offer":"stone","demand":"iron","stage":1,"rel":0,"ratio":1.25,"mood":100,"loot":null,"island_x":626,"island_y":479,"is_farm":true,"lootable_human":""},{"id":7380,"name":"Psigi","offer":"iron","demand":"stone","stage":1,"rel":0,"ratio":1.25,"mood":100,"loot":null,"island_x":626,"island_y":479,"is_farm":true,"lootable_human"

*/


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

