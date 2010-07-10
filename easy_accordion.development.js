$.fn.easy_accordion = function(obj, selector) {
								/* 
										In case no paramenter is sent, we assume  that the selector will be all links with class easy_accoridion,
										and that all accordion divs will be hidden, default texts are "more info" and "less info"
								*/
								
								if (!obj) 			obj 			= { plusText: "more info", lessText: "less info", startHidden: true }
								if (!selector)	selector	= ".easy_accordion";
											
								// We search for all accordions in our current page
								$(selector).each(function() {
									// In case obj is defined but the user did not send all the options, defaults are assumed
									obj.plusText 		= ( obj.plusText == undefined ) 		? "+" 	: obj.plusText;
									obj.lessText 		= ( obj.lessText == undefined ) 		? "-" 	: obj.lessText;
									obj.startHidden	= ( obj.startHidden == undefined ) 	? true 	: obj.startHidden;
									
									// We determine the selector to hide or show
									var lenght 			= this.href.split("#").length;
									var element_id	= "#" + this.href.split("#")[lenght - 1];
								
									if (obj.startHidden) $(element_id).css("display", "none");
									
									// We add the sliding funcitonality to each link's click event
									$(this).click(function() {
										$(element_id).slideToggle("slow");
										if ( $(this).text() == obj.plusText ) $(this).text(obj.lessText); else $(this).text(obj.plusText);
										return false;
									});
								});
							}