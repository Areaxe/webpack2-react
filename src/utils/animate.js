
export default {
	componentWillAppear: function(){
		console.log(this);
	},
	componentWillLeave: function(){
		alert("sureLeave?");
	},
	componentDidMount: function () {
		console.log("Component did mount");
	}
};