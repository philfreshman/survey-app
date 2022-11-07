let config = {
  "color": ["#4ea397", "#22c3aa", "#7bd9a5"],
  title: {
    text: '',
    subtext: '',
    left: 'center',
    top: '5%',
    margin: '300',
    textStyle: {
      color: 'white'
    }
  },

  tooltip: {
    trigger: 'item'
  },
  // legend: {
  //   bottom: '5%',
  //   left: 'center',
  //   textStyle: {
  //     color: 'blue'
  //   }
  // },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '90%',
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 1,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        color: 'white'
      },
      labelLine: {
        lineStyle: {
          color: 'red'
        },
        smooth: 0.2,
        length: 10,
        length2: 20
      },
      roseType: 'rose',
      // roseType: 'area',
      //
      // data: [
      //   { value: 248, name: 'Search Engine' },
      //   { value: 734, name: 'Direct' },
      //   { value: 580, name: 'Email' },
      //   { value: 484, name: 'Union Ads' },
      //   { value: 300, name: 'Video Ads' }
      // ],

    }
  ]
};

export default config