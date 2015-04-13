// FUNCTIONS :
// gulp clean:prod = clean the prod folder (sometimes you will need this, trust me)
// gulp clean:dev = just joking, are u a masochist?
// gulp zip:prod = zip the prod folder
// gulp zip:dev = zip the dev folder
// gulp = default task (sass, bourbon, neat, pleeease, jade, js, coffee, imgmin...)
// gulp img = optimise pictures
// gulp watch = same as gulp + browser-sync
// I recommand using gulp watch in dev, and when launch using gulp clean:prod, gulp, gulp zip:prod

// Include, ALL THE PLUGINS ! #derp #goreincoming #noshame

var
	gutil = require('gulp-util'),
	del = require('del'),
	zip = require('gulp-zip'),
	gulp = require('gulp'),
	jade = require('gulp-jade'),
	sass = require('gulp-sass'),
	neat = require('node-neat').includePaths,
	pleeease = require('gulp-pleeease'),
	coffee = require('gulp-coffee'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;

// Trying to define some variables, sadly seems like i can't do it for dest folders (?) #plzhelp

var source = {
	coffee: './dev/js/**/*.coffee',
	js: './dev/js/**/*.js',
	sass: './dev/sass/**/*.sass',
	img: './dev/img/**/*.{png,jpg,gif,svg}'
}

// CLEAN YOUR ROOM ! (seriously, look at the doc)
// https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md

gulp.task('clean:prod', function (cb){
	del(['./prod/**', 'prod.zip'], cb);
});

// Zip, becuz i'm lazy

gulp.task('zip:prod', function (){
	return gulp.src('prod/**')
		.pipe(zip('prod.zip'))
		.pipe(gulp.dest('.'));
})

gulp.task('zip:dev', function (){
	return gulp.src('dev/**')
		.pipe(zip('dev.zip'))
		.pipe(gulp.dest('.'));
})

// Compile jade files

gulp.task('jade', function(){
	return gulp.src('./dev/jade/**/*.jade')
		.pipe(jade({
			pretty: true //jade is indeed pretty as hell
		}))
		.pipe(gulp.dest('./prod'))
})

// Task Sass/Bourbon/Neat/Pleeease/maybetoomuchpluginsthisgonnacrashiamsure

gulp.task('sass', function(){
	return gulp.src(source.sass)
		.pipe(sass({
			indentedSyntax: true, // one syntax to rule them all, TABS MOTHERFUCKER!
			errLogToConsole: true, // because u dont wanna crash on me gulp, even if you crash.
			includePaths: require('node-bourbon').includePaths,
			includePaths: ['sass'].concat(neat)
		}))
		.pipe(pleeease({
			autoprefixer: {
				browsers: ['last 3 versions'] // because of retards who don't know how to internet
			}
		}))
		.pipe(gulp.dest('./prod/css'))
		.pipe(reload({stream:true}));
})

// Task Coffeescript

gulp.task('coffee', function(){
	return gulp.src(source.coffee)
		.pipe(coffee({
			bare: true
		}))
		.pipe(concat('coffee.js'))
		.pipe(gulp.dest('./prod/js'))
		.pipe(reload({stream:true}));
})

// Vanilla Js-uglify (js is always ugly anyways)

gulp.task('js', function(){
	return gulp.src(source.js)
		.pipe(uglify({preserveComments: 'some'})) // Keep some comments, because why not
		.pipe(concat('vanilla.js'))
		.pipe(gulp.dest('./prod/js'))
		.pipe(reload({stream:true}));
})

// Imagemin

gulp.task('img', function() {
	return gulp.src(source.img)
		.pipe(imagemin({optimizationLevel: 7}))
		.pipe(gulp.dest('./prod/img'));
})

// Static server

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: "prod/"
		}
	})
})

// Reload all browsers

gulp.task('bs-reload', function () {
	browserSync.reload();
});

// Default Task

gulp.task('default', ['jade', 'sass', 'coffee', 'js', 'img'], function(){})

// Watch da booty

gulp.task('watch',['browser-sync'], function(){
	gulp.watch('./dev/jade/**/*.jade', ['jade']).on('change', function(event){
		console.log('ಠ_ಠ changes at ' + event.path + ' <==')
		gutil.log('This', gutil.colors.bgRed('JADE template'), 'look really cool!')
	})
	gulp.watch('./dev/sass/**/*.sass', ['sass']).on('change', function(event){
		console.log('ಠ_ಠ changes at ' + event.path + ' <==')
		gutil.log('SPANK MY', gutil.colors.bgBlue('SASS'), '! PLEEEASE!')
	})
	gulp.watch('./dev/js/*.coffee', ['coffee']).on('change', function(event){
		console.log('ಠ_ಠ changes at ' + event.path + ' <==')
		gutil.log('Dat', gutil.colors.yellow('COFFEESCRIPT'), '!')
	})
	gulp.watch('./dev/js/*.js', ['js']).on('change', function(event){
		console.log('ಠ_ಠ changes at ' + event.path + ' <==')
		gutil.log('Dat', gutil.colors.yellow('JS'), '!')
	})
	gulp.watch('./dev/img/**/*.{png,jpg,gif,svg}', ['img']).on('change', function(event){
		console.log('ಠ_ಠ changes at ' + event.path + ' <==')
		gutil.log('Dat', gutil.colors.green('pictures'), '!')
	})
	gulp.watch(['./prod/**/*.html', './prod/css/**/*.css', './prod/js/**/*.js'], ['bs-reload'])
})