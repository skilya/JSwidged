define(['jquery'], function($){
	var CustomWidget = function () {
		var self = this;
		this.callbacks = {
			render: function(){
				console.log('ver 0.2.13 c');
				var html = '<div class="bl">\
							<a id="link" display="none" download>Download\
							</a></div>';
				
				self.render_template({
					caption:{
						class_name:'bl', //имя класса для обертки разметки
					},
					body: html,
					render:''
				});

				console.log('render');

				return true;
			},
			init: function(){
				
				return true;
			},
			bind_actions: function(){
				// console.log('bind_actions');
				return true;
			},
			settings: function(){
				return true;
			},
			onSave: function(){
				return true;
			},
			destroy: function(){},
			leads:	{
				selected: function(){
					var data = self.list_selected().selected;
					var idl = [];

					for (var i = 0; i < data.length; i++) {
						idl[i] = data[i].id;
					}
					console.log(idl);
					var sys = self.system();
					$.ajax({
						type: 'POST',
						url: 'https://localhost/index.php',
						data: {
							ids:idl,
							login: sys.amouser,
							hash: sys.amohash,
							user: sys.subdomain
						},
						dataType: 'text',
						success: function(responseData, textStatus, jqXHR) {
							console.log("success!");
							$('#link').css("display", "block");
							$('#link').attr("href", "https://localhost/data.csv");
						},
						error: function (responseData, textStatus, errorThrown) {
							console.log("error!");
							$('#link').css("display", "block");
							$('#link').attr("href", "https://localhost/data.csv");
						}
					});
				}
			}
		};
		return this;
	};
	return CustomWidget;
});