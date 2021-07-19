for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        fn(i);
    }, 0)   
}

for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        fn(i);
    }, 0)   
}