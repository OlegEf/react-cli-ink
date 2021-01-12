'use strict';
const React = require('react');
const {Text, Box} = require('ink');

const App = () => {

	const [counter, setCounter] = React.useState(0);
		
	React.useEffect(() => {
		const timer = setInterval(() => {
			setCounter((previusCounter) => previusCounter +1);
		}, 100);

		return () => {
				clearInterval(timer);
			};
	},[]);

	return <Text color="red">{counter} </Text>;
};

		
module.exports = App;