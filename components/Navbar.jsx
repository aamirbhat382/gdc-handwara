
import { useEffect, useState } from "react";

const dropdownNavsStudents = [
  {
    label: "",
    navs: [
      {
        title: "VIEW MY COURSE",
        desc: "",
        path: "javascript:void(0)",
      },
      {
        title: "CERTIFICATES",
        desc: "",
        path: "javascript:void(0)",
      },
      {
        title: "SYLLABUS",
        desc: "",
        path: "javascript:void(0)",
      },
      {
        title: "RESULTS",
        desc: "",
        path: "javascript:void(0)",
      },
    ],
  },
  {
    label: "",
    navs: [
      {
        title: "ADMISSIONS",
        desc: "",
        path: "javascript:void(0)",
      },
      {
        title: "SCHOLORASHIP",
        desc: "",
        path: "javascript:void(0)",
      },
      {
        title: "ELIGIBILITY",
        desc: "",
        path: "javascript:void(0)",
      },
      {
        title: "ANNOUNCEMENT",
        desc: "",
        path: "javascript:void(0)",
      },
    ]
  },
  {
    label: "",
    navs: [
      {
        title: "LIBRARY",
        desc: "",
        path: "javascript:void(0)",
      },
      {
        title: "SPORTS",
        desc: "",
        path: "javascript:void(0)",
      },
      {
        title: "HEALTH CARE",
        desc: "",
        path: "javascript:void(0)",
      },
      {
        title: "FAQ",
        desc: "",
        path: "javascript:void(0)",
      },
    ]
  },
];
const dropdownNavsAcademics = [
  {
    label: "FACULTY",
    navs: [
      {
        title: "HUMANITES",
        desc: "",
        path: "javascript:void(0)",
      },
      {
        title: "SCIENCE & TECHNOLOGY",
        desc: "",
        path: "javascript:void(0)",
      },
      {
        title: "COMMERCE & MANAGEMENT",
        desc: "",
        path: "javascript:void(0)",
      },
      {
        title: "PHYSICAL EDUCATION",
        desc: "",
        path: "javascript:void(0)",
      },
    ],
  },
  {
    label: "RANKING",
    navs: [
      {
        title: "NAAC",
        desc: "",
        path: "javascript:void(0)",
      },
      {
        title: "IQAC",
        desc: "",
        path: "javascript:void(0)",
      },
      {
        title: "AQARS",
        desc: "",
        path: "javascript:void(0)",
      },
      {
        title: "",
        desc: "",
        path: "javascript:void(0)",
      },
    ]
  },
  {
    label: "",
    navs: [
      {
        title: "ACADEMICS ACTIVITIES",
        desc: "",
        path: "javascript:void(0)",
      },
      {
        title: "SCHOOLS",
        desc: "",
        path: "javascript:void(0)",
      },
      {
        title: "ACADEMIC CALENDER",
        desc: "",
        path: "javascript:void(0)",
      },
      {
        title: "",
        desc: "",
        path: "javascript:void(0)",
      },
    ]
  },
];

const Navbar = () => {
  const [state, setState] = useState(false);
  const [drapdownState, setDrapdownState] = useState({
    isActive: false,
    idx: null,
  });

  const navigation = [
    { title: "HOME", path: "/", isDrapdown: false },
    { title: "ABOUT US", path: "/about", isDrapdown: false },
    { title: "EXAMINATION", path: "/examination", isDrapdown: false },
    { title: "FACILITIES", path: "/facilities", isDrapdown: false },
    {
      title: "STUDENTS",
      path: "#",
      isDrapdown: true,
      navs: dropdownNavsStudents,
    },
    {
        title: "ACADEMICS",
        path: "#",
        isDrapdown: true,
        navs: dropdownNavsAcademics,
      },
     
    { title: "GALLERY", path: "/gallery", isDrapdown: false },
    { title: "CONTACT US", path: "/contact", isDrapdown: false },
  ];


  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".nav-menu"))
        setDrapdownState({ isActive: false, idx: null });
    };
  }, []);

  return (
    <>
      <nav
        className={`relative z-20 bg-white w-full md:static md:text-sm md:border-none ${
          state ? "shadow-lg rounded-b-xl md:shadow-none" : ""
        }`}
      >
        <div className="items-center gap-x-14 px-4 max-w-screen-xl mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              <img
                src="https://gdchandwara.edu.in/images/TopLogo.png"
                width={60}
                height={50}
                alt="Govt. Degree College Handwara logo"
              />
              
            </a>
            <div className="md:hidden">
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`nav-menu  z-10 flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx}>
                    {item.isDrapdown ? (
                      <button
                        className="w-full flex items-center justify-between gap-1 text-gray-700 hover:text-indigo-600"
                        onClick={() =>
                          setDrapdownState({
                            idx,
                            isActive: !drapdownState.isActive,
                          })
                        }
                      >
                        {item.title}
                        {drapdownState.idx == idx && drapdownState.isActive ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                    ) : (
                      <a
                        href={item.path}
                        className="block text-gray-700 hover:text-indigo-600"
                      >
                        {item.title}
                      </a>
                    )}
                    {item.isDrapdown &&
                    drapdownState.idx == idx &&
                    drapdownState.isActive ? (
                      <div className="mt-6 bg-white inset-x-0 top-20 w-full md:absolute md:border-y md:shadow-md md:mt-0">
                        <ul className="max-w-screen-xl mx-auto grid  gap-2 md:p-8 md:grid-cols-2 lg:grid-cols-3">
                          {item?.navs.map((dropdownItem, idx) => (
                            <li key={idx}>
                              <p className="text-indigo-600 text-sm">{dropdownItem.label}</p>
                              <ul className="mt-2 space-y-2">
                                {dropdownItem.navs.map((navItem, idx) => (
                                  <li key={idx} className="group">
                                    <a
                                      href={navItem.path}
                                      className="flex gap-3 items-center"
                                    >
                                     
                                      <div>
                                        <span className="text-gray-800 duration-200 group-hover:text-indigo-600 text-sm underline md:text-base">
                                          {navItem.title}
                                        </span>
                                       
                                      </div>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                );
              })}
              <div className="flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="block py-3 text-center text-gray-700 hover:text-indigo-600 border rounded-lg md:border-none"
                  >
                    IQAC
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline"
                  >
                    Student Login
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      {state ? (
        <div
          className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setState(false)}
        ></div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
