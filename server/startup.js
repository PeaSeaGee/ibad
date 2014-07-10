Meteor.startup(function () {
	if (Alerts.find().count()===0){
		var types = [ "Clustershot failed for cluster blah",
									"Backup agent down",
									"Job foo is broken",
									"Conf call failure",
									"Sync started for job bar",
									"Snapshot behind for job baz"
		]
		for (var i = 0; i < types.length; i++){
			Alerts.insert({
				group:"MMS-PCG",
				mmsId:"533850d5541410e80d3d0036",
				whenAlert:new Date - 3600*Math.random(),
				type:types[i],
				comment:[{name: "peter", text: "comment 1", time: new Date()},
							{name: "rassi", text: "comment2", time: new Date()}],
				commentcount:0,
				isAck:false
			})
		}
	}
})
