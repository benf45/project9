<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}

// Load dashicons
function ww_load_dashicons(){
    wp_enqueue_style('dashicons');
}
add_action('wp_enqueue_scripts', 'ww_load_dashicons');


// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}

/*
** Enqueue scripts and styles
*/
function theme_scripts() {

	// Enqueue swiper Script
	wp_enqueue_script( 'theme-swiper-script', get_theme_file_uri( '/assets/js/swiper-bundle.min.js' ), array(), null, true );
	// Enqueue Skrollr Script
	wp_enqueue_script( 'theme-skrollr-script', get_theme_file_uri( '/assets/js/skrollr.min.js' ), array(), null, true );
    // Enqueue Custom Script
	wp_enqueue_script( 'theme-custom-script', get_theme_file_uri( '/assets/js/custom-scripts.js' ), array( 'jquery' ), null, true );


    // Enqueue swiper Style
	wp_enqueue_style( 'theme-swiper-style', get_theme_file_uri( '/assets/css/swiper-bundle.min.css' ), false, null, 'all' );
	
}
add_action( 'wp_enqueue_scripts', 'theme_scripts' );