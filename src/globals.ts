const environmentVariables = {
    ...(window as any)._env_ || {},
  };

export const environment = {
    api: {
        login: '/api/auth/login',
        config: '/api/config',
    },
    link: {
        reconnect: 
        environmentVariables && environmentVariables.RECONNECTION_URL ||
        'https://www.youtube.com/'
    },
    accessTokenName: 'rabaz-access-token',
};
