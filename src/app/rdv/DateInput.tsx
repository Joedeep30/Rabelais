'use client';

export default function DateInput() {
  return (
    <input
      type="text"
      placeholder="Date de naissance *"
      required
      onFocus={(e) => { e.target.type = 'date'; }}
      onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
      className="w-full bg-[#f8f8f8] border border-[#e0e0e0] p-4 text-[#888888] placeholder-[#aaaaaa] rounded-none focus:ring-2 focus:ring-[#003399] focus:border-transparent text-[15px] font-light transition-all"
    />
  );
}
