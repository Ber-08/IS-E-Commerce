export const onClickHome = () => {
  if (window.SalesforceInteractions) {
    window.SalesforceInteractions.sendEvent({
      interaction: { name: "Home Page" },
    });
  }
};

export const onClickCart = () => {
  if (window.SalesforceInteractions) {
    window.SalesforceInteractions.sendEvent({
      interaction: { name: "Cart Page" },
    });
  }
};

export const onClickJournal = () => {
  if (window.SalesforceInteractions) {
    window.SalesforceInteractions.sendEvent({
      interaction: { name: "Journal Page" },
    });
  }
};
