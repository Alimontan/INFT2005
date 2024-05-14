
function saveItem() {
	let key = document.getElementById('product').value;
	let value = document.getElementById('quantity').value;
	if(key && value && !isNaN(value)) {
		localStorage.setItem(key, value);
		updateCart();
	}	
}

function deleteItem() {
	let key = document.getElementById('product').value;
	localStorage.removeItem(key);
	updateCart();
}

function emptyCart() {
	localStorage.clear();
	updateCart();
}

const inventory = {
	'Stratos': 8,
	'Hubba bubba': 2,
	'Smørbukk': 1,
	'Hobby': 6,
	'Lakrisbåter': 20,
	'Smil': 12
}

function createInventory() {
	let options = '<option value selected>-- Velg vare --</option>';

	Object.keys(inventory).forEach(key => {
 		options += '<option value="' + key + '">' + key + ' (' + inventory[key] + ' kr)' + '</option>';
	});

	document.getElementById('product').innerHTML = options;

	updateCart();	
}

function updateCart() {
	let list = "";
	let totalPrice = 0;

	if (localStorage.length > 0) {
		Object.keys(localStorage).forEach(key => {
			let quantity = localStorage.getItem(key);
	 		let price = quantity * inventory[key];
	 		totalPrice += price;
	 		list += '<li>' + quantity + ' ' + key + '; ' + price + ' kr</li>';
		});
	} else {
		list = "(tomt)";
	}

	document.getElementById('list').innerHTML = list;
	document.getElementById('price').innerHTML = totalPrice;
}

function validate(id) {
	let value = document.getElementById(id).value;
	let ok = !!value && value.length > 0;
	if(!ok) {
		document.getElementById(id + 'Error').innerHTML = 'Feltet må ha en verdi'
	} else {
		document.getElementById(id + 'Error').innerHTML = ''
	}
	return ok;
}

function validateForm() {
	return validate('fullName') && validate('address') && validate('postCode') && validate('city') && validateCreditCardNo();
}

function validateCreditCardNo() {
	let ccNo = document.getElementById('creditCardNo').value;
	if(ccNo.trim().length !== 16 || isNaN(ccNo.trim())) {
		document.getElementById('creditCardNoError').innerHTML = "Kredittkortnummeret må bestå av 16 siffer"
		return false;
	} else {
		document.getElementById('creditCardNoError').innerHTML = "";
		return true;
	}
}