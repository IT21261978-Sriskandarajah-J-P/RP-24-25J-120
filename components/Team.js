'use client';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Mr.Kanishka Prajeewa Yapa',
    role: 'Supervisor',
    image: '/team/kanishka.jpg',
    email: 'mailto:kanishka.y@sliit.lk',
  },
  {
    name: 'Mr.Tharaniyawarma.K',
    role: 'Co-Supervisor',
    image: '/team/warma.jpg',
    email: 'mailto:tharaniyawarma.k@sliit.lk',
  },
  {
    name: 'Parthika.K',
    role: 'Team Leader',
    image: '/team/parthika.png',
    email: 'mailto:it20601638@my.sliit.lk',
  },
  {
    name: 'Satkurulingam.S ',
    role: 'Member',
    image: '/team/savi.png',
    email: 'mailto:it21282072@my.sliit.lk',
  },
  {
    name: 'Sriskandarajah J.P',
    role: 'Member',
    image: '/team/joanna.png',
    email: 'mailto:it21261978@my.sliit.lk',
  },
  {
    name: 'Dassanayake E.D',
    role: 'Member',
    image: '/team/eranga.jpg',
    email: 'mailto:it21192982@my.sliit.lk',
  }
  
];

export default function Team() {
  return (
    <section id="team" className="bg-[#0492C2] text-center py-20 px-4 text-white">
      <h2 className="text-4xl font-bold mb-12">Team</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
            className="bg-white text-gray-800 rounded-xl shadow-md w-60 flex flex-col items-center py-6 px-4 hover:shadow-lg transition-shadow"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 object-cover rounded-full shadow-md mb-4"
            />
            <h3 className="font-bold text-lg text-center">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.role}</p>

            <div className="flex gap-3 mt-4">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded border hover:bg-blue-600 hover:text-white transition"
                >
                  <Linkedin size={18} />
                </a>
              )}
              {member.facebook && (
                <a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded border hover:bg-blue-600 hover:text-white transition"
                >
                  <Facebook size={18} />
                </a>
              )}
              {member.email && (
                <a
                  href={member.email}
                  className="p-2 rounded border hover:bg-blue-600 hover:text-white transition"
                >
                  <Mail size={18} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}