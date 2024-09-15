import JobCard from "../Components/CareearComponents/JobCard";
import ShairdHeader from "../Components/ShairdHeader";

const Career = () => {
  const jobData = [
    {
      title: "Cashier",
      description: `Requirements: Bachelor's degree in any discipline. Experience: 1 to 2 years. Additional Requirements: Age 22 to 35 years. Responsibilities: Full-time (working hours 11:00 AM to 11:00 PM, Day off: once a week). Yearly 1-2 months you may visit CTG branch. Keep track of the organization’s accounts and daily operations.`,
    },
    {
      title: "Manager",
      description: `Requirements: Minimum Graduation in any discipline. Experience: At least 5 years. Additional Requirements: Age 30 years and above. Post Graduation will add value. Should have experience in restaurant/hotel management. Responsible for checking product quality and handling customer service issues.`,
    },
    {
      title: "Waiter",
      description: `Requirements: High School Diploma. Experience: 1-3 years. Additional Requirements: Age 18 to 30 years. Responsibilities: Serve food and beverages to customers, take orders, ensure customer satisfaction.`,
    },
    {
      title: "Chef",
      description: `Requirements: Culinary Arts Degree. Experience: 3 to 5 years. Additional Requirements: Age 25 to 40 years. Responsibilities: Plan and prepare a variety of dishes. Manage the kitchen staff. Ensure quality and hygiene standards.`,
    },
    {
      title: "Bartender",
      description: `Requirements: Bartending Certification. Experience: 1 to 3 years. Additional Requirements: Age 21 years and above. Responsibilities: Prepare and serve drinks, manage bar supplies, ensure customer satisfaction.`,
    },
    {
      title: "Host/Hostess",
      description: `Requirements: High School Diploma. Experience: 1-2 years. Additional Requirements: Age 18 to 30 years. Responsibilities: Greet guests, manage seating arrangements, assist with guest inquiries.`,
    },
    {
      title: "Dishwasher",
      description: `Requirements: No formal education required. Experience: 0-1 years. Additional Requirements: Age 18 years and above. Responsibilities: Wash dishes, assist kitchen staff with cleaning tasks, maintain kitchen hygiene.`,
    },
    {
      title: "Delivery Driver",
      description: `Requirements: High School Diploma. Valid driver’s license. Experience: 1 to 2 years. Additional Requirements: Age 20 years and above. Responsibilities: Deliver food to customers, maintain delivery vehicle, ensure timely deliveries.`,
    },
  ];

  return (
    <div>
      <ShairdHeader about="Career" path="Career"></ShairdHeader>
      <div className="md:max-w-screen-xl mx-auto px-4 pt-14 pb-20">
        <h3 className="text-4xl font-extrabold">Join Sultan's Dine Family</h3>
        <div>
          {jobData.map((job, index) => (
            <JobCard key={index} job={job}></JobCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
