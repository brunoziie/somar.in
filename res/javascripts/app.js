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

		$doc.on('click', '#share', function () {
			that.facebookPost(that._facebookText);
		});

		$doc.on('click', '#sum', function () {
			var val1 = $('#value1').val(),
				val2 = $('#value2').val(),
				regex = /[0-9]+/,
				sum;

			if (val1 != '' && val2 != '') {

				if (!regex.test(val1) || !regex.test(val2)) {
					alert('Você não sabe o que é um numero?');
					return false;
				}

				sum = that.sum();
				that._facebookText = val1 + '+' + val2 + '' + '=' + sum.result;

				$('#result').text(sum.result);
				$('#message').text(sum.message);

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
		var val1 = parseInt($('#value1').val(), 10),
			val2 = parseInt($('#value2').val(), 10);

		return {
			result: (val1 + val2),
			message: APP.Sentences.getSentence(val1, val2)
		}
	}
};

$(window).on('load', function (e) {
	APP.setup();
});