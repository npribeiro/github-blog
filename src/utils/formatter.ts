import { formatDistanceToNow } from 'date-fns'
import pt from 'date-fns/locale/pt'

export function dateFormatter(date: Date) {
  return formatDistanceToNow(date, {
    addSuffix: true,
    locale: pt,
  })
}
