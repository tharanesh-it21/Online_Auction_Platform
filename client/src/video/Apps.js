import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { APP_ID, SERVER_SECRET } from './constants';


 function Apps() {
  const roomID = "pt"
  let myMeeting = async (element) => {
 // generate Kit Token
  const appID = APP_ID;
  const serverSecret =SERVER_SECRET;
  const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(), "PT");


 // Create instance object from Kit Token.
  const zp = ZegoUIKitPrebuilt.create(kitToken);
  // start the call
  zp.joinRoom({
    container: element,
    sharedLinks: [
      {
        name: 'Personal link',
        url:
         window.location.protocol + '//' + 
         window.location.host + window.location.pathname +
          '?roomID=' +
          roomID,
      },
    ],
    scenario: {
      mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
    },
    
  });


};

return (
<div
  ref={myMeeting}
  style={{ width: '100vw', height: '100vh' }}
></div>
);
}
export default Apps;
