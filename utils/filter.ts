export const filterBrowser = (browser?: string) => {
  if (browser?.includes('Chrome')) {
    return {
      name: 'Chrome',
      icon: '&#xe681;',
    }
  }
  else if (browser?.includes('Firefox')) {
    return {
      name: 'Firefox',
      icon: '&#xe93d;',
    }
  }
  else if (browser?.includes('Safari')) {
    return {
      name: 'Safari',
      icon: '&#xe6ef;',
    }
  }
  else if (browser?.includes('Edge')) {
    return {
      name: 'Edge',
      icon: '&#xe8e2;',
    }
  }
  else if (browser?.includes('Opera')) {
    return {
      name: 'Opera',
      icon: '&#xe648;',
    }
  }
  else if (browser?.includes('IE')) {
    return {
      name: 'IE',
      icon: '&#xe8e2;',
    }
  }
  else {
    return {
      name: 'Unknown',
      icon: '&#xe674;',
    }
  }
}

export const filterOS = (os?: string) => {
  if (os?.includes('Mac')) {
    return {
      name: 'Mac OS',
      icon: '&#xe667;',
    }
  }
  else if (os?.includes('iOS')) {
    return {
      name: 'iOS',
      icon: '&#xe667;',
    }
  }
  else if (os?.includes('Windows')) {
    return {
      name: 'Windows',
      icon: '&#xebb1;',
    }
  }
  else if (os?.includes('Linux')) {
    return {
      name: 'Linux',
      icon: '&#xf1e8;',
    }
  }
  else {
    return {
      name: 'Unknown',
      icon: '&#xe674;',
    }
  }
}

export const filterAddress = (address?: string) => {
  if (!address)
    return '未知'
  const arr = address.split(' ')
  if (!address.includes('中国'))
    return arr[0]

  return `${arr[1]} ${arr[2]}`
}
