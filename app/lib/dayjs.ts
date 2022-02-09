import dayjs from 'dayjs'
import 'dayjs/locale/ja'
import relativeTime from 'dayjs/plugin/relativeTime'

import { TDate, TLocale } from '~/types'

dayjs().format()
dayjs.extend(relativeTime)

export const getYear = (locale: TLocale = 'en') =>
  dayjs().locale(locale).format('YYYY')

export const getDayName = (locale: TLocale = 'en') =>
  dayjs().locale(locale).format('dddd')

export const getMonthYear = (date: TDate) => dayjs(date).format('MMMM YYYY')

export const getCompleteDate = (date: TDate) =>
  dayjs(date).format('D MMMM YYYY')

export const getCompleteDateTime = (date: TDate) =>
  dayjs(date).format('D MMMM YYYY · HH:mm')

export const getRelativeDate = (date: TDate) => dayjs().to(dayjs(date))
