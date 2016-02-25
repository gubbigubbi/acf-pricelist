<?php
/**
 * Template name: Pricelist Page
 * The template for the pricelist
 *
 *
 * @package lifetime_trailers
 */

get_header(); ?>

	<?php get_template_part('template-parts/header/featured-image-page'); ?>
	
	<div id="primary" class="content-area container">
		<main id="main" class="site-main" role="main">

			<?php while ( have_posts() ) : the_post(); ?>

				<?php get_template_part( 'template-parts/content', 'page' ); ?>

				<?php
					// If comments are open or we have at least one comment, load up the comment template.
					if ( comments_open() || get_comments_number() ) :
						comments_template();
					endif;
				?>

			<?php endwhile; // End of the loop. ?>
			
			<?php

			// check if the repeater field has rows of data
			if( have_rows('price_list', 'options') ): ?>
			
				<div class="price-list">
					
					<div class="pull-right price-total">	
						<form class="form-inline">
							<div class="form-group-container">
								<label for="totalPrice">Trailer Price (GST not included): </label>
								<div class="form-group">
									<input class="form-control" id="totalPrice"></input>
								</div>
							</div>
							<label for="totalPrice">Trailer Price (inc GST): </label>
							<div class="form-group">
								<input class="form-control" id="totalPriceIncGST"></input>
							</div>
						<!-- rest of form -->
						</form>
						
					</div>

					<table class="table table-striped price-list">
				
						<?php // loop through the rows of data
						while ( have_rows('price_list', 'options') ) : the_row(); ?>
						
						
							<thead>
								<tr>
									<th><?php echo the_sub_field('row_title'); ?></th>
									<th>Description</th>
									<th>Price</th>
									<th>Req. QTY.</th>
								</tr>
							</thead>
							
		
							
							<?php if( have_rows('row_columns', 'options') ):  //loop through the child repeater ?>
							
								<tbody>
							
								<?php while ( have_rows('row_columns', 'options') ) : the_row(); ?>
								
									<tr>
										<td><?php echo the_sub_field('row_title'); ?></td>
										<td><?php echo the_sub_field('row_description'); ?></td>
										<td class="price">$ <?php echo the_sub_field('price'); ?></td>
										<td class="quantity" width="10%">
											<input type="number" class="form-control"></input>
										</td>
									</tr>
										
								<?php endwhile; ?>
								
								</tbody>
							<?php endif; ?>
								
											
						<?php endwhile; ?>
					</table>
				</div>

				<p><strong>*** IMPORTANT ***</strong></p>
				<p>Prices shown here are given as an indication ONLY and are subject to change without notice.</p>
				<p>Prices DO NOT Include GST.</p>
			
			<?php endif;
			
			?>

		</main><!-- #main -->
                
	</div><!-- #primary -->
                                                        

<?php if(get_field('show_sidebar')) { 
    get_sidebar(); 
} ?>

<?php if(!is_front_page()) { 
	get_template_part('template-parts/sections/cta', 'services');
} ?>

<?php get_footer(); ?>
