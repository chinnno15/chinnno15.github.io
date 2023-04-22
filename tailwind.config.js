module.exports = {
	theme: {
		fontFamily: {
			'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
		},
		extend: {
			colors: {
				'ws-blue': {
					100: '#E6F0FF',
					200: '#BFDAFF',
					300: '#99C3FF',
					400: '#4D97FE',
					500: '#006AFE',
					600: '#005FE5',
					700: '#004098',
					800: '#003072',
					900: '#00204C',
				},
			},
			keyframes: {
				'fade-in-top': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
				},
				'fade-in-bottom': {
					'0%': {
						opacity: '0',
						transform: 'translateY(50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
				},
				'fade-in': {
					'0%': {
						opacity: '0',
					},
					'100%': {
						opacity: '1',
					},
				}
			},
			animation: {
				'fade-in-top': 'fade-in-top 0.5s ease-out',
				'fade-in-bottom': 'fade-in-bottom 0.5s ease-out',
				'fade-in': 'fade-in 1.0s ease-out'
			}
		},
	},
	plugins: [],
	content: ['src/**/*.njk', 'src/**/*.js']
}
