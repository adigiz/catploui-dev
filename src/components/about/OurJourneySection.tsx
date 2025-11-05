import Image from "next/image";

const journeyData = [
  {
    title: "2016: Where It All Began",
    description:
      "Cap't Loui opens in Stoneham, MA — bringing bold Cajun flavor to New England.",
  },
  {
    title: "2017-2018: Growing Locally",
    description:
      "Expands across Massachusetts and into New Jersey, building buzz and loyal fans.",
  },
  {
    title: "2019-2021: Going National",
    description:
      "Launches in New York, Georgia, and California — bringing the boil coast to coast.",
  },
  {
    title: "2022-PRESENT: Still Boiling Strong",
    description:
      "New locations in Nevada, Alabama, and Rhode Island — and we’re just getting started.",
  },
];

export default function OurJourneySection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-medium text-gray-900 mb-10">
          OUR JOURNEY
        </h2>

        <div className="flex justify-center mb-10">
          <Image
            src="/images/about/our-journey.avif"
            alt="Our Journey"
            width={700}
            height={300}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {journeyData.map((item, index) => (
            <div key={index} className="bg-primary text-white rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
