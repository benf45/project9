<?php
/**
 * The template for displaying the character is story section
 *
 *
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>

<article id="characters">

    <div class="main-character">
        <h3>Les personnages</h3>

        <div class="swiper-container">
        <div class="swiper swiper-slider">
        
            <div class="swiper-wrapper">

                <?php
                while ( $characters_query->have_posts() ) {

                    $characters_query->the_post(); 
                    echo '<img class="swiper-slide" src="'.wp_get_attachment_url( get_post_thumbnail_id()).'" alt="Swiper">';
                    
                }
                ?>

            </div>
    
        </div>
            </div>

    </div>
                
</article>

