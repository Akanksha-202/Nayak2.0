import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12 fixed bottom-0 w-full">
            <div className="container mx-auto flex flex-wrap justify-around px-32">
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
                    <h4 className="text-lg font-semibold mb-4">Features</h4>
                    <ul>
                        <li><a href="#"></a></li>
                        <li><a href="#">Contact NGOs</a></li>
                        <li><a href="#">Community Wall</a></li>
                        <li><a href="#">Live Analytics</a></li>
                        <li><a href="#">Posts Complaint</a></li>
                        <li><a href="#">AI Chatbot</a></li>
                        <li><a href="#">Helpline Numbers</a></li>
                    </ul>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
                    <h4 className="text-lg font-semibold mb-4">About Us</h4>
                    <ul>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Our Partners</a></li>
                        <li><a href="#">Connect with Developer</a></li>
                        <li><a href="#">Socials</a></li>
                    </ul>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
                    <h4 className="text-lg font-semibold mb-4"></h4>
                    <ul className='flex'>
                        <li className='text-5xl my-10'><a href="#">Nayak2.0</a></li>
                        <img 
                            src="https://res.cloudinary.com/damtnzoo8/image/upload/v1708188922/nayak_logo_with_name_fnuwqw.png" 
                            alt="logo" 
                            className="w-1/2 mx-7"
                        />

                    </ul>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
