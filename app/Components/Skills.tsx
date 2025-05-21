import Card from './Card';

const skills = [
  { 
    title: "React", 
    icon: "ReactImg.jpg",
    description: "Frontend Library",
  },
  { 
    title: "Java", 
    icon: "JavaImg.jpg",
    description: "Backend & OOP",
  },
  { 
    title: "MongoDB", 
    icon: "MongoImg.jpg",
    description: "NoSQL Database",
  },
  { 
    title: "TypeScript", 
    icon: "TSImg.jpg",
    description: "Typed JS Superset",
  },
];

export default function Skills() {
  return (
    <section className="p-10 border-b-2 border-blue-600">
      <h2 className="text-2xl font-bold text-center mb-8 text-blue-900"> My Tech Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
        {skills.map(skill => (
          <div key={skill.title} className="w-full max-w-xs rounded-lg bg-blue-300 hover:bg-blue-400">
            <Card 
              title={skill.title}
              icon={skill.icon}
              desc={skill.description}  
            />
          </div>
        ))}
      </div>
    </section>
  );
}
