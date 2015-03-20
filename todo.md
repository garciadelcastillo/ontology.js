# Ontology.js 

## TO DO list

- for **is** and **are**, implement greaterThan, lessThan, greaterOrEqualThan, lessOrEqualThan

- for **has** and **have**, implement something that check of a particular property is equal to a value: 
```javascript
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
```

- Make 'not' methods such as notOfType(), notEqual() available trough a 'not' chained namespace such as:
    is().not.type()
    are().not.equal()

- Add a **find()** accessor to fetch characteristic properties in iterable objects:
    find(arr).largest();            // returns an array with the object that evaluates to absolute >
    find(obj).smallest();           // returns an object with the property whose value evaluates to abs <
    find(arr).greaterThan(_value);  // returns an array with the objects matching > _value
    find(obj).lessThan(_value);     // returns an object with the properies whose value < _value
    find(obj).equal(_value);        // returns an object with the properties where value == _value

