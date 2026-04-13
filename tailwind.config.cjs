const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
				condensed: ['Montserrat', 'sans-serif'],
				kodchasan: ['Kodchasan', 'sans-serif']
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
