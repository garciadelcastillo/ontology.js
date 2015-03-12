var should = require('should'), 
    ont = require('../test/ontology.js');





// ██╗███████╗
// ██║██╔════╝
// ██║███████╗
// ██║╚════██║
// ██║███████║
// ╚═╝╚══════╝



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
    should.equal( false, ont.is(  true )[fun]() );

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
    should.equal( false, ont.is(  true )[fun]() );

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
    should.equal(  true, ont.is(  true )[fun]() );

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
    should.equal( false, ont.is(  true )[fun]() );

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
    should.equal( false, ont.is(  true )[fun]() );

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
    should.equal( false, ont.is(  true )[fun]() );

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
    should.equal(  true, ont.is(  true )[fun]() );

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




//  ██████╗ ███████╗████████╗██╗   ██╗██████╗ ███████╗
// ██╔═══██╗██╔════╝╚══██╔══╝╚██╗ ██╔╝██╔══██╗██╔════╝
// ██║   ██║█████╗     ██║    ╚████╔╝ ██████╔╝█████╗  
// ██║   ██║██╔══╝     ██║     ╚██╔╝  ██╔═══╝ ██╔══╝  
// ╚██████╔╝██║        ██║      ██║   ██║     ███████╗
//  ╚═════╝ ╚═╝        ╚═╝      ╚═╝   ╚═╝     ╚══════╝
describe("is().ofType()", function() {

  it('returns correct result', function() {

    // since basic unit types have been tested, 
    // this test will only care about testing type string representation 

    // remember:
    // var typesMap = {
    //     'null': 'nullObj',
    //     'undefined': 'undefinedObj',
    //     'nan': 'NaNObj',
    //     'boolean': 'boolean',
    //     'number': 'number',
    //     'function': 'function',
    //     'string': 'string',
    //     'array': 'array',
    //     'object': 'object'
    // };

    var fun = 'ofType';

    // null
    should.equal(  true, ont.is( null )[fun]( 'null' ) );

    // undefined
    should.equal(  true, ont.is( undefined )[fun]( 'undefined' ) );

    // NaN
    should.equal(  true, ont.is( NaN )[fun]( 'nan' ) );  

    // boolean
    should.equal(  true, ont.is( false )[fun]( 'boolean' ) );
    should.equal(  true, ont.is(  true )[fun]( 'boolean' ) );

    // number
    should.equal(  true, ont.is(  0 )[fun]( 'number' ) );
    should.equal(  true, ont.is( +0 )[fun]( 'number' ) );
    should.equal(  true, ont.is( -0 )[fun]( 'number' ) );
    should.equal(  true, ont.is(  1 )[fun]( 'number' ) );
    should.equal(  true, ont.is( -1 )[fun]( 'number' ) );

    // function
    should.equal(  true, ont.is( function(){} )[fun]( 'function' ) );

    // string
    should.equal(  true, ont.is(          'foo' )[fun]( 'string' ) );
    should.equal(  true, ont.is(         'null' )[fun]( 'string' ) );
    should.equal(  true, ont.is(    'undefined' )[fun]( 'string' ) );
    should.equal(  true, ont.is(          'NaN' )[fun]( 'string' ) );
    should.equal(  true, ont.is(        ' true' )[fun]( 'string' ) );
    should.equal(  true, ont.is(         'true' )[fun]( 'string' ) );
    should.equal(  true, ont.is(            '0' )[fun]( 'string' ) );
    should.equal(  true, ont.is(           '+0' )[fun]( 'string' ) );
    should.equal(  true, ont.is(           '-0' )[fun]( 'string' ) );
    should.equal(  true, ont.is(            '1' )[fun]( 'string' ) );
    should.equal(  true, ont.is( 'function(){}' )[fun]( 'string' ) );
    should.equal(  true, ont.is(           '[]' )[fun]( 'string' ) );
    should.equal(  true, ont.is(           '{}' )[fun]( 'string' ) );

    // array
    should.equal(  true, ont.is( [] )[fun]( 'array' ) );

    // object
    should.equal(  true, ont.is( {} )[fun]( 'object' ) );

  });

});


describe("is().notOfType()", function() {

  it('returns correct result', function() {

    // since basic unit types have been tested, 
    // this test will only care about testing type string representation 

    // remember:
    // var typesMap = {
    //     'null': 'nullObj',
    //     'undefined': 'undefinedObj',
    //     'nan': 'NaNObj',
    //     'boolean': 'boolean',
    //     'number': 'number',
    //     'function': 'function',
    //     'string': 'string',
    //     'array': 'array',
    //     'object': 'object'
    // };

    var fun = 'notOfType';

    // null
    should.equal( false, ont.is( null )[fun]( 'null' ) );

    // undefined
    should.equal( false, ont.is( undefined )[fun]( 'undefined' ) );

    // NaN
    should.equal( false, ont.is( NaN )[fun]( 'nan' ) ); 

    // boolean
    should.equal( false, ont.is( false )[fun]( 'boolean' ) );
    should.equal( false, ont.is(  true )[fun]( 'boolean' ) );

    // number
    should.equal( false, ont.is(  0 )[fun]( 'number' ) );
    should.equal( false, ont.is( +0 )[fun]( 'number' ) );
    should.equal( false, ont.is( -0 )[fun]( 'number' ) );
    should.equal( false, ont.is(  1 )[fun]( 'number' ) );
    should.equal( false, ont.is( -1 )[fun]( 'number' ) );

    // function
    should.equal( false, ont.is( function(){} )[fun]( 'function' ) );

    // string
    should.equal( false, ont.is(          'foo' )[fun]( 'string' ) );
    should.equal( false, ont.is(         'null' )[fun]( 'string' ) );
    should.equal( false, ont.is(    'undefined' )[fun]( 'string' ) );
    should.equal( false, ont.is(          'NaN' )[fun]( 'string' ) );
    should.equal( false, ont.is(        'false' )[fun]( 'string' ) );
    should.equal( false, ont.is(         'true' )[fun]( 'string' ) );
    should.equal( false, ont.is(            '0' )[fun]( 'string' ) );
    should.equal( false, ont.is(           '+0' )[fun]( 'string' ) );
    should.equal( false, ont.is(           '-0' )[fun]( 'string' ) );
    should.equal( false, ont.is(            '1' )[fun]( 'string' ) );
    should.equal( false, ont.is( 'function(){}' )[fun]( 'string' ) );
    should.equal( false, ont.is(           '[]' )[fun]( 'string' ) );
    should.equal( false, ont.is(           '{}' )[fun]( 'string' ) );

    // array
    should.equal( false, ont.is( [] )[fun]( 'array' ) );

    // object
    should.equal( false, ont.is( {} )[fun]( 'object' ) );

  });

});



// ███████╗██╗████████╗██╗  ██╗███████╗██████╗ 
// ██╔════╝██║╚══██╔══╝██║  ██║██╔════╝██╔══██╗
// █████╗  ██║   ██║   ███████║█████╗  ██████╔╝
// ██╔══╝  ██║   ██║   ██╔══██║██╔══╝  ██╔══██╗
// ███████╗██║   ██║   ██║  ██║███████╗██║  ██║
// ╚══════╝╚═╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
describe("is().either()", function() {

  it('returns correct result', function() {

    // test measures an either against all types and type minus real one

    var fun = 'either';

    // null
    should.equal(  true, ont.is( null )[fun]( 
      'null', 'undefined', 'nan', 'boolean', 'number', 
      'function', 'string', 'array', 'object' ) );
    should.equal( false, ont.is( null )[fun]( 
              'undefined', 'nan', 'boolean', 'number', 
      'function', 'string', 'array', 'object' ) );

    // undefined
    should.equal(  true, ont.is( undefined )[fun](
      'null', 'undefined', 'nan', 'boolean', 'number', 
      'function', 'string', 'array', 'object' ) );
    should.equal( false, ont.is( undefined )[fun](
      'null',              'nan', 'boolean', 'number', 
      'function', 'string', 'array', 'object' ) );

    // NaN
    should.equal(  true, ont.is( NaN )[fun](
      'null', 'undefined', 'nan', 'boolean', 'number', 
      'function', 'string', 'array', 'object' ) );    
    should.equal( false, ont.is( NaN )[fun](
      'null', 'undefined',        'boolean', 
      'function', 'string', 'array', 'object' ) );    

    // boolean
    should.equal(  true, ont.is( false )[fun](
      'null', 'undefined', 'nan', 'boolean', 'number', 
      'function', 'string', 'array', 'object' ) );
    should.equal( false, ont.is( false )[fun](
      'null', 'undefined', 'nan',            'number', 
      'function', 'string', 'array', 'object' ) );

    // number
    should.equal(  true, ont.is( 0 )[fun](
      'null', 'undefined', 'nan', 'boolean', 'number', 
      'function', 'string', 'array', 'object' ) );
    should.equal( false, ont.is( 0 )[fun](
      'null', 'undefined', 'nan', 'boolean',  
      'function', 'string', 'array', 'object' ) );

    // function
    should.equal(  true, ont.is( function(){} )[fun](
      'null', 'undefined', 'nan', 'boolean', 'number', 
      'function', 'string', 'array', 'object' ) );
    should.equal( false, ont.is( function(){} )[fun](
      'null', 'undefined', 'nan', 'boolean', 'number', 
                  'string', 'array', 'object' ) );

    // string
    should.equal(  true, ont.is( 'foo' )[fun](
      'null', 'undefined', 'nan', 'boolean', 'number', 
      'function', 'string', 'array', 'object' ) );
    should.equal( false, ont.is( 'foo' )[fun](
      'null', 'undefined', 'nan', 'boolean', 'number', 
      'function',           'array', 'object' ) );

    // array
    should.equal(  true, ont.is( [] )[fun](
      'null', 'undefined', 'nan', 'boolean', 'number', 
      'function', 'string', 'array', 'object' ) );
    should.equal( false, ont.is( [] )[fun](
      'null', 'undefined', 'nan', 'boolean', 'number', 
      'function', 'string',          'object' ) );

    // object
    should.equal(  true, ont.is( {} )[fun](
      'null', 'undefined', 'nan', 'boolean', 'number', 
      'function', 'string', 'array', 'object' ) );
    should.equal( false, ont.is( {} )[fun](
      'null', 'undefined', 'nan', 'boolean', 'number', 
      'function', 'string', 'array'           ) );

  });

});


describe("is().neither()", function() {

  it('returns correct result', function() {

    // test measures an either against all types and type minus real one

    var fun = 'neither';

    // null
    should.equal( false, ont.is( null )[fun]( 
      'null', 'undefined', 'nan', 'boolean', 'number', 
      'function', 'string', 'array', 'object' ) );
    should.equal(  true, ont.is( null )[fun]( 
              'undefined', 'nan', 'boolean', 'number', 
      'function', 'string', 'array', 'object' ) );

    // undefined
    should.equal( false, ont.is( undefined )[fun](
      'null', 'undefined', 'nan', 'boolean', 'number', 
      'function', 'string', 'array', 'object' ) );
    should.equal(  true, ont.is( undefined )[fun](
      'null',              'nan', 'boolean', 'number', 
      'function', 'string', 'array', 'object' ) );

    // NaN
    should.equal( false, ont.is( NaN )[fun](
      'null', 'undefined', 'nan', 'boolean', 'number', 
      'function', 'string', 'array', 'object' ) );    
    should.equal(  true, ont.is( NaN )[fun](
      'null', 'undefined',        'boolean', 
      'function', 'string', 'array', 'object' ) );    

    // boolean
    should.equal( false, ont.is( false )[fun](
      'null', 'undefined', 'nan', 'boolean', 'number', 
      'function', 'string', 'array', 'object' ) );
    should.equal(  true, ont.is( false )[fun](
      'null', 'undefined', 'nan',            'number', 
      'function', 'string', 'array', 'object' ) );

    // number
    should.equal( false, ont.is( 0 )[fun](
      'null', 'undefined', 'nan', 'boolean', 'number', 
      'function', 'string', 'array', 'object' ) );
    should.equal(  true, ont.is( 0 )[fun](
      'null', 'undefined', 'nan', 'boolean',  
      'function', 'string', 'array', 'object' ) );

    // function
    should.equal( false, ont.is( function(){} )[fun](
      'null', 'undefined', 'nan', 'boolean', 'number', 
      'function', 'string', 'array', 'object' ) );
    should.equal(  true, ont.is( function(){} )[fun](
      'null', 'undefined', 'nan', 'boolean', 'number', 
                  'string', 'array', 'object' ) );

    // string
    should.equal( false, ont.is( 'foo' )[fun](
      'null', 'undefined', 'nan', 'boolean', 'number', 
      'function', 'string', 'array', 'object' ) );
    should.equal(  true, ont.is( 'foo' )[fun](
      'null', 'undefined', 'nan', 'boolean', 'number', 
      'function',           'array', 'object' ) );

    // array
    should.equal( false, ont.is( [] )[fun](
      'null', 'undefined', 'nan', 'boolean', 'number', 
      'function', 'string', 'array', 'object' ) );
    should.equal(  true, ont.is( [] )[fun](
      'null', 'undefined', 'nan', 'boolean', 'number', 
      'function', 'string',          'object' ) );

    // object
    should.equal( false, ont.is( {} )[fun](
      'null', 'undefined', 'nan', 'boolean', 'number', 
      'function', 'string', 'array', 'object' ) );
    should.equal(  true, ont.is( {} )[fun](
      'null', 'undefined', 'nan', 'boolean', 'number', 
      'function', 'string', 'array'           ) );

  });

});






// ███████╗ ██████╗ ██╗   ██╗ █████╗ ██╗     ██╗████████╗██╗   ██╗
// ██╔════╝██╔═══██╗██║   ██║██╔══██╗██║     ██║╚══██╔══╝╚██╗ ██╔╝
// █████╗  ██║   ██║██║   ██║███████║██║     ██║   ██║    ╚████╔╝ 
// ██╔══╝  ██║▄▄ ██║██║   ██║██╔══██║██║     ██║   ██║     ╚██╔╝  
// ███████╗╚██████╔╝╚██████╔╝██║  ██║███████╗██║   ██║      ██║   
// ╚══════╝ ╚══▀▀═╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝   ╚═╝      ╚═╝   
describe("is().equalTo()", function() {

  it('returns correct result', function() {

    var fun = 'equalTo';

    should.equal(  true, ont.is( 1 )[fun]( 1 ) );
    should.equal(  true, ont.is( 1 )[fun]( '1' ) );
    should.equal(  true, ont.is( 1 )[fun]( "1" ) );
    should.equal(  true, ont.is( 1 )[fun]( true ) );
    should.equal(  true, ont.is( 0 )[fun]( false ) );
    should.equal(  true, ont.is( 'foo' )[fun]( 'foo' ) );

    // http://stackoverflow.com/a/5447170/1934487
    should.equal( false, ont.is( '' )[fun]( '0' ) );
    should.equal(  true, ont.is( 0 )[fun]( '' ) );
    should.equal(  true, ont.is( 0 )[fun]( '0' ) );
    should.equal( false, ont.is( false )[fun]( undefined ) );
    should.equal( false, ont.is( false )[fun]( null ) );
    should.equal(  true, ont.is( null )[fun]( undefined ) );
    should.equal(  true, ont.is( '\n\r\t' )[fun]( 0 ) );

    // http://www.smashingmagazine.com/2011/05/30/10-oddities-and-secrets-about-javascript/
    should.equal(  true, ont.is( null instanceof Object )[fun]( false ) );
    should.equal( false, ont.is( NaN )[fun]( NaN ) );
    should.equal(  true, ont.is( new Array() )[fun]( false ) );

  });

});


describe("is().notEqualTo()", function() {

  it('returns correct result', function() {

    var fun = 'notEqualTo';

    should.equal( false, ont.is( 1 )[fun]( 1 ) );
    should.equal( false, ont.is( 1 )[fun]( '1' ) );
    should.equal( false, ont.is( 1 )[fun]( "1" ) );
    should.equal( false, ont.is( 1 )[fun]( true ) );
    should.equal( false, ont.is( 0 )[fun]( false ) );
    should.equal( false, ont.is( 'foo' )[fun]( 'foo' ) );

    // http://stackoverflow.com/a/5447170/1934487
    should.equal(  true, ont.is( '' )[fun]( '0' ) );
    should.equal( false, ont.is( 0 )[fun]( '' ) );
    should.equal( false, ont.is( 0 )[fun]( '0' ) );
    should.equal(  true, ont.is( false )[fun]( undefined ) );
    should.equal(  true, ont.is( false )[fun]( null ) );
    should.equal( false, ont.is( null )[fun]( undefined ) );
    should.equal( false, ont.is( '\n\r\t' )[fun]( 0 ) );

    // http://www.smashingmagazine.com/2011/05/30/10-oddities-and-secrets-about-javascript/
    should.equal( false, ont.is( null instanceof Object )[fun]( false ) );
    should.equal(  true, ont.is( NaN )[fun]( NaN ) );
    should.equal( false, ont.is( new Array() )[fun]( false ) );

  });

});


// ███████╗████████╗██████╗ ██╗ ██████╗    ███████╗ ██████╗ ██╗   ██╗ █████╗ ██╗     ██╗████████╗██╗   ██╗
// ██╔════╝╚══██╔══╝██╔══██╗██║██╔════╝    ██╔════╝██╔═══██╗██║   ██║██╔══██╗██║     ██║╚══██╔══╝╚██╗ ██╔╝
// ███████╗   ██║   ██████╔╝██║██║         █████╗  ██║   ██║██║   ██║███████║██║     ██║   ██║    ╚████╔╝ 
// ╚════██║   ██║   ██╔══██╗██║██║         ██╔══╝  ██║▄▄ ██║██║   ██║██╔══██║██║     ██║   ██║     ╚██╔╝  
// ███████║   ██║   ██║  ██║██║╚██████╗    ███████╗╚██████╔╝╚██████╔╝██║  ██║███████╗██║   ██║      ██║   
// ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝ ╚═════╝    ╚══════╝ ╚══▀▀═╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝   ╚═╝      ╚═╝   
describe("is().identicalTo()", function() {

  it('returns correct result', function() {

    var fun = 'identicalTo';

    should.equal(  true, ont.is( 1 )[fun]( 1 ) );
    should.equal( false, ont.is( 1 )[fun]( '1' ) );
    should.equal( false, ont.is( 1 )[fun]( "1" ) );
    should.equal( false, ont.is( 1 )[fun]( true ) );
    should.equal( false, ont.is( 0 )[fun]( false ) );
    should.equal(  true, ont.is( 'foo' )[fun]( 'foo' ) );

    // http://stackoverflow.com/a/5447170/1934487
    should.equal( false, ont.is( '' )[fun]( '0' ) );
    should.equal( false, ont.is( 0 )[fun]( '' ) );
    should.equal( false, ont.is( 0 )[fun]( '0' ) );
    should.equal( false, ont.is( false )[fun]( undefined ) );
    should.equal( false, ont.is( false )[fun]( null ) );
    should.equal( false, ont.is( null )[fun]( undefined ) );
    should.equal( false, ont.is( '\n\r\t' )[fun]( 0 ) );

    // http://www.smashingmagazine.com/2011/05/30/10-oddities-and-secrets-about-javascript/
    should.equal(  true, ont.is( null instanceof Object )[fun]( false ) );
    should.equal( false, ont.is( NaN )[fun]( NaN ) );
    should.equal( false, ont.is( new Array() )[fun]( false ) );

  });

});

describe("is().notIdenticalTo()", function() {

  it('returns correct result', function() {

    var fun = 'notIdenticalTo';

    should.equal( false, ont.is( 1 )[fun]( 1 ) );
    should.equal(  true, ont.is( 1 )[fun]( '1' ) );
    should.equal(  true, ont.is( 1 )[fun]( "1" ) );
    should.equal(  true, ont.is( 1 )[fun]( true ) );
    should.equal(  true, ont.is( 0 )[fun]( false ) );
    should.equal( false, ont.is( 'foo' )[fun]( 'foo' ) );

    // http://stackoverflow.com/a/5447170/1934487
    should.equal(  true, ont.is( '' )[fun]( '0' ) );
    should.equal(  true, ont.is( 0 )[fun]( '' ) );
    should.equal(  true, ont.is( 0 )[fun]( '0' ) );
    should.equal(  true, ont.is( false )[fun]( undefined ) );
    should.equal(  true, ont.is( false )[fun]( null ) );
    should.equal(  true, ont.is( null )[fun]( undefined ) );
    should.equal(  true, ont.is( '\n\r\t' )[fun]( 0 ) );

    // http://www.smashingmagazine.com/2011/05/30/10-oddities-and-secrets-about-javascript/
    should.equal( false, ont.is( null instanceof Object )[fun]( false ) );
    should.equal(  true, ont.is( NaN )[fun]( NaN ) );
    should.equal(  true, ont.is( new Array() )[fun]( false ) );

  });

});



// ██████╗ ███████╗███████╗██████╗     ███████╗ ██████╗ ██╗   ██╗ █████╗ ██╗     ██╗████████╗██╗   ██╗
// ██╔══██╗██╔════╝██╔════╝██╔══██╗    ██╔════╝██╔═══██╗██║   ██║██╔══██╗██║     ██║╚══██╔══╝╚██╗ ██╔╝
// ██║  ██║█████╗  █████╗  ██████╔╝    █████╗  ██║   ██║██║   ██║███████║██║     ██║   ██║    ╚████╔╝ 
// ██║  ██║██╔══╝  ██╔══╝  ██╔═══╝     ██╔══╝  ██║▄▄ ██║██║   ██║██╔══██║██║     ██║   ██║     ╚██╔╝  
// ██████╔╝███████╗███████╗██║         ███████╗╚██████╔╝╚██████╔╝██║  ██║███████╗██║   ██║      ██║   
// ╚═════╝ ╚══════╝╚══════╝╚═╝         ╚══════╝ ╚══▀▀═╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝   ╚═╝      ╚═╝   
describe("is().deepIdenticalTo()", function() {

  it('returns correct result', function() {

    var fun = 'deepIdenticalTo';

    var a = {a: 0, b: 1, c: 2},
        b = {a: 0, b: 1, c: 2},
        c = {a: 0, b: 1, c: 3},
        d = {a: 0, b: 1},
        e = {a: false, b: 1, c: 2},
        f = [0, 1, 2],
        g = [0, 1, 2],
        h = [0, 1, [0, 1]],
        i = [0, 1, [0, 1]],
        j = [0, 1, [0, 2]],
        k = {a: 0, b: 1, c: [0, 1]},
        l = {a: 0, b: 1, c: [0, 1]},
        m = {a: 0, b: 1, c: [0, 2]};

    should.equal(  true, ont.is( a )[fun]( b ) );
    should.equal( false, ont.is( a )[fun]( c ) );
    should.equal( false, ont.is( a )[fun]( d ) );
    should.equal( false, ont.is( a )[fun]( e ) );
    should.equal( false, ont.is( a )[fun]( f ) );
    should.equal(  true, ont.is( f )[fun]( g ) );
    should.equal( false, ont.is( f )[fun]( h ) );
    should.equal(  true, ont.is( h )[fun]( i ) );
    should.equal( false, ont.is( i )[fun]( j ) );
    should.equal( false, ont.is( a )[fun]( k ) );
    should.equal(  true, ont.is( k )[fun]( l ) );
    should.equal( false, ont.is( l )[fun]( m ) );

  });

});













//  █████╗ ██████╗ ███████╗
// ██╔══██╗██╔══██╗██╔════╝
// ███████║██████╔╝█████╗  
// ██╔══██║██╔══██╗██╔══╝  
// ██║  ██║██║  ██║███████╗
// ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝




// ██████╗  █████╗ ███████╗██╗ ██████╗    ████████╗██╗   ██╗██████╗ ███████╗███████╗
// ██╔══██╗██╔══██╗██╔════╝██║██╔════╝    ╚══██╔══╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔════╝
// ██████╔╝███████║███████╗██║██║            ██║    ╚████╔╝ ██████╔╝█████╗  ███████╗
// ██╔══██╗██╔══██║╚════██║██║██║            ██║     ╚██╔╝  ██╔═══╝ ██╔══╝  ╚════██║
// ██████╔╝██║  ██║███████║██║╚██████╗       ██║      ██║   ██║     ███████╗███████║
// ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝ ╚═════╝       ╚═╝      ╚═╝   ╚═╝     ╚══════╝╚══════╝

describe("are().nullObjs()", function() {

  it('returns correct result', function() {

    var fun = 'nullObjs';

    should.equal(  true, ont.are( [null, null] )[fun]() );
    should.equal( false, ont.are( [null, undefined] )[fun]() );
    should.equal( false, ont.are( ['null'] )[fun]() );
    should.equal( false, ont.are( [0] )[fun]() );
    should.equal( false, ont.are( [false] )[fun]() );

  });

});

describe("are().undefinedObjs()", function() {

  it('returns correct result', function() {

    var fun = 'undefinedObjs';

    should.equal(  true, ont.are( [undefined, undefined] )[fun]() );
    should.equal( false, ont.are( [null, undefined] )[fun]() );
    should.equal( false, ont.are( ['undefined'] )[fun]() );
    should.equal( false, ont.are( [0] )[fun]() );
    should.equal( false, ont.are( [false] )[fun]() );

  });

});

describe("are().NaNObjs()", function() {

  it('returns correct result', function() {

    var fun = 'NaNObjs';

    should.equal(  true, ont.are( [NaN, NaN] )[fun]() );
    should.equal( false, ont.are( [NaN, undefined] )[fun]() );
    should.equal( false, ont.are( ['NaN'] )[fun]() );
    should.equal( false, ont.are( [0] )[fun]() );
    should.equal( false, ont.are( [false] )[fun]() );

  });

});

describe("are().booleans()", function() {

  it('returns correct result', function() {

    var fun = 'booleans';

    should.equal(  true, ont.are( [true, false] )[fun]() );
    should.equal( false, ont.are( [true, undefined] )[fun]() );
    should.equal( false, ont.are( ['true'] )[fun]() );
    should.equal( false, ont.are( [0] )[fun]() );

  });

});

describe("are().numbers()", function() {

  it('returns correct result', function() {

    var fun = 'numbers';

    should.equal(  true, ont.are( [0, 1] )[fun]() );
    should.equal( false, ont.are( [0, '1'] )[fun]() );
    should.equal( false, ont.are( ['1'] )[fun]() );

  });

});

describe("are().functions()", function() {

  it('returns correct result', function() {

    var fun = 'functions';

    should.equal(  true, ont.are( [ function(){}, function(){} ] )[fun]() );
    should.equal( false, ont.are( [ function(){}, 'function' ] )[fun]() );
    should.equal(  true, ont.are( [ describe ] )[fun]() );

  });

});

describe("are().strings()", function() {

  it('returns correct result', function() {

    var fun = 'strings';

    should.equal(  true, ont.are( [ 'foo', 'bar' ] )[fun]() );
    should.equal( false, ont.are( [ 'foo', true ] )[fun]() );

  });

});

describe("are().arrays()", function() {

  it('returns correct result', function() {

    var fun = 'arrays';

    should.equal(  true, ont.are( [ [], [] ] )[fun]() );
    should.equal( false, ont.are( [ [], {} ] )[fun]() );

  });

});

describe("are().objects()", function() {

  it('returns correct result', function() {

    var fun = 'objects';

    should.equal(  true, ont.are( [ {}, {} ] )[fun]() );
    should.equal( false, ont.are( [ [], {} ] )[fun]() );

  });

});


// ██████╗ ██████╗ ██╗███╗   ███╗██╗████████╗██╗██╗   ██╗███████╗
// ██╔══██╗██╔══██╗██║████╗ ████║██║╚══██╔══╝██║██║   ██║██╔════╝
// ██████╔╝██████╔╝██║██╔████╔██║██║   ██║   ██║██║   ██║█████╗  
// ██╔═══╝ ██╔══██╗██║██║╚██╔╝██║██║   ██║   ██║╚██╗ ██╔╝██╔══╝  
// ██║     ██║  ██║██║██║ ╚═╝ ██║██║   ██║   ██║ ╚████╔╝ ███████╗
// ╚═╝     ╚═╝  ╚═╝╚═╝╚═╝     ╚═╝╚═╝   ╚═╝   ╚═╝  ╚═══╝  ╚══════╝
describe("are().primitives()", function() {

  it('returns correct result', function() {

    var fun = 'primitives';

    should.equal(  true, ont.are( [ false, 0, NaN, '0', null, undefined ] )[fun]() );
    should.equal( false, ont.are( [ false, 0, NaN, '0', null, undefined, {} ] )[fun]() );
    should.equal( false, ont.are( [ false, 0, NaN, '0', null, undefined, [] ] )[fun]() );

  });

});


//  ██████╗ ███████╗████████╗██╗   ██╗██████╗ ███████╗
// ██╔═══██╗██╔════╝╚══██╔══╝╚██╗ ██╔╝██╔══██╗██╔════╝
// ██║   ██║█████╗     ██║    ╚████╔╝ ██████╔╝█████╗  
// ██║   ██║██╔══╝     ██║     ╚██╔╝  ██╔═══╝ ██╔══╝  
// ╚██████╔╝██║        ██║      ██║   ██║     ███████╗
//  ╚═════╝ ╚═╝        ╚═╝      ╚═╝   ╚═╝     ╚══════╝
describe("are().ofType()", function() {

  it('returns correct result', function() {

    var fun = 'ofType';

    // remember:
    // var typesMap = {
    //     'null': 'nullObj',
    //     'undefined': 'undefinedObj',
    //     'nan': 'NaNObj',
    //     'boolean': 'boolean',
    //     'number': 'number',
    //     'function': 'function',
    //     'string': 'string',
    //     'array': 'array',
    //     'object': 'object'
    // };

    should.equal(  true, ont.are( [ null, null ] )[fun]( 'null' ) );
    should.equal( false, ont.are( [ null, undefined ] )[fun]( 'null' ) );

    should.equal(  true, ont.are( [ undefined, undefined ] )[fun]( 'undefined' ) );
    should.equal( false, ont.are( [ null, undefined ] )[fun]( 'undefined' ) );

    should.equal(  true, ont.are( [ NaN, NaN ] )[fun]( 'nan' ) );
    should.equal( false, ont.are( [ NaN, 1 ] )[fun]( 'nan' ) );

    should.equal(  true, ont.are( [ true, false ] )[fun]( 'boolean' ) );
    should.equal( false, ont.are( [ true, 'true' ] )[fun]( 'boolean' ) );

    should.equal(  true, ont.are( [ 0, 1, NaN ] )[fun]( 'number' ) );
    should.equal( false, ont.are( [ 0, 1, '2' ] )[fun]( 'number' ) );

    should.equal(  true, ont.are( [ describe, function(){} ] )[fun]( 'function' ) );
    should.equal( false, ont.are( [ describe, {} ] )[fun]( 'function' ) );

    should.equal(  true, ont.are( [ 'foo', 'bar' ] )[fun]( 'string' ) );
    should.equal( false, ont.are( [ 'foo', null ] )[fun]( 'string' ) );

    should.equal(  true, ont.are( [ [], [] ] )[fun]( 'array' ) );
    should.equal( false, ont.are( [ [], {} ] )[fun]( 'array' ) );

    should.equal(  true, ont.are( [ {}, {} ] )[fun]( 'object' ) );
    should.equal( false, ont.are( [ [], {} ] )[fun]( 'object' ) );

  });

});

describe("are().notOfType()", function() {

  it('returns correct result', function() {

    // no one object should be of the specified type
    var fun = 'notOfType';

    should.equal(  true, ont.are( [ undefined, undefined ] )[fun]( 'null' ) );
    should.equal( false, ont.are( [ null, undefined ] )[fun]( 'null' ) );

    should.equal(  true, ont.are( [ null, null ] )[fun]( 'undefined' ) );
    should.equal( false, ont.are( [ null, undefined ] )[fun]( 'undefined' ) );

    should.equal(  true, ont.are( [ 0, 1 ] )[fun]( 'nan' ) );
    should.equal( false, ont.are( [ NaN, 1 ] )[fun]( 'nan' ) );

    should.equal(  true, ont.are( [ 'true', 'false' ] )[fun]( 'boolean' ) );
    should.equal( false, ont.are( [ true, 'true' ] )[fun]( 'boolean' ) );

    should.equal(  true, ont.are( [ '0', '1' ] )[fun]( 'number' ) );
    should.equal( false, ont.are( [ 0, 1, '2' ] )[fun]( 'number' ) );

    should.equal(  true, ont.are( [ 0, 'function' ] )[fun]( 'function' ) );
    should.equal( false, ont.are( [ describe, {} ] )[fun]( 'function' ) );

    should.equal(  true, ont.are( [ [], {} ] )[fun]( 'string' ) );
    should.equal( false, ont.are( [ 'foo', null ] )[fun]( 'string' ) );

    should.equal(  true, ont.are( [ {}, {} ] )[fun]( 'array' ) );
    should.equal( false, ont.are( [ [], {} ] )[fun]( 'array' ) );

    should.equal(  true, ont.are( [ [], [] ] )[fun]( 'object' ) );
    should.equal( false, ont.are( [ [], {} ] )[fun]( 'object' ) );

  });

});


// ███████╗██╗████████╗██╗  ██╗███████╗██████╗ 
// ██╔════╝██║╚══██╔══╝██║  ██║██╔════╝██╔══██╗
// █████╗  ██║   ██║   ███████║█████╗  ██████╔╝
// ██╔══╝  ██║   ██║   ██╔══██║██╔══╝  ██╔══██╗
// ███████╗██║   ██║   ██║  ██║███████╗██║  ██║
// ╚══════╝╚═╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
describe("are().either()", function() {

  it('returns correct result', function() {

    var fun = 'either';

    // Checks if each object is of any of the specified data types
    should.equal(  true, ont.are( [ null, null ] )[fun]( 'null', 'undefined' ) );
    should.equal(  true, ont.are( [ null, undefined ] )[fun]( 'null', 'undefined' ) );
    should.equal( false, ont.are( [ null, 1 ] )[fun]( 'null', 'undefined' ) );

  });

});

describe("are().neither()", function() {

  it('returns correct result', function() {

    var fun = 'neither';

    // Checks that no object is of any of the specified data types
    should.equal( false, ont.are( [ null, null ] )[fun]( 'null', 'undefined' ) );
    should.equal( false, ont.are( [ null, undefined ] )[fun]( 'null', 'undefined' ) );
    should.equal( false, ont.are( [ null, 1 ] )[fun]( 'null', 'undefined' ) );
    should.equal(  true, ont.are( [ 0, 1 ] )[fun]( 'null', 'undefined' ) );

  });

});


// ███████╗ ██████╗ ██╗   ██╗ █████╗ ██╗     ██╗████████╗██╗   ██╗
// ██╔════╝██╔═══██╗██║   ██║██╔══██╗██║     ██║╚══██╔══╝╚██╗ ██╔╝
// █████╗  ██║   ██║██║   ██║███████║██║     ██║   ██║    ╚████╔╝ 
// ██╔══╝  ██║▄▄ ██║██║   ██║██╔══██║██║     ██║   ██║     ╚██╔╝  
// ███████╗╚██████╔╝╚██████╔╝██║  ██║███████╗██║   ██║      ██║   
// ╚══════╝ ╚══▀▀═╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝   ╚═╝      ╚═╝  
describe("are().equalTo()", function() {

  it('returns correct result', function() {

    var fun = 'equalTo';

    // Checks that all objects are equal '=='
    should.equal(  true, ont.are( [ 0, 1 ] )[fun]( [ 0, 1 ] ) );
    should.equal(  true, ont.are( [ 0, 1 ] )[fun]( [ false, true ] ) );
    should.equal( false, ont.are( [ 0, 1 ] )[fun]( [ 0, 2 ] ) );
    should.equal( false, ont.are( [ 0, 1 ] )[fun]( [ 0, 1, 2 ] ) );

  });

});

describe("are().notEqualTo()", function() {

  it('returns correct result', function() {

    var fun = 'notEqualTo';

    // Checks if ALL OBJECTS are not equal '!='. 
    should.equal(  true, ont.are( [ 0, 1 ] )[fun]( [ 2, 3 ] ) );
    should.equal(  true, ont.are( [ 0, 1 ] )[fun]( [ 1, 0 ] ) );
    should.equal(  true, ont.are( [ 0, 1 ] )[fun]( [ 0, 1, 2 ] ) );
    should.equal( false, ont.are( [ 0, 1 ] )[fun]( [ 0, 2 ] ) );
    should.equal( false, ont.are( [ 0, 1 ] )[fun]( [ 0, 1 ] ) );
    should.equal( false, ont.are( [ 0, 1 ] )[fun]( [ false, true ] ) );

  });

});


// ███████╗████████╗██████╗ ██╗ ██████╗    ███████╗ ██████╗ ██╗   ██╗ █████╗ ██╗     ██╗████████╗██╗   ██╗
// ██╔════╝╚══██╔══╝██╔══██╗██║██╔════╝    ██╔════╝██╔═══██╗██║   ██║██╔══██╗██║     ██║╚══██╔══╝╚██╗ ██╔╝
// ███████╗   ██║   ██████╔╝██║██║         █████╗  ██║   ██║██║   ██║███████║██║     ██║   ██║    ╚████╔╝ 
// ╚════██║   ██║   ██╔══██╗██║██║         ██╔══╝  ██║▄▄ ██║██║   ██║██╔══██║██║     ██║   ██║     ╚██╔╝  
// ███████║   ██║   ██║  ██║██║╚██████╗    ███████╗╚██████╔╝╚██████╔╝██║  ██║███████╗██║   ██║      ██║   
// ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝ ╚═════╝    ╚══════╝ ╚══▀▀═╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝   ╚═╝      ╚═╝   
describe("are().identicalTo()", function() {

  it('returns correct result', function() {

    var fun = 'identicalTo';

    // Checks for strict equality with no type conversion '==='
    should.equal(  true, ont.are( [ 0, 1 ] )[fun]( [ 0, 1 ] ) );
    should.equal( false, ont.are( [ 0, 1 ] )[fun]( [ 0, true ] ) );
    should.equal( false, ont.are( [ 0, 1 ] )[fun]( [ 0, '1' ] ) );
    should.equal( false, ont.are( [ 0, 1 ] )[fun]( [ 0, 1, 2 ] ) );

  });

});

describe("are().notIdenticalTo()", function() {

  it('returns correct result', function() {

    var fun = 'notIdenticalTo';

    // Checks if ALL OBJECTS are not identical '!=='. 
    should.equal(  true, ont.are( [ 0, 1 ] )[fun]( [ 2, 3 ] ) );
    should.equal(  true, ont.are( [ 0, 1 ] )[fun]( [ 1, 0 ] ) );
    should.equal(  true, ont.are( [ 0, 1 ] )[fun]( [ '0', '1' ] ) );
    should.equal(  true, ont.are( [ 0, 1 ] )[fun]( [ false, true ] ) );
    should.equal(  true, ont.are( [ 0, 1 ] )[fun]( [ 0, 1, 2 ] ) );
    should.equal( false, ont.are( [ 0, 1 ] )[fun]( [ 0, 1 ] ) );
    should.equal( false, ont.are( [ 0, 1 ] )[fun]( [ 0, 2 ] ) );
    should.equal( false, ont.are( [ 0, 1 ] )[fun]( [ 0, '1' ] ) );

  });

});


// ██████╗ ███████╗███████╗██████╗     ███████╗ ██████╗ ██╗   ██╗ █████╗ ██╗     ██╗████████╗██╗   ██╗
// ██╔══██╗██╔════╝██╔════╝██╔══██╗    ██╔════╝██╔═══██╗██║   ██║██╔══██╗██║     ██║╚══██╔══╝╚██╗ ██╔╝
// ██║  ██║█████╗  █████╗  ██████╔╝    █████╗  ██║   ██║██║   ██║███████║██║     ██║   ██║    ╚████╔╝ 
// ██║  ██║██╔══╝  ██╔══╝  ██╔═══╝     ██╔══╝  ██║▄▄ ██║██║   ██║██╔══██║██║     ██║   ██║     ╚██╔╝  
// ██████╔╝███████╗███████╗██║         ███████╗╚██████╔╝╚██████╔╝██║  ██║███████╗██║   ██║      ██║   
// ╚═════╝ ╚══════╝╚══════╝╚═╝         ╚══════╝ ╚══▀▀═╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝   ╚═╝      ╚═╝   
describe("are().deepIdenticalTo()", function() {

  it('returns correct result', function() {

    var fun = 'deepIdenticalTo';

    var a = {a: 0, b: 1, c: 2},
        b = {a: 0, b: 1, c: 2},
        c = {a: 0, b: 1, c: 3},
        d = {a: 0, b: 1},
        e = {a: false, b: 1, c: 2},
        f = [0, 1, 2],
        g = [0, 1, 2],
        h = [0, 1, [0, 1]],
        i = [0, 1, [0, 1]],
        j = [0, 1, [0, 2]],
        k = {a: 0, b: 1, c: [0, 1]},
        l = {a: 0, b: 1, c: [0, 1]},
        m = {a: 0, b: 1, c: [0, 2]};

    should.equal(  true, ont.are( [ a, b ] )[fun]( [ a, b ] ) );
    should.equal(  true, ont.are( [ b, a ] )[fun]( [ a, b ] ) );
    should.equal(  true, ont.are( [ a, f, k ] )[fun]( [ b, g, l ] ) );
    should.equal( false, ont.are( [ a, b ] )[fun]( [ a, c ] ) );
    should.equal( false, ont.are( [ a, b ] )[fun]( [ a, f ] ) );
    
  });

});












// ██╗  ██╗ █████╗ ███████╗
// ██║  ██║██╔══██╗██╔════╝
// ███████║███████║███████╗
// ██╔══██║██╔══██║╚════██║
// ██║  ██║██║  ██║███████║
// ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝



// ██████╗ ██████╗  ██████╗ ██████╗ ███████╗██████╗ ████████╗██╗   ██╗
// ██╔══██╗██╔══██╗██╔═══██╗██╔══██╗██╔════╝██╔══██╗╚══██╔══╝╚██╗ ██╔╝
// ██████╔╝██████╔╝██║   ██║██████╔╝█████╗  ██████╔╝   ██║    ╚████╔╝ 
// ██╔═══╝ ██╔══██╗██║   ██║██╔═══╝ ██╔══╝  ██╔══██╗   ██║     ╚██╔╝  
// ██║     ██║  ██║╚██████╔╝██║     ███████╗██║  ██║   ██║      ██║   
// ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═╝   ╚═╝      ╚═╝   
describe("has().property()", function() {

  it('returns correct result', function() {

    var fun = 'property';

    var obj = {a: 0, b: 1, c: 2},
        arr = [0, 1, 2];

    // Checks if object has OWN PROPERTY
    should.equal(  true, ont.has( obj )[fun]( 'a' ) );
    should.equal(  true, ont.has( obj )[fun]( 'b' ) );
    should.equal(  true, ont.has( obj )[fun]( 'c' ) );
    should.equal( false, ont.has( obj )[fun]( 'd' ) );
    should.equal( false, ont.has( obj )[fun]( 'length' ) );
    should.equal( false, ont.has( obj )[fun]( 'prototype' ) );

    should.equal( false, ont.has( arr )[fun]( 'a' ) );
    should.equal( false, ont.has( arr )[fun]( 'b' ) );
    should.equal( false, ont.has( arr )[fun]( 'c' ) );
    should.equal( false, ont.has( arr )[fun]( 'd' ) );
    should.equal(  true, ont.has( arr )[fun]( 'length' ) );
    should.equal( false, ont.has( arr )[fun]( 'prototype' ) );
    should.equal( false, ont.has( arr )[fun]( 'push' ) );

  });

});


















// ██╗  ██╗ █████╗ ██╗   ██╗███████╗
// ██║  ██║██╔══██╗██║   ██║██╔════╝
// ███████║███████║██║   ██║█████╗  
// ██╔══██║██╔══██║╚██╗ ██╔╝██╔══╝  
// ██║  ██║██║  ██║ ╚████╔╝ ███████╗
// ╚═╝  ╚═╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝


// ██████╗ ██████╗  ██████╗ ██████╗ ███████╗██████╗ ████████╗██╗   ██╗
// ██╔══██╗██╔══██╗██╔═══██╗██╔══██╗██╔════╝██╔══██╗╚══██╔══╝╚██╗ ██╔╝
// ██████╔╝██████╔╝██║   ██║██████╔╝█████╗  ██████╔╝   ██║    ╚████╔╝ 
// ██╔═══╝ ██╔══██╗██║   ██║██╔═══╝ ██╔══╝  ██╔══██╗   ██║     ╚██╔╝  
// ██║     ██║  ██║╚██████╔╝██║     ███████╗██║  ██║   ██║      ██║   
// ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═╝   ╚═╝      ╚═╝   
describe("have().property()", function() {

  it('returns correct result', function() {

    var fun = 'property';

    var obj1 = {a: 0, b: 1, c: 2},
        obj2 = {a: 5, d: 6, e: 7},
        arr1 = [0, 1, 2],
        arr2 = [5, 6, 7];

    // Checks if EACH OBJECT has the passed own property
    should.equal(  true, ont.have( [ obj1, obj2 ] )[fun]( 'a' ) );
    should.equal( false, ont.have( [ obj1, obj2 ] )[fun]( 'b' ) );

    should.equal( false, ont.have( [ arr1, arr2 ] )[fun]( 'a' ) );
    should.equal(  true, ont.have( [ arr1, arr2 ] )[fun]( 'length' ) );

    should.equal( false, ont.have( [ arr1, obj1 ] )[fun]( 'length' ) );

  });

});

