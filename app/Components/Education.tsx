import Card from "../Components/Card";

const educationCards = [
  {
    title: "Undergraduation:",
    desc: "B.Tech in Computer Science and Engineering, 2022–2026 from Bansal Institute of Engineering and Technology (Affiliated to APJ Abdul Kalam Technical University), Lucknow, India. Maintained-CGPA: 8.1/10",
  },
  {
    title: "Intermediate:",
    desc: "Completed 12th grade from Sumitra Inter College (Affiliated to UP board), Sitapur, India in 2022. Percentage: 75%",
  },
  {
    title: "High School:",
    desc: "Completed 10th grade from Sumitra Inter College (Affiliated to UP board), Sitapur, India in 2020. Percentage: 85%",
  },
];

export default function Education() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-black">
      {educationCards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          desc={card.desc}
          width="w-full h-full rounded-lg drop-shadow-2xl bg-blue-300 hover:bg-blue-400"
        />
      ))}
    </section>
  );
}
