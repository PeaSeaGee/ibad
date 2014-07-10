Template.alert.alerts = function() {
	answer = Alerts.find({},{sort:{time:-1}});
	return answer;
};

Template.alert.strTime = function () {
	return new Date(this.whenAlert).toString();
};

Template.alert.comment = function() {
	return this.comment;
};

Template.alert.events({
	'click input.ack': function(){
		Alerts.update({_id:this._id}, {$set:{isAck:true, whenAck:new Date}})
	},
	'click input.unack': function(){
		Alerts.update({_id:this._id}, {$set:{isAck:false, whenAck: null}})
	},
	'submit': function(e, template){
		e.preventDefault(); //stops loading page
		var $name = $(e.target.find('[name=name]'));
		var $text = $(e.target.find('[name=text]'));
		var comment={
			text:$text.val, 
			name:$name.val(), 
			time: new Date()
		};
		Alerts.update({_id:this._id},{$push:{comment:comment}})
	}
	
});


/*
Template.sorter.events({

});
*/
