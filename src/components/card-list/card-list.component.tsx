import Card from '../card/card.component';
import './card-list.styles.css';

import { Monster } from '../../App';

type cardListProps = {
  monsters:Monster[]
}
const CardList = ({ monsters }:cardListProps) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;
