# Reel.me mobile app

This directory hosts the React Native (Expo) scaffold for Reel.me, a social safety and payments experience that combines auto check-ins, trusted connections, and transparent peer-to-peer transfers.

## Structure
- `App.tsx` bootstraps navigation with themed dark/light support.
- `src/navigation/RootNavigator.tsx` defines authentication, main tabs, and modal-style flows like check-ins and connections.
- `src/screens` contains placeholder screens aligned to the documented flows (sign-up/sign-in, explore establishments, wallet, messages, profile, connections, and auto check-in).
- `src/components` provides shared UI primitives such as themed screens, buttons, and feature lists.
- `src/theme` centralizes design tokens used across screens.

## Getting started
Install dependencies and run the Expo dev server:

```bash
npm install
npm run start
```

Use the Expo Go app or a simulator to preview the experience.
