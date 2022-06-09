export const filterBrowser = (browser?: string) => {
  if (!browser) return '未知'
  if (browser.includes('Chrome')) {
    return 'Chrome'
  }
  if (browser.includes('Firefox')) {
    return 'Firefox'
  }
  if (browser.includes('Safari')) {
    return 'Safari'
  }
  if (browser.includes('Edge')) {
    return 'Edge'
  }
  if (browser.includes('Opera')) {
    return 'Opera'
  }
  if (browser.includes('IE')) {
    return 'IE'
  }
  return 'Unknown'
}