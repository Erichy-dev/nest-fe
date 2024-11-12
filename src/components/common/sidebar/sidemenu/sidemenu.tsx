
export const MENUITEMS = [
  {
    menutitle: 'MAIN',
    Items: [
      {
        icon: (<i className="side-menu__icon bx bx-home"></i>),
        type: 'sub',
        Name: '',
        active: false,
        selected: false,
        title: 'Dashboards',
        badge: '',
        badgetxt: '12',
        class: 'badge bg-warning-transparent ms-2',
        children: [
          { path: `${import.meta.env.BASE_URL}dashboards/crm`, type: 'link', active: false, selected: false, title: 'Summary' },
          { path: `${import.meta.env.BASE_URL}dashboards/ecommerce`, type: 'link', active: false, selected: false, title: 'Reports' },
        ]
      }
    ]
  },
  {
    menutitle: "",
    Items: [
      {
        title: "Management",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {path: `${import.meta.env.BASE_URL}management/orders`, title: "Work Orders", type: "link", active: false, selected: false},
          {path: `${import.meta.env.BASE_URL}management/quote`, title: "Quotes", type: "link", active: false, selected: false},
          {path: `${import.meta.env.BASE_URL}management/agenda`, title: "Agenda", type: "link", active: false, selected: false},
        ],
      },
    ],
  },
  {
    menutitle: "",
    Items: [
      {
        title: "Purchases",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {path: `${import.meta.env.BASE_URL}invoice/list`, title: "Purchases", type: "link", active: false, selected: false},
          {path: `${import.meta.env.BASE_URL}invoice/create`, title: "Create", type: "link", active: false, selected: false},
        ],
      },
    ],
  }

];
