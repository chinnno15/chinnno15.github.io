const {
	DateTime
} = require('luxon')

module.exports = {
	// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
	htmlDateString: (dateObj) => {
		return DateTime.fromJSDate(dateObj, {
			zone: 'utc'
		}).toFormat('yyyy-LL-dd');
	},
	postDate: (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
	},
	year: (dateObj) => {
		var oldDateObj = dateObj;
		dateObj = Date.parse(dateObj)
		dateObj = DateTime.fromMillis(dateObj)

		if (dateObj.invalid !== null) {
			return oldDateObj;
		} else {
			return dateObj.year;
		}

	}
}
