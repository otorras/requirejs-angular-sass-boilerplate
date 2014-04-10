requirejs.config({
	//urlArgs: Date.now(),

	paths: {
		// directory aliases
		components: '../components',
        vendor: '../vendor',
        angular: '../bower_components/angular/angular'
	},

	shim: {
      angular: {
        exports: 'angular'
      }
	}
})(['app']);
