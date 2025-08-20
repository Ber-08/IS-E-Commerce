export const onClickCart = () => {
    if(window.SalesforceInteractions){
      window.SalesforceInteractions.sendEvent({
        interaction: { name: "Email Sign Up - Footer" },
        user: { identities: { emailAddress: 'bharani' } }
      });
}}