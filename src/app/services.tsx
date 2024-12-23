import React from "react";
import {
  Briefcase,
  Users,
  ClipboardCheck,
  Star,
  Phone,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: <Briefcase size={40} />,
    title: "Recruitment Solutions",
    description:
      "Customized recruitment strategies to attract and retain top talent tailored to your business needs.",
  },
  {
    icon: <Users size={40} />,
    title: "Team Building",
    description:
      "Strengthen your workforce with tailored team-building workshops and exercises.",
  },
  {
    icon: <ClipboardCheck size={40} />,
    title: "Compliance Consulting",
    description:
      "Ensure your business is up-to-date with labor laws and regulations with expert compliance advice.",
  },
  {
    icon: <Star size={40} />,
    title: "Performance Management",
    description:
      "Develop efficient performance appraisal systems to enhance employee productivity and satisfaction.",
  },
  {
    icon: <Phone size={40} />,
    title: "HR Advisory Services",
    description:
      "Get personalized guidance on HR policies, employee relations, and strategic planning.",
  },
  {
    icon: <Shield size={40} />,
    title: "Conflict Resolution",
    description:
      "Resolve workplace disputes effectively while maintaining a positive work environment.",
  },
];

const HRServices = () => {
  return (
    <section id="services" className="py-12 bg-neutral">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What We Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-md text-center hover:shadow-lg transition-shadow flex flex-col items-center"
            >
              <div className="flex items-center justify-center mb-4 bg-pink text-green rounded-full w-16 h-16">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HRServices;
