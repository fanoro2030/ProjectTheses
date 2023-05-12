export const importPage = (route, ...args) => {
  const path = args
    .map((arg) => {
      if (Array.isArray(arg)) {
        const nestPath = new Array(arg[1])
          .fill(0)
          .map(() => arg[0])
          .join('/');
        arg = nestPath;
      }
      return arg;
    })
    .join('/');

  const rootPath = route === 'dashboard' ? 'Dashboard' : 'PageLanding';

  return import(`../pages/${rootPath}/${path}`);
};
