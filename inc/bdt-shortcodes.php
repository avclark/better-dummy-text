<?php

/**
 *
 * Register shortcode
 * Set defaults ( $options )
 * Enqueue script and localize $options so it's available to JS file
 * Returns empty div for JS to fill.
 *
 */
function bdt_shortcode( $options ) {

  $options = shortcode_atts(
    array(
      'count' => '5',
      'show'  => 'arresteddevelopment'
    ),
    $options
  );

  wp_enqueue_script( 'bdt-scripts' );
  wp_localize_script( 'bdt-scripts', 'scriptParams', $options );

  return '<div id="bdt"></div>';

}

add_shortcode( 'bdt', 'bdt_shortcode' );