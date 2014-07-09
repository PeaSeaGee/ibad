Template.main.alerts = function() {
	answer = Alerts.find({},{sort:{whenAlert:-1}});
	return answer;
};