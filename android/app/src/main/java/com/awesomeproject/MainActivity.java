package com.awesomeproject;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "AwesomeProject";
    }

    /**
     * 添加代码的原因
     * react-native-gesture-handler
     * https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html#android
     **/
    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
       return new ReactActivityDelegate(this, getMainComponentName()) {
         @Override
         protected ReactRootView createRootView() {
          return new RNGestureHandlerEnabledRootView(MainActivity.this);
         }
       };
    }
}
