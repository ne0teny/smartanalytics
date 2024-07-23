import React, { FunctionComponent } from 'react';
import styles from './Home.module.css';

import BellIcon from './assets/Bell.svg';
import PulseIcon from './assets/Pulse.svg';
import CubeFocusIcon from './assets/CubeFocus.svg';
import PercentIcon from './assets/Percent.svg';
import ChartBarIcon from './assets/ChartBar.svg';
import ChartLineIcon from './assets/ChartLine.svg';
import MagnifyingGlassIcon from './assets/MagnifyingGlass.svg';
import CompIcon from './assets/Comp_1 1.png';
import ChevronRightIcon from './assets/icon_line/chevron-right.svg';
import ClockIcon from './assets/Clock.svg';
import CalendarDotsIcon from './assets/CalendarDots.svg';
import CheckSquareIcon from './assets/CheckSquare.svg';
import Icon from './assets/Icon.svg';

const Home: FunctionComponent = () => {
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <div className={styles.hello}>
          <div className={styles.text5}>Hello</div>
          <div className={styles.cozinac}>Cozinac</div>
        </div>
        <div className={styles.notification}>
          <img className={styles.bellIcon} alt="Notification bell" src={BellIcon} />
          <div className={styles.wrapper}>
            <div className={styles.div}>2</div>
          </div>
        </div>
      </div>
      <div className={styles.qabMainButton}>
        <div className={styles.qabParent}>
          <div className={styles.qab}>
            <div className={styles.pulseParent}>
              <img className={styles.pulseIcon} alt="Pulse icon" src={PulseIcon} />
              <div className={styles.div1}>Импульсы</div>
            </div>
          </div>
          <div className={styles.qab}>
            <div className={styles.pulseParent}>
              <img className={styles.pulseIcon} alt="Cube focus icon" src={CubeFocusIcon} />
              <div className={styles.div1}>
                <p className={styles.p}>ТОП тикеры</p>
              </div>
            </div>
          </div>
          <div className={styles.qab2}>
            <div className={styles.percentParent}>
              <img className={styles.pulseIcon} alt="Percent icon" src={PercentIcon} />
              <div className={styles.div1}>
                <p className={styles.p}>Фандинг</p>
              </div>
            </div>
            <div className={styles.proWrapper}>
              <div className={styles.pro}>PRO</div>
            </div>
          </div>
        </div>
        <div className={styles.qabParent}>
          <div className={styles.qab2}>
            <div className={styles.percentParent}>
              <img className={styles.pulseIcon} alt="Chart bar icon" src={ChartBarIcon} />
              <div className={styles.div1}>
                <p className={styles.p}>Рост объемов</p>
              </div>
            </div>
            <div className={styles.proWrapper}>
              <div className={styles.pro}>PRO</div>
            </div>
          </div>
          <div className={styles.qab2}>
            <div className={styles.percentParent}>
              <img className={styles.pulseIcon} alt="Chart line icon" src={ChartLineIcon} />
              <div className={styles.div1}>
                <p className={styles.p}>{`Рост `}</p>
                <p className={styles.p}>активов</p>
              </div>
            </div>
            <div className={styles.proWrapper}>
              <div className={styles.pro}>PRO</div>
            </div>
          </div>
          <div className={styles.qab2}>
            <div className={styles.percentParent}>
              <img className={styles.pulseIcon} alt="Magnifying glass icon" src={MagnifyingGlassIcon} />
              <div className={styles.div1}>Отслеживание актива</div>
            </div>
            <div className={styles.proWrapper}>
              <div className={styles.pro}>PRO</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.pro}>Фондовый рынок</div>
      </div>
      <div className={styles.qabContainer}>
        <div className={styles.qab2}>
          <div className={styles.percentParent}>
            <img className={styles.pulseIcon} alt="Chart line icon" src={ChartLineIcon} />
            <div className={styles.div1}>
              <p className={styles.p}>{`Рост `}</p>
              <p className={styles.p}>активов</p>
            </div>
          </div>
          <div className={styles.proWrapper}>
            <div className={styles.pro}>PRO</div>
          </div>
        </div>
        <div className={styles.qab2}>
          <div className={styles.percentParent}>
            <img className={styles.pulseIcon} alt="Magnifying glass icon" src={MagnifyingGlassIcon} />
            <div className={styles.div1}>
              <p className={styles.p}>{`Уведомления `}</p>
              <p className={styles.p}>о рынке</p>
            </div>
          </div>
          <div className={styles.proWrapper}>
            <div className={styles.pro}>PRO</div>
          </div>
        </div>
        <div className={styles.qab2}>
          <div className={styles.percentParent}>
            <img className={styles.pulseIcon} alt="Magnifying glass icon" src={MagnifyingGlassIcon} />
            <div className={styles.div1}>Отслеживание актива</div>
          </div>
          <div className={styles.proWrapper}>
            <div className={styles.pro}>PRO</div>
          </div>
        </div>
      </div>
      <div className={styles.pendingActions}>
        <div className={styles.comp11Parent}>
          <img className={styles.comp11Icon} alt="Comp icon" src={CompIcon} />
          <div className={styles.premiumParent}>
            <div className={styles.pro}>Еще больше плюсов с Premium</div>
            <div className={styles.div11}>Аналитика и дополнительные функции</div>
          </div>
        </div>
        <img className={styles.iconLinechevronRight} alt="Chevron right icon" src={ChevronRightIcon} />
      </div>
      <div className={styles.top5Wrapper}>
        <div className={styles.pro}>TOP 5 тикеры</div>
      </div>
      <div className={styles.parent}>
        <div className={styles.value}>Последнее обновление:</div>
        <div className={styles.clockParent}>
          <img className={styles.clockIcon} alt="Clock icon" src={ClockIcon} />
          <div className={styles.value}>12:03</div>
          <img className={styles.clockIcon} alt="Calendar dots icon" src={CalendarDotsIcon} />
          <div className={styles.value}>9.01.2024</div>
        </div>
      </div>
      <div className={styles.segmentedpickerParent}>
        <div className={styles.segmentedpicker}>
          <div className={styles.tapbarItem}>
            <div className={styles.value}>По объему</div>
          </div>
          <div className={styles.tapbarItem1}>
            <div className={styles.pro}>По фандингу (+)</div>
          </div>
          <div className={styles.tapbarItem}>
            <div className={styles.value}>По фандингу (-)</div>
          </div>
        </div>
        <div className={styles.top5TikerInfo}>
          <div className={styles.frameParent}>
            <div className={styles.groupWrapper}>
              <div className={styles.pepeusdtParent}>
                <div className={styles.pepeusdt}>1000pepeusdt</div>
                <div className={styles.div15}>= 2 342 344$ (изменения цены за сутки)</div>
              </div>
            </div>
            <div className={styles.group}>
              <div className={styles.div16}>3 583 377 248.89$</div>
              <div className={styles.div17}>+ 2.30%</div>
            </div>
          </div>
        </div>
        <div className={styles.top5TikerInfo}>
          <div className={styles.frameParent}>
            <div className={styles.groupWrapper}>
              <div className={styles.pepeusdtParent}>
                <div className={styles.pepeusdt}>1000pepeusdt</div>
                <div className={styles.div15}>= 2 342 344$ (изменения цены за сутки)</div>
              </div>
            </div>
            <div className={styles.group}>
              <div className={styles.div16}>3 583 377 248.89$</div>
              <div className={styles.div17}>+ 2.30%</div>
            </div>
          </div>
        </div>
        <div className={styles.top5TikerInfo}>
          <div className={styles.frameParent}>
            <div className={styles.groupWrapper}>
              <div className={styles.pepeusdtParent}>
                <div className={styles.pepeusdt}>1000pepeusdt</div>
                <div className={styles.div15}>= 2 342 344$ (изменения цены за сутки)</div>
              </div>
            </div>
            <div className={styles.group}>
              <div className={styles.div16}>3 583 377 248.89$</div>
              <div className={styles.div17}>+ 2.30%</div>
            </div>
          </div>
        </div>
        <div className={styles.top5TikerInfo}>
          <div className={styles.frameParent}>
            <div className={styles.groupWrapper}>
              <div className={styles.pepeusdtParent}>
                <div className={styles.pepeusdt}>1000pepeusdt</div>
                <div className={styles.div15}>= 2 342 344$ (изменения цены за сутки)</div>
              </div>
            </div>
            <div className={styles.group}>
              <div className={styles.div16}>3 583 377 248.89$</div>
              <div className={styles.div17}>+ 2.30%</div>
            </div>
          </div>
        </div>
        <div className={styles.top5TikerInfo}>
          <div className={styles.frameParent}>
            <div className={styles.groupWrapper}>
              <div className={styles.pepeusdtParent}>
                <div className={styles.pepeusdt}>1000pepeusdt</div>
                <div className={styles.div15}>= 2 342 344$ (изменения цены за сутки)</div>
              </div>
            </div>
            <div className={styles.group}>
              <div className={styles.div16}>3 583 377 248.89$</div>
              <div className={styles.div17}>+ 2.30%</div>
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.frame}>
            <div className={styles.pro}>Обновить</div>
          </div>
        </div>
      </div>
      <div className={styles.parent5}>
        <div className={styles.pro}>Последние импульсы</div>
        <div className={styles.div32}>смотреть все</div>
      </div>
      <div className={styles.impulse}>
        <div className={styles.impulseHistoryInfoimpulseH}>
          <div className={styles.wrapper1}>
            <div className={styles.div33}>Название</div>
          </div>
          <div className={styles.div34}>суточный %</div>
          <div className={styles.div35}>ТОП</div>
          <div className={styles.div36}>Дата</div>
        </div>
        <div className={styles.impulseHistoryInfo}>
          <div className={styles.combousdtParent}>
            <div className={styles.combousdt}>COMBOUSDT</div>
            <div className={styles.parent6}>
              <div className={styles.div37}>+5.02%</div>
              <img className={styles.icon} alt="Icon" src={Icon} />
            </div>
          </div>
          <div className={styles.div38}>13.78%</div>
          <div className={styles.div35}>1</div>
          <div className={styles.div36}>
            <p className={styles.p}>Сегодня</p>
            <p className={styles.p}>12:03</p>
          </div>
          <img className={styles.pulseIcon} alt="Check square icon" src={CheckSquareIcon} />
        </div>
        <div className={styles.impulseHistoryInfo}>
          <div className={styles.combousdtParent}>
            <div className={styles.combousdt}>COMBOUSDT</div>
            <div className={styles.parent7}>
              <div className={styles.div37}>-5.02%</div>
              <img className={styles.icon} alt="Icon" src={Icon} />
            </div>
          </div>
          <div className={styles.div38}>13.78%</div>
          <div className={styles.div35}>1</div>
          <div className={styles.div36}>
            <p className={styles.p}>Сегодня</p>
            <p className={styles.p}>12:03</p>
          </div>
          <img className={styles.pulseIcon} alt="Check square icon" src={CheckSquareIcon} />
        </div>
        <div className={styles.impulseHistoryInfo}>
          <div className={styles.combousdtParent}>
            <div className={styles.combousdt}>COMBOUSDT</div>
            <div className={styles.parent6}>
              <div className={styles.div37}>+5.02%</div>
              <img className={styles.icon} alt="Icon" src={Icon} />
            </div>
          </div>
          <div className={styles.div38}>13.78%</div>
          <div className={styles.div35}>1</div>
          <div className={styles.div36}>
            <p className={styles.p}>Сегодня</p>
            <p className={styles.p}>12:03</p>
          </div>
          <img className={styles.pulseIcon} alt="Check square icon" src={CheckSquareIcon} />
        </div>
        <div className={styles.impulseHistoryInfo}>
          <div className={styles.combousdtParent}>
            <div className={styles.combousdt}>COMBOUSDT</div>
            <div className={styles.parent6}>
              <div className={styles.div37}>+5.02%</div>
              <img className={styles.icon} alt="Icon" src={Icon} />
            </div>
          </div>
          <div className={styles.div38}>13.78%</div>
          <div className={styles.div35}>1</div>
          <div className={styles.div36}>
            <p className={styles.p}>Сегодня</p>
            <p className={styles.p}>12:03</p>
          </div>
          <img className={styles.pulseIcon} alt="Check square icon" src={CheckSquareIcon} />
        </div>
        <div className={styles.impulseHistoryInfo}>
          <div className={styles.combousdtParent}>
            <div className={styles.combousdt}>COMBOUSDT</div>
            <div className={styles.parent7}>
              <div className={styles.div37}>-5.02%</div>
              <img className={styles.icon} alt="Icon" src={Icon} />
            </div>
          </div>
          <div className={styles.div38}>13.78%</div>
          <div className={styles.div35}>1</div>
          <div className={styles.div36}>
            <p className={styles.p}>Сегодня</p>
            <p className={styles.p}>12:03</p>
          </div>
          <img className={styles.pulseIcon} alt="Check square icon" src={CheckSquareIcon} />
        </div>
        <div className={styles.impulseHistoryInfo}>
          <div className={styles.combousdtParent}>
            <div className={styles.combousdt}>COMBOUSDT</div>
            <div className={styles.parent7}>
              <div className={styles.div37}>-5.02%</div>
              <img className={styles.icon} alt="Icon" src={Icon} />
            </div>
          </div>
          <div className={styles.div38}>13.78%</div>
          <div className={styles.div35}>1</div>
          <div className={styles.div36}>
            <p className={styles.p}>Сегодня</p>
            <p className={styles.p}>12:03</p>
          </div>
          <img className={styles.pulseIcon} alt="Check square icon" src={CheckSquareIcon} />
        </div>
        <div className={styles.button1}>
          <div className={styles.frame}>
            <div className={styles.pro}>Сохранить</div>
          </div>
        </div>
      </div>
      <div className={styles.tabOne} />
    </div>
  );
};

export default Home;
