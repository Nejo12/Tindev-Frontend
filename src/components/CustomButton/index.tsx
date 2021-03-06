import React from 'react';
import { Button } from 'react-bootstrap';

type CustomBtn = {
	text: string;
	className?: string;
};

const CustomButton = ({ text, ...otherProps }: CustomBtn) => {
	return (
		<Button type='submit' {...otherProps}>
			<span className='m-auto'>{text}</span>
		</Button>
	);
};

export default CustomButton;
