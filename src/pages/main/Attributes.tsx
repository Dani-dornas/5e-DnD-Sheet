import './Attributes.css';
import { 
  Charisma, 
  Constitution, 
  Dexterity, 
  Intelligence, 
  Strengh, 
  Wisdom 
} from './Attributes/index';

export const Attributes = () => {
  return (
    <form action="" id='attributes-form'>
      <Strengh />
      <Dexterity />
      <Constitution />
      <Intelligence />
      <Wisdom />
      <Charisma />
    </form>
  );
};
