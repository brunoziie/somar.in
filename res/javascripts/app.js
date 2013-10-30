var APP;

APP = {
	setup: function () {
		this.events();
	},

	events: function () {
		var $doc = $(document),
			$display = $('#valueInput');

		$doc.on('tap', '.digit', function (e) {
			var displayValue = $display.val(),
				value = this.value;

			$display.val(displayValue + value);
		});
	},

	sum: function (string) {
		var value = 0,
			parts = string.split('+'),
			len = parts.length,
			i;

		for (i = 0; i < len; i += 1) {
			value += parseInt(parts[i]);
		}

		return value;
	}

};


$(window).on('load', function (e) {
	APP.setup();
})	