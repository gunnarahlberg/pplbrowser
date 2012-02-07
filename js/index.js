$(function(){
 
	var tmpl, data;
	data = 
			{"name" : "Adam Karpinski", "bolag" : "Affero","phone2":"08-407 00 00", 	
			"bildurl" : function() {			
				var url = this.name.toLowerCase().replace(" ", "_") + ".jpg";
				return url;
			}
		}
	
	;
	
	var hookLinks = function() {};
	
	// Initialise page
	var initPage = function(){
 
		// Load the HTML template
		$.get(
			'template.html',
			function(d){
				tmpl = d
			}
		);											
		$(document).ajaxStop(function(){
			var renderedPage = Mustache.to_html( tmpl, data );
			$("body").html( renderedPage );
			hookLinks();
		})		
	}()
})