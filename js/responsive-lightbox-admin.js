jQuery(document).ready(function($) {

	$('#rl_script, #rl_galleries, #rl_image_links, #rl_deactivation_delete, #rl_sw_animation, #rl_sw_hide_bars, #rl_pp_animation_speed, #rl_pp_slideshow, #rl_pp_slideshow_autoplay, #rl_pp_title, #rl_pp_allow_resize, #rl_pp_theme, #rl_pp_hide_flash, #rl_pp_wmode, #rl_pp_video_autoplay, #rl_pp_modal, #rl_pp_deeplinking, #rl_pp_overlay_gallery, #rl_pp_keyboard_shortcuts, #rl_pp_social').buttonset();

	$('#rl-slideshow-yes, #rl-slideshow-no').change(function()
	{
		if($('#rl-slideshow-yes:checked').val() === 'yes')
		{
			$('#rl_pp_slideshow_delay').fadeIn(300);
		}
		else if($('#rl-slideshow-no:checked').val() === 'no')
		{
			$('#rl_pp_slideshow_delay').fadeOut(300);
		}
	});

	$('#rl-hide-bars-yes, #rl-hide-bars-no').change(function()
	{
		if($('#rl-hide-bars-yes:checked').val() === 'yes')
		{
			$('#rl_sw_hide_bars_delay').fadeIn(300);
		}
		else if($('#rl-hide-bars-no:checked').val() === 'no')
		{
			$('#rl_sw_hide_bars_delay').fadeOut(300);
		}
	});

	$(document).on('click', 'input#reset_rl_configuration', function(event) {
		if(confirm(rlArgs.resetScriptToDefaults)) {
			return true;
		} else {
			return false;
		}
	});
});