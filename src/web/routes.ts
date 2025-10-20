export const routes = {
  home: "/",
  auth: {
    login: {
      path: "/auth/login",
      callback: "/",
      error: "/auth/login/error"
    },
    register: {
      path: "/auth/register",
      success: "/auth/register/success"
    },
    forgotPassword: "/auth/forgot-password",
    verifyEmail: "/auth/verify"
  },
  profile: "/profile",
  dashboard: "/dashboard",
  api: {
    userById: (id: string) => `/api/users/${id}`
  }
}
