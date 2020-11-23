export default class NavigationUtil {
    /**
     * Restore to Home Page
     * @param params 
     */
    static resetToHomePage(params) {
        const {navigation} = params;
        navigation.navigate('Main');
    }

    /**
     * Go to specific page
     * @param {*} params 
     * @param {*} page 
     */
    static goPage(params, page) {
        const navigation = NavigationUtil.navigation;
        if (!navigation) {
            console.log('NavigationUtil.navigation cannot be null!')
        }
       navigation.navigate(page, {
            ...params
        });
    }
}