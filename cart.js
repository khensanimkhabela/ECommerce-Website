window.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const tbody = document.querySelector("#cart tbody");
    const subtotalCell = document.querySelector("#subtotal table tr:nth-child(1) td:nth-child(2)");
    const totalCell = document.querySelector("#subtotal table tr:nth-child(3) td:nth-child(2)");
    const promoInput = document.querySelector("#promo input");
    const promoButton = document.querySelector("#promo button");

    let discount = 0;

    //Current promo codes applicable
    const promoCodes = {
        "SAVE10": 0.10, // 10% off
        "SAVE50": 0.50  // 50% off
    };



    // Function to render cart rows
    function renderCart() {
        tbody.innerHTML = ""; // Clear table body
        let subtotal = 0;

        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            const row = document.createElement("tr");
            row.innerHTML = `
                <td><a href="#" class="remove" data-index="${index}"><i class="far fa-times-circle"></i></a></td>
                <td><img src="${item.image}" alt="${item.name}"></td>
                <td>${item.name}</td>
                <td>R${item.price}</td>
                <td><input type="number" min="1" value="${item.quantity}" data-index="${index}"></td>
                <td>R${itemTotal}</td>
            `;
            tbody.appendChild(row);
        });

        // Apply discount if any
        let total = subtotal;
        if (discount > 0) {
            total = subtotal - (subtotal * discount);
        }


        // Update totals
        subtotalCell.textContent = `R${total.toFixed(2)}`;
        totalCell.textContent = `R${total.toFixed(2)}`; // Add shipping if needed
    }

    // Handle quantity changes
    tbody.addEventListener("input", (e) => {
        if (e.target.type === "number") {
            const index = e.target.dataset.index;
            cart[index].quantity = parseInt(e.target.value);
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
        }
    });

    // Handle remove item
    tbody.addEventListener("click", (e) => {
        if (e.target.closest(".remove")) {
            e.preventDefault();
            const index = e.target.closest(".remove").dataset.index;
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
        }
    });

    // Handle promo code
    promoButton.addEventListener("click", () => {
        const code = promoInput.value.trim().toUpperCase();
        if (promoCodes[code]) {
            discount = promoCodes[code];
            alert(`Promo code applied! You saved ${(discount * 100)}%`);
        } else {
            discount = 0;
            alert("Invalid promo code");
        }
        renderCart();
    });



    renderCart();
});