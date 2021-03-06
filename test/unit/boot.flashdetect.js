(function(){

module("Boot.flashDetect");

test("Environment", function(){
    ok( window.Boot );
    ok( Boot.flashDetect );
});

test("Player Version", function(){
    var playerVersion = Boot.flashDetect();
    if ( playerVersion ) {
        ok( playerVersion, "Flash version: " + playerVersion[0] + "." + playerVersion[1] + "." + playerVersion[2] );
    } else {
        ok( true, "No Flash" );
    }
});

})();
