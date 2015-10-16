function goToURL(url) {
      location.href = url;
    }

$("#add").click(function() {
	goToURL('/datacenter/index');

});

$("#analyze").click(function() {
	goToURL('/datacenter');

});

$("#generate").click(function() {
	goToURL('/generate');

});