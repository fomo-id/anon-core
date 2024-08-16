import moment, { Moment, MomentInput } from 'moment/min/moment-with-locales';

export default function timeFormat(time: MomentInput ): string {
  return moment().diff(time, 'weeks') > 0
    ? moment(time).locale('id').format('Do MMMM YYYY')
    : moment(time).locale('id').fromNow();
}