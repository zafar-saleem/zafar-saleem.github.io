interface IMetrics {
  icon: string;
  title: string;
  metric: string;
}

interface IKpi {
  kpi: IMetrics[];
  link: string;
}

export interface IKpiCard {
  item: IKpi,
  link?: string;
}
