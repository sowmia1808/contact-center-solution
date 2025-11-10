export default function PricingComparison() {
 const features = [
    'TegsoftCRM Features',
    'Basic IVR Features',
    'Advanced IVR Features',
    'Creating Custom Surveys - NPS Scoring',
    'APIs for 3rd Party Integrations',
    'Inbound Management',
    'Free-of-charge IP PBX User Licenses',
    'Call Routing via Time Conditions',
    'Defining and Managing Conference Rooms',
    'Call Detail Reports (CDR)',
    'Voice Recording',
    'Voice Reports and Analytics',
    'Voice Mail',
    'Integrated Webphone',
    'CTI Popup Functionality',
    'Creating IVR Trees',
    'Queue Management',
    'Agent Management',
    'Web-based Agent Screen',
    'Dashboard',
    'Agent Performance Reports',
    'Agent & Skill Reporting',
    'Manual Outbound Features',
    'Preview Dialer Features',
    'Progressive Dialer Features',
    'Predictive Dialer Features',
    'Campaign Management',
    'Voice Campaign Reports',
    'Agentless IVR Campaigns',
    'VPOS and Payment Systems Integrations',
    'Requirements Management',
    'Tegsoft Telescope Mobile App',
    'Accessing online education (e-learning) materials',
    'Accessing online support materials',
    'Chat Reporting',
    'E-mail Campaigns',
    'SMS Campaigns',
    'Speech Recognition',
    'Speech Analytics',
    'Softphone',
    'UCClient',
    'Videocall',
    'Speech to Text (Integration is included, credits must be purchased)',
    'Text to Speech (Integration is included, credits must be purchased)',
    'Quality Management',
    'Screen Recording',
  ];
  const plans = ['Text Based', 'Inbound', 'Outbound', 'Blended', 'Omnichannel'];

  const planData = {
    'Text Based':  [true,false, false, true, true,false, false,true,false, false, false, false, false, false,true,false,true, true, true, true, true, true,false, false, false, false, false, false, false, false, false, true, true, true, true, true, true,false, false, false, false, false, false, false, false,'Optional'],
    'Inbound':     [true, true,true, true,true, true,'Optional', true, true, true, true, true, true, true, true, true, true, true,true, true,true, true,false,false,false,false,false,false,true,false,true,true,true,false,false,'Optional','Optional','Optional','Optional',false,'Optional','Optional','Optional','Optional'],
    'Outbound':    [true, true, true, true, true,'Optional',false,true, true, true, true, true, true, true, true,false,true, true, true, true,false,true, true, true, true,true, true, true, true,false,],
    'Blended':     [true, true, true, true, 'Optional', false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    'Omnichannel': [true, true, true, true, true,  false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true],
  };

  const planPrices = {
    'Text Based': '-',
    'Inbound': '350',
    'Outbound': '350',
    'Blended': '700',
    'Omnichannel': '1500',
  };

  // Updated renderCell function
  const renderCell = (value, feature, plan) => {
    // Special case for "Free-of-charge IP PBX User Licenses"
    if (feature === 'Free-of-charge IP PBX User Licenses') {
      if (plan === 'Text Based') return <span className="text-gray-500">-</span>;
      if (plan === 'Inbound') return <span className="font-semibold text-gray-800">350</span>;
      if (plan === 'Outbound') return <span className="font-semibold text-gray-800">350</span>;
      if (plan === 'Blended') return <span className="font-semibold text-gray-800">700</span>;
      if (plan === 'Omnichannel') return <span>1500</span>;
    }

    // Default cell display
    if (value === true) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-green-500 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      );
    } else if (value === 'Optional') {
      return <span className="text-yellow-400 font-medium">Optional</span>;
    } else {
      return <span className="text-gray-500">-</span>;
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8 sm:mb-12">
    Plan Comparison
  </h2>

  {/* Responsive table wrapper */}
  <div className="flex justify-center">
    <div className="w-full max-w-7xl overflow-x-auto rounded-xl shadow-lg scrollbar-thin scrollbar-thumb-pink-400 scrollbar-track-pink-100">
      <table className="min-w-full table-auto bg-white/20 backdrop-blur-lg border-2 border-pink-200 text-sm sm:text-base">
        <thead className="sticky top-0 z-10">
          <tr className="bg-pink-600 text-white text-xs sm:text-sm md:text-base">
            <th className="px-3 sm:px-6 py-3 sm:py-4 text-left whitespace-nowrap">
              Features
            </th>
            {plans.map((plan) => (
              <th
                key={plan}
                className="px-3 sm:px-6 py-3 sm:py-4 text-center whitespace-nowrap"
              >
                {plan}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {features.map((feature, idx) => (
            <tr
              key={feature}
              className="border-t border-pink-100 hover:bg-white/10 transition"
            >
              <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                {feature}
              </td>
              {plans.map((plan) => (
                <td
                  key={plan}
                  className="px-3 sm:px-6 py-3 sm:py-4 text-center whitespace-nowrap"
                >
                  {renderCell(planData[plan][idx], feature, plan)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</section>

  );
}
