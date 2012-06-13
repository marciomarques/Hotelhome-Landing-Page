	// Google Maps
	var pos = new google.maps.LatLng(-29.680372, -51.125597);
	var center = new google.maps.LatLng(-29.680372, -51.120597);//-14.239424, -53.186502);
	
	var options = {
		zoom: 16,
		center: center,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		disableDefaultUI: true,
		scrollwheel: false,
		zoomControl: true
	}
	
	var map = new google.maps.Map(document.getElementById("google-maps"), options);
	
	var marker = new google.maps.Marker({
		map: map,
		animation: google.maps.Animation.DROP,
		position: pos,
		icon: "images/map.png"
	});
	
	var info = new google.maps.InfoWindow({
		content: '<div class="info" style="height: 50px;">'
			   //+ "<strong>Entre em Contato</strong> <br />"
			   //+ "<h3>Blend Coworking</h3>"
			   //+ "Fone: (51) 3036-4510 <br />"
			   + "<address>R. Domingos de Almeida, 338 - Centro<br />"
			   + "Novo Hamburgo - RS <br/ >"
			  //+ "Cep: 93510-100</address>"
			   + "</div>"
	});
	
	info.open(map, marker);
	google.maps.event.addListener(marker, 'click', function() {
		info.open(map, marker);
	});
