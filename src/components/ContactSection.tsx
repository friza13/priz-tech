import { useState } from 'react';
import { Mail, Copy, Check, Send, Terminal, ArrowUpRight, MessageSquareCode } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';

interface InquiryTemplate {
  id: string;
  label: string;
  subject: string;
  body: string;
}

const templates: InquiryTemplate[] = [
  {
    id: 'grant',
    label: 'Startup Grant / Program',
    subject: '[Priz Tech] Startup Program & Accelerator Collaboration',
    body: 'Hello Priz Tech Team,\n\nWe are reviewing Priz Tech for startup program admission / cloud grant allocation. We would like to discuss platform access and engineering collaboration.\n\nBest regards,\n[Your Name / Organization]',
  },
  {
    id: 'consulting',
    label: 'Engineering Consultation',
    subject: '[Priz Tech] Distributed Systems Engineering Inquiry',
    body: 'Hello Priz Tech Team,\n\nWe are looking for specialized software engineering support for our backend / logistics / fintech engine. Here is a brief overview of our project requirements:\n\n[Project Details]\n\nBest regards,\n[Your Name / Company]',
  },
  {
    id: 'due-diligence',
    label: 'Technical Due Diligence',
    subject: '[Priz Tech] Technical Architecture Verification',
    body: 'Hello Priz Tech Team,\n\nWe are conducting a technical architecture review of your production systems (AnjemID / Armada DMS / CatatUang / TokoPOS). We would like to request technical specifications and repository access.\n\nBest regards,\n[Your Name / Role]',
  },
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<InquiryTemplate>(templates[0]);

  const email = 'priz@prizftm.my.id';

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch (e) {
      console.error('Clipboard copy failed', e);
    }
  };

  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(selectedTemplate.subject)}&body=${encodeURIComponent(selectedTemplate.body)}`;

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-[#0b0d14] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3 py-1 text-xs font-mono text-cyan-300 mb-3">
            <Mail className="h-3 w-3 text-cyan-400" />
            <span>COMMUNICATION TERMINAL</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Initiate Engineering Dialogue
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Open for startup accelerator partnerships, cloud grant reviews, technical due diligence, and select engineering contracts. Direct engineer-to-engineer communication.
          </p>
        </div>

        {/* Contact Terminal Card */}
        <div className="mt-14 mx-auto max-w-4xl rounded-2xl border border-white/10 bg-[#0f1118] p-6 sm:p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            
            {/* Left Column: Direct Email & Channels */}
            <div className="md:col-span-5 flex flex-col justify-between space-y-6 border-b border-white/10 pb-8 md:border-b-0 md:border-r md:pr-8 md:pb-0">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  Official Ingress Channel
                </span>
                <div className="mt-3 flex items-center justify-between rounded-xl border border-cyan-500/30 bg-cyan-950/20 p-3.5">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="h-4 w-4 text-cyan-400 shrink-0" />
                    <span className="font-mono text-sm font-semibold text-cyan-200 truncate">
                      {email}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    aria-label="Copy email"
                    className="ml-2 flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/40 bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 hover:text-white transition-colors"
                  >
                    {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
                {copied && (
                  <p className="mt-2 text-xs font-mono text-emerald-400 animate-in fade-in duration-200">
                    ✓ Copied {email} to clipboard!
                  </p>
                )}
              </div>

              {/* Verified Founder Profiles */}
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  Verified Engineering Handles
                </span>
                
                <a
                  href="https://github.com/friza13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 p-3 text-xs font-mono text-slate-300 hover:border-white/20 hover:bg-white/10 hover:text-white transition-all"
                >
                  <div className="flex items-center gap-2">
                    <GithubIcon className="h-4 w-4 text-white" />
                    <span>github.com/friza13</span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
                </a>

                <div className="rounded-lg border border-white/5 bg-black/40 p-3 text-xs text-slate-400">
                  <div className="flex items-center gap-2 font-mono text-[11px] text-slate-300 mb-1">
                    <Terminal className="h-3 w-3 text-cyan-400" />
                    <span>Response SLA</span>
                  </div>
                  <span>Technical responses dispatched within 24 hours. Direct principal engineer access.</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Mailto Generator */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <MessageSquareCode className="h-3.5 w-3.5 text-indigo-400" />
                  <span>Select Inquiry Template</span>
                </span>

                <div className="mt-3 flex flex-wrap gap-2">
                  {templates.map((tmpl) => (
                    <button
                      key={tmpl.id}
                      onClick={() => setSelectedTemplate(tmpl)}
                      className={`rounded-lg px-3 py-1.5 text-xs font-mono transition-all ${
                        selectedTemplate.id === tmpl.id
                          ? 'border border-indigo-500/60 bg-indigo-500/20 text-indigo-200 shadow-[0_0_12px_rgba(99,102,241,0.2)]'
                          : 'border border-white/5 bg-white/5 text-slate-400 hover:border-white/10 hover:text-slate-200'
                      }`}
                    >
                      {tmpl.label}
                    </button>
                  ))}
                </div>

                {/* Template Preview */}
                <div className="mt-4 rounded-xl border border-white/5 bg-black/60 p-4 font-mono text-xs text-slate-300 space-y-2">
                  <div className="text-slate-400 text-[11px] border-b border-white/5 pb-2">
                    <strong className="text-slate-300">Subject: </strong>{selectedTemplate.subject}
                  </div>
                  <pre className="whitespace-pre-wrap font-sans text-xs text-slate-300 pt-1 leading-relaxed">
                    {selectedTemplate.body}
                  </pre>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={mailtoHref}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500 bg-cyan-500/20 py-3.5 font-mono text-sm font-semibold text-cyan-200 shadow-[0_0_30px_rgba(6,182,212,0.25)] transition-all hover:bg-cyan-500 hover:text-black"
                >
                  <span>Dispatch Email with Pre-Filled Template</span>
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
