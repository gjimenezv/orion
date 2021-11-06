import './season.scss'

export interface SeasonDisplayProps {
  lat: number
  month?: number
}

export enum SeasonName {
  summer = 'summer',
  winter = 'winter'
}

export const messageBySeason = {
  [SeasonName.summer]: { text: `Let's hit the beach!`, iconName: 'sun' },
  [SeasonName.winter]: { text: `Burr, it's chilly!`, iconName: 'snowflake' }
}

const getSeason = (lat: number, month: number): SeasonName => {
  // north hemisphere > 0 = winter(October=9, March=2) summer(March=2,October=9)
  // south hemisphere < 0 = winter(March=2,October=9) summer(October=9, March=2)
  if(month > 2 && month < 9) {
    return lat > 0 ? SeasonName.summer : SeasonName.winter
  }

  return lat > 0 ? SeasonName.winter : SeasonName.summer
}

const bem = 'season';

const Icon = (props: { className: string }) => (<i className={`${props.className} icon massive`}/>)

export const Season = (props:SeasonDisplayProps) => {
  const season = getSeason(props.lat, props.month || new Date().getMonth());
  const { text, iconName } = messageBySeason[season] || {};

  return (
  <div className={`${bem} ${bem}--${season}`}>
    <Icon data-testid={`${iconName}-left`} className={`${bem}__icon ${bem}__icon--left ${iconName}`} />
    <p className={`${bem}__message`}>{text}</p>
    <Icon data-testid={`${iconName}-right`}className={`${bem}__icon ${bem}__icon--right ${iconName}`} />
  </div>
  )
}
