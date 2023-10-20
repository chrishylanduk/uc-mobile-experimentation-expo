# UC Mobile Experimentation App

An experimental learning and development project by a team of four, creating a demo cross-platform Universal Credit (UC) app as a means of teaching ourselves mobile app development and exploring app capabilities. It is in no way related to or endorsed by UC itself, has no connectivity to the actual service, and all content included is fictitious.

## This is a technical demo

It has been written to quickly try things out, and is about as far from produciton-ready as it's possible to get, as the intention was never to create an actual application. We are not expecting to develop it any further.

## Installation and usage

The app is built using [expo](https://expo.dev/).

To install dependencies:

```
npm install
```

To start a development server, allowing you to test most functionality using the Expo Go app:

```
npx expo start
```

See [expo CLI documentation](https://docs.expo.dev/more/expo-cli/).

To build using [EAS build](https://docs.expo.dev/build/setup/), which requires an Expo account:

```
npm install -g eas-cli
eas login
```

then build in line with the [EAS build documentation](https://docs.expo.dev/build/setup/), for example to create an Android APK:

```
eas build --local --output=./app-build/app-android.apk --platform=android --profile=preview
```

A [Github Actions push workflow](https://github.com/chrishylanduk/uc-mobile-experimentation-expo/blob/main/.github/workflows/push-pipeline.yml) is included to lint, test and build a preview APK of the project. It depends on a `EXPO_TOKEN` secret being configured, using your [Expo access token](https://expo.dev/accounts/[account]/settings/access-tokens).

## Configuration

The backend required for login, adding messages etc. is a hosted version of [uc-mobile-exp-backend](https://github.com/chrishylanduk/uc-mobile-exp-backend). The URL of our hosted version, `https://uc-mobile-exp-backend-production.up.railway.app`, is hardcoded in several places. This will not remain live indefinitely, so may need need to host the backend yourself and replace with your own URL. Alternatively, the version before commit `b789e811692b9e1d8c2be11f64f15afae7c44ba9` (14 October 2023) did not require a backend.

To send push notifications, you need to set up a [OneSignal](https://onesignal.com/) account and update the value of `oneSignalAppId` in `app.json`. Push notifications do not work if using Expo Go for testing.

To create builds using EAS you may need to replace `projectId` in `app.json` with your own EAS ID.

## Demo functionality

- Biometric re-authentication
- Push notifications
- Home page customisation
- What a digital certificate might look like
- Adding events to device calendars (implementation may only work on Android)
- Adding messages
