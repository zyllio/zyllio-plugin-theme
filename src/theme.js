
(function () {
  
  console.log('Plugin Theme started')

  const theme = {
    name: 'Plugino Theme',
    theme: {
      primaryColor: '#4f7d96',
      primaryTextColor: '#ffffff',
      secondaryColor: '#fe844b',
      secondaryTextColor: '#ffffff',
      tertiaryColor: '#0000000a',
      tertiaryTextColor: '#000000',
      backgroundColor: '#f0f6f9',
      textColor: '#474f5b',
      rtl: false
    }
  }

  zySdk.services.registry.registerTheme(theme)

})();