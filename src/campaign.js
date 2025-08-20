export const onClickCart = () => {
    if(window.SalesforceInteractions){
  window.SalesforceInteractions.sendEvent({
     action: "Cart page"
    });
}}