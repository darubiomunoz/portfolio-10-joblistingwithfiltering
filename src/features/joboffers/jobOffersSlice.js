import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    company: "Photosnap",
    logo: "https://i.postimg.cc/Y2xsG7wk/photosnap.png",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "https://i.postimg.cc/yxK2qY4p/manage.png",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "https://i.postimg.cc/SxGsHjB3/account.png",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "https://i.postimg.cc/FRynx5dy/myhome.png",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "https://i.postimg.cc/t4gQCT1L/loop-studios.png",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "https://i.postimg.cc/YShH89M1/faceit.png",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "https://i.postimg.cc/yYQpjTdb/shortly.png",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: "https://i.postimg.cc/PxDksRLJ/insure.png",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "https://i.postimg.cc/LsbHMPNC/eyecam-co.png",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "https://i.postimg.cc/BvDhq9Cr/the-air-filter-company.png",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

const jobOffersSlice = createSlice({
  name: "joboffers",
  initialState,
  reducers: {
    noFiltersApplied: (state) => initialState,
    filterByRoles: (state, action) => {
      const { roles } = action.payload;
      
      if (roles.length > 0) return state.filter((joboffer) => roles.includes(joboffer.role));
    },
    filterByLevels: (state, action) => {
      const { levels } = action.payload;

      if (levels.length > 0) return state.filter((joboffer) => levels.includes(joboffer.level));
    },
    filterByLanguages: (state, action) => {
      const { languages } = action.payload;

      if (languages.length > 0) return state.filter(joboffer => languages.every(item => joboffer.languages.includes(item)));
    },
    filterByTools: (state, action) => {
      const { tools } = action.payload;

      if (tools.length > 0) return state.filter(joboffer => tools.every(item => joboffer.tools.includes(item)));
    }
  },
});

export const { noFiltersApplied, filterByRoles, filterByLevels, filterByLanguages, filterByTools } = jobOffersSlice.actions;

export default jobOffersSlice.reducer;
