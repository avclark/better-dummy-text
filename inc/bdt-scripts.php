<?php 

/**
 *
 * Register script
 *
 */
function bdt_load_scripts() {
  wp_register_script( 'bdt-scripts', plugins_url( 'js/bdt-script.js', __FILE__ ), array( 'jquery' ), true );
}

add_action('wp_enqueue_scripts', 'bdt_load_scripts');