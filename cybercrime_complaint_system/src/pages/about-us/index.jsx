import Footer from 'components/ui/Footer';
import Header from 'components/ui/Header';
import React from 'react';
import ashwinImg from './images/ashwin.jpg';
import namrataImg from './images/Namrata.jpg';
import nitishImg from './images/nitish.jpg';

const team = [
  {
    name: 'Ashwin Ghute',
    role: 'Lead Developer',
    img: ashwinImg,
    desc: 'Ashwin is a recent B.Tech graduate and a student at CDAC Mumbai, passionate about software development and emerging technologies. He is eager to apply his skills to real-world projects and contribute in the tech industry.',
  },
  {
    name: 'Namrata Mandloi',
    role: 'UI/UX Designer',
    img: namrataImg,
    desc: 'Namrata is a postgraduate and a student at CDAC Mumbai. With a strong foundation in programming and problem-solving, she building innovative tech solutions and launching her career in software development.',
  },
  {
    name: 'Nitish Panwar',
    role: 'Project Manager',
    img: nitishImg,
    desc: 'Nitish is a B.Tech graduate and a student at CDAC Mumbai. With a strong foundation in programming and problem-solving, he is building innovative tech solutions and launching his career in software development.',
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <p className="text-center max-w-2xl mx-auto mb-12 text-gray-700">
          We are a dedicated team working to make cybercrime reporting simple, secure, and accessible for everyone.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-200"
              />
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-indigo-600 mb-2">{member.role}</p>
              <p className="text-gray-600 text-center">{member.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AboutUs;