// Generic type check, passing data type as string representation
is(null).ofType('null');                // true
is(undefined).ofType('undefined');      // true
is(NaN).ofType('nan');                  // true
is(true).ofType('boolean');             // true
is(0).ofType('number');                 // true
is(function(){}).ofType('function');    // true
is('foo').ofType('string');             // true
is([]).ofType('array');                 // true
is({}).ofType('object');                // true

// Is object a PRIMITIVE type? This means string, number, boolean, null or undefined
// https://developer.mozilla.org/en-US/docs/Glossary/Primitive
is(1000).primitive();           // true
is([1, 2]).primitive();         // false, arrays are not considered primitive objects

// Is object type NOT ...?
is('foo').not('number');        // true
is({a:5}).not('object');        // false

// Is object type EITHER of these ...?
is([]).either('array', 'object');       // true
is(NaN).either('null', 'undefined');    // false

// Is object type NEITHER of these ...?
is([]).neither('array', 'object');      // false
is(NaN).neither('null', 'undefined');   // true



// Generic type checks for arrays of objects
are([-1, 1]).ofTypes('number');         // true
are([true, 'foo']).ofTypes('string');   // false

// Primitive type checks for arrays of objects
are([true, 'foo']).primitives();        // true
are([100, {a: 5}]).primitives();        // false

// Is no single object of type ...?
are([true, 'foo']).not('number');       // true
are([true, 'foo']).not('string');       // false

// Is each object of any of the specified types?
are([true, 'foo']).either('string', 'boolean');     // true
are([true, 'foo']).either('number', 'boolean');     // false

// Is no single object of any of the specified types?
are([[], {}]).neither('string', 'boolean');         // true
are([true, 'foo']).neither('number', 'boolean');    // false
