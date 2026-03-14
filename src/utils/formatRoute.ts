export const formatRoute = (route: string, params: Record<string, string | number> = {}) =>
  route.replace(/:([^/?]+)\??/g, (_, key) => (key in params ? String(params[key]) : ''));
