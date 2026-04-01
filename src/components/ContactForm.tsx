"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, ArrowLeft, CheckCircle2, X, Loader2 } from "lucide-react";

interface ContactFormProps {
  open: boolean;
  onClose: () => void;
}

const revenueOptions = ["Less than $10,000 / month", "$10,000 - $50,000 / month", "$50,000 - $200,000 / month", "$200,000+ / month"];
const prospectsOptions = ["0 - 4,000 contacts", "4,000 - 10,000 contacts", "10,000 - 20,000 contacts", "20,000+ contacts"];
const dealSizeOptions = ["Less than $1,000", "$1,000 - $5,000", "$5,000 - $20,000", "$20,000+"];
const budgetOptions = ["Less than $1,500", "$1,500 - $3,000", "$3,000 - $5,000", "$5,000+"];
const launchOptions = ["Immediately (ASAP)", "Within 2 weeks", "Next month", "Just browsing / Not sure"];

const WEBHOOK_PRIMARY = "https://n8n-n8n.0nn0zp.easypanel.host/webhook-test/leads";
const WEBHOOK_FALLBACK = "https://n8n-n8n.0nn0zp.easypanel.host/webhook/leads";

interface FormData {
  fullName: string;
  workEmail: string;
  companyWebsite: string;
  phoneNumber: string;
  monthlyRevenue: string;
  prospectsPerMonth: string;
  averageDealSize: string;
  monthlyBudget: string;
  launchTimeline: string;
}

const initialData: FormData = {
  fullName: "", workEmail: "", companyWebsite: "", phoneNumber: "",
  monthlyRevenue: "", prospectsPerMonth: "", averageDealSize: "", monthlyBudget: "", launchTimeline: "",
};

const ContactForm = ({ open, onClose }: ContactFormProps) => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initialData);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 9;
  const next = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const sendToWebhook = async () => {
    setSubmitting(true);
    const payload = {
      full_name: data.fullName, work_email: data.workEmail, company_website: data.companyWebsite,
      phone_number: data.phoneNumber, monthly_revenue: data.monthlyRevenue, prospects_per_month: data.prospectsPerMonth,
      average_deal_size: data.averageDealSize, monthly_budget: data.monthlyBudget,
      launch_timeline: data.launchTimeline, submitted_at: new Date().toISOString(),
    };
    try {
      const res = await fetch(WEBHOOK_PRIMARY, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!res.ok) throw new Error("Primary webhook failed");
    } catch {
      try {
        await fetch(WEBHOOK_FALLBACK, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      } catch { /* silent fail */ }
    }
    setSubmitting(false);
    setSubmitted(true);
  };

  const reset = () => { setStep(0); setData(initialData); setSubmitted(false); onClose(); };

  if (!open) return null;

  const canProceed = () => {
    switch (step) {
      case 0: return data.fullName.trim().length > 1;
      case 1: return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.workEmail);
      case 2: return data.companyWebsite.trim().length > 3;
      case 3: return data.phoneNumber.trim().length > 5;
      case 4: return data.monthlyRevenue.length > 0;
      case 5: return data.prospectsPerMonth.length > 0;
      case 6: return data.averageDealSize.length > 0;
      case 7: return data.monthlyBudget.length > 0;
      case 8: return data.launchTimeline.length > 0;
      default: return true;
    }
  };

  const OptionGrid = ({ options, value, onSelect }: { options: string[]; value: string; onSelect: (v: string) => void }) => (
    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
      {options.map((opt) => (
        <button key={opt} onClick={() => onSelect(opt)}
          className={`p-4 rounded-xl border-2 text-sm font-semibold transition-all text-left ${value === opt ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-primary/50"}`}>
          {opt}
        </button>
      ))}
    </div>
  );

  const stepContent: Record<number, React.ReactNode> = {
    0: (<div className="space-y-4"><h3 className="text-2xl font-bold text-foreground">Hey there! 👋</h3><p className="text-muted-foreground">What&apos;s your full name?</p><Input autoFocus placeholder="John Smith" value={data.fullName} onChange={(e) => setData({ ...data, fullName: e.target.value })} className="text-lg py-6 rounded-xl" onKeyDown={(e) => e.key === "Enter" && canProceed() && next()} /></div>),
    1: (<div className="space-y-4"><h3 className="text-2xl font-bold text-foreground">Nice, {data.fullName.split(" ")[0]}! 📧</h3><p className="text-muted-foreground">What&apos;s your work email?</p><Input autoFocus type="email" placeholder="john@company.com" value={data.workEmail} onChange={(e) => setData({ ...data, workEmail: e.target.value })} className="text-lg py-6 rounded-xl" onKeyDown={(e) => e.key === "Enter" && canProceed() && next()} /></div>),
    2: (<div className="space-y-4"><h3 className="text-2xl font-bold text-foreground">Your company website 🌐</h3><p className="text-muted-foreground">So we can learn about your business.</p><Input autoFocus type="url" placeholder="https://yourcompany.com" value={data.companyWebsite} onChange={(e) => setData({ ...data, companyWebsite: e.target.value })} className="text-lg py-6 rounded-xl" onKeyDown={(e) => e.key === "Enter" && canProceed() && next()} /></div>),
    3: (<div className="space-y-4"><h3 className="text-2xl font-bold text-foreground">Phone number 📱</h3><p className="text-muted-foreground">We&apos;ll only call if needed.</p><Input autoFocus type="tel" placeholder="+1 (555) 123-4567" value={data.phoneNumber} onChange={(e) => setData({ ...data, phoneNumber: e.target.value })} className="text-lg py-6 rounded-xl" onKeyDown={(e) => e.key === "Enter" && canProceed() && next()} /></div>),
    4: (<div className="space-y-4"><h3 className="text-2xl font-bold text-foreground">Monthly revenue? 💰</h3><p className="text-muted-foreground">Helps us tailor a strategy for your scale.</p><OptionGrid options={revenueOptions} value={data.monthlyRevenue} onSelect={(v) => { setData({ ...data, monthlyRevenue: v }); setTimeout(next, 300); }} /></div>),
    5: (<div className="space-y-4"><h3 className="text-2xl font-bold text-foreground">How many prospects? 📬</h3><p className="text-muted-foreground">How many people do you want us to email each month?</p><OptionGrid options={prospectsOptions} value={data.prospectsPerMonth} onSelect={(v) => { setData({ ...data, prospectsPerMonth: v }); setTimeout(next, 300); }} /></div>),
    6: (<div className="space-y-4"><h3 className="text-2xl font-bold text-foreground">Average deal size? 🎯</h3><p className="text-muted-foreground">What&apos;s a typical sale worth for you?</p><OptionGrid options={dealSizeOptions} value={data.averageDealSize} onSelect={(v) => { setData({ ...data, averageDealSize: v }); setTimeout(next, 300); }} /></div>),
    7: (<div className="space-y-4"><h3 className="text-2xl font-bold text-foreground">Monthly budget? 💵</h3><p className="text-muted-foreground">What are you looking to invest in lead generation?</p><OptionGrid options={budgetOptions} value={data.monthlyBudget} onSelect={(v) => { setData({ ...data, monthlyBudget: v }); setTimeout(next, 300); }} /></div>),
    8: (<div className="space-y-4"><h3 className="text-2xl font-bold text-foreground">When do you want to start? 🚀</h3><p className="text-muted-foreground">When are you looking to launch?</p><OptionGrid options={launchOptions} value={data.launchTimeline} onSelect={(v) => setData({ ...data, launchTimeline: v })} /></div>),
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={reset} />
      <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-background rounded-2xl shadow-2xl w-full max-w-lg mx-4 p-8 md:p-10 max-h-[90vh] overflow-y-auto">
        <button onClick={reset} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"><X className="h-5 w-5" /></button>

        {!submitted && (
          <div className="flex gap-1 mb-8">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i <= step ? "bg-primary" : "bg-border"}`} />
            ))}
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div key={submitted ? "done" : step} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.2 }}>
            {submitted ? (
              <div className="text-center space-y-4 py-8">
                <CheckCircle2 className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-2xl font-bold text-foreground">You&apos;re all set, {data.fullName.split(" ")[0]}! 🚀</h3>
                <p className="text-muted-foreground max-w-sm mx-auto">We&apos;ll reach out within 24 hours to schedule your strategy call. Get ready to scale.</p>
                <Button onClick={reset} variant="outline" className="rounded-2xl mt-4">Close</Button>
              </div>
            ) : stepContent[step]}
          </motion.div>
        </AnimatePresence>

        {!submitted && (
          <div className="flex justify-between mt-8">
            <Button variant="ghost" onClick={prev} disabled={step === 0} className="rounded-xl">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back
            </Button>
            <Button onClick={step === totalSteps - 1 ? sendToWebhook : next} disabled={!canProceed() || submitting} className="rounded-xl px-6">
              {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : step === totalSteps - 1 ? (<>Submit <ArrowRight className="h-4 w-4 ml-1" /></>) : (<>Continue <ArrowRight className="h-4 w-4 ml-1" /></>)}
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ContactForm;
