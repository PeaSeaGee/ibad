Template.alert.alerts = function() {
	if (Session.get("orderby")===undefined)
		Session.set("orderby", "timeDsc");
	if (Session.get("showAck")===undefined)
		Session.set("showAck", false);
	showAck = Session.get("showAck");
	switch (Session.get("orderby")) {
		case "timeAsc":
			answer = Alerts.find({isAck:showAck},{sort:{time:1}});
			break;
		case "timeDsc":
			answer = Alerts.find({isAck:showAck},{sort:{time:-1}});
			break;
		case "grpAsc":
			answer = Alerts.find({isAck:showAck},{sort:{group:1}});
			break;
		case "grpDsc":
			answer = Alerts.find({isAck:showAck},{sort:{group:-1}});
			break;
		case "typeAsc":
			answer = Alerts.find({isAck:showAck},{sort:{type:1}});
			break;
		case "typeDsc":
			answer = Alerts.find({isAck:showAck},{sort:{type:-1}});
			break;
		default:
			Session.set("orderby", "timeDsc");
			answer = Alerts.find({isAck:showAck},{sort:{time:-1}});
			break;
		}
	return answer;
};

Template.alert.urlText = function (urlText) {
	if ( (/^http/.test(this.text) && !(/\s/.test(this.text) ) ) )
		urlText='<a href="' + this.text +'">' + this.text + '</a>';
	else 
		urlText=this.text;
	
	return urlText;
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
	  var comment_name_clean = comment_name_elt.value.replace(/<(?:.|\n)*?>/gm, '')
	  var comment_text_clean = comment_text_elt.value.replace(/<(?:.|\n)*?>/gm, '')
		var comment = {text: comment_text_clean, name: comment_name_clean, time: new Date()};
		comment_name_elt.value = '';
		comment_text_elt.value = '';
		Alerts.update({_id:this._id},{$push:{comment: comment}});
	},
	'click a.toggleComments': function() {
		currentVisStyle = document.getElementById("comments_" + this._id).style;
		if (currentVisStyle.display != "block")
			currentVisStyle.display="block";
		else
			currentVisStyle.display="none";
	}
});

Template.sorter.events({
	'click #timeAsc': function(){
		Session.set("orderby","timeAsc");
		$('input[type=button]').css("background", "");
		document.getElementById("timeAsc").style["background"]="#dfd";
	},
	'click #timeDsc': function(){
		Session.set("orderby","timeDsc");
		$('input[type=button]').css("background", "");
		document.getElementById("timeDsc").style["background"]="#dfd";
	},
	'click #typeAsc': function(){
		Session.set("orderby","typeAsc");
		$('input[type=button]').css("background", "");
		document.getElementById("typeAsc").style["background"]="#dfd";
	},
	'click #typeDsc': function(){
		Session.set("orderby","typeDsc");
		$('input[type=button]').css("background", "");
		document.getElementById("typeDsc").style["background"]="#dfd";
	},
	'click #grpAsc': function(){
		Session.set("orderby","grpAsc");
		$('input[type=button]').css("background", "");
		document.getElementById("grpAsc").style["background"]="#dfd";
	},
	'click #grpDsc': function(){
		Session.set("orderby","grpDsc");
		$('input[type=button]').css("background", "");
		document.getElementById("grpDsc").style["background"]="#dfd";
	},
	'click #showAck': function(){
		showAckE = document.getElementById("showAck");
		if (showAckE.checked)
			Session.set("showAck", true);
		else
			Session.set("showAck", false);
	}
});

/*
Template.sorter.events({

});
*/
