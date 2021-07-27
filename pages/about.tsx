import Head from "next/head";
import { ItemCard, ReferenceCard, Quote } from "../components/home";
import * as Posts from "../data/posts";

export default function About() {
  // console.log("🚀 ~ Posts", Posts.Bison);
  const experience = [
    {
      title: "Software Developer",
      period: "Jan 2006 to Present",
      items: [
        { name: "IBNR Systems", link: "" },
        { name: "PaCE Services", link: "/post/pace-services" },
        { name: "Driven Alliance", link: "" },
        { name: "Eka Solutions", link: "" },
        { name: "Viterra", link: "" },
        { name: "Svelte Australia", link: "" },
      ],
    },
    {
      title: "Web Developer",
      period: "Jan 1999 to Present",
      items: [
        { name: "Bison Computers", link: "" },
        { name: "Svelte Australia", link: "" },
      ],
    },
    {
      title: "Software Coach",
      period: "2014 to Present",
      items: [
        { name: "Driven Alliance", link: "" },
        { name: "Svelte Australia", link: "" },
      ],
    },
    {
      title: "Contractor",
      period: "Sep 2008 to Jan 2009",
      items: [
        { name: "API Properties", link: "" },
        { name: "Brazilian Importers and Exporters", link: "" },
      ],
    },
    {
      title: "Systems Coach",
      period: "2014 to Present",
      items: [
        { name: "Driven Alliance", link: "" },
        { name: "Svelte Australia", link: "" },
      ],
    },
    {
      title: "IT Technician",
      period: "Jan 1999 to Jan 2006",
      items: [{ name: "Bison Computers", link: "" }],
    },
  ];

  const education = [
    {
      title: "MCSD - Microsoft Certified Solutions Developer",
      period: "2003",
      items: [{ name: "Microsoft", link: "/education#mcsd" }],
    },
    {
      title: "Diploma's",
      period: "2000 to 2003",
      items: [
        {
          name: "Hatfield Business and Computer College",
          link: "/education#diploma",
        },
      ],
    },
    {
      title: "PRO Certificate",
      period: "2001",
      items: [{ name: "New Vision Public Relations", link: "/education#pro" }],
    },
    {
      title: "Year 12",
      period: "2001",
      items: [{ name: "Edenglen High School", link: "/education#shool" }],
    },
  ];

  const volunteering = [
    {
      title: "Speaker",
      items: [
        { name: "DevConf Developer Conference", link: "" },
        { name: "Agile Africa", link: "" },
        { name: "Developer User Group", link: "" },
      ],
    },
    {
      title: "Founder",
      items: [
        { name: "DevConf Developer Conference", link: "" },
        { name: "Developer User Group (DUG)", link: "" },
      ],
    },
    {
      title: "Organiser",
      items: [
        { name: "Code Retreat", link: "" },
        { name: "SUSGSA - Scrum User Group", link: "" },
        { name: "DevConf Developer Conference", link: "" },
        { name: "Developer User Group (DUG)", link: "" },
      ],
    },
  ];

  const skills = [
    "React / Vue",
    "Node",
    "React Native /  Native Script",
    "Code Reviews",
    "Mentoring / Coaching",
    "Agile",
    "Speaking / Presenting",
    "Javascript",
    "Python",
    "Ruby",
    "C# / Visual Basic",
    "C++",
    "Swift",
    "Java",
  ];

  const references = [
    {
      name: "Danny Connery",
      org: "Owner, Svelte Australia",
      tel: "",
      email: "",
      country: "aus",
    },
    {
      name: "Joey Cassar",
      org: "Owner, Svelte Australia",
      tel: "",
      email: "",
      country: "aus",
    },
    {
      name: "Ben",
      org: "Manager, Eka Solutions",
      tel: "",
      email: "",
      country: "aus",
    },
    {
      name: "Ben",
      org: "Solutions Architect, Eka Solutions",
      tel: "",
      email: "",
      country: "aus",
    },
    {
      name: "Paul Campbell",
      org: "Colleague, Eka Solutions",
      tel: "",
      email: "",
      country: "aus",
    },
    {
      name: "Kevin Trethewey",
      org: "Owner, Driven Alliance",
      tel: "",
      email: "kevint@drivenalliance.com",
      country: "rsa",
    },
    {
      name: "Shanaaz Trethewey",
      org: "Director, Driven Alliance",
      tel: "",
      email: "shanaazt@drivenalliance.com",
      country: "rsa",
    },
    {
      name: "Mark Pearl",
      org: "Team Lead, Driven Alliance",
      tel: "",
      email: "markpearl@gmail.com ",
      country: "rsa",
    },
    {
      name: "Peter Borkowski",
      org: "Owner, Bison Computers",
      tel: "",
      email: "",
      country: "rsa",
    },
  ];

  return (
    <>
      <Head>
        <title>About | Terence Kruger</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <section>
        <div className="container flex justify-center">
          <h1 className="text-center max-w-4xl py-60">About Me</h1>
        </div>
      </section>
      {/* <section className="bg-gray-400" style={{ height: "650px" }}>
        <div className="container"></div>
      </section> */}
      <section>
        <div className="container flex py-28">
          <div className="w-1/2">
            <h2>Details</h2>
          </div>
          <div className="w-1/2">
            <div>Male (He/Him)</div>
            <div>Passport: A02487035</div>
            <div>Australian Permanent Resident,finalizing citizenship</div>
            <div>
              Own Transport, Driver’s License, Excellent Health (nonsmoker)
            </div>
            <div>Married, kids</div>
            <div>Squash, running, board games</div>
          </div>
        </div>
      </section>
      <section className="section-alternate">
        <div className="container flex py-28">
          <div className="w-1/2">
            <h2>Resume</h2>
          </div>
          <div className="w-1/2">
            <p>
              I consider myself as a proficient and quick learner who adapts
              well to different work situations. Energetic, self motivated with
              excellent communication and people skills. My experience has been
              gained in challenging work environments where I have been given
              opportunities to develop certain qualities:
            </p>
            <ul>
              <li>Strong interpersonal skills</li>
              <li>Mentoring and learning from those around me</li>
              <li>Ability to work as part of a team and on own initiative</li>
              <li>Organized with productive time management skills</li>
              <li>Ability to work under pressure and meet deadlines</li>
              <li>Fast learning and competent in various software tools</li>
            </ul>
            <p>
              I believe that an understanding of the core principles of software
              development helps build applications that are scalable as well as
              maintainable. Therefore, I strive to learn and apply more of these
              principles every day. Currently working at{" "}
              <a href="">Svelte Australia</a>
            </p>
            <h3 className="pt-28 pb-4">Objectives</h3>
            <ul>
              <li>To be the best in what I do and always give 100%.</li>
              <li>To stay at the top, and never look back.</li>
              <li>
                To make a difference for myself, and the company I’m employed
                with.
              </li>
            </ul>
            <h3 className="pt-28 pb-4">Experience</h3>
            <div className="flex">
              <div className="flex flex-wrap">
                {experience.map((e) => ItemCard(e))}
              </div>
            </div>
            <h3 className="pt-28 pb-4">Education</h3>
            <div className="flex">
              <div className="flex flex-wrap">
                {education.map((e) => ItemCard(e))}
              </div>
            </div>
            <h3 className="pt-28 pb-4">Volunteer Experience</h3>
            <div className="flex">
              <div className="flex flex-wrap">
                {volunteering.map((e) => ItemCard(e))}
              </div>
            </div>
            <h3 className="pt-28 pb-4">Skills & Languages</h3>
            <div className="flex">
              <div className="flex flex-wrap">
                {skills.map((s) => (
                  <div className="w-1/2 py-3">{s}</div>
                ))}
              </div>
            </div>
            <h3 className="pt-28 pb-4">References</h3>
            <div className="flex">
              <div className="w-1/2">
                <h4>Australia:</h4>
                {references
                  .filter((r) => r.country === "aus")
                  .map((r) => ReferenceCard(r))}
              </div>
              <div className="w-1/2">
                <h4>South Africa:</h4>
                {references
                  .filter((r) => r.country === "rsa")
                  .map((r) => ReferenceCard(r))}
              </div>
            </div>
            <p className="py-16">
              If you would like to get in touch with any of these please send me
              an <a href="mailto://terencejkruger@gmail.com">email</a>
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container flex py-28">
          <div className="w-1/2">
            <h2>Testimonails</h2>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col space-y-20">
              <Quote caption="— Mark Pearl - Driven Software https://www.linkedin.com/in/markpearl/">
                I’ve worked with Terence for over a year in a professional
                capacity, and had associations with him in the greater software
                community for over 5 years.
                <br />
                <br />
                Terence has the ability to see things at a conceptual level and
                strategically analyse problems, both at a system and a process
                level.
                <br />
                <br />
                He has a deep knowledge of system architecture, code design and
                object orientation. He is also exceptional at helping teams
                improve, being able to map step by step what individuals need to
                develop both technically and soft skills wise.
                <br />
                <br />I would not hesitate to work with him again. I highly
                recommend him.
              </Quote>
              <Quote caption="- Robert MacLean - DevUG / DevConf https://www.linkedin.com/in/macleanr/">
                Terence has been an amazing asset to the user group and a true
                innovator for the community. Though his work we expanded into
                the Pretoria region which he managed and mostly ran entirely by
                himself.
                <br />
                <br />
                Terence has proven to have a deep understanding of the community
                and been a valuable contributor in planning, organisation and
                logistics of not only the Developer User Group but also of
                DevConf
              </Quote>
              <Quote caption="- Andrew Jackson">Need to get this one in</Quote>
              <Quote caption="- Wessel Pieters">
                One of a few....try to find a problem he cannot solve. Highly
                recommended.
              </Quote>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="container flex justify-center py-28">
          <Socials></Socials>
        </div>
      </section> */}
    </>
  );
}
