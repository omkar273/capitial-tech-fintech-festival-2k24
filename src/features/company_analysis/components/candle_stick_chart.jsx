import {
    AccumulationDistributionIndicator,
    AtrIndicator,
    BollingerBands,
    CandleSeries,
    Crosshair,
    DateTime,
    EmaIndicator,
    Export,
    HiloOpenCloseSeries,
    HiloSeries,
    Inject,
    LineSeries,
    MacdIndicator,
    MomentumIndicator,
    RangeAreaSeries,
    RangeTooltip,
    RsiIndicator,
    SmaIndicator,
    SplineSeries,
    StochasticIndicator,
    StockChartComponent,
    StockChartSeriesCollectionDirective,
    StockChartSeriesDirective,
    TmaIndicator,
    Tooltip,
    Trendlines,
} from '@syncfusion/ej2-react-charts';
import React from 'react';


const CandleStickChart = ({ chartType, stockPriceTimeSeriesData }) => {
    return (
        <StockChartComponent id='stockcharts'
            primaryXAxis={{
                valueType: 'DateTime',
                majorGridLines: { width: 0 },
                majorTickLines: { color: 'transparent' },
                crosshairTooltip: { enable: true }
            }}
            primaryYAxis={{
                labelFormat: 'n0',
                majorTickLines: { width: 0 }
            }}
            crosshair={{ enable: true, lineType: 'Both' }}

            periods={
                [
                    { text: '1M', interval: 1, intervalType: 'Months', selected: true },
                    { text: '3M', interval: 3, intervalType: 'Months' },
                    { text: '6M', interval: 6, intervalType: 'Months' }, { text: 'YTD' },
                    { text: '1Y', interval: 1, intervalType: 'Years' },
                    { text: '2Y', interval: 2, intervalType: 'Years' }, { text: 'All' }
                ]
            }
            isSelect={true}
            zoomSettings={{
                enableDeferredZooming: true,
                enableMouseWheelZooming: true,
                showToolbar: true,
                mode: 'XY'
            }}
            tooltip={{
                enable: true,
                shared: true,
                position: 'Nearest',
                header: 'stock price',
            }}>

            <Inject services={[DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, Export, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator]} />
            <StockChartSeriesCollectionDirective>
                <StockChartSeriesDirective
                    type={chartType}
                    dataSource={stockPriceTimeSeriesData}
                    xName='x'
                    enableSolidCandles:true

                >
                </StockChartSeriesDirective>
            </StockChartSeriesCollectionDirective>
        </StockChartComponent>
    )
}

export default CandleStickChart