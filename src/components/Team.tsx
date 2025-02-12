import React from 'react';

const team = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Medical Director',
    image: 'https://germaindermatology.com/storage/2024/03/Dr.-Germain-Updated-Headshot-768x960-1.webp',
    credentials: 'Board Certified in Aesthetic Medicine',
  },
  {
    name: 'Dr. James Chen',
    role: 'Aesthetic Physician',
    image: 'https://www.skindeepmedicalspa.com/assets/img/feature/doctor.jpg',
    credentials: 'Fellowship in Cosmetic Dermatology',
  },
  {
    name: 'Emma Thompson',
    role: 'Lead Aesthetician',
    image: 'https://i0.wp.com/racquelfrisella.com/wp-content/uploads/2019/05/img_6870.jpeg?fit=683%2C1024&ssl=1',
    credentials: 'Master Aesthetician, 15+ Years Experience',
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Meet Our Experts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-playfair text-2xl mb-2">{member.name}</h3>
                  <p className="text-teal-400 mb-2">{member.role}</p>
                  <p className="text-sm opacity-90">{member.credentials}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
