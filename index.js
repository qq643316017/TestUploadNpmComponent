import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
} from 'react-native';

import Echarts from 'native-echarts';

export default class ChartDemo extends Component {
    static navigationOptions = {
        title: '图表',
    }

    render() {
        const optionLine = {
            //网格
            grid: {
                right: 15,
                bottom: 30,
                left:50,
            },
            title: {
                text: '恒大地产历年销售额',
                textStyle: {
                    color: 'black',
                    fontSize: 14,
                    padding: [10, 0, 0, 10],
                },
                top: 0,
                left: 15,
            },
            //点击图形某个位置的显示弹框
            tooltip: {
                trigger: 'axis',
            },
            //统计数据的种类切换
            legend: {
            },
            xAxis: [
                {
                    axisTick: {
                        show: true,
                        alignWithLabel: true,
                    },
                    data: ["2014", "2015", "2016", "2017",],
                }
            ],
            yAxis: [
                {
                    axisTick: {
                        show: false,
                        alignWithLabel: false,
                    },
                    nameLocation: 'end',
                    nameTextStyle: {
                        color: '#8e8e93',
                        fontSize: 12,
                        align: 'right',
                        padding: [0, 0, 0, 10],
                        left: 10,
                    },
                    interval: 0,//强制分割间隔
                    nameGap: 10,
                    name: '亿元',
                }
            ],
            color: ['#e62129'],
            //数据配置
            series: [
                {
                    name: '销售额',
                    type: 'line',
                    data: ["1315", "2014", "3733", "5000",],
                },
            ]
        }

        //饼图数据设置
        const optionPie = {
            title: {
                text: '2017年1-6月恒大地产销售金额',
                textStyle: {
                    color: 'black',
                    fontSize: 14,
                    padding: [10, 0, 0, 10],
                },
                top: 0,
                left: 15,
            },
            //加上这个才有点击提示的效果
            tooltip: {
            },
            series: [{
                name: '销售金额(亿元)',
                radius : '60%',
                type: 'pie',
                data: [
                    {
                        value: 372,
                        name: '1月',
                        itemStyle: {
                            normal: {
                                color: 'rgb(122,48,158)'
                            }
                        }
                    },
                    {
                        value: 312,
                        name: '2月',
                    },
                    {
                        value: 385,
                        name: '3月',
                    },
                    {
                        value: 378,
                        name: '4月',
                    },
                    {
                        value: 381,
                        name: '5月',
                    },
                    {
                        value: 611,
                        name: '6月',
                    },
                ]
            }]
        };

        //线图和柱状图样式设置
        const optionLineAndBar = {
            //图形位置样式
            grid: {
                right: 15,
                bottom: 30,
            },
            title: {
                text: '销售额对比',
                textStyle: {
                    color: 'black',
                    fontSize: 14,
                    padding: [10, 0, 0, 10],
                },
                top: 0,
                left: 5,
            },
            //点击图形某个位置的显示弹框
            tooltip: {
                trigger: 'axis',
            },
            //统计数据的种类切换
            legend: {
                orient: 'vertical',
                data: [{ name: '2016销售额', icon: 'circle', }, { name: '2017销售额', icon: 'circle' }],
                selectedMode: 'multiple',
                backgroundColor: '#fff',
                align: 'left',
                right: 20,//距离右边界20
                top: 5,
            },
            xAxis: [
                {
                    axisTick: {
                        show: true,
                        alignWithLabel: true,
                    },
                    data: ["1月", "2月", "3月", "4月", "5月", "6月",],
                }
            ],
            yAxis: [
                {
                    axisTick: {
                        show: false,
                        alignWithLabel: false,
                    },
                    nameLocation: 'end',
                    nameTextStyle: {
                        color: '#8e8e93',
                        fontSize: 12,
                        align: 'right',
                        padding: [0, 0, 0, 10],
                        left: 10,
                    },
                    interval: 0,//强制分割间隔
                    nameGap: 10,
                    name: '亿元',
                    offset: 0,
                }
            ],
            color: ['#e62129', '#007aff'],
            //数据配置
            series: [
                {
                    name: '2016销售额',
                    type: 'bar',
                    data: ["253", "288", "213", "328", "266", "368",],
                },
                {
                    name: '2017销售额',
                    type: 'bar',
                    data: ["372", "312", "385", "378", "381", "611",],
                }
            ]
        }

        return (
            <ScrollView style={styles.container}>
                <Echarts option={optionLine}
                    height={250}
                />
                <Echarts option={optionPie} height={250} />
                <Echarts option={optionLineAndBar}
                    height={250}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'space-around',
        // alignItems: 'center',
        backgroundColor: 'white',
    },
});