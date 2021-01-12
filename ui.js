'use strict';
const React = require('react');
const {Text} = require('ink');
const {Box} = require('ink');

const App = ({name = 'Stranger232332'}) => (
	// <Text backgroundColor="#aa2222">
		// Hello, <Text color="green">{name}</Text>
	// </Text>
	<Box borderStyle="round" marginRight={2} width={45}>
		<Text marginRight={1} backgroundColor="#aa2222">
			fierst word 
			Hello1, <Text color="green">{name}</Text>
		</Text>
		<Text borderStyle="double" backgroundColor="#22aa22">
			second word
			world2, <Text color="green">{name}</Text>
		</Text>

	</Box>
);

// const App2 = ({name = 'App2'}) => (
	// <Box width={34}>
		// <Text backgroundColor="#885cc5">
			// asd
			// Hello2, <Text color="#ff0">{name}</Text>
		// </Text>
	// </Box>
// );
// const App3 = ({name = 'App3 asdasdasdasdasdasdasdasdas'}) => (
	// <Box width={456}>
		// <Text backgroundColor="#2323fd">
			// asd
			// Hello2, <Text color="#ff0">{name}</Text>
		// </Text>
	// </Box>
// );


module.exports = App;
// module.exports = App2;
// module.exports = App3;

		// module.exports = App;App3;



//// !! ink example
// import React, {useState, useEffect} from 'react';
// import {render, Text} from 'ink';
 
	// const Counter = () => {
		// const [counter, setCounter] = useState(0);
	 
		// useEffect(() => {
			// const timer = setInterval(() => {
				// setCounter(previousCounter => previousCounter + 1);
			// }, 100);
	 
			// return () => {
				// clearInterval(timer);
			// };
		// }, []);
	 
		// return <Text color="green">{counter} tests passed</Text>;
	// };
 
// render(<Counter />);

