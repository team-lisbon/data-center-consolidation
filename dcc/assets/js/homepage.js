function goToURL(url) {
      location.href = url;
    }

$("#add").click(function() {
	goToURL('/add');

});

$("#analyze").click(function() {
	goToURL('/analyze');

});

$("#generate").click(function() {
	goToURL('/generate');

});