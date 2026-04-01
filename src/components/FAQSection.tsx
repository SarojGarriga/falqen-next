"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQSectionProps {
  onCtaClick: () => void;
}

const faqs = [
  { question: "Will this hurt my website or get me blacklisted?", answer: "No way. We set up completely separate websites and email addresses just for outreach. Your real website stays 100% safe. We also add special security settings (called DKIM, SPF, and DMARC) so everything is protected. You get the new clients — we take the risk." },
  { question: "How fast will I start seeing meetings on my calendar?", answer: "We need about 7–10 days to get everything ready and make sure emails land in people's inboxes (not spam). After that, you can start seeing replies in the first 48 hours. Things really start picking up in Month 2, when our follow-up messages start catching people who didn't reply the first time." },
  { question: "Where do you find the people to contact? Is the data good?", answer: "We don't buy old, bad lists. We use real-time tools and premium databases to find people who actually match what you're looking for — by job title, company size, industry, and more. Then we check every single email address to make sure it's real. If someone doesn't fit, we don't contact them. Quality over quantity, always." },
  { question: "Why do I need both LinkedIn AND Email?", answer: "Because some people check email all day, and others live on LinkedIn. When we reach them on both, they see your name everywhere. If they miss the email, they see the LinkedIn message. This makes it much more likely they'll respond. Using just one channel means you're missing out." },
  { question: "What do I actually have to do?", answer: "Almost nothing. Your job is just to show up to the calls and close the deal. We handle finding the right people, writing the messages, setting up everything technical, and sending it all out. When someone says they're interested, we book them on your calendar. You focus on selling — we do the rest." },
  { question: "Isn't this just spam?", answer: "Not at all. Spam is sending random junk to random people. That's not what we do. We find companies that actually need what you sell, and we send them a personal, helpful message. Think of it like networking at a business event — but online, and at a much bigger scale. If you solve their problem, they'll thank you for reaching out." },
  { question: "How many meetings will I get each month?", answer: "It depends on what you sell and how much it costs. If your service costs $50,000, you'll get fewer but higher-quality meetings. If it costs $500, you'll get more. On average, we aim for 10–20 qualified conversations per month. We can give you a real estimate after a quick call to learn about your business." },
];

const FAQSection = ({ onCtaClick }: FAQSectionProps) => {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">Got Questions? We Got Answers.</h2>
          <p className="text-muted-foreground text-lg">Here&apos;s everything you need to know. Simple and straight.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:shadow-md transition-shadow">
                <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-4">Still have questions? Let&apos;s talk.</p>
          <Button onClick={onCtaClick} size="lg" className="rounded-2xl px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25">
            Ask Us Anything — Free Call <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
