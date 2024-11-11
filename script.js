document.getElementById("orderbutton").onclick = function (event) {
    event.preventDefault()
    let foodprice = parseInt(document.getElementById
    ('food').value);
    let drinkprice = parseInt(document.getElementById
        ('drink').value);

        let totalprice = foodprice + drinkprice

        let discount = 0;

        if (totalprice > 1) {
            discount = totalprice * 0.1;
            totalprice -= discount;
        }

        const resultDiv = document.getElementById("result");
        if (totalprice > 0) {
            resultDiv.innerHTML = `
             total : $${foodprice + drinkprice} <br>
                discount : $${discount.toFixed(2)} </br>
                final price : $${totalprice.toFixed(2)}`;
            } else {
                resultDiv.innerHTML = 'please select both food and drink before ordering!'
        }
}

