import Card from './Card';

const achievements = [
  { title: " Certification in Full Stack Development", desc: "HCL Tech" },
  { title: "Successfully Completed", desc: "Java NPTEL Certification" },
];

export default function AchievementSection() {
  return (
    <section className="p-10 border-b-2 border-blue-500">
      <h2 className="text-2xl font-bold text-center mb-2 text-blue-900">Achievements</h2>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 mb-5">
        {achievements.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            desc={card.desc}
            width="w-full sm:w-[300px] rounded-lg drop-shadow-2xl bg-blue-400 hover:bg-blue-500"
          />
        ))}
      </div>
    </section>
  );
}
