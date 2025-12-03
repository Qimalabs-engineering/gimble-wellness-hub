const TrustedBy = () => {
  const organizations = [
    "Microsoft",
    "Google",
    "Amazon",
    "IBM",
    "Salesforce",
    "Oracle",
    "Meta",
    "Apple",
    "Netflix",
    "Adobe",
    "Cisco",
    "Intel",
  ];

  return (
    <section className="py-16 lg:py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
            Trusted by Leading Enterprise Organizations
          </h2>
          <p className="text-muted-foreground">
            Join hundreds of forward-thinking companies prioritizing employee wellbeing
          </p>
        </div>

        {/* Sliding logos container */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/30 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/30 to-transparent z-10" />
          
          {/* Sliding track */}
          <div className="flex animate-slide">
            {/* First set */}
            {organizations.map((org, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-6 lg:mx-8 flex items-center justify-center"
              >
                <div className="text-2xl lg:text-3xl font-bold text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors duration-300 whitespace-nowrap">
                  {org}
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {organizations.map((org, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-6 lg:mx-8 flex items-center justify-center"
              >
                <div className="text-2xl lg:text-3xl font-bold text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors duration-300 whitespace-nowrap">
                  {org}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;

