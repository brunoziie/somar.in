var APP = APP || {};

APP.Sentences = {
	getSentence: function (v1, v2) {
		var combination = v1 + '+' + v2,
			result = v1 + v2;

		if (result > (9999 * 9999)) {
			return this.data.bignum;
		}
		if (result > 2 && result < 10) {
			return this.data.tinynum;
		}


		if ((v1 == 0 || v2 == 0) && v1 != v2) {
			return this.data.sumWithZero;
		}

		return this.data[combination] || this.data[result] || '';
	},

	data: {
		'tinynum': 'Vamos lá, me desafie, posso fazer cálculos maiores que isso.',
		'bignum': 'Acho que você não conseguiria calcular isso só',
		'sumWithZero': 'Sério que você quer somar zero a um número?',
		'0+0': 'Você realmente precisa de um aplicativo para somar 0+0?',
		'1+1': '... ou não',
		'69': 'Safadênhooo...',
		'24': 'Hmm.. vinte e quatro...',
		'333': 'Meio besta',
		'667': 'Vizinho da besta',
		'32': 'É nessa linha que se inicia todo o mal',
		'678': 'Seu salário?'
	}
};