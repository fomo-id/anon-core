import moment, { Moment, MomentInput } from 'moment/min/moment-with-locales';

export function timeFormat(time) {
  return moment().diff(time, 'weeks') > 0
    ? moment(time).locale('id').format('Do MMMM YYYY')
    : moment(time).locale('id').fromNow();
}

export function timeChatFormat(time) {
  return moment().diff(time, 'days') > 0 ? timeFormat(time) : "Hari ini"
}