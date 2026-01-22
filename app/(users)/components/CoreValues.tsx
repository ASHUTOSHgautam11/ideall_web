import { Heart, Users, Lightbulb, Target } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Excellence',
    description: 'An uncompromising commitment to quality, consistency, and accountability in every deliverable.',
  },
  {
    icon: Users,
    title: 'Integrity',
    description: 'Trust built through transparency, clear communication, and principled business practices.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Continuous improvement in how we source, solve, and deliver—so clients stay ahead.',
  },
  {
    icon: Target,
    title: 'Partnership',
    description: 'Long-term relationships grounded in mutual success, shared goals, and dependable execution.',
  },
];

export default function CoreValues() {
  return (
    <section className="py-16 sm:py-20 lg:py-12 bg-[#f1f1f1ff]   ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 px-2 sm:px-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4">
            Our Core Values
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray/90 leading-relaxed">
            At Ideall Solutionz, our values guide how we work, how we deliver, and how we build long-term partnerships. They shape every decision—from sourcing and service standards to how we collaborate with clients and partners.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="text-center group px-2 sm:px-0"
              >
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Icon className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray/90 mb-2 sm:mb-3">
                  {value.title}
                </h3>
                <p className="text-gray/80 text-sm sm:text-base leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
