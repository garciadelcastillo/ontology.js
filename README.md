# ontology.js

**ontology.js** is a mighty, yet lightweight library to inquire about the ''nature of being'' in JavaScript objects. It provides a clean API of chained lexical methods for data type checks, property checks and equality comparators.

Download the latest stable version from [the distribution folder](https://github.com/garciadelcastillo/ontology.js/tree/master/dist). Feel free to add feature requests [to the wishlist](https://github.com/garciadelcastillo/ontology.js/issues/1).

## Usage

**ontology.js** adds some group methods to your global scope:
```javascript
is(obj);            // for queries at object level (single objects)
are(objs);          // for queries at array level (arrays of objects)
has(obj);           // for queries on object properties
have(objs);         // for queries on object properties at array level 
```

These objects return a scoped selection that can be further queried with chained methods, returning the evaluated expression:
```javascript
is(10000).type('number');                       // true
is('foo').type('boolean');                      // false

are([-1, 1]).types('number');                   // true
are([true, 'foo']).types('string');             // false

has({foo: true}).property('foo');               // true
has({foo: true}).property('bar');               // false

have([{foo: 1}, {foo: 2}]).property('foo');     // true
have([{foo: 1}, {bar: 2}]).property('foo');     // false
```

And this is pretty much it. The rest you can figure out from the following examples. The [tests.js file](https://github.com/garciadelcastillo/ontology.js/blob/master/test/tests.js) is also a very good resource to view detailed implementation examples.

```javascript
// Generic type check, passing data type as string representation
is(null).type('null');                // true
is(undefined).type('undefined');      // true
is(NaN).type('nan');                  // true
is(true).type('boolean');             // true
is(0).type('number');                 // true
is(function(){}).type('function');    // true
is('foo').type('string');             // true
is([]).type('array');                 // true
is({}).type('object');                // true

// Is object a PRIMITIVE type? This means string, number, boolean, null or undefined
// https://developer.mozilla.org/en-US/docs/Glossary/Primitive
is(1000).primitive();           // true
is([1, 2]).primitive();         // false, arrays are not considered primitive objects

// Is object type NOT ...?
is('foo').notType('number');    // true
is({a:5}).notType('object');    // false

// Is object type EITHER of these ...?
is([]).either('array', 'object');       // true
is(NaN).either('null', 'undefined');    // false

// Is object type NEITHER of these ...?
is([]).neither('array', 'object');      // false
is(NaN).neither('null', 'undefined');   // true

// Is object equal to ...? Implements native equality '==' behavior with type conversion
is(1).equal('1');                       // true
is(null).equal(undefined);              // true

// Is object not equal to ...? Implements native inequality '!=' behavior with type conversion
is(1).notEqual('1');                    // false
is(null).notEqual(undefined);           // false

// Is object identical to ...? Implements strict equality '===' with no type conversion
is(1).identical('1');                   // false
is(null).identical(undefined);          // false

// Is object not identical to ...? Implements strict inequality '!==' with no type conversion
is(1).notIdentical('1');                // true
is(null).notIdentical(undefined);       // true

// Is object deeply strict equal to ...? Compares and matches ownProperties
is({a: 5, b: 7})
    .deepIdentical({a: 5, b: 7});       // true
is({a: 5, c: true})
    .deepIdentical({a: 5, c: 1});       // false


// Generic type checks for arrays of objects
are([-1, 1]).type('number');         // true
are([true, 'foo']).type('string');   // false

// Primitive type checks for arrays of objects
are([true, 'foo']).primitives();        // true
are([100, {a: 5}]).primitives();        // false

// Is no single object of type ...?
are([true, 'foo']).notType('number');   // true
are([true, 'foo']).notType('string');   // false

// Is each object of any of the specified types?
are([true, 'foo']).either('string', 'boolean');     // true
are([true, 'foo']).either('number', 'boolean');     // false

// Is no single object of any of the specified types?
are([[], {}]).neither('string', 'boolean');         // true
are([true, 'foo']).neither('number', 'boolean');    // false

// Is every object equal ...?
are([1, 2, 3]).equal([true, '2', 3]);       // true
are([1, 2]).equal([1, 2, 3]);               // false, arrays have different lengths

// Is any object not equal ...?
are([1, 2, 3]).notEqual([true, '2', 3]);    // false
are([1, 2]).notEqual([1, 2, 3]);            // true

// Is every object identical ...?
are([1, 2, 3]).identical([true, '2', 3]);   // false
are([1, 2]).identical([1, 2, 3]);           // false, arrays have different lengths

// Is any object not identical ...?
are([1, 2, 3]).notIdentical([true, '2', 3]);    // false
are([1, 2]).notIdentical([1, 2, 3]);            // false, arrays have different lengths

// Is every object deeply identical?
are([{a: 5}, {b: false}])
    .deepIdentical([{a: 5}, {b: 0}]);         // false


// Has object ownProperty? 
has({a: 0}).property('a');          // true
has([0, 1]).property('length');     // true

// Has each object this ownProperty?
have([{a:5}, {a:7}]).prop('a');     // true
have([{a:5}, {b:7}]).prop('a');     // false

```

