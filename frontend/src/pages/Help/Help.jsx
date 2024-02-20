// // import React from 'react';
// import Navbar from '../../components/Navbar/Navbar';
// import Footer from '../../components/Footer/Footer';
// import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// const Help = () => {
//     return (
//         <>
//             <Navbar />
//             <div className="container mx-auto px-12 py-12 text-justify">

//                 <section className="flex items-center mb-12 ml-20">
//                     <div className="w-1/2 pr-8">
//                         <h2 className="text-4xl font-bold mb-4">Our Story, Our Mission </h2>
//                         <p className="story-text">Our story begins with a vision: to stand as a beacon of hope in the darkness of <span className='font-bold text-lg'>ABUSE, FRAUD</span> and <span className='font-bold text-lg'>DANGER </span>. Driven by the belief that every voice deserves to be heard, we set out to create a platform where victims can find solace, support, and strength.With the power of artificial intelligence, we've forged a path to connect individuals with the resources they need most urgently. Our mission is clear: to bridge the gap between victims and authorities, fostering understanding and collaboration to tackle conflicts head-on.At the heart of our platform lies the unwavering commitment to amplify the voices of those affected by adversity. Through empathy and innovation, we empower survivors to reclaim their narrative and rebuild their lives.Together, we're not just rewriting the story of victimhood – we're rewriting the story of resilience, empowerment, and justice."</p>
//                     </div>
//                     <div className="w-1/2 relative">
//                         <img src="https://res.cloudinary.com/damtnzoo8/image/upload/v1708358772/Victim_Blaming_In_The_Garb_of_Women_Empowerment_haavfy.jpg" alt="Our Mission" className="h-84 w-84 absolute top-0 left-0 transition-transform transform-gpu scale-100 hover:scale-105" />
//                     </div>
//                 </section>

//                 <section className="mb-12">
//                     <h2 className="text-3xl font-bold mt-12 mb-12 flex justify-center">Developer Team </h2>
//                     <div className="flex items-center mb-4 justify-around">
//                         {/* Developer Team Information */}
//                     </div>
//                 </section>
//             </div>
//             <Footer />
//         </>
//     );
// };

// export default Help;
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';


const Help = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto px-12 py-12 text-justify">

                {/* <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="mb-4">"</p>
            </section> */}
                <section className="flex items-center mb-12 ml-20">
                    <div className="w-1/2 pr-8">
                        <h2 className="text-4xl font-bold mb-4">Our Story, Our Mission </h2>
                        <p>Our story begins with a vision: to stand as a beacon of hope in the darkness of <span className='font-bold text-lg'>ABUSE, FRAUD</span> and <span className='font-bold text-lg'>DANGER </span>. Driven by the belief that every voice deserves to be heard, we set out to create a platform where victims can find solace, support, and strength.With the power of artificial intelligence, we've forged a path to connect individuals with the resources they need most urgently. Our mission is clear: to bridge the gap between victims and authorities, fostering understanding and collaboration to tackle conflicts head-on.At the heart of our platform lies the unwavering commitment to amplify the voices of those affected by adversity. Through empathy and innovation, we empower survivors to reclaim their narrative and rebuild their lives.Together, we're not just rewriting the story of victimhood – we're rewriting the story of resilience, empowerment, and justice."</p>
                    </div>
                    <div className="w-1/2">
                        <img src="https://res.cloudinary.com/damtnzoo8/image/upload/v1708358772/Victim_Blaming_In_The_Garb_of_Women_Empowerment_haavfy.jpg" alt="Our Mission" className="h-84 w-84 relative left-16"  />
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mt-12 mb-12 flex justify-center">Developer Team </h2>
                    <div className="flex items-center mb-4 justify-around">
                        <div className="flex flex-col items-center">
                            <div className="w-56 h-56 bg-blue-500 rounded-full flex items-center justify-center overflow-hidden">
                                <img
                                    src="https://res.cloudinary.com/damtnzoo8/image/upload/v1703313922/gqljrnnttxi46yxbze3h.jpg"
                                    alt="Profile Image"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <div className="flex mt-4">
                                <a href='mailto:jhaakanksha202@gmail.com' className="mr-4"><FaEnvelope className='text-lg' /></a>
                                <a href="https://github.com/Akanksha-202" className="mr-4"><FaGithub className='text-lg' /></a>
                                <a href="https://twitter.com/Akanksha_202" className="mr-4"><FaTwitter className='text-lg' /></a>
                                <a href="https://www.linkedin.com/in/akanksha-jha-8609a422a/"><FaLinkedin className='text-lg' /></a>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-56 h-56 bg-blue-500 rounded-full flex items-center justify-center overflow-hidden">
                                <img
                                    src="https://res.cloudinary.com/damtnzoo8/image/upload/v1708360211/WhatsApp_Image_2024-02-19_at_21.55.57_d6df4496_re8p4e.jpg"
                                    alt="Profile Image"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <div className="flex mt-4">
                                <a href='mail to: nitya055btit21@igdtuw.ac.in' className="mr-4"><FaEnvelope className='text-lg' /></a>
                                <a href="https://github.com/Nitya-Pasrija" className="mr-4"><FaGithub className='text-lg' /></a>
                                <a href="https://twitter.com/NityaPasrija" className="mr-4"><FaTwitter className='text-lg' /></a>
                                <a href="https://www.linkedin.com/in/nitya-pasrija/"><FaLinkedin className='text-lg' /></a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-56 h-56 bg-blue-500 rounded-full flex items-center justify-center overflow-hidden">
                                <img
                                    src="https://res.cloudinary.com/damtnzoo8/image/upload/v1708192180/WhatsApp_Image_2023-02-13_at_21.48.53_u8oith.jpg"
                                    alt="Profile Image"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <div className="flex mt-4">
                                <a href='mail to:samiksha043btit21@igdtuw.ac.in' className="mr-4"><FaEnvelope className='text-lg' /></a>
                                <a href="https://github.com/Nitya-Pasrija" className="mr-4"><FaGithub className='text-lg' /></a>
                                <a href="https://twitter.com/NityaPasrija" className="mr-4"><FaTwitter className='text-lg' /></a>
                                <a href="https://www.linkedin.com/in/nitya-pasrija/"><FaLinkedin className='text-lg' /></a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-56 h-56 bg-blue-500 rounded-full flex items-center justify-center overflow-hidden">
                                <img
                                    src=""
                                    alt="Profile Image"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <div className="flex mt-4">
                                <a href='mail to:vashitva' className="mr-4"><FaEnvelope className='text-lg' /></a>
                                <a href="https://github.com/Nitya-Pasrija" className="mr-4"><FaGithub className='text-lg' /></a>
                                <a href="https://twitter.com/NityaPasrija" className="mr-4"><FaTwitter className='text-lg' /></a>
                                <a href="https://www.linkedin.com/in/nitya-pasrija/"><FaLinkedin className='text-lg' /></a>
                            </div>
                        </div>
                        
                    </div>
                </section>


            </div>
            <Footer />
        </>
    );
};

export default Help;