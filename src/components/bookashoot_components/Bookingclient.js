export default async function BookingClient() {
  console.log("we are in function");
  if (document.getElementById("name") !== undefined) {
    localStorage.setItem("name", document.getElementById("name").value);
    localStorage.setItem("email", document.getElementById("email").value);
    localStorage.setItem("mobile", document.getElementById("mobile").value);
  }

  if (document.getElementById("location") !== undefined) {
    var name = localStorage.getItem("name");
    var email = localStorage.getItem("email");
    var mobile = localStorage.getItem("mobile");

    console.log("msg", name);
    console.log("email", email);
    console.log("mobile", mobile);
    var location = document.getElementById("location").value;

    const data = {
      name: name,
      email: email,
      location: location,
      // event: event,
      mobile: mobile,
    };

    let result = await fetch("http://localhost:8081/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user-details", JSON.stringify(result));
    console.log(result);
    console.log("users stored successfully");
  }
}
