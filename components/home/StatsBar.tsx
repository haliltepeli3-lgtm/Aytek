import { useTranslations } from 'next-intl';

export default function StatsBar() {
  const t = useTranslations('stats');

  const stats = [
    { value: t('since'), label: t('sinceDesc') },
    { value: t('systems'), label: t('systemsDesc') },
    { value: t('staff'), label: t('staffDesc') },
    { value: t('area'), label: t('areaDesc') },
  ];

  return (
    <section className="bg-primary py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/20">
          {stats.map((stat, i) => (
            <div key={i} className="text-center text-white px-4">
              <div className="text-3xl md:text-4xl font-bold mb-1 text-white">{stat.value}</div>
              <div className="text-white/80 text-sm font-medium uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
