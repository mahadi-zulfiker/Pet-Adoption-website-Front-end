import SectionTitle from "./SectionTitle/SectionTitle";


const AboutUs = () => {
    return (
        <div>
            <SectionTitle heading={"About Us"} subHeading={"Why we started"}></SectionTitle>
            <div className="h-full bg-gray-100 dark:bg-[#1a2641d5] shadow-lg p-8 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed  mb-6">Welcome to Paws for a Home! My name is Mic, and I am the proud owner and founder of this heartfelt organization dedicated to finding loving homes for pets in need.</p>
                <span className="text-white">Our Story</span>
                <p className="my-2">The inspiration for Paws for a Home began years ago when I adopted my first rescue pet The joy and unconditional love they brought into my life was immeasurable, and it ignited a passion in me to help other animals find their forever families. I realized that every pet deserves a safe, loving home where they can thrive and be cherished.</p>
                <span className="text-white">Our Mission</span>
                <p className="my-2">At Paws for a Home, our mission is simple: to connect wonderful pets with compassionate people. We work tirelessly to rescue, rehabilitate, and re home animals who have been abandoned, neglected, or surrendered. Every pet that comes through our doors receives the utmost care, medical attention, and love while we search for their perfect match.</p>
                <span className="text-white">Our Team</span>
                <p className="my-2">Our team is a passionate group of animal lovers, each bringing their own unique skills and experiences to our cause. From our dedicated volunteers to our skilled veterinarians, every member of Paws for a Home is committed to making a difference in the lives of animals and their future families.</p>
                <a className="inline-flex items-center mt-2">
                    <img alt="testimonial" src="https://i.ibb.co/n1KHYYp/boy1.png" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                    <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font font-medium text-gray-900 dark:text-white">Mic Tyson</span>
                        <span className="text-gray-500 dark:text-gray-200 text-sm">Owner</span>
                    </span>
                </a>
            </div>
        </div>
    );
};

export default AboutUs;