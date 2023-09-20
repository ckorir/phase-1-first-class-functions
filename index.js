function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function namedFunction() {
        console.log ("This is a named Function");
    };
}

function returnsAnAnonymousFunction(){
    return function () {
        console.log("This is an anonymous Function") 
    };

    //OR return () => console.log("This is an anonymous Function");
}