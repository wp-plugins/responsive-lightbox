jQuery(document).ready(function($) {

	function rlUniqueArr(v, i, s) {
		return s.indexOf(v) === i;
	}

	if(rlArgs.script === 'swipebox') {
		$('a[rel="'+rlArgs.selector+'"]').swipebox({
			useCSS: rlArgs.animation,
			hideBarsDelay: (rlArgs.hideBars === '1' ? parseInt(rlArgs.hideBarsDelay) : 0),
		});

		if(rlArgs.activeGalleries === '1') {
			var rlGalleriesArr = new Array();

			jQuery.each($('a').filter(function() {
				return this.rel.match(new RegExp(rlArgs.selector+'\\[gallery-\\d+\\]'));
			}), function(i) {
				rlGalleriesArr[i] = $(this).attr('rel');
			});

			var rlUniqueGalleriesArr = rlGalleriesArr.filter(rlUniqueArr);

			for(var i = 0; i < rlUniqueGalleriesArr.length; i++)
			{
				$('a[rel="'+rlUniqueGalleriesArr[i]+'"]').swipebox({
					useCSS: rlArgs.animation,
					hideBarsDelay: (rlArgs.hideBars === '1' ? parseInt(rlArgs.hideBarsDelay) : 0),
				});
			}
		}
	} else {
		$('a[rel*="'+rlArgs.selector+'"]').prettyPhoto({
			animation_speed: rlArgs.animationSpeed,
			slideshow: (rlArgs.slideshow === '1' ? parseInt(rlArgs.slideshowDelay) : false),
			autoplay_slideshow: (rlArgs.slideshowAutoplay === '1' ? true : false),
			opacity: rlArgs.opacity,
			show_title: (rlArgs.showTitle === '1' ? true : false),
			allow_resize: (rlArgs.allowResize === '1' ? true : false),
			default_width: parseInt(rlArgs.width),
			default_height: parseInt(rlArgs.height),
			counter_separator_label: rlArgs.separator,
			theme: rlArgs.theme,
			horizontal_padding: parseInt(rlArgs.horizontalPadding),
			hideflash: (rlArgs.hideFlash === '1' ? true : false),
			wmode: rlArgs.wmode,
			autoplay: (rlArgs.videoAutoplay === '1' ? true : false),
			modal: (rlArgs.modal === '1' ? true : false),
			deeplinking: (rlArgs.deeplinking === '1' ? true : false),
			overlay_gallery: (rlArgs.overlayGallery === '1' ? true : false),
			keyboard_shortcuts: (rlArgs.keyboardShortcuts === '1' ? true : false),
			social_tools: (rlArgs.social === '1' ? '<div class="pp_social"><div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="http://www.facebook.com/plugins/like.php?locale=en_US&href='+location.href+'&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div></div>' : ''),
			changepicturecallback: function(){},
			callback: function(){},
			ie6_fallback: true
		});
	}
});