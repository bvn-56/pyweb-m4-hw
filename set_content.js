prophecies_url= "http://sf-pyw.mosyag.in/m04/api/forecasts"


$("#main-header").click(function() {
	$.getJSON(prophecies_url, function(data) {
		
		prophecies=data["prophecies"]
		set_content_in_divs(prophecies);
	});

	
});

  function set_content_in_divs(prophecies) {
  $.each(prophecies, function(i, d) {
    p = $("#p-" + i)
    p.html("<p>" + d + "</p>")
    console.log('XO-XO-2')
  })
}


	function date_to_header () {
	console.log("установка даты")
	var d = new Date();
	var month = d.getMonth()+1;
	var day = d.getDate();
	var output = d.getFullYear() + '-' +
    (month<10 ? '0' : '') + month + '-' +
    (day<10 ? '0' : '') + day;

	p = $("#main-header");
	p.html("Что день "+output+" готовит")
	};