var is = function(obj) {

    // Sanity
    if (arguments.length != 1) {
        console.warn('Ontology.js: invalid arguments for is()');
        return undefined;
    };

    // Private properties
    // var self = this,  // DOESN'T WORK, this IS THE WINDOW CONTEXT...
    //     arg = obj;  // wouldn't really need this, since obj gets scoped! I <3 JS :)
    var typesMap = {
        'null': 'nullObj',
        'undefined': 'undefinedObj',
        'nan': 'NaNObj',
        'boolean': 'boolean',
        'number': 'number',
        'function': 'function',
        'string': 'string',
        'array': 'array',
        'object': 'object'
    };

    /**
     * Internal implementation of deep equality, adapted from Undescore's eq() 1.8.2
     */
    var eq = function(a, b, aStack, bStack) {
        // Identical objects are equal. `0 === -0`, but they aren't identical.
        // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
        if (a === b) return a !== 0 || 1 / a === 1 / b;
        
        // A strict comparison is necessary because `null == undefined`.
        if (a == null || b == null) return a === b;
        
        // Unwrap any wrapped objects.
        // if (a instanceof _) a = a._wrapped;
        // if (b instanceof _) b = b._wrapped;
        
        // Compare `[[Class]]` names.
        var className = toString.call(a);
        if (className !== toString.call(b)) return false;
        switch (className) {
            // Strings, numbers, regular expressions, dates, and booleans are compared by value.
            case '[object RegExp]':
            // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
            case '[object String]':
                // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
                // equivalent to `new String("5")`.
                return '' + a === '' + b;
            case '[object Number]':
                // `NaN`s are equivalent, but non-reflexive.
                // Object(NaN) is equivalent to NaN
                if (+a !== +a) return +b !== +b;
                // An `egal` comparison is performed for other numeric values.
                return +a === 0 ? 1 / +a === 1 / b : +a === +b;
            case '[object Date]':
            case '[object Boolean]':
                // Coerce dates and booleans to numeric primitive values. Dates are compared by their
                // millisecond representations. Note that invalid dates with millisecond representations
                // of `NaN` are not equivalent.
                return +a === +b;
        }
        var areArrays = className === '[object Array]';
        if (!areArrays) {
            if (typeof a != 'object' || typeof b != 'object') return false;
            
            // Objects with different constructors are not equivalent, but `Object`s or `Array`s
            // from different frames are.
            var aCtor = a.constructor, bCtor = b.constructor;
            // if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
            //              _.isFunction(bCtor) && bCtor instanceof bCtor)
            //         && ('constructor' in a && 'constructor' in b)) {
            //     return false;
            // }
            if (aCtor !== bCtor && !(is(aCtor).function() && aCtor instanceof aCtor &&
                        is(bCtor).function() && bCtor instanceof bCtor)
                    && ('constructor' in a && 'constructor' in b)) {
                return false;
            }
        }


        // Assume equality for cyclic structures. The algorithm for detecting cyclic
        // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
        // Initializing stack of traversed objects.
        // It's done here since we only need them for objects and arrays comparison.
        aStack = aStack || [];
        bStack = bStack || [];
        var length = aStack.length;
        while (length--) {
            // Linear search. Performance is inversely proportional to the number of
            // unique nested structures.
            if (aStack[length] === a) return bStack[length] === b;
        }
        // Add the first object to the stack of traversed objects.
        aStack.push(a);
        bStack.push(b);
        // Recursively compare objects and arrays.
        if (areArrays) {
            // Compare array lengths to determine if a deep comparison is necessary.
            length = a.length;
            if (length !== b.length) return false;
            // Deep compare the contents, ignoring non-numeric properties.
            while (length--) {
                if (!eq(a[length], b[length], aStack, bStack)) return false;
            }
        } else {
            // Deep compare objects.
            // var keys = _.keys(a), key;
            var keys = getKeys(a), key;
            length = keys.length;
            // Ensure that both objects contain the same number of properties before comparing deep equality.
            // if (_.keys(b).length !== length) return false;
            if (getKeys(b).length !== length) return false;
            while (length--) {
                // Deep compare each member
                key = keys[length];
                // if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
                if (!(has(b).property(key) && eq(a[key], b[key], aStack, bStack))) return false;
            }
        }
        
        // Remove the first object from the stack of traversed objects.
        aStack.pop();
        bStack.pop();
        return true;
    };
    // Retrieve the names of an object's own properties.
    // Delegates to **ECMAScript 5**'s native `Object.keys`
    var getKeys = function(objct) {
        //if (!_.isObject(objct)) return [];
        if (!is(objct).object()) return [];
        //if (nativeKeys) return nativeKeys(objct);
        if (Object.keys) return Object.keys(objct);
        var keys = [];
        // for (var key in objct) if (_.has(objct, key)) keys.push(key);  
        for (var key in objct) if (has(objct).property(key)) keys.push(key);  
        // Ahem, IE < 9.
        // if (hasEnumBug) collectNonEnumProps(objct, keys);  // JL: not doing IE8 at the moment...
        return keys;
    };

    var _is = {};  // the main returned object
    _is.arg = obj;

    /**
     * Underscore's implementations of _.isNull, _isUndefined, _isBoolean...
     */
    _is.nullObj = function() {
        return this.arg === null;
    };
    _is.nul = _is.nullObj;  // an alias

    _is.undefinedObj = function() {
        return this.arg === void 0;
    };
    _is.undef = _is.undefinedObj;  // an alias 

    _is.NaNObj = function() {
        return this.number() && this.arg !== +this.arg; 
    };
    _is.nan = _is.NaNObj;  // an alias

    _is.boolean = function() {
        return this.arg === true || this.arg === false || 
            toString.call(this.arg) === '[object Boolean]';
    };

    _is.number = function() {
        return toString.call(this.arg) === '[object Number]';
    };

    _is.function = function() {
        return toString.call(this.arg) === '[object Function]';
    };

    _is.string = function() {
        return toString.call(this.arg) === '[object String]';
    };

    _is.array = function() {
        if (Array.isArray) return Array.isArray(this.arg);  // first try ECMAScript 5 native
        return toString.call(this.arg) === '[object Array]';  // else compare array
    };

    _is.object = function() {
        return Object.prototype.toString.call(this.arg) === '[object Object]'
    };

    /**
     * Checks if object is of type string, number, boolean, null or undefined
     * @return {boolean}
     * @ref https://developer.mozilla.org/en-US/docs/Glossary/Primitive
     */
    _is.primitive = function() {
        return this.either('boolean', 'number', 'string', 'null', 'undefined');
    };

    /**
     * Checks if the object is of the specified data type, using string representation
     * @param  {string} type
     * @return {boolean}
     */
    _is.ofType = function(type) {
        if (!typesMap[type]) {
            console.warn('Ontology.js: unrecognized data type "' + type 
                    + '" for is().ofType()');
            return false;
        }
        return this[typesMap[type]]();
    };
    _is.type = _is.ofType;  // alias


    /**
     * Checks if the object is not of the specified data type, using string representation
     * @param  {string} type
     * @return {boolean}
     */
    _is.notType = function(type) {
        if (!typesMap[type]) {
            console.warn('Ontology.js: unrecognized data type "' + type 
                    + '" for is().not()');
            return true;
        }
        return !this[typesMap[type]]();
    };

    /**
     * Checks if object is of any of the specified data types
     * @param  {string [, ...]} types 
     * @return {boolean}
     */
    _is.either = function(types) {
        var a = arguments, len = a.length;
        for (var i = 0; i < len; i++) {
            if (!typesMap[a[i]]) {
                console.warn('Ontology.js: unrecognized data type "' + a[i] 
                        + '" for is().either()');
                return false;
            }
            if (this[typesMap[a[i]]]()) return true;
        }
        return false;
    };

    /**
     * Checks if object is not of any of the specified data types
     * @param  {string [, ...]} types 
     * @return {boolean} 
     */
    _is.neither = function(types) {
        var a = arguments, len = a.length;
        for (var i = 0; i < len; i++) {
            if (!typesMap[a[i]]) {
                console.warn('Ontology.js: unrecognized data type "' + a[i] 
                        + '" for is().neither()');
                return false;
            }
            if (this[typesMap[a[i]]]()) return false;
        }
        return true;
    };

    /**
     * Checks for coerced object equality '=='
     * @param  {object} other
     * @return {boolean}
     * @ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality_%28.3D.3D%29
     */
    _is.equalTo = function(other) {
        return this.arg == other;
    };
    _is.equal = _is.equalTo;  // alias

    /**
     * Checks for coerced object inequality '!='
     * @param  {object} other
     * @return {boolean}
     * @ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Inequality_%28!.3D%29
     */
    _is.notEqualTo = function(other) {
        return this.arg != other;
    };
    _is.notEqual = _is.notEqualTo;  // alias

    /**
     * Checks for strict equality with no type conversion '==='
     * @param  {object} other
     * @return {boolean}
     * @ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity_.2F_strict_equality_%28.3D.3D.3D%29
     */
    _is.identicalTo = function(other) {
        return this.arg === other;
    };
    _is.identical = _is.identicalTo;
    _is.strictEqualTo = _is.identicalTo;  // alias
    _is.strictEqual = _is.identicalTo;  // alias

    /**
     * Checks for strict inequality with no type conversion '!=='
     * @param  {object} other
     * @return {boolean}
     * @ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Non-identity_.2F_strict_not_equal_%28!.3D.3D%29
     */
    _is.notIdenticalTo = function(other) {
        return this.arg !== other;
    };
    _is.notIdentical = _is.notIdenticalTo

    /**
     * Implements Underscore's deep equality check
     * @param  {object} other
     * @return {boolean}
     * @ref http://underscorejs.org/docs/underscore.html#section-134
     */
    _is.deepIdenticalTo = function(other) {
        return eq(this.arg, other);
    };
    _is.deepIdentical = _is.deepIdenticalTo;  // alias

    return _is;
};



var are = function(objs) {

    // Sanity
    if (arguments.length != 1) {
        console.warn('Ontology.js: invalid arguments for are()');
        return undefined;
    };
    if (!is(objs).array()) {
        console.warn('Ontology.js: must pass an Array as argument for are()');
        return undefined;
    }

    // Private properties
    // var self = this,
    //     args = obj,
    //     len = args.length;

    var typesMap = {
        'null': 'nullObjs',
        'undefined': 'undefinedObjs',
        'nan': 'NaNObjs',
        'boolean': 'booleans',
        'number': 'numbers',
        'function': 'functions',
        'string': 'strings',
        'array': 'arrays',
        'object': 'objects'
    };


    var _are = {};  // the main returned object
    _are.args = objs;
    var len = objs.length;  // this should probably be deprecated and do this.args.length, in case the user manually reassigns are.args = [...] ?

    _are.nullObjs = function() {
        for (var i = 0; i < len; i++) {
            if ( !is(this.args[i]).nullObj() ) return false;
        }
        return true;
    };
    _are.nuls = _are.nullObjs;  // alias
    _are.nulls = _are.nullObjs;  // alias

    _are.undefinedObjs = function() {
        for (var i = 0; i < len; i++) {
            if ( !is(this.args[i]).undefinedObj() ) return false;
        }
        return true;
    };
    _are.undef = _are.undefinedObjs;  // an alias 

    _are.NaNObjs = function() {
        for (var i = 0; i < len; i++) {
            if ( !is(this.args[i]).NaNObj() ) return false;
        }
        return true;
    };
    _are.nans = _are.NaNObjs;  // alias
    _are.NaNs = _are.NaNObjs;  // alias

    _are.booleans = function() {
        for (var i = 0; i < len; i++) {
            if ( !is(this.args[i]).boolean() ) return false;
        }
        return true;
    };

    _are.numbers = function() {
        for (var i = 0; i < len; i++) {
            if ( !is(this.args[i]).number() ) return false;
        }
        return true;
    };

    _are.functions = function() {
        for (var i = 0; i < len; i++) {
            if ( !is(this.args[i]).function() ) return false;
        }
        return true;
    };

    _are.strings = function() {
        for (var i = 0; i < len; i++) {
            if ( !is(this.args[i]).string() ) return false;
        }
        return true;
    };

    _are.arrays = function() {
        for (var i = 0; i < len; i++) {
            if ( !is(this.args[i]).array() ) return false;
        }
        return true;
    };

    _are.objects = function() {
        for (var i = 0; i < len; i++) {
            if ( !is(this.args[i]).object() ) return false;
        }
        return true;
    };

    /**
     * Checks if objects are either string, number, Noolean, null or undefined
     * @return {boolean}
     * @ref https://developer.mozilla.org/en-US/docs/Glossary/Primitive
     */
    _are.primitives = function() {
        return this.either('boolean', 'number', 'string', 'null', 'undefined');
    };


    /**
     * Checks if the objects are of the specified data type, using string representation
     * @param  {string} type
     * @return {boolean}
     */
    _are.ofTypes = function(type) {
        if (!typesMap[type]) {
            console.warn('Ontology.js: unrecognized data type "' + type 
                    + '" for are().ofTypes()');
            return false;
        }
        for (var i = 0; i < len; i++) {
            if ( !is(this.args[i]).ofType(type) ) return false;
        }
        return true;
    };
    _are.types = _are.ofTypes;  // alias

    /**
     * Checks if no one object is of the specified data type, using string representation
     * @param  {string} type
     * @return {boolean}
     */
    _are.notType = function(type) {
        if (!typesMap[type]) {
            console.warn('Ontology.js: unrecognized data type "' + type 
                    + '" for are().not()');
            return true;
        }
        for (var i = 0; i < len; i++) {
            if ( is(this.args[i]).ofType(type) ) return false;
        }
        return true;
    };

    /**
     * Checks if each object is of any of the specified data types
     * @param  {string [, ...]} types 
     * @return {boolean}
     */
    _are.either = function(types) {
        var a = arguments, al = a.length;
        for (var i = 0; i < al; i++) {
            if (!typesMap[a[i]]) {
                console.warn('Ontology.js: unrecognized data type "' + a[i] 
                        + '" for are().either()');
                return false;
            }
        }
        for (var i = 0; i < len; i++) {
            var flag = false;
            for (var j = 0; j < al; j++) {
                if ( is(this.args[i]).ofType(a[j]) ) {
                    flag = true;
                    break;
                }
            }
            if (!flag) return false;
        }   
        return true;
    };

    /**
     * Checks that no object is of any of the specified data types
     * @param  {string [, ...]} types 
     * @return {boolean}
     */
    _are.neither = function(types) {
        var a = arguments, al = a.length;
        for (var i = 0; i < al; i++) {
            if (!typesMap[a[i]]) {
                console.warn('Ontology.js: unrecognized data type "' + a[i] 
                        + '" for are().either()');
                return false;
            }
        }
        for (var i = 0; i < len; i++) {
            var flag = false;
            for (var j = 0; j < al; j++) {
                if ( is(this.args[i]).ofType(a[j]) ) {
                    flag = true;
                    break;
                }
            }
            if (flag) return false;
        }   
        return true;
    };


    /**
     * Checks that all objects are equal '=='
     * @param  {array} others
     * @return {boolean}
     * @ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality_%28.3D.3D%29
     */
    _are.equalTo = function(others) {
        var olen = others.length;
        if (len != olen) {
            // console.warn('Ontology.js: arrays with different legths for are().equalTo()');
            return false;
        }
        for (var i = 0; i < len; i++) {
            if (this.args[i] != others[i]) return false;
        }
        return true;
    };
    _are.equal = _are.equalTo;

    /**
     * Checks if ALL OBJECTS are not equal '!='. 
     * Returns false if any two are equal.
     * This behavior is opposed to checking if any two objects are unequal, 
     *     which is implied in !are().equal()
     * @param  {array} others
     * @return {boolean}
     * @ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Inequality_%28!.3D%29
     */
    _are.notEqualTo = function(others) {
        var olen = others.length;
        if (len != olen) {
            // console.warn('Ontology.js: arrays with different legths for are().notEqualTo()');
            return true;
        }
        for (var i = 0; i < len; i++) {
            if (this.args[i] == others[i]) return false;
        }
        return true;
    };
    _are.notEqual = _are.notEqualTo;  // alias


    /**
     * Checks for strict equality with no type conversion '==='
     * @param  {array} others
     * @return {boolean}
     * @ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity_.2F_strict_equality_%28.3D.3D.3D%29
     */
    _are.identicalTo = function(others) {
        var olen = others.length;
        if (len != olen) {
            return false;
        }
        for (var i = 0; i < len; i++) {
            if (this.args[i] !== others[i]) return false;
        }
        return true;
    };
    _are.identical = _are.identicalTo;  // alias

    /**
     * Checks if ALL OBJECTS are not identical '!=='. 
     * Returns false if any two are.
     * This behavior is opposed to checking if any two objects are not identical, 
     *     which is implied in !are().identical()
     * @param  {array} others
     * @return {boolean}
     * @ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Non-identity_.2F_strict_not_equal_%28!.3D.3D%29
     */
    _are.notIdenticalTo = function(others) {
        var olen = others.length;
        if (len != olen) {
            return true;
        }
        for (var i = 0; i < len; i++) {
            if (this.args[i] === others[i]) return false;
        }
        return true;
    };
    _are.notIdentical = _are.notIdenticalTo;  // alias

    /**
     * Checks if ALL OBJECTS are deeply identical
     * Implements Underscore's deep equality check
     * @param  {array} others
     * @return {boolean}
     * @ref http://underscorejs.org/docs/underscore.html#section-134
     */
    _are.deepIdenticalTo = function(others) {
        var olen = others.length;
        if (len != olen) {
            return false;
        }
        for (var i = 0; i < len; i++) {
            if (!is(this.args[i]).deepIdenticalTo(others[i])) return false;
        }
        return true;
    };
    _are.deepIdentical = _are.deepIdenticalTo;  // alias

    return _are;
};



var has = function(obj) {

    // Sanity
    if (arguments.length != 1) {
        console.warn('Ontology.js: invalid arguments for has()');
        return undefined;
    };

    // Private properties


    var _has = {};  // the main returned object
    _has.arg = obj;

    /**
     * From _.has
     * @param  {string} prop
     * @return {boolean}
     */
    _has.property = function(prop) {
        return this.arg != null && Object.prototype.hasOwnProperty.call(this.arg, prop);
    };
    _has.prop = _has.property;  // alias
    _has.key = _has.property;   // alias


    return _has;
};