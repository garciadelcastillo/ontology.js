# Ontology.js 

## TO DO list

    - for **is** and **are**, implement greaterThan, lessThan, greaterOrEqualThan, lessOrEqualThan
    - for **has** and **have**, implement something that check of a particular property is equal to a value: 
``` javascript
        are(array).prop(key).equal(comp);  // checks if property 'key' in all object is equal to 'comp'

        // this would be equal to:
            var values = [];
            for (var i = 0; i < array.length; i++) {
                values.push(array[i][key]);
            }
            are(values).equal(comp);

        // the first selector returns an 'are' object with the array of values of the 'key' prop
        // it could be broken down like:
        var areValues = are(array).prop(key);
        areValues.equal(comp);
``` javascript