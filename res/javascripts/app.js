var APP;

APP = {
	setup: function () {
		this.events();
	},

	events: function () {
		var that = this,
			$doc = $(document),
			$display = $('#valueInput');

		$doc.on('tap', '.digit', function (e) {
			var displayValue = $display.val(),
				value = this.value;

			$display.val(displayValue + value);
		});

		$doc.on('tap', '#clear', function () {
			$display.val('');
		});

		$doc.on('tap', '#sum', function () {
			var res = that.sum($display.val());
			$display.val(res);
		});
	},

	sum: function (string) {
		var tratedString = string.replace(/(^\+|\+$)/g, ''),
			value = 0,
			parts = tratedString.split('+'),
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