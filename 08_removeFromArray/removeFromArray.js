const removeFromArray = function(arr, ...thisarr) {
      // let originalArray = Array.from(arguments)
            // let array = originalArray[0];
            // let removeElements = originalArray.slice(1);
            let removeElements = Array.from(thisarr);
            
            for (let i = 0; i < removeElements.length; i++) {
                let value = removeElements[i];
                while (arr.includes(value)) {
                    let targetIndex = arr.indexOf(value);
                    arr.splice(targetIndex, 1);

                    if (!arr.includes(value)) {
                        break
                    }
                }
            }
            // return typeof(removeElements.slice())
            return arr

};

// Do not edit below this line
module.exports = removeFromArray;
