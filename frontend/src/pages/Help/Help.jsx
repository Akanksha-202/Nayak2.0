import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


const Help = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto py-20">

                {/* <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="mb-4">"</p>
            </section> */}
                <section className="flex items-center mb-12">
                    <div className="w-1/2 pr-8">
                        <h2 className="text-2xl font-bold mb-4">Our Story, Our Mission </h2>
                        <p>Our story begins with a vision: to stand as a beacon of hope in the darkness of abuse, fraud, and danger. Driven by the belief that every voice deserves to be heard, we set out to create a platform where victims can find solace, support, and strength.With the power of artificial intelligence, we've forged a path to connect individuals with the resources they need most urgently. Our mission is clear: to bridge the gap between victims and authorities, fostering understanding and collaboration to tackle conflicts head-on.At the heart of our platform lies the unwavering commitment to amplify the voices of those affected by adversity. Through empathy and innovation, we empower survivors to reclaim their narrative and rebuild their lives.Together, we're not just rewriting the story of victimhood – we're rewriting the story of resilience, empowerment, and justice."</p>
                    </div>
                    <div className="w-1/2">
                        <img src="/path/to/your/image.jpg" alt="Our Mission" className="w-full" />
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4"></h2>
                    <h2 className="text-2xl font-bold mb-4">Developer Team </h2>
                    
                    <p>Email: jhaakanksha202@gmail.com</p>
                    <div className="flex mt-4">
                        <a href="https://github.com/Akanksha-202" className="mr-4">Github</a>
                        <a href="https://twitter.com/Akanksha_202" className="mr-4">Twitter</a>
                        <a href="https://www.linkedin.com/in/akanksha-jha-8609a422a/">LinkedIn</a>
                    </div>

                    <p>Email: nitya055btit21@igdtuw.ac.in</p>
                    <div className="flex mt-4">
                        <a href="https://github.com/Nitya-Pasrija" className="mr-4">Github</a>
                        <a href="https://twitter.com/NityaPasrija" className="mr-4">Twitter</a>
                        <a href="https://www.linkedin.com/in/nitya-pasrija/">LinkedIn</a>
                    </div>
                    <p>Email: samiksha043btit21@igdtuw.ac.in</p>
                    <div className="flex mt-4">
                        <a href="https://www.facebook.com/yourcompany" className="mr-4">Github</a>
                        <a href="https://www.twitter.com/yourcompany" className="mr-4">Twitter</a>
                        <a href="https://www.linkedin.com/company/yourcompany">LinkedIn</a>
                    </div>
                    <p>Email: vashitva mail</p>
                    <div className="flex mt-4">
                        <a href="https://www.facebook.com/yourcompany" className="mr-4">Github</a>
                        <a href="https://www.twitter.com/yourcompany" className="mr-4">Twitter</a>
                        <a href="https://www.linkedin.com/company/yourcompany">LinkedIn</a>
                    </div>
                </section>

               
            </div>
            <Footer />
        </>
    );
};

export default Help;
