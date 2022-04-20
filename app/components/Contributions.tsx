import ActivityCalendar from 'react-activity-calendar';
import type { CalendarData } from 'react-activity-calendar';

export type ActivityType = {
  data: CalendarData;
};

const ContributionGraph = ({ data }: ActivityType): JSX.Element => {
  return (
    <ActivityCalendar
      data={data}
      color="blue"
      hideColorLegend
      hideTotalCount
      labels={{
        months: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      }}
    >
    </ActivityCalendar>
  );
};

export default ContributionGraph;
