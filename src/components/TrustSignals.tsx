import { motion } from "framer-motion";
import { FaMedal, FaProjectDiagram, FaIndustry, FaTools, FaCogs, FaBolt, FaHeadset } from "react-icons/fa";

const capabilities = [
  { icon: FaMedal,          text: "Over 10 Years of Combined Expertise in Grinding Technology" },
  { icon: FaProjectDiagram, text: "End-to-End Solutions – From Concept Design to Commissioning" },
  { icon: FaIndustry,       text: "Expertise in Greenfield and Turnkey Grinding Projects" },
  { icon: FaTools,          text: "Plant Modernization and Capacity Enhancement Solutions" },
  { icon: FaCogs,           text: "Customized Solutions for Specialized Grinding Applications" },
  { icon: FaBolt,           text: "Energy-Efficient Grinding System Design" },
  { icon: FaHeadset,        text: "Comprehensive Technical Support and After-Sales Service" },
];

const TrustSignals = () => (
  <section id="trust" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Why CarbonHive</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-foreground">
          Trusted by Industry Leaders
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Engineering excellence backed by decades of experience and certified quality.
        </p>
      </motion.div>

      <motion.div
        className="mb-14 p-8 rounded-xl border border-primary/20 bg-card/50 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
          {capabilities.map(({ icon: Icon, text }, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-4 group"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <span className="mt-0.5 w-8 h-8 rounded-lg bg-primary/10 border border-primary/25 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                <Icon className="w-3.5 h-3.5 text-primary" />
              </span>
              <span className="text-muted-foreground text-sm leading-relaxed font-medium pt-1.5 group-hover:text-foreground transition-colors duration-300">
                {text}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="mt-8 grid md:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="p-8 rounded-xl border border-border bg-card/50">
          <h3 className="font-display text-xl font-bold text-foreground mb-3">For Engineers</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Precision-engineered solutions with detailed technical specs, CFD analysis, and material-specific testing.
            Every installation is backed by comprehensive documentation and ongoing technical support.
          </p>
        </div>
        <div className="p-8 rounded-xl border border-border bg-card/50">
          <h3 className="font-display text-xl font-bold text-foreground mb-3">For Procurement</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Competitive pricing with clear ROI projections. ISO-certified manufacturing, on-time delivery track record,
            and flexible payment terms. De-risk your purchase with our lab trial program.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default TrustSignals;
