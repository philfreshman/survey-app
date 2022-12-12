let config = {
    title: {
        text: 'Result Chart',
        subtext: 'Fake Data',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    toolbox: {
        show: true,
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    series: [
        {
            name: 'Area Mode',
            type: 'pie',
            radius: [20, 240],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 5
            }
        }
    ]
};

export default config