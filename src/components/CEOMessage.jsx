import { Canvas } from "@react-three/fiber";
import My3DModel from "./models/My3DModel";
import { AppImages } from "@/constant/AppImages";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import Static3DModel from "./models/Model3D";




const CeoMessage = () => {
    const { CeoImg } = AppImages;
    return (
        <section className="relative px-4 sm:px-6 py-8 md:py-12 lg:py-16 flex flex-col items-center justify-center">
            {/* Bot image at top right - hidden on small screens */}
            <div className="absolute -top-10 right-8 h-[150px] w-[180px]   md:-top-20 md:right-0 z-20 md:h-[300px] md:w-[300px] overflow-visible pointer-events-none">
                <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[0, -1.2, 0]} intensity={1} />
                    {/* <My3DModel scale={2} position={[0, -1.5, 0]} /> */}
                    <Static3DModel scale={1} position={[0, -1.5, 0]} />
                    <Environment preset="city" />

                    <OrbitControls enableZoom={false} />
                </Canvas>

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
    );
}

export default CeoMessage;