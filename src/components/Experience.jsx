import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Clinical AI Specialist",
      company: "Commure (formerly Augmedix)",
      date: "Oct 2025 – Present",
      bullets: [
        "Spearhead QA auditing for medical AI model responses, ensuring 99%+ clinical accuracy and strict HIPAA compliance.",
        "Customize and fine-tune AI documentation templates per US provider preferences to maximize client satisfaction.",
        "Lead Knowledge Transfer (KT) sessions to train team members on updated AI software features and protocols.",
        "Act as an operational bridge between clinical teams and software engineering departments to resolve bottlenecks."
      ]
    },
    {
      title: "Senior Medical Documentation Specialist",
      company: "Commure (formerly Augmedix)",
      date: "Jul 2025 – Oct 2025",
      bullets: [
        "Promoted to oversee day-to-day operations support and enforce rigorous quality control standards across cross-specialty US healthcare accounts.",
        "Delivered structured Peer Review (PR) coaching and performance feedback to junior specialists.",
        "Managed operational shift coverage and maintained intercontinental communication with US physician clients."
      ]
    },
    {
      title: "Medical Documentation Specialist",
      company: "Commure (formerly Augmedix)",
      date: "Jan 2022 – Jun 2025",
      bullets: [
        "Managed real-time clinical documentation and EHR data entry across complex medical specialties.",
        "Consistently exceeded baseline quality and productivity metrics, earning an official promotion to Senior Specialist."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-blue-500" />
            Professional Experience
          </h2>
          <p className="text-zinc-400">Over 4.5 years of experience in US healthcare BPO operations.</p>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-zinc-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              </div>
              
              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="font-bold text-xl text-white">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-blue-400 font-medium">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.date}</span>
                  </div>
                </div>
                <h4 className="text-zinc-300 font-medium mb-4">{exp.company}</h4>
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-zinc-400 text-sm leading-relaxed flex gap-2">
                      <span className="text-blue-500 mt-1.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
