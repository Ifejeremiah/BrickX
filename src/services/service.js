const service = {
  browserHeight: () => window.innerHeight - 100,
  isMobile: navigator.userAgent.toLowerCase().match(/mobile/i),
}

export default service;