export const onClickCart = () => {
    if(window.SalesforceInteractions){
      window.SalesforceInteractions.sendEvent({
        interaction: { name: "Cart Page" }
      });
}}