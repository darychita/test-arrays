function flatArrayAndRemoveObjects(arr){
    // new array for values without nested arrays
    let newArr = [];

    arr.forEach((item) => {
        // if item is array, do recursion
        // until the deepest level will be riched
        if(Array.isArray(item)){
            const newArrFlattern = flatArrayAndRemoveObjects(item);
            // concate new values to basic v
            newArr = newArr.concat(newArrFlattern);
            return;
        }
        // push all elements except objects to new array 
        if(!(item instanceof Object)){
            newArr.push(item);
        }
    });

    return newArr;
}


module.exports = flatArrayAndRemoveObjects;