import { DateTime }       from 'luxon';

const dateLocal = DateTime.local();
const dateLocalUTC = DateTime.utc();
console.log(dateLocal.toISO());
console.log(dateLocalUTC.toISO());
console.log(dateLocal.toLocaleString(DateTime.DATETIME_SHORT));
console.log(dateLocal.toRFC2822());
console.log(dateLocal.plus({days: 1}).toRelative({locale: 'fr'}));
console.log(dateLocal.plus({days: 1}).toRelativeCalendar());
console.log(dateLocal.toSQL());
console.log(dateLocalUTC.toLocaleString(DateTime.DATETIME_SHORT));
console.log(dateLocalUTC.toSQL());
