import format from 'date-fns/format'

export function formatTime (timestamp) {
  return format(new Date(timestamp), 'HH:mm')
}

export function formatDay(timestamp) {
  return format(new Date(timestamp), 'd MMM, yyyy')
}

export function formatElapsedTime(ms) {
  const s = ms / 1000

  const min = s / 60
  if (min < 1) {
    return '< 1min'
  }

  if (min < 60) {
    return `~ 1h`
  }

  return `~ ${Math.round(min / 60)}h`
}
