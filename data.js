const menus = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Orders",
        to: "/orders",
        children: [
          {
            label: "Last 3 Months",
            to: "/past3",
          },
          {
            label: "Last 6 Months",
            to: "/past6",
          },
          {
            label: "Last 9 Months",
            to: "/past9",
          },
          {
            label: "All Orders",
            to: "/allorders",
          },
        ],
      },
      {
        label: "Returns",
        to: "/returns",
        children: [
          {
            label: "Last 3 Months",
            to: "/past3",
          },
          {
            label: "Last 6 Months",
            to: "/past6",
          },
          {
            label: "Last 9 Months",
            to: "/past9",
          },
          {
            label: "All Returns",
            to: "/allreturns",
          },
        ],
      },
    ],
  },

  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Account",
        to: "/account",
        children: [
          {
            label: "Login",
            to: "/login",
          },
          {
            label: "Register",
            to: "/register",
          },
        ],
      },
      {
        label: "Security",
        to: "/security",
        children: [
          {
            label: "Reset Password",
            to: "/reset-password",
          },
          {
            label: "Delete Account",
            to: "/delete-account",
          },
        ],
      },
    ],
  },
];

export default menus;
