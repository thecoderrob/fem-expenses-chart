const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const getChartData = () => {
  data.map((item) => {
    const cardContent = document.getElementsByClassName("card-content");

    const container = document.createElement("div");
    container.className = "bar-container";

    const bar = document.createElement("div");
    bar.className = "bar";
    bar.id = item.day + `-bar`;
    bar.style.height = item.amount * 3 + "px";

    const barLabel = document.createElement("p");
    barLabel.innerText = item.day;
    barLabel.className = "color--grey";

    container.appendChild(bar);
    container.appendChild(barLabel);
    cardContent[0].appendChild(container);

    const barAmountContainer = document.createElement("div");
    barAmountContainer.className = "bar-amount-container";

    const barAmount = document.createElement("p");
    barAmount.innerText = "$" + item.amount;
    barAmount.className = "bold";

    barAmountContainer.appendChild(barAmount);
    container.appendChild(barAmountContainer);

    bar.addEventListener(
      "mouseover",
      function (e) {
        if (e.target !== bar) return;
        barAmountContainer.classList.add("show-amount");
      },
      false
    );

    bar.addEventListener("mouseleave", function (e) {
      if (e.target !== bar) return;
      barAmountContainer.classList.remove("show-amount");
    });
  });
};

const getActiveBar = () => {
  const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const now = days[new Date().getDay()];
  const activeBar = document.getElementById(now + "-bar");
  activeBar.classList.add("active-bar");
};

getChartData();
getActiveBar();
