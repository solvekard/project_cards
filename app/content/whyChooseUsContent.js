import { 
    FaHandshake, 
    FaListCheck, 
    FaChartLine, 
    FaLeaf,  
    FaPaintbrush
  } from 'react-icons/fa6';
  
  const whyChooseUsContent = [
    {
      title: "Simplify Networking",
      description: "Traditional business cards are outdated and inconvenient. SolveKard's NFC-enabled cards offer instant sharing with just a tap or scan—no apps required.",
      icon: <FaHandshake className="w-8 h-8" />
    },
    {
      title: "Stay Organized",
      description: "Ditch the pile of lost contacts. SolveKard's platform helps you organize, tag, and prioritize leads, ensuring no opportunity slips through the cracks.",
      icon: <FaListCheck className="w-8 h-8" />
    },
    {
      title: "Track Your Impact",
      description: "With analytics and CRM integrations, you can monitor engagement and turn casual introductions into meaningful relationships.",
      icon: <FaChartLine className="w-8 h-8" />
    },
    {
      title: "Eco-Friendly Connections",
      description: "Save paper, reduce waste, and embrace a sustainable way to network—because smarter connections shouldn't cost the planet.",
      icon: <FaLeaf className="w-8 h-8" />
    },
    {
      title: "Customizable & Scalable",
      description: "Whether you're a freelancer or an enterprise team, SolveKard offers personalized designs and solutions to match your style and scale your business.",
      icon: <FaPaintbrush className="w-8 h-8" />
    }
  ];

  export default whyChooseUsContent;