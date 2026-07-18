import Reveal from "../component/Reveal";

type Skill = {
  name: string;
};

type SkillGroup = {
  label: string;
  skills: Skill[];
};

const featured = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "JavaScript",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Prisma",
];

const skillGroups: SkillGroup[] = [
  {
    label: "Frontend Development",
    skills: [
      { name: "React.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "HTML & CSS" },
    ],
  },
  {
    label: "Backend Development",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Prisma ORM" },
      { name: "PostgreSQL" },
      { name: "REST API" },
    ],
  },
  {
    label: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub" },
      { name: "VS Code" },
      { name: "Postman" },
      { name: "Figma" },
      { name: "Vite" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 border-b border-neutral-200 dark:border-neutral-800"
    >

      {/* Title */}
      <Reveal>
        <h2
          className="
            font-display
            font-bold
            text-[clamp(24px,3.6vw,34px)]
            tracking-tight
            mb-5
          "
        >
          Skills
        </h2>
      </Reveal>


      {/* Featured Skills */}
      <Reveal delayMs={80}>
        <div className="relative overflow-hidden mb-12">

          <div
            className="
              absolute
              left-0
              top-0
              z-10
              h-full
              w-16
              bg-linear-to-r
              from-white
              dark:from-black
              to-transparent
            "
          />

          <div
            className="
              absolute
              right-0
              top-0
              z-10
              h-full
              w-16
              bg-linear-to-l
              from-white
              dark:from-black
              to-transparent
            "
          />


          <div className="marquee">
            <div className="marquee-content">

              {[...featured, ...featured, ...featured].map(
                (skill, index) => (
                  <span
                    key={index}
                    className="
                      whitespace-nowrap
                      font-mono
                      text-[13px]
                      font-semibold
                      px-5
                      py-2.5
                      rounded-xl
                      border
                      border-pink-200
                      dark:border-pink-500/20
                      bg-pink-50
                      dark:bg-pink-500/10
                      text-pink-500
                      dark:text-pink-300
                      hover:-translate-y-1
                      hover:shadow-lg
                      hover:shadow-pink-300/20
                      transition-all
                      duration-300
                    "
                  >
                    {skill}
                  </span>
                )
              )}

            </div>
          </div>

        </div>
      </Reveal>



      {/* Skill Groups */}
      <div className="grid md:grid-cols-3 gap-10">

        {skillGroups.map((group, gi) => (

          <Reveal
            key={group.label}
            delayMs={gi * 120}
          >

            <div
              className="
                relative
                border-l-2
                border-pink-400
                pl-6
                py-3
                hover:border-pink-600
                transition-all
                duration-300
              "
            >

              {/* Header */}
              <div
                className="
                  flex
                  items-center
                  gap-3
                  mb-5
                "
              >
                <h3
                  className="
                    font-display
                    font-bold
                    text-lg
                  "
                >
                  {group.label}
                </h3>

              </div>



              {/* Skills */}
              <div
                className="
                  flex
                  flex-wrap
                  gap-2
                "
              >

                {group.skills.map((skill) => (

                  <span
                    key={skill.name}
                    className="
                      px-3
                      py-2
                      rounded-lg
                      border
                      border-neutral-200
                      dark:border-neutral-700
                      text-xs
                      font-mono
                      text-neutral-600
                      dark:text-neutral-300
                      hover:border-pink-400
                      hover:text-pink-500
                      hover:bg-pink-50
                      dark:hover:bg-pink-500/10
                      transition-all
                      duration-300
                    "
                  >
                    {skill.name}
                  </span>

                ))}

              </div>


            </div>

          </Reveal>

        ))}

      </div>


    </section>
  );
}