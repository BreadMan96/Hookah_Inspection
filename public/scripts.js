function something()
{
	var x = window.localStorage.getItem('num');
	x = x * 1 + 1;
	window.localStorage.setItem('num', x);
	alert(x);
}

function add_to_cart(id)
{
	// var key = 'product_' + id;
	// var x = window.localStorage.getItem(key);
	// x = x * 1 + 1;
	// window.localStorage.setItem(key, x);

	var x = window.localStorage.getItem('hookah_' + id);
	x = x * 1 + 1;
	window.localStorage.setItem('hookah_' + id, x);

	alert('You added hookah id: ' + id);
}