Template.add.onRendered(function(){
	$('select').material_select();
	$('#needs').characterCounter();
});

Template.add.events({
	'focus #needs': function(evt, tmpl){
		var el = $(evt.currentTarget);
		var form = el.closest('form');

		form.css('height','auto');
	},
	'blur #needs': function(evt, tmpl){
		var el = $(evt.currentTarget);
		var form = el.closest('form');
		var val = tmpl.find('#needs').value;

		if(val.length <= 0){
			form.removeAttr('style');
		}
	}
});