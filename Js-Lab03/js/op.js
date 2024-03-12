
    function createPizza() {
        // Get form values
        const firstName = document.getElementById('firstName').value;
        const size = getSize();
        const toppings = getSelectedToppings();
        const crust = getCrust();

        // Create Pizza object
        const pizza = {
            firstName: firstName,
            size: size,
            toppings: toppings,
            crust: crust
        };

        // Display Pizza information
        displayPizzaInfo(pizza);
    }

    // Get the topping values
    function getSelectedToppings() {
        const checkboxes = document.querySelectorAll('input[name="toppings[]"]:checked');
        const toppings = Array.from(checkboxes).map(checkbox => checkbox.value);
        return toppings;
    }

    // Display all pizza information
    function displayPizzaInfo(pizza) {
        const pizzaInfoDiv = document.getElementById('pizzaInfo');
             
        pizzaInfoDiv.innerHTML = `<p>Order placed for: ${pizza.firstName}. 
                                    Your choice of size was ${pizza.size}. 
                                    Your toppings were: ${pizza.toppings.join(', ')}. 
                                    Your crust is ${pizza.crust}.</p>`;
    }

    // Gets value of crust from selector
    function getCrust(){
        const crust = document.getElementById('crust').value;
        response = "";
        if(crust == 1){
            response = "Regular Crust";
        }
        else if(crust == 2){
            response = "Thin Crust";
        }
        else if(crust == 3){
            response = "Thick Crust";
        }
        return response;
    }

    // Gets value of size from selector
    function getSize(){
        const size = document.getElementById('size').value;
        response = "";
        if(size == 1){
            response = "Personal";
        }
        else if(size == 2){
            response = "Small";
        }
        else if(size == 3){
            response = "Medium";
        }
        else if(size == 4){
            response = "Large";
        }
        return response;
    }

    function display_pizza() {
       createPizza();
    }

// Button event listener to display pizza info
var btn1 = document.querySelector('button')
btn1.addEventListener('click', display_pizza)