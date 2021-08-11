import React from 'react';

const entryArr = [
  {key: 'CWSP', title: '云仓服务平台'},
  {key: 'Portal', title: '订单门户系统'},
  {key: 'OMS', title: '百川订单管理系统'},
  {key: 'WMS', title: '百川仓储管理系统'},
  {key: 'TMS', title: '百川运输管理系统'},
  {key: 'BMS', title: '百川结算管理系统'},
  {key: 'WPM', title: '百川数据管理平台'},
  {key: 'EWS', title: '极效仓配'},
];

const tabArr = [
  { key: 'authApply', title: '权限申请' },
  { key: 'basicConf', title: '基础配置' },
  { key: 'orderFlow', title: '订单流程' },
  { key: 'orderFlowqqwq', title: '订单流程qwweeewweewwe' },
];

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'authApply',
    };
  }

  handleTabClick = (tabKey) => {
    if (tabKey === this.state.activeTab) {
      return;
    }
    this.setState({ activeTab: tabKey });
  }

  render() {
    return (
      <div className='entry-platform'>
        <header className='head-wrap'>
          <div className='head-logo'>
            <div className='head-logo-left' />
            <div className='head-logo-right'>
              <div className='main-title'>百川供应链底盘系统</div>
              <div className='sub-title'>顺丰科技供应链平台</div>
            </div>
          </div>
          <div className='head-title'>领先的智能供应链平台</div>
          <div className='head-date'>星期二  2021年7月6日</div>
        </header>
        <article className='body-wrap'>
          <div className='entry-wrap'>
            {
              entryArr.map((entry) => (
                <div className='entry-module' key={entry.key}>
                  <div className='entry-more'>
                    {entry.key === 'OMS' ? '...' : null}
                  </div>
                  <div className={`entry-icon ${entry.key}`} />
                  <div className='entry-head'>{entry.key}</div>
                  <div className='entry-title'>{entry.title}</div>
                </div>
              ))
            }
          </div>
          <div className='other-wrap'>
            <div className='tab-wrap'>
              {
                tabArr.map((tab) => (
                  <div
                    key={tab.key}
                    className={`tab-item ${this.state.activeTab === tab.key ? 'active' : ''}`}
                    onClick={() => this.handleTabClick(tab.key)}
                  >
                    {tab.title}
                  </div>
                ))
              } 
            </div>
            <div className='gap-line' />
          </div>

        </article>
        <footer className='footer-wrap'>供应链科技中心</footer>
      </div>
    );
  }
}