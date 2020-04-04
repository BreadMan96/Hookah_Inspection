function something()
{
	var x = window.localStorage.getItem('num');
	x = x * 1 + 1;
	window.localStorage.setItem('num', x);
	alert(x);
}