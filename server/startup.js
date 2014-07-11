Meteor.startup(function () {
	if (Alerts.find().count()===0){
		var types = [ "Clustershot failed for cluster blah",
									"Backup agent down",
									"Job foo is broken",
									"Conf call failure",
									"Sync started for job bar",
									"Snapshot behind for job baz"
		]
		var groups = [{group:"MMS-PCG",mmsId:"533850d5541410e80d3d0036"},
									{group:"thereq", mmsId:"5180232f7fe227e9f1880756"},
									{group:"MMS Demo", mmsId:"4ede6006b6f8d3480b7271bd"}];
		groups.forEach(function(group) {
			for (var i = 0; i < types.length; i++){
			Alerts.insert({
				group:group["group"],
				mmsId:group["mmsId"],
				time:new Date (new Date - 36000*Math.random()),
				type:types[i],
				comment:[],
				isAck:false
			})
		}
		});
	}
})
