<?php

function bc_files() {
  wp_enqueue_style('main_styles', get_stylesheet_uri());
}

add_action('wp_enqueue_scripts', 'bc_files');