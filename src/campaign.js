export const onClickHome = () => {
  if (window.SalesforceInteractions) {
    window.SalesforceInteractions.sendEvent({
      interaction: { name: "Home" },
    });
  }
};

export const onClickCart = () => {
  if (window.SalesforceInteractions) {
    window.SalesforceInteractions.sendEvent({
      interaction: { name: "Cart" },
    });
  }
};

export const onClickJournal = () => {
  if (window.SalesforceInteractions) {
    window.SalesforceInteractions.sendEvent({
      interaction: { name: "Journal" },
    });
  }
};

// export const onClickGPayInitiated = () => {
//   if (window.SalesforceInteractions) {
//     window.SalesforceInteractions.sendEvent({
//       interaction: { name: "GPayInitiated" },
//     });
//   }
// };

export const onClickGpay = (cartItems) => {
  if (window.SalesforceInteractions && window.SalesforceInteractions.mcis) {
    cartItems.forEach((item) => {
      const lineItem =
        window.SalesforceInteractions.mcis.buildLineItemFromPageState({
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

export const onClickBestSeller = (item) => {
  if (window.SalesforceInteractions) {
    window.SalesforceInteractions.sendEvent({
      interaction: { name: `Best-Seller: ${item.id}` },
    });
  }
};

export const onClickGiftSets = (item) => {
  if (window.SalesforceInteractions) {
    window.SalesforceInteractions.sendEvent({
      interaction: { name: `Gift-Sets: ${item.id}` },
    });
  }
};
