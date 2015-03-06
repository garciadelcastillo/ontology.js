


var is = function(obj) {

    // Sanity
    if (arguments.length != 1) {
        console.warn('Ontology.js: invalid arguments for is()');
        return undefined;
    };

    // Private properties
    var self = this,
        arg = obj;  // wouldn't really need this, since obj gets scoped! I <3 JS :)
    
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
     * Underscore's implementations of _.isNull, _isUndefined, _isBoolean...
     */
    this.nullObj = function() {
        return arg === null;
    };
    this.nul = this.nullObj;  // an alias

    this.undefinedObj = function() {
        return arg === void 0;
    };
    this.undef = this.undefinedObj;  // an alias 

    this.NaNObj = function() {
        return this.number() && arg !== +arg; 
    };
    this.nan = this.NaNObj;  // an alias

    this.boolean = function() {
        return arg === true || arg === false || toString.call(arg) === '[object Boolean]';
    };

    this.number = function() {
        return toString.call(arg) === '[object Number]';
    };

    this.function = function() {
        return toString.call(arg) === '[object Function]';
    };

    this.string = function() {
        return toString.call(arg) === '[object String]';
    };

    this.array = function() {
        if (Array.isArray) return Array.isArray(arg);  // first try ECMAScript 5 native
        return toString.call(arg) === '[object Array]';  // else compare array
    };

    this.object = function() {
        return Object.prototype.toString.call(arg) === '[object Object]'
    };


    /**
     * Checks if object is of type string, number, Noolean, null or undefined
     * @return {boolean}
     * @ref https://developer.mozilla.org/en-US/docs/Glossary/Primitive
     */
    this.primitive = function() {
        return this.either('boolean', 'number', 'string', 'null', 'undefined');
    };

    /**
     * Checks if the object is of the specified data type, using string representation
     * @param  {string} type
     * @return {boolean}
     */
    this.ofType = function(type) {
        if (!typesMap[type]) {
            console.warn('Ontology.js: unrecognized data type "' + type 
                    + '" for is().ofType()');
            return false;
        }
        return this[typesMap[type]]();
    };

    /**
     * Checks if the object is not of the specified data type, using string representation
     * @param  {string} type
     * @return {boolean}
     */
    this.not = function(type) {
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
    this.either = function(types) {
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
     * Checks if object is not of any of the pecified data types
     * @param  {string [, ...]} types 
     * @return {boolean} 
     */
    this.neither = function(types) {
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

    return this;
};



var are = function(obj) {

    // Sanity
    if (arguments.length != 1) {
        console.warn('Ontology.js: invalid arguments for are()');
        return undefined;
    };
    if (!is(obj).array()) {
        console.warn('Ontology.js: must pass an Array as argument for are()');
        return undefined;
    }

    // Private properties
    var self = this,
        args = obj,
        len = args.length;

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




    this.nullObjs = function() {
        for (var i = 0; i < len; i++) {
            if ( !is(args[i]).nullObj() ) return false;
        }
        return true;
    };
    this.nuls = this.nullObjs;  // alias
    this.nulls = this.nullObjs;  // alias

    this.undefinedObjs = function() {
        for (var i = 0; i < len; i++) {
            if ( !is(args[i]).undefinedObj() ) return false;
        }
        return true;
    };
    this.undef = this.undefinedObjs;  // an alias 

    this.NaNObjs = function() {
        for (var i = 0; i < len; i++) {
            if ( !is(args[i]).NaNObj() ) return false;
        }
        return true;
    };
    this.nans = this.NaNObjs;  // alias
    this.NaNs = this.NaNObjs;  // alias

    this.booleans = function() {
        for (var i = 0; i < len; i++) {
            if ( !is(args[i]).boolean() ) return false;
        }
        return true;
    };

    this.numbers = function() {
        for (var i = 0; i < len; i++) {
            if ( !is(args[i]).number() ) return false;
        }
        return true;
    };

    this.functions = function() {
        for (var i = 0; i < len; i++) {
            if ( !is(args[i]).function() ) return false;
        }
        return true;
    };

    this.strings = function() {
        for (var i = 0; i < len; i++) {
            if ( !is(args[i]).string() ) return false;
        }
        return true;
    };

    this.arrays = function() {
        for (var i = 0; i < len; i++) {
            if ( !is(args[i]).array() ) return false;
        }
        return true;
    };

    this.objects = function() {
        for (var i = 0; i < len; i++) {
            if ( !is(args[i]).object() ) return false;
        }
        return true;
    };

    /**
     * Checks if objects are either string, number, Noolean, null or undefined
     * @return {boolean}
     * @ref https://developer.mozilla.org/en-US/docs/Glossary/Primitive
     */
    this.primitives = function() {
        //return this.either('boolean', 'number', 'string', 'null', 'undefined');
    };


    /**
     * Checks if the objects are of the specified data type, using string representation
     * @param  {string} type
     * @return {boolean}
     */
    this.ofTypes = function(type) {
        if (!typesMap[type]) {
            console.warn('Ontology.js: unrecognized data type "' + type 
                    + '" for are().ofTypes()');
            return false;
        }
        for (var i = 0; i < len; i++) {
            if ( !is(args[i]).ofType(type) ) return false;
        }
        return true;
    };

    /**
     * Checks if no one object is of the specified data type, using string representation
     * @param  {string} type
     * @return {boolean}
     */
    this.not = function(type) {
        if (!typesMap[type]) {
            console.warn('Ontology.js: unrecognized data type "' + type 
                    + '" for are().not()');
            return true;
        }
        for (var i = 0; i < len; i++) {
            if ( is(args[i]).ofType(type) ) return false;
        }
        return true;
    };

    /**
     * Checks if each object is of any of the specified data types
     * @param  {string [, ...]} types 
     * @return {boolean}
     */
    this.either = function(types) {
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
                if ( is(args[i]).ofType(a[j]) ) {
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
    this.neither = function(types) {
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
                if ( is(args[i]).ofType(a[j]) ) {
                    flag = true;
                    break;
                }
            }
            if (flag) return false;
        }   
        return true;
    };



    return this;
};