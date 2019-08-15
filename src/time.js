import format from 'date-fns/format'
import differenceInHours from 'date-fns/differenceInHours'
import differenceInMinutes from 'date-fns/differenceInMinutes'

export function formatTime (timestamp) {
  return format(new Date(timestamp), 'HH:mm')
}

export function formatDay(timestamp) {
  return format(new Date(timestamp), 'd MMM, yyyy')
}

export function formatElapsedTime(from, to) {
  const hours = differenceInHours(from, to)
  let minutes = differenceInMinutes(from, to) % 60

  if (minutes < 10) {
    minutes = `0${minutes}`
  }

  return `${hours}:${minutes}h`
}