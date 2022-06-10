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

export const filterAddress = (address?: string) => {
  if (!address) return '未知'
  const arr = address.split(' ')
  if (!address.includes('中国')) {
    return arr[0]
  }
  return `${arr[1]} ${arr[2]}`
}
