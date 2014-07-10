Template.alert.alerts = function() {
	if (Session.get("orderby")===null)
		Session.set("orderby", "timeDsc")
	switch (Session.get("orderby")) {
		case "timeAsc":
			answer = Alerts.find({},{sort:{time:1}});
			break;
		case "timeDsc":
			answer = Alerts.find({},{sort:{time:-1}});
			break;
		case "grpAsc":
			answer = Alerts.find({},{sort:{group:1}});
			break;
		case "grpDsc":
			answer = Alerts.find({},{sort:{group:-1}});
			break;
		case "typeAsc":
			answer = Alerts.find({},{sort:{type:1}});
			break;
		case "typeDsc":
			answer = Alerts.find({},{sort:{type:-1}});
			break;
		default:
			Session.set("orderby", "timeDsc");
			answer = Alerts.find({},{sort:{time:-1}});
			break;
		}
	return answer;
};

Template.alert.strTime = function () {
	return new Date(this.whenAlert).toString();
};

Template.alert.comment = function() {
	return this.comment;
};

Template.alert.events({
	'click input.ack': function() {
		Alerts.update({_id:this._id}, {$set:{isAck:true, whenAck:new Date}})
	},
	'click input.unack': function() {
		Alerts.update({_id:this._id}, {$set:{isAck:false, whenAck:null}})
	},
	'click input.post_comment': function() {
	    var comment_name_elt = document.getElementById("alert_" + this._id + "_comment_name");
	    var comment_text_elt = document.getElementById("alert_" + this._id + "_comment_text");
		var comment = {text: comment_text_elt.value, name: comment_name_elt.value, time: new Date()};
		comment_name_elt.value = '';
		comment_text_elt.value = '';
		Alerts.update({_id:this._id},{$push:{comment: comment}});
	}
});

Template.sorter.events({
	'click input.timeAsc': function(){
		Session.set("orderby","timeAsc");
	},
	'click input.timeDsc': function(){
		Session.set("orderby","timeDsc");
	},
	'click input.typeAsc': function(){
		Session.set("orderby","typeAsc");
	},
	'click input.typeDsc': function(){
		Session.set("orderby","typeDsc");
	},
	'click input.grpAsc': function(){
		Session.set("orderby","grpAsc");
	},
	'click input.grpDsc': function(){
		Session.set("orderby","grpDsc");
	}
});

/*
Template.sorter.events({

});
*/
