import Statistics from './Statistics';
import s from './statistics.module.css';

function StatisticsList({ items }) {
  return (
    <section className={s.statistics}>
      <ul className={s.statList}>
        {items.map(item => (
          <Statistics
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </ul>
    </section>
  );
}
export default StatisticsList;
