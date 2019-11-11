/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
						  // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
						  // - another specific IPv4/6 to listen on a specific interface
						  // - "", "0.0.0.0", "::" to listen on any interface
						  // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
														   // or add a specific IPv4 of 192.168.1.5 :
														   // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
														   // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
														   // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	displaySeconds: false, //not working?
	units: "metric",
	colored: true,


	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",

		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"},
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/pranathisep91%40gmail.com/private-465b5f9646b864516a49ed5ac3fa314f/basic.ics"}
				],
				color: "#281cd4",
				maximumEntries: 5,
				maximumNumberOfDays: 7

			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "San Leandro",
				locationID: "5392263",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "18c7556349bd7caf6e85acceb85a613f"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "San Leandro",
				locationID: "5392263",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "18c7556349bd7caf6e85acceb85a613f"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Bay Area News",
						url: "https://www.sfgate.com/bayarea/feed/Bay-Area-News-429.php"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		// {
		// 	module: 'MMM-json-feed',
		// 	// position: 'bottom_bar',
		// 	config: {
		// 		urls: [
		// 			'http://your.server.json.here/abc1.json',
		// 			'http://your.server.json.here/abc2.json',
		// 		]
		// 	}
		// },

		{
			module : 'MMM-RandomBackground',
			position : 'fullscreen_below', // Any region but this one makes the most sense
			config : {
				animationSpeed : 2000,
				updateInterval : 5000
			}
		}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}