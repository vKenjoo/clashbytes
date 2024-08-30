import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from '../MP/Slider.jsx';

const MultiPlayerFrame = () => {
	const [selectedSlide, setSelectedSlide] = useState(null);
	const navigate = useNavigate();

	const handleSelect = (slide) => {
		setSelectedSlide(slide);
	};

	const handleConfirm = () => {
		navigate('/confirm', { state: { selectedSlide } });
	};

	const handleBack = () => {
		setSelectedSlide(null);
	};

	return (
		<div className='multiplayer-frame py-3 text-white flex flex-col items-center'>
			<div className='container mx-auto text-center mt-6 max-w-4xl'>
				<h1 className='text-7xl font-bold mb-4'>Choose Your Avatar</h1>
				<Slider onSelect={handleSelect} />
			</div>
			{selectedSlide && (
				<div className='flex justify-center space-x-4 mt-4'>
					<button
						onClick={handleConfirm}
						className='bg-green-500 text-white px-4 py-2 rounded-lg'
					>
						Continue
					</button>
					<button
						onClick={handleBack}
						className='bg-gray-500 text-white px-4 py-2 rounded-lg'
					>
						Back
					</button>
				</div>
			)}
		</div>
	);
};

export default MultiPlayerFrame;
