requirejs.config({
    //urlArgs: Date.now(),

    paths: {
        // directory aliases
        components: '../components',
        angular: '../vendor/angular/angular'
    },

    shim: {
        angular: {
            exports: 'angular'
        }
    }
})(['app']);
