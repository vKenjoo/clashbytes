import React, { useRef } from 'react';
import SlickSlider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
    {
        image: '/CHARACTERS_WITH_BG/PYTHON - 1.jpg',
        title: 'PYTHIE',
        description: 'This is a description',
        url: '/confirm' // Update URL to point to the Confirm route
    },
    {
        image: '/CHARACTERS_WITH_BG/JAVA - 1.jpg',
        title: 'JAVA',
        description: 'Java is a programming language famous for its ease of use. You write Java code once, and it can run on nearly any device, making it versatile for many applications.',
        url: '/confirm' // Update URL to point to the Confirm route
    },
    {
        image: '/CHARACTERS_WITH_BG/HTML - 1.jpg',
        title: 'HATMEL',
        description: 'This is a third description',
        url: '/confirm' // Update URL to point to the Confirm route
    },
    {
        image: '/CHARACTERS_WITH_BG/SWIFT - 1.jpg',
        title: 'CSAR',
        description: 'This is a fourth description',
        url: '/confirm' // Update URL to point to the Confirm route
    },
    {
        image: '/CHARACTERS_WITH_BG/CSS - 1.jpg',
        title: 'SWIFTEE',
        description: 'This is a fifth description',
        url: '/confirm' // Update URL to point to the Confirm route
    }
];

const Slider = ({ onSelect }) => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false, // Remove dots
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Adjust the number of slides to show
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="flex flex-col items-center">
            <div className="mt-4 max-w-6xl"> {/* Set a maximum width for the slider */}
                <SlickSlider ref={sliderRef} {...settings}>
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="text-center cursor-pointer m-0 p-0 group relative rounded-lg overflow-hidden shadow-sm"
                            onClick={() => onSelect(slide)}
                            style={{
                                width: '250px', // Increased width
                                height: '450px', // Increased height
                            }}
                        >
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                                <p className="text-white">{slide.description}</p>
                            </div>
                            <p className="text-white text-2xl font-bold mt-2">{slide.title}</p>
                        </div>
                    ))}
                </SlickSlider>
            </div>
        </div>
    );
};

export default Slider;
    