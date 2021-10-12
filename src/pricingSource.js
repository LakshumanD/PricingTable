const pricingData = [
  {
    Plan: "Free",
    price: 0,
    Details: [
      { value: "Single User", class: "fa fa-check col-md-12" },
      { value: "5GB Storage", class: "fa fa-check col-md-12" },
      { value: "Unlimited Public Projects", class: "fa fa-check col-md-12" },
      { value: "Community Access", class: "fa fa-check col-md-12" },
      {
        value: "Unlimited Private Projects",
        class: "fa fa-times p-1 text-muted",
      },
      {
        value: "Dedicated Phone Support",
        class: "fa fa-times col-md-12 text-muted",
      },
      { value: "Free Subdomain", class: "fa fa-times col-md-12 text-muted" },
      {
        value: "Monthly Status Reports",
        class: "fa fa-times col-md-12 text-muted",
      },
    ],
  },
  {
    Plan: "Plus",
    price: 100,
    Details: [
      { value: "5 Users", class: "fa fa-check col-md-12 font-weight-bold" },
      { value: "50GB Storage", class: "fa fa-check col-md-12" },
      { value: "Unlimited Public Projects", class: "fa fa-check col-md-12" },
      { value: "Community Access", class: "fa fa-check col-md-12" },
      {
        value: "Unlimited Private Projects",
        class: "fa fa-check p-1 ",
      },
      {
        value: "Dedicated Phone Support",
        class: "fa fa-check col-md-12 ",
      },
      { value: "Free Subdomain", class: "fa fa-check col-md-12" },
      {
        value: "Monthly Status Reports",
        class: "fa fa-times col-md-12 text-muted",
      },
    ],
  },
  {
    Plan: "Pro",
    price: 200,
    Details: [
      {
        value: "Unlimited Users",
        class: "fa fa-check col-md-12 font-weight-bold",
      },
      { value: "150GB Storage", class: "fa fa-check col-md-12" },
      { value: "Unlimited Public Projects", class: "fa fa-check col-md-12" },
      { value: "Community Access", class: "fa fa-check col-md-12" },
      {
        value: "Unlimited Private Projects",
        class: "fa fa-check p-1 ",
      },
      {
        value: "Dedicated Phone Support",
        class: "fa fa-check col-md-12 ",
      },
      { value: "Free Subdomain", class: "fa fa-check col-md-12" },
      {
        value: "Monthly Status Reports",
        class: "fa fa-check col-md-12 ",
      },
    ],
  },
];

export default pricingData;
