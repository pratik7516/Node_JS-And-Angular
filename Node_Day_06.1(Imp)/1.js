let makeGetRequest = async () => {
    console.log("ABOUT TO MAKE GET REQUETS");

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    const email = document.querySelector("#email").value;
    const mobile = document.querySelector("#mobile").value;

    // http://localhost:3000/adduser?username=santosh&password=12345&email=abcd@gmail.com&mobile=123456
    const url = `http://localhost:3000/adduser?username=${username}&password=${password}&email=${email}&mobile=${mobile}`;

    console.log(url);

    // ajax call
    await fetch(url);
};

let makePostRequest = async () => {
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    const email = document.querySelector("#email").value;
    const mobile = document.querySelector("#mobile").value;

    const data = { username, password, email, mobile };
    const url = "http://localhost:3000/adduser";
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
};