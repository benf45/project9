<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>

	<header id="masthead" class="site-header">
		<nav id="site-navigation" class="main-navigation">
     
            <div class="site-title-navigation">
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
            </div>
            <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>

            </button>
           
            <ul class="site-menu">
                <li class="site-logo-navigation">
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
                        <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/logo_navigation.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
                    </a>
                </li>
                <li><a class="menu-link" href="#story">Histoire</a></li>
                <li><a class="menu-link" href="#characters">Personnages</a></li>
                <li><a class="menu-link" href="#place">Lieu</a></li>
                <li><a class="menu-link" href="#studio">Studio&nbsp;Koukaki</a></li>
                <li class="studio-text-menu">Studio Koukaki</li>
            </ul>

		</nav><!-- #site-navigation -->
	</header><!-- #masthead -->
