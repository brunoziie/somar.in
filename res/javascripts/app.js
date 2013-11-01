var APP;

APP = {
	_facebookText: '',

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

		$doc.on('click', '#share', function () {
			that.facebookPost(that._facebookText);
		});

		$doc.on('click', '#sum', function () {
			var val1 = $('#value1').val(),
				val2 = $('#value2').val(),
				regex = /[0-9]+/,
				sum;

			if (val1 != '' && val2 != '') {

				if (!regex.text(val1) || !regex.text(val2)) {
					alert('Você não sabe o que é um numero?');
					return false;
				}

				sum = that.sum();
				that._facebookText = val1 + '+' + val2 + '' + '=' + sum;

				$('#result').text(that.sum());
				$('#myModal').modal('show');
				$('#value1, #value2').val('');
			} else {
				alert('Informe os dois valores que deseja somar!');
			}
		});
	},

	facebookPost: function (text) {
		if (typeof FB != 'undefined') {
			FB.api('me/ziiesomarapp:somou', 'post', {valor: {
				title: text,
				image: "http://brunoziie.github.io/somar.in/res/images/128.png"
			}}, function(response) {
				console.log(response);
			});
		};
	},

	sum: function (string) {
		var val1 = $('#value1').val(),
			val2 = $('#value2').val();

		return parseInt(val1, 10) + parseInt(val2, 10);
	}
};

$(window).on('load', function (e) {
	APP.setup();
});