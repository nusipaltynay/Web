const calc_tenge = document.getElementById('calc_tenge');
const calc_euro = document.getElementById('calc_euro');
const calc_dollar = document.getElementById('calc_dollar');

function calculate() {
	let summa = document.getElementById('summa').value;
    const currency = document.getElementById('currency').value;
	if (currency == 'kzt') {
 		calc_tenge.value = '-';
 		calc_euro.value = (parseInt(summa) / 474).toFixed(2);
 		calc_dollar.value = (parseInt(summa) / 463).toFixed(2);
	} else if (currency == 'euro') {
		calc_euro.value = '-';
		calc_tenge.value = (parseInt(summa) / 0.0021).toFixed(2);
		calc_dollar.value = (parseInt(summa) / 0.98).toFixed(2);
	} else if (currency == 'usd') {
		calc_dollar.value = '-';
		calc_tenge.value = (parseInt(summa) / 0.0022).toFixed(2);
		calc_euro.value = (parseInt(summa) / 1.02).toFixed(2);
	}
}