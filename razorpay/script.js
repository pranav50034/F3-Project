document.getElementById("rzp-button1").onclick = function (e) {
   var options = {
      key: "rzp_test_mk4Gj0Tq4SKT9g",
      amount: parseInt(localStorage.getItem("Total-Ammount")) * 8000,
      currency: "INR",
      name: "MyShop Checkout",
      description: "This is your order",
      theme: {
         color: "#000",
      },
      image: "https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg",
   };

   var rzpy1 = new Razorpay(options);
   rzpy1.open();
   localStorage.removeItem("Total-Ammount");
   let currentUser = JSON.parse(localStorage.getItem("currentUser"));
   currentUser.cart = [];
   localStorage.setItem("currentUser", JSON.stringify(currentUser));
   e.preventDefault();
};
