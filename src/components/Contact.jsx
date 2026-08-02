import { Mail, GraduationCap, Award } from 'lucide-react';

const LinkedinIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto h-full flex flex-col pt-8">
      <div className="grid md:grid-cols-2 gap-16">
        
        {/* Education & Certs */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Education & Certifications</h2>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-zinc-300" />
              </div>
              <div>
                <h3 className="font-semibold text-white">B.Sc. Medical Physics and Biomedical Engineering</h3>
                <p className="text-zinc-400 text-sm mt-1">Gono Bishwabidyalay (Dec 2021)</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-zinc-300" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Certifications</h3>
                <ul className="text-zinc-400 text-sm mt-2 space-y-2">
                  <li>• Executive Calendar Management (Google, 2023)</li>
                  <li>• Robotics & Embedded Systems (2019)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Let's Connect</h2>
          <p className="text-zinc-400 mb-8">
            I'm always open to discussing new opportunities, especially for Operations Coordinator, QA Lead, Shift Supervisor, or Assistant Manager roles.
          </p>

          <div className="flex flex-col gap-4">
            <a 
              href="mailto:khademulbasher.55@gmail.com"
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-zinc-400">Email</div>
                <div className="text-white font-medium">khademulbasher.55@gmail.com</div>
              </div>
            </a>

            <a 
              href="https://linkedin.com/in/khademulbasher"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <LinkedinIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-zinc-400">LinkedIn</div>
                <div className="text-white font-medium">linkedin.com/in/khademulbasher</div>
              </div>
            </a>
          </div>
        </div>

      </div>
      
      <div className="mt-24 text-center text-zinc-500 text-sm pb-12">
        © {new Date().getFullYear()} MD Khademul Basher. All rights reserved.
      </div>
    </div>
  );
}
