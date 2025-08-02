"use client";

import { useState } from "react";

interface Contact {
  name: string;
  designation: string;
  phone: string;
  email?: string;
  address?: string;
  department: string;
}

const contactsData: Contact[] = [
  // District Administration
  {
    name: "Sri B. M Santhosh, IAS",
    designation: "Collector & District Magistrate",
    phone: "9100901600",
    email: "collector-gdwl@telangana.gov.in",
    address: "Integrated District Offices Complex - Jogulamba Gadwal 509125",
    department: "District Administration"
  },
  {
    name: "Sri V. Laxminarayana",
    designation: "Additional Collector (Revenue)",
    phone: "9100901601",
    email: "jc-gdwl@telangana.gov.in",
    address: "Integrated District Offices Complex - Jogulamba Gadwal 509125",
    department: "District Administration"
  },
  {
    name: "Sri Yoganand (FAC)",
    designation: "Chief Planning Officer",
    phone: "9290699448",
    email: "cpojogulamba@gmail.com",
    address: "Integrated District Offices Complex - Jogulamba Gadwal 509125",
    department: "District Administration"
  },
  {
    name: "Sri T. Ramlingeshwar Goud",
    designation: "General Manager District Industries Officer",
    phone: "8688921546",
    email: "gmdic-gdwl-inds@telangana.gov.in",
    address: "Integrated District Offices Complex - Jogulamba Gadwal 509125",
    department: "District Administration"
  },
  {
    name: "Sri Srinivasulu",
    designation: "District Irrigation Officer",
    phone: "9182562401",
    email: "diojogulambagadwal@gmail.com",
    address: "Integrated District Offices Complex - Jogulamba Gadwal 509125",
    department: "District Administration"
  },
  {
    name: "Dr. G. Mohan (I/c)",
    designation: "District Ground Water Officer",
    phone: "9490895869",
    email: "gwdgadwal@gmail.com",
    address: "Integrated District Offices Complex - Jogulamba Gadwal 509125",
    department: "District Administration"
  },
  {
    name: "Sri Siddappa (I/c)",
    designation: "District Medical & Health Officer",
    phone: "7013959920",
    email: "dmhojogulamba@gmail.com",
    address: "Integrated District Offices Complex - Jogulamba Gadwal 509125",
    department: "District Administration"
  },
  {
    name: "Sri Narsing Rao (FAC) DRDO",
    designation: "CEO (ZP)",
    phone: "9281481969",
    email: "zppjgwl@gmail.com",
    address: "Integrated District Offices Complex - Jogulamba Gadwal 509125",
    department: "District Administration"
  },
  {
    name: "Sri M. Hrudaya Raju",
    designation: "Nodal Officer, District Intermediate Educational Officer",
    phone: "7997994365",
    email: "dieo.jogulamba@gmail.com",
    address: "Integrated District Offices Complex - Jogulamba Gadwal 509125",
    department: "District Administration"
  },
  {
    name: "Sri K.A.V.S Prasad Reddy (I/c)",
    designation: "District Forest Officer",
    phone: "8142412347",
    address: "Integrated District Offices Complex - Jogulamba Gadwal 509125",
    department: "District Administration"
  },
  {
    name: "Sri Chitti Babu",
    designation: "District Legal Metrology Officer (Nagarkurnool & Gadwal)",
    phone: "9885953169",
    address: "Integrated District Offices Complex - Jogulamba Gadwal 509125",
    department: "District Administration"
  },
  {
    name: "Smt. Nushitha (FAC)",
    designation: "District BC Development Officer",
    phone: "9441030602",
    email: "dbcdo.gadwal@gmail.com",
    address: "Integrated District Offices Complex - Jogulamba Gadwal 509125",
    department: "District Administration"
  },
  {
    name: "Sri Annaldas Kurmaiah (FAC)",
    designation: "District Town and Country Planning Officer",
    phone: "9398044994",
    address: "Integrated District Offices Complex - Jogulamba Gadwal 509125",
    department: "District Administration"
  },
  {
    name: "Sri B. Narsing Rao (FAC)",
    designation: "Additional Collector (LB)",
    phone: "9391489616",
    address: "Integrated District Offices Complex - Jogulamba Gadwal 509125",
    department: "District Administration"
  },
  {
    name: "Sri Nagendram",
    designation: "Deputy CEO (ZP)",
    phone: "7989414716",
    address: "Integrated District Offices Complex - Jogulamba Gadwal 509125",
    department: "District Administration"
  },
  {
    name: "Smt. Parameshwari (FAC)",
    designation: "Executive Engineer Officer MB (Water Grid)",
    phone: "9100120493",
    address: "Integrated District Offices Complex - Jogulamba Gadwal 509125",
    department: "District Administration"
  },
  {
    name: "Sri Swamy Kumar",
    designation: "District Civil Supplies Officer (DCSO)",
    phone: "7382310713",
    address: "Integrated District Offices Complex - Jogulamba Gadwal 509125",
    department: "District Administration"
  },
  {
    name: "Sri Akbar",
    designation: "District Horticulture Sericulture Officer",
    phone: "7997725196",
    email: "dhsogadwal@gmail.com",
    address: "Integrated District Offices Complex - Jogulamba Gadwal 509125",
    department: "District Administration"
  },
  {
    name: "Sri B. Narsing Rao",
    designation: "District Rural Development Officer",
    phone: "7331155371",
    email: "drdojgdl@gmail.com",
    address: "Integrated District Offices Complex - Jogulamba Gadwal 509125",
    department: "District Administration"
  },
  {
    name: "Smt. K. Vimala",
    designation: "District Manager (Civil Supplies)",
    phone: "9963105948",
    address: "Integrated District Offices Complex - Jogulamba Gadwal 509125",
    department: "District Administration"
  },
  {
    name: "Sri Govindaiah",
    designation: "Assistant Director (Handlooms & Textiles)",
    phone: "9573730056",
    email: "adhandtex@gmail.com",
    address: "Integrated District Offices Complex - Jogulamba Gadwal 509125",
    department: "District Administration"
  },
  {
    name: "Sri M Ravindhar",
    designation: "District Registrar, Mahabubnagar",
    phone: "9908004846",
    address: "Mahabubnagar",
    department: "District Administration"
  },
  {
    name: "Govindu Naik",
    designation: "District Agriculture Officer",
    phone: "9573133100",
    address: "Integrated District Offices Complex - Jogulamba Gadwal 509125",
    department: "District Administration"
  },
  {
    name: "P. Somi Reddy",
    designation: "District Horticulture/Sericulture Officer (Assistant Director)",
    phone: "8374449807",
    address: "Integrated District Offices Complex - Jogulamba Gadwal 509125",
    department: "District Administration"
  },
  {
    name: "S. Pushpamma",
    designation: "District Marketing Officer",
    phone: "7330733680",
    address: "Integrated District Offices Complex - Jogulamba Gadwal 509125",
    department: "District Administration"
  },
  {
    name: "Prasad Rao",
    designation: "District Co-Operative Officer",
    phone: "9100115705",
    address: "Integrated District Offices Complex - Jogulamba Gadwal 509125",
    department: "District Administration"
  },
  {
    name: "Dr. C. Dhanraj",
    designation: "District AH Officer",
    phone: "7702771292",
    address: "Integrated District Offices Complex - Jogulamba Gadwal 509125",
    department: "District Administration"
  },
  {
    name: "B. Laxmappa",
    designation: "District Fisheries Officer",
    phone: "9441076533",
    address: "Integrated District Offices Complex - Jogulamba Gadwal 509125",
    department: "District Administration"
  },
  {
    name: "K Rajanna",
    designation: "District BC Welfare Officer",
    phone: "9701111297",
    address: "Integrated District Offices Complex - Jogulamba Gadwal 509125",
    department: "District Administration"
  },
  {
    name: "Chandera Shekar Reddy",
    designation: "District Civil Supply Officer",
    phone: "9618938736",
    address: "Integrated District Offices Complex - Jogulamba Gadwal 509125",
    department: "District Administration"
  },
  {
    name: "K Venkateshwarlu",
    designation: "Legal Metrology Officer",
    phone: "9701754324",
    address: "Integrated District Offices Complex - Jogulamba Gadwal 509125",
    department: "District Administration"
  },
  {
    name: "Smt Vasantha",
    designation: "District Forest Officer (Wanaparthy/Gadwal)",
    phone: "9440810062",
    address: "Integrated District Offices Complex - Jogulamba Gadwal 509125",
    department: "District Administration"
  },
  {
    name: "K. Sukravardhan Reddy",
    designation: "District Audit Officer",
    phone: "9705343091",
    address: "Integrated District Offices Complex - Jogulamba Gadwal 509125",
    department: "District Administration"
  },

  // Agriculture Department
  {
    name: "Sri. K. Govind Naik",
    designation: "District Agriculture Officer (DAO)",
    phone: "7288894377",
    address: "Jogulamba Gadwal",
    department: "Agriculture"
  },
  {
    name: "Assistant Director of Agriculture",
    designation: "Assistant Director of Agriculture [R]",
    phone: "08546-244282",
    address: "V4HJ+CJH, Alampur (P), Telangana 509152",
    department: "Agriculture"
  },

  // Education Department
  {
    name: "Sri Ramulu Dayal (FAC)",
    designation: "Mandal Education Officer (MEO), Ieeja",
    phone: "9010386197",
    email: "meoieeja@ymail.com",
    address: "MEO Of Ieeja, Jogulamba Gadwal",
    department: "Education"
  },
  {
    name: "Sri Abdul Gani",
    designation: "District Educational Officer",
    phone: "7995087603",
    email: "deogadwal@gmail.com",
    address: "District School Education Office, Jogulamba Gadwal",
    department: "Education"
  },

  // Electricity Department
  {
    name: "Sri Thirupathi Rao (FAC)",
    designation: "Superintending Engineer (SE), TSSPDCL",
    phone: "08546-272260",
    address: "Electricity Office, Jogulamba Gadwal",
    department: "Electricity"
  },
  {
    name: "Assistant Divisional Engineer",
    designation: "Assistant Divisional Engineer (ADE)/Operation",
    phone: "08546-272260",
    address: "Near 132KV Gadwal Sub-Station, Krishna River road, Gadwal - 509125",
    department: "Electricity"
  },

  // Police
  {
    name: "MENUKONDA VIJAYBHASKAR",
    designation: "Sub-Inspector Of Police, Ieeja Police Station",
    phone: "8712670289",
    email: "sho-aiz-jlmb@tspolice.gov.in",
    address: "Ieeja Police Station, Ieeja",
    department: "Police"
  },
  {
    name: "Ieeja Police Station",
    designation: "Police Station",
    phone: "9440904778",
    email: "sho-aiz-jlmb@tspolice.gov.in",
    address: "Ieeja Police Station, Ieeja",
    department: "Police"
  },

  // Municipality Staff
  {
    name: "S. Rajaiah",
    designation: "Commissioner",
    phone: "8897509127",
    email: "Commissioner_ieeja@yahoo.com",
    address: "Nagara panchayath Ieeja Office H.No.6-39, Old Busstand, Ieeja, Jogulamba Gadwal - 509127",
    department: "Municipality"
  },
  {
    name: "Venkataiah",
    designation: "Manager / Chief Public Information Officer",
    phone: "9059443636",
    email: "mc.ieejanp@gmail.com",
    address: "Nagara panchayath Ieeja Office H.No.6-39, Old Busstand, Ieeja, Jogulamba Gadwal - 509127",
    department: "Municipality"
  },
  {
    name: "Manyam",
    designation: "Junior Assistant / Assistant Public Information Officer",
    phone: "9440081259",
    email: "mc.ieejanp@gmail.com",
    address: "Nagara panchayath Ieeja Office H.No.6-39, Old Busstand, Ieeja, Jogulamba Gadwal - 509127",
    department: "Municipality"
  },
  {
    name: "Khaja Hussain (FAC)",
    designation: "Assistant Engineer",
    phone: "7675068919",
    address: "Nagara panchayath Ieeja Office H.No.6-39, Old Busstand, Ieeja, Jogulamba Gadwal - 509127",
    department: "Municipality"
  },
  {
    name: "B. Anjaneyulu (FAC)",
    designation: "Town Planning Building Overseer",
    phone: "9848169830",
    address: "Nagara panchayath Ieeja Office H.No.6-39, Old Busstand, Ieeja, Jogulamba Gadwal - 509127",
    department: "Municipality"
  },
  {
    name: "Prakash Babu",
    designation: "Bill Collector",
    phone: "9985150790",
    address: "Nagara panchayath Ieeja Office H.No.6-39, Old Busstand, Ieeja, Jogulamba Gadwal - 509127",
    department: "Municipality"
  },
  
  // RTI Contacts
  {
    name: "R. Venkanna",
    designation: "1st Appellate Authority (RTI)",
    phone: "9949907785",
    email: "Commissioner_ieeja@yahoo.com",
    address: "Nagara panchayath Ieeja Office H.No.6-39, Old Busstand, Ieeja, Jogulamba Gadwal - 509127",
    department: "RTI"
  },
  {
    name: "Venkataiah",
    designation: "Chief Public Information Officer (RTI)",
    phone: "9908136440",
    email: "mc.ieejanp@gmail.com",
    address: "Nagara panchayath Ieeja Office H.No.6-39, Old Busstand, Ieeja, Jogulamba Gadwal - 509127",
    department: "RTI"
  },
  
  // Mandal Office
  {
    name: "Bijrula Mahesh",
    designation: "Mandal Panchayat Officer (MPO)",
    phone: "8309316500",
    address: "Mandal Panchayath Office, Ieeja, Jogulamba Gadwal",
    department: "Mandal Office"
  },
  {
    name: "K. Venkateswarlu (FAC)",
    designation: "Mandal Parishad Development Officer (MPDO)",
    phone: "8008901087",
    address: "Mandal Panchayath Office, Ieeja, Jogulamba Gadwal",
    department: "Mandal Office"
  },
  {
    name: "Smt. Jyothi",
    designation: "Tahsildar",
    phone: "9000101495",
    email: "tah.ieeja@gmail.com",
    address: "Ieeza Tahsildar Office, Jogulamba Gadwal",
    department: "Mandal Office"
  },
  
  // Postal Service
  {
    name: "Ieeja S.O",
    designation: "Post Office",
    phone: "08546-278622",
    address: "Ieeja, Jogulamba Gadwal Dist. - 509127",
    department: "Postal Service"
  }
];

export default function Directory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const departments = ["All", ...Array.from(new Set(contactsData.map(contact => contact.department)))];

  const filteredContacts = contactsData.filter(contact => {
    const matchesSearch = 
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phone.includes(searchTerm);
    
    const matchesDepartment = selectedDepartment === "All" || contact.department === selectedDepartment;
    
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-yellow-600">ieeja.com</a>
            </div>
            <nav className="flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-yellow-600 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ieeja Municipality <span className="text-yellow-600">Directory</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete contact information for all municipal offices and staff
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-yellow-200 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Search Box */}
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Search Directory
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search by name, designation, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
              />
            </div>

            {/* Department Filter */}
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Department
              </label>
              <select
                id="department"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredContacts.length} of {contactsData.length} contacts
          </p>
        </div>

        {/* Contacts Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredContacts.map((contact, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-yellow-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{contact.name}</h3>
                      <p className="text-yellow-600 font-medium mb-2">{contact.designation}</p>
                      <div className="space-y-1">
                        <div className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <a href={`tel:${contact.phone}`} className="hover:text-yellow-600 transition-colors">
                            {contact.phone}
                          </a>
                        </div>
                        
                        {contact.email && (
                          <div className="flex items-center text-gray-600">
                            <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a href={`mailto:${contact.email}`} className="hover:text-yellow-600 transition-colors break-all">
                              {contact.email}
                            </a>
                          </div>
                        )}
                        
                        {contact.address && (
                          <div className="flex items-start text-gray-600">
                            <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-sm">{contact.address}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Department Badge */}
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 ml-2">
                      {contact.department}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredContacts.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">No contacts found</h3>
            <p className="mt-2 text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}

        {/* Back to Home */}
        <div className="text-center mt-12">
          <a href="/" className="inline-flex items-center px-6 py-3 border border-yellow-600 text-yellow-600 font-medium rounded-lg hover:bg-yellow-50 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
        </div>
      </main>
    </div>
  );
}