import Card from "./Card";
import Education from "./Education";
import ProfileImage from "./ProfileImage";

const aboutCards = [
  {
    title: "About Me",
    desc: "I'm a full-stack developer with a passion for building meaningful and user-friendly web applications. I enjoy transforming real-life problems into digital solutions using technologies like React, Next.js, TypeScript, and Tailwind CSS. Currently, I'm working on “Dwell Discover” — a student-focused property rental platform designed to simplify the search for hostels and PG accommodations.",
  },
];

export default function About() {
  return (
    <section className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center lg:items-start px-4">
      
      {/* Profile Section */}
      <div className="w-full lg:w-1/3 flex justify-center">
        <ProfileImage />
      </div>

      {/* About & Education Section */}
      <div className="w-full lg:w-2/3 flex flex-col gap-6">
        <h2 className="font-semibold text-3xl text-blue-900">About Me</h2>

        {/* About Card */}
        <section className="flex flex-col gap-5">
          {aboutCards.map((card, index) => (
            <Card
              key={index}
              title={""}
              desc={card.desc}
              width="rounded-lg drop-shadow-2xl bg-blue-300 hover:bg-blue-400"
            />
          ))}
        </section>

        {/* Education Section */}
        <h1 className="font-semibold text-2xl text-blue-900">Education</h1>
        <Education />
      </div>
    </section>
  );
}
