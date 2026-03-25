import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallCTA from "@/components/CallCTA";

interface SparePart {
  name: string;
  detail: string;
  equipment: string;
  image: string;
}

const sparesData = [
  {
    equipment: "Air Classifying Mill (ACM)",
    image: "/images/spares/acm-classifier.png",
    parts: [
      { name: "Classifier Wheel", detail: "Straight & inclined blade configurations", image: "/images/spares/acm-classifier.png" },
      { name: "Liners", detail: "Multi-deflector and smooth types", image: "/images/spares/acm-liner.png" },
      { name: "Rotor & Hammers / Beaters", detail: "Bar, Pin, and J Hammer types", image: "/images/spares/acm-hammers.png" },
      { name: "Shroud Ring", detail: "Baffled and smooth liner variants", image: "/images/spares/acm-shrouldring.png" },
      { name: "Bearing Housing Assembly", detail: "Complete shaft support assembly", image: "/images/spares/acm-Bearing_Housing_Assembly.png" },
      { name: "Anti-Vibration Mounting Pads (AVMP)", detail: "Vibration dampening pads for mill base", image: "/images/spares/acm-Anti_Vibration_Mounting_Pads(AVMP).png" },
    ],
  },
  {
    equipment: "Pulveriser Mill Spares",
    image: "/images/spares/PMS-LFS_Hammers.png",
    parts: [
      { name: "LFS Hammers", detail: "Fine grind, abrasion-resistant alloy tips", image: "/images/spares/PMS-LFS_Hammers.png" },
      { name: "Bar Type Hammers", detail: "Coarse grind, tungsten carbide tips", image: "/images/spares/PMS-Bar_Type_Hammers.png" },
    ],
  },
  {
    equipment: "Universal Mill / Pin Mill Spares",
    image: "/images/spares/UMPM-Bar_Turbo_rotor.png",
    parts: [
      { name: "Bar Turbo Rotor", detail: "Standard bar turbo configuration", image: "/images/spares/UMPM-Bar_Turbo_rotor.png" },
      { name: "Inclined Bar Turbo Rotor", detail: "Inclined bar for finer output", image: "/images/spares/UMPM-Inclined_Bar_Turbo.png" },
      { name: "Stud Bar Teeth Rotor", detail: "Stud bar teeth configuration", image: "/images/spares/UMPM-Stud_Bar_Teeth.png" },
      { name: "Pin Bar Rotor", detail: "Pin bar rotor type", image: "/images/spares/UMPM-Pin_Bar.png" },
      { name: "Stator Assemblies", detail: "Full screen & half screen classifier stators", image: "/images/spares/UMPM-Full_Screen_Classifier_Stator.png" },
      { name: "Screens", detail: "Retaining screens for grinding chamber", image: "/images/spares/UMPM-screen.png" },
      { name: "Bearing Housing", detail: "Primary rotor mounting assembly", image: "/images/spares/UMPM-Bearing_Housing_rotar.png" },
    ],
  },
  {
    equipment: "Hammer Mill Spares",
    image: "/images/spares/HMS-hammers.png",
    parts: [
      { name: "Hammers", detail: "Impact grinding elements", image: "/images/spares/HMS-hammers.png" },
      { name: "Multi-Deflector Liners", detail: "Multi-deflector liners for size reduction", image: "/images/spares/HMS-MD_Liners.png" },
      { name: "Screens", detail: "Particle size control screens", image: "/images/spares/HM-screen.png" },
    ],
  },
  {
    equipment: "Crusher Spares",
    image: "/images/spares/Crusher-Grinding_Blades.png",
    parts: [
      { name: "Grinding Blades", detail: "S-type and Star-type blades", image: "/images/spares/Crusher-Grinding_Blades.png" },
      { name: "Screens", detail: "Sizing screens for output control", image: "/images/spares/Crusher-Screens.png" },
    ],
  },
  {
    equipment: "Delumper Spares",
    image: "/images/spares/DelumperSpares-Stationary_Blades.png",
    parts: [
      { name: "Stationary Blades", detail: "Fixed cutting elements", image: "/images/spares/DelumperSpares-Stationary_Blades.png" },
      { name: "Hammers", detail: "Lump breaking impact elements", image: "/images/spares/DelumperSpares-hammer.png" },
      { name: "Screens", detail: "Discharge sizing screen", image: "/images/spares/DelumperSpares-screen.png" },
    ],
  },
  {
    equipment: "Micron Separator Spares",
    image: "/images/logo.png",
    parts: [
      { name: "Dispersion Ring", detail: "Feed dispersion ring for uniform distribution", image: "/images/logo.png" },
      { name: "Classifier Wheel", detail: "Precision classification wheel", image: "/images/logo.png" },
      { name: "Bottom Ring", detail: "Lower chamber ring assembly", image: "/images/logo.png" },
    ],
  },
  {
    equipment: "Air Swept Mill Spares",
    image: "/images/spares/air-swept-mill.png",
    parts: [
      { name: "Hammers", detail: "Beater elements for size reduction", image: "/images/spares/HMS-hammers.png" },
      { name: "MD Liner (Top & Slide)", detail: "Multi-deflector top and slide liners", image: "/images/spares/ASMS-MDLiner.png" },
      { name: "Wizard Blades (2 / 3 / 4-Blade)", detail: "2-blade, 3-blade, and 4-blade configurations", image: "/images/spares/ASMS-Wizard_blades.png" },
    ],
  },
  {
    equipment: "Bag Filter Spares",
    image: "/images/spares/BFS-Filter Bags.png",
    parts: [
      { name: "Filter Bags", detail: "Cotton, PET, PP, PA, PTFE, Glass Fibre & more", image: "/images/spares/BFS-Filter Bags.png" },
      { name: "Filter Bag Cages", detail: "MS, SS, Galvanised with Venturi options", image: "/images/spares/BFS-Filter_Bag_Cages.png" },
    ],
  },
  {
    equipment: "Vibro Sifters",
    image: "/images/spares/VS-vibro-sifter.png",
    parts: [
      { name: "Screens", detail: "Various mesh sizes for classification", image: "/images/spares/VS-vibro-sifter.png" },
      { name: "Motors", detail: "Vibration drive motors", image: "/images/spares/VS-Motors.png" },
    ],
  },
  {
    equipment: "Grader",
    image: "/images/spares/Grader-Screen.png",
    parts: [
      { name: "Screens", detail: "Multi-layer grading screens", image: "/images/spares/Grader-Screen.png" },
      { name: "Motors", detail: "Unbalanced vibration drive motors", image: "/images/spares/Grader-Motors.png" },
    ],
  },
  {
    equipment: "Ducting & Air Handling",
    image: "/images/spares/acm-Anti_Vibration_Mounting_Pads(AVMP).png",
    parts: [
      { name: "Anti-Vibration Mounting Pads", detail: "AVMP for fans and ducting isolation", image: "/images/spares/acm-Anti_Vibration_Mounting_Pads(AVMP).png" },
    ],
  },
  {
    equipment: "Rotary Air Lock Valve (RAL)",
    image: "/images/spares/RotaryAirLockValue.png",
    parts: [
      { name: "Rotary Air Lock (RAL)", detail: "Discharge metering valve, CI / SS / Alloy", image: "/images/spares/RotaryAirLockValue.png" },
    ],
  },
  {
    equipment: "Knife Gate Valve (KGV)",
    image: "/images/spares/KGV-Manual_KGV.png",
    parts: [
      { name: "Manual KGV", detail: "Manual knife gate valve for dry bulk materials", image: "/images/spares/KGV-Manual_KGV.png" },
      { name: "Pneumatic KGV", detail: "Pneumatically actuated knife gate valve", image: "/images/spares/KGV-Pneumatic_KGV.png" },
    ],
  },
  {
    equipment: "Magnetic Separation Systems",
    image: "/images/spares/MSS-Channel_Magnets.png",
    parts: [
      { name: "Channel Magnets", detail: "Channel-type magnetic separators", image: "/images/spares/MSS-Channel_Magnets.png" },
      { name: "Hump Magnets", detail: "Hump-style magnetic separators", image: "/images/spares/MSS-Hump_Magnets.png" },
      { name: "Hopper Magnets", detail: "Hopper-mounted magnetic separators", image: "/images/spares/MSS-Hopper_Magnets.png" },
      { name: "Magnetic Plates", detail: "Flat plate magnetic separators", image: "/images/spares/MSS-Magnetic_Plates.png" },
      { name: "Magnetic Grills", detail: "Grill-type magnetic separators", image: "/images/spares/MSS-Magnetic_Grills.png" },
      { name: "Drawer Magnets", detail: "Drawer-style magnetic separators", image: "/images/spares/MSS-Drawer_Magnets.png" },
    ],
  },
];

const allParts: SparePart[] = sparesData.flatMap((cat) =>
  cat.parts.map((part) => ({
    ...part,
    equipment: cat.equipment,
    image: (part as any).image || cat.image,
  }))
);

const equipmentNames = sparesData.map((cat) => cat.equipment);

const Spares = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEquipment, setSelectedEquipment] = useState<string[]>([]);

  const toggleEquipment = (name: string) => {
    setSelectedEquipment((prev) =>
      prev.includes(name) ? prev.filter((e) => e !== name) : [...prev, name]
    );
  };

  const filteredParts = useMemo(() => {
    return allParts.filter((part) => {
      const matchesSearch =
        !searchQuery ||
        part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        part.detail.toLowerCase().includes(searchQuery.toLowerCase()) ||
        part.equipment.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesEquipment =
        selectedEquipment.length === 0 || selectedEquipment.includes(part.equipment);
      return matchesSearch && matchesEquipment;
    });
  }, [searchQuery, selectedEquipment]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedEquipment([]);
  };

  const hasActiveFilters = searchQuery || selectedEquipment.length > 0;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-28 pb-12 px-6 bg-gradient-hero relative">
          <div className="max-w-7xl mx-auto text-center">
            <motion.span className="text-primary text-sm font-semibold uppercase tracking-widest"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              Spare Parts
            </motion.span>
            <motion.h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-3 text-foreground"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              OEM-Grade <span className="text-primary text-glow-amber">Spares</span>
            </motion.h1>
            <motion.p className="text-muted-foreground mt-4 max-w-2xl mx-auto"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              Critical wear parts and precision components engineered for extended service life.
            </motion.p>
          </div>
        </section>

        <section className="py-5 px-6 bg-background border-b border-border sticky top-16 z-30">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-4">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input placeholder="Search spare parts..." value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10 h-11 bg-card border-border text-foreground placeholder:text-muted-foreground" />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <a href="https://wa.me/9195278 39020" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[hsl(142_60%_22%)] border border-[hsl(142_70%_45%/0.6)] shadow-[0_0_12px_hsl(142_70%_45%/0.4)] hover:bg-[hsl(142_60%_28%)] hover:shadow-[0_0_20px_hsl(142_70%_50%/0.65)] text-white font-semibold text-sm transition-all duration-300 shrink-0">
              <SiWhatsapp className="w-4 h-4" />
              WhatsApp for Spares
            </a>
          </div>
        </section>

        <section className="py-8 px-6 bg-gradient-dark min-h-[60vh]">
          <div className="max-w-7xl mx-auto flex gap-8">
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-36 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-sm font-bold text-foreground uppercase tracking-wider">Equipment Type</h3>
                  {hasActiveFilters && (
                    <button onClick={clearFilters} className="text-xs text-primary hover:underline">Clear all</button>
                  )}
                </div>
                <div className="space-y-2">
                  {equipmentNames.map((name) => (
                    <label key={name} className="flex items-start gap-3 cursor-pointer group py-1">
                      <Checkbox checked={selectedEquipment.includes(name)}
                        onCheckedChange={() => toggleEquipment(name)}
                        className="mt-0.5 border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-tight">{name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* Mobile */}
            <div className="lg:hidden w-full">
              <div className="flex flex-wrap gap-2 mb-6">
                {equipmentNames.map((name) => (
                  <button key={name} onClick={() => toggleEquipment(name)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${selectedEquipment.includes(name)
                      ? "bg-primary/20 border-primary text-primary"
                      : "border-border text-muted-foreground hover:border-primary/50"
                      }`}>
                    {name.replace(/ \(.*\)/, "")}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredParts.map((part, i) => (
                  <SpareCard key={`${part.equipment}-${part.name}`} part={part} index={i} />
                ))}
              </div>
              {filteredParts.length === 0 && <EmptyState onClear={clearFilters} />}
            </div>

            {/* Desktop */}
            <div className="hidden lg:block flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing <span className="text-foreground font-semibold">{filteredParts.length}</span> results
                </p>
              </div>
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredParts.map((part, i) => (
                  <SpareCard key={`${part.equipment}-${part.name}`} part={part} index={i} />
                ))}
              </div>
              {filteredParts.length === 0 && <EmptyState onClear={clearFilters} />}
            </div>
          </div>
        </section>
      </main>
      <CallCTA />
      <Footer />
    </div>
  );
};

const SpareCard = ({ part, index }: { part: SparePart; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: Math.min(index * 0.03, 0.3) }}
    className="group rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300 overflow-hidden flex flex-col"
  >
    <div className="w-full h-44 overflow-hidden bg-muted/10 border-b border-border">
      <img src={part.image} alt={part.name}
        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        loading="lazy" />
    </div>
    <div className="p-4 flex flex-col flex-1">
      <span className="text-[11px] text-primary font-semibold uppercase tracking-wider mb-1">{part.equipment}</span>
      <h3 className="font-display text-base font-bold text-foreground mb-1">{part.name}</h3>
      <p className="text-xs text-muted-foreground leading-relaxed flex-1">{part.detail}</p>
      <a href="https://wa.me/9195278 39020" target="_blank" rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:underline self-start">
        <SiWhatsapp className="w-3.5 h-3.5" />
        Enquire Now
      </a>
    </div>
  </motion.div>
);

const EmptyState = ({ onClear }: { onClear: () => void }) => (
  <div className="text-center py-20">
    <p className="text-muted-foreground text-lg">No spare parts match your search.</p>
    <button onClick={onClear} className="mt-3 text-primary font-semibold hover:underline text-sm">Clear filters</button>
  </div>
);

export default Spares;
