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
  
            <div class="tinyslider-wrapper">
                <?php
                while ( $characters_query->have_posts() ) {
                    $characters_query->the_post(); 

                    echo '<div class="tinyslider-slide">';
                    echo get_the_post_thumbnail( get_the_ID(), 'full' );
                    echo '</div>';

                }
                ?>
        </div>
    </div>
                
</article>


