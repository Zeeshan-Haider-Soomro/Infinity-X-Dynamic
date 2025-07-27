import DynamicHeading from "@/components/DynamicHeading";
import CustomButton from "@/components/CustomButton";
import { useEffect, useState } from "react";
import ContactSocialIcons from "@/components/ContactSocialIcons";
import TalkModal from "@/components/TalkModal";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { ImagesAssets } from "@/utils/ImagesAssets";
import { AchievementsSection } from "@/components/AchievementsSection";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import TileCube, { CubeCluster } from "./CubeTile";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { Card } from "./ui/card";
import AboutCategory from "./AboutCategory";
import { AppImages } from "@/constant/AppImages";
import FAQSection from "./FAQSection";


const phrases = [
    ["Graphic", "Motions"],
    ["3D", "Animations"],
    ["2D", "Animations"],
    ["Social Media", "Marketing"],
    ["Web", "Development"],
    ["Cartoon", "Animation"],
    ["Whiteboard", "Videos"],
    ["Logo", "Animation"],
    ["Augmented", "Reality"],
    ["CGI", "VFX"],
    ["IT", "Solutions"],
    ["SEO", "SMM"],
];

const awards = [
    { src: ImagesAssets.award, alt: "Award 1" },
    { src: ImagesAssets.award, alt: "Award 2" },
    { src: ImagesAssets.award, alt: "Award 3" },
];


const sectionHeading = (
    <div children="">
        <h1 className="text-3xl md:text-5xl font-secular font-bold text-center mb-4">
            BENEFITS OF <br />
            <span className=" text-[#C55EBD]">3D </span>VIDEO <span className=" text-[#C55EBD]">ANIMATIONS</span>
        </h1>
    </div>
);

const sectionDescription = "With our 2D animations, you can engage customers with compelling visuals, enjoy faster loading time with less load on website performance making it easier for your clients and customers to learn about your services and products.";
const cardData = [
    {
        image: ImagesAssets.profileCtaCard,
        title: 'ENGAGING STORYTELLING',
        description:
            '2D animations breathe life into narratives, making them more captivating and memorable, fostering a deeper connection with the audience.',
    },
    {
        image: ImagesAssets.profileCtaCard,
        title: 'COST-EFFECTIVE PRODUCTION',
        description:
            'Compared to 3D animations, 2D animation production is often more affordable, making it an excellent choice for projects with budget constraints.',
    },
    {
        image: ImagesAssets.profileCtaCard,
        title: 'FAST LOADING TIMES',
        description:
            '2D animations are lightweight, ensuring quick loading on websites and applications, contributing to a seamless user experience.',
    },
    {
        image: ImagesAssets.profileCtaCard,
        title: 'VERSATILITY IN STYLE',
        description:
            'From whimsical and playful to sleek and professional, 2D animation offers a versatile range of styles, allowing for customization to suit various brands.',
    },
];



const ProfileCTA = () => {


    const [index, setIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { CeoImg } = AppImages;

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="">
            {/* banner section */}
            <div className="relative w-full h-screen bg-gradient-to-r from-gray-600-950 to-blue-950 flex items-center justify-center overflow-hidden">
                <Canvas shadows camera={{ position: [5, 5, 5], fov: 50 }}>
                    <ambientLight intensity={0.4} />
                    <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
                    <Environment preset="warehouse" />
                    <CubeCluster />
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
                </Canvas>



                {/* Centered Heading */}
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white pointer-events-none z-10">
                    <h1 className="text-3xl font-secular md:text-5xl font-bold text-center px-4">
                        Welcome to Our Vibrant World of <br />
                        <span className="text-purple-500">2D Animations!</span>
                    </h1>
                </div>

                {/* Contact Info – Bottom Left */}
                <div className="absolute bottom-8 left-8 flex flex-col space-y-3 text-white text-sm z-50">
                    <div className="flex items-center space-x-2">
                        <div className="border border-white rounded-full p-2 text-lg">
                            <a href="mailto:info@infinityXdynamic.com" className="hover:text-purple-400">
                                <CiMail />
                            </a>
                        </div>
                        <span>info@infinityXdynamic.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="border border-white rounded-full p-2 text-lg">
                            <a href="tel:+923128379812" className="hover:text-purple-400">
                                <IoIosCall />
                            </a>
                        </div>
                        <span>+92 312 8379812</span>
                    </div>
                </div>

                {/* Social Icons – Right Side */}
                <div className="absolute top-1/2 right-8 transform -translate-y-1/2 flex flex-col space-y-4 text-white text-xl z-50">
                    <a
                        href="https://www.facebook.com/Infinityxdynamics"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-white rounded-full p-2 hover:text-purple-400"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="https://www.twitter.com/Infinityxdynamics"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-white rounded-full p-2 hover:text-purple-400"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://www.linkedin.com/Infinityxdynamics"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-white rounded-full p-2 hover:text-purple-400"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://www.instagram.com/Infinityxdynamics"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-white rounded-full p-2 hover:text-purple-400"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </div>


            <div className="container flex flex-col justify-center items-center mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-center mb-4 text-white">
                    Explore Our 2D Animation Services
                </h1>
                <h2 className="text-2xl font-bold text-[#C55EBD] mb-4">
                    We Provide Whiteboard Animations.|
                </h2>
            </div>

            <div className="container mx-auto px-4 py-8 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-7">
                    {/* Full Row Cards */}
                    <Card className="bg-white/10 p-6 text-white">
                        <div className="flex justify-between items-start">
                            <ImagesAssets.profileCTA1 className="w-full h-48 object-cover mb-4 rounded-lg" />
                            <div className="pl-4">
                                <h3 className="text-xl font-semibold mb-2">Graphic Motions</h3>
                                <p className="text-gray-400 mb-4">Bringing your ideas to life with stunning graphic motions.</p>
                                <CustomButton onClick={() => setIsModalOpen(true)}>Learn More</CustomButton></div>
                        </div>
                    </Card>
                    <Card className="bg-white/10 p-6 text-white">
                        <div className="flex justify-between items-start">
                            <ImagesAssets.profileCTA1 className="w-full h-48 object-cover mb-4 rounded-lg" />
                            <div className="pl-4">
                                <h3 className="text-xl font-semibold mb-2">Graphic Motions</h3>
                                <p className="text-gray-400 mb-4">Bringing your ideas to life with stunning graphic motions.</p>
                                <CustomButton onClick={() => setIsModalOpen(true)}>Learn More</CustomButton></div>
                        </div>
                    </Card>
                    <Card className="bg-white/10 p-6 text-white">
                        <div className="flex justify-between items-start">
                            <ImagesAssets.profileCTA1 className="w-full h-48 object-cover mb-4 rounded-lg" />
                            <div className="pl-4">
                                <h3 className="text-xl font-semibold mb-2">Graphic Motions</h3>
                                <p className="text-gray-400 mb-4">Bringing your ideas to life with stunning graphic motions.</p>
                                <CustomButton onClick={() => setIsModalOpen(true)}>Learn More</CustomButton></div>
                        </div>
                    </Card>
                    <Card className="bg-white/10 p-6 text-white">
                        <div className="flex justify-between items-start">
                            <ImagesAssets.profileCTA1 className="w-full h-48 object-cover mb-4 rounded-lg" />
                            <div className="pl-4">
                                <h3 className="text-xl font-semibold mb-2">Graphic Motions</h3>
                                <p className="text-gray-400 mb-4">Bringing your ideas to life with stunning graphic motions.</p>
                                <CustomButton onClick={() => setIsModalOpen(true)}>Learn More</CustomButton></div>
                        </div>
                    </Card>
                    <Card className="bg-white/10 p-6 text-white">
                        <div className="flex justify-between items-start">
                            <ImagesAssets.profileCTA1 className="w-full h-48 object-cover mb-4 rounded-lg" />
                            <div className="pl-4">
                                <h3 className="text-xl font-semibold mb-2">Graphic Motions</h3>
                                <p className="text-gray-400 mb-4">Bringing your ideas to life with stunning graphic motions.</p>
                                <CustomButton onClick={() => setIsModalOpen(true)}>Learn More</CustomButton></div>
                        </div>
                    </Card>

                </div>
            </div>
            <section className="">
                <AboutCategory
                    sectionHeading={sectionHeading}
                    sectionDescription={sectionDescription}
                    cards={cardData}
                />
            </section>

            {/* CEO message section */}

            <section className="relative px-4 sm:px-6 py-8 md:py-12 lg:py-16 flex flex-col items-center justify-center">
                {/* Bot image at top right - hidden on small screens */}
                <div className="absolute -top-16 sm:-top-20 md:-top-24 right-0 z-10 w-16 sm:w-20 md:w-auto">
                    <ImagesAssets.botTwo className="w-full h-auto" />
                </div>

                {/* CEO Message Card */}
                <div className="relative w-full max-w-[90vw] sm:max-w-[95%] lg:max-w-[1236px] flex-shrink-0 rounded-[15px] md:rounded-[25px] bg-white/10 shadow-[0px_0px_15px_#FFF] md:shadow-[0px_0px_25px_#FFF] text-white px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12 overflow-hidden">
                    {/* Text content */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-center sm:text-left">
                        ~ CEO's Message ~
                    </h2>

                    <p className="text-base sm:text-lg font-light leading-relaxed sm:leading-loose mb-4 sm:mb-5 md:mb-6 w-full sm:w-[90%] md:w-[80%]">
                        At Infinity X Dynamics, we believe that creativity backed by
                        technology has the power to transform brands and reshape industries.
                        From our earliest projects to our latest digital breakthroughs,
                        we've built IXD around one mission — to turn bold ideas into real
                        impact. We don't just develop apps or create visuals — we craft
                        experiences that connect, inspire, and drive results. Every team
                        member, every client, and every campaign is part of our vision to
                        lead the next wave of digital innovation across Pakistan and beyond.
                        Thank you for being a part of our journey. The future is dynamic —
                        and we're just getting started.
                    </p>

                    <div className="mt-4 sm:mt-6 items-center text-center">
                        <p
                            className="text-[#8B7190] text-center sm:text-start w-full sm:w-[80%] md:w-[60%] lg:w-[50%] font-[Poppins] text-xl sm:text-2xl md:text-[32px] italic font-semibold leading-normal mb-2 sm:mb-3 mx-auto"
                            style={{
                                WebkitTextStrokeWidth: "1px",
                                WebkitTextStrokeColor: "#874182",
                            }}
                        >
                            "In a world full of noise, creativity is our code and innovation
                            is our voice."
                        </p>
                        <p className="text-base sm:text-lg font-medium text-white mt-3 sm:mt-4">
                            Founder & CEO - Jahanzaib Akram
                        </p>
                    </div>

                    {/* CEO Image positioned at bottom-right inside the box */}
                    <div className="relative flex items-start mt-6 sm:mt-8 md:mt-10">
                        <div className="w-[100px] sm:w-[120px] md:w-[150px] h-[100px] sm:h-[120px] md:h-[150px] bg-white rounded-[50px] sm:rounded-[60px] md:rounded-[75px] blur-[40px] sm:blur-[50px] md:blur-[60px] absolute -top-24 sm:-top-32 md:-top-40 right-0 sm:right-4" />
                        <img
                            src={CeoImg}
                            alt="CEO"
                            className="relative sm:absolute mx-auto sm:mx-0 sm:right-3 sm:bottom-0 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[269px] md:h-[269px] rounded-full object-cover shadow-[0_0_10px_#874182] sm:shadow-[0_0_15px_#874182] md:shadow-[0_0_20px_#874182] border border-white"
                        />
                    </div>
                </div>
            </section>


            <section className=" w-full pb-4">
                <div className="w-full flex flex-col items-center justify-center text-center px-4 md:h-auto md:flex-row md:justify-between md:text-left md:px-24 md:pb-16">
                    <div>
                        <h3 className="text-white font-secular text-lg md:text-2xl font-bold">
                            See Our Recent <span className="text-[#A95C9C]">Projects</span>
                        </h3>
                        <p className="text-white text-lg md:text-2xl font-bold mt-2">
                            We turn your thoughts into visuals
                        </p>
                    </div>
                    <CustomButton className="mt-4 md:mt-0" to="/our-work">
                        VIEW ALL PROJECTS
                    </CustomButton>
                </div>


                <div className="max-w-full mx-auto px-4 md:px-[122px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[67px] mt-6">
                        <Card className="bg-[#320142] text-white p-4 text-center border-0">
                            <p className="text-lg font-semibold mb-2">TechRec.Com</p>
                            <img
                                src={ImagesAssets.video}
                                alt="Project 1"
                                className="w-full object-cover rounded-lg"
                            />
                        </Card>
                        <Card className="bg-[#320142] text-white p-4 text-center border-0">
                            <p className="text-lg font-semibold mb-2">TechRec.Com</p>
                            <img
                                src={ImagesAssets.video}
                                alt="Project 2"
                                className="w-full object-cover rounded-lg"
                            />
                        </Card>
                        <Card className="bg-[#320142] text-white p-4 text-center border-0">
                            <p className="text-lg font-semibold mb-2">TechRec.Com</p>
                            <img
                                src={ImagesAssets.video}
                                alt="Project 3"
                                className="w-full object-cover rounded-lg"
                            />
                        </Card>
                        <Card className="bg-[#320142] text-white p-4 text-center border-0">
                            <p className="text-lg font-semibold mb-2">TechRec.Com</p>
                            <img
                                src={ImagesAssets.video}
                                alt="Project 1"
                                className="w-full object-cover rounded-lg"
                            />
                        </Card>
                        <Card className="bg-[#320142] text-white p-4 text-center border-0">
                            <p className="text-lg font-semibold mb-2">TechRec.Com</p>
                            <img
                                src={ImagesAssets.video}
                                alt="Project 2"
                                className="w-full object-cover rounded-lg"
                            />
                        </Card>
                        <Card className="bg-[#320142] text-white p-4 text-center border-0">
                            <p className="text-lg font-semibold mb-2">TechRec.Com</p>
                            <img
                                src={ImagesAssets.video}
                                alt="Project 3"
                                className="w-full object-cover rounded-lg"
                            />
                        </Card>
                    </div>
                </div>
            </section>


            <section className="w-full px-6 py-16 ">
                <div className="max-w-[1236px] mx-auto flex flex-col items-center text-center text-white">
                    {/* Title */}
                    <h2 className="text-4xl font-bold mb-4 font-secular">
                        Our <span className="text-[#8B7190]">Achievements</span>
                    </h2>

                    {/* Subtitle */}
                    <p className="max-w-3xl text-lg font-light mb-12">
                        Over 100+ successful projects delivered for clients across 10+
                        industries — from startups to global brands. Our work has earned
                        long-term partnerships in countries like Egypt, UAE, and the UK.
                    </p>

                    {/* Awards */}
                    <div className="flex flex-wrap justify-around items-center">
                        {awards.map((award, index) => (
                            <div
                                key={index}
                                className=" "
                            >
                                <img
                                    src={award.src}
                                    alt={award.alt}
                                    className=""
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className=" px-4  py-2">
                <FAQSection />
            </div>


            <AchievementsSection />

            <div className="bg-[#320142] text-white py-8 md:py-16 px-4 md:px-16">
                <div className="flex flex-col md:flex-row items-center justify-between  text-white p">
                    <div>
                        <h1 className="text-2xl md:text-4xl font-bold mb-4 font-secular
                        ">We Love <span className="text-[#8B7190]">Feedback !</span></h1>
                        <p className="text-lg md:text-xl font-light mb-6">
                            Share your thoughts with us, and let's turn your feedback into the masterpiece that shapes our journey.</p>
                    </div>
                    <div className="hidden md:block">
                        <ImagesAssets.botTwo className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row flex-wrap gap-6 text-white ">
                    {[1, 2].map((_, index) => (
                        <Card
                            key={index}
                            className="flex-1 bg-[#4a015f] text-white p-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
                        >
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                                {/* Profile Section */}
                                <div className="flex-shrink-0 text-center sm:text-left">
                                    <img
                                        src={ImagesAssets.feedbackProfile}
                                        alt="Profile CTA"
                                        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full object-cover mx-auto sm:mx-0"
                                    />
                                    <h2 className="mt-2 text-lg font-semibold">Jennifer Haldoc</h2>
                                    <p className="text-yellow-400 font-medium">★★★★★ 4.0</p>
                                </div>

                                {/* Feedback Text */}
                                <div className="text-sm text-gray-300 sm:text-left">
                                    <p>
                                        "Lorem ipsum is a dummy or placeholder text commonly used in graphic
                                        design, publishing, and web development to fill empty spaces in a
                                        layout that does not yet have content."
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

            </div>

            <TalkModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <ScrollToTopButton />
        </div>
    );
};

export default ProfileCTA;
