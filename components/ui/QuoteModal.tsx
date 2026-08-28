'use client';

import { useState } from 'react';
import { X, Send, Phone, Mail, CheckCircle2, Copy } from 'lucide-react';
import { SITE_CONFIG, CORE_SERVICES } from '@/lib/site-data';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Wakefield');
  const [selectedService, setSelectedService] = useState('General Plumbing Repair');
  const [details, setDetails] = useState('');
  const [prepared, setPrepared] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const mailtoSubject = encodeURIComponent(`LMK Quote Enquiry - ${selectedService} (${name || 'Local Customer'})`);
  const mailtoBody = encodeURIComponent(
    `Hello Lee,\n\nI would like to request a quote / advice for plumbing work:\n\nName: ${name || 'N/A'}\nPhone: ${phone || 'N/A'}\nLocation: ${location}\nService Requested: ${selectedService}\n\nDetails:\n${details || 'No additional details specified.'}\n\nThank you!`
  );
  const mailtoUrl = `mailto:${SITE_CONFIG.emailDisplay}?subject=${mailtoSubject}&body=${mailtoBody}`;

  const summaryText = `LMK Enquiry - ${selectedService}\nName: ${name}\nPhone: ${phone}\nLocation: ${location}\nDetails: ${details}`;

  const handlePrepare = (e: React.FormEvent) => {
    e.preventDefault();
    setPrepared(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-[#0F1720]/80 backdrop-blur-xs" onClick={onClose} />
      
      <div className="relative w-full max-w-lg bg-[#FFFFFF] rounded-2xl shadow-2xl border border-[#D9E0E7] overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#0F1720] text-white p-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#E317A8] uppercase block">
              DIRECT QUOTE ENQUIRY
            </span>
            <h3 className="font-['Barlow_Condensed'] text-2xl font-black uppercase tracking-wide text-white">
              GET A QUOTE FROM LEE
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!prepared ? (
            <form onSubmit={handlePrepare} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold text-[#0F1720] uppercase mb-1">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#EEF2F6] border border-[#D9E0E7] text-sm text-[#0F1720] focus:outline-none focus:border-[#E317A8]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-[#0F1720] uppercase mb-1">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 07123 456789"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#EEF2F6] border border-[#D9E0E7] text-sm text-[#0F1720] focus:outline-none focus:border-[#E317A8]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold text-[#0F1720] uppercase mb-1">
                    LOCATION / TOWN
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Wrenthorpe, Wakefield"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#EEF2F6] border border-[#D9E0E7] text-sm text-[#0F1720] focus:outline-none focus:border-[#E317A8]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#0F1720] uppercase mb-1">
                  SERVICE NEEDED
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#EEF2F6] border border-[#D9E0E7] text-sm text-[#0F1720] focus:outline-none focus:border-[#E317A8]"
                >
                  <option value="General Plumbing Repair">General Plumbing Repair (Tap, Leak, Toilet)</option>
                  <option value="Boiler Repair / Servicing">Boiler Repair / Servicing</option>
                  <option value="New Boiler Installation">New Boiler Installation</option>
                  <option value="Central Heating & Radiators">Central Heating &amp; Radiators</option>
                  <option value="Bathroom & Shower Plumbing">Bathroom &amp; Shower Plumbing</option>
                  <option value="Hot & Cold Water Systems">Hot &amp; Cold Water Systems</option>
                  <option value="System Flushing & Pipework">System Flushing &amp; Pipework</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#0F1720] uppercase mb-1">
                  BRIEF DETAILS
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe the issue or work required..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#EEF2F6] border border-[#D9E0E7] text-sm text-[#0F1720] focus:outline-none focus:border-[#E317A8]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#E317A8] hover:bg-[#B80E86] text-white font-['Barlow_Condensed'] font-extrabold text-lg tracking-wider uppercase transition-all pink-glow"
              >
                PREPARE ENQUIRY DETAILS
              </button>
            </form>
          ) : (
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 rounded-full bg-[#FCE6F6] text-[#E317A8] flex items-center justify-center mx-auto border-2 border-[#E317A8]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="font-mono text-xs font-bold text-[#E317A8] uppercase tracking-widest block mb-1">
                  READY TO SEND
                </span>
                <h4 className="font-['Barlow_Condensed'] text-2xl font-black uppercase text-[#0F1720]">
                  ENQUIRY DETAILS PREPARED
                </h4>
                <p className="text-xs text-[#667085] mt-2">
                  Choose how you would like to send these details directly to Lee Kovacs:
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={mailtoUrl}
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#E317A8] text-white font-['Barlow_Condensed'] font-extrabold text-base tracking-wider uppercase pink-glow"
                >
                  <Mail className="w-4 h-4" />
                  <span>OPEN EMAIL APP (mailto:)</span>
                </a>

                <a
                  href={SITE_CONFIG.phoneLink}
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0F1720] text-white font-['Barlow_Condensed'] font-extrabold text-base tracking-wider uppercase"
                >
                  <Phone className="w-4 h-4 text-[#E317A8]" />
                  <span>CALL LEE DIRECT: {SITE_CONFIG.phoneDisplay}</span>
                </a>

                <button
                  onClick={handleCopy}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#EEF2F6] text-[#0F1720] border border-[#D9E0E7] font-mono text-xs font-bold uppercase"
                >
                  <Copy className="w-4 h-4 text-[#E317A8]" />
                  <span>{copied ? 'COPIED TO CLIPBOARD!' : 'COPY DETAILS TO CLIPBOARD'}</span>
                </button>
              </div>

              <button
                onClick={() => setPrepared(false)}
                className="text-xs font-mono text-[#667085] underline"
              >
                ← Edit details
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
