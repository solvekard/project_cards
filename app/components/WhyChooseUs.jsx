// import { FaHandshake, FaClipboardList, FaChartLine, FaLeaf, FaPaintBrush } from 'react-icons/fa';

const WhyChooseUs = ({data}) => {
  // const features = [
  //   {
  //     title: "Simplify Networking",
  //     description: "Traditional business cards are outdated and inconvenient. SolveKard's NFC-enabled cards offer instant sharing with just a tap or scan—no apps required.",
  //     icon: <FaHandshake className="w-8 h-8" />
  //   },
  //   {
  //     title: "Stay Organized",
  //     description: "Ditch the pile of lost contacts. SolveKard's platform helps you organize, tag, and prioritize leads, ensuring no opportunity slips through the cracks.",
  //     icon: <FaClipboardList className="w-8 h-8" />
  //   },
  //   {
  //     title: "Track Your Impact",
  //     description: "With analytics and CRM integrations, you can monitor engagement and turn casual introductions into meaningful relationships.",
  //     icon: <FaChartLine className="w-8 h-8" />
  //   },
  //   {
  //     title: "Eco-Friendly Connections",
  //     description: "Save paper, reduce waste, and embrace a sustainable way to network—because smarter connections shouldn't cost the planet.",
  //     icon: <FaLeaf className="w-8 h-8" />
  //   },
  //   {
  //     title: "Customizable & Scalable",
  //     description: "Whether you're a freelancer or an enterprise team, SolveKard offers personalized designs and solutions to match your style and scale your business.",
  //     icon: <FaPaintBrush className="w-8 h-8" />
  //   }
  // ];

    return (
      <section className="py-20 px-4 relative z-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose SolveKard?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((data, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg 
                  transition-all duration-500 ease-in-out
                  hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-600 
                  hover:scale-105 hover:shadow-xl 
                  group transform cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg 
                    bg-gradient-to-r from-blue-500/20 to-purple-500/20
                    group-hover:from-white/20 group-hover:to-white/30 
                    transition-all duration-500"
                  >
                    <div className="transform group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500">
                      {data.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold ml-4 
                    group-hover:text-white 
                    transition-colors duration-500"
                  >
                    {data.title}
                  </h3>
                </div>
                <p className="text-gray-400 group-hover:text-gray-100 
                  transition-colors duration-500 leading-relaxed"
                >
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  

 
  //   <section className="py-20 px-4 relative z-20">
  //     <div className="max-w-7xl mx-auto">
  //       <h2 className="text-4xl font-bold text-center mb-12">Why Choose SolveKard?</h2>
  //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  //         {features.map((feature, index) => (
  //           <div
  //             key={index}
  //             // className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 
  //             //            backdrop-blur-sm p-6 rounded-xl
  //             //            transform hover:scale-105 transition-all duration-300
  //             //            border border-gray-700/50 hover:border-gray-500
  //             //            shadow-lg hover:shadow-xl"
  //             className="p-6 border rounded-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-600 hover:text-white group"
  //           >
  //             <div className="flex items-center mb-4">
  //               <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20">
  //                 {feature.icon}
  //               </div>
  //             </div>
  //             <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
  //             <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default WhyChooseUs;


