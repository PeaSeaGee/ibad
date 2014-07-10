Template.alert.alerts = function() {
	answer = Alerts.find({},{sort:{whenAlert:-1}});
	return answer;
};

Template.alert.strTime = function () {
	return new Date(this.whenAlert).toString();
}