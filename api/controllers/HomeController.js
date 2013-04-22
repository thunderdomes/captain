/*---------------------
	:: Home 
	-> controller
---------------------*/
var HomeController = {
	index:function(req,res){

		return res.send(
			'map.html'

			//layout:'home/home_layout'
		);
	}


};
module.exports = HomeController;