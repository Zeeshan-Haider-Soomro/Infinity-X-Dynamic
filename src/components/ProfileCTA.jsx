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
import My3DModel from "./My3DModel";
import CeoMessage from "./CEOMessage";
import { awards, feedbackList, projects, serviceCards } from "@/data/serviceCards";
import { useParams } from "react-router-dom"; // ⬅️ ADD THIS
import Static3DModel from "./models/Model3D";
import Modal from "./ui/modal";

// This is your service-specific data
const serviceContent = {
    "2d-animation": {
        title: "Welcome to Our Vibrant World of",
        highlight: "2D Animations!",
        sectionHeading: (
            <h1 className="text-3xl md:text-5xl font-secular font-bold text-center mb-4">
                BENEFITS OF <br />
                <span className=" text-[#C55EBD]">2D </span>VIDEO <span className=" text-[#C55EBD]">ANIMATIONS</span>
            </h1>
        ),
        sectionDescription:
            "With our 2D animations, you can engage customers with compelling visuals, enjoy faster loading time with less load on website performance.",
        benefits: [
            {
                title: "ENGAGING STORYTELLING",
                description:
                    "2D animations breathe life into narratives, making them more captivating and memorable.",
            },
            {
                title: "COST-EFFECTIVE PRODUCTION",
                description:
                    "Compared to 3D, 2D animation production is often more affordable.",
            },
            {
                title: "FAST LOADING TIMES",
                description:
                    "2D animations are lightweight, ensuring quick loading on websites.",
            },
        ],
    },
    "3d-animation": {
        title: "Step Into the Future with",
        highlight: "3D Animations!",
        sectionHeading: (
            <h1 className="text-3xl md:text-5xl font-secular font-bold text-center mb-4">
                ADVANTAGES OF <br />
                <span className=" text-[#C55EBD]">3D </span>VIDEO <span className=" text-[#C55EBD]">ANIMATIONS</span>
            </h1>
        ),
        sectionDescription:
            "Our 3D animation services offer realism and immersive experiences perfect for product demos, architectural visualizations, and more.",
        benefits: [
            {
                title: "IMMERSIVE EXPERIENCES",
                description:
                    "3D animation creates ultra-realistic visuals that fully engage users.",
            },
            {
                title: "VERSATILITY IN APPLICATION",
                description:
                    "Used in architecture, healthcare, gaming, and industrial design.",
            },
            {
                title: "HIGHER ENGAGEMENT",
                description:
                    "Boosts retention by making concepts visually compelling.",
            },
        ],
    },
    "web-development": {
        title: "Let's Build with",
        highlight: "Web Development",
        sectionHeading: (
            <h1 className="text-3xl md:text-5xl font-secular font-bold text-center mb-4">
                CRAFTING YOUR <span className=" text-[#C55EBD]">DIGITAL</span> <br /> PRESENCE
            </h1>
        ),
        sectionDescription:
            "We develop blazing fast, secure, and modern websites to elevate your brand and digital presence.",
        benefits: [
            {
                title: "RESPONSIVE DESIGN",
                description: "Websites that work flawlessly on all devices.",
            },
            {
                title: "SEO FRIENDLY",
                description: "Optimized for visibility on Google and other search engines.",
            },
            {
                title: "SECURE AND SCALABLE",
                description: "Built with modern frameworks and best practices.",
            },
        ],
    },
    "logo-animation": {
        title: "Bring Your Brand to Life with",
        highlight: "Logo Animation!",
        sectionHeading: (
            <h1 className="text-3xl md:text-5xl font-secular font-bold text-center mb-4">
                ELEVATE YOUR BRAND WITH <br />
                <span className=" text-[#C55EBD]">LOGO </span>ANIMATION
            </h1>
        ),
        sectionDescription:
            "Logo animations add a dynamic touch to your brand identity, making it memorable and engaging.",
        benefits: [
            {
                title: "ENHANCED BRAND RECOGNITION",
                description:
                    "Animated logos create a lasting impression, making your brand more memorable.",
            },
            {
                title: "VERSATILE USAGE",
                description:
                    "Perfect for websites, social media, and video content to enhance brand visibility.",
            },
            {
                title: "CREATIVE EXPRESSION",
                description:
                    "Showcase your brand's personality and values through unique animations.",
            },
        ],
    },
    "cartoon-animation": {
        title: "Engage with",
        highlight: "Cartoon Animation!",
        sectionHeading: (
            <h1 className="text-3xl md:text-5xl font-secular font-bold text-center mb-4">
                BRING YOUR IDEAS TO LIFE WITH <br />
                <span className=" text-[#C55EBD]">CARTOON </span>ANIMATION
            </h1>
        ),
        sectionDescription:
            "Our cartoon animations are perfect for storytelling, marketing, and educational content, making complex ideas fun and engaging.",
        benefits: [
            {
                title: "FUN AND ENGAGING",
                description:
                    "Cartoon animations simplify complex ideas, making them entertaining and easy to understand.",
            },
            {
                title: "WIDE APPEAL",
                description:
                    "Perfect for all ages, making your content accessible and enjoyable.",
            },
            {
                title: "CREATIVE STORYTELLING",
                description:
                    "Bring characters and stories to life with vibrant animations.",
            },
        ],
    },
    "whiteboard-videos": {
        title: "Explain with",
        highlight: "Whiteboard Videos!",
        sectionHeading: (
            <h1 className="text-3xl md:text-5xl font-secular font-bold text-center mb-4">
                SIMPLIFY YOUR MESSAGE WITH <br />
                <span className=" text-[#C55EBD]">WHITEBOARD </span>VIDEOS
            </h1>
        ),
        sectionDescription:
            "Whiteboard videos are perfect for educational content, explainer videos, and marketing campaigns, making learning fun and engaging.",
        benefits: [
            {
                title: "EFFECTIVE COMMUNICATION",
                description:
                    "Whiteboard animations simplify complex topics, making them easy to understand.",
            },
            {
                title: "VISUAL LEARNING",
                description:
                    "Combines visuals and narration for better retention and engagement.",
            },
            {
                title: "FLEXIBLE APPLICATIONS",
                description:
                    "Ideal for training, marketing, and educational purposes.",
            },
        ],
    },
    "vfx": {
        title: "Transform Reality with",
        highlight: "VFX!",
        sectionHeading: (
            <h1 className="text-3xl md:text-5xl font-secular font-bold text-center mb-4">
                UNLEASH THE POWER OF <br />
                <span className=" text-[#C55EBD]">VFX </span>ANIMATION
            </h1>
        ),
        sectionDescription:
            "Our VFX services bring imagination to life, creating stunning visual effects for films, games, and more.",
        benefits: [
            {
                title: "REALISM AND DETAIL",
                description:
                    "VFX adds depth and realism to animations, enhancing visual storytelling.",
            },
            {
                title: "CREATIVE FREEDOM",
                description:
                    "Push the boundaries of imagination with limitless creative possibilities.",
            },
            {
                title: "INDUSTRY APPLICATIONS",
                description:
                    "Used in film, gaming, advertising, and more to create captivating visuals.",
            },
        ],
    },

};



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


sectionHeading: (
    <div className="text-center mb-4">
        <h1 className="text-3xl md:text-5xl font-secular font-bold">
            BENEFITS OF <br />
            <span className="text-[#C55EBD]">3D </span>VIDEO <span className="text-[#C55EBD]">ANIMATIONS</span>
        </h1>
    </div>
)
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

    const [selectedVideo, setSelectedVideo] = useState(null);
    const [index, setIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { serviceId } = useParams();
    const currentService = serviceContent[serviceId] || serviceContent["2d-animation"]; // fallback


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
                    <h1 className="text-2xl font-secular md:text-5xl font-bold text-center px-14 md:px-4">
                        {currentService.title} <br />
                        <span className="text-purple-500">{currentService.highlight}</span>
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
            </div>

            {/* Service Cards */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-7">
                    {serviceCards.map((card, index) => (
                        <Card key={index} className="bg-white/10 p-6 text-white">
                            <div className="flex justify-between items-start">
                                <card.image className="w-full h-48 object-cover mb-4 rounded-lg" />
                                <div className="pl-4">
                                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                                    <p className="text-gray-400 mb-4">{card.description}</p>
                                    <CustomButton onClick={() => setIsModalOpen(true)}>Learn More</CustomButton>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>


            <section className="">
                <AboutCategory
                    sectionHeading={
                        serviceContent[serviceId]?.sectionHeading || sectionHeading
                    }
                    sectionDescription={
                        serviceContent[serviceId]?.sectionDescription || sectionDescription
                    }
                    cards={cardData}
                />
            </section>

            {/* CEO message section */}
            <CeoMessage />



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
                        {projects.map((project) => (
                            <Card
                                key={project.id}
                                className="bg-[#320142] text-white p-4 text-center border-0 relative group cursor-pointer"
                                onClick={() => setSelectedVideo(project.video)}
                            >
                                <p className="text-lg font-semibold mb-2">{project.title}</p>

                                <div className="relative">
                                    <video
                                        className="w-full object-cover rounded-lg h-[180px]"
                                        src={project.video}
                                        muted
                                        preload="metadata"
                                        controls={false}
                                    />

                                    {/* Center Play Icon Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 rounded-lg transition">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="48"
                                            height="48"
                                            fill="white"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </Card>
                        ))}

                        {selectedVideo && (
                            <Modal onClose={() => setSelectedVideo(null)}>
                                <video
                                    src={selectedVideo}
                                    controls
                                    autoPlay
                                    className="w-full h-[70vh] object-contain"
                                />
                            </Modal>
                        )}
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

            <section className="relative overflow-visible ">

                <div className="py-10 px-16 z-20">

                    <div className=" absolute right-0 h-[180px] w-[180px]  md:-top-36 md:right-0 z-0 md:h-[300px] md:w-[300px] overflow-visible pointer-events-none">
                        <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[0, -1.2, 0]} intensity={1} />
                            {/* <My3DModel scale={2} position={[0, -1.5, 0]} /> */}
                            <Static3DModel scale={1} position={[0, -1.5, 0]} />
                            <Environment preset="city" />

                            <OrbitControls enableZoom={false} />
                        </Canvas>

                    </div>
                    <FAQSection />
                </div>
            </section>


            <AchievementsSection />

            <div className="bg-[#320142] text-white py-8 md:py-16 px-4 md:px-16">
                <div className="relative flex flex-col md:flex-row items-center justify-between  text-white p">
                    <div>
                        <h1 className="text-2xl md:text-4xl font-bold mb-4 font-secular
                        ">We Love <span className="text-[#8B7190]">Feedback !</span></h1>
                        <p className="text-lg md:text-xl font-light mb-6">
                            Share your thoughts with us, and let's turn your feedback into the masterpiece that shapes our journey.</p>
                    </div>
                    <div className="absolute right-0 h-[180px] w-[180px]  md:-top-50 md:right-0 z-0 md:h-[300px] md:w-[300px] overflow-visible pointer-events-none">
                        <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[0, -1.2, 0]} intensity={1} />
                            {/* <My3DModel scale={2} position={[0, -1.5, 0]} /> */}
                            <Static3DModel scale={.7} position={[0, -1.5, 0]} />
                            <Environment preset="city" />

                            <OrbitControls enableZoom={false} />
                        </Canvas>

                    </div>
                </div>
                <div className="flex flex-col md:flex-row flex-wrap gap-6 text-white">
                    {feedbackList.map((item, index) => (
                        <Card
                            key={index}
                            className="flex-1 bg-[#340740] border-blue-900 text-white p-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
                        >
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                                {/* Profile Section */}
                                <div className="flex-shrink-0 text-center sm:text-left">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full object-cover mx-auto sm:mx-0"
                                    />
                                    <h2 className="mt-2 text-lg font-semibold">{item.name}</h2>
                                    <p className="text-yellow-400 font-medium">{item.rating}</p>
                                </div>

                                {/* Feedback Text */}
                                <div className="text-sm text-gray-300 sm:text-left">
                                    <p>{item.feedback}</p>
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
