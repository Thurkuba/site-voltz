const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Barlow', 'sans-serif'],
				condensed: ['Barlow Condensed', 'sans-serif']
			},
			colors: {
				amarelo: '#FFCC00',
				cinza: '#575556',
				'cinza-claro': '#8a8888',
				preto: '#0a0a0a'
			}
		}
	},

	plugins: []
};

module.exports = config;
