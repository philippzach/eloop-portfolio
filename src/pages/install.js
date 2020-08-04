import React from 'react'
import {
    isAndroid,
    isIOS,
    isBrowser
} from 'react-device-detect'
class Install extends React.PureComponent {
    constructor(props) {
        super(props)
        // Skip build, OS only
        
        if (typeof window !== 'undefined') {
            var utmParams = window.location.search.substr(1);
            const RedirectPathContent = () => {
                if (isAndroid) {
                    return 'https://play.google.com/store/apps/details?id=com.vulog.carshare.eloop'
                } else if (isIOS) {
                    return 'itms-apps://apps.apple.com/us/app/eloop-elektrisches-carsharing/id1465221970?ls=1s&'
                } else if (isBrowser) {
                    var userLang = navigator.language || navigator.userLanguage;
                    if (userLang.includes('de')) {
                        return 'https://registration.vulog.center/register/fleet_CAROO-ATVIE?lang=de&'+utmParams
                    } else {
                        return 'https://registration.vulog.center/register/fleet_CAROO-ATVIE?lang=en&'+utmParams
                    }
                }
            }
            const PXContent = () => {
                if (isAndroid) {
                    return '<img src="https://www.facebook.com/tr?id=1414411895258446&amp;ev=PageView" height="1" width="1" style="display:none"/><img src="https://www.facebook.com/tr?id=1414411895258446&amp;ev=InstallAndroid" height="1" width="1" style="display:none"/>'
                } else if (isIOS) {
                    return '<img src="https://www.facebook.com/tr?id=1414411895258446&amp;ev=PageView" height="1" width="1" style="display:none"/><img src="https://www.facebook.com/tr?id=1414411895258446&amp;ev=InstallIOS" height="1" width="1" style="display:none"/>'
                } else if (isBrowser) {
                    return '<img src="https://www.facebook.com/tr?id=1414411895258446&amp;ev=PageView" height="1" width="1" style="display:none"/><img src="https://www.facebook.com/tr?id=1414411895258446&amp;ev=InstallDesktop" height="1" width="1" style="display:none"/>'
                }
            }
            window.document.write(PXContent())
            setTimeout(function() {
                window.location.replace(RedirectPathContent())
            }, 1900)
            //navigate();
        }
    }
    render() {
        return <div / >
    }
}
export default Install