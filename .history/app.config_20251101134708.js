module.exports = {
  expo: {
    name: process.env.APP_NAME || 'La Tortuga EMR',
    slug: process.env.APP_SLUG || 'la-tortuga-emr',
    version: process.env.APP_VERSION || '1.0.0',
    orientation: 'landscape',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'org.latortuga.emr',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: 'org.latortuga.emr',
      permissions: [
        'READ_EXTERNAL_STORAGE',
        'WRITE_EXTERNAL_STORAGE',
      ],
    },
    web: {
      favicon: './assets/favicon.png',
    },
    plugins: [
      'expo-sqlite',
    ],
    extra: {
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID,
      firebaseDatabaseUrl: process.env.FIREBASE_DATABASE_URL,
      bigqueryProjectId: process.env.BIGQUERY_PROJECT_ID,
      bigqueryDatasetId: process.env.BIGQUERY_DATASET_ID,
      bigqueryTableId: process.env.BIGQUERY_TABLE_ID,
      enableOfflineMode: process.env.ENABLE_OFFLINE_MODE === 'true',
      enableAnalytics: process.env.ENABLE_ANALYTICS === 'true',
      enableDebugLogs: process.env.ENABLE_DEBUG_LOGS === 'true',
    },
  },
};
