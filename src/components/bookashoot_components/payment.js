import $ from "jquery";
import swal from "sweetalert";
let apiKey = process.env.REACT_APP_CITY_HOME;
// const url1 = apiKey + "bookashoot";
const url2 = apiKey + "create_order";
export function paymentStore() {
  if (document.getElementById("p3999") !== undefined) {
    localStorage.setItem("price", document.getElementById("p3999").value);
    // var price = localStorage.getItem("price");
  }
}

function paymentStart() {
  // call api bookashoot - it will return the id for the same payment
  const firstName = localStorage.getItem("userFirstName");
  const email = localStorage.getItem("userEmail");
  const mobile = localStorage.getItem("userMobile");
  const city = localStorage.getItem("city");
  const bookingDate = localStorage.getItem("bookingdate");
  const photoshootPackage = localStorage.getItem("c_package");

  let apiURL = "https://api.fodrix.com/bookashoot";
  fetch(apiURL, {
    method: "POST",
    body: JSON.stringify({
      c_name: firstName,
      c_email: email,
      c_mobile: mobile,
      location: city,
      date: bookingDate,
      c_package: photoshootPackage,
    }),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      throw new Error(e);
    });
  console.log("payment started..");
  let amount = $("#package").val();
  console.log(amount);

  if (amount === "" || amount === null || amount === undefined) {
    // alert("Amount is required");
    swal("Failed", "Amount is required", "error");
  } else {
    // book id
    // console.log(apiKey);
    // $.ajax({
    //   url: url1,
    //   //{ apiKey } + "bookashoot",
    //   data: JSON.stringify({ amount: amount, info: "order_request" }),
    //   contentType: "application/json",
    //   type: "POST",
    //   dataType: "json",
    //   success: function (response) {
    //     console.log("book a shootapi excuted successfully");

    //     //invoked when success
    //     // console.log(response);
    //     //store the id from response  : statusId
    //   },
    // });

    $.ajax({
      url: url2,
      // { apiKey } + "create_order",
      data: JSON.stringify({ amount: amount, info: "order_request" }),
      contentType: "application/json",
      type: "POST",
      dataType: "json",
      success: function (response) {
        //invoked when success
        // console.log(response);
        if (response.status === true) {
          console.log("we are in payment status");
          //open payment form
          let options = {
            key: "rzp_live_SqbK2yknoKLD51",
            amount: amount * 100,

            currrency: "INR",
            name: "Fodrix",
            description: "Payment",
            image:
              "https://media-exp1.licdn.com/dms/image/C560BAQER8YRjR9JiXw/company-logo_200_200/0/1625827442861?e=1634169600&v=beta&t=XxqwUr-hhAo59BAUgBOIz4dcWHoylOkDgUZAFv7kN7I",
            order_id: response.id,
            handler: function (response) {
              // call api updateshoot and use the id which is returned by the bookashoot api.
              swal("Congrats", "Payment successful", "success");
            },

            notes: {
              address: "Razorpay Corporate Office",
            },
            theme: {
              color: "#3399cc",
            },
          };
          // let rzp = new Razorpay(options);
          const rzp = new window.Razorpay(options);
          // const rzp = new window.Razorpay(options);
          rzp.on("payment.failed", function (response) {
            swal("Failed", "Payment failed", "error");
          });

          rzp.open();
        }
      },
      error: function (error) {
        //invoked when error
        // console.log(error);
        alert("something went wrong");
      },
    });
  }
  return;
}

export default paymentStart;
