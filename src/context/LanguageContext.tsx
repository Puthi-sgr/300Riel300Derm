import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "km";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.gallery": "Gallery",
    "nav.donate": "Donate",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Nature Conservation Blog",
    "hero.subtitle": "Creating Change Together",
    "hero.donate": "Donate Now",
    "hero.follow": "Follow Us",

    // Phases
    "phases.title": "Project Phases",
    "phases.subtitle": "Our journey towards sustainable impact",
    "phases.planning.title": "Planning",
    "phases.planning.description":
      "Initial planning and strategy development phase",
    "phases.fundraising.title": "Fundraising",
    "phases.fundraising.description":
      "Gathering resources and community support",
    "phases.implementation.title": "Implementation",
    "phases.implementation.description": "Executing the planned initiatives",
    "phases.monitoring.title": "Post-planting Monitoring",
    "phases.monitoring.description":
      "Tracking progress and ensuring sustainability",

    // Mangroves Section
    "mangroves.title": "Why Mangroves Matter in Cambodia",
    "mangroves.subtitle": "Protecting Nature, Preserving Communities",
    "mangroves.hero.title": "Trapeang Sangke Mangrove Forest",
    "mangroves.hero.subtitle":
      "A vital ecosystem supporting local communities and marine life",
    "mangroves.impact.title": "Impact of Mangroves",
    "mangroves.challenges.title": "Challenges & Conservation",
    "mangroves.cta.text":
      "Join us in protecting Cambodia's mangrove forests. Your support helps preserve these vital ecosystems for future generations.",
    "mangroves.cta.button": "Support Mangrove Conservation",
    "mangroves.fact.naturalBarrier.title": "Natural Barrier",
    "mangroves.fact.naturalBarrier.description":
      "Mangroves reduce wave energy by up to 66% in the first 100m of forest width.",
    "mangroves.fact.marineNursery.title": "Marine Nursery",
    "mangroves.fact.marineNursery.description":
      "Supporting over 70% of tropical coastal fish species in their juvenile stages.",
    "mangroves.fact.carbonStorage.title": "Carbon Storage",
    "mangroves.fact.carbonStorage.description":
      "Storing up to 3-5 times more carbon per hectare than tropical forests.",
    "mangroves.threat.deforestation.title": "Deforestation",
    "mangroves.threat.deforestation.description":
      "Coastal development and aquaculture threaten mangrove ecosystems.",
    "mangroves.threat.climateChange.title": "Climate Change",
    "mangroves.threat.climateChange.description":
      "Rising sea levels and changing temperatures impact mangrove survival.",
    "mangroves.threat.conservation.title": "Conservation",
    "mangroves.threat.conservation.description":
      "Local initiatives work to protect and restore mangrove forests.",

    // About Section
    "about.title": "About Us",
    "about.mission": "Our Mission",
    "about.missionText":
      "We strive to create a platform where voices can be heard, stories can be shared, and communities can come together to make a positive impact on society.",
    "about.story": "Our Story",
    "about.storyText":
      "Founded with a vision to bridge cultural gaps and foster understanding, our journey began with a simple blog and has grown into a vibrant community of changemakers and storytellers.",
    "about.objectives": "Our Objectives",
    "about.objective1": "Promote cultural exchange and understanding",
    "about.objective2": "Support local community initiatives",
    "about.objective3": "Build a global network of changemakers",

    // Contact Section
    "contact.title": "Get in Touch",
    "contact.subtitle":
      "Have questions or want to get involved? We'd love to hear from you!",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.info": "Contact Information",
    "contact.email.label": "Email",
    "contact.phone.label": "Phone",
    "contact.location.label": "Location",
    "contact.email.value": "contact@example.com",
    "contact.phone.value": "+855 12 345 678",
    "contact.location.value": "123 Street Name, City, Province, Cambodia",

    // Donate Section
    "donate.title": "Support Our Cause",
    "donate.subtitle": "Your contribution helps us continue our mission",
    "donate.why": "Why Your Support Matters",
    "donate.impact": "Your Impact",
    "donate.payment": "Payment Methods",
    "donate.mobile": "Mobile Payment",
    "donate.credit": "Credit/Debit Card",
    "donate.bank": "Bank Transfer",
    "donate.complete": "Complete Donation",

    // Footer Section
    "footer.about": "About Us",
    "footer.quicklinks": "Quick Links",
    "footer.mission": "Our Mission",
    "footer.copyright": "© {year} EcoVoice. All rights reserved.",
    "footer.madeWith": "Made with {icon} for the environment",

    // Gallery Section
    "gallery.title": "Photo Gallery",
    "gallery.subtitle":
      "Documenting our journey towards environmental conservation and community empowerment",
    "gallery.viewMore": "View More on Facebook",

    // Sponsors Section
    "sponsors.title": "Our Partners",
    "sponsors.subtitle":
      "Together with our valued partners, we're making a lasting impact on environmental conservation",
    "sponsors.becomePartner": "Become a Partner",
    "sponsors.partnerWithUs": "Partner With Us",
  },
  km: {
    // Navigation
    "nav.home": "ទំព័រដើម",
    "nav.about": "អំពីយើង",
    "nav.gallery": "វិចិត្រសាល",
    "nav.donate": "បរិច្ចាគ",
    "nav.contact": "ទំនាក់ទំនង",

    // Hero
    "hero.title": "ប្លុកអភិរក្សធម្មជាតិ",
    "hero.subtitle": "បង្កើតការផ្លាស់ប្តូរជាមួយគ្នា",
    "hero.donate": "បរិច្ចាគឥឡូវនេះ",
    "hero.follow": "តាមដានយើង",

    // Phases
    "phases.title": "ដំណាក់កាលគម្រោង",
    "phases.subtitle": "ដំណើររបស់យើងឆ្ពោះទៅរកផលប៉ះពាល់ប្រកបដោយចីរភាព",
    "phases.planning.title": "ការរៀបចំផែនការ",
    "phases.planning.description":
      "ដំណាក់កាលនៃការរៀបចំផែនការ និងការអភិវឌ្ឍយុទ្ធសាស្ត្រដំបូង",
    "phases.fundraising.title": "ការប្រមូលមូលនិធិ",
    "phases.fundraising.description": "ការប្រមូលធនធាន និងការគាំទ្រពីសហគមន៍",
    "phases.implementation.title": "ការអនុវត្ត",
    "phases.implementation.description":
      "ការអនុវត្តគំនិតផ្តួចផ្តើមដែលបានគ្រោងទុក",
    "phases.monitoring.title": "ការតាមដានក្រោយការដាំ",
    "phases.monitoring.description": "ការតាមដានវឌ្ឍនភាព និងការធានាចីរភាព",

    // Mangroves Section
    "mangroves.title": "ហេតុអ្វីបានជាដើមកោងកាងមានសារៈសំខាន់នៅកម្ពុជា",
    "mangroves.subtitle": "ការពារធម្មជាតិ ថែរក្សាសហគមន៍",
    "mangroves.hero.title": "ព្រៃកោងកាងត្រពាំងសង្កែ",
    "mangroves.hero.subtitle":
      "ប្រព័ន្ធអេកូឡូស៊ីដ៏សំខាន់គាំទ្រសហគមន៍មូលដ្ឋាននិងជីវិតសមុទ្រ",
    "mangroves.impact.title": "ផលប៉ះពាល់នៃដើមកោងកាង",
    "mangroves.challenges.title": "បញ្ហាប្រឈម និងការអភិរក្ស",
    "mangroves.cta.text":
      "ចូលរួមជាមួយយើងក្នុងការការពារព្រៃកោងកាងនៅកម្ពុជា។ ការគាំទ្ររបស់អ្នកជួយថែរក្សាប្រព័ន្ធអេកូឡូស៊ីដ៏សំខាន់ទាំងនេះសម្រាប់មនុស្សជំនាន់ក្រោយ។",
    "mangroves.cta.button": "គាំទ្រការអភិរក្សព្រៃកោងកាង",
    "mangroves.fact.naturalBarrier.title": "ជញ្ជាំងធម្មជាតិ",
    "mangroves.fact.naturalBarrier.description":
      "ដើមកោងកាងបន្ថយថាមពលរលកបានដល់ទៅ 66% ក្នុង 100 ម៉ែត្រដំបូងនៃទទឹងព្រៃ។",
    "mangroves.fact.marineNursery.title": "កន្លែងចិញ្ចឹមត្រីសមុទ្រ",
    "mangroves.fact.marineNursery.description":
      "គាំទ្រដល់ជម្រកត្រីសមុទ្រដែលមានជាង 70% នៅក្នុងដំណាក់កាលក្មេង។",
    "mangroves.fact.carbonStorage.title": "ការផ្ទុកកាបូន",
    "mangroves.fact.carbonStorage.description":
      "ផ្ទុកកាបូនបានច្រើនដល់ទៅ 3-5 ដងក្នុងមួយហិកតាជាងព្រៃត្រូពិច។",
    "mangroves.threat.deforestation.title": "ការកាប់បំផ្លាញព្រៃ",
    "mangroves.threat.deforestation.description":
      "ការអភិវឌ្ឍតំបន់ឆ្នេរ និងការចិញ្ចឹមត្រីបង្កគ្រោះថ្នាក់ដល់ប្រព័ន្ធអេកូឡូស៊ីដើមកោងកាង។",
    "mangroves.threat.climateChange.title": "ការផ្លាស់ប្តូរអាកាសធាតុ",
    "mangroves.threat.climateChange.description":
      "កម្រិតទឹកសមុទ្រកើនឡើង និងសីតុណ្ហភាពផ្លាស់ប្តូរប៉ះពាល់ដល់ការរស់រាននៃដើមកោងកាង។",
    "mangroves.threat.conservation.title": "ការអភិរក្ស",
    "mangroves.threat.conservation.description":
      "គម្រោងមូលដ្ឋានធ្វើការការពារ និងស្តារព្រៃកោងកាង។",

    // About Section
    "about.title": "អំពីយើង",
    "about.mission": "បេសកកម្មរបស់យើង",
    "about.missionText":
      "We strive to create a platform where voices can be heard, stories can be shared, and communities can come together to make a positive impact on society.",
    "about.story": "រឿងរ៉ាវរបស់យើង",
    "about.storyText":
      "Founded with a vision to bridge cultural gaps and foster understanding, our journey began with a simple blog and has grown into a vibrant community of changemakers and storytellers.",
    "about.objectives": "គោលដៅរបស់យើង",
    "about.objective1": "លើកកម្ពស់ការផ្លាស់ប្តូរវប្បធម៌ និងការយល់ដឹង",
    "about.objective2": "គាំទ្រដល់គម្រោងសហគមន៍មូលដ្ឋាន",
    "about.objective3": "បង្កើតបណ្តាញសហគមន៍អន្តរជាតិ",

    // Contact Section
    "contact.title": "ទាក់ទងមកយើង",
    "contact.subtitle": "មានសំណួរឬចង់ចូលរួម? យើងចង់ស្តាប់ពីអ្នក!",
    "contact.name": "ឈ្មោះ",
    "contact.email": "អ៊ីមែល",
    "contact.message": "សារ",
    "contact.send": "ផ្ញើសារ",
    "contact.info": "ព័ត៌មានទំនាក់ទំនង",
    "contact.email.label": "អ៊ីមែល",
    "contact.phone.label": "ទូរស័ព្ទ",
    "contact.location.label": "ទីតាំង",
    "contact.email.value": "contact@example.com",
    "contact.phone.value": "+855 12 345 678",
    "contact.location.value": "123 ផ្លូវឈ្មោះ, ទីក្រុង, ខេត្ត, កម្ពុជា",

    // Donate Section
    "donate.title": "គាំទ្រគោលបំណងរបស់យើង",
    "donate.subtitle": "ការរួមចំណែករបស់អ្នកជួយយើងបន្តបេសកកម្មរបស់យើង",
    "donate.why": "ហេតុអ្វីបានជាការគាំទ្ររបស់អ្នកមានសារៈសំខាន់",
    "donate.impact": "ផលប៉ះពាល់របស់អ្នក",
    "donate.payment": "វិធីសាស្រ្តទូទាត់",
    "donate.mobile": "ទូទាត់តាមទូរស័ព្ទ",
    "donate.credit": "កាតឥណទាន/ឥណពន្ធ",
    "donate.bank": "ការផ្ទេរប្រាក់តាមធនាគារ",
    "donate.complete": "បញ្ចប់ការបរិច្ចាគ",

    // Footer Section
    "footer.about": "អំពីយើង",
    "footer.quicklinks": "តំណភ្ជាប់រហ័ស",
    "footer.mission": "បេសកកម្មរបស់យើង",
    "footer.copyright": "© {year} EcoVoice. រក្សាសិទ្ធិគ្រប់យ៉ាង។",
    "footer.madeWith": "បង្កើតដោយ {icon} សម្រាប់បរិស្ថាន",

    // Gallery Section
    "gallery.title": "វិចិត្រសាលរូបភាព",
    "gallery.subtitle":
      "កត់ត្រាដំណើររបស់យើងឆ្ពោះទៅរកការអភិរក្សបរិស្ថាន និងការបង្កើតសហគមន៍",
    "gallery.viewMore": "មើលបន្ថែមលើហ្វេសប៊ុក",

    // Sponsors Section
    "sponsors.title": "ដៃគូរបស់យើង",
    "sponsors.subtitle":
      "ជាមួយដៃគូរដែលមានតម្លៃរបស់យើង យើងកំពុងបង្កើតផលប៉ះពាល់អចិន្រ្តៃយ៍លើការអភិរក្សបរិស្ថាន",
    "sponsors.becomePartner": "ក្លាយជាដៃគូរ",
    "sponsors.partnerWithUs": "ចូលរួមជាមួយយើង",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "km" : "en"));
  };

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["en"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
