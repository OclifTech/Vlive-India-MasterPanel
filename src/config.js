export let masterPanelConfig ={
    apiBaseUrl:undefined
} 


switch (location.host) {
    case 'localhost:8080':
        masterPanelConfig.apiBaseUrl='http://192.168.100.9:5000';
      
      break;
 
  
    default:
  
      masterPanelConfig.apiBaseUrl = 'https://api.vliveindia.in';

    
  }

  masterPanelConfig.apiBaseUrl = 'https://api.vliveindia.in' 