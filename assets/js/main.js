function myDrinks() {
    let drinks = [
       "Coca-Cola",
       "Apfelsaft",
       "Pepsi",
       "Traubensaft",
       "Sprite",
       "Orangensaft",
       "Red Bull Energy Drink",
       "Fanta"
    ]
    
    drinks.forEach((elem) => {
        console.log(elem);
        document.write(elem + '<br \>');
    })
}

myDrinks();