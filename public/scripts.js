function something()
{
	var x = window.localStorage.getItem('num');
	x = x * 1 + 1;
	window.localStorage.setItem('num', x);
	alert(x);
}

// =================================================

function add_to_cart(id)
{
	// var key = 'product_' + id;
	// var x = window.localStorage.getItem(key);
	// x = x * 1 + 1;
	// window.localStorage.setItem(key, x);

	var x = window.localStorage.getItem('hookah_' + id);
	x = x * 1 + 1;
	window.localStorage.setItem('hookah_' + id, x);

	alert('Вы добавили в корзину кальян под номером: ' + id);

	update_orders_input();
	update_orders_button();
}

// =================================================

function update_orders_input()
{
	var orders = cart_get_orders();
	$('#orders_input').val(orders);
}

// =================================================

function update_orders_button()
{
	var text = 'Корзина (' + cart_get_number_of_items() + ')';
	$('#orders_button').val(text);
}

// =================================================

function cart_get_number_of_items()
{
	var cnt = 0;

	for(var i = 0; i < window.localStorage.length; i++)
	{
		var key = window.localStorage.key(i); // получаем ключ
		var value = window.localStorage.getItem(key); // получаем значение

		if(key.indexOf('hookah_') == 0)
		{
			cnt = cnt + value * 1;
		}
	}
	return cnt;
}

// =================================================

function cart_get_orders()
{
	var orders = '';

	for(var i = 0; i < window.localStorage.length; i++)
	{
		var key = window.localStorage.key(i); // получаем ключ
		var value = window.localStorage.getItem(key); // получаем значение, аналог в ruby: hh[key] = x

		if(key.indexOf('hookah_') == 0)
		{
			orders = orders + key + '=' + value + ',';
		}
	}

	return orders;
}

// =================================================

function cancel_order()
{
	window.localStorage.clear();

	update_orders_input();
	update_orders_button();

	$('#cart').text('Ваша корзина успешно очищена! Пожалуйста, добавьте сюда что-нибудь!');

	return false;	
}

// =================================================


// InputMaska - для телефона
$(function(){
  $("#phone").mask("+7(999) 999-9999");
});
// InputMaska - для телефона


// Подсчёт кол-во символов
var maxCount = 200;
var redCount = 0;
$("#count").text(maxCount);
function getCount() {
  var count = maxCount - $("#seo-title").val().length;
  $("#count").text(count);
  if (count <= redCount) { $(".inform-text").addClass("red"); } else if (count > 0 && $(".inform-text").hasClass("red")) {
    $(".inform-text").removeClass("red");
  }
}
$("#seo-title").val().length;
// Подсчёт кол-во символов