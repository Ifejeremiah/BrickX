const service = {
  browserHeight: () => window.innerHeight - 78,
  isMobile: navigator.userAgent.toLowerCase().match(/mobile/i),
}

export default service;