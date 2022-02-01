const receivesAFunction = (callback) => callback();
//function namedFunction(){
  //  console.log('Hello!')
//};

function returnsANamedFunction () {
    return receivesAFunction
}
    


function returnsAnAnonymousFunction () {
return function(){
};
}
