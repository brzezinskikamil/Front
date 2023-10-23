const routeRoutes = {
  home: "/",
  course: `/courses/:id`,
  courseProgram: "/course/:id/:lessonID?/:topicID?",
  authentication: "/authentication",
  reset: "/reset-password",
  courses: "/courses",
  page: "/:slug",
  myProfile: "/user/my-profile",
  myStationaryEvents: "/user/my-stationary-events",
  myConsultations: "/user/my-consultations",
  myOrders: "/user/my-orders",
  myNotifications: "/user/my-notifications",
  myData: "/user/my-data",
  myTasks: "/user/my-tasks",
  myBookmarks: "/user/my-bookmarks",
  tutors: "/tutors",
  consultations: "/consultations",
  consultation: "/consultations/:id",
  tutor: "/tutors/:id",
  preview: "/courses/preview/:id/:lessonID?/:topicID?",
  cart: "/cart",
  contact: "/contact",
  emailVerify: "/email-verify",
  notFound: "/404",
  register: "/register",
  login: "/login",
  events: "/events",
  event: "/event/:id",
  webinars: "/webinars",
  webinar: "/webinar/:id",
  myWebinars: "/user/my-webinars",
  logout: "logout",
  privacyPolicy: "/privacy-policy",
};

export default routeRoutes;
