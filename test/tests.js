var should = require('should'), 
    ont = require('../test/ontology.js');





// ██████╗  █████╗ ███████╗██╗ ██████╗    ████████╗██╗   ██╗██████╗ ███████╗███████╗
// ██╔══██╗██╔══██╗██╔════╝██║██╔════╝    ╚══██╔══╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔════╝
// ██████╔╝███████║███████╗██║██║            ██║    ╚████╔╝ ██████╔╝█████╗  ███████╗
// ██╔══██╗██╔══██║╚════██║██║██║            ██║     ╚██╔╝  ██╔═══╝ ██╔══╝  ╚════██║
// ██████╔╝██║  ██║███████║██║╚██████╗       ██║      ██║   ██║     ███████╗███████║
// ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝ ╚═════╝       ╚═╝      ╚═╝   ╚═╝     ╚══════╝╚══════╝

describe("is().nullObj()", function() {

  it('returns correct result', function() {

    var fun = 'nullObj';

    // null
    should.equal(  true, ont.is( null )[fun]() );

    // undefined
    should.equal( false, ont.is( undefined )[fun]() );

    // NaN
    should.equal( false, ont.is( NaN )[fun]() );

    // boolean
    should.equal( false, ont.is( false )[fun]() );
    should.equal( false, ont.is( true )[fun]() );

    // number
    should.equal( false, ont.is(  0 )[fun]() );
    should.equal( false, ont.is( +0 )[fun]() );
    should.equal( false, ont.is( -0 )[fun]() );
    should.equal( false, ont.is(  1 )[fun]() );
    should.equal( false, ont.is( -1 )[fun]() );

    // function
    should.equal( false, ont.is( function(){} )[fun]() );

    // string
    should.equal( false, ont.is(          'foo' )[fun]() );
    should.equal( false, ont.is(         'null' )[fun]() );
    should.equal( false, ont.is(    'undefined' )[fun]() );
    should.equal( false, ont.is(          'NaN' )[fun]() );
    should.equal( false, ont.is(        'false' )[fun]() );
    should.equal( false, ont.is(         'true' )[fun]() );
    should.equal( false, ont.is(            '0' )[fun]() );
    should.equal( false, ont.is(           '+0' )[fun]() );
    should.equal( false, ont.is(           '-0' )[fun]() );
    should.equal( false, ont.is(            '1' )[fun]() );
    should.equal( false, ont.is( 'function(){}' )[fun]() );
    should.equal( false, ont.is(           '[]' )[fun]() );
    should.equal( false, ont.is(           '{}' )[fun]() );

    // array
    should.equal( false, ont.is( [] )[fun]() );

    // object
    should.equal( false, ont.is( {} )[fun]() );

  });

});


describe("is().undefinedObj()", function() {

  it('returns correct result', function() {

    var fun = 'undefinedObj';

    // null
    should.equal( false, ont.is( null )[fun]() );

    // undefined
    should.equal(  true, ont.is( undefined )[fun]() );

    // NaN
    should.equal( false, ont.is( NaN )[fun]() );

    // boolean
    should.equal( false, ont.is( false )[fun]() );
    should.equal( false, ont.is( true )[fun]() );

    // number
    should.equal( false, ont.is(  0 )[fun]() );
    should.equal( false, ont.is( +0 )[fun]() );
    should.equal( false, ont.is( -0 )[fun]() );
    should.equal( false, ont.is(  1 )[fun]() );
    should.equal( false, ont.is( -1 )[fun]() );

    // function
    should.equal( false, ont.is( function(){} )[fun]() );

    // string
    should.equal( false, ont.is(          'foo' )[fun]() );
    should.equal( false, ont.is(         'null' )[fun]() );
    should.equal( false, ont.is(    'undefined' )[fun]() );
    should.equal( false, ont.is(          'NaN' )[fun]() );
    should.equal( false, ont.is(        'false' )[fun]() );
    should.equal( false, ont.is(         'true' )[fun]() );
    should.equal( false, ont.is(            '0' )[fun]() );
    should.equal( false, ont.is(           '+0' )[fun]() );
    should.equal( false, ont.is(           '-0' )[fun]() );
    should.equal( false, ont.is(            '1' )[fun]() );
    should.equal( false, ont.is( 'function(){}' )[fun]() );
    should.equal( false, ont.is(           '[]' )[fun]() );
    should.equal( false, ont.is(           '{}' )[fun]() );

    // array
    should.equal( false, ont.is( [] )[fun]() );

    // object
    should.equal( false, ont.is( {} )[fun]() );

  });

});


describe("is().NaNObj()", function() {

  it('returns correct result', function() {

    var fun = 'NaNObj';

    // null
    should.equal( false, ont.is( null )[fun]() );

    // undefined
    should.equal( false, ont.is( undefined )[fun]() );

    // NaN
    should.equal(  true, ont.is( NaN )[fun]() );

    // boolean
    should.equal( false, ont.is( false )[fun]() );
    should.equal( false, ont.is( true )[fun]() );

    // number
    should.equal( false, ont.is(  0 )[fun]() );
    should.equal( false, ont.is( +0 )[fun]() );
    should.equal( false, ont.is( -0 )[fun]() );
    should.equal( false, ont.is(  1 )[fun]() );
    should.equal( false, ont.is( -1 )[fun]() );

    // function
    should.equal( false, ont.is( function(){} )[fun]() );

    // string
    should.equal( false, ont.is(          'foo' )[fun]() );
    should.equal( false, ont.is(         'null' )[fun]() );
    should.equal( false, ont.is(    'undefined' )[fun]() );
    should.equal( false, ont.is(          'NaN' )[fun]() );
    should.equal( false, ont.is(        'false' )[fun]() );
    should.equal( false, ont.is(         'true' )[fun]() );
    should.equal( false, ont.is(            '0' )[fun]() );
    should.equal( false, ont.is(           '+0' )[fun]() );
    should.equal( false, ont.is(           '-0' )[fun]() );
    should.equal( false, ont.is(            '1' )[fun]() );
    should.equal( false, ont.is( 'function(){}' )[fun]() );
    should.equal( false, ont.is(           '[]' )[fun]() );
    should.equal( false, ont.is(           '{}' )[fun]() );

    // array
    should.equal( false, ont.is( [] )[fun]() );

    // object
    should.equal( false, ont.is( {} )[fun]() );

  });

});


describe("is().boolean()", function() {

  it('returns correct result', function() {

    var fun = 'boolean';

    // null
    should.equal( false, ont.is( null )[fun]() );

    // undefined
    should.equal( false, ont.is( undefined )[fun]() );

    // NaN
    should.equal( false, ont.is( NaN )[fun]() );

    // boolean
    should.equal(  true, ont.is( false )[fun]() );
    should.equal(  true, ont.is( true )[fun]() );

    // number
    should.equal( false, ont.is(  0 )[fun]() );
    should.equal( false, ont.is( +0 )[fun]() );
    should.equal( false, ont.is( -0 )[fun]() );
    should.equal( false, ont.is(  1 )[fun]() );
    should.equal( false, ont.is( -1 )[fun]() );

    // function
    should.equal( false, ont.is( function(){} )[fun]() );

    // string
    should.equal( false, ont.is(          'foo' )[fun]() );
    should.equal( false, ont.is(         'null' )[fun]() );
    should.equal( false, ont.is(    'undefined' )[fun]() );
    should.equal( false, ont.is(          'NaN' )[fun]() );
    should.equal( false, ont.is(        'false' )[fun]() );
    should.equal( false, ont.is(         'true' )[fun]() );
    should.equal( false, ont.is(            '0' )[fun]() );
    should.equal( false, ont.is(           '+0' )[fun]() );
    should.equal( false, ont.is(           '-0' )[fun]() );
    should.equal( false, ont.is(            '1' )[fun]() );
    should.equal( false, ont.is( 'function(){}' )[fun]() );
    should.equal( false, ont.is(           '[]' )[fun]() );
    should.equal( false, ont.is(           '{}' )[fun]() );

    // array
    should.equal( false, ont.is( [] )[fun]() );

    // object
    should.equal( false, ont.is( {} )[fun]() );

  });

});


describe("is().number()", function() {

  it('returns correct result', function() {

    var fun = 'number';

    // null
    should.equal( false, ont.is( null )[fun]() );

    // undefined
    should.equal( false, ont.is( undefined )[fun]() );

    // NaN
    should.equal(  true, ont.is( NaN )[fun]() );  // http://stackoverflow.com/a/2801617/1934487 

    // boolean
    should.equal( false, ont.is( false )[fun]() );
    should.equal( false, ont.is( true )[fun]() );

    // number
    should.equal(  true, ont.is(  0 )[fun]() );
    should.equal(  true, ont.is( +0 )[fun]() );
    should.equal(  true, ont.is( -0 )[fun]() );
    should.equal(  true, ont.is(  1 )[fun]() );
    should.equal(  true, ont.is( -1 )[fun]() );

    // function
    should.equal( false, ont.is( function(){} )[fun]() );

    // string
    should.equal( false, ont.is(          'foo' )[fun]() );
    should.equal( false, ont.is(         'null' )[fun]() );
    should.equal( false, ont.is(    'undefined' )[fun]() );
    should.equal( false, ont.is(          'NaN' )[fun]() );
    should.equal( false, ont.is(        'false' )[fun]() );
    should.equal( false, ont.is(         'true' )[fun]() );
    should.equal( false, ont.is(            '0' )[fun]() );
    should.equal( false, ont.is(           '+0' )[fun]() );
    should.equal( false, ont.is(           '-0' )[fun]() );
    should.equal( false, ont.is(            '1' )[fun]() );
    should.equal( false, ont.is( 'function(){}' )[fun]() );
    should.equal( false, ont.is(           '[]' )[fun]() );
    should.equal( false, ont.is(           '{}' )[fun]() );

    // array
    should.equal( false, ont.is( [] )[fun]() );

    // object
    should.equal( false, ont.is( {} )[fun]() );

  });

});


describe("is().function()", function() {

  it('returns correct result', function() {

    var fun = 'function';

    // null
    should.equal( false, ont.is( null )[fun]() );

    // undefined
    should.equal( false, ont.is( undefined )[fun]() );

    // NaN
    should.equal( false, ont.is( NaN )[fun]() );

    // boolean
    should.equal( false, ont.is( false )[fun]() );
    should.equal( false, ont.is( true )[fun]() );

    // number
    should.equal( false, ont.is(  0 )[fun]() );
    should.equal( false, ont.is( +0 )[fun]() );
    should.equal( false, ont.is( -0 )[fun]() );
    should.equal( false, ont.is(  1 )[fun]() );
    should.equal( false, ont.is( -1 )[fun]() );

    // function
    should.equal(  true, ont.is( function(){} )[fun]() );

    // string
    should.equal( false, ont.is(          'foo' )[fun]() );
    should.equal( false, ont.is(         'null' )[fun]() );
    should.equal( false, ont.is(    'undefined' )[fun]() );
    should.equal( false, ont.is(          'NaN' )[fun]() );
    should.equal( false, ont.is(        'false' )[fun]() );
    should.equal( false, ont.is(         'true' )[fun]() );
    should.equal( false, ont.is(            '0' )[fun]() );
    should.equal( false, ont.is(           '+0' )[fun]() );
    should.equal( false, ont.is(           '-0' )[fun]() );
    should.equal( false, ont.is(            '1' )[fun]() );
    should.equal( false, ont.is( 'function(){}' )[fun]() );
    should.equal( false, ont.is(           '[]' )[fun]() );
    should.equal( false, ont.is(           '{}' )[fun]() );

    // array
    should.equal( false, ont.is( [] )[fun]() );

    // object
    should.equal( false, ont.is( {} )[fun]() );

  });

});


describe("is().string()", function() {

  it('returns correct result', function() {

    var fun = 'string';

    // null
    should.equal( false, ont.is( null )[fun]() );

    // undefined
    should.equal( false, ont.is( undefined )[fun]() );

    // NaN
    should.equal( false, ont.is( NaN )[fun]() );

    // boolean
    should.equal( false, ont.is( false )[fun]() );
    should.equal( false, ont.is( true )[fun]() );

    // number
    should.equal( false, ont.is(  0 )[fun]() );
    should.equal( false, ont.is( +0 )[fun]() );
    should.equal( false, ont.is( -0 )[fun]() );
    should.equal( false, ont.is(  1 )[fun]() );
    should.equal( false, ont.is( -1 )[fun]() );

    // function
    should.equal( false, ont.is( function(){} )[fun]() );

    // string
    should.equal(  true, ont.is(          'foo' )[fun]() );
    should.equal(  true, ont.is(         'null' )[fun]() );
    should.equal(  true, ont.is(    'undefined' )[fun]() );
    should.equal(  true, ont.is(          'NaN' )[fun]() );
    should.equal(  true, ont.is(        ' true' )[fun]() );
    should.equal(  true, ont.is(         'true' )[fun]() );
    should.equal(  true, ont.is(            '0' )[fun]() );
    should.equal(  true, ont.is(           '+0' )[fun]() );
    should.equal(  true, ont.is(           '-0' )[fun]() );
    should.equal(  true, ont.is(            '1' )[fun]() );
    should.equal(  true, ont.is( 'function(){}' )[fun]() );
    should.equal(  true, ont.is(           '[]' )[fun]() );
    should.equal(  true, ont.is(           '{}' )[fun]() );

    // array
    should.equal( false, ont.is( [] )[fun]() );

    // object
    should.equal( false, ont.is( {} )[fun]() );

  });

});


describe("is().array()", function() {

  it('returns correct result', function() {

    var fun = 'array';

    // null
    should.equal( false, ont.is( null )[fun]() );

    // undefined
    should.equal( false, ont.is( undefined )[fun]() );

    // NaN
    should.equal( false, ont.is( NaN )[fun]() );

    // boolean
    should.equal( false, ont.is( false )[fun]() );
    should.equal( false, ont.is( true )[fun]() );

    // number
    should.equal( false, ont.is(  0 )[fun]() );
    should.equal( false, ont.is( +0 )[fun]() );
    should.equal( false, ont.is( -0 )[fun]() );
    should.equal( false, ont.is(  1 )[fun]() );
    should.equal( false, ont.is( -1 )[fun]() );

    // function
    should.equal( false, ont.is( function(){} )[fun]() );

    // string
    should.equal( false, ont.is(          'foo' )[fun]() );
    should.equal( false, ont.is(         'null' )[fun]() );
    should.equal( false, ont.is(    'undefined' )[fun]() );
    should.equal( false, ont.is(          'NaN' )[fun]() );
    should.equal( false, ont.is(        'false' )[fun]() );
    should.equal( false, ont.is(         'true' )[fun]() );
    should.equal( false, ont.is(            '0' )[fun]() );
    should.equal( false, ont.is(           '+0' )[fun]() );
    should.equal( false, ont.is(           '-0' )[fun]() );
    should.equal( false, ont.is(            '1' )[fun]() );
    should.equal( false, ont.is( 'function(){}' )[fun]() );
    should.equal( false, ont.is(           '[]' )[fun]() );
    should.equal( false, ont.is(           '{}' )[fun]() );

    // array
    should.equal(  true, ont.is( [] )[fun]() );

    // object
    should.equal( false, ont.is( {} )[fun]() );

  });

});


describe("is().object()", function() {

  it('returns correct result', function() {

    var fun = 'object';

    // null
    should.equal( false, ont.is( null )[fun]() );

    // undefined
    should.equal( false, ont.is( undefined )[fun]() );

    // NaN
    should.equal( false, ont.is( NaN )[fun]() );

    // boolean
    should.equal( false, ont.is( false )[fun]() );
    should.equal( false, ont.is( true )[fun]() );

    // number
    should.equal( false, ont.is(  0 )[fun]() );
    should.equal( false, ont.is( +0 )[fun]() );
    should.equal( false, ont.is( -0 )[fun]() );
    should.equal( false, ont.is(  1 )[fun]() );
    should.equal( false, ont.is( -1 )[fun]() );

    // function
    should.equal( false, ont.is( function(){} )[fun]() );

    // string
    should.equal( false, ont.is(          'foo' )[fun]() );
    should.equal( false, ont.is(         'null' )[fun]() );
    should.equal( false, ont.is(    'undefined' )[fun]() );
    should.equal( false, ont.is(          'NaN' )[fun]() );
    should.equal( false, ont.is(        'false' )[fun]() );
    should.equal( false, ont.is(         'true' )[fun]() );
    should.equal( false, ont.is(            '0' )[fun]() );
    should.equal( false, ont.is(           '+0' )[fun]() );
    should.equal( false, ont.is(           '-0' )[fun]() );
    should.equal( false, ont.is(            '1' )[fun]() );
    should.equal( false, ont.is( 'function(){}' )[fun]() );
    should.equal( false, ont.is(           '[]' )[fun]() );
    should.equal( false, ont.is(           '{}' )[fun]() );

    // array
    should.equal( false, ont.is( [] )[fun]() );

    // object
    should.equal(  true, ont.is( {} )[fun]() );

  });

});


// ██████╗ ██████╗ ██╗███╗   ███╗██╗████████╗██╗██╗   ██╗███████╗
// ██╔══██╗██╔══██╗██║████╗ ████║██║╚══██╔══╝██║██║   ██║██╔════╝
// ██████╔╝██████╔╝██║██╔████╔██║██║   ██║   ██║██║   ██║█████╗  
// ██╔═══╝ ██╔══██╗██║██║╚██╔╝██║██║   ██║   ██║╚██╗ ██╔╝██╔══╝  
// ██║     ██║  ██║██║██║ ╚═╝ ██║██║   ██║   ██║ ╚████╔╝ ███████╗
// ╚═╝     ╚═╝  ╚═╝╚═╝╚═╝     ╚═╝╚═╝   ╚═╝   ╚═╝  ╚═══╝  ╚══════╝

describe("is().primitive()", function() {

  it('returns correct result', function() {

    var fun = 'primitive';

    // null
    should.equal(  true, ont.is( null )[fun]() );

    // undefined
    should.equal(  true, ont.is( undefined )[fun]() );

    // NaN
    should.equal(  true, ont.is( NaN )[fun]() );  // http://stackoverflow.com/a/2801617/1934487 

    // boolean
    should.equal(  true, ont.is( false )[fun]() );
    should.equal(  true, ont.is( true )[fun]() );

    // number
    should.equal(  true, ont.is(  0 )[fun]() );
    should.equal(  true, ont.is( +0 )[fun]() );
    should.equal(  true, ont.is( -0 )[fun]() );
    should.equal(  true, ont.is(  1 )[fun]() );
    should.equal(  true, ont.is( -1 )[fun]() );

    // function
    should.equal( false, ont.is( function(){} )[fun]() );

    // string
    should.equal(  true, ont.is(          'foo' )[fun]() );
    should.equal(  true, ont.is(         'null' )[fun]() );
    should.equal(  true, ont.is(    'undefined' )[fun]() );
    should.equal(  true, ont.is(          'NaN' )[fun]() );
    should.equal(  true, ont.is(        ' true' )[fun]() );
    should.equal(  true, ont.is(         'true' )[fun]() );
    should.equal(  true, ont.is(            '0' )[fun]() );
    should.equal(  true, ont.is(           '+0' )[fun]() );
    should.equal(  true, ont.is(           '-0' )[fun]() );
    should.equal(  true, ont.is(            '1' )[fun]() );
    should.equal(  true, ont.is( 'function(){}' )[fun]() );
    should.equal(  true, ont.is(           '[]' )[fun]() );
    should.equal(  true, ont.is(           '{}' )[fun]() );

    // array
    should.equal( false, ont.is( [] )[fun]() );

    // object
    should.equal( false, ont.is( {} )[fun]() );

  });

});

