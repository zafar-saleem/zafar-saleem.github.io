interface IMetrics {
  icon: string;
  title: string;
  metric: string;
}

interface IKpi {
  kpi: IMetrics[];
}

export interface IKpiCard {
  item: IKpi,
}
