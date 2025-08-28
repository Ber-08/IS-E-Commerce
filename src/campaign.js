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

export const onClickGPayInitiated = () => {
  if (window.SalesforceInteractions) {
    window.SalesforceInteractions.sendEvent({
      interaction: { name: "GPayInitiated" },
    });
  }
};

export const onClickGpay = (cartItems) => {
  if (window.SalesforceInteractions && window.SalesforceInteractions.mcis) {
    cartItems.forEach((item) => {
      const lineItem = window.SalesforceInteractions.mcis.buildLineItem({
        sku: item.sku,
        name: item.name,
        price: item.price,
        currency: item.currency || "USD",
        quantity: item.quantity || 1,
      });

      window.SalesforceInteractions.sendEvent({
        interaction: {
          name: "GPayPayment",
          lineItem,
        },
      });
    });
  }
};
