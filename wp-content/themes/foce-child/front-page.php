<?php

get_header();
?>
    <section id="banner" class="banner">
        
        <video width="1200" height="1000" style="pointer-events: none;" loop autoplay muted>
            <source src="https://course.oc-static.com/projects/D%C3%A9veloppeur+Web/DWP+IW_P9+Studio+d'animation/Studio+Koukaki-vide%CC%81o+header+sans+son+(1).mp4" type="video/mp4">
        </video>

        <img src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">

    </section>

    <main id="primary" class="site-main">

        <section id="story" class="story">
           
            <div class="title-h2">
                <h2>L'histoire</h2>
            </div>
         
            <article id="story__article" class="story__article">
                <p><?php echo get_theme_mod('story'); ?></p>
            </article>
            <?php
            $args = array(
                'post_type' => 'characters',
                'posts_per_page' => -1,
                'meta_key'  => '_main_char_field',
                'orderby'   => 'meta_value_num',

            );
            $characters_query = new WP_Query($args);

            $characters_query = set_query_var( 'characters_query', $characters_query );
            
            ?>

            <!-- Display character -->
            <?php echo get_template_part('parts/character', 'characters_query');?>

            <article id="place" class="place">
                <div>
                    <h3>Le Lieu</h3>
                    <p>
                        <?php echo get_theme_mod('place'); ?>

                    </p>
                    <div class="clouds">
                        <img class="small-clouds" src="<?php echo get_stylesheet_directory_uri().'./assets/images/little_cloud.png'?>" alt="Small clouds"> 
                        <img class="big-clouds" src="<?php echo get_stylesheet_directory_uri().'./assets/images/big_cloud.png'?>" alt="Big clouds">
                    </div>
                </div>

            </article>
        </section>


        <section id="studio" class="studio">
            <div class="title-h2">
                <h2>Studio Koukaki</h2>
            </div>
            <div>
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
        </section>


    </main><!-- #main -->

<?php
get_footer();
