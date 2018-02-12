import axios from 'axios';


export function sendAlarmCoords (coords) {
	axios.post('https://wristo-platform-backend-stg.herokuapp.com/api/v1/alerts', {
		  "alert": {
		    "message": "from saga",
		    "latitude": 40,
		    "longitude": 40,
		    "unique_wristo_id": "14"
		  }
		})
	  .then(function (response) {
	  	console.log("resp", response);
	    return response;
	  })
	  .catch(function (error) {
	  	console.log("error")
	    return error;
	  });
}