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
				sum;

			if (val1 != '' && val2 != '') {
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
				image: "https://d1zjcuqflbd5k.cloudfront.net/files/acc_124439/PIn1?Expires=1383325859&Signature=KuZnW5waAfyZt6b7a~jChrTcJLPeTjplRrCdl0oPkK6RIkN-oL4pRYKib5ZWgCNqvV26tEPCbl1sOCIe5JELdkuAeldxrvPMJ6sGYKi-gnrCH~27mLE5OmoyaIN79zQSbfMFlys4Ckq4c~NO6HS~~RZKMMRvEUemaVb2YD3Tr3Q_&Key-Pair-Id=APKAJTEIOJM3LSMN33SA"
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