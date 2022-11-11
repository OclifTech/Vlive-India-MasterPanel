export let masterPanelConfig ={
    apiBaseUrl:undefined
} 


switch (location.host) {
    case 'localhost:8080':
        apiBaseUrl='http://192.168.100.9:5000';
      
      break;
 
  
    default:
  
      apiBaseUrl = 'https://api.vliveindia.in';

    
  }

  apiBaseUrl = 'https://api.vliveindia.in' 