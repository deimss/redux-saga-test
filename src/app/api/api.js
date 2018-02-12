import axios from 'axios';


export function sendAlarmCoords(coords) {
	console.log(coords)
	return axios.post('https://wristo-platform-backend-stg.herokuapp.com/api/v1/alerts', coords)
		.then(function (response) {
			console.log("resp", response);
			return response;
		})
		.catch(function (error) {
			console.log("error")
			return error;
		});
}