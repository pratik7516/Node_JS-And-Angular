
let hello = async () => {
    console.log("I.AM.HELLO");              //Asynchronous function always returns promise

    return "HELLOOOO";
};

// RULE OF PROMISE
let mpromise = hello();

// resolve :: handling success :: Handling output
mpromise.then((data) => {
    console.log(data);
});

// ERROR :: REJECT :: HANLDING ERROR
mpromise.catch((err) => {
    console.log(err);
});