const customer = {name:"John Doe", role:"pickup person", numberOfReservations: 1};
// let isNew = false;

// customer.numberOfReservations === 1 ? isNew = true : isNew = false;

// explain it to me like im five
// ? <-- "then do this"
// : <-- "else do this"
// if numberOfReservations is 1 then do isNew to true, else do isNew to false
// we check if it's equal to one because if the customer has more than one reservation he is an old customer but everyone has to have at least one

// but we can make it even shorter:

let isNew = customer.numberOfReservations === 1;
console.log(isNew);

// i still prefer if statements because they are much clearer

