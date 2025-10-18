export const routes = {
  home: "/",
  auth: {
    login: {
      path: "/login",
      callback: "/",
      error: "/auth/login/error"
    },
    register: {
      path: "/register",
      success: "/register/success"
    },
    forgotPassword: "/forgot-password",
    verifyEmail: "/verify"
  },
  profile: "/profile",
  api: {
    userById: (id: string) => `/api/users/${id}`
  }
}
