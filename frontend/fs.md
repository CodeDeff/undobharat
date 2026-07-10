Frontend Folder Structure:

src
│
├── assets/
│   ├── images/
│   ├── icons/
│   ├── videos/
│   └── fonts/
│
├── components/
│   ├── common/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Sidebar.jsx
│   │   └── Header.jsx
│   │
├── features/
│
│   ├── auth/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── ForgotPassword.jsx   //completed
│   │   │
│   │   ├── components/
│   │   ├── services/
│   │   └── hooks/
│   │
│   ├── user/                   //completed
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── ReportIssue.jsx
│   │   │   ├── MyIssues.jsx                 
│   │   │   ├── Profile.jsx
│   │   │   └── Settings.jsx
│   │   │
│   │   ├── components/
│   │   └── services/
│   │
│   ├── gpAdmin/                       //completed
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Issues.jsx
│   │   │   ├── Users.jsx
│   │   │   ├── Reports.jsx
│   │   │   └── Settings.jsx
│   │   │
│   │   ├── components/
│   │   └── services/
│   │
│   └── superAdmin/                       //completed
│       ├── pages/
│       │   ├── Dashboard.jsx
│       │   ├── States.jsx
│       │   ├── Districts.jsx
│       │   ├── Panchayats.jsx
│       │   ├── Users.jsx
│       │   ├── Admins.jsx
│       │   └── Analytics.jsx
│       │
│       ├── components/
│       └── services/
│
├── layouts/
│   ├── UserLayout.jsx
│   ├── AdminLayout.jsx
│   └── SuperAdminLayout.jsx
│
├── routes/                      //completed
│   ├── AppRoutes.jsx
│   ├── UserRoutes.jsx
│   ├── AdminRoutes.jsx
│   └── SuperAdminRoutes.jsx
│
├── services/                              //completed
│   ├── api.js
│   ├── axios.js
│   └── auth.js
│
├── context/
│   ├── AuthContext.jsx
│   └── ThemeContext.jsx
│
├── hooks/                           //completed
│   ├── useAuth.js
│   ├── useDebounce.js
│   └── usePagination.js
│
├── utils/
│   ├── constants.js
│   ├── helpers.js
│   ├── validators.js
│   └── formatDate.js
│
├── styles/
│   ├── global.css
│   └── variables.css
│
├── App.jsx
├── main.jsx
└── index.css