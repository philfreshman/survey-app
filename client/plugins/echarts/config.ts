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
            },
            data: [
                {value: 40, name: 'Go'},
                {value: 38, name: 'C#'},
                {value: 32, name: 'JavaScript'},
                {value: 30, name: 'Phyton'},
                {value: 28, name: 'Java'},
                {value: 26, name: 'Rust'},
                {value: 22, name: 'Kotlin'},
                {value: 18, name: 'PHP'},
                {value: 15, name: 'TypeScript'},
                {value: 12, name: 'C / C++'},
                {value: 8, name: 'None'},
            ]
        }
    ]
};

export default config