import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';

const ProfileCard = ({ name, title, description, socialLinks, photoUrl }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
    <img 
      src={photoUrl} 
      alt={`${name}'s profile`} 
      className="w-[150px] h-[150px] rounded-full mb-4 object-cover"
    />
    <h2 className="text-xl font-bold mb-1">{name}</h2>
    <h3 className="text-teal-500 mb-2">{title}</h3>
    <p className="text-center text-gray-700 mb-4">{description}</p>
    <div className="flex space-x-4">
      {socialLinks.twitter && (
        <a href={socialLinks.twitter} className="text-teal-500">
          <Twitter size={24} />
        </a>
      )}
      {socialLinks.linkedin && (
        <a href={socialLinks.linkedin} className="text-teal-500">
          <Linkedin size={24} />
        </a>
      )}
      {socialLinks.github && (
        <a href={socialLinks.github} className="text-teal-500">
          <Github size={24} />
        </a>
      )}
    </div>
  </div>
);

const ProfileGrid = () => {
  const profiles = [
    {
      name: "Alice Johnson",
      title: "CEO",
      description: "Passionate about innovation and technology in healthcare.",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      },
      photoUrl: "/api/placeholder/150/150"
    },
    {
      name: "Bob Smith",
      title: "CTO",
      description: "Experienced software architect and tech enthusiast.",
      socialLinks: {
        twitter: "#",
        linkedin: "#"
      },
      photoUrl: "/api/placeholder/150/150"
    },
    {
      name: "Carol Davis",
      title: "CFO",
      description: "Financial expert with a focus on sustainable growth.",
      socialLinks: {
        twitter: "#",
        linkedin: "#"
      },
      photoUrl: "/api/placeholder/150/150"
    },
    {
      name: "David Wilson",
      title: "COO",
      description: "Operations specialist with a passion for efficiency.",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      },
      photoUrl: "/api/placeholder/150/150"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {profiles.map((profile, index) => (
        <ProfileCard key={index} {...profile} />
      ))}
    </div>
  );
};